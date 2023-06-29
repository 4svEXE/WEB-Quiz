const { User } = require("../db/models"); //////////////////////////////////////////////////

// /**
//  * GET /user/:login
//  * purpose: Get all tasks
//  */
// exports.getTest = async (req, res) => {
//   Test.findOne({ login: req.params.login }).then((user) => {
//     res.json(user);
//   });
// };

/**
 * GET /user/all
 * purpose: Get all users
 */ exports.getAllUsers = async (req, res) => {
  User.find({}).then((users) => {
    res.json(users);
  });
};

/**
 * POST /user
 * purpose: Craete a new user
 */
exports.newUser = async (req, res) => {
  if (
    req.body.firstName.length >= 3 &&
    req.body.lastName.length > 3 &&
    req.body.email.length > 3 &&
    req.body.password.length > 3 &&
    req.body.login.length > 3 &&
    req.body.avatar.length > 3
  ) {
    let newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,

      login: req.body.login,
      avatar: req.body.avatar,
      level: req.body.level,
      expirience: req.body.expirience,
    });

    newUser.save().then((user) => {
      res.json({ user });
    });
  } else {
    res.json({ message: "User not created" });
  }
};

// /**
//  * PATCH /tests
//  * purpose: Update a test
//  */
// exports.updateTest = async (req, res) => {
//   Test.findOneAndUpdate(
//     { _id: req.params.id },
//     {
//       $set: req.body,
//     }
//   ).then(() => {
//     res.json({
//       message: "Test wos updated!",
//       "req.body": req.body,
//       "req.params.id": req.params.id,
//     });
//   });
// };

// /**
//  * DELETE /tests/:id
//  * purpose: Delete a test
//  */
// exports.deleteTest = async (req, res) => {
//   console.log("Test deleted", req.params.id);

//   Test.findOneAndDelete({ _id: req.params.id }).then(() => {
//     res.json({
//       message: "Test wos deleted!",
//     });
//   });
// };
