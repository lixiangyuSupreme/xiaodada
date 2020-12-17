import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import { Menu } from 'antd';
import style from './home-layout.less';
import Foot from './Foot';
import './example.css'

import { UserOutlined , BookOutlined } from '@ant-design/icons';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const HomeLayout =(props)=> {
    return (
      <div>
        <header>
          <div style={{marginTop:'-20px',width:'100%',height:'80px',backgroundColor:'rgba(0,0,0,0.5)',color:'white'}}>
            <h1 style={{lineHeight:'80px',marginLeft:'80px',fontFamily:'宋体'}}>嗒嗒我自己后台管理系统</h1>
            <Foot/>
          </div>
        </header>
        <main className={style.main}>
          <div className={style.menu}>
            <Menu mode='inline' style={{width:'150px',float:'left',height:'1300px',backgroundColor:'rgb(0,0,0,0.5)',marginTop:'-18px',color:'white'}}>
              <SubMenu key="user" title={<span>
                  <UserOutlined />
                  <span>男生穿搭</span></span>}
                style={{paddingTop:'50px'}}>
                <MenuItem key="user-list">
                  <Link to="/man/mancoat">上衣</Link>
                </MenuItem>
                <MenuItem key="user-add">
                  <Link to="/man/mantrousers">裤子</Link>
                </MenuItem>
                <MenuItem key="user-jacket">
                  <Link to="/man/manjacket">外套</Link>
                </MenuItem>
                <MenuItem key="user-shoes">
                  <Link to="/man/manshoes">鞋子</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="book" title={<span>
                    <UserOutlined />
                  <span>女生穿搭</span></span>}
                  style={{marginTop:'50px'}}>
                <MenuItem key="book-list">  
                  <Link to="/woman/womanjacket" >上衣</Link>
                </MenuItem>
                <MenuItem key="book-add">
                  <Link to="/woman/womantrouser">裤子</Link>
                </MenuItem>
                <MenuItem key="book-coat">
                  <Link to="/woman/womanloosecoat">外套</Link>
                </MenuItem>
                <MenuItem key="book-dress">
                  <Link to="/woman/skirt">半身裙</Link>
                </MenuItem>
                <MenuItem key="book-dresses">
                  <Link to="/woman/dress">连衣裙</Link>
                </MenuItem>
                <MenuItem key="book-head">
                  <Link to="/woman/headwear">头饰</Link>
                </MenuItem>
                <MenuItem key="book-shoess">
                  <Link to="/woman/womanshoes">鞋子</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="fabu" title={<span>
                  <BookOutlined />
                  <span>动态</span></span>}
                  style={{marginTop:'50px'}}>

                <MenuItem key="fabu-list">  
                  <Link to="/dynamic" >动态发布</Link>
                </MenuItem>
                
              </SubMenu>
            </Menu>
          </div>
        </main>
      </div>
    );
  }


export default HomeLayout;