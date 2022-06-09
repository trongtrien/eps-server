const db = require('../../config/Db_config')
const Question = require('../models/examsModel')
const examsCtrl = {
    // Get  Question data
    getQuestion: async (req, res) => {
        Question.getAllData((err, data) => {
          if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving" })
          else res.send(data);
        })
    },

    // Post Question
    postQuestion: async (req, res) => {
        // Validate request
            if (!req.body) {
              res.status(400).send({
                message: "Content can not be empty!"
              });
            }
              // Create a Question
            const question = new Question({
              question: req.body.question,
              answer: req.body.answer,
              answerText1: req.body.answerText1,
              answerText2: req.body.answerText2,
              answerText3: req.body.answerText3,
              answerText4: req.body.answerText4,
              exam_id:req.body.exam_id,
              dntitle:req.body.dntitle
            });
      
              // Save Question in the database
            Question.create(question, (err, data) => {
              if (err)
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the Question."
                });
              else res.send(data);
            });
    },

    // Update Question by Id
    putQuestion: async (req, res) => {
        // Validate Request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }
        // console.log(req.body);
      
        Question.updateById(
          req.params.id,
          new Question(req.body),
          (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found Question with id ${req.params.id}.`
                });
              } else {
                res.status(500).send({
                  message: "Error updating Question with id " + req.params.id
                });
              }
            } else
            console.log(("update Question Success"))
            res.send(data)
          }
        );
    },

    deleteQuestion: async (req, res) => {
        Question.DeleteById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Question with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Could not delete Question with id " + req.params.id
              });
            }
          } else res.send({ message: `Question was deleted successfully!` });
        });
    },
    findQuestionById: async (req, res) => {
        Question.findById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Question with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Question with id " + req.params.id
              });
            }
          } else res.send(data);
        });
    }
    }

module.exports = examsCtrl
