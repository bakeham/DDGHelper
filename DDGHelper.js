// ==UserScript==
// @name   DDG隐私邮箱输入助手
// @namespace https://greasyfork.org/zh-CN/users/123456
// @version 0.1
// @description 在所有网页的邮箱输入栏旁加个按钮，点击后填入指定的内容
// @match  *://*/*
// @grant  GM_xmlhttpRequest
// ==/UserScript==
// 需在16行处，自行填入Authorization参数（可抓包获得）


// 请求URL
var url = 'https://ddgep.whatk.me/api/generateaddresses';
// 请求头
var headers = {
 'Authorization': 'Bearer ***************************',
 'Content-Type': 'text/plain;charset=UTF-8',
 'Origin': 'https://ddgep.whatk.me',
 'Referer': 'https://ddgep.whatk.me/zh-CN/email?id=0'
};
// 请求体
var body = '';

// 获取所有的 input 元素
var inputs = document.getElementsByTagName("input");

// 定义一个正则表达式，用来匹配邮箱相关的关键词
var emailRegex = /email|邮箱|用户名或邮箱|用户名|mail/i;

// 遍历所有的 input 元素
for (var i = 0; i < inputs.length; i++) {
 // 获取当前的 input 元素
 var input = inputs[i];
 // 判断当前的 input 元素是否是邮箱输入栏
 if (input.type == "email" || // 类型为 email
 emailRegex.test(input.name) || // name 属性包含邮箱关键词
 emailRegex.test(input.id) || // id 属性包含邮箱关键词
 emailRegex.test(input.placeholder) || // placeholder 属性包含邮箱关键词
 emailRegex.test(input.title) // title 属性包含邮箱关键词
 ) {
 // 创建一个按钮元素
 var button = document.createElement("button");
 // 设置按钮的文本
 button.textContent = "填入邮箱";
 // 设置按钮的样式
 button.style.marginLeft = "10px";
 // 设置按钮的点击事件
button.addEventListener("click", async (e) => {
 // 阻止默认事件
 e.preventDefault();
 // 创建一个加载提示元素
 var loadingPopup = document.createElement("div");
 // 设置加载提示的文本
 loadingPopup.textContent = "正在请求邮箱地址...";
 // 设置加载提示的样式
 loadingPopup.style.position = "fixed";
 loadingPopup.style.bottom = "10px";
 loadingPopup.style.right = "10px";
 loadingPopup.style.padding = "10px";
 loadingPopup.style.backgroundColor = "#f0f0f0";
 loadingPopup.style.borderRadius = "5px";
 // 在文档的顶部添加加载提示
 document.body.appendChild(loadingPopup);
 setTimeout(function() {
 document.body.removeChild(loadingPopup);
 }, 1000);
 // 发送POST请求
 GM_xmlhttpRequest({
 method: 'POST',
 url: url,
 headers: headers,
 data: body,
 onload: async function(response) {
 console.log("请求成功，正在解析返回的数据...");
 // 处理返回的数据
 var address = JSON.parse(response.responseText).address;
 var email = address + "@duck.com";
 console.log("正在拼接邮箱地址...");
 // 尝试将邮箱地址复制到剪贴板
 try {
 await navigator.clipboard.writeText(email);
 console.log("邮箱地址已复制到剪贴板...");
 } catch (err) {
 console.error("复制失败：", err);
 }
 // 填入指定的内容
 button.previousSibling.value = email;
 console.log("正在填入邮箱地址...");
 // 创建一个浮窗元素
 var popup = document.createElement("div");
 // 设置浮窗的文本
 popup.textContent = "已复制：" + email;
 // 设置浮窗的样式
 popup.style.position = "fixed";
 popup.style.bottom = "10px";
 popup.style.right = "10px";
 popup.style.padding = "10px";
 popup.style.backgroundColor = "#f0f0f0";
 popup.style.borderRadius = "5px";
 // 在文档的底部添加浮窗
 document.body.appendChild(popup);
 // 在1秒后移除浮窗
 setTimeout(function() {
 document.body.removeChild(popup);
 }, 1000);
 }
 });
});
 // 在邮箱输入栏后面插入按钮
 input.parentNode.insertBefore(button, input.nextSibling);
 }
}
