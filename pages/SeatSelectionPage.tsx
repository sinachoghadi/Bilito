import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { mockEvents, formatPrice, persianNumbers } from '../data/mockData';
import { ChevronRight, Info } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

interface SeatSelectionPageProps {
  eventId: string;
  onNavigate: (page: string, id?: string) => void;
}

type SeatStatus = 'available' | 'selected' | 'booked';

interface SeatData {
  row: string;
  number: number;
  status: SeatStatus;
}

export function SeatSelectionPage({ eventId, onNavigate }: SeatSelectionPageProps) {
  const event = mockEvents.find((e) => e.id === eventId);
  const [seats, setSeats] = useState<SeatData[]>(() => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const cols = 14;
    const allSeats: SeatData[] = [];

    rows.forEach((row) => {
      for (let col = 1; col <= cols; col++) {
        // Randomly mark some seats as booked for demo
        const isBooked = Math.random() > 0.7;
        allSeats.push({
          row,
          number: col,
          status: isBooked ? 'booked' : 'available'
        });
      }
    });

    return allSeats;
  });

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

  const selectedSeats = seats.filter((s) => s.status === 'selected');
  const totalPrice = selectedSeats.length * event.price;

  const toggleSeat = (row: string, number: number) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.row === row && seat.number === number && seat.status !== 'booked') {
          return {
            ...seat,
            status: seat.status === 'selected' ? 'available' : 'selected'
          };
        }
        return seat;
      })
    );
  };

  const handlePayment = () => {
    if (selectedSeats.length === 0) return;
    alert(`پرداخت ${formatPrice(totalPrice)} برای ${persianNumbers(selectedSeats.length)} صندلی انجام شد.`);
    onNavigate('dashboard');
  };

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
            <button onClick={() => onNavigate('event-detail', eventId)} className="hover:text-foreground">
              {event.title}
            </button>
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span className="text-foreground">انتخاب صندلی</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-2">انتخاب صندلی</h1>
        <p className="text-muted-foreground mb-8">{event.title}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seat Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6">
              <Alert className="mb-6">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  روی صندلی‌های مورد نظر کلیک کنید. می‌توانید چند صندلی را به صورت همزمان انتخاب کنید.
                </AlertDescription>
              </Alert>

              {/* Stage */}
              <div className="bg-gradient-to-b from-purple-100 to-purple-50 rounded-lg py-3 mb-8 text-center border border-purple-200">
                <span className="text-purple-700">صحنه / استیج</span>
              </div>

              {/* Seat Grid */}
              <div className="space-y-3 mb-6">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((row) => (
                  <div key={row} className="flex items-center gap-2">
                    <span className="w-6 text-center">{row}</span>
                    <div className="flex-1 grid grid-cols-14 gap-2">
                      {Array.from({ length: 14 }, (_, i) => i + 1).map((col) => {
                        const seat = seats.find((s) => s.row === row && s.number === col);
                        if (!seat) return null;

                        let seatClass = 'aspect-square rounded cursor-pointer transition-all hover:scale-110 flex items-center justify-center';
                        if (seat.status === 'available') {
                          seatClass += ' bg-white border-2 border-gray-300 hover:border-purple-500';
                        } else if (seat.status === 'selected') {
                          seatClass += ' bg-black text-white';
                        } else {
                          seatClass += ' bg-gray-300 cursor-not-allowed opacity-50';
                        }

                        return (
                          <button
                            key={col}
                            className={seatClass}
                            onClick={() => toggleSeat(row, col)}
                            disabled={seat.status === 'booked'}
                            title={`${row}${persianNumbers(col)}`}
                          >
                            <span className="text-xs">{persianNumbers(col)}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="border-t pt-6">
                <h4 className="mb-3">راهنما</h4>
                <div className="flex items-center gap-6 justify-center flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-white border-2 border-gray-300" />
                    <span>آزاد</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-black" />
                    <span>انتخاب شده</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gray-300" />
                    <span>رزرو شده</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <h3 className="mb-4">خلاصه سفارش</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-muted-foreground">تعداد صندلی</span>
                  <span>{persianNumbers(selectedSeats.length)}</span>
                </div>

                {selectedSeats.length > 0 && (
                  <div className="pb-3 border-b">
                    <p className="text-muted-foreground mb-2">صندلی‌های انتخابی:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedSeats.map((seat) => (
                        <Badge key={`${seat.row}${seat.number}`} variant="secondary">
                          {seat.row}{persianNumbers(seat.number)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-muted-foreground">قیمت هر صندلی</span>
                  <span>{formatPrice(event.price)}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span>مبلغ کل</span>
                  <span className="text-2xl text-purple-600">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full"
                disabled={selectedSeats.length === 0}
                onClick={handlePayment}
              >
                {selectedSeats.length === 0 ? 'لطفاً صندلی انتخاب کنید' : 'پرداخت و خرید بلیط'}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full mt-3"
                onClick={() => onNavigate('event-detail', eventId)}
              >
                بازگشت
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}