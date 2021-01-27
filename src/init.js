const app = require('./server');
const config = require('config');
const port = config.get('port');

app.listen(port, () => {
    console.log(`Url Encurter running on port ${port}`);
});