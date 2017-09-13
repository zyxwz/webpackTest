/**
 * Created by zhangyu on 17/9/11.
 */
const express = require('express');
const webpack = require("webpack");
const webapckDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webapckDevMiddleware(compiler,{
	publicPath: config.output.publicPath
}));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});