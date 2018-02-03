const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const discover = require('../modules/discovery');

const handleRequest = (req, res) => {
  try {
    const form = new formidable.IncomingForm({
      multiples: false,
    });

    let fileName;
    const uploadDir = path.join(__dirname, '../temp');

    form.on('file', (field, file) => {
      const time = new Date().getTime();
      const extension = file.name.split('.')[1];
      fileName = `${time}.${extension}`;
      fs.rename(file.path, path.join(uploadDir, fileName), (err) => {
        if (err) {
          console.log(`Error while renaming file: ${file.path} - ${err}`); // eslint-disable-line
        }
      });
    });

    form.on('error', (err) => {
      console.log(`Error: ${err}`); //eslint-disable-line
      res.status(500);
      res.json({ error: 'internal_server_error' });
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', async () => {
      const result = await discover(fileName);
      if (typeof result === 'number') {
        res.status(result);
        res.json({ error: result });
        return;
      }
      res.json(result);
    });

    // parse the incoming request containing the form data
    form.parse(req);
  } catch (error) {
    console.log(error); //eslint-disable-line
    res.status(500);
    res.json({ error: 'internal_server_error' });
  }
};

module.exports = handleRequest;
