import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Gauge, TrendingUp, Eye, LogOut } from "lucide-react";

type SessionResponse = {
  user: {
    email: string;
  };
};

const AUTH_STORAGE_KEY = "sitebloom_auth_token";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [userEmail, setUserEmail] = useState("");
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    const validateSession = async () => {
      const token = localStorage.getItem(AUTH_STORAGE_KEY);

      if (!token) {
        setLocation("/signin#signin");
        return;
      }

      try {
        const response = await fetch("/api/auth/session", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          localStorage.removeItem(AUTH_STORAGE_KEY);
          setLocation("/signin#signin");
          return;
        }

        const payload = (await response.json()) as SessionResponse;
        setUserEmail(payload.user.email);
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        setLocation("/signin#signin");
        return;
      }

      setIsCheckingSession(false);
    };

    void validateSession();
  }, [setLocation]);

  const handleLogout = async () => {
    const token = localStorage.getItem(AUTH_STORAGE_KEY);

    if (token) {
      try {
        await fetch("/api/auth/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch {
        // Ignore logout transport failures and clear the local token anyway.
      }
    }

    localStorage.removeItem(AUTH_STORAGE_KEY);
    setLocation("/");
  };

  const stats = [
    { label: "Active Projects", value: "2", icon: Globe, change: "Redesign + SEO sprint" },
    { label: "Current Load Time", value: "1.9s", icon: Gauge, change: "Improved from 4.8s" },
    { label: "Lead Growth", value: "+31%", icon: TrendingUp, change: "Compared to last month" },
    { label: "Tracked Visits", value: "8.6K", icon: Eye, change: "Across your live pages" },
  ];

  const activity = [
    { action: "Homepage redesign moved to review", target: "New hero layout is ready for approval", time: "1 hour ago" },
    { action: "Monthly performance report posted", target: "Traffic and conversion summary is available", time: "Today" },
    { action: "SEO fixes deployed", target: "Meta titles and schema updates are live", time: "Yesterday" },
    { action: "Support check-in scheduled", target: "Strategy call booked for Thursday", time: "2 days ago" },
  ];

  if (isCheckingSession) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <p
          className="text-2xl text-gray-900"
          style={{ fontFamily: "'VT323', monospace" }}
          data-testid="text-dashboard-loading"
        >
          LOADING DASHBOARD...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: "'VT323', monospace" }}
            data-testid="link-dashboard-logo"
          >
            <span className="text-[#9333EA]">SITE</span>
            <span className="text-gray-900">BLOOM</span>
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600" data-testid="text-user-email">
              {userEmail}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => void handleLogout()}
              className="uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace" }}
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              LOGOUT
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "'VT323', monospace" }}
            data-testid="text-dashboard-title"
          >
            CUSTOMER DASHBOARD
          </h1>
          <p className="text-gray-600" data-testid="text-dashboard-subtitle">
            Your project progress and website performance at a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
              <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-[#9333EA]" />
              </CardHeader>
              <CardContent>
                <div
                  className="text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'VT323', monospace" }}
                >
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card data-testid="card-recent-activity">
          <CardHeader>
            <CardTitle
              style={{ fontFamily: "'VT323', monospace" }}
              data-testid="text-activity-title"
            >
              RECENT ACTIVITY
            </CardTitle>
            <CardDescription>Latest updates for your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activity.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  data-testid={`row-activity-${index}`}
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.action}</p>
                    <p className="text-sm text-gray-500">{item.target}</p>
                  </div>
                  <span className="text-sm text-gray-400">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
