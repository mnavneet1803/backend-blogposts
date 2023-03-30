const { verifyToken, isAdmin } = require("../middilewares/veriftytoken")

const postController = require('../controllers/post.controller')
module.exports = function postRouter(app){
    console.log("post router is ready to hit ")
    app.post("/blog/create/post",[verifyToken],postController.createPost)
    app.get("/blogs",postController.getPosts)
    app.get("/blog/:id",postController.getPostByID)
    app.put("/blog/update/post/:id",[verifyToken],postController.updatePost)
    app.delete("/blog/delete/post/:id",[verifyToken,isAdmin],postController.deletePost)
    app.get("/blog/popular/posts/title",postController.getPopularPostsTitle)
    app.post("/blog/contact/us",[verifyToken],postController.contactus)
}