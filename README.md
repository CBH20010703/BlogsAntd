# C React 博客前台系统

### 项目目录介绍

### 项目基于 React Antd UI Axios 遵循组件化开发规范

​ 项目问题可以联系我 47790293

项目运行 地址 http://www.cenbohao.com/

​

#### Src 目录下介绍

| assets       |                   |          |
| ------------ | ----------------- | -------- |
| component    | 公共组件          | 负责人 C |
| request      | 封装请求 公共 API | 负责人 C |
| router       | 外层路由          | 负责人 C |
| view         | 视图层            | 负责人 C |
| view/context | Main 页面         | 负责人 C |

```json
多级菜单Json 格式  menu->menuChildrenList->articleslList
[

  {
    "menu_Id": 2,
    "menu_title": "JavaScript",
    "menu_icon": "fa fa-code",
    "menuChildrenList": [
      {
        "menuchildren_id": 2,
        "children_title": "ES6语法规则",
        "menu_id": 2,
        "children_icon": null,
        "parent": null,
        "articleslList": [
          {
            "artricle_id": 3,
            "article_imgurl": "/images/123.img",
            "article_title": "仓储层接口Interface",
            "article_codetext": "",
            "article_createtime": "2021-05-26T17:37:34.6500362",
            "menuchildren_id": 2,
            "article_status": false,
            "article_admin": 1
          }
        ]
      },
      {
        "menuchildren_id": 3,
        "children_title": "列表2",
        "menu_id": 2,
        "children_icon": null,
        "parent": null,
        "articleslList": [
          {
            "artricle_id": 7,
            "article_imgurl": "/images/123.img",
            "article_title": "sadasdsa",
            "article_codetext": "sasdsadsasadsadas",
            "article_createtime": "2021-05-28T19:29:44.249965",
            "menuchildren_id": 3,
            "article_status": false,
            "article_admin": 1
          }
        ]
      }
    ]
  },
  {
    "menu_Id": 3,
    "menu_title": "Vue",
    "menu_icon": "fa fa-viacoin",
    "menuChildrenList": []
  },
  {
    "menu_Id": 4,
    "menu_title": "Html5",
    "menu_icon": "fa fa-html5",
    "menuChildrenList": []
  },
  {
    "menu_Id": 5,
    "menu_title": "CSS3",
    "menu_icon": "fa fa-css3",
    "menuChildrenList": []
  },
  {
    "menu_Id": 6,
    "menu_title": "Linux",
    "menu_icon": "fa fa-linux",
    "menuChildrenList": []
  },
  {
    "menu_Id": 7,
    "menu_title": "Git",
    "menu_icon": "fa fa-git",
    "menuChildrenList": []
  }
]
```

#### 增加 个人介绍 已经代码高亮模式切换 目前还有点问题

#### 2021-7-8 新增评论模块 修复样式 登录 个人信息正在跟进中

#### 2021-7-14 完成评论模块 登录模块 留言列表模块
