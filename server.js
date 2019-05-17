const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport')




const location = require('./routes/api/users/location')
const calender = require('./routes/api/calender')
const members=require('./routes/api/users/members')
const users=require('./routes/api/users')
const partners = require('./routes/api/users/partners')
const admins = require ('./routes/api/admins')
const notifications = require('./routes/api/notifications')
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
app.use('/api/calender', calender)
app.use('/api/users/partners', partners)
app.use('/api/admins',admins)
app.use('/api/notifications', notifications)
app.use('/api/vacancy', vacancy)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port}`))