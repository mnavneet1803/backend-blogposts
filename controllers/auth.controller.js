const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("../config/db");
const config = require("../config/auth.config");


exports.signup = async (req,res)=>{
   
    let name = req.body.name||""
    let email = req.body.email||""
       let password= req.body.password||""
               const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
    try {
        if (name.length === 0 || email.length === 0 || password.length === 0) {
            res.status(409).send({
                "status": "false",
                "message": "Please fill all required fields: title, content, and imageUrl."
            });}
            else{
                const sql = `INSERT INTO user (name, email, password) VALUES ("${name}", "${email}", "${hashedPassword}")`;


        connection.query(sql, function (err, result1) {
            if (err) {
                console.log(err);
                res.status(500).send({
                    message: "Some internal error occurred",
                });
                return;
            }
                
            console.log("1 record inserted");
            res.status(201).send({
                status: true,
                data: req.body,
            });
        });
            }

        
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            "message": "Some internal error occured"
        })
        
    }
}




exports.signin = async (req, res) => {
    const email = req.body.email.toString()||""
    const password = req.body.password.toString()||""

    try {
        if ( email.length === 0 || password.length === 0) {
            res.status(409).send({
                "status": "false",
                "message": "Please fill all required fields: title, content, and imageUrl."
            });}
        else{
            connection.query(`SELECT * FROM user WHERE email = "${email}"`, async function (err, result, fields) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: "Some internal error occurred",
                    });
                    return;
                }
    
                if (result.length === 0) {
                    res.status(400).send({
                        message: "Failed! User email doesn't exist!",
                    });
                    return;
                }
    
                const passwordMatch = await bcrypt.compare(password, result[0].password);
    
                if (!passwordMatch) {
                    res.status(401).send({
                        message: "Invalid password!",
                    });
                    return;
                }
    
                const token = jwt.sign({ id: result[0].id }, config.secret, {
                    expiresIn: 86400, // 24 hours
                });
    
                res.status(200).send({
                    email: email,
                    accessToken: token
                })
                console.log("sign in successfully")
                return
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Some internal error occurred",
        });
    }
}

