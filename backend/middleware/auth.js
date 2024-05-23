import jwt from "jsonwebtoken"


const authMiddleware = (req, res, next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json ({success:false,message:"not Authorized Login Again"})

        
    }
    try {
        const token_decode = jwt .verify(token,process.env.JWT_SECRET);                                                     
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        res.json({success:false,message:"Error"})
        
    }
}

export default authMiddleware;