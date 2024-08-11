const userRouter = require("express").Router();

const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  password: "777888666aA@",
  host: "localhost",
  database: "kodukkuDB",
});

userRouter.get("/createdb", (req, res) => {
  try {
    const q = "create schema kodukkuDB";
    db.query(q, (err, result) => {
      if (err) res.json(err);
      return res.json({ message: "db create successfull" });
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/createTable", (req, res) => {
  try {
    const q =
      "create table  `kodukkuDB`.`user` (`id` int auto_increment not null,`name` varchar(255),`email` varchar(255),primary key (`id`))";
    db.query(q, (err, result) => {
      if (err) res.json(err);
      return res.json({ message: "table create successfull" });
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/get", (req, res) => {
  try {
    const q = "select * from user";
    db.query(q, (err, result) => {
      if (err) res.json(err);
      return res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/get/:id", (req, res) => {
  const ide = [req.params.id];
  try {
    const q = "select * from user where id=?";
    db.query(q, [ide], (err, result) => {
      if (err) res.json(err);
      return res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/create", (req, res) => {
  const { name, email } = req.body;

  try {
    const q = "insert into user (`name`,`email`) values(?)";
    const val = [name, email];
    db.query(q, [val], (err, result) => {
      if (err) res.json(err);
      return res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.put("/update/:id", (req, res) => {
  const ide = [req.params.id];
  const { name, email } = req.body;
  try {
    const q = "update  user set `name`=?,`email`=? where id=?";
    const val = [name, email];
    db.query(q, [...val, ide], (err, result) => {
      if (err) res.json(err);
      return res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.delete("/del/:id", (req, res) => {
  const ide = [req.params.id];
  try {
    const q = "delete from user where id=?";
    db.query(q, [ide], (err, result) => {
      if (err) res.json(err);
      return res.json({ message: "data delete succsuffly" });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
