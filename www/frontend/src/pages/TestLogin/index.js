import React from 'react';
import { connect } from 'dva';
import { Button, Spin } from 'antd';
import TestLoginComponents from './components/TestLoginComponents';

class TestLogin extends React.Component {

  state  = { loading: false }

  click = (event) => {
    
    const { dispatch } = this.props;
    dispatch({
      type: 'testLogin/login',
      payload: '11111',
    });
  };


  render() {
    const { testLogin } = this.props;
    const { loading  } = this.props;
    console.log(loading);


    
    
    return (
      // <div>
         <Spin spinning={loading.global}>
          <div>
            <Button type="primary" onClick={this.click}>
              Primary
            </Button>
            <Button>Default</Button>
            <Button type="dashed">{testLogin.loginInfo.randomNumber}</Button>
            <Button type="danger">Danger</Button>
          </div>
          <TestLoginComponents />
         </Spin>
      // </div>
    );
  }
}
export default connect(({ testLogin, loading  }) => ({
  testLogin, loading 
}))(TestLogin);
