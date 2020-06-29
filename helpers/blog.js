const db = require('../models');

exports.insert = (req, res) => {
    db.Blog.create(req.body)
    .then(blog => {
        console.log("Blog with title "+blog.title+" has been inserted!")
        res.setHeader('Content-Type', 'application/json');
        res.send({
            status: "success"
        })
    })
    .catch(error => console.log("-------Error while inserting blog--------\n", error))
}

exports.findOne = (req, res) => {
    db.Blog.findById(req.params.id)
    .then(blog => {
        console.log("Blog found!")
        res.setHeader('Content-type', 'application/json')
        res.send({
            status:"success",
            data: blog
        })
    })
    .catch(error => {
        console.log("-----Error while fetching blog by id---------\n", error)
        res.send({
            status: "failed"
        })
    })
}

exports.getAll = (req, res) => {
    db.Blog.find({}).select("title poster description")
    .then(blogs => {
        console.log("Returning all blogs")
        res.setHeader('Content-type', 'application/json')
        res.send({
            status: "success",
            data: blogs
        })
    })
    .catch(error => {
        console.log("-----Error while fetching blogs---------\n", error)
        res.send({
            status: "failed"
        })
    })
}



