const express = require('express');
    app = express();

const bodyParser = require('body-parser'),
        urlencodedParser = bodyParser.urlencoded({ extended: false });

const mailer = require('./nodemailer');

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
});

app.get('/about', function(req, res){
    res.render('about')
});

app.get('/buy_pc', function(req, res){
    res.render('buy_pc')
});

app.get('/succsess_form', function(req, res){
    res.render('succsess_form')
});


app.post('/buy_pc', urlencodedParser, function(req, res){
    console.log(req.body);

    async function email(){
        let date = new Date;

        const message={
            to: '"mihaylonekrasow@yandex.ru"',
            subject: 'Заказ № ('+date.getDate()+' . '+date.getMonth()+' | '+date.getHours()+':'+date.getMinutes()+')',
            html: `
                <h2>ФИО: <b>`+req.body.fio+`</b></h2>
                <h3>Телефон: <b>`+req.body.tel+`</b></h3>
                <h3>Почта: <b>`+req.body.email+`</b></h3>
            `,
        }
        mailer(message);

    }

    async function cb(){
        await email();
        res.redirect('/succsess_form');
    }
    cb();
});


app.listen(3000, function () {
    console.log('Сервер запущен..');
});