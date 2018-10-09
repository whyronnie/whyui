# whyui

一套黑色风格的ui

## 使用方法

引用css（使用了font-awesome）

```html
<link rel="stylesheet" href="css/whyui.css">
<link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css">
```

### whyselect [demo]{https://whyronnie.github.io/whyui}

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

