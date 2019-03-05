module.exports = {
  menus: {
    //初始选中的菜单项 key 数组
    defaultSelectedKeys: ['test0'],
    //初始展开的 SubMenu 菜单项 key 数组
    defaultOpenKeys: ['home'],
    theme: 'dark',
    menu: [
      {
        isSubMenu: true,
        key: 'home',
        name: '测试',
        icon: 'user',
        item: [
          {
            key: 'test0',
            name: '接口注册',
            url: '/',
          },
          {
            key: 'test1',
            name: '消费者注册',
            url: '/TestLogin',
          },
          {
            isSubMenu: true,
            key: 'home1',
            name: '三级菜单',
            item: [
              {
                key: 'test2',
                name: '三级一',
                url: '/',
              },
              {
                key: 'test3',
                name: '三级二',
                url: '/TestLogin',
              },
            ]
          }
        ]
      },
      {
        key: '1',
        name: '统计',
        icon: 'user',
        url: '/TestLogin',
      },
      {
        key: '2',
        name: '测试',
        icon: 'user',
        url: '/TestLogin',
      },
      {
        isSubMenu: true,
        key: 'item1',
        name: '子菜单',
        icon: 'user',
        item: [
          {
            key: 'test4',
            name: '接口注册',
            url: '/TestLogin',
          },
          {
            key: 'test5',
            name: '消费者注册',
            url: '/',
          },
        ]
      },
    ]
  }
}

