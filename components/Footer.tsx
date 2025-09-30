export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="mb-4">درباره ما</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">تماس با ما</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">همکاری با ما</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">فرصت‌های شغلی</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">خدمات</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">راهنمای خرید</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">شرایط استفاده</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">حریم خصوصی</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">تماس</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>ایمیل: info@bilito.ir</li>
              <li>تهران، خیابان ولیعصر</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© ۱۴۰۴ بلیتو. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}