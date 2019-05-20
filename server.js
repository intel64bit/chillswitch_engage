const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const tasks = require('./routes/tasks');
const app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', index);
app.use('/api', tasks);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
