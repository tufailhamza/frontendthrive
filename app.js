const express = require('express');
const helmet = require('helmet');
const cors = require(`cors`);
const attachDb = require('./server/utils/dbMiddleware');

//Rquired Routes
const personRouter = require('./server/routes/personRoutes')
const instituteRouter = require('./server/routes/instituteRoutes')
const organizationRouter = require('./server/routes/organizationRoutes')
const PostRoutes = require("./server/routes/posts");
const CommentRoutes = require("./server/routes/comments");
const AuthRoutes = require("./server/routes/Auth")
const likeRoutes = require("./server/routes/likes")

const jobRouter = require('./server/routes/jobRoutes')



//Starting app
const app = express();


//Middlewares
app.use(cors({
    origin: "http://127.0.0.1:5173",
}));

app.use(helmet());
app.use(express.json())
app.use((req,res,next)=>
{
    res.header("Access-Control-Allow-Credentials",true)
    next()
})
// Attach the database connection to all routes under '/api/v1'
app.use('/api/v1', attachDb);

//Routing Middlewares
app.use('/api/v1/persons', personRouter);
app.use('/api/v1/institutes', instituteRouter);
app.use('/api/v1/organizations', organizationRouter);
app.use("/api/v1/Auth",AuthRoutes);
app.use("/api/v1/Posts",PostRoutes);
app.use('/api/v1/jobs', jobRouter);



//404
app.all('*', (req, res, next) => {
    res.send("Error 404");
})

module.exports = app;

