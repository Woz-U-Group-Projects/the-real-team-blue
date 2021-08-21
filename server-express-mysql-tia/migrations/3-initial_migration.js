'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "Admin" to table "employees"
 *
 **/

var info = {
    "revision": 3,
    "name": "initial_migration",
    "created": "2021-08-20T21:26:13.442Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "employees",
        "Admin",
        {
            "type": Sequelize.BOOLEAN,
            "field": "Admin",
            "defaultValue": false,
            "allowNull": false
        }
    ]
}];

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
