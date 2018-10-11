;(function(undefined){
	document.onselectstart=function(){return false;};

	//radio 初始化
	var radios = document.getElementsByClassName("why-radio");
	for(var k1 = 0;k1 < radios.length;k1++){
		var radiospan = document.createElement("span");
		var radioname = radios[k1].getAttribute("name");
		var radiolabel = radios[k1].getAttribute("label");
		var radioparent = radios[k1].parentNode;
		radiospan.classList.add("why-radio-s");
		radiospan.setAttribute("name",radioname);
		var radiochild1 = document.createElement("span");
		radiochild1.classList.add("why-radio-1");
		var radiochild2 = document.createElement("span");
		radiochild2.classList.add("why-radio-2");
		radiochild2.innerHTML = radiolabel;

		radiospan.appendChild(radiochild1);
		radiospan.appendChild(radiochild2);
		radiospan.appendChild(radios[k1]);

		radioparent.appendChild(radiospan);
	}

	var newradios = document.getElementsByClassName("why-radio-s");
	for(var k2 = 0;k2 < newradios.length;k2++){
		newradios[k2].onclick = function(i){
			var activeradio = document.getElementsByClassName("radio-selected");
			return function(){
				for(var m = 0;m < activeradio.length;m++){
					if(newradios[i].getAttribute("name") === activeradio[m].getAttribute("name")){
						activeradio[m].children[2].checked = false;
						activeradio[m].classList.remove("radio-selected");
					}
				}
				newradios[i].classList.add("radio-selected");
				newradios[i].children[2].checked = true;
			}
		}(k2)
	}

	//checkbox 初始化
	var checks = document.getElementsByClassName("why-checkbox");
	for(var k3 = 0;k3 < checks.length;k3++){
		var checkspan = document.createElement("span");
		var checkname = checks[k3].getAttribute("name");
		var checklabel = checks[k3].getAttribute("label");

		var checkparent = checks[k3].parentNode;
		checkspan.classList.add("why-checkbox-s");
		checkspan.setAttribute("name",checkname);
		var checkchild1 = document.createElement("span");
		checkchild1.classList.add("why-checkbox-1");
		var checkchild2 = document.createElement("span");
		checkchild2.classList.add("why-checkbox-2");
		checkchild2.innerHTML = checklabel;

		checkspan.appendChild(checkchild1);
		checkspan.appendChild(checkchild2);
		checkspan.appendChild(checks[k3]);

		checkparent.appendChild(checkspan);
	}

	var newchecks = document.getElementsByClassName("why-checkbox-s");
	for(var k4 = 0;k4 < newchecks.length;k4++){
		newchecks[k4].onclick = function(i){
			return function(){
				if(newchecks[i].className.indexOf("checkbox-checked") > -1){
					newchecks[i].children[2].checked = false;
					newchecks[i].classList.remove("checkbox-checked");
				} else {
					newchecks[i].children[2].checked = true;
					newchecks[i].classList.add("checkbox-checked");
				}
			}
		}(k4)
	}

	//radio-group 初始化
	var newradiobtns = document.getElementsByClassName("why-radio-btn");
	for(var k5 = 0;k5 < newradiobtns.length;k5++){
		newradiobtns[k5].onclick = function(i){
			return function(){
				var newradiobtn_parent = newradiobtns[i].parentNode;
				var newradiobtn_group = newradiobtn_parent.children;
				for(var k6 = 0;k6 < newradiobtn_group.length;k6++){
					if(newradiobtn_group[k6].className.indexOf("rb-selected") > -1){
						newradiobtn_group[k6].classList.remove("rb-selected");
						break;
					}
				}
				newradiobtns[i].classList.add("rb-selected");
			}
		}(k5)
	}

	//input 初始化
	var inputs = document
}());