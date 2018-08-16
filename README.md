# redux demo

> 这是一个学习`redux`的demo，非常适用于入门。

## 1.创建项目

使用`create react app`新建一个基础的React项目，用于练习`React`与`Redux`的结合使用。

## 2. 使用 Redux

Redux的三个原则：

1. 单一数据源
2. state只读的
3. 使用纯函数来执行修改

### 2.1 安装

```bash
npm i react-redux --save-dev
```

### 2.2 新建目录

```bash
src
  └─js
      ├─actions    //存放action
      ├─reducers   //存放reducers
      └─store      //存放store
```

### 2.3 简介Redux

Redux由三部分组成，分别是：store,action,reducer

#### 关于 store

> 我们知道，React的每个模块，都有对应的state，即数据存储器。而store，就是存放所有模块state的全局存储器。如果把state当做一个个银行的分部，那么store就是银行的总部。

#### 关于 action

> 要操作store的数据，就必须使用action，action其实就是一个操作的详细描述：[操作名称-操作参数]。比如你去银行存1000元，就可以定义为：[存钱-1000]。

action写法如下：

```bash
{
  type: 'ADD_TODO',                    // 操作名称
  text: 'Build my first Redux app'     // 操作参数，一般是模块的state
}
```

#### 关于 reducer

> reducer只是一个纯函数，本身并不操作什么，你进来什么就给你输出什么。它更像一个通道，action要操作store，就必须通过reducer这个通道。




# 资料

- https://redux.js.org
- https://cn.redux.js.org/docs/introduction/ThreePrinciples.html
- http://www.superbug.me/2018/02/06/react-redux-tutorial-for-beginners-learning-redux-in-2018/
- http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html
