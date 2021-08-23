'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "id" from table "inventories"
 * addColumn "Deleted" to table "employees"
 * changeColumn "ProductID" on table "inventories"
 * changeColumn "ProductID" on table "inventories"
 * changeColumn "ProductID" on table "inventories"
 * changeColumn "createdAt" on table "inventories"
 * changeColumn "updatedAt" on table "inventories"
 *
 **/

var info = {
    "revision": 4,
    "name": "initial_migration",
    "created": "2021-08-22T16:18:08.474Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["inventories", "id"]
    },
    {
        fn: "addColumn",
        params: [
            "employees",
            "Deleted",
            {
                "type": Sequelize.BOOLEAN,
                "field": "Deleted",
                "default": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "inventories",
            "ProductID",
            {
                "type": Sequelize.INTEGER,
                "field": "ProductID",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "inventories",
            "ProductID",
            {
                "type": Sequelize.INTEGER,
                "field": "ProductID",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "inventories",
            "ProductID",
            {
                "type": Sequelize.INTEGER,
                "field": "ProductID",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "inventories",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "inventories",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt"
            }
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
