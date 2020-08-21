import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

import './index.scss';

const { Sider } = Layout;

function AsideMenu() {
  function Avator() {
    return (
      <div className="sx-avator">
        <img className="sx-avator__img" src={require('../../assets/img/default-avator.jpg')} alt="" />
        <p>123</p>
      </div>
    );
  }

  return (
    <Sider className="sx-aside-menu" >
      { Avator() }
      <Menu theme="dark">
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default AsideMenu;
