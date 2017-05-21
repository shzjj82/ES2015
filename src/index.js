import ssss from './lib/demo'
$('#btn').on('click', function() {
	var xx = $('.a input:checked:last').attr("_function");
	new xxx().getValue()
		.then((data) => {
			return new Promise((resolve) => {
				resolve(list[xx](data[0], data[1]))
			})
		})
		.then((date) => {
			alert(date);
		})
	console.log(aa);
})
var list = {
	pullValue(_value, arr) {
		return (_value - arr[0]) * (1 + arr[1] / 1) * arr[1] * arr[2];
	},
	pullValue1(_value, arr) {
		return (_value - arr[0]) * (1 + arr[1] / 1) * arr[1]
	}
}