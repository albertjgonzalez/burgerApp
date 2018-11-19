 const orm = require('../config/orm');


var burger = {
    all: (callback) =>{
        orm.selectAll('burgers', (results) =>{
            callback(results);
        });
    },
    add: (colInput) =>{
        orm.addBurger(colInput);
    },
    delete: (burger_id) =>{
    orm.deleteBurger(burger_id);
}
};

module.exports = burger;