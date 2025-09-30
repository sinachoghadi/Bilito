import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { mockEvents, mockVenues, mockShowtimes, formatPrice, persianNumbers } from '../data/mockData';
import {
  Calendar,
  Clock,
  Edit,
  MapPin,
  Plus,
  Trash2,
  BarChart3,
  Users,
  Ticket,
  TrendingUp
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-l flex-shrink-0">
          <div className="p-6">
            <h2 className="text-primary">پنل مدیریت</h2>
          </div>
          <nav className="space-y-1 px-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors justify-end ${
                activeTab === 'overview' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
              }`}
            >
              <span>داشبورد</span>
              <BarChart3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors justify-end ${
                activeTab === 'events' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
              }`}
            >
              <span>رویدادها</span>
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('showtimes')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors justify-end ${
                activeTab === 'showtimes' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
              }`}
            >
              <span>سانس‌ها</span>
              <Clock className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('venues')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors justify-end ${
                activeTab === 'venues' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
              }`}
            >
              <span>سالن‌ها</span>
              <MapPin className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors justify-end ${
                activeTab === 'reports' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
              }`}
            >
              <span>گزارش‌ها</span>
              <TrendingUp className="w-5 h-5" />
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'events' && <EventsTab />}
            {activeTab === 'showtimes' && <ShowtimesTab />}
            {activeTab === 'venues' && <VenuesTab />}
            {activeTab === 'reports' && <ReportsTab />}
          </div>
        </main>
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      <h1>داشبورد</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <CardTitle>کل کاربران</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{persianNumbers(1245)}</div>
            <p className="text-xs text-muted-foreground">
              +{persianNumbers(180)} از ماه گذشته
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Ticket className="h-4 w-4 text-muted-foreground" />
            <CardTitle>بلیط‌های فروخته شده</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{persianNumbers(3450)}</div>
            <p className="text-xs text-muted-foreground">
              +{persianNumbers(520)} از ماه گذشته
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <CardTitle>رویدادهای فعال</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{persianNumbers(mockEvents.length)}</div>
            <p className="text-xs text-muted-foreground">
              در این ماه
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <CardTitle>درآمد کل</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{formatPrice(125000000)}</div>
            <p className="text-xs text-muted-foreground">
              +{persianNumbers(12)}% از ماه گذشته
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>رویدادهای پرفروش</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">تعداد فروش</TableHead>
                <TableHead className="text-right">نوع</TableHead>
                <TableHead className="text-right">نام رویداد</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEvents.slice(0, 5).map((event, index) => (
                <TableRow key={event.id}>
                  <TableCell>{persianNumbers(Math.floor(Math.random() * 500) + 100)}</TableCell>
                  <TableCell>
                    <Badge className={event.type === 'concert' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}>
                      {event.type === 'concert' ? 'کنسرت' : 'تئاتر'}
                    </Badge>
                  </TableCell>
                  <TableCell>{event.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function EventsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <span>افزودن رویداد جدید</span>
              <Plus className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>افزودن رویداد جدید</DialogTitle>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eventTitle">عنوان رویداد</Label>
                  <Input id="eventTitle" placeholder="عنوان" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventType">نوع رویداد</Label>
                  <Select>
                    <SelectTrigger id="eventType">
                      <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="theater">تئاتر</SelectItem>
                      <SelectItem value="concert">کنسرت</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">توضیحات</Label>
                <Input id="description" placeholder="توضیحات رویداد" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="venue">سالن</Label>
                  <Select>
                    <SelectTrigger id="venue">
                      <SelectValue placeholder="انتخاب سالن" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockVenues.map((venue) => (
                        <SelectItem key={venue.id} value={venue.id}>
                          {venue.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">قیمت (تومان)</Label>
                  <Input id="price" type="number" placeholder="۲۵۰۰۰۰" />
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline">
                  انصراف
                </Button>
                <Button type="submit">ذخیره</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
        <h1>مدیریت رویدادها</h1>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">عملیات</TableHead>
                <TableHead className="text-right">قیمت</TableHead>
                <TableHead className="text-right">تاریخ</TableHead>
                <TableHead className="text-right">نوع</TableHead>
                <TableHead className="text-right">عنوان</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" variant="ghost">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{formatPrice(event.price)}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>
                    <Badge className={event.type === 'concert' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}>
                      {event.type === 'concert' ? 'کنسرت' : 'تئاتر'}
                    </Badge>
                  </TableCell>
                  <TableCell>{event.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function ShowtimesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <span>افزودن سانس جدید</span>
              <Plus className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>��فزودن سانس جدید</DialogTitle>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="showtimeEvent">رویداد</Label>
                <Select>
                  <SelectTrigger id="showtimeEvent">
                    <SelectValue placeholder="انتخاب رویداد" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockEvents.map((event) => (
                      <SelectItem key={event.id} value={event.id}>
                        {event.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="showtimeDate">تاریخ</Label>
                  <Input id="showtimeDate" placeholder="۱۴۰۴/۰۷/۱۵" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="showtimeTime">زمان</Label>
                  <Input id="showtimeTime" placeholder="۱۹:۰۰" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="showtimePrice">قیمت (تومان)</Label>
                <Input id="showtimePrice" type="number" placeholder="۲۵۰۰۰۰" />
              </div>
              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline">
                  انصراف
                </Button>
                <Button type="submit">ذخیره</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
        <h1>مدیریت سانس‌ها</h1>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">عملیات</TableHead>
                <TableHead className="text-right">قیمت</TableHead>
                <TableHead className="text-right">زمان</TableHead>
                <TableHead className="text-right">تاریخ</TableHead>
                <TableHead className="text-right">رویداد</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockShowtimes.map((showtime) => (
                <TableRow key={showtime.id}>
                  <TableCell>
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" variant="ghost">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{formatPrice(showtime.price)}</TableCell>
                  <TableCell>{showtime.time}</TableCell>
                  <TableCell>{showtime.date}</TableCell>
                  <TableCell>{showtime.eventTitle}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function VenuesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <span>افزودن سالن جدید</span>
              <Plus className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>افزودن سالن جدید</DialogTitle>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="venueName">نام سالن</Label>
                <Input id="venueName" placeholder="نام سالن" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="venueCity">شهر</Label>
                  <Input id="venueCity" placeholder="تهران" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="venueCapacity">ظرفیت</Label>
                  <Input id="venueCapacity" type="number" placeholder="۸۰۰" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="venueAddress">آدرس</Label>
                <Input id="venueAddress" placeholder="آدرس کامل" />
              </div>
              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline">
                  انصراف
                </Button>
                <Button type="submit">ذخیره</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
        <h1>مدیریت سالن‌ها</h1>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">عملیات</TableHead>
                <TableHead className="text-right">ظرفیت</TableHead>
                <TableHead className="text-right">شهر</TableHead>
                <TableHead className="text-right">نام سالن</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockVenues.map((venue) => (
                <TableRow key={venue.id}>
                  <TableCell>
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" variant="ghost">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{persianNumbers(venue.capacity)} نفر</TableCell>
                  <TableCell>{venue.city}</TableCell>
                  <TableCell>{venue.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function ReportsTab() {
  return (
    <div className="space-y-6">
      <h1>گزارش‌ها</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>فروش امروز</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl mb-2">{formatPrice(8500000)}</div>
            <p className="text-muted-foreground">{persianNumbers(45)} بلیط</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>فروش این ماه</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl mb-2">{formatPrice(125000000)}</div>
            <p className="text-muted-foreground">{persianNumbers(3450)} بلیط</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>میانگین قیمت بلیط</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl mb-2">{formatPrice(275000)}</div>
            <p className="text-muted-foreground">برای هر بلیط</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>آمار فروش بر اساس نوع رویداد</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span>{persianNumbers(2100)} بلیط</span>
                <div className="flex items-center gap-2">
                  <span>کنسرت</span>
                  <Badge className="bg-purple-100 text-purple-700">۶۱%</Badge>
                </div>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600" style={{ width: '61%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span>{persianNumbers(1350)} بلیط</span>
                <div className="flex items-center gap-2">
                  <span>تئاتر</span>
                  <Badge className="bg-blue-100 text-blue-700">۳۹%</Badge>
                </div>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '39%' }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}