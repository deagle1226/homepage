var $ = require('jquery');
var moment = require('moment');

var time = $('time');

$(document).on('ready', function() {
    console.log('ready');
    time.text(updateTime());
    setInterval(function() {
    	time.text(updateTime());
    }, 5000);
});

function updateTime() {
	return moment().format('dddd MMMM Do YYYY h:mm a');
}