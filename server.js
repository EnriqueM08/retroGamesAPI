const express = require('express');
const port = 8080;
const mysql = require('mysql')
const cors = require('cors')
const app = express();

app.use(cors());

const db = mysql.createConnection({
    host            : 'retro-games-server.mysql.database.azure.com',
    user            : 'RetroAdmin',
    password        : 'Games$Music',
    database        : 'retrogamesdb'
});

app.get('/', (req, res) => {
    const sql = "INSERT intO useraccounts (username, password) VALUES ('TEST', '1234')";
    db.query(sql, (err, result) => {
        if(err) {
            console.log(err)
        } 
        else {
            console.log(result)
            return res.json(result);
        }
    })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});