var $ = require('jquery');
var moment = require('moment');

$(document).on('ready', function() {
    console.log('ready');
    setInterval(function() {
        console.log(moment().format('dddd MMMM Do YYYY'));
        console.log(moment().format('h:mm a'));
    }, 30000);
});