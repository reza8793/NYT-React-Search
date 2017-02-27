

// require mongoose

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({

		title :{
			type: String,
			required: true
		},

		link: {
			type: String,
			required: true
		}, 

		saved: {
			type: Boolean,
			default: false
		},

		date: {

			{ type: Date, default: Date.now }

});

var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;