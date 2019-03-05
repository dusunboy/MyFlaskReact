import React, { Component } from 'react'
import { connect } from 'dva'
import { Button } from 'antd'

class TestLogin extends Component {

  click = (event) => {
    console.log(event);
    
    const { dispatch } = this.props;
    dispatch({
      type: 'testLogin/login',
      payload: '11111',
    });
  };

  render() {
    const { testLogin } = this.props;
    return (
      <div>
        <Button type="primary" onClick={this.click}>Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">{testLogin.loginInfo.randomNumber}</Button>
        <Button type="danger">Danger</Button>
      </div>
    )
  }
}
export default connect(({ testLogin }) => ({
  testLogin
}))(TestLogin)
