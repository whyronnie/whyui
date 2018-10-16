# whyui

一套黑色风格的ui	[demo](https://whyronnie.github.io/whyui)

## 兼容性

ie10+ 及大多主流浏览器

## 使用方法

引用css（使用了font-awesome）
```html
<link rel="stylesheet" href="css/whyui.css">
<link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css">
```
引用js
```html
<script src="whyui.js"></script>
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

大
```html
<span class="why-radio-group why-radio-large">
    <span class="why-radio-btn">北京</span>
    <span class="why-radio-btn">上海</span>
    <span class="why-radio-btn">广州</span>
    <span class="why-radio-btn">深圳</span>
</span>
```
中
```html
<span class="why-radio-group">
    <span class="why-radio-btn">北京</span>
    <span class="why-radio-btn">上海</span>
    <span class="why-radio-btn">广州</span>
    <span class="why-radio-btn">深圳</span>
</span>
```
小
```html
<span class="why-radio-group why-radio-small">
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
<script src="whyselect/whyselect.js"></script>
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

### messagebox 弹框

暂不支持多层窗口

alert
```javascript
//参数为(content,title,option);
why.alert("这是一个弹框消息","提示",{confirmText: "好的"});
```

confirm
```javascript
why.confirm("您确定吗？","提示",{
    confirmText: "确定",
    cancelText: "取消",
    cancel: function(){
        // 取消响应事件
        alert("您点击了取消");
    },
    confirm: function(){
        // 确定响应事件
        alert("您点击了确定");
    }
});
```

opendialog
```javascript
why.opendialog('<input type="text" id="bbb" class="why-input" placeholder="请输入" style="width:100%;">',"提示",{
    btns: [{
        text: "取消",
        class: "why-btn why-btn-small why-btn-info",
        click: function(whydom){
            alert("您点击了取消");
            why.close();    //关闭窗口
        }
    },{
        text: "提交",
        class: "why-btn why-btn-small why-btn-success",
        click: function(whydom){
            var v = whydom.find("bbb").value;   //获取窗口内的元素，通过id
            alert("您输入了："+v);
            why.close();
        }
    }]
});
```

### message 提示

```javascript
why.msg("这是一条普通消息");
why.msg("这是一条成功消息",{type:"success"});
why.msg("这是一条错误消息",{type:"error"});
why.msg("这是一条警告消息",{type:"warning"});
```