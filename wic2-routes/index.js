const express = require('express');
const bodyParser = require('body-parser');
const blogRouter = require('./routes/blog')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use('/blog', blogRouter)


const obj = {
    articles: [
        {
            id: '1',
            title: 'article 1',
            content: 'CONTENT 1'
        },
        {
            id: '2',
            title: 'article 2',
            content: 'CONTENT 2'
        }
    ]
}

app.get('/', (req, res) =>{
    console.log(req.url);
    res.send('hello')
})

app.get('/about', (req, res) =>{
    res.render('index', {name: 'Borat'});
})

app.get('/articles', (req, res) =>{
    res.render('articles', {obj: obj});
})

app.get('/form', (req, res) =>{
    res.render('form');
})

app.post('/', (req, res) =>{
    const arg = Number(obj.articles[obj.articles.length - 1].id) + 1

    const newArticle = {
        id: arg.toString(),
        title: req.body.title,
        content: req.body.content
    }
    obj.articles.push(newArticle)
    res.send('ok');
})

app.get('/article/:id', (req, res) =>{
    obj.articles.forEach(val =>{
        if(val.id === req.params.id){
            res.render('article', {
                title: val.title,
                content: val.content
            });
        }
    })
})

app.listen(3000, () =>{
    console.log('listening');
})
