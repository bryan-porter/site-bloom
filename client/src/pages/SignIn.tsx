import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, AlertCircle } from "lucide-react";

export default function SignIn() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const validEmail = "admin@sitebloom.com";
    const validPassword = "demo123";

    if (formData.email === validEmail && formData.password === validPassword) {
      localStorage.setItem("sitebloom_auth", JSON.stringify({ email: formData.email, loggedIn: true }));
      setLocation("/dashboard");
    } else {
      setError("Invalid email or password. Try admin@sitebloom.com / demo123");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md" data-testid="card-signin">
        <CardHeader className="text-center">
          <a 
            href="/" 
            className="text-3xl font-bold tracking-tight inline-block mb-4" 
            style={{ fontFamily: "'VT323', monospace" }}
            data-testid="link-signin-logo"
          >
            <span className="text-[#9333EA]">SITE</span><span className="text-gray-900">BLOOM</span>
          </a>
          <CardTitle 
            className="text-2xl"
            style={{ fontFamily: "'VT323', monospace" }}
            data-testid="text-signin-title"
          >
            SIGN IN
          </CardTitle>
          <CardDescription data-testid="text-signin-description">
            Access your Sitebloom dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4" data-testid="alert-signin-error">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@sitebloom.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                data-testid="input-signin-email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                data-testid="input-signin-password"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-gray-800 uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              disabled={isLoading}
              data-testid="button-signin-submit"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  SIGNING IN...
                </>
              ) : (
                "SIGN IN"
              )}
            </Button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4" data-testid="text-signin-hint">
            Demo credentials: admin@sitebloom.com / demo123
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
