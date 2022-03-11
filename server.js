const path = require('path');
const cors = require('cors');
const express = require('express');
let request = require('request')
const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/getNews', (req, res)=>{
    let Today = new Date()
    const fromDate = Today.getFullYear()+'-'+(Today.getMonth()+1).toString().padStart(2, '0')+'-'+(Today.getDate()-3).toString().padStart(2, '0')
    const toDate = Today.getFullYear()+'-'+(Today.getMonth()+1).toString().padStart(2, '0')+'-'+(Today.getDate()).toString().padStart(2, '0')
    request(
        `https://newsapi.org/v2/everything?q=${req.query.q}&from=${fromDate}&to=${toDate}&apiKey=41c21a62b6d64e2bac349d1adf519e7f`,
        (error, response, body)=>{
            if( !error && response.statusCode == 200){
                res.send(body);
            }
        }
    )  
})

const root = require('path').join(__dirname, 'build');
app.use(express.static(root));

app.use('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 5000, ()=>{
    console.log('server started');
})