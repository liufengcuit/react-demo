import React from 'react'
import { Button } from 'antd'

class Login extends React.Component {
    login = () => {
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.login}>登录页面</Button>
            </div>
        )
    }
}

export default Login;