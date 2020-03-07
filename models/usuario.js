

const insert = ({ nombre, apellidos, email, password }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (nombre, apellidos, email, password) values (?, ?, ?, ?)', [nombre, apellidos, email, password], (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};

const getById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {

        db.query('select * from usuarios where id = ?', [pUsuarioId], (err, rows) => {
            if (err) reject(err)
            if (rows.length == 1) {
                resolve(rows[0])
            } else {
                reject('Usuario no encontrado')
            }
        });
    });
}

const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where email = ?', [pEmail], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    })
}

module.exports = {

    insert: insert,
    getById: getById,
    getByEmail: getByEmail,
}