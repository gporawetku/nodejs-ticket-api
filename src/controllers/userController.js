const { User } = require("../database/models");

const all = async (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const create = async (req, res) => {
  User.create({
    firstName: "lorem",
    lastName: "lorem",
    email: "lorem@lorem.com",
  })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  all,
  create,
};
