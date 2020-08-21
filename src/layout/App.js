import React from 'react';
import { Layout } from 'antd';
import AsideMenu from './AsideMenu';
import HeaderTop from './HeaderTop';
import './App.scss';

const { Content } = Layout;

function App() {
  return (
    <Layout className="sx-app">
      <AsideMenu></AsideMenu>
      <Layout className="sx-main-container">
        <HeaderTop></HeaderTop>
        <Content className="sx-main-container__content">
          123
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
