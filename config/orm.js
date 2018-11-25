var connection = require("./connection.js");

var orm = {
    selectAll: (tableInput, callback) => {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString,[tableInput],(err,data) =>{
        if (err) console.log(err);
        callback(data);
    });
},
addBurger: (colInput) =>{
    var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES(?, FALSE)";
    connection.query(queryString,[colInput],(err,data) =>{
        if (err) console.log(err);
        return data;
    })
},
eatBurger: (burger_id) =>{
    console.log('id:'+burger_id)
    var queryString = 'Update burgers SET devoured = TRUE WHERE id = ?'
    connection.query(queryString,[burger_id], (err,data )=>{
        if (err) console.log(err);
        console.log(data)
        return data;
    })
}
}

module.exports = orm; 
