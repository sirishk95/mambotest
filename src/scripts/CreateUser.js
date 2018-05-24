function create(user, callback) {
    var connection = mysql({
      host: 'localhost',
      user: 'me',
      password: 'secret',
      database: 'userAuth_db'
    });
  
    connection.connect();
  
    var query = "INSERT INTO users SET ?";
  
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) { return callback(err); }
      var insert = {
        password: hash,
        email: user.email
      };
      connection.query(query, insert, function (err, results) {
        if (err) return callback(err);
        if (results.length === 0) return callback();
        callback(null);
      });
    });
  
  }