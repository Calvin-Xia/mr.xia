# ?? 快速启动指南

## ?? 文件清单

### 核心文件
- `index.html` - 网站首页
- `Works.html` - 作品展示页
- `timetable.html` - 在线计时器工具
- `statement.html` - 网站声明页
- `404.html` - 404错误页
- `styleguide.html` - 样式指南（开发参考）

### 资源文件
- `css/style.css` - 统一样式表
- `js/main.js` - 主脚本文件

### 配置文件
- `README.md` - 项目说明
- `REFACTOR.md` - 重构说明
- `project.json` - 项目配置
- `.gitignore` - Git忽略规则

## ?? 本地预览

### 方法一：直接打开
双击 `index.html` 在浏览器中打开

### 方法二：使用本地服务器（推荐）

#### Python 3
```bash
python -m http.server 8000
```

#### Node.js (需要安装 http-server)
```bash
npx http-server
```

#### VS Code Live Server
1. 安装 "Live Server" 扩展
2. 右键点击 index.html
3. 选择 "Open with Live Server"

然后在浏览器访问：`http://localhost:8000`

## ?? 页面导航

- **首页** → index.html
  - 网站介绍
  - 快速导航
  - 实时时间显示

- **作品** → Works.html
  - 个人作品展示
  - 项目介绍

- **工具** → timetable.html
  - 在线计时器
  - 简单实用

- **声明** → statement.html
  - 版权声明
  - 隐私政策
  - 免责声明

- **样式指南** → styleguide.html
  - 设计元素展示
  - 组件库（开发参考）

## ?? 自定义修改

### 修改颜色主题
编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #6366f1;    /* 主色 */
    --secondary-color: #ec4899;  /* 辅色 */
    --accent-color: #f59e0b;     /* 强调色 */
}
```

### 修改网站内容
直接编辑对应的 HTML 文件即可

### 添加新页面
1. 复制 `index.html` 作为模板
2. 修改内容
3. 在导航中添加链接

## ?? 开发工具推荐

- **VS Code** - 代码编辑器
- **Live Server** - 实时预览
- **Chrome DevTools** - 调试工具

## ?? 注意事项

1. 所有页面共享同一个 CSS 文件
2. 导航栏会自动高亮当前页面
3. 响应式设计支持移动设备
4. 建议使用现代浏览器访问

## ?? 常见问题

**Q: 样式没有生效？**
A: 检查 `css/style.css` 文件路径是否正确

**Q: JavaScript 功能不工作？**
A: 检查浏览器控制台是否有错误，确认 `js/main.js` 已正确加载

**Q: 如何部署到服务器？**
A: 将所有文件上传到服务器根目录即可

## ?? 部署选项

### GitHub Pages
1. 推送代码到 GitHub
2. 在仓库设置中启用 GitHub Pages
3. 选择 main 分支

### Netlify / Vercel
1. 导入 GitHub 仓库
2. 自动部署（零配置）

### 传统主机
直接上传所有文件到 public_html 或 www 目录

## ?? 进阶使用

查看 `REFACTOR.md` 了解：
- 设计理念
- 技术细节
- 代码规范
- 优化建议

---

祝你使用愉快！ ??
