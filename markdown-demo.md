# Markdown语法完整示例

## 一、标题层级

这是一级标题（#）
这是二级标题（##）
这是三级标题（###）
这是四级标题（####）
这是五级标题（#####）
这是六级标题（######）

---

## 二、文本格式

### 粗体与斜体

这是**粗体文本**，这是__粗体文本__

这是*斜体文本*，这是_斜体文本_

这是***粗斜体文本***

### 删除线

这是~~删除线文本~~

### 下划线

<u>这是下划线文本</u>

---

## 三、代码块

### 行内代码

这是一段包含`行内代码`的文本。

### 代码块（无语言）

```
这是一段没有指定语言的代码块
可以用来展示任意文本内容
```

### 代码块（带语言高亮）

#### JavaScript代码

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
    return `Welcome, ${name}`;
}

const message = greet('Mr.Xia');
console.log(message);
```

#### Python代码

```python
def calculate_fibonacci(n):
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# 计算斐波那契数列前10项
for i in range(10):
    print(f"F({i}) = {calculate_fibonacci(i)}")
```

#### CSS代码

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1rem;
}

.button {
    padding: 0.75rem 1.5rem;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}
```

#### HTML代码

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>示例页面</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <a href="/">首页</a>
            <a href="/about">关于</a>
            <a href="/contact">联系</a>
        </nav>
    </header>
    <main>
        <h1>欢迎来到我的网站</h1>
        <p>这是一个示例页面，展示Markdown渲染功能。</p>
    </main>
</body>
</html>
```

---

## 四、列表

### 无序列表

- 第一项内容
- 第二项内容
  - 嵌套子项1
  - 嵌套子项2
- 第三项内容

### 有序列表

1. 第一步：初始化项目
2. 第二步：安装依赖
3. 第三步：配置环境
   3.1 配置开发环境
   3.2 配置生产环境
4. 第四步：启动应用

### 任务列表

- [x] 已完成任务1
- [ ] 待完成任务2
- [x] 已完成任务3
- [ ] 待完成任务4

---

## 五、表格

### 基础表格

| 姓名 | 年龄 | 职业 | 城市 |
|------|------|------|------|
| 张三 | 28 | 工程师 | 北京 |
| 李四 | 32 | 设计师 | 上海 |
| 王五 | 25 | 产品经理 | 广州 |

### 对齐表格

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:--------:|-------:|
| 内容1  |   内容2   |   内容3 |
| 内容4  |   内容5   |   内容6 |

### 复杂表格

| 编程语言 | 创建时间 | 用途 | 流行度 |
|---------|---------|------|--------|
| JavaScript | 1995 | Web开发 | ⭐⭐⭐⭐⭐ |
| Python | 1991 | 数据科学 | ⭐⭐⭐⭐⭐ |
| Java | 1995 | 企业应用 | ⭐⭐⭐⭐ |
| C++ | 1985 | 系统开发 | ⭐⭐⭐⭐ |
| Go | 2009 | 云计算 | ⭐⭐⭐ |

---

## 六、引用块

### 普通引用

> 这是一段引用文本。
> 可以包含多行内容。

### 嵌套引用

> 第一层引用
>
> > 第二层引用
> >
> > > 第三层引用

### 引用包含其他元素

> 引用中可以包含**粗体**、*斜体*、`代码`等格式。
>
> > 甚至可以包含列表：
> > - 列表项1
> > - 列表项2
> > - 列表项3

---

## 七、超链接

### 文本链接

[Mr.Xia的个人网站](https://github.com/Calvin-Xia)

### 带标题的链接

[GitHub](https://github.com "访问GitHub")

### 自动链接

https://github.com/Calvin-Xia

### 邮箱链接

[联系我](mailto:xiaziyuan913@outlook.com)

---

## 八、图片

### 基础图片

![示例图片](https://via.placeholder.com/400x200/667eea/ffffff?text=Example+Image)

### 带标题的图片

![示例图片](https://via.placeholder.com/400x200/764ba2/ffffff?text=Example+Image "这是一个示例图片")

### 带尺寸的图片（HTML方式）

<img src="https://via.placeholder.com/200x100/ec4899/ffffff?text=Small+Image" alt="小图" width="200" height="100">

---

## 九、分割线

### 不同样式的分割线

---

***

___

---

## 十、数学公式

### 行内公式

这是一个行内公式：$E = mc^2$

另一个例子：$a^2 + b^2 = c^2$

### 块级公式

$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

---

## 十一、HTML标签支持

<details>
<summary>点击展开更多内容</summary>

这是隐藏的内容，点击上面的标题可以展开或收起。

可以包含任何Markdown内容：
- 列表项1
- 列表项2
- 代码块等

</details>

---

## 十二、混合示例

### 完整的技术文档示例

# 项目开发指南

## 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0
- Git >= 2.0.0

## 安装步骤

1. 克隆仓库：
   ```bash
   git clone https://github.com/Calvin-Xia/project.git
   cd project
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

## 项目结构

| 目录 | 说明 |
|------|------|
| `src/` | 源代码目录 |
| `dist/` | 构建输出目录 |
| `tests/` | 测试文件目录 |
| `docs/` | 文档目录 |

## 核心功能

> 本项目采用模块化架构设计，具有以下特点：

- **高性能**：使用最新技术栈优化性能
- **易扩展**：插件化架构，便于功能扩展
- **类型安全**：使用TypeScript确保代码质量

## 数学模型

项目使用的核心算法：

$$
f(x) = \sum_{i=0}^{n} w_i \cdot \phi_i(x)
$$

其中：
- $w_i$ 是权重参数
- $\phi_i(x)$ 是基函数
- $n$ 是基函数数量

## 开发计划

- [x] 完成项目初始化
- [x] 实现核心功能
- [ ] 编写单元测试
- [ ] 性能优化
- [ ] 文档完善

## 联系方式

如有问题，请通过以下方式联系：

- [GitHub Issues](https://github.com/Calvin-Xia/project/issues)
- [发送邮件](mailto:xiaziyuan913@outlook.com)

---

**感谢使用本示例文档！** 🎉