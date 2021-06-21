const express = require('express')
const app = express()
const sharp = require("sharp")
const fs = require('fs')
const shortid = require('shortid')
const path = require('path')
const cors = require('cors')


app.use(express.text({type:'text/html'}))


app.post('/create', (req,res)=>{

    const id = shortid.generate()

    const svg = req.body

    fs.writeFileSync('src/read/'+id+'.svg' ,svg)

    res.json({id})

})

app.get('/download/:id',(req,res)=>{
    const id = req.params.id
    const readFilePath = `${__dirname}/src/read/${id}.svg`;

    const writeFilePath = `${__dirname}/src/write/${id}.png`

    sharp(readFilePath)
    .png()
    .toFile(writeFilePath)
    .then(function(info) {
        res.download(writeFilePath);
    })
    .catch(function(err) {
        console.log(err)
    })

    
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

const PORT = process.env.PORT || 4000
app.listen(PORT,console.log('Server is running'))