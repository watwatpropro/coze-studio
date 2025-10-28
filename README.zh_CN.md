![Image](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/943f576df3424fa98580c2ad18946719~tplv-goo7wpa0wc-image.image)
<div align="center">
<p>
  <a href="#什么是-coze-studio">Coze Studio</a> •
  <a href="#功能清单">功能清单</a> •
  <a href="#快速开始">快速开始</a> •
  <a href="#开发指南">开发指南</a>
</p>
<p>
  <img alt="License" src="https://img.shields.io/badge/license-apache2.0-blue.svg">
  <img alt="Go Version" src="https://img.shields.io/badge/go-%3E%3D%201.23.4-blue">
</p>

[English](README.md) | 中文

</div>

## 什么是 Coze Studio

[Coze Studio](https://www.coze.cn/home) 是一站式 AI Agent 开发工具。提供各类最新大模型和工具、多种开发模式和框架，从开发到部署，为你提供最便捷的 AI Agent 开发环境。

* **提供 AI Agent 开发所需的全部核心技术**：Prompt、RAG、Plugin、Workflow，使得开发者可以聚焦创造 AI 核心价值。
* **开箱即用，用最低的成本开发最专业的 AI Agent**：Coze Studio 为开发者提供了健全的应用模板和编排框架，你可以基于它们快速构建各种 AI Agent ，将创意变为现实。

Coze Studio，源自服务了上万家企业、数百万开发者的「扣子开发平台」，我们将它的核心引擎完全开放。它是一个一站式的 AI Agent 可视化开发工具，让 AI Agent 的创建、调试和部署变得前所未有的简单。通过 Coze Studio 提供的可视化设计与编排工具，开发者可以通过零代码或低代码的方式，快速打造和调试智能体、应用和工作流，实现强大的 AI 应用开发和更多定制化业务逻辑，是构建低代码 AI 产品的理想选择。Coze Studio 致力于降低 AI Agent 开发与应用门槛，鼓励社区共建和分享交流，助你在 AI 领域进行更深层次的探索与实践。

Coze Studio 的后端采用 Golang 开发，前端使用 React + TypeScript，整体基于微服务架构并遵循领域驱动设计（DDD）原则构建。为开发者提供一个高性能、高扩展性、易于二次开发的底层框架，助力开发者应对复杂的业务需求。

## 功能清单
| **功能模块** | **功能点** |
| --- | --- |
| 模型服务 | 管理模型列表，可接入OpenAI、火山方舟 等在线或离线模型服务 |
| 搭建智能体 | * 编排、发布、管理智能体 <br> * 支持配置工作流、知识库等资源 |
| 搭建应用 | * 创建、发布应用 <br> * 通过工作流搭建业务逻辑 |
| 搭建工作流 | 创建、修改、发布、删除工作流 |
| 开发资源 | 支持创建并管理以下资源： <br> * 插件 <br> * 知识库 <br> * 数据库 <br> * 提示词 |
| API 与 SDK | * 创建会话、发起对话等 OpenAPI <br> * 通过 Chat SDK 将智能体或应用集成到自己的应用 |
## 快速开始
了解如何获取并部署 Coze Studio 开源版，快速构建项目、体验 Coze Studio 开源版。

环境要求：

* 在安装 Coze Studio 之前，请确保您的机器满足以下最低系统要求： 2 Core、4 GB
* 提前安装 Docker、Docker Compose，并启动 Docker 服务。

部署步骤：

1. 获取源码。

   ```Bash
   # 克隆代码
   git clone https://github.com/coze-dev/coze-studio.git
   ```

2. 部署并启动服务。
   首次部署并启动 Coze Studio 需要拉取镜像、构建本地镜像，可能耗时较久，请耐心等待。如果看到提示 "Container coze-server Started"，表示 Coze Studio 服务已成功启动。 
   
   ```Bash
   cd coze-studio
   # start service
   # for macOS or Linux
   make web  
   # for windows
   cp .env.example .env
   docker compose -f ./docker/docker-compose.yml up
   ```
   
   **启动失败常见问题可参考[常见问题](https://github.com/coze-dev/coze-studio/wiki/9.-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)**。
3. 注册账号，访问 `http://localhost:8888/sign` 输入用户名、密码点击注册按钮。
4. 配置模型：访问 `http://localhost:8888/admin/#model-management` 新增模型。（模型管理功能还在 beta 测试中，请将 `docker-compose.yml` 文件中的 `coze-server` 和 `coze-web` 服务镜像分别修改为 `cozedev/coze-studio-server:0.5.0.beta.3` 和 `cozedev/coze-studio-web:0.5.0.beta`进行体验）。
5. 访问 Coze Studio `http://localhost:8888/`。

> [!WARNING]
> 如果要将 Coze Studio 部署到公网环境，建议在部署前评估整体评估安全风险，例如账号注册功能、工作流代码节点 Python执行环境、Coze Server 监听地址配置、SSRF 和部分 API 水平越权的风险，并采取相应防护措施。详细信息可参考[快速开始](https://github.com/coze-dev/coze-studio/wiki/2.-%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B#%E5%85%AC%E7%BD%91%E5%AE%89%E5%85%A8%E9%A3%8E%E9%99%A9)。
## 开发指南

* **项目配置**：
   * [模型配置](https://github.com/coze-dev/coze-studio/wiki/3.-模型配置)：部署 Coze Studio 开源版之前，必须配置模型服务，否则无法在搭建智能体、工作流和应用时选择模型。
   * [插件配置](https://github.com/coze-dev/coze-studio/wiki/4.-插件配置)：如需使用插件商店中的官方插件，必须先配置插件，添加第三方服务的鉴权秘钥。
   * [基础组件配置](https://github.com/coze-dev/coze-studio/wiki/5.-基础组件配置)：了解如何配置图片上传等组件，以便在 Coze Studio 中使用上传图片等功能。
* [API 参考](https://github.com/coze-dev/coze-studio/wiki/6.-API-参考)：Coze Studio 社区版 API 和 Chat SDK 通过个人访问令牌鉴权，提供对话和工作流相关 API。
* [开发规范](https://github.com/coze-dev/coze-studio/wiki/7.-开发规范)：
   * [项目架构](https://github.com/coze-dev/coze-studio/wiki/7.-%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83#%E9%A1%B9%E7%9B%AE%E6%9E%B6%E6%9E%84)：了解 Coze Studio 开源版的技术架构与核心组件。
   * [代码开发与测试](https://github.com/coze-dev/coze-studio/wiki/7.-%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83#%E4%BB%A3%E7%A0%81%E5%BC%80%E5%8F%91%E4%B8%8E%E6%B5%8B%E8%AF%95)：了解如何基于 Coze Studio 开源版进行二次开发与测试。
   * [故障排查](https://github.com/coze-dev/coze-studio/wiki/7.-%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83#%E6%95%85%E9%9A%9C%E6%8E%92%E6%9F%A5)：了解如何查看容器状态、系统日志。

## 使用 Coze Studio 开源版
> 关于如何使用 Coze Studio，可参考[扣子开发平台官方文档中心](https://www.coze.cn/open/docs)获取更多资料。需要注意的是，音色等部分功能限商业版本使用，开源版与商业版的功能差异可参考**功能清单**。


* [快速入门](https://www.coze.cn/open/docs/guides/quickstart)：通过 Coze Studio 快速搭建一个 AI 助手智能体。
* [开发智能体](https://www.coze.cn/open/docs/guides/agent_overview)：如何创建、编排、发布与管理智能体。你可以使用知识、插件等功能解决模型幻觉、专业领域知识不足等问题。除此之外，Coze Studio 还提供了丰富的记忆功能，使智能体在与个人用户交互时，可根据个人用户的历史对话等生成更准确性的回复。
* [开发工作流](https://www.coze.cn/open/docs/guides/workflow)：工作流是一系列可执行指令的集合，用于实现业务逻辑或完成特定任务。它为应用/智能体的数据流动和任务处理提供了一个结构化框架。 Coze Studio 提供了一个可视化画布，你可以通过拖拽节点迅速搭建工作流。
* [插件等资源](https://www.coze.cn/open/docs/guides/plugin)：在 Coze Studio，工作流、插件、数据库、知识库和变量统称为资源。
* **API & SDK**： Coze Studio 支持[对话和工作流相关 API](https://github.com/coze-dev/coze-studio/wiki/6.-API-%E5%8F%82%E8%80%83)，你也可以通过 [Chat SDK](https://www.coze.cn/open/docs/developer_guides/web_sdk_overview) 将智能体或应用集成到本地业务系统。
* [实践教程](https://www.coze.cn/open/docs/tutorial/chat_sdk_web_online_customer_service)：了解如何通过 Coze Studio 实现各种 AI 场景，例如通过 Chat SDK 搭建网页在线客服。 

## License
本项目采用 Apache 2.0 许可证。详情请参阅 [LICENSE](https://github.com/coze-dev/coze-studio/blob/main/LICENSE-APACHE) 文件。
## 社区贡献
我们欢迎社区贡献，贡献指南参见 [CONTRIBUTING](https://github.com/coze-dev/coze-studio/blob/main/CONTRIBUTING.md) 和 [Code of conduct](https://github.com/coze-dev/coze-studio/blob/main/CODE_OF_CONDUCT.md)，期待您的贡献！
## 安全与隐私
如果你在该项目中发现潜在的安全问题，或你认为可能发现了安全问题，请通过我们的[安全中心](https://security.bytedance.com/src) 或[漏洞报告邮箱](mailto:sec@bytedance.com)通知字节跳动安全团队。
请**不要**创建公开的 GitHub Issue。
## 加入社区

我们致力于构建一个开放、友好的开发者社区，欢迎所有对 AI Agent 开发感兴趣的开发者加入我们！

### 🐛 问题反馈与功能建议
为了更高效地跟踪和解决问题，保证信息透明和便于协同，我们推荐通过以下方式参与：
- **GitHub Issues**：[提交 Bug 报告或功能请求](https://github.com/coze-dev/coze-studio/issues)
- **Pull Requests**：[贡献代码或文档改进](https://github.com/coze-dev/coze-studio/pulls)

### 💬 技术交流与讨论
加入我们的技术交流群，与其他开发者分享经验、获取项目最新动态：

**飞书群聊**  
使用飞书移动端扫描下方二维码加入：

![Image](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/0a49081e8f3743e8bf3dcdded4bb571a~tplv-goo7wpa0wc-image.image)

**Discord 服务器**  
点击加入：[Coze Community](https://discord.gg/sTVN9EVS4B)

**Telegram 群组**  
点击加入：Telegram Group [Coze](https://t.me/+pP9CkPnomDA0Mjgx)

## 致谢
感谢所有为 Coze Studio 项目做出贡献的开发者和社区成员。特别感谢：

* [Eino](https://github.com/cloudwego/eino) 框架团队 - 为 Coze Studio 的智能体和工作流运行时、模型抽象封装、知识库索引构建和检索提供了强大的支持
* [FlowGram](https://github.com/bytedance/flowgram.ai) 团队 - 为 Coze Studio 的工作流画布编辑页提供了高质量的流程搭建引擎
* [Hertz](https://github.com/cloudwego/hertz) 团队 - 高性能、强扩展性的 Go HTTP 框架，用于构建微服务
* 所有参与测试和反馈的用户