# whyui

一套黑色风格的ui [demo](https://whyronnie.github.io/whyui)

## 使用方法

引用css（使用了font-awesome）

```html
<link rel="stylesheet" href="css/whyui.css">
<link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css">
```
### button

```html
<button class="why-btn">默认按钮</button>
<button class="why-btn why-btn-success">成功按钮</button>
<button class="why-btn why-btn-danger">危险按钮</button>
<button class="why-btn why-btn-warning">警告按钮</button>
<button class="why-btn why-btn-info">信息按钮</button>
<button class="why-btn why-btn-large">大按钮</button>
<button class="why-btn why-btn-small">小按钮</button>
<button class="why-btn"><i class="fa fa-search"></i></button>
<button class="why-btn" disabled>禁用按钮</button>
<button class="why-text-btn">文字按钮</button>
```

### radio

父级的span元素必须有，但可以换成div或其他元素
```html
<span><input type="radio" class="why-radio" name="111" label="红"></span>
<span><input type="radio" class="why-radio" name="111" label="黄"></span>
<span><input type="radio" class="why-radio" name="111" label="蓝"></span>
```
按钮式的单选框
```html
<span class="why-radio-group">
	<span class="why-radio-btn">北京</span>
	<span class="why-radio-btn">上海</span>
	<span class="why-radio-btn">广州</span>
	<span class="why-radio-btn">深圳</span>
</span>	
```

### checkbox

同radio
```html
<span><input type="checkbox" class="why-checkbox" name="111" label="备选项"></span>
```

### input
```html
<input type="text" class="why-input" placeholder="请输入">
<textarea name="" id="" class="why-textarea" cols="30" rows="5" placeholder="请输入"></textarea>
```

### whyselect

```html
<select name="" id="whyselect">
	<option value="1">a</option>
	<option value="2">b</option>
	<option value="3">c</option>
</select>
```
```javascript
var s = new WhySelect({
	id: "whyselect",
	theme: "",	//有默认和light两种主题，可不填
	change: function(){
		//select选中选项的事件
	}
});
```

