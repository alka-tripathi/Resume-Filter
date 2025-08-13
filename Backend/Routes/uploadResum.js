const express=require('express');
const app = express();
const router=express.Router();



const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })




router.post('/upload', upload.single('resume'),processResume);