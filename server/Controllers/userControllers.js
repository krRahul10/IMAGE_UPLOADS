const conn = require("../db/connection");
const moment = require("moment");

exports.userRegister =  (req, res) => {
  const { fname } = req.body;
  const { filename } = req.file;

  console.log("data")

  if (!fname || !filename) {
    res.status(422).json("please all details");
  }

  try {
    const Date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

    conn.query(
      "INSERT INTO usersdata SET ?",
      { username: fname, userimg: filename, date: Date },
      (err, result) => {
        if (err) {
          console.log("error",err);

        } else {
          console.log("Data added in database");
          res.status(201).json({ data: req.body });
        }
      }
    );
  } catch (error) {
    res.status(422).json(error);
  }
};
