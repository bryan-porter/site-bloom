import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Search, Bot, TrendingUp, LogOut } from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("juicebox_auth");
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
    localStorage.removeItem("juicebox_auth");
    setLocation("/");
  };

  const stats = [
    { label: "Active Searches", value: "12", icon: Search, change: "+3 this week" },
    { label: "Candidates Found", value: "847", icon: Users, change: "+124 this week" },
    { label: "Active Agents", value: "5", icon: Bot, change: "2 running now" },
    { label: "Response Rate", value: "34%", icon: TrendingUp, change: "+5% vs last month" },
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
            <span className="text-[#9333EA]">JUICE</span><span className="text-gray-900">BOX</span>
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
            Welcome back! Here's your recruiting overview.
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
            <CardDescription>Your latest recruiting actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Agent completed outreach", target: "Senior Frontend Developer search", time: "2 hours ago" },
                { action: "New candidate response", target: "John Smith - Product Manager", time: "4 hours ago" },
                { action: "Search updated", target: "Backend Engineer - Remote", time: "Yesterday" },
                { action: "Agent started", target: "Data Scientist outreach campaign", time: "2 days ago" },
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
