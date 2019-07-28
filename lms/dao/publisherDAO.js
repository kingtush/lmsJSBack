var db = require('./db');

exports.getAllPublishers = function(cb){
    db.query('select * from lms.publisher', function(err, result) {
        cb(err, result);
      });
};

exports.getPublisherById = function(publisherId,cb){
  db.query('select publisher_name from lms.publisher where publisher_id = ?',[publisherId], function(err, result) {
      cb(err, result);
    });
};


exports.addPublisher = function(publisher, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('insert into lms.publisher(publisher_name) values(?)', [publisher.publisher_name], function(err, res){
        if(err){
          db.rollback(function(err, res){
            cb(err, res);
          });
        } 
        db.commit(function(err, res){
          cb(err, res);
        });
      });
    
    });
};

exports.removePublisher = function(publisherId, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('delete from lms.publisher where publisher_id = ?', [publisherId], function(err, res){
        if(err){
          db.rollback(function(err, res){
            cb(err, res);
          });
        } 
        db.commit(function(err, res){
          cb(err, res);
        });
      });
    });
};


//UPDATE `lms`.`publisher` SET `first_name` = 'King' WHERE (`publisher_id` = '3');
exports.updatePublisher = function(publisher, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      
      db.query('update lms.publisher set publisher_name = ? where publisher_id = ?', [publisher.first_name,publisher.last_name,publisher.publisher_id], function(err, res){
        if(err){
          db.rollback(function(err, res){
            cb(err, res);
          });
        } 
        db.commit(function(err, res){
          cb(err, res);
        });
      });
    });
};