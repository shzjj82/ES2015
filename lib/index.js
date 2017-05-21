'use strict';

var _demo = require('./lib/demo');

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('#btn').on('click', function () {
	var xx = $('.a input:checked:last').attr("_function");
	new xxx().getValue().then(function (data) {
		return new Promise(function (resolve) {
			resolve(list[xx](data[0], data[1]));
		});
	}).then(function (date) {
		alert(date);
	});
	console.log(aa);
});
var list = {
	pullValue: function pullValue(_value, arr) {
		return (_value - arr[0]) * (1 + arr[1] / 1) * arr[1] * arr[2];
	},
	pullValue1: function pullValue1(_value, arr) {
		return (_value - arr[0]) * (1 + arr[1] / 1) * arr[1];
	}
};