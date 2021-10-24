(function() {
	window.calculator = {};

	let boxone = document.getElementById("one");
	let boxtwo = document.getElementById("two");
	let calculatebutton = document.getElementById("calculatebutton");
	let percentagelabel = document.getElementById("percentage");
	let messagelabel = document.getElementById("message");

	calculator.calculate = function(one, two) {
		for (let i = 0; i < cases.casepriority.length; i++) {
			let currentcase = cases.casepriority[i];
			let condition = currentcase.condition(one, two);
			if (condition.match) {
				return {matchingcase: currentcase, messageparams: condition.messageparams};
			}
		}
	};
	calculator.updateui = function(casemetadata, params) {
		if (casemetadata == null) {
			document.body.style.setProperty("--bg-color", "black");
			document.body.style.setProperty("--soft-color", "#FFFFFF44");
			document.body.style.setProperty("--harder-color", "#FFFFFF55");
			document.body.style.setProperty("--hard-color", "white");

			document.getElementById("percentage").innerText = "0%";
			document.getElementById("message").innerText = "Enter 2 names to calculate their compatibility...";
		} else {
			document.body.style.setProperty("--bg-color", casemetadata.color);
			if (casemetadata.brightcolor) {
				document.body.style.setProperty("--soft-color", "#00000044");
				document.body.style.setProperty("--harder-color", "#00000055");
				document.body.style.setProperty("--hard-color", "black");
			} else {
				document.body.style.setProperty("--soft-color", "#FFFFFF44");
				document.body.style.setProperty("--harder-color", "#FFFFFF55");
				document.body.style.setProperty("--hard-color", "white");
			}

			percentagelabel.innerText = casemetadata.percentage.toString() + "%";
			if (params.length == 1) {
				messagelabel.innerText = casemetadata.message.replace("%", params[0]);
			} else {
				messagelabel.innerText = casemetadata.message;
			}
		}
	}
	boxone.addEventListener("input", function() {
		calculator.updateui(null, []);
	});
	boxtwo.addEventListener("input", function() {
		calculator.updateui(null, []);
	});
	boxone.addEventListener("keydown", function(e) {
		if (e.key == "Enter") {
			let result = calculator.calculate(boxone.value, boxtwo.value);
			calculator.updateui(result.matchingcase, result.messageparams);
		}
	});
	boxtwo.addEventListener("keydown", function(e) {
		if (e.key == "Enter") {
			let result = calculator.calculate(boxone.value, boxtwo.value);
			calculator.updateui(result.matchingcase, result.messageparams);
		}
	});
	calculatebutton.addEventListener("click", function() {
		let result = calculator.calculate(boxone.value, boxtwo.value);
		calculator.updateui(result.matchingcase, result.messageparams);
	});

})();
