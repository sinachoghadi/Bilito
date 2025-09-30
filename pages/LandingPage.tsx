import { Button } from '../components/ui/button';
import { EventCard } from '../components/EventCard';
import { mockEvents } from '../data/mockData';
import { Calendar, Heart, Shield, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const featuredEvents = mockEvents.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
            بهترین رویدادهای تئاتر و کنسرت
          </h1>
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            بلیط رویدادهای فرهنگی و هنری را به راحتی از خانه خود خریداری کنید
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              onClick={() => onNavigate('events')}
              className="bg-purple-600 hover:bg-purple-700"
            >
              مشاهده رویدادها
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('dashboard')}
            >
              داشبورد کاربر
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">چرا بلیتو؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="mb-3">خرید آسان و سریع</h3>
              <p className="text-muted-foreground">
                با چند کلیک ساده، بلیط رویداد مورد علاقه خود را خریداری کنید
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">پرداخت امن</h3>
              <p className="text-muted-foreground">
                تمامی تراکنش‌ها با بالاترین استانداردهای امنیتی انجام می‌شود
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="mb-3">رویدادهای منتخب</h3>
              <p className="text-muted-foreground">
                دسترسی به بهترین و با کیفیت‌ترین رویدادهای فرهنگی و هنری
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              onClick={() => onNavigate('events')}
            >
              مشاهده همه
            </Button>
            <div className="flex items-center gap-2">
              <h2>رویدادهای پیشنهادی</h2>
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={(id) => onNavigate('event-detail', id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-white">آماده تجربه‌ای متفاوت هستید؟</h2>
          <p className="mb-8 text-purple-100 text-lg max-w-2xl mx-auto">
            امروز عضو خانواده بزرگ بلیتو شوید و از تخفیف‌های ویژه بهره‌مند شوید
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => onNavigate('events')}
          >
            شروع کنید
          </Button>
        </div>
      </section>
    </div>
  );
}