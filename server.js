const express = require('express')
const app = express()
const port = 3000

const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5442,
    database: 'swap001',
    user: 'postgres',
    password: 'Inteli@audit2k19'
});

client.connect();

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/list/:table', async (req, res) => {
    const { table } = req.params;
    console.log(`Attempting to return result`);
    let query = `SELECT * FROM ${table}`;
    console.log(`Query: ` + query);
    const results = await client.query(query).catch(console.log);
    let result;
    if (results) {
        result = results.rows;
    } else {
        Console.log(`table is not exist`);
        result = [];
    }
    console.log(`Result is return`);
    console.log(result)
    res.json({ result });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


