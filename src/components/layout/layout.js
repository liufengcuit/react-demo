import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon, Dropdown } from 'antd';
import Contents from './content.js'

const layout = require('./layout.css')

const { Header, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const menu = (
    <Menu>
      <Menu.Item>
        <span>注销</span>
      </Menu.Item>
    </Menu>
);

class LayoutSide extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  rootSubmenuKeys = ['sub1', 'sub2'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  /**获取当前路由，并设置默认展开项 */

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          className={layout.leftSide}
          collapsed={this.state.collapsed}
        >
          <div className={layout.logo}>后台管理系统</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}>
            <Menu.Item key="1">
                <Link to="/dashboard">
                    <Icon type="home" />
                    <span>首页</span>
                </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>邮箱</span></span>}>
                <Menu.Item key="5">
                    <Link to="/dashboard">主面板</Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to="/music">我的音乐</Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to="/infoobserve/userinfo">用户信息监管</Link>
                </Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="setting" /><span>设置</span></span>}>
                <Menu.Item key="2">
                    <Icon type="tags" />
                    <span>修改密码</span>
                </Menu.Item>
                <Menu.Item key="9">
                    <Icon type="poweroff" />
                    <span>退出系统</span>
                </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={layout.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className="fr">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        <Icon type="user-add" />  Liu feng 
                    </a>
                </Dropdown>
            </div>
          </Header>
          <Contents />
        </Layout>
      </Layout>
    );
  }
}

export default LayoutSide;