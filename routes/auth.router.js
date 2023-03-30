const authController = require('../controllers/auth.controller')
module.exports = function authRouter(app){
    console.log("auth router is ready to hit ")
    app.post("/blog/signup/user",authController.signup)
    app.post("/blog/signin/user",authController.signin)
   
}