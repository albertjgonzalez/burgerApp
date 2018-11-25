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
    eat: (burger_id) =>{
    orm.eatBurger(burger_id);
}
};

module.exports = burger;