var express = require('express');
var router = express.Router();
var models = require('../models');

//Inventory List
router.get('/list', function(req, res, next) {
  models.inventory.findAll({}).then(inventoryFound => {
    res.render('inventory', {
      inventories: inventoryFound
    });
  });
});

router.get('/addinventory', function(req, res, next) {
  res.render('addinventory');
});


//Add products to Inventory list
router.post('/addinventory', function(req, res, next) {
  models.inventory
    .findOrCreate({
      where: {
        ProductID: req.body.productId
      },
      defaults: { 
        ProductName: req.body.productName,
        ProductDesc: req.body.productDesc,
        ProductQty: req.body.productQty,
        ProductPrice: req.body.productPrice
      }
    })
    .spread(function(result, created) {
      if (created) {
        //res.send('User successfully created');
        res.redirect('/inventory/list');
      } else {
        res.send('This product already exists');
      }
    });
});


module.exports = router;

