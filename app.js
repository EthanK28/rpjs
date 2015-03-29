$(document).ready(function() {

	var parseApplicationId="cNHvERsDgTAL9ytvN6rUEpIPGRXZB7hty8CLPd0s"; 
	var parseJavaScriptKey="eUrIiJzuydhq9z7cCMYX3cDjHtIEKcvDJGdthcD3";

	Parse.initialize("cNHvERsDgTAL9ytvN6rUEpIPGRXZB7hty8CLPd0s", "eUrIiJzuydhq9z7cCMYX3cDjHtIEKcvDJGdthcD3");
	var Test = Parse.Object.extend("Test");
	var test = new Test();

	test.save({
		name: "Eunseok",
		text: "hi"}, {
			success: function(object) {
				console.log("Parse.com object is saved: "+object);
 //alternatively you could use
 //alert("Parse.com object is saved");
},
error: function(object) {
	console.log("Error! Parse.com object is not saved: "+object);
}
	
}); 
});

