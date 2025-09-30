# راهنمای استقرار (Deployment)

این راهنما مراحل استقرار پروژه در محیط‌های مختلف را شرح می‌دهد.

## 📦 ساخت نسخه Production

ابتدا نسخه production را بسازید:

```bash
npm run build
```

این دستور یک پوشه `dist` ایجاد می‌کند که شامل فایل‌های بهینه‌شده برای استقرار است.

---

## 🚀 روش‌های استقرار

### 1. Vercel (پیشنهادی)

ساده‌ترین و سریع‌ترین روش:

1. حساب کاربری در [Vercel](https://vercel.com) بسازید
2. پروژه را به GitHub push کنید
3. در Vercel روی "New Project" کلیک کنید
4. مخزن GitHub را انتخاب کنید
5. تنظیمات زیر را اعمال کنید:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. روی "Deploy" کلیک کنید

✅ پروژه شما مستقر شد!

---

### 2. Netlify

1. حساب کاربری در [Netlify](https://netlify.com) بسازید
2. پروژه را به GitHub push کنید
3. "New site from Git" را انتخاب کنید
4. مخزن را متصل کنید
5. تنظیمات:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. "Deploy site" را بزنید

---

### 3. GitHub Pages

1. فایل `.github/workflows/deploy.yml` ایجاد کنید:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. در تنظیمات مخزن GitHub، بخش Pages را فعال کنید
3. Branch `gh-pages` را انتخاب کنید

---

### 4. استقرار دستی (VPS یا Shared Hosting)

1. پروژه را build کنید:
```bash
npm run build
```

2. محتویات پوشه `dist` را آپلود کنید

3. فایل `.htaccess` برای Apache:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. برای Nginx:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🔧 متغیرهای محیطی (Environment Variables)

برای استقرار در محیط production:

1. فایل `.env.production` ایجاد کنید:
```env
VITE_API_URL=https://api.yourapp.com
VITE_APP_NAME=بلیتو
```

2. در پلتفرم‌های ابری (Vercel, Netlify):
   - به بخش Environment Variables بروید
   - متغیرهای لازم را اضافه کنید

---

## ✅ چک‌لیست پیش از استقرار

- [ ] همه خطاهای TypeScript برطرف شده‌اند
- [ ] پروژه به درستی build می‌شود
- [ ] تمام لینک‌ها و route‌ها کار می‌کنند
- [ ] تصاویر به درستی نمایش داده می‌شوند
- [ ] فونت فارسی بارگذاری می‌شود
- [ ] responsive در تمام سایزها تست شده
- [ ] متغیرهای محیطی تنظیم شده‌اند

---

## 🔍 تست نسخه Production

قبل از استقرار، می‌توانید نسخه production را محلی تست کنید:

```bash
npm run build
npm run preview
```

سپس به `http://localhost:4173` بروید.

---

## 📊 بهینه‌سازی Performance

### کاهش حجم Bundle

1. تصاویر را بهینه کنید (WebP, تنظیم کیفیت)
2. از lazy loading برای route‌ها استفاده کنید
3. کتابخانه‌های غیرضروری را حذف کنید

### تنظیمات Vite

در `vite.config.ts`:

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        }
      }
    }
  }
});
```

---

## 🆘 رفع مشکلات متداول

### خطای 404 در refresh صفحه

**راه‌حل**: تنظیم SPA fallback (به بخش استقرار دستی مراجعه کنید)

### فونت‌ها بارگذاری نمی‌شوند

**راه‌حل**: بررسی CORS headers و مسیر فونت‌ها

### متغیرهای محیطی کار نمی‌کنند

**راه‌حل**: از پیشوند `VITE_` استفاده کنید و rebuild کنید

---

## 📞 پشتیبانی

در صورت بروز مشکل در فرآیند استقرار:
1. لاگ‌های build را بررسی کنید
2. از حالت debug استفاده کنید
3. نسخه Node.js را چک کنید (باید 18+ باشد)

موفق باشید! 🎉