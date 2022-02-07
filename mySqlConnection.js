import mysql, { } from "mysql";

class MySqlConnection {
  constructor(serverName, databaseName, userName, userPassword) {
    this.con = mysql.createConnection({
      host: serverName,
      database: databaseName,
      user: userName,
      password: userPassword,
    });
  }

  getAll(requ, resp) {
      this.con.query("SELECT * FROM employee", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        resp.status(200).json(result);
      });
  }

  login(requ, resp) {
        this.con.query(`SELECT * FROM employee where email='${requ.body.email}' and password='${requ.body.password}'`, (err, result, fields) => {
          this.con.query;
          if (err) throw err;
          console.log(result.length);
          if(result.length > 0){
            resp.status(200).json({...result[0], isLoginSuccessful: true});
          }
          else{
            resp.status(200).json({isLoginSuccessful: false});
          }
        });
  }
}

export default MySqlConnection;
