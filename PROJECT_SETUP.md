# مستندات کامل راه‌اندازی پروژه بلیتو

## 📚 فهرست کامل

این پروژه شامل تمام فایل‌های لازم برای اجرا است:

### فایل‌های اصلی پروژه
- ✅ `package.json` - وابستگی‌های پروژه
- ✅ `tsconfig.json` - تنظیمات TypeScript
- ✅ `vite.config.ts` - تنظیمات Vite
- ✅ `postcss.config.js` - تنظیمات PostCSS برای Tailwind v4
- ✅ `index.html` - فایل HTML اصلی با RTL
- ✅ `main.tsx` - نقطه ورود React
- ✅ `App.tsx` - کامپوننت اصلی با routing

### فایل‌های تنظیمات
- ✅ `.gitignore` - فایل‌های ignored در Git
- ✅ `.env.example` - نمونه متغیرهای محیطی
- ✅ `eslint.config.js` - تنظیمات ESLint
- ✅ `vite-env.d.ts` - تایپ‌های محیطی Vite

### فایل‌های مستندات
- ✅ `README.md` - مستندات اصلی پروژه
- ✅ `QUICKSTART.md` - راهنمای سریع شروع
- ✅ `DEPLOYMENT.md` - راهنمای استقرار
- ✅ `CONTRIBUTING.md` - راهنمای مشارکت
- ✅ `Attributions.md` - منابع و اعتبارات

### ساختار کامل پوشه‌ها

```
theater-concert-booking/
│
├── public/                    # فایل‌های استاتیک
│   └── vite.svg              # لوگوی پیش‌فرض
│
├── components/               # کامپوننت‌های قابل استفاده مجدد
│   ├── ui/                  # کامپوننت‌های Shadcn/UI (48 کامپوننت)
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... (و 43 کامپوننت دیگر)
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   ├── EventCard.tsx        # کارت نمایش رویداد
│   ├── Header.tsx           # هدر سایت
│   └── Footer.tsx           # فوتر سایت
│
├── pages/                   # صفحات اصلی
│   ├── LandingPage.tsx     # صفحه اصلی
│   ├── EventsListPage.tsx  # لیست رویدادها
│   ├── EventDetailPage.tsx # جزئیات رویداد
│   ├── SeatSelectionPage.tsx # انتخاب صندلی
│   ├── UserDashboard.tsx   # داشبورد کاربر
│   └── AdminPanel.tsx      # پنل مدیریت
│
├── data/                    # داده‌های Mock
│   └── mockData.ts         # 6 رویداد، venues، showtimes، bookings
│
├── types/                   # تعاریف TypeScript
│   └── index.ts            # Event, Venue, Showtime, Booking types
│
├── lib/                     # توابع کمکی
│   └── utils.ts            # cn, toPersianNumber, formatPrice, etc.
│
├── styles/                  # استایل‌های global
│   └── globals.css         # Tailwind v4 + فونت Vazirmatn
│
└── [فایل‌های کانفیگ]
```

---

## 🚀 دستورات اجرا

### نصب اولیه
```bash
npm install
```

### حالت توسعه
```bash
npm run dev
```
سایت در `http://localhost:5173` قابل دسترس است.

### ساخت Production
```bash
npm run build
```

### پیش‌نمایش Production
```bash
npm run preview
```

### بررسی کد
```bash
npm run lint
```

---

## 📋 چک‌لیست راه‌اندازی

### گام 1: بررسی پیش‌نیازها
- [ ] Node.js نسخه 18 یا بالاتر نصب شده
- [ ] npm یا yarn یا pnpm در دسترس است
- [ ] ویرایشگر کد (VS Code پیشنهاد می‌شود)

### گام 2: نصب
- [ ] `npm install` را اجرا کنید
- [ ] منتظر نصب تمام وابستگی‌ها بمانید (ممکن است چند دقیقه طول بکشد)

### گام 3: تست اولیه
- [ ] `npm run dev` را اجرا کنید
- [ ] مرورگر را باز کنید: `http://localhost:5173`
- [ ] صفحه اصلی باید نمایش داده شود
- [ ] فونت فارسی باید صحیح نمایش داده شود
- [ ] تمام متن‌ها باید راست‌چین باشند

### گام 4: تست صفحات
- [ ] صفحه اصلی (Home)
- [ ] لیست رویدادها (Events List)
- [ ] جزئیات رویداد (Event Detail)
- [ ] انتخاب صندلی (Seat Selection)
- [ ] داشبورد کاربر (Dashboard)
- [ ] پنل مدیریت (Admin Panel)

