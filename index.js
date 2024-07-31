const express = require("express")
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    // Perform actions on the request object

    console.log('Request received:', req.method, req.url ,req.body);
  
    // Continue to the next middleware/route handler
    next();
  });


app.get("/getData",(req,res)=>{
res.send("hello")
})

let postRouter = require('./routes/post.router')
postRouter(app)

let commentRouter = require('./routes/comment.router')
commentRouter(app)
 let authRouter  = require('./routes/auth.router')
    authRouter(app)



app.listen(3004,()=>{
    console.log("server is running on port 3004")
})
