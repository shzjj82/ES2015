class xxx {
	getValue() {
		return new Promise((resolve) => {
			var arr = [];
			var _value = $('.text').val();
			var Input = $('.a').find("input:checked")
			for (var i = 0; i < Input.length; i++) {
				if (Input.eq(i).attr("dataset") === 'va') {
					arr.push(Input.eq(i).val());
				}
			}
			resolve([_value, arr])
		})
	}
}

export default xxx