const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport')
const path = require('path');
const favicon = require('express-favicon');




const location = require('./routes/api/users/Location')
const members=require('./routes/api/users/members')
const users=require('./routes/api/users')
const partners = require('./routes/api/users/partners')
const admins = require ('./routes/api/admins')
const vacancy = require('./routes/api/vacancy')


const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(passport.initialize())

require('./config/passport')(passport)




app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub</h1>
    <a href="/api/admins">Admins</a>
`);
})

// Direct routes to appropriate files 

app.use('/api/users',users)
app.use('/api/users/member',members)
app.use('/api/users/location', location)
app.use('/api/users/partners', partners)
app.use('/api/admins',admins)
app.use('/api/vacancy', vacancy)

const port = process.env.PORT || 5000

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => console.log(`Server up and running on port ${port}`))