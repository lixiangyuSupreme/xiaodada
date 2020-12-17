
import React from "react";
import {withRouter} from 'react-router-dom';



const Dengl = () => {
 
  return (
    <div class="all" style={{textAlign:'center'}}>
      <div class="top" style={{display:'flex',marginTop:'-490px',marginLeft:'500px'}}>
        <h2>管理员信息</h2>
      </div>
      <div class="information">
        <div class="name">
          <div class="username" style={{display:'flex',marginTop:'5px',marginLeft:'500px'}}>
            <p style={{marginTop:'23px'}}>用户名：</p>
            <input type="text" style={{height:'25px',marginTop:'23px'}}/>
          </div>
          <div class="realname" style={{display:'flex',marginTop:'10px',marginLeft:'500px'}}>
            <p style={{marginTop:'5px'}}>真实姓名：</p>
            <input type="text" style={{height:'25px',marginTop:'5px',marginLeft:'2px'}}/>
          </div>
        </div>
      </div>
      <div class="data">
        <div class="sex" style={{display:'flex',marginTop:'10px',marginLeft:'500px'}}>
          <p style={{marginTop:'5px'}}>性别：</p>
          <input type="text" defaultValue={"女"} class="a" style={{height:'25px',marginTop:'5px'}}/>
        </div>
        <div class="phone" style={{display:'flex',marginTop:'5px',marginLeft:'500px'}}>
          <p style={{marginTop:'5px'}}>手机：</p>
          <input type="text" defaultValue={"131xxxxxxxx"} class="b" style={{height:'25px',marginTop:'5px'}}/>
        </div>
        <div class="email" style={{display:'flex',marginTop:'5px',marginLeft:'500px'}}>
          <p style={{marginTop:'5px'}}>邮箱：</p>
          <input type="text" defaultValue={"xxxxxxxx@qq.com"} class="c" style={{height:'25px',marginTop:'5px'}}/>
        </div>
        <div class="position" style={{display:'flex',marginTop:'5px',marginLeft:'500px'}}>
          <p style={{marginTop:'5px'}}>职位：</p>
          <input type="text" defaultValue={"开发"} class="d" style={{height:'25px',marginTop:'5px'}}/>
        </div>
      </div>
      <center><button class="submit" style={{width:'100px',height:'30px',marginTop:'15px'}}>修改</button></center>
      <div class="bottom"><h1></h1></div>
    </div>
  );
};

export default withRouter(Dengl);
