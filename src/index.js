/*
 * @description: no
 * @versions: 1.0
 * @Author: Shi Shi
 * @Date: 2021-02-25 10:10:18
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-02-25 14:30:51
 */
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routers/AppRoute";
import { ConfigProvider } from 'antd';
import './assets/css/common.css'
import 'antd/dist/antd.css'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';

render(
<BrowserRouter basename="/">
<ConfigProvider  locale={zhCN}>
  <AppRoute />
  </ConfigProvider>
</BrowserRouter>,
document.getElementById('root')
)