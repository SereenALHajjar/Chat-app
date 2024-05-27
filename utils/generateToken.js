import jwt from 'jsonwebtoken' ;

const generateTokenSetCookie = (userId , res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '15d'});
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: 'strict'

    })
}
export default generateTokenSetCookie