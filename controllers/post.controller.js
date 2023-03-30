const connection = require("../config/db")

exports.createPost = async (req, res) => {

    let title = req.body.title||""
    let content = req.body.content||""
    let imageUrl = req.body.imageUrl||""
    let userId  = req.id
    // console.log(title.length , content.length , imageUrl.length)
    try {

        await connection.query("SELECT * FROM post", function (err, result, fields) {
            let num = 0
            result.forEach(el => {
                if (el.title === title) {
                    num++;
                }
            });

            if (title.length === 0 || content.length === 0 || imageUrl.length === 0) {
                res.status(409).send({
                    "status": "falseField",
                    "message": "Please fill all required fields: title, content, and imageUrl."
                });
            } else if (num > 0) {
                res.status(409).send({
                    "status": false,
                    "message": "Title is already exist."
                });
            } else {
                var sql = `INSERT INTO post (title, content, imageUrl ,userId, createdAt) VALUES ("${title}", "${content}" , "${imageUrl}", ${userId},NOW())`;
                connection.query(sql, function (err, result1) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    res.status(201).send({
                        "status": true,
                        "data": req.body
                    });
                });
            }
        });


    } catch (error) {
        console.log(error)
    }
};


exports.getPosts = async = (req, res) => {

    try {
        connection.query("SELECT * FROM post", function (err, result, fields) {
            if (err) throw err;

            res.status(200).send({
                "status": true,
                AllPosts: result
            })
        })

    } catch (error) {
        console.log(error)
    }
}

exports.getPostByID = async = (req, res) => {
    let id = req.params.id
    try {
        connection.query(`SELECT * FROM post where id = ${id} `, function (err, result, fields) {
            if (err) throw err;

            res.status(200).send({
                "status": true,
                PostDetails: result
            })
        })

    } catch (error) {
        console.log(error)
    }
}



exports.updatePost = async = (req, res) => {
    console.log(req.body)
    let postId = req.params.id;
    let title = req.body.title
    let content = req.body.content
    let imageUrl = req.body.imageUrl
    console.log(postId, title, content, imageUrl)


    try {

        connection.query(`SELECT * FROM post`, function (err, result, fields) {


            let num = 0
            result.forEach(el => {
                // console.log(el)
                if (el.id != postId && el.title === title) {
                    num++;
                }

            });
            console.log(num)
            if (num > 0) {
                res.status(409).send({
                    "status": false,
                    "message": "title is already exist"
                });
            } else {

                if (!postId) {
                    return res.status(400).send({ error: user, message: 'Please provide postId' });
                }

                connection.query(`SELECT userId FROM post where id=${postId}`, function (err, result, fields) {
                        
                        if(result[0].userId==req.id){
                            var sql = `UPDATE post SET title = "${title}" , content= "${content}"  , imageUrl= "${imageUrl}" WHERE id = "${postId}"`;
                            connection.query(sql, function (err, result) {
                                if (err) throw err;
                                console.log(result.affectedRows + " record(s) updated");
                                res.status(200).send({
                                    "status": true,
                                    "data": req.body
                                })
                            });
                        }
                        else{
                            res.status(409).send({
                                "status": "falseUser",
                                "message": "User is not Vailid for updating"
                            });
                        }
                })

               

            }

        })



    } catch (error) {
        console.log(error)
    }




}

exports.deletePost = async = (req, res) => {
    console.log("delete post controller called")
    let postId = req.params.id;

    if (!postId) {
        return res.status(400).send({ error: true, message: 'Please provide postId' });
    }
    connection.query(`DELETE FROM post WHERE id = ${postId}`, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'post has been deleted successfully.' });
    });
}


exports.filterPost = async (req, res) => {

    
    let content = req.body.content.toString()
    


    try {
        

        await connection.query(`SELECT * FROM post WHERE content LIKE %${content}%`, function (err, result, fields) {

            
            // if (err) throw err;
            if (err) throw err;

            res.status(200).send({
                "status": true,
                PostDetails: result
            })
    
        });


    } catch (error) {
        console.log(error)
    }
};


exports.getPopularPostsTitle = async = (req, res) => {

    try {
        connection.query("	SELECT post.title ,post.id , post.imageUrl FROM post INNER JOIN comment ON post.id = comment.postId GROUP BY post.id HAVING COUNT(*) > 5", function (err, result, fields) {
            if (err) throw err;
                           
            res.status(200).send(
               result
            )
        })

    } catch (error) {
        console.log(error)
    }
}


exports.contactus =  (req, res) => {

    let name = req.body.name||""
    let email = req.body.email||""
    let content = req.body.content||""
    // console.log(name.length , content.length , email.length)
    try {

        

            if (name.length === 0 || content.length === 0 || email.length === 0) {
                res.status(409).send({
                    "status": "falseField",
                    "message": "Please fill all required fields: name, content, and email."
                });
            }  else {
                var sql = `INSERT INTO contactus (name, email,content, createdAt) VALUES ("${name}", "${email}" , "${content}", NOW())`;
                connection.query(sql, function (err, result1) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    res.status(201).send({
                        "status": true,
                        "data": req.body
                    });
                });
            }
    


    } catch (error) {
        console.log(error)
    }
};
