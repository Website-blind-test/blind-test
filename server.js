const express = require('express')
const app = express()
const cors = require('cors');
const fs = require('fs')
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');


app.use(cors());
app.use(express.json({limit: '10mb'}))
app.use(fileUpload());
app.use(express.json());


app.post("/upload", cors(), async (req, res) => {
    let sampleFile;
    let uploadPath;
    let sampleFileName

    sampleFile = req.files['file']
    sampleFileName = sampleFile.name
    sampleFileName = sampleFileName.replace(/ /g, "-")
    uploadPath = __dirname + "/public/assets/music/"+ sampleFileName
    sampleFile.mv(uploadPath, ((err) => {
        if (err){
            return res.status(500).send(err);
        }
        res.send('File uploaded')
    }))
});

app.delete("/upload", cors(), (req, res) => {

    let sampleFileName = req.body.fileName.replace(/ /g, "-")
    let path  = __dirname + "/public/assets/music/"+ sampleFileName
    fs.unlink(path, (err) => {
        if(err){
            return res.status(500).send(err);
        }
        res.send("File deleted")
    })
})

app.listen(8001, () => {
    console.log("Server running on port 8001");
})