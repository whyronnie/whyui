;(function(undefined){
	var _global;
	function WhySelect(opt){
		this._initial(opt);
	}
	WhySelect.prototype = {
		constructor: this,
		_initial: function(opt){
			var def = {
				id: null,
				theme: 'default',
				change: function(i){}
			};
			this.def = extend(def,opt,true);
			this.newelement = document.createElement("div");
			this.text = document.createElement("span");
			this.optiongroup = document.createElement("div");
			this._createdom(this.def.id);
			this.isshow = false;
			this.isontop_memo = false; //记录展开的方向
		},
		_createdom: function(id){
			var _this = this;
			var orginelement = document.getElementById(this.def.id);
			var parent = orginelement.parentNode;
			var children = orginelement.children;

			_this.newelement.classList.add("why-select");
			if(_this.def.theme !== "default"){
				_this.newelement.classList.add("why-theme-"+_this.def.theme);
			}

			_this.text.classList.add("why-select-text");
			_this.text.innerHTML = children[0].text;
			var icon = document.createElement("span");
			icon.classList.add("why-select-icon");
			icon.innerHTML = '<i class="fa fa-angle-down"></i>';
			var content = document.createElement("span");
			content.classList.add("why-select-content");
			content.appendChild(_this.text);
			content.appendChild(icon);
			
			_this.optiongroup.classList.add("why-option-group");
			var optionstr = '';
			for(var i = 0;i < children.length;i++){
				if(_this.text.innerHTML === children[i].text){
					optionstr += '<div class="why-option why-option-selected" why-value="'+children[i].value+'">'+children[i].text+'</div>';
				} else {
					optionstr += '<div class="why-option" why-value="'+children[i].value+'">'+children[i].text+'</div>';
				}
			}
			_this.optiongroup.innerHTML = optionstr;

			_this.newelement.appendChild(content);
			_this.newelement.appendChild(_this.optiongroup);

			parent.insertBefore(_this.newelement,orginelement);
			orginelement.style.display = "none";

			content.onclick = function(e){
				var scrolltop = document.documentElement.scrollTop;
				var offsettop = _this.newelement.offsetTop;
				var viewheight = document.documentElement.clientHeight;
				var tobottom = viewheight - (offsettop - scrolltop);
				var optiongroupheight = 10 + 30 * children.length;
				var isontop = tobottom > optiongroupheight + 50 ? false:true;
				if(_this.newelement.className.indexOf("why-select-active") > -1){
					_this._hide(_this.isontop_memo);
				} else {
					_this.isontop_memo = isontop;
					_this._show(isontop);
				}
				e.stopPropagation();
				e.cancelBubble = true;
			}

			document.onclick = function(){				
				_this._hide(_this.isontop_memo);
			}

			_this.optiongroup.onclick = function(e){
				e.stopPropagation();
				e.cancelBubble = true;
			}

			_this._render();
		},
		_render: function(){	//点击下拉选项
			var _this = this;
			for(var k = 0;k < _this.optiongroup.children.length;k++){
				_this.optiongroup.children[k].onclick = function(index){
					return function(e){
						_this._affect(index);
						_this._hide(_this.isontop_memo);
						var item = {
							value: _this.optiongroup.children[index].getAttribute("why-value"),
							text: _this.optiongroup.children[index].innerHTML
						};
						_this.def.change(index, item);
						e.stopPropagation();
						e.cancelBubble = true;
					}
				}(k)
			}
		},
		_show: function(isontop){
			this.newelement.classList.add("why-select-active");
			this.optiongroup.style.display = "block";
			if(isontop){
				this.optiongroup.style.animation = "whyselect_ani_top_in .3s forwards";
				this.optiongroup.className = "why-option-group why-option-group-top";
			} else {
				this.optiongroup.style.animation = "whyselect_ani_bot_in .3s forwards";
				this.optiongroup.className = "why-option-group why-option-group-bot";
			}
		},
		_hide: function(isontop){
			var _this = this;
			_this.newelement.classList.remove("why-select-active");
			if(isontop){
				_this.optiongroup.style.animation = "whyselect_ani_top_out .3s forwards";
			} else {
				_this.optiongroup.style.animation = "whyselect_ani_bot_out .3s forwards";
			}
			setTimeout(function(){
				_this.optiongroup.style.display = "none";
			},300);
		},
		_affect: function(index){	//下拉选项active
			this.text.innerHTML = this.optiongroup.children[index].innerHTML;
			this.optiongroup.getElementsByClassName("why-option-selected")[0].classList.remove("why-option-selected");
			this.optiongroup.children[index].classList.add("why-option-selected");
		}
	}

	function extend(o,n,override){
		for(var key in n){
	        if(n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)){
	            o[key]=n[key];
	        }
	    }
	    return o;
	}

	_global = (function(){ return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = WhySelect;
    } else if (typeof define === "function" && define.amd) {
        define(function(){return WhySelect;});
    } else {
        !('WhySelect' in _global) && (_global.WhySelect = WhySelect);
    }

}());