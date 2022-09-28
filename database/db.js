const myqsl = require('mysql');

const conexion = myqsl.createConnection({
    host: '192.168.1.213',
    user: 'new_user',
    password: 'MyNewPassword',
    database: 'crud_node_js'
});


conexion.connect((error) => {
    if (error) {
        console.error('El error  de la conexion es:' + error);
        return
    }
    console.log('Conectado a la DB');
});

module.exports = conexion;