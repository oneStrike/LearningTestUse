## git 和 node

### NODE 安装

<https://nodejs.org/zh-cn/> 推荐大家使用 LTS 稳定版本，把安装包下载下来后，直接一路下一步安装即可（最好把它安装到 C 盘 [默认盘符] ，记号安装目录）

1. 如果安装不了，我们可以把别人安装完成的内容拷贝过来，通过修改环境变量完成安装

> 高级系统设置 -> 环境变量 -> 系统变量 -> Path，把原有的变量值备份一份，在原有的基础上增加 node 的安装目录即可 ![nN3qaQ.png](https://s2.ax1x.com/2019/09/10/nN3qaQ.png)

2.验证安装是否成功 WIN + R => 打开运行窗口 => 输入 cmd => 打开 DOS 窗口在 DOS 窗口中，输入 node -v / node --version / npm -v 能出现版本号，则代表安装成功，不能出现版本号，提示 node 不是内部或者外部命令的，遵循第一步配置环境变量即可 ![nN37qS.png](https://s2.ax1x.com/2019/09/10/nN37qS.png)

### NODE 基础概念

1. node 并不是一门语言，它是一个工具或者环境

- 基于 V8 引擎（webkit）渲染和解析 JS 的
- 单线程
- 无阻塞 I/O 操作
- 事件驱动
- ...

之所以把 node 称之为服务器端语言，是因为 node 给予 JS 操作服务器的能力：我们在服务器端安装 node，只用 js 完成服务器端需要处理的一些事情，最后把写好的 js 代码交给 node 环境运行即可

---

2. 在 node 环境中把 JS 代码执行

- REPL 命令（Read-Evaluate-Print-Loop：输入-求值-输出-循环）
- 基于 node xxx.js 命令执行
- 基于 WB 这类编辑工具直接执行

基于 node 命令执行，我们需要先找到当前文件所在的文件夹，然后再这个目录下打开 DOS 窗口，在窗口中执行 node xxx.js，这样就相当于在 node 环境下把 JS 文件中的代码执行了

> 如何在当前文件目录中打开 DOS 窗口
>
> - 基于 DOS 命令中的“cd”一层层进入
> - 在当前目录地址栏中输入 cmd，快速在当前目录打开
> - shift+鼠标右键，在此处打开命令窗口

在 WB 中配置 node 环境 ![nN3Tr8.png](https://s2.ax1x.com/2019/09/10/nN3Tr8.png) ![nN3bVg.png](https://s2.ax1x.com/2019/09/10/nN3bVg.png)

### 扫盲：常用的 DOS 命令

`ping www.baidu.com -t`：测试网速 `Ctrl+c`：结束当前正在运行的操作 `exit`：退出当前窗口 `ipconfig -all`：查看当前电脑的 物理地址/IP 地址/子网掩码/DNS 等信息 `cls`：清屏 `cd`：进入到指定的文件目录（windows 电脑需要先进入到对应的磁盘 `E:`） `cd ../`：返回上级目录 `cd ./`：当前目录 `cd /`：根目录 `dir`：查看当前目录下所有的文件 `mkdir`：创建文件夹 `copy con xxx.xx`：创建文件并且给文件中输入内容，输入完成后，用 Ctrl+c 结束并保存 `del xxx.xx`：删除文件 `rmdir xxx`：删除文件夹 ...

### NPM 模块管理

安装完成 node 后，基本上自带 npm 模块管理器

我们需要一个第三方（别人写的）模块、插件、类库或者框架等，需要提前下载安装才可以使用

- 百度搜索，找到下载地址，然后基于浏览器下载即可（资源比较混乱，不好搜索）
- 也可以基于 npm 等第三方包管理器下载（yarn / bower ... 都是第三方模块管理器）

  1.npm 下载的资源都是在<https://www.npmjs.com/> 中下载的 `npm install xxx`：把资源或者第三方模块下载到当前目录下 `npm install xxx -g (--global)`：把资源或者第三方模块安装到全局环境下（目的：以后可以基于命令来操作一些事情） `npm uninstall xxx / npm uninstall xxx -g`：从本地或者全局卸载

> 基于 npm 安装的一些细节点：
>
> - 需要连网（基于 npm 是从国外服务器上下载资源，所以下载速度较慢）
> - 下载成功后，当前目录中多增加一个 node_modules 文件夹，在这个文件夹中找到我们安装的模块
> - 一般来说，下载下来的内容包含源码和最后供开发者使用的压缩版本

2.解决下载慢的问题 **`基于nrm切换到国内下载源（一般是淘宝镜像）`** 首先安装 nrm，而且是把它安装到全局环境下（因为我们需要使用命令）

> npm install nrm -g
>
> 安装完成后，我们可以使用 nrm 命令
>
> - nrm ls 查看当前可用源
> - nrm use xxx �� 用某个源
>
> 切完源，还是基于 npm 安装操作

**`可以基于yarn来安装管理`** 首先还是需要先安装 yarn，安装到全局，然后基于 yarn 安装我们需要的模块

> npm install yarn -g
>
> 基于 yarn 安装（只能安装在本地，不能安装到全局） yarn add xxx yarn remove xxx

**`基于cnpm淘宝镜像来处理`** 自己回去尝试

---

3.解决安装版本的问题

> 首先查看当前模块的历史版本信息 `npm view jquery > jquery.version.json` ：把当前模块的历史信息输出到具体的某个文件中（文件名自己随便起的）
>
> 安装指定的版本模块 `yarn add jquery@1.11.3`：npm 和 yarn 都是这样来指定安装具体版本模块的

---

课后扩展：

1. bower 是从 gitHub 下载安装，有兴趣同学回去研究一下它的使用
2. 回去后向全局环境中安装：less / babel-cli ...

---

### gitHub

> <https://github.com/>
>
> 一个提供代码管理（托管）的公共平台，我们以及众多开发者，会把自己的生产的 组件/类库/插件/框架 等托管到这个平台中，供别人下载使用和研究
>
> 在 gitHub 中，我们可以创建仓库来管理自己的项目文件，而 gitHub 支持开发者通过 git 操作，把本地的项目代码推送到指定的仓库中，它还提供静态 web 页面的发布等
>
> 在国内有一个和 gitHub 类似的网站：coding，和 gitHub 类似，也是提供代码管理的平台

### git 的基础知识

> git 是一个分布式代码版本管理控制系统
>
> - 记录当前产品代码的所有版本信息（历史修改信息）,而且方便快速回退到某一个具体的版本
> - 方便团队协作开发，能够检测代码冲突，能够合并代码等

`svn`：在 git 诞生前就已经存在的版本控制系统，不过它是“集中式”管理 `git`：是分布式版本管理体统

1.集中式版本控制系统

2.分布式版本控制系统

---

### git 的工作管理和基础操作

**`在本地创建git仓库管理我们的代码`**

> 初次使用 git，先在本地配置一些基础信息 \$ git config -l \$ git config --global user.name xxx \$ git config --global user.email xxx 建议大家配置的用户名和邮箱和 gitHub 保持一致（这样以后在本地向 gitHub 推送内容的时候，能够展示出是谁推荐的）

1. `git init`

> 会在当前目录中创建一个空的仓库，文件目录中生成一个 “.git” 的隐藏文件，这个文件很重要，我们本地仓库的版本信息等都存储在这里

2. `.gitignore`

> 在当前目录（git 仓库根目录）创建一个 “.gitignore” 文件，这个文件中存储了当 git 提交的时候所忽略的文件
>
> 可以基于 WB 创建（new -> file -> .gitignore）可以基于 linux 命令 `$ touch .gitignore` （mac 终端、git bash、或者集成了 linux 的 dos，可以使用 linux 命令）

```TEXT
\# dependencies
node_modules

\# testing
/coverage

\# production
/build

\# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

\# npm or yarn
npm-debug.log*
yarn-debug.log*
yarn-error.log*

\# webStorm
.idea
```

### GIT 工作原理及操作

@(201802)

当我们在本地创建一个 git 仓库后，我们可以基于这个仓库管理我们的代码

**`git的工作流程`**

> 每一个 git 仓库都划分为三个区域
>
> - 工作区：编辑代码的地方
> - 暂存区：临时存储要生成版本代码的地方
> - 历史区：存储的是生成的每一个版本代码

![Alt text](./1523412523484.png)

**`工作区提交到暂存区`**

> \$ git status 查看代码或者文件的状态（当前处于哪个区域）: 红色（当前处于工作区，还没有提交到暂存区）绿色（当前处于暂存区，还没有提交到历史区）如果没有文件，代表三个区域代码已经同步，历史版本也在历史区生成了

`$ git add . / $ git add -A` 把当前工作区中所有最新修改的文件，都提交到暂存区

**`暂存区到历史区`** `$ git commit`

> 这样执行后，会弹出一个提交文本输入界面，需要我们编写本次提交到历史区，给当前版本编写的备注信息
>
> 先按 i 进入编辑插入模式输入备注信息按 ESC 输入“ :wq ” 保存并退出

`$ git commit -m'自己需要编写的备注信息'`

`$ git log` 查看当前历史区提交的记录（查看版本信息）

`$ git diff` 工作区 VS 暂存区

`$ git diff master` 工作区 VS 历史区（master 分支）

`$ git diff --cached` 暂存区 VS 历史区

### git 和 gitHub 同步

1. 让本地的 git 仓库和远程仓库建立关联

`$ git remote -v` 查看所有的关联信息

`$ git remote add xxx [远程仓库git地址]` 建立关联

`$ git remote remove xxx` 移除关联

我们远程仓库关联在一起的名字默认是：origin，当然自己可以随意修改

2. 把本地的信息推送到远程仓库上，或者从远程仓库上拉取最新的信息到本地仓库

> 我们本地推送和拉取的信息，既有代码也有版本信息，所以说与其说是推送和拉取，不如说是和远程仓库保持信息的同步

在推送之前，我们都应该先拉取 `$ git pull origin（这个名字就是和远程仓库关联的这个名字，以自己设置的为主） master` 从远程仓库的 master 分支拉取最新的信息

`$ git push origin master` 把自己本地信息推送到远程仓库的 master 分支下

---

以上是操作知识点，真实项目开发流程

1. LEADER 会首先创建一个远程仓库（这个仓库可能是空的，也可能是包含了项目需要的基础的结构信息）
2. 作为开发者，我们需要在本地创建一个本地仓库，还需要让当前本地的仓库和远程仓库保持关联

> 原始做法： git init git remote add origin [GIT 仓库地址]
>
> 简单做法： git clone [远程仓库地址][克隆后的名字：可以不设置，默认是仓库名]

3. 在本地开发产品，需要同步的时候，我们首先把工作区内容在本地仓库中放到历史区，生成版本信息（git add . / git commit -m''），在把本地历史区的信息推送到远程仓库上（git pull / git push）
4. 在团队协作开发的时候，LEADER 会在自己的 gitHub 账号下创建一个远程仓库，那么团队其他成员在向这个远程仓库推送信息的时候，使用自己的账号是没有推送权限的，我们需要把当前这个远程仓库，在 github 中创建工作群组，让更多人用自己的账号也有操作权限 ![nN8Qde.png](https://s2.ax1x.com/2019/09/10/nN8Qde.png) 小组成员在自己的邮箱中收到一封邀请邮件，需要确认同意 ![nN8lIH.png](https://s2.ax1x.com/2019/09/10/nN8lIH.png) 这样就是加入成功了 ![nN8uqO.png](https://s2.ax1x.com/2019/09/10/nN8uqO.png)

---
