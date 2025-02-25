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
      
    const { nombres, apellidoPaterno, apellidoMaterno, genero, telefono, correo } = user;

    db.execute(query, [nombres, apellidoPaterno, apellidoMaterno, genero, telefono, correo])
      .then((result) => {
        const id = result[0].insertId;
        const userWithId = { id, ...user };
        console.log(userWithId, 'wid')
        resolve(userWithId);
      })
      .catch((err) => reject(err));
  });
};

export const updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE usuarios SET nombres = ?, apellidoPaterno = ?,  apellidoMaterno = ?, genero = ? , telefono = ?,  correo = ? WHERE id = ?";

    const { nombres, apellidoPaterno, apellidoMaterno, genero, telefono, correo, } = user;

    db.execute(query, [nombres, apellidoPaterno, apellidoMaterno, genero, telefono, correo, id])
      .then((result) => { resolve(result) })
      .catch((err) => reject(err));
  });
};

export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const query =
      "DELETE FROM usuarios WHERE id = ?";
   console.log( id, 'aidi')
    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
