const db = require('../../config/Db_config')
const Lesson = require('../models/lessonModel')
const lessonCtrl = {
    // Get  Lesson data
    getLesson: async (req, res) => {
        Lesson.getAllData((err, data) => {
          if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving" })
          else res.send(data);
        })
    },

    // Post Lesson
    postLesson: async (req, res) => {
        // Validate request
            if (!req.body) {
              res.status(400).send({
                message: "Content can not be empty!"
              });
            }
      
              // Create a Lesson
            const lesson = new Lesson({
              title: req.body.title,
              videoURL: req.body.videoURL,
              content: req.body.content
            });
      
              // Save lesson in the database
              Lesson.create(lesson, (err, data) => {
              if (err)
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the lesson."
                });
              else res.send(data);
            });
    },

    // Update Lesson by Id
    putLesson: async (req, res) => {
        // Validate Request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }
        // console.log(req.body);
      
        Lesson.updateById(
          req.params.id,
          new Lesson(req.body),
          (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found Lesson with id ${req.params.id}.`
                });
              } else {
                res.status(500).send({
                  message: "Error updating Lesson with id " + req.params.id
                });
              }
            } else
            console.log(("update Lesson Success"))
            res.send(data)
          }
        );
    },

    deleteLesson: async (req, res) => {
        Lesson.DeleteById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Lesson with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Could not delete Lesson with id " + req.params.id
              });
            }
          } else res.send({ message: `Lesson was deleted successfully!` });
        });
    },
    findLessonById: async (req, res) => {
        Lesson.findById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Lesson with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Lesson with id " + req.params.id
              });
            }
          } else res.send(data);
        });
    }
    }

module.exports = lessonCtrl





