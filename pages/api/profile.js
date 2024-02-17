import { verify } from "jsonwebtoken";

export default function profileHandler(req, res) {

    const { tokenUser } = req.cookies;

    if(!tokenUser){
        res.status(401).json({error: 'No token'});
    }

    try {
        // const secret = new TextEncoder().encode(
        //     'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
        //   )
        const secret = new TextEncoder().encode(
            'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
        )
        const user = verify(tokenUser, secret);
        console.log(user);

        return res.json({
            user: user.username,
            email: user.email
        });
    } catch (error) {
        return res.status(401).json({error: "invalid token"})
    }


}