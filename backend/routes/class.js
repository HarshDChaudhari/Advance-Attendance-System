const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchUser = require("../MiddleWare/fetchStudent");
const Class = require("../Models/Class");
const Teacher = require("../Models/Teacher");

router.post("/create", fetchUser, async (req, res) => {
    try {
        let success = false
        let classroom = await Class.findOne({cc: req.user.id});
        let teacher = await Teacher.findById(req.user.id);
        if(!teacher){
            return res.status(400).json({ success, error: "Teacher not exists." })
        }
        if(classroom){
            return res.status(400).json({ success, error: "Sorry a class already exist." })
        }
        classroom = await Class.create({
            branch: req.body.branch,
            college: teacher.college,
            cc: req.user.id
        })
        success = true;
        console.log(classroom)
        res.json({ success, classroom });
    } catch (error){
        return res.status(500).send("Internal Server Error!");
    }
});

router.put("/addStudent", fetchUser, [
    body("student", "Please enter proper enrollment no").isLength({ min: 12, max: 12 })
], async (req, res) => {
    try {
        let success = false;
        let classroom = await Class.findOne({ cc: req.user.id });
        if(!classroom){
            return res.status(400).send("Please create class first")
        }
        classroom
    } catch (error){
        return res.status(500).send("Internal Server Error!");
    }
})

module.exports = router;