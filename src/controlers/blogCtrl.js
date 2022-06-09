const Blog = require('../models/blogModel')
const blogCtrl = {
    // Get  blog data
    getblog: async (req, res) => {
        Blog.getAllData((err, data) => {
          if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving" })
          else res.send(data);
        })
    },

    // Post blog
    postblog: async (req, res) => {
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

              const blog = new Blog({
                page: req.body.page,
                sourse: req.body.sourse,
                createAt: time,
                title: req.body.title,
                imgURL: req.body.imgURL,
                titlechild: req.body.titlechild,
                description: req.body.description,
                content: req.body.content
              });
      
              // Save blog in the database
            Blog.create(blog, (err, data) => {
              if (err)
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the blog."
                });
              else 
              res.status(200).send('Success')
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
    
      Blog.pageView(
        req.params.id,
        new Blog(req.body),
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

    // Update blog by Id
    putblog: async (req, res) => {
        // Validate Request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }
        // console.log(req.body);
      
        Blog.updateById(
          req.params.id,
          new Blog(req.body),
          (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found blog with id ${req.params.id}.`
                });
              } else {
                res.status(500).send({
                  message: "Error updating blog with id " + req.params.id
                });
              }
            } else
            console.log(("update blog Success"))
            res.send(data)
          }
        );
    },

    deleteblog: async (req, res) => {
        Blog.DeleteById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found blog with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Could not delete blog with id " + req.params.id
              });
            }
          } else res.send({ message: `blog was deleted successfully!` });
        });
    },
    findblogById: async (req, res) => {
        Blog.findById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found blog with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving blog with id " + req.params.id
              });
            }
          } else res.send(data);
        });
    }
    }

module.exports = blogCtrl
