const express = require("express");
const session = require("express-session");
const sequelize = require("./config");
const routes = require('./controller');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);

// as example
const models = require("./models");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const sess = {
//   secret: "Super secret secret",
//   cookie: {
//     maxAge: 300000,
//     httpOnly: true,
//     secure: false,
//     sameSite: "strict",
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

//app.use(session(sess));

app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//apply routing middleware
app.use(routes);

//turn on connection to db and server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`) 
});
