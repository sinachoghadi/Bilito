import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { mockBookings, mockEvents, formatPrice, persianNumbers } from '../data/mockData';
import { Calendar, Heart, MapPin, Settings, Ticket, User } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface UserDashboardProps {
  onNavigate: (page: string, id?: string) => void;
}

export function UserDashboard({ onNavigate }: UserDashboardProps) {
  const favoriteEvents = mockEvents.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <User className="w-8 h-8 text-purple-600" />
          <h1>داشبورد کاربری</h1>
        </div>

        <Tabs defaultValue="tickets" className="space-y-6" dir="rtl">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tickets" className="gap-2">
              <span>بلیط‌های من</span>
              <Ticket className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="favorites" className="gap-2">
              <span>علاقه‌مندی‌ها</span>
              <Heart className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <span>تنظیمات پروفایل</span>
              <Settings className="w-4 h-4" />
            </TabsTrigger>
          </TabsList>

          {/* My Tickets */}
          <TabsContent value="tickets" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <Badge variant="secondary">{persianNumbers(mockBookings.length)} بلیط</Badge>
                  <span>بلیط‌های من</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockBookings.map((booking) => {
                  const event = mockEvents.find((e) => e.id === booking.eventId);
                  return (
                    <div
                      key={booking.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{booking.qrCode}</div>
                        <div>
                          <h3 className="mb-1">{booking.eventTitle}</h3>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Ticket className="w-4 h-4" />
                              <span>{persianNumbers(booking.seats.length)} صندلی</span>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-2">
                            {booking.seats.map((seat) => (
                              <Badge key={seat} variant="outline">
                                {seat}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="mb-2">{formatPrice(booking.totalPrice)}</div>
                        {event && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onNavigate('event-detail', booking.eventId)}
                          >
                            مشاهده جزئیات
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites */}
          <TabsContent value="favorites" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <Badge variant="secondary">{persianNumbers(favoriteEvents.length)} رویداد</Badge>
                  <span>علاقه‌مندی‌های من</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {favoriteEvents.map((event) => {
                  const typeColor = event.type === 'concert' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700';
                  const typeLabel = event.type === 'concert' ? 'کنسرت' : 'تئاتر';

                  return (
                    <div
                      key={event.id}
                      className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={typeColor}>{typeLabel}</Badge>
                          <h3>{event.title}</h3>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground line-clamp-1">{event.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          size="sm"
                          onClick={() => onNavigate('event-detail', event.id)}
                        >
                          خرید بلیط
                        </Button>
                        <Button size="sm" variant="outline">
                          حذف
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>تنظیمات پروفایل</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">نام</Label>
                      <Input id="firstName" placeholder="نام خود را وارد کنید" defaultValue="علی" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">نام خانوادگی</Label>
                      <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" defaultValue="محمدی" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      defaultValue="ali.mohammadi@email.com"
                      dir="ltr"
                      className="text-left"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره موبایل</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      defaultValue="۰۹۱۲۳۴۵۶۷۸۹"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">آدرس</Label>
                    <Input
                      id="address"
                      placeholder="آدرس کامل خود را وارد کنید"
                      defaultValue="تهران، خیابان ولیعصر"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">شهر</Label>
                    <Input id="city" placeholder="شهر" defaultValue="تهران" />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit">ذخیره تغییرات</Button>
                    <Button type="button" variant="outline">
                      انصراف
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تغییر رمز عبور</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">رمز عبور فعلی</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">رمز عبور جدید</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">تکرار رمز عبور جدید</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button type="submit">تغییر رمز عبور</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}