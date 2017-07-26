class Tadx {
	constructor(id) {
		this.oDiv = document.getElementById(id);
		this.aInp = this.oDiv.getElementsByTagName("input");
		this.aDiv = this.oDiv.getElementsByTagName("li");
		this.ol = this.oDiv.getElementsByClassName("l");
		this.or = this.oDiv.getElementsByClassName("r");
		this.show();
	}
	show() {
		let _this = this;
		for(let i = 0; i < this.aInp.length; i++) {
			this.aInp[i].onclick = function() {
				_this.index = i
				_this.fn(i)
			}
		}
	}
	fn(i) {
		for(let i = 0; i < this.aInp.length; i++) {
			this.aDiv[i].className = "";
			this.aInp[i].className = "";
		}
		this.aInp[i].className = "active";
		this.aDiv[i].className = "show";

	}

}
class tadlr extends Tadx {
	constructor(id) {
		super(id);
		this.tadl()
		this.index = 0
	}
	tadl() {
		var _this = this
		console.log(this)
		this.ol[0].onclick = function() {
			_this.index--
				if(_this.index < 0) {
					_this.index = 2
				}
			_this.fn(_this.index)
		}
		this.or[0].onclick = function() {
			_this.index++
				if(_this.index > 2) {
					_this.index = 0
				}
			_this.fn(_this.index)
		}
	}
}

new tadlr("div2");