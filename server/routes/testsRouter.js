const express = require("express");
const router = express.Router();

const testsController = require("../controllers/testsController");

router.get("/", testsController.getTests);
router.post("/", testsController.newTest);
router.patch("/:id", testsController.updateTest);
router.delete("/:id", testsController.deleteTest);

router.get("/test/:id", testsController.getTest);

// /**
//  * get /lists/:listId/tasks
//  * purpose: Get tasks
//  */
// app.get("/lists/:listId/tasks", (req, res) => {
//   Task.find({
//     _listId: req.params.listId,
//   }).then((tasks) => res.json({ message: "success", tasks }));
// });

// /**
//  * post /lists/:listId/tasks/:id
//  * purpose: create a task
//  */
// app.post("/lists/:listId/tasks", (req, res) => {
//   let newTask = new Task({
//     title: req.query.title,
//     _listId: req.params.listId,
//   });

//   newTask.save().then((newTask) => {
//     res.json({ newTask, message: "Task wos created!" });
//   });
// });

// /**
//  * PATCH /lists/:listId/tasks/:id
//  * purpose: Update a list
//  */
// app.patch("/lists/:listId/tasks/:id", (req, res) => {
//   if (req.body.title && req.params.id) {
//     Task.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $set: req.body,
//       }
//     ).then(() => {
//       res.json({ message: "Task wos updated!" });
//     });
//   } else {
//     res.json({
//       message:
//         "Task wos not updated! Check the inputs (title and id does not exsist)",
//     });
//   }
// });

// /**
//  * DELETE /lists/:listId/tasks/:id
//  * purpose: Delete a task
//  */
// app.delete("/lists/:listId/tasks/:id", (req, res) => {
//   Task.findOneAndDelete({ _id: req.params.id }).then(() => {
//     res.json({
//       message: "Task wos deleted!",
//     });
//   });
// });

module.exports = router;
