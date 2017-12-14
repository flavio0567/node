module.exports = function Route(app){
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
	 res.render("index");
	});
	// post route for adding a data from a survey
	app.post('/result', function(req, res) {
		const data = {
			name: req.body.id_name,
			location: req.body.id_location,
			language: req.body.id_language,
			comment: req.body.id_comment
    }; console.log('d a t a : ',  data);
	 	res.render("result", { userData: data });
	});
};
