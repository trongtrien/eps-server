const db = require('../../config/Db_config')

// constructor
class Blog {
  constructor(blog) {
    this.page = blog.page;
    this.sourse = blog.sourse;
    this.createAt = blog.createAt;
    this.title = blog.title;
    this.imgURL = blog.imgURL;
    this.titlechild = blog.titlechild;
    this.description = blog.description;
    this.content = blog.content;
  }
  // add
  static create(newblog, result) {
    db.query("INSERT INTO blog SET ?", newblog, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created blog: ", { id: res.insertId, ...newblog });
      result(null, { id: res.insertId, ...newblog });
    });
  }

  // Route for like
  static pageView(id, blog, result) {
    db.query("UPDATE blog SET pageview = pageview + 1 WHERE id = ?",[id],(err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found blog with the id
          result({ kind: "not_found" }, null);
          return;
        }
        result(null, { id: id, ...blog });
      }
    );
  }
  // get
  static getAllData(result) {
    db.query("SELECT * FROM blog", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("get data done");
      result(null, res);
    });
  }
  //   update
  static updateById(id, blog, result) {
    db.query(
      "UPDATE blog SET title = ?, content = ? WHERE id = ?",
      [blog.title, blog.content, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found blog with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated blog: ", { id: id, ...blog });
        result(null, { id: id, ...blog });
      }
    );
  }
  // Delete
  static DeleteById(id, result) {
    db.query("DELETE FROM blog WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found blog with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted blog with id: ", id);
      result(null, res);
    });
  }
  static findById(id, result) {
    db.query(`SELECT * FROM blog WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found blog: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found blog with the id
      result({ kind: "not_found" }, null);
    });
  }
}
 

module.exports = Blog;
