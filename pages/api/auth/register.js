import bcrypt  from 'bcrypt';
import {pool}  from '../../../config/db';

export default async function registerHandler(req, res){
    
    const {nombre, email, password, password_copy} = req.body;
    
    console.log(nombre, email, password, password_copy);
    const encr_pass = await bcrypt.hash(password, 8);
    const [result] = await pool.query('INSERT INTO usuario SET ?', {
        nombre,
        correo:email,
        password:encr_pass,
        estado:1,
        tipo_usuario:9
      });
    return res.status(200).json({nombre, email, password, encr_pass, id: result.insertId});
   
   }