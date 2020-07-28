This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### 配置less 
```$xslt

在 node_modules 找到 react-scripts文件 修改 webpack.config.dev.js 文件
 添加less相关
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

 默认已经帮你配置了sass环境 (只要安装sass环境 npm install sass-loader node-sass --save-dev)

在上面的sass那边copy一份，配置成为less

```



