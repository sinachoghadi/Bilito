import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { mockEvents, formatPrice } from '../data/mockData';
import { Calendar, MapPin, Clock, Tag, Users, Star, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface EventDetailPageProps {
  eventId: string;
  onNavigate: (page: string, id?: string) => void;
}

export function EventDetailPage({ eventId, onNavigate }: EventDetailPageProps) {
  const event = mockEvents.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">رویداد یافت نشد</h2>
          <Button onClick={() => onNavigate('events')}>بازگشت به لیست رویدادها</Button>
        </div>
      </div>
    );
  }

  const typeColor = event.type === 'concert' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700';
  const typeLabel = event.type === 'concert' ? 'کنسرت' : 'تئاتر';

  const mockReviews = [
    { id: 1, author: 'علی محمدی', rating: 5, comment: 'تجربه فوق‌العاده‌ای بود. اجرای بی‌نظیری داشتند.' },
    { id: 2, author: 'سارا احمدی', rating: 4, comment: 'بسیار لذت بردم. صحنه‌پردازی عالی بود.' },
    { id: 3, author: 'رضا کریمی', rating: 5, comment: 'یکی از بهترین تئاترهایی که دیدم. قطعاً توصیه می‌کنم.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <button onClick={() => onNavigate('home')} className="hover:text-foreground">خانه</button>
            <ChevronRight className="w-4 h-4 rotate-180" />
            <button onClick={() => onNavigate('events')} className="hover:text-foreground">رویدادها</button>
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span className="text-foreground">{event.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Cover */}
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <ImageWithFallback
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-4 left-4 ${typeColor}`}>
                {typeLabel}
              </Badge>
            </div>

            {/* Event Info */}
            <div className="bg-white rounded-xl p-6">
              <h1 className="mb-4">{event.title}</h1>
              <p className="text-muted-foreground mb-6">
                {event.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <div className="mb-1">{event.venue}</div>
                    <p className="text-muted-foreground">{event.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <div className="mb-1">تاریخ برگزاری</div>
                    <p className="text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <div className="mb-1">ساعت شروع</div>
                    <p className="text-muted-foreground">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <div className="mb-1">ظرفیت باقی‌مانده</div>
                    <p className="text-muted-foreground">{event.availableSeats} صندلی</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="info" className="bg-white rounded-xl p-6" dir="rtl">
              <TabsList className="w-full">
                <TabsTrigger value="info" className="flex-1">اطلاعات تکمیلی</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">نظرات</TabsTrigger>
              </TabsList>
              <TabsContent value="info" className="space-y-4 mt-4">
                <div>
                  <h3 className="mb-2">درباره رویداد</h3>
                  <p className="text-muted-foreground">
                    این رویداد یکی از برجسته‌ترین اجراهای فصل است که توسط بهترین هنرمندان کشور اجرا می‌شود.
                    حضور در این رویداد تجربه‌ای فراموش‌نشدنی خواهد بود.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2">نکات مهم</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>حضور ۳۰ دقیقه قبل از شروع رویداد الزامی است</li>
                    <li>عکس و فیلمبرداری ممنوع می‌باشد</li>
                    <li>ورود کودکان زیر ۵ سال مجاز نیست</li>
                    <li>لطفاً موبایل خود را در حالت سکوت قرار دهید</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-4 mt-4">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span>{review.author}</span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{formatPrice(event.price)}</span>
                  </div>
                  <Tag className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">قیمت هر بلیط</p>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => onNavigate('seat-selection', eventId)}
                >
                  انتخاب صندلی و خرید بلیط
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  افزودن به علاقه‌مندی‌ها
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="mb-3">پیش‌نمایش صندلی‌ها</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-8 gap-1 mb-3">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded ${
                          i < 20 ? 'bg-gray-300' : 'bg-white border'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 justify-center text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-white border" />
                      <span>آزاد</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-gray-300" />
                      <span>رزرو شده</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}