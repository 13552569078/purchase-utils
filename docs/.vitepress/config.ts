import { defineConfig } from "vitepress";

export default defineConfig({
  title: "@zhj92/purchase-utils", // 文档标题
  description: "采购管理智能体的工具函数库文档",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],
    sidebar: {
      "/": [{ text: "使用指南", link: "/guide/usage" }],
    },
  },
});
