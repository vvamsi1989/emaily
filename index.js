const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
	  maxAge:  30 * 24 * 60 * 60 * 1000,
	  keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

/*app.get('/', (req, res) => {
    res.send({hi: 'there'});
});*/
//client id
//246143129001-nr8blkfvrr0vlqf0vf3memf0tvsh4j0j.apps.googleusercontent.com

require('./routes/authRoutes')(app);




app.listen(process.env.PORT || 5000)