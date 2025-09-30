# راهنمای مشارکت در پروژه

از اینکه قصد مشارکت در این پروژه را دارید متشکریم! 🎭

## 📋 فهرست مطالب

1. [چگونه شروع کنیم](#چگونه-شروع-کنیم)
2. [استانداردهای کد](#استانداردهای-کد)
3. [فرآیند Pull Request](#فرآیند-pull-request)
4. [ساختار پروژه](#ساختار-پروژه)

---

## چگونه شروع کنیم

### 1. Fork کردن پروژه

روی دکمه "Fork" در GitHub کلیک کنید.

### 2. Clone کردن

```bash
git clone https://github.com/YOUR-USERNAME/theater-concert-booking.git
cd theater-concert-booking
```

### 3. نصب وابستگی‌ها

```bash
npm install
```

### 4. ایجاد Branch جدید

```bash
git checkout -b feature/your-feature-name
```

مثال:
- `feature/add-payment-gateway`
- `fix/seat-selection-bug`
- `docs/update-readme`

---

## استانداردهای کد

### TypeScript

- همیشه از TypeScript استفاده کنید
- تایپ‌ها را مشخص کنید (no `any`)
- از Interface برای props استفاده کنید

```typescript
interface ComponentProps {
  title: string;
  onAction: () => void;
}
```

### React Components

- از functional components استفاده کنید
- نام‌گذاری: PascalCase برای کامپوننت‌ها
- فایل‌ها: ComponentName.tsx

```typescript
export function EventCard({ event }: EventCardProps) {
  // component logic
}
```

### Tailwind CSS

- از کلاس‌های Tailwind استفاده کنید
- برای کلاس‌های پیچیده از `cn()` استفاده کنید
- از inline styles خودداری کنید

```typescript
<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)}>
```

### فارسی و RTL

- همه متن‌ها باید فارسی باشند
- از اعداد فارسی استفاده کنید
- layout باید RTL باشد

```typescript
// استفاده از تابع تبدیل اعداد
import { persianNumbers } from '../data/mockData';
const display = persianNumbers(123); // ۱۲۳
```

---

## فرآیند Pull Request

### 1. قبل از ارسال

- [ ] کد را test کنید
- [ ] Lint errors را برطرف کنید: `npm run lint`
- [ ] Build موفق باشد: `npm run build`
- [ ] تغییرات را document کنید

### 2. Commit Messages

از commit message های معنادار فارسی یا انگلیسی استفاده کنید:

```bash
git commit -m "feat: اضافه کردن درگاه پرداخت"
git commit -m "fix: رفع باگ انتخاب صندلی"
git commit -m "docs: به‌روزرسانی README"
```

انواع commit:
- `feat:` - ویژگی جدید
- `fix:` - رفع باگ
- `docs:` - تغییرات مستندات
- `style:` - تغییرات ظاهری
- `refactor:` - بازنویسی کد
- `test:` - اضافه کردن تست
- `chore:` - تغییرات عمومی

### 3. ایجاد Pull Request

1. تغییرات را push کنید:
```bash
git push origin feature/your-feature-name
```

2. در GitHub روی "New Pull Request" کلیک کنید

3. توضیحات کامل بدهید:
   - چه چیزی اضافه/تغییر کرده
   - چرا این تغییر لازم است
   - اسکرین‌شات (در صورت نیاز)

4. منتظر بررسی بمانید

---

## ساختار پروژه

```
├── components/       # کامپوننت‌های قابل استفاده مجدد
│   ├── ui/          # کامپوننت‌های Shadcn
│   └── ...
├── pages/           # صفحات اصلی
├── data/            # داده‌های mock
├── types/           # TypeScript types
├── lib/             # توابع کمکی
└── styles/          # استایل‌های global
```

### افزودن کامپوننت جدید

1. فایل را در `components/` ایجاد کنید
2. از TypeScript و Props interface استفاده کنید
3. Export کامپوننت را اضافه کنید
4. Import و استفاده در صفحات

```typescript
// components/MyComponent.tsx
interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  return <div>{title}</div>;
}
```

### افزودن صفحه جدید

1. فایل را در `pages/` ایجاد کنید
2. از navigation props استفاده کنید
3. به router در `App.tsx` اضافه کنید

---

## نکات مهم

### Performance

- از lazy loading برای route های سنگین استفاده کنید
- تصاویر را بهینه کنید
- از `useMemo` و `useCallback` استفاده کنید

### Accessibility

- از semantic HTML استفاده کنید
- alt text برای تصاویر
- keyboard navigation را تست کنید
- ARIA labels را اضافه کنید

### Testing

قبل از submit:

```bash
# بررسی TypeScript
npm run build

# بررسی Lint
npm run lint

# تست محلی
npm run dev
```

---

## سؤالات متداول

### چگونه یک باگ گزارش کنم؟

1. به Issues بروید
2. "New Issue" را بزنید
3. شرح کامل + مراحل بازتولید
4. اسکرین‌شات اضافه کنید

### چگونه ویژگی جدید پیشنهاد کنم؟

1. ابتدا در Issues جستجو کنید
2. اگر وجود ندارد، Issue جدید ایجاد کنید
3. شرح کامل از ویژگی
4. منتظر تایید بمانید

---

## کد رفتار (Code of Conduct)

- به دیگران احترام بگذارید
- از زبان مناسب استفاده کنید
- سازنده باشید
- همکاری کنید

---

## تشکر

از زمان و تلاشی که برای بهبود این پروژه می‌گذارید متشکریم! 🙏

با هم می‌سازیم! 🚀