const fs = require('fs');
const util = require('util');
const path = require('path');
const express = require('express');

const { generateList } = require('./utils/functions');
const sampleList = require('./utils/sampleList');

const writeFileAsync = util.promisify(fs.writeFile);

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function mid(req, res, next) {
    console.log(req.query);
    console.log(req.params);
    next();
}


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/practice/bootstrap.html'));
});

app.get('/list/:id', mid, (req, res) => {
    sampleList.find((entry, i) => {
        return +req.params.id === entry.id ? res.send(sampleList[i]) : null;
        // plus converts to number type
    })
});

app.post('/list/add', async (req, res) => {
    let newFile;

    const { id, name, color } = req.body
    if (id && name && color) newFile = await generateList([ ...sampleList, req.body ]);

    if (newFile) {
        try { 
            await writeFileAsync('./utils/sampleList.js', newFile);
            res.send(req.body);
        } catch (error) {
            res.send('Error rewriting ./utils/sampleList.js');
        }
    }
    else res.send('Invalid request body')
});

app.listen(port, () => console.log('listening on port', port));
