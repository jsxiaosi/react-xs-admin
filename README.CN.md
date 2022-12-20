<div align="center">
<a href="https://github.com/jsxiaosi/react-xs-admin">
<h1>react-xs-admin</h1>
</a>
</div>

**中文** | [English](./README.EN.md)

## 简介

基于`React18`,`And Design`,`Vite4`等主流技术开发的开箱即用后台模板，内置国际化、路由权限控制等方案能够满足多数企业管理系统需求！

## 特性

- **最新技术栈**：使用 React18/Vite4 等前端前沿技术开发
- **主题**：可配置的主题
- **国际化**：内置完善的国际化方案
- **权限**：权限路由

## 预览

<img src="https://www.jsxiaosi.com/image/react-xs-admin1.png?max=xiaosi" width="100%">

<img src="https://www.jsxiaosi.com/image/react-xs-admin2.png?max=xiaosi" width="100%">

## 准备

- [Node](http://nodejs.org/) 和 [Git](https://git-scm.com/) -项目开发环境
- [Vite](https://cn.vitejs.dev/) - 熟悉 Vite 特性
- [React18](https://reactjs.org/) - 熟悉 React18 基础语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 Es6 基本语法
- [React Router V6](https://reactrouter.com/en/main) - 熟悉 React Router V6 基本使用
- [And Design 5](https://ant.design/docs/react/introduce-cn) - Ui 基本使用
- [Emotion](https://emotion.sh/docs/introduction) - 基本使用

## 安装使用

### 1. 获取项目代码（Https or SSH）

```bash
git clone https://github.com/jsxiaosi/react-xs-admin.git

git clone git@github.com:jsxiaosi/react-xs-admin.git
```

或者通过[`xs-cli`](https://github.com/jsxiaosi/xs-cli)快速创建

```bash
npx @jsxiaosi/xs-cli create [project-name]
```

### 2.安装依赖

```bash
cd react-xs-admin
```

推荐使用`pnpm`

```bash
pnpm i
```

`npm`安装

```bash
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
# 如果下载依赖慢可以使用淘宝镜像源安装依赖
npm install --registry=https://registry.npm.taobao.org

```

### 3.运行

```bash
npm run dev
```

### 4.打包

```bash
npm run build
```

## 项目地址

- [react-xs-admin](https://github.com/jsxiaosi/react-xs-admin)

## 如何贡献

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feature/xxxx`
3. 提交你的修改: `git commit -m 'feature: add xxxxx'`
4. 推送您的分支: `git push origin feature/xxxx`
5. 提交`pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范

  - `feat` 新增功能
  - `fix` 修复缺陷
  - `docs` 文档变更
  - `style` 代码格式
  - `refactor` 代码重构
  - `perf` 性能优化
  - `test` 添加疏漏测试或已有测试改动
  - `build` 构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)
  - `ci` 修改 CI 配置、脚本
  - `revert` 回滚 commit
  - `chore` 对构建过程或辅助工具和库的更改 (不影响源文件)
  - `wip` 正在开发中
  - `types` 类型定义文件修改

## 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 维护者

[@jsxiaosi](https://github.com/jsxiaosi)

## License

[MIT © 2022](./LICENSE)
