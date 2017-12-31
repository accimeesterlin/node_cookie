var express = require('express');
var router = express.Router();


// Middlewares
const securingRoute = function(req, res, next) {
	// Your admin
	// Director
	// Manager
	// Your boss

	var student = req.cookies.token;

	if(student === 'student'){
		next();
	} else{
		res.json({err:"Sorry, you are not a trilogy student"});
	}
};


router.get('/',  function(req, res){
	console.log("Cookies: ", req.cookies);

	res.cookie('token', 'student');
	res.json({username:"accimeesterlin"});
});




router.get("/api", securingRoute,  function(req, res){
	console.log("Cookies: ", req.cookies);
	res.json({username:"api"});
});


router.get("/serving", securingRoute, function(req, res){
	console.log("Cookies: ", req.cookies);
	res.json({username:"serving"});
});

module.exports = router;





