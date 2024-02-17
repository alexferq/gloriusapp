import jwt from 'jsonwebtoken';
import { serialize } from "cookie";
import { pool } from '../../../config/db';
import bcrypt from 'bcrypt';

export default async function loginHandler(req, res) {

    const { email, password } = req.body;
    const [rows] = await pool.query(`select * from usuario where correo = "${email}"`);

    if (rows.length === 0) {
        return res.status(401).json({ error: "El usuario digitado no registrado" });
    }

    const usuario_act = rows[0];
    try {
        const encr_resp = await bcrypt.compare(password, usuario_act.password);
        if (encr_resp) {
            const secret = new TextEncoder().encode(
                'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
            );

            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
                email: email,
                username: 'admin'
            }, secret);

            const serialized = serialize('tokenUser', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24 * 5,
                path: '/'
            });

            res.setHeader('Set-Cookie', serialized);
            return res.json('login successfully');

        } else {
            return res.status(401).json({ error: "contraseña incorrecta" });
        }

    } catch (error) {
        return res.status(401).json({ error: "contraseña incorrecta" });
    }

}