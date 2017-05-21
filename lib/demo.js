'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var xxx = function () {
	function xxx() {
		_classCallCheck(this, xxx);
	}

	_createClass(xxx, [{
		key: 'getValue',
		value: function getValue() {
			return new Promise(function (resolve) {
				var arr = [];
				var _value = $('.text').val();
				var Input = $('.a').find("input:checked");
				for (var i = 0; i < Input.length; i++) {
					if (Input.eq(i).attr("dataset") === 'va') {
						arr.push(Input.eq(i).val());
					}
				}
				resolve([_value, arr]);
			});
		}
	}]);

	return xxx;
}();

exports.default = xxx;