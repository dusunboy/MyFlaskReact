import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import Link from 'umi/link';

export default class BaseBreadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: props.menus,
    };
  }

  //获取子元素
  getItem = item => {
    let items = [];
    let level = this.props.currentMenuKey.level;
    let index = this.props.currentMenuKey.index;
    let key = this.props.currentMenuKey.key;
    items.push({
      name: '首页',
      url: '/',
    });
    for (let i = 0; i < item.length; i++) {
      if (level === 1) {
        if (item[i].key === key) {
          items.push({
            name: item[index].name,
            url: item[index].url,
          });
          break;
        }
      } else if (level === 2) {
        if (item[i].isSubMenu) {
          for (let j = 0; j < item[i].item.length; j++) {
            if (item[i].item[j].key === key) {
              items.push({
                name: item[i].name,
                url: '',
              });
              items.push({
                name: item[i].item[index].name,
                url: item[i].item[index].url,
              });
              break;
            }
          }
        }
      } else if (level === 3) {
        if (item[i].isSubMenu) {
          for (let j = 0; j < item[i].item.length; j++) {
            if (item[i].item[j].isSubMenu) {
              for (let k = 0; k < item[i].item[j].item.length; k++) {
                if (item[i].item[j].item[k].key === key) {
                  items.push({
                    name: item[i].name,
                    url: '',
                  });
                  items.push({
                    name: item[i].item[j].name,
                    url: '',
                  });
                  items.push({
                    name: item[i].item[j].item[index].name,
                    url: item[i].item[j].item[index].url,
                  });
                  break;
                }
              }
            }
          }
        }
      }
    }

    return items;
  };

  //生成面包屑
  getBreadcrumb = menus => {
    if (!menus) {
      return [];
    }
    let items = this.getItem(menus.menu);

    return items.map(item => {
      return <Breadcrumb.Item key={item.url}>{this.generateLink(item)}</Breadcrumb.Item>;
    });
  };

  //生成导航链接
  generateLink = item => {
    if (item.url !== '') {
      return <Link to={item.url}>{item.name}</Link>;
    } else {
      return item.name;
    }
  };

  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>{this.getBreadcrumb(this.state.menus)}</Breadcrumb>
    );
  }
}

BaseBreadcrumb.propTypes = {
  menus: PropTypes.object,
};
