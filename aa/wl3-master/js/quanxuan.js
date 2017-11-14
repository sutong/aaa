window.onload = function() {
	var objSelectAll = document.getElementById("selectAll");
	var objCheckbox = document.getElementsByTagName("input");
	//var objCheckbox = document.getElementsByName("ck");
	objSelectAll.onclick = function() {
		var bool = selectAll.checked;
		for(var i = 0; i < objCheckbox.length; i++) {
			objCheckbox[i].checked = bool;
		}
	};
};