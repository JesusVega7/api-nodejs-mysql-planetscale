import * as userServices from "../services/user.service.js";

export const getUsers = (req, res) => {
  userServices
    .getUsers()
    .then((result) => {
      res.status(200).json({
        message: "Users retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  userServices
    .getUser(id)
    .then((result) => {
      res.status(200).json({
        message: "User retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createUser = (req, res) => {
  const user = req.body;
  userServices
    .createUser(user)
    .then((userWithId) => {
      console.log(user)
      res.status(200).json({
        message: "User created successfully",
        data: userWithId,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const updateUser = (req, res) => {
  const user = req.body;
  const { id } = req.params;

  userServices
    .updateUser(id, user)
    .then(() => {
      res.status(200).json({
        message: "User updated successfully",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  userServices
    .deleteUser(id)
    .then(() => {
      res.status(200).json({
        message: "User deleted successfully"
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
