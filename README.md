<!--
 * @Author: PengKang
 * @Date: 2020-08-11 16:57:54
 * @LastEditors: PengKang
 * @LastEditTime: 2021-03-08 16:03:10
 * @FilePath: \react-library\README.md
-->

# React 发布组件自检清单

1. 选择合适自己的打包工具
2. 安装常用第三方库
3. 组件调试方式
4. commit 规范
5. npm 发布、升级及 change log 生成
6. Readme 模板
7. 组件文档搭建

## 1.选择合适自己的打包工具

#### 1.1 介绍

目前 4 款主流的打包工具：grunt ， gulp，webpack， rollup，以发布时间为顺序。

Grunt：最老牌的打包工具，它运用配置的思想来写打包脚本，一切皆配置，所以会出现比较多的配置项，诸如 option,src,dest 等等。而且不同的插件可能会有自己扩展字段，认知成本高，运用的时候需要明白各种插件的配置规则。

Gulp：用代码方式来写打包脚本，并且代码采用流式的写法，只抽象出了 gulp.src, gulp.pipe, gulp.dest, gulp.watch 接口，运用相当简单。更易于学习和使用，使用 gulp 的代码量能比 grunt 少一半左右。（PS:此介绍的是 gulp3，在 gulp4 不可用）

Webpack: 是模块化管理工具和打包工具。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、AMD 模块、ES6 模块、CSS、图片等。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。它定位是模块打包器，而 Gulp/Grunt 属于构建工具。Webpack 可以代替 Gulp/Grunt 的一些功能，但不是一个职能的工具，可以配合使用。

Rollup：下一代 ES6 模块化工具，最大的亮点是利用 ES6 模块设计，利用 tree-shaking 生成更简洁、更简单的代码。一般而言，对于应用使用 Webpack，对于类库使用 Rollup；需要代码拆分(Code Splitting)，或者很多静态资源需要处理，再或者构建的项目需要引入很多 CommonJS 模块的依赖时，使用 webpack。代码库是基于 ES6 模块，而且希望代码能够被其他人直接使用，使用 Rollup。

#### 1.2 使用总结

> 本人 Grunt 和 Gulp 用的比较少，不做评论。webpack 的话更偏业务一点，更强大，官方文档非常的详细，但也过于臃肿了。rollup 单纯打包 js 的话会更加简洁精炼一点，能够按需打包 js。如果单纯是为开发组件，打包 js，个人推荐使用 rollup。

## 2.安装常用第三方库

1. @babel/preset-env 可以允许我们使用最新的 js 语法
2. @babel/preset-react 开发 react 组件时，需要对 react 语法进行转换
3. styled-components、@emotion/core、@emotion/styled 使用 JavaScript 编写 css 样式库

## 3.组件调试方式

> 在本地开发 npm 模块的时候，我们可以通过 npm link 或 yarn link 命令，将当前开发的模块链接到对应的项目中，来达到调试的目的。

e.g :

```
// 进入正在开发的npm库
cd react-library
npm link
```

```
// 进入其他的项目
cd my-app
npm link react-library(package.json中的name)
```

## 4. commit 规范

> 相信大家在 github 上也看过很多开源库，他们的 commit 写的非常的详细规范。当然社区有很多种写法规范，这里推荐使用 Angular 规范。

#### 4.1 commit 的 7 个类别

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

#### 4.2 vscode 插件

如果是使用 vscode 开发的话，推荐大家使用 git-commit-plugin,可以快速生成 commit 模板。

#### 4.3 小结

不管是通过模板方式，还是直接自己写，这些都不是关键。关键还是在于自身，要自己知道本次修改代码做了那些事情，通过 commit 来对自己的工作做一个拆分，不然就算你模板写再好，把十几二十个文件一起提交的话都会令人头大。ps. commit 规范一定要注意，这和下面要讲的 change log 生成息息相关

## 5.版本升级、change log 生成及发布

### 5.1 版本升级 npm version

```
// npm version 命令概览
npm version --help

npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
(run in package dir)
```
以下设置都是package里面的版本号
#### prerelease

版本号 1.0.0-> 1.0.1-0，再次执行 1.0.1-0 -> 1.0.1-1
> 当执行npm version prerelease时，如果没有预发布号，则增加minor，同时prerelease 设为0；
如果有prerelease， 则prerelease 增加1。 

##### prepatch
版本号1.0.1-1变为 1.0.2-0
> 直接升级小号，增加预发布号为0。

#####  preminor
版本号1.0.2-0变为 1.1.0-0
> 直接升级中号，小号置为0，增加预发布号为0。


#####  premajor
版本号1.1.0-0变为 2.0.0-0
> 直接升级大号，中号、小号置为0，增加预发布号为0。

#####  patch

版本号2.0.0变为 2.0.1;

#####  minor

版本号2.0.1变为 2.1.0;

#####  major

版本号2.0.1变为 3.0.0;

## 6.Readme模板

推荐一份高start的模板[standard-readme](https://github.com/RichardLitt/standard-readme),或者使用[readme-md-generator](https://github.com/kefranabg/readme-md-generator)组件生成，下面贴一个比较简单的readme模板：

# Title

This is an example file with default selections.

## Install

```
```

## Usage

```
```

## Contributing

PRs accepted.

## License

MIT © Richard McRichface


## 7.组件文档搭建

* [dumi](https://d.umijs.org/) 
* [vuePress](https://vuepress.vuejs.org/zh/)


