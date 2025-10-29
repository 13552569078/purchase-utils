import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    // 打包为库模式
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // 入口文件
      name: "myUtils", // 全局变量名（UMD模式用）
      fileName: (format) => `my-utils.${format}.js`, // 输出文件名
      formats: ["es", "umd"], // 输出两种格式：ES模块和UMD
    },
    // 压缩代码
    minify: "terser",
  },
});
