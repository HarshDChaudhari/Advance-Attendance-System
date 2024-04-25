const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchUser = require("../MiddleWare/fetchStudent");
const Class = require("../Models/Class");

router.post("/createClass", fetchUser, async (req, res) => {
    try {
        let success = false
        let classroom = await Class.findOne({cc: req.user.id});
        if(!classroom){
            return res.status(400).json({ success, error: "Sorry a class already exist." })
        }
        classroom = await Class.create({
            branch: req.body.branch,
            college: req.body.college,
            cc: req.user.id
        })
        success = true;
        res.json({ success, classroom });
    } catch (error){
        return res.status(500).send("Internal Server Error!");
    }
})