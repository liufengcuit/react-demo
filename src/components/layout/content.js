import React from 'react'
import { Layout } from 'antd';
import { Route } from 'dva/router';
import Index from '../../pages/index/index.js'
import Music from '../../pages/music/music.js'

const { Content } = Layout;
class Contents extends React.Component {
    render() {
        return (
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <Route path="/index" exact component={Index} />
                <Route path="/music" exact component={Music} />
            </Content>
        )
    }
}

export default Contents;