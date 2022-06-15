const express = require('express');
const { handlePocketUrl, createPocketUrl } = require('./handlers')
const app = express();
const PORT = 3000;

// Enable JSON body support
app.use(express.json())
app.get('/:urlHash', handlePocketUrl)
app.post('/create', createPocketUrl)

app.listen(PORT, () => console.log(`Application is running in port ${PORT}`))
