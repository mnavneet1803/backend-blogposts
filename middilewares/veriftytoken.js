const connection = require("../config/db")

const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth.config")

const verifyToken = async (req,res,next)=>{

    let token = req.headers.authorization
    console.log(token)
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        })
    }

    jwt.verify(token, authConfig.secret,
        (err, decoded) => {
            if (err) {
                console.log(err)
                return res.status(401).send({
                    message: "Unauthorized!"
                })
            }
          else{
         
            req.id = decoded.id
            console.log(">>>>>>>",req.id)
            next()
          }
        })
}
const isAdmin = async (req,res,next)=>{

    // const user = await User.find({
    //     email: req.email
    // })
    await connection.query(`SELECT  id FROM user where id = "${req.id}"`, function (err, result, fields) {
            console.log("result id",result[0].id)
   
    if( result[0].id== 1) {
        next();
    } else {
        res.status(403).send({
            
            message: "Admin Required!"
        })
        return;
    }
})
}

module.exports = {
    verifyToken:verifyToken,
    isAdmin:isAdmin
}