var express = require('express');
var router = express.Router();
var models = require('../models');
const { signUser } = require('../services/auth');

//Inventory List

router.get('/', function(req, res, next) {
  models.inventory.findAll({}).then(inventoryFound => {
    res.json(inventoryFound)
  });
});

router.get('/list', function(req, res, next) {
  models.inventory.findAll({}).then(inventoryFound => {
    res.render('list', {
      ProductID: req.body.productId,
      ProductDesc: req.body.productDesc,
      ProductQty: req.body.productQty,
      inventories: inventoryFound
    });
  });
});

router.get('/addinventory', function(req, res, next) {
  models.inventory.findAll({}).then(inventoryFound => {
  res.render('addinventory', {
    ProductID: req.body.productId,
    ProductDesc: req.body.productDesc,
    ProductQty: req.body.productQty,
    inventories: inventoryFound
  });
});
});

//Modify an Inventory: Admin Only (Will be on Admin Profile/ No Auth Required Here) (TO BE CHANGED)

//Delete an Inventory: Admin Only (Will be on Admin Profile/ No Auth Required Here) (TO BE CHANGED)

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
