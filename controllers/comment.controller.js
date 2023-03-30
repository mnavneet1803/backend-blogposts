const connection = require("../config/db")


exports.createComment = async(req,res)=>{

    let postId =req.params.id
    let content=req.body.content.toString()


    console.log(postId)
try {
    
        var sql = `INSERT INTO comment (postId, content,createdAt) VALUES ("${postId }", "${content}" , NOW())`;
                connection.query(sql, function (err, result1) {
                    // console.log(result1);
                if (err) throw err;
                console.log(`1 comment inserted on Post Id ${postId}`);
                    res.status(201).send({
                        "status": true,
                        "data": req.body
                    });
                });
                
                            
                // var sql = `INSERT INTO post (cid) VALUES ("${postId }", "${content}" , NOW())`;
                // connection.query(sql, function (err, result1) {
                //     // console.log(result1);
                // if (err) throw err;
                // console.log(`1 comment inserted on Post Id ${postId}`);
                //     res.status(201).send({
                //         "status": true,
                //         "data": req.body
                //     });
                // });

} catch (error) {
    console.log(error)
}
};

exports.getComments = async = (req, res) => {

    let postId =req.params.id


    try {
    connection.query(`SELECT * FROM comment where postId = ${postId}`, function (err, result, fields) {
            if (err) throw err;

            res.status(200).send({
                "status": true,
                AllComments: result
            })
        })

    } catch (error) {
        console.log(error)
    }
}