import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Gauge, TrendingUp, Eye, LogOut } from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("sitebloom_auth");
    if (!auth) {
      setLocation("/signin");
      return;
    }
    const parsed = JSON.parse(auth);
    if (!parsed.loggedIn) {
      setLocation("/signin");
      return;
    }
    setUserEmail(parsed.email);
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("sitebloom_auth");
    setLocation("/");
  };

  const stats = [
    { label: "Sites Managed", value: "4", icon: Globe, change: "+1 this month" },
    { label: "Avg. Page Speed", value: "1.8s", icon: Gauge, change: "Down from 5.2s" },
    { label: "Conversion Rate", value: "4.7%", icon: TrendingUp, change: "+2.1% vs last quarter" },
    { label: "Monthly Visitors", value: "12.4K", icon: Eye, change: "+38% vs last month" },
  ];

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
            <span className="text-[#9333EA]">SITE</span><span className="text-gray-900">BLOOM</span>
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600" data-testid="text-user-email">{userEmail}</span>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLogout}
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
            DASHBOARD
          </h1>
          <p className="text-gray-600" data-testid="text-dashboard-subtitle">
            Your site performance at a glance.
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
            <CardDescription>Latest updates across your sites</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Speed optimization complete", target: "mybusiness.com - Load time reduced to 1.4s", time: "2 hours ago" },
                { action: "New conversion recorded", target: "Contact form submission from Google Ads", time: "4 hours ago" },
                { action: "Mobile redesign deployed", target: "mybusiness.com/shop - New checkout flow live", time: "Yesterday" },
                { action: "SEO audit finished", target: "12 issues found, 8 auto-fixed", time: "2 days ago" },
              ].map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  data-testid={`row-activity-${index}`}
                >
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.target}</p>
                  </div>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
