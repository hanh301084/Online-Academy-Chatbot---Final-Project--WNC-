const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); //allowed by Access-Control-Allow-Origin -  frontend ket noi den 

const app =express();

app.use(cors());
app.use(express.json()); // use for req.body
app.use(morgan('dev'));

app.get('/', function(req, res){
     res.json({
         message:'hell'
     });
});

//app.use('/actors', require('./routes/actor'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port`);
});