const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//array to store the books
const books = [];

//middleware
app.use(bodyParser.json());
//Route to serve index.html
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});
//Route to get all books
app.get('/books',(req, res)=>{
    res.json(books);
});
//Route to add a book;
app.post('/books', (req, res)=>{
    const {title, author, publishedDate} = req.body;
    //generate unique id
    const id = Date.now().toString();
    //create new book object
    const book ={
        id,
        title,
        author,
        publishedDate
    }
    //add book to collection
    books.push(book);
    //send to book as response
    res.json(book);

});
//route to delete a book;
app.delete('/books/:id', (req, res)=>{
    const id = req.params.id;
    //find index to the book by id;
    const index = books.findIndex(book => book.id === id);
    if(index !== -1){
        const deletedBook = books.splice(index,1)[0];
        res.send('Book successfully deleted');
    }else{
        res.status(404).json({error : 'Book not found'});

    }
});

app.listen(3000, ()=>{
    console.log("book collection is running")
})
