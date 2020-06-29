const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    // The heading of the article
    title:{
        type: String,
        required: true
    },

    // A short description about the article
    description:{
        type: String,
        required: true
    },

    // A poster image that probably describes the article
    poster:{
        type: String,
        required: true
    },

    // An array of images that were included in the article in sequence
    images: [
        {
            type: String
        }
    ],

    // An array of contents that were used in the article in sequence
    contents: [
        {
            type: String
        }
    ],

    // An array of headings that were used in the article in sequence
    headings: [
        {
            type: String
        }
    ],

    // The status of the article whether it is published or not
    status: {
        type: Boolean,
        required: true
    },

    // The core that holds the sequence of the contents, images and headings
    // that were added while creating the article. 
    // This will be used by the front end application to display the article 
    // with their contents in the correct order
    // Accepted Values -> Content, Header, Image
    structure:[
        {
            type: String
        }
    ]
})

module.exports = mongoose.model("Blog", BlogSchema)