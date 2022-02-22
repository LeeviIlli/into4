const db = require('../database');

const borrower = {
  getById: function(id, callback) {
    return db.query('select * from borrower where id_borrower=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from borrower', callback);
  },
  add: function(borrower, callback) {
    return db.query(
      'insert into borrower (fname,lname,streetname) values(?,?,?)',
      [borrower.fname, borrower.lname, borrower.streetname],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from borrower where id_borrower=?', [id], callback);
  },
  update: function(id, borrower, callback) {
    return db.query(
      'update borrower set fname=?,lname=?, streetname=? where id_borrower=?',
      [borrower.fname, borrower.lname, borrower.streetname, id],
      callback
    );
  }
};
module.exports = borrower;