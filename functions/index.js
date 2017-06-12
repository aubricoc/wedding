const functions = require('firebase-functions');
const admin = require('firebase-admin');

//admin.initializeApp(functions.config().firebase);
//
//exports.confirmation = functions.https.onRequest(function(req, res) {
//	const confirmation = req.query;
//	admin.database().ref('/confirmations').push(confirmation).then(function(snapshot) {
//		res.send(201);
//	});
//});