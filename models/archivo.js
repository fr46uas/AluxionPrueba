

const insert = ({ archivo, fk_usuario }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into archivos (archivo, fk_usuario) values(?,?)', [archivo, fk_usuario], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}

const getById = (pArchivoId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from alumnos where fk_usuario = ?', [pArchivoId], (err, rows) => {
            if (err) reject(err);
            if (rows.length == 1) {
                resolve(rows[0]);
            } else {
                reject('Archivo no encontrado');
            }
        })
    })
}

const updateById = ({ fk_usuario, id }) => {
    return new Promise((resolve, reject) => {
        db.query('update archivo set fk_usuario = ? where id =?', [fk_usuario, id], (err, result) => {
            if (err) reject(err);
            resolve(result)
        });
    })
}

const deleteById = (pArchivoId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from archivo where id = ?', [pArchivoId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};