import React from 'react';
import styles from './index.css';
import withRouter from 'umi/withRouter';
import { LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Layout, Icon, Row, Col } from 'antd';
import SiderMenu from '../components/SiderMenu/SiderMenu';
import BaseBreadcrumb from '../components/BaseBreadcrumb/BaseBreadcrumb';
import menuConfig from '../config/menu-config';


const { menus } = menuConfig;
const { Header, Content, Sider } = Layout;

moment.locale('zh-cn');
// moment.locale('en');

class BaseLayout extends React.Component {
  state = {
    collapsed: false,
    currentMenuKey: {
      index: 0,
      level: 2,
      key: 'test0',
    },
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onSelect = currentMenuKey => {
    console.log(currentMenuKey);
    this.setState({
      currentMenuKey: {
        index: currentMenuKey.item.props.index,
        level: currentMenuKey.item.props.level,
        key: currentMenuKey.key,
      },
    });
  };

  render() {
    // const locale = 'en'
    const locale = zhCN;
    const { children } = this.props;
    console.log(this.state);

    return (
      <LocaleProvider locale={locale}>
        <Layout>
          <Sider
            width={200}
            style={{ background: '#fff' }}
            theme="dark"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <Row
              type="flex"
              align="middle"
              justify="center"
              style={{ height: '64px', background: '#002140' }}
            >
              <Col>
                <Icon type="border" style={{ fontSize: '35px', color: '#fff' }} />
              </Col>
              <Col
                style={{
                  height: '64px',
                  lineHeight: '64px',
                  marginLeft: '15px',
                  display: this.state.collapsed ? 'none' : 'block',
                }}
              >
                <h1 style={{ color: '#fff' }}>接口监控</h1>
              </Col>
            </Row>
            <SiderMenu onSelect={this.onSelect} menus={menus} />
          </Sider>
          <Layout style={{ height: '100%' }}>
            <Header style={{ padding: 0, background: '#fff' }}>
              <Row
                type="flex"
                align="middle"
                justify="space-between"
                style={{ height: '64px', padding: '0 24px' }}
              >
                <Icon
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  style={{ fontSize: '30px' }}
                  onClick={this.toggle}
                />
                <Col>个人中心</Col>
              </Row>
            </Header>
            <Layout style={{ padding: '0 24px 24px' }}>
              <BaseBreadcrumb menus={menus} currentMenuKey={this.state.currentMenuKey} />
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </LocaleProvider>
    );
  }
}

export default withRouter(BaseLayout);
