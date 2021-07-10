const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));


app.get('/', (req, res,next) => {
    const days = {Monday:1,Tuesday:2,Wednesday:3,Thuesday:4,Friday:5,Saturday:6};
    var d=new Date()
    var h = parseInt(d.getHours().toString()) ;
 
    if((h>=9 ||h<=18 ) && (d.getDay().toString()>0 && d.getDay().toString()<6)){
        next()  
    }else{
        res.send("Desoler nous sommes fermer")
    } 
},function(req,res){
    res.render('index.pug', {
        title: 'Home Page'
    });
});

app.get('/service', (req, res) => {
    res.render('service.pug', {
        title: 'About Page'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact.pug', {
        title: 'contact Page'
    });
});

app.listen(3200, () => {
    console.log('Server is running on 8699');

})