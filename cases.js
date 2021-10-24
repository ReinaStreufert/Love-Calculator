(function() {
	window.cases = {};

	cases.empty = {color: "dimgrey", percentage: 0, message: "you didn't fill in the names :(", condition: null, brightcolor: false}
	cases.us = {color: "springgreen", percentage: 2509767953, message: "literally the best couple ever omgomg nothing better", condition: null, brightcolor: true};
	cases.morandrname = {color: "darkred", percentage: -29068367, message: "hmmm try a different R name", condition: null, brightcolor: false};
	cases.reinaandreina = {color: "purple", percentage: 100, message: "haha masturbation", condition: null, brightcolor: false};
	cases.morandmor = {color: "gold", percentage: 100, message: "haha masturbation", condition: null, brightcolor: true};
	cases.usandsomeoneelse = {color: "darkred", percentage: -37129385, message: "% is a whore's name.", condition: null, brightcolor: false};
	cases.randos = {color: "dimgrey", percentage: 0, message: "ew sounds like an awful relationship", condition: null, brightcolor: false};

	let isreina = function(name) {
		return (name.toLowerCase() == "reina" || name.toLowerCase() == "rain" || name.toLowerCase() == "raindrop");
	};
	let ismor = function(name) {
		return (name.toLowerCase() == "mor" || name.toLowerCase() == "morrigan" || name.toLowerCase() == "oz" || name.toLowerCase() == "oswald" || name.toLowerCase() == "mos")
	};
	let isus = function(name) {
		return (isreina(name) || ismor(name));
	};
	let isrname = function(name) {
		return (name.toLowerCase().substr(0, 1) == 'r');
	};
	let containsus = function(one, two) {
		return (isus(one) || isus(two));
	};
	let containsreina = function(one, two) {
		return (isreina(one) || isreina(two));
	};
	let containsmor = function(one, two) {
		return (ismor(one) || ismor(two));
	};
	let containsrname = function(one, two) {
		return (isrname(one) || isrname(two));
	};
	let getrando = function(one, two) {
		if (!containsus(one)) {
			return one;
		} else {
			return two;
		}
	}

	cases.empty.condition = function(one, two) {
		return {match: (one == "" || two == ""), messageparams: []};
	}
	cases.us.condition = function(one, two) {
		return {match: (isus(one) && isus(two) && containsreina(one, two) && containsmor(one, two)), messageparams: []};
	};
	cases.usandsomeoneelse.condition = function(one, two) {
		let match = (containsus(one, two));
		if (match) {
			return {match: match, messageparams: [getrando(one, two).toLowerCase()]};
		} else {
			return {match: match, messageparams: []};
		}
	};
	cases.morandrname.condition = function(one, two) {
		return {match: (containsmor(one, two) && containsrname(one, two)), messageparams: []};
	};
	cases.reinaandreina.condition = function(one, two) {
		return {match: (isreina(one) && isreina(two)), messageparams: []};
	};
	cases.morandmor.condition = function(one, two) {
		return {match: (ismor(one) && ismor(two)), messageparams: []};
	};
	cases.randos.condition = function(one, two) {
		return {match: true, messageparams: []};
	};

	cases.casepriority = [cases.empty, cases.us, cases.morandrname, cases.reinaandreina, cases.morandmor, cases.usandsomeoneelse, cases.randos];
})();
