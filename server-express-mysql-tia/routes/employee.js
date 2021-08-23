var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth'); //<--- Add authentication service
 

//Employee signup
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
        //res.send('User successfully created');
        res.redirect('/employee/login');
      } else {
        res.send('This user already exists');
      }
    });
});


//Employee login
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
        res.redirect('/employee/profile');
      } else {
        console.log('Wrong password');
        res.send('Wrong password');
      }
    }
  });
});

//Employee profile view
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


//Delete an Employee
router.delete('/admin/editemployee/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  models.employee.destroy({
    where: { EmployeeID: id }
  })
  .then(function(rowDeleted){ // rowDeleted will return number of rows deleted
    if(rowDeleted === 1)
      {console.log('Deleted successfully');}
    }, 
    function(err)
      {console.log(err); } 
  )
});


//Employee logout
router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) });
  res.redirect('/employee/login');
});





module.exports = router;

