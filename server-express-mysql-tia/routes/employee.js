var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth'); //<--- Add authentication service

router.get('/', function(req, res, next) {
  models.employee.findAll({}).then(employeeFound => {
    res.json(employeeFound)
  });
});


//Employee and Admin Signup
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next) {
  models.employee
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: { //defaults if username cannot be found
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: authService.hashPassword(req.body.password), //<--- has password within auth.js
        Admin: req.body.admin 
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.send('User successfully created');
        //res.redirect('/employee/login');
      } else {
        res.send('This user already exists');
      }
    });
});


//Employee and Admin Login
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function (req, res, next) {
  models.employee.findOne({
    where: {
      Username: req.body.username,
    }
  }).then(user => {
    if (!user) { //if user does not exist !
      console.log('User not found')
      return res.status(401).json({
        message: "Login Failed"
      });
    } else { //if username exists, then use compare pass function from auth.js
      let passwordMatch = authService.comparePasswords(req.body.password, user.Password);
      if (passwordMatch) {
        let token = authService.signUser(user);
        res.cookie('jwt', token);
        //localStorage.setItem('token', token);
        res.send("Successful");
        console.log('Successful Login');
        //res.redirect('/employee/profile');
      } else {
        console.log('Wrong password');
        res.send('Wrong password');
      }
    }
  });
});


//Employee profile view: Admin Access Only
router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt;
 
  if (token) {
    authService.verifyUser(token)
      .then(user => {
        if (user) {
          let admin = user.Admin;
          if (admin == 1) {
            console.log("Admin");
            models.employee.findAll({}).then(employeesFound => {
            res.render('admin', 
              {
              Username: user.Username,
              FirstName: user.FirstName,
              LastName: user.LastName,
              Email: user.Email,
              EmployeeID: user.EmployeeID,
              employees: employeesFound
              }
              )});
            } else {  
          console.log("Normal employee");
          res.render('profile', 
            {
              FirstName: user.FirstName,
              LastName: user.LastName,
              Email: user.Email,
              Username: user.Username
            });
            }
        } else {
          res.status(401);
          res.send('Invalid authentication token');
        }})
  } else {
    res.status(401);
    res.send('Must be logged in');
  }
});


//Delete an Employee: Admin Only (Will be on Admin Profile/ No Auth Required Here) (TO BE CHANGED)
/*router.delete("/:employeeid", function(req, res, next) {
  let id = parseInt(req.params.employeeid);
  models.employee.findByPk(id)
    .then(employee => employee.destroy())
    .then(() => res.send({ id }))
    .catch(err => res.status(400).send(err));
});*/

router.delete("/employee/:id", function (req, res, next) {
  let employeeId = parseInt(req.params.id);
  models.employee
    .destroy({
      where: { employee_id: employeeId }
    })
    .then(result => res.send('Employee Deleted'))
    .catch(err => { 
      res.status(400); 
      res.send("There was a problem deleting the user. Please make sure you are specifying the correct id."); 
    }
);
});


//Employee logout
router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) });
  //res.redirect('/employee/login');
});





module.exports = router;

