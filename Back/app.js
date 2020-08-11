const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

const chat = require('./routes/chat');

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
  io.on('connection',(socket) => {
    console.log('New user connected');
    socket.on('disconnect', function(){
      console.log('User disconnected');
    });
    socket.on('save-message', function(data){
      console.log(data);
      io.emit('new-message', (data));
    });
  });
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

//const app = express();
// CORS Middleware
app.use(cors());

app.use('/Files', express.static('Files'));

const users = require('./routes/users');

// Port Number
const port = 3000;





//allow OPTIONS on all resources
app.options('*', cors())
//app.use(cors({ origin: 'http://localhost:4200' }));
//app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

app.use(cookieParser());

app.use(logger('dev'));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Start Server
server.listen(port, () => {
  console.log('server started on port '+port);
});



var noticeController = require('./routes/noticeController.js');
var enrollmentController = require('./routes/enrollmentController.js');
var attendanceController = require('./routes/attendanceController.js');
var javaFilesController = require('./routes/javaFilesController');
var courseController = require('./routes/courseController');
var adminUserController = require('./routes/adminUserController');
var profileController = require('./routes/profileController');
var examMarksController = require('./routes/examMarksController');
var dataImportController = require('./routes/dataImportController');
var payherecontrol = require('./routes/pay');
;

app.use('/tutor_dashboard', noticeController);
app.use('/student_enrollments', enrollmentController);
app.use('/attendance_management', attendanceController);
app.use('/java_files', javaFilesController);
app.use('/courses', courseController);
app.use('/chat',chat);
app.use('/adminUserControl', adminUserController);
app.use('/profile', profileController);
app.use('/exam_marks', examMarksController);
app.use('/csv', dataImportController);
app.use('/pay',payherecontrol); 