### گام 5: تست Build
- [ ] `npm run build` را اجرا کنید
- [ ] مطمئن شوید بدون خطا build می‌شود
- [ ] `npm run preview` را اجرا کنید
- [ ] نسخه production را تست کنید

---

## 🔧 تنظیمات پیشرفته

### تغییر پورت پیش‌فرض

در `vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    port: 3000 // پورت دلخواه
  }
});
```

### اضافه کردن متغیرهای محیطی

1. فایل `.env.local` ایجاد کنید:
```env
VITE_API_URL=http://localhost:3000/api
```

2. در کد استفاده کنید:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### تنظیمات VS Code (پیشنهادی)

فایل `.vscode/settings.json` ایجاد کنید:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

---

## 📦 وابستگی‌های اصلی

### Runtime Dependencies
- **React 18.3** - کتابخانه UI
- **TypeScript 5.6** - تایپ استاتیک
- **Tailwind CSS 4.0** - استایل‌دهی
- **Radix UI** - کامپوننت‌های accessible
- **Lucide React** - آیکون‌ها
- **Sonner** - Toast notifications
- **React Hook Form** - مدیریت فرم‌ها

### Dev Dependencies
- **Vite 6.0** - ابزار build
- **ESLint** - linting
- **TypeScript ESLint** - TypeScript linting

حجم کل: ~380MB (node_modules)

---

## 🌐 پشتیبانی مرورگرها

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

---

## 📱 Responsive Breakpoints

- **موبایل**: 390px - 767px
- **تبلت**: 768px - 1439px
- **دسکتاپ**: 1440px+

---

## 🎨 سیستم طراحی

### رنگ‌ها
- **کنسرت**: بنفش (#7C3AED)
- **تئاتر**: آبی (#3B82F6)

### فونت
- **فونت اصلی**: Vazirmatn
- **Fallback**: system fonts

### اعداد
- همه اعداد به فارسی: ۰۱۲۳۴۵۶۷۸۹
- جداکننده هزارگان: ۱۲۳٬۴۵۶

---

## 🔐 امنیت

این پروژه یک نمونه آموزشی است:
- ❌ احراز هویت واقعی ندارد
- ❌ دیتابیس واقعی ندارد
- ❌ پرداخت واقعی ندارد
- ✅ فقط برای نمایش و یادگیری

برای استفاده در production باید:
- Backend واقعی اضافه کنید
- سیستم احراز هویت پیاده‌سازی کنید
- دیتابیس متصل کنید
- درگاه پرداخت اضافه کنید

---

## 🐛 رفع مشکلات رایج

### 1. خطای "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### 2. خطا در زمان Build
- Node.js را به‌روز کنید (18+)
- Cache را پاک کنید: `npm cache clean --force`

### 3. فونت فارسی نمایش داده نمی‌شود
- اینترنت خود را چک کنید (فونت از Google Fonts بارگذاری می‌شود)
- Cache مرورگر را پاک کنید

### 4. Tailwind classes کار نمی‌کنند
- `npm run dev` را دوباره راه‌اندازی کنید
- فایل `styles/globals.css` را چک کنید

### 5. Port 5173 در حال استفاده
- Vite خودکار پورت دیگری انتخاب می‌کند
- یا در `vite.config.ts` پورت را تغییر دهید

---

## 📞 دریافت کمک

اگر با مشکلی مواجه شدید:

1. **مستندات را بخوانید**: README.md, QUICKSTART.md
2. **خطاها را بررسی کنید**: Console و Terminal
3. **Google کنید**: خطای خاص خود را جستجو کنید
4. **Issue ایجاد کنید**: در GitHub

---

## ✅ وضعیت پروژه

- ✅ تمام صفحات پیاده‌سازی شده
- ✅ RTL و فارسی کامل
- ✅ Responsive design
- ✅ Mock data آماده
- ✅ TypeScript types کامل
- ✅ Build production آماده
- ✅ مستندات کامل

---

## 🎯 مراحل بعدی (اختیاری)

1. **Backend**: اتصال به API واقعی
2. **Database**: MongoDB یا PostgreSQL
3. **Authentication**: JWT یا OAuth
4. **Payment**: درگاه پرداخت ایرانی
5. **Testing**: Jest + React Testing Library
6. **CI/CD**: GitHub Actions
7. **Analytics**: Google Analytics
8. **SEO**: Meta tags و Sitemap

---

## 🎉 تمام!

همه چیز آماده است! فقط کافی است:

```bash
npm install
npm run dev
```

و شروع به توسعه کنید! 🚀

موفق باشید! 🎭🎵