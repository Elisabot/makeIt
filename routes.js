Router.route('/', function () {
	//send user to landing page if not logged in, otherwise send to homePage
   if (Meteor.userId() === null) {
  	this.render('landingPage');
  } else {
  	this.render('homePage');
  };
});

Router.route('/add-item', function () {
   this.render('addItem');
});
