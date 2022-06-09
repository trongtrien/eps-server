const Epsinfo = require('../models/epsinfoModel')
const epsinfoCtrl = {
    // Get  EpsInfo data
    getEpsInfo: async (req, res) => {
        Epsinfo.getAllData((err, data) => {
          if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving" })
          else res.send(data);
        })
    },

    // Post EpsInfo
    postEpsInfo: async (req, res) => {
        // Validate request
            if (!req.body) {
              res.status(400).send({
                message: "Content can not be empty!"
              });
            }
      
             // Create a blog
             const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
             const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
             const date = new Date()
             const time = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`

             const epsinfo = new Epsinfo({
               page: req.body.page,
               sourse: req.body.sourse,
               createAt: time,
               title: req.body.title,
               imgURL: req.body.imgURL,
               titlechild: req.body.titlechild,
               description: req.body.description,
               content: req.body.content
             });
      
              // Save Epsinfo in the database
            Epsinfo.create(epsinfo, (err, data) => {
              if (err)
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the Epsinfo."
                });
              else res.send(data);
            });
    },

    // add pageviw
    addpageView: async (req, res) => {
      // Validate Request
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      Epsinfo.pageView(
        req.params.id,
        new Epsinfo(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Không tìm thấy bài viết với id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating view with id " + req.params.id
              });
            }
          } else
          res.status(500).send({
            message: "add pageview Success " + req.params.id
          });
          console.log(("add pageview Success"))
        }
      );
  },

    // Update EpsInfo by Id
    putEpsInfo: async (req, res) => {
        // Validate Request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }
        // console.log(req.body);
      
        Epsinfo.updateById(
          req.params.id,
          new Epsinfo(req.body),
          (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found Epsinfo with id ${req.params.id}.`
                });
              } else {
                res.status(500).send({
                  message: "Error updating Epsinfo with id " + req.params.id
                });
              }
            } else
            console.log(("update Epsinfo Success"))
            res.send(data)
          }
        );
    },

    deleteEpsInfo: async (req, res) => {
        Epsinfo.DeleteById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Epsinfo with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Could not delete Epsinfo with id " + req.params.id
              });
            }
          } else res.send({ message: `Epsinfo was deleted successfully!` });
        });
    },
    findEpsInfoById: async (req, res) => {
        Epsinfo.findById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Epsinfo with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Epsinfo with id " + req.params.id
              });
            }
          } else res.send(data);
        });
    }
    }

module.exports = epsinfoCtrl





