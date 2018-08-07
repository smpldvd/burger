const orm = require("../config/orm");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: (columns, values, cb) => {
        orm.insertOne("burgers", columns, values, function(res) {
            cb(res);
        });
    },
    updateOne: (objColValues, conditions, cb) => {
        orm.updateOne("burgers", objColValues, conditions, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;