# 图书管理系统

> 这个项目包含两个图书管理系统的实现：一个使用 JSON 文件存储数据，另一个使用 MySQL 数据库存储数据。这两个实现都是用 Node.js 编写的命令行应用程序，可以让用户添加图书、列出所有图书或退出系统。

## JSON 版本

### 安装依赖

在运行这个应用程序之前，您需要先安装 Node.js 和 npm。然后，使用以下命令安装依赖：

```sh
npm install
```

运行应用程序
使用以下命令运行应用程序：

```sh
node app-json.js
```

## 功能介绍

这个应用程序提供以下功能：

添加图书：用户可以输入书籍名称和作者名字，然后将书籍信息保存到 JSON 文件中。
列出所有图书：用户可以查看所有已保存的书籍信息。
退出系统：用户可以退出应用程序。

## MySQL 版本

### 安装依赖

在运行这个应用程序之前，您需要先安装 Node.js 和 npm。然后，使用以下命令安装依赖：

```sh
npm install
```

您还需要在本地安装 MySQL 数据库

```sh
node app-mysql.js
```

### 功能介绍

这个应用程序提供以下功能：

添加图书：用户可以输入书籍名称和作者名字，然后将书籍信息保存到 MySQL 数据库中。
列出所有图书：用户可以查看所有已保存的书籍信息。
退出系统：用户可以退出应用程序。
