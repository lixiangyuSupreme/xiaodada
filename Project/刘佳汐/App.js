import React from "react";
import "./App.css";
import p from './../src/hp1.jpeg'

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

const App = () => {
  // 提交表单且数据验证成功后回调事件
  // const onFinish = values => {
  //   console.log('Success:', values);
  // };

  // // 提交表单且数据验证失败后回调事件
  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <div class="all">
      <div class="top">
        <h1>管理员信息</h1>
      </div>
      <div class="information">
        <div class="hp">
          <img src={p}/>
        </div>
        <div class="name">
          <div class="username">
            用户名：<input type="text"/>
          </div>
          <div class="realname">
            真实姓名：<input type="text"/>
          </div>
        </div>
      </div>
      <div class="data">
        <div class="sex">
          <h2>性别：</h2>
          <input type="text" defaultValue={"女"} class="a"/>
        </div>
        <div class="phone">
          <h3>手机：</h3>
          <input type="text" defaultValue={"131xxxxxxxx"} class="b"/>
        </div>
        <div class="email">
          <h4>邮箱：</h4>
          <input type="text" defaultValue={"xxxxxxxx@qq.com"} class="c"/>
        </div>
        <div class="position">
          <h5>职位：</h5>
          <input type="text" defaultValue={"开发"} class="d"/>
        </div>
      </div>
      <center><button class="submit">修改</button></center>
      <div class="bottom"><h1></h1></div>
    </div>
  );
};

export default App;
