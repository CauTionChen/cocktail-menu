# 私人酒单 PWA

## 效果
- 添加到手机主屏幕 → 看起来和原生App一样
- 可离线使用
- 微信/浏览器直接打开

## 文件结构
```
cocktail-menu-app/
├── index.html      # 主应用
├── manifest.json   # PWA配置
├── sw.js          # Service Worker（离线支持）
├── icon-192.png   # 图标
└── icon-512.png   # 大图标
```

## 使用方法

### 方法1：本地预览（Mac/Linux）
```bash
cd /root/.openclaw/workspace/cocktail-menu-app
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```

### 方法2：部署到免费平台（永久访问）

**Cloudflare Pages（推荐，速度快）：**
1. 上传整个 cocktail-menu-app 目录到 GitHub
2. 连接 GitHub 到 Cloudflare Pages
3. 部署完成，获得永久URL

**Vercel（简单）：**
```bash
npm i -g vercel
cd /root/.openclaw/workspace/cocktail-menu-app
vercel
```

### 添加到主屏幕
1. 用手机浏览器打开酒单网页
2. Safari：分享按钮 → 添加到主屏幕
3. Chrome：菜单 → 安装应用 / 添加到主屏幕

## 数据同步
点酒后数据存在 localStorage（浏览器本地）。
健康助手可通过读取 orders 数据实现热量互通。

## 自定义酒单
编辑 `index.html` 中的 `cocktails` 数组即可添加/修改酒款。
