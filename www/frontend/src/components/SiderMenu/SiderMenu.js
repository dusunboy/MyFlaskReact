import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';

const { SubMenu } = Menu;

export default class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: props.menus,
    };
  }

  //获取菜单
  getMenu = menus => {
    if (!menus) {
      return [];
    }
    return menus.menu.map(item => {
      if (item.isSubMenu) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </span>
            }
          >
            {this.getSubMenuItem(item.item)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key}>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </Menu.Item>
        );
      }
    });
  };

  //获取子菜单
  getSubMenuItem = subMenuItem => {
    if (!subMenuItem) {
      return [];
    }
    return subMenuItem.map(item => {
      if (item.isSubMenu) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <span>{item.name}</span>
              </span>
            }
          >
            {this.getSubMenuItem(item.item)}
          </SubMenu>
        );
      } else {
        return <Menu.Item key={item.key}>{this.getSubMenuItemPath(item)}</Menu.Item>;
      }
    });
  };

  //获取子菜单路径
  getSubMenuItemPath = item => {
    if (!item) {
      return '';
    }
    return <Link to={item.url}>{item.name}</Link>;
  };

  //监听选择
  onSelect = key => {
    this.props.onSelect(key);
  };

  render() {
    return (
      <Menu
        theme={this.state.menus.theme}
        defaultSelectedKeys={this.state.menus.defaultSelectedKeys}
        defaultOpenKeys={this.state.menus.defaultOpenKeys}
        mode="inline"
        style={{ height: '100%' }}
        onSelect={this.onSelect}
      >
        {this.getMenu(this.state.menus)}
      </Menu>
    );
  }
}

SiderMenu.propTypes = {
  menus: PropTypes.object,
  onSelect: PropTypes.func,
};
