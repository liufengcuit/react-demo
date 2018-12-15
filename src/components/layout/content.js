import React from 'react'
import { Layout } from 'antd';
import { Route } from 'dva/router';
import Dashboard from '../../pages/dashboard/dashboard.js'
import Music from '../../pages/music/music.js'
import UserInfoObserve from '../../pages/infoObserve/userInfoObserve.js';

const { Content } = Layout;
class Contents extends React.Component {
    render() {
        return (
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/music" exact component={Music} />
                <Route path="/infoobserve/userinfo" exact component={UserInfoObserve} />
            </Content>
        )
    }
}

export default Contents;