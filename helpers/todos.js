exports.getit = function(req,res){
    db.Todo.find()
    .then(function(content){
        res.send(content);
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports.getit();
