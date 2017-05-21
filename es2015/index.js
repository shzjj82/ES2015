import ssss from './demo'
$('#btn').on('click', function() {
	var xx = $('.a input:checked:last').attr("_function");
	new ssss().getValue()
		.then((data) => {
			return new Promise((resolve) => {
				resolve(list[xx](data[0], data[1]))
			})
		})
		.then((date) => {
			alert(date);
		})
})
var list = {
	pullValue(_value, arr) {
		return (_value - arr[0]) * (1 + arr[1] / 1) * arr[1] * arr[2];
	},
	pullValue1(_value, arr) {
		return (_value - arr[0]) * (1 + arr[1] / 1) * arr[1]
	}
}