import { Event } from '../types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { formatPrice } from '../data/mockData';

interface EventCardProps {
  event: Event;
  onViewDetails: (id: string) => void;
}

export function EventCard({ event, onViewDetails }: EventCardProps) {
  const typeColor = event.type === 'concert' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700';
  const typeLabel = event.type === 'concert' ? 'کنسرت' : 'تئاتر';

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-3 left-3 ${typeColor}`}>
          {typeLabel}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 line-clamp-1">{event.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {event.description}
        </p>
        <div className="space-y-2 text-muted-foreground">
          <div className="flex items-center gap-2 justify-end">
            <span>{event.venue}</span>
            <MapPin className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span>{event.date} - {event.time}</span>
            <Calendar className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span>{formatPrice(event.price)}</span>
            <Tag className="w-4 h-4" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onViewDetails(event.id)}
          className="w-full"
        >
          مشاهده جزئیات و خرید بلیط
        </Button>
      </CardFooter>
    </Card>
  );
}