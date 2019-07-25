var routes = require('express').Router();
var db = require('../dao/db');
var authorDao = require('../dao/authorDao');

routes.get('/authors',function(req,res){
    authorDao.getAllAuthors(function(error, result){
      if(error) throw error;
      res.setHeader('Content-Type', 'application/json');
      res.send(result);
    });
});

routes.get('/authors/:id',function(req,res){
  authorDao.getAuthorById(req.params.id, function(error, result){
    if(error) throw error;
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  });
});

routes.post('/authors', function(req, res){
  var author = req.body;
  console.log(author);
  authorDao.addAuthor(author, function(err, result){
    if(err){
      res.status(400);
      res.send('Add Author Failed!');
    }
    res.status(201);
    res.send('Add Author Successful!');
  });

});

routes.delete('/authors/:id', function(req, res){
  authorDao.removeAuthor(req.params.id, function(err, result){
    if(err){
      res.status(400);
      res.send('Delete Author Failed!');
    }
    res.send('Delete Author Successful!');
  });
});

routes.patch('/author/:id', function(req, res){
  var author = req.body
  author.author_id = req.params.id
  authorDao.updateAuthor(author, function(err, result){
    if(err){
      res.status(400);
      res.send('Update Author Failed!');
    }
    res.send('Update Author Successful!');
  });
});

module.exports = routes;
