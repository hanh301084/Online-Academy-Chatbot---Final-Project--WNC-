const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.get("/", function(req, res) {
    res.json({
        message: "hello api"
    });
})
app.use('/api/courses', require('./routes/course.route'));

const PORT = 8000;
app.listen(PORT, function() {
    console.log('Online Course api is running');
})


