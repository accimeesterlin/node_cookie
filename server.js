var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var router = express.Router();



// Routes here

// two ways
	// app.get()
	// app.post()

	// router.get()
	// router.post()

app.use(cookieParser());
app.use('/', require('./router'));




app.listen(8080, function(){
	console.log("App is starting at port ", 8080);
});