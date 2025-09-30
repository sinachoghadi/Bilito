import { Event, Venue, Showtime, Booking } from '../types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'هملت، شاهزاده دانمارک',
    description: 'نمایشی باشکوه از شاهکار ویلیام شکسپیر با بازی بهترین بازیگران کشور. این اثر کلاسیک داستان شاهزاده‌ای را روایت می‌کند که در پی انتقام از قاتل پدرش است.',
    type: 'theater',
    venue: 'تالار وحدت',
    address: 'خیابان حافظ، نرسیده به میدان ولیعصر',
    city: 'تهران',
    date: '۱۴۰۴/۰۷/۱۵',
    time: '۱۹:۰۰',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTkxMjM2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    availableSeats: 42
  },
  {
    id: '2',
    title: 'کنسرت موسیقی سنتی محمدرضا شجریان',
    description: 'شبی به یاد استاد شجریان با اجرای آثار ماندگار ایشان توسط هنرمندان برجسته موسیقی سنتی ایران. همراه با نوازندگان مطرح کشور.',
    type: 'concert',
    venue: 'تالار رودکی',
    address: 'خیابان ولیعصر، نرسیده به پارک ملت',
    city: 'تهران',
    date: '۱۴۰۴/۰۷/۲۰',
    time: '۲۰:۰۰',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1656283384093-1e227e621fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpY3xlbnwxfHx8fDE3NTkxMTc0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    availableSeats: 28
  },
  {
    id: '3',
    title: 'شازده کوچولو',
    description: 'اقتباس تئاتری از داستان محبوب آنتوان دو سنت اگزوپری. مناسب برای تماشای خانوادگی با صحنه‌پردازی خیره‌کننده.',
    type: 'theater',
    venue: 'تئاتر شهر',
    address: 'خیابان ولیعصر، روبروی پارک ملت',
    city: 'تهران',
    date: '۱۴۰۴/۰۷/۱۸',
    time: '۱۸:۳۰',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1690131054295-6d1f8d2d65df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHRoZWF0ZXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkyMjgxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    availableSeats: 67
  },
  {
    id: '4',
    title: 'کنسرت راک مازیار فلاحی',
    description: 'شب راک با اجرای آهنگ‌های جدید و محبوب مازیار فلاحی. انرژی بی‌پایان و صدای قدرتمند در یک شب فراموش‌نشدنی.',
    type: 'concert',
    venue: 'سالن میلاد',
    address: 'برج میلاد، بزرگراه همت',
    city: 'تهران',
    date: '۱۴۰۴/۰۷/۲۵',
    time: '۲۱:۰۰',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1583056998456-fdaa183053a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBjb25jZXJ0fGVufDF8fHx8MTc1OTE5MzY5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    availableSeats: 15
  },
  {
    id: '5',
    title: 'مرگ فروشنده',
    description: 'نمایشنامه برنده جایزه پولیتزر اثر آرتور میلر. داستان تراژیک مردی که در تلاش برای رسیدن به رویای آمریکایی است.',
    type: 'theater',
    venue: 'تالار هنر',
    address: 'خیابان انقلاب، نزدیک دانشگاه تهران',
    city: 'تهران',
    date: '۱۴۰۴/۰۷/۲۲',
    time: '۱۹:۳۰',
    price: 200000,
    image: 'https://images.unsplash.com/photo-1759103570737-8485420df3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBhdWRpZW5jZXxlbnwxfHx8fDE3NTkyMjgxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    availableSeats: 35
  },
  {
    id: '6',
    title: 'جشنواره موسیقی الکترونیک',
    description: 'بزرگترین رویداد موسیقی الکترونیک سال با حضور بهترین دی‌جی‌های ایرانی و بین‌المللی. شبی پر از رقص و هیجان.',
    type: 'concert',
    venue: 'ورزشگاه آزادی',
    address: 'بزرگراه آزادی، ورزشگاه آزادی',
    city: 'تهران',
    date: '۱۴۰۴/۰۸/۰۱',
    time: '۲۲:۰۰',
    price: 500000,
    image: 'https://images.unsplash.com/photo-1610900538035-b04c4d957d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwbGlnaHRzfGVufDF8fHx8MTc1OTIyODExNHww&ixlib=rb-4.1.0&q=80&w=1080',
    availableSeats: 120
  }
];

export const mockVenues: Venue[] = [
  {
    id: '1',
    name: 'تالار وحدت',
    city: 'تهران',
    capacity: 800,
    address: 'خیابان حافظ، نرسیده به میدان ولیعصر'
  },
  {
    id: '2',
    name: 'تالار رودکی',
    city: 'تهران',
    capacity: 1200,
    address: 'خیابان ولیعصر، نرسیده به پارک ملت'
  },
  {
    id: '3',
    name: 'تئاتر شهر',
    city: 'تهران',
    capacity: 600,
    address: 'خیابان ولیعصر، روبروی پارک ملت'
  },
  {
    id: '4',
    name: 'سالن میلاد',
    city: 'تهران',
    capacity: 5000,
    address: 'برج میلاد، بزرگراه همت'
  }
];

export const mockShowtimes: Showtime[] = [
  {
    id: '1',
    eventId: '1',
    eventTitle: 'هملت، شاهزاده دانمارک',
    date: '۱۴۰۴/۰۷/۱۵',
    time: '۱۹:۰۰',
    price: 250000,
    venueId: '1'
  },
  {
    id: '2',
    eventId: '2',
    eventTitle: 'کنسرت موسیقی سنتی محمدرضا شجریان',
    date: '۱۴۰۴/۰۷/۲۰',
    time: '۲۰:۰۰',
    price: 350000,
    venueId: '2'
  },
  {
    id: '3',
    eventId: '3',
    eventTitle: 'شازده کوچولو',
    date: '۱۴۰۴/۰۷/۱۸',
    time: '۱۸:۳۰',
    price: 180000,
    venueId: '3'
  }
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    eventId: '1',
    eventTitle: 'هملت، شاهزاده دانمارک',
    date: '۱۴۰۴/۰۷/۱۵',
    seats: ['A5', 'A6'],
    totalPrice: 500000,
    qrCode: '🎫'
  },
  {
    id: '2',
    eventId: '2',
    eventTitle: 'کنسرت موسیقی سنتی محمدرضا شجریان',
    date: '۱۴۰۴/۰۷/۲۰',
    seats: ['B10', 'B11', 'B12'],
    totalPrice: 1050000,
    qrCode: '🎫'
  }
];

export const persianNumbers = (num: number | string): string => {
  const persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/\d/g, (digit) => persian[parseInt(digit)]);
};

export const formatPrice = (price: number): string => {
  return persianNumbers(price.toLocaleString('fa-IR')) + ' تومان';
};