import db from "../config/db.js";

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createUser = (user) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO usuarios (nombres, apellidoPaterno, apellidoMaterno, genero, telefono, correo)  VALUES (?, ?, ?, ?, ?, ?)";

    const { nombre, apellidoPaterno, apellidoMaterno, genero, telefono, correo } = user;

    db.execute(query, [nombre, apellidoPaterno, apellidoMaterno, genero, telefono, correo])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE usuarios SET nombre = ?, apellidoPaterno = ?, , apellidoMaterno = ?, genero = ? , telefono = ?, , correo = ? WHERE id = ?";

    const { nombre, apellidoPaterno, apellidoMaterno, genero, telefono, correo } = user;

    db.execute(query, [nombre, apellidoPaterno, apellidoMaterno, genero, telefono, correo])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const query =
      "DELETE FROM user WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
