# 邮箱输入助手

这是一个油猴脚本，用于在所有网页的邮箱输入栏旁加个按钮，点击后填入指定的内容。

## 注册DDGEP

这个油猴脚本使用DDGEP的API来生成邮箱地址。因此，你需要先注册DDGEP，并获取API的身份验证信息。

以下是注册DDGEP的步骤：

1. 访问[DDGEP的官方网站](https://ddgep.whatk.me)。
2. 点击"注册"或"Sign Up"按钮。
3. 填写必要的信息，包括电子邮件地址、用户名和密码。
4. 阅读并接受DDGEP的服务条款和隐私政策。
5. 点击"注册"或"Sign Up"按钮完成注册。

注册完成后，你可以在你的DDGEP账户中找到API的身份验证信息。

## 安装

1. 首先，你需要安装 Tampermonkey 或 Greasemonkey 等用户脚本管理器。
2. 然后，点击[这个链接](https://raw.githubusercontent.com/yourusername/yourrepository/master/script.js)，这将打开一个新的标签页，显示你的脚本的源代码。
3. 点击 Tampermonkey 或 Greasemonkey 的图标，选择 "新建用户脚本..."。
4. 在 "名称" 字段中输入 "邮箱输入助手"。
5. 在 "源代码" 字段中，粘贴你从第二步中打开的页面的源代码。
6. **自定义请求URL和身份验证信息：** 在你的源代码中，找到以下两行代码：

   ```javascript // 请求URL var url = 'https://ddgep.whatk.me/api/generateaddresses'; // 请求头 var headers = { 'Authorization': 'Bearer ***************************',```
   将 `'https://ddgep.whatk.me/api/generateaddresses'` 替换为你的API的URL，将 `'Bearer ***************************'` 替换为你的API的身份验证信息。

8. 点击 "保存"。

现在，你的油猴脚本已经安装完成，可以在任何网页上使用了。

## 使用

在任何网页上找到一个邮箱输入栏，右边应该会有一个 "填入邮箱" 的按钮。点击这个按钮，它会发送一个 POST 请求到指定的 URL，并在请求完成后获取返回的邮箱地址，然后将这个邮箱地址拼接为完整的邮箱格式，并填入到邮箱输入栏中。同时，它会将邮箱地址复制到剪贴板。

## 贡献

如果你想为这个项目做出贡献，你可以提交一个 pull request。在提交 pull request 之前，请确保你的代码符合我们的编码规范，并且添加了足够的测试来证明你的更改是正确的。

## 许可证

这个项目使用 MIT 许可证。
