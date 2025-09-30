import { Button } from './ui/button';
import { Calendar, LayoutDashboard, LogIn, Ticket } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: import("../App").Page, id?: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation - Right side in RTL */}
          <nav className="flex items-center gap-6">
            <Button
              variant="ghost"
              onClick={() => onNavigate("login")}
              className="gap-2"
            >
              <span>ورود</span>
              <LogIn className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => onNavigate("dashboard")}
              className="gap-2"
            >
              <span>داشبورد</span>
              <LayoutDashboard className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => onNavigate("events")}
              className="gap-2"
            >
              <span>رویدادها</span>
              <Calendar className="w-4 h-4" />
            </Button>
          </nav>

          {/* Logo - Left side in RTL */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <h1 className="text-primary">بلیتو</h1>
            <Ticket className="w-6 h-6 text-purple-600" />
          </button>
        </div>
      </div>
    </header>
  );
}