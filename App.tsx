import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { EventsListPage } from './pages/EventsListPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { SeatSelectionPage } from './pages/SeatSelectionPage';
import { UserDashboard } from './pages/UserDashboard';
import { AdminPanel } from './pages/AdminPanel';
import { Toaster } from './components/ui/sonner';

export type Page =
  | "home"
  | "events"
  | "event-detail"
  | "seat-selection"
  | "dashboard"
  | "admin"
  | "login";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const navigate = (page: Page, eventId?: string) => {
    setCurrentPage(page);
    if (eventId) {
      setSelectedEventId(eventId);
    } else if (page !== 'event-detail' && page !== 'seat-selection') {
      setSelectedEventId(null);
    }
  };

  // Admin panel doesn't show header/footer
  if (currentPage === 'admin') {
    return (
      <div className="min-h-screen" dir="rtl">
        <AdminPanel />
        <Toaster />
      </div>
    );
  }

  // Login page (simple placeholder)
  if (currentPage === 'login') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h1 className="mb-6 text-center">ورود به بلیتو</h1>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">ایمیل یا شماره موبایل</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block mb-2">رمز عبور</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="button"
              onClick={() => navigate('dashboard')}
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              ورود
            </button>
            <button
              type="button"
              onClick={() => navigate('home')}
              className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              بازگشت
            </button>
          </form>
        </div>
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header currentPage={currentPage} onNavigate={navigate} />
      
      <main className="flex-1">
        {currentPage === 'home' && <LandingPage onNavigate={navigate} />}
        {currentPage === 'events' && <EventsListPage onNavigate={navigate} />}
        {currentPage === 'event-detail' && selectedEventId && (
          <EventDetailPage eventId={selectedEventId} onNavigate={navigate} />
        )}
        {currentPage === 'seat-selection' && selectedEventId && (
          <SeatSelectionPage eventId={selectedEventId} onNavigate={navigate} />
        )}
        {currentPage === 'dashboard' && <UserDashboard onNavigate={navigate} />}
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}