var routes = require('express').Router();
var db = require('../dao/db');
var bookDao = require('../dao/bookDao');

routes.get('/books',function(req,res){
    bookDao.getAllBooks(function(error, result){
      if(error) throw error;
      res.setHeader('Content-Type', 'application/json');
      res.send(result);
    });
});

routes.post('/books', function(req, res){
  var book = req.body;
  bookDao.addBook(book, function(err, result){
    if(err){
      res.status(400);
      res.send('Add Book Failed!');
    }
    res.status(201);
    res.send('Add Book Successful!');
  });

});

routes.delete('/books/:id', function(req, res){
  bookDao.removeBook(req.params.id, function(err, result){
    if(err){
      res.status(400);
      res.send('Delete Book Failed!');
    }
    res.send('Delete Book Successful!');
  });
});



module.exports = routes;
