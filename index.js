const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const port = 1402;

const app = express();

app.use(morgan('combined'));
app.use(expressLayouts);
// cap quyền truy cập cho các file tĩnh (static file): css jquery.js, images...
app.use(express.static("public"));// cho quyền truy cập toàn bộ các file tĩnh bên trong thư mục public

// Template engine

// khai bao su dung view engine la ejs
app.set('views', path.join(__dirname, 'views'));
app.set('layout', './layouts/main');
app.set("view engine","ejs");

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/News', (req, res) => {
    res.render('news')
})

app.get('/News/Stars-01', (req, res) => {
    res.render('news/stars01')
})

app.get('/Observing', (req, res) => {
    res.render('observing')
})

app.get('/SolarSystem', (req, res) => {
    res.render('solar')
})

app.get('/Constellation', (req, res) => {
    res.render('constellation')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})