const db = require('../../config/Db_config')

// constructor
const Epsinfo = function(epsinfo) {
  this.page = epsinfo.page;
  this.sourse = epsinfo.sourse;
  this.createAt = epsinfo.createAt;
  this.title = epsinfo.title;
  this.imgURL = epsinfo.imgURL;
  this.titlechild = epsinfo.titlechild;
  this.description = epsinfo.description;
  this.content = epsinfo.content;
};
 
// add
Epsinfo.create = (newEpsinfo, result) => {
  db.query("INSERT INTO epsinfo SET ?", newEpsinfo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created epsinfo: ", { id: res.insertId, ...newEpsinfo });
    result(null, { id: res.insertId, ...newEpsinfo });
  });
};

// Route for like
Epsinfo.pageView = (id, blog, result) => {
  db.query("UPDATE epsinfo SET pageview = pageview + 1 WHERE id = ?",[id],(err, res) => {
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
Epsinfo.getAllData = (result) => {
    db.query("SELECT * FROM epsinfo", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("get data done");
      result(null, res);
    });
  };


//   update
Epsinfo.updateById = (id, epsinfo, result) => {
    db.query(
      "UPDATE epsinfo SET title = ?, content = ? WHERE id = ?",
      [epsinfo.title, epsinfo.content, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found epsinfo with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated epsinfo: ", { id: id, ...epsinfo });
        result(null, { id: id, ...epsinfo });
      }
    );
  };

// Delete
Epsinfo.DeleteById = (id, result) => {
    db.query("DELETE FROM epsinfo WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found epsinfo with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted epsinfo with id: ", id);
      result(null, res);
    });
  }


Epsinfo.findById = (id, result) => {
  db.query(`SELECT * FROM epsinfo WHERE page = '${id}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found epsinfo: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found epsinfo with the id
    result({ kind: "not_found" }, null);
  });
}


module.exports = Epsinfo;
