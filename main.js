let postTemplateString = document.getElementById('result-template').innerHTML;
let renderSource = Handlebars.compile(postTemplateString);

$('#loading').html('Loading...')

let url = "https://thejsguy.com/teaching/2018/api/restaurants.json";

let promise = $.ajax({
	type: 'GET',
	url: url
});

promise.then(function(content){
	console.log(content.data);
	let renderedSource = renderSource({
		data: content.data
	});
	console.log("not here");
	$('#loading').html('');
	$('body').append(renderedSource);
}, function(error) {
	$('#loading').html('Oops, Something went wrong!');
}); 