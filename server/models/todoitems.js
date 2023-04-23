// import mongoose to create schema

const mongoose = require('mongoose');

// Create Schema

const ToDoItemSchema = new mongoose.Schema({
    item:{
        type : String,
        required : true
    }
})

// Export this Schema 
 module.exports = mongoose.model('todo' , ToDoItemSchema);