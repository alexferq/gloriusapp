import { verify } from "jsonwebtoken";
import { serialize } from "cookie";

export default function logoutHandler(req, res){
    const {tokenUser} = req.cookies;
    if(!tokenUser){
        res.status(401).json({error: 'No token'});
    }

    try {
        const secret = new TextEncoder().encode(
            'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
        )
        verify(tokenUser, secret);
        const serialized = serialize('tokenUser', null, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        });
        res.setHeader('Set-Cookie', serialized);
        return res.json('logout successfully');

    } catch (error) {
        res.status(401).json({error: 'Invalid token'});
    }






}