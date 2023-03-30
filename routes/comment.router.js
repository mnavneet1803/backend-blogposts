const commentController = require('../controllers/comment.controller')
const { verifyToken } = require("../middilewares/veriftytoken")

module.exports = function commentRouter(app){
    console.log("comment router is ready to hit ")
    app.post("/blog/create/comment/:id",[verifyToken],commentController.createComment)
    app.get("/blog/comment/:id",commentController.getComments)
   
    // app.put("/blog/update/post/:id",postController.updatePost)
    // app.delete("/blog/delete/post/:id",postController.deletePost)
}