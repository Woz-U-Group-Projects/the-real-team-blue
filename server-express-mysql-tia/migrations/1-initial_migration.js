'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "customers", deps: []
 * createTable "inventories", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2021-08-20T20:58:41.088Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "customers",
            {
                "CustID": {
                    "type": Sequelize.INTEGER,
                    "field": "CustID",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING,
                    "field": "FirstName"
                },
                "LastName": {
                    "type": Sequelize.STRING,
                    "field": "LastName"
                },
                "Email": {
                    "type": Sequelize.STRING,
                    "field": "Email"
                },
                "Address": {
                    "type": Sequelize.STRING,
                    "field": "Address"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "inventories",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "ProductID": {
                    "type": Sequelize.INTEGER,
                    "field": "ProductID"
                },
                "ProductName": {
                    "type": Sequelize.STRING,
                    "field": "ProductName"
                },
                "ProductDesc": {
                    "type": Sequelize.STRING,
                    "field": "ProductDesc"
                },
                "ProductQty": {
                    "type": Sequelize.INTEGER,
                    "field": "ProductQty"
                },
                "ProductPrice": {
                    "type": Sequelize.INTEGER,
                    "field": "ProductPrice"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
