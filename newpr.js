
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Qwerty13",
    database: "NEWPR"
});
// connection.connect(function(err){
//     if(err)  {
//     console.log('Error message:) ' + err.message);
//     } else {
//         console.log("Sucessfully connected")
//     }

// })
// connection.query('CREATE DATABASE NEWPR',
//     function(err, result) {
//         if (err) console.log(err);
//         else console.log ('NEW sucessfully created')
//     })
// const sql = `CREATE TABLE users(
//     id int primary key auto_increment,
//     name varchar(255),
//     age int
// )`;
const sql = `INSERT INTO users (name, age) VALUES('Kot', 200)`;
connection.query( sql,
    function(err, result) {
        if (err) console.log(err);
        else console.log ('NEW sucessfully created')
    })
// connection.connect(function(err){
//     if (err) {
//         console.log('Error message: ' + err.message);
//     } else {
//         console.log("Successfully connected")
//     }
// })
connection.end();