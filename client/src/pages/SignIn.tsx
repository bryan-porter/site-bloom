import { useState } from "react";
import { useLocation } from "wouter";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { readErrorMessage } from "@/lib/api";

type AuthMode = "signin" | "signup";

type AuthSuccessResponse = {
  token: string;
  user: {
    email: string;
  };
};

const AUTH_STORAGE_KEY = "sitebloom_auth_token";

function getInitialMode(): AuthMode {
  if (typeof window !== "undefined" && window.location.hash === "#signin") {
    return "signin";
  }

  return "signup";
}

export default function SignIn() {
  const [, setLocation] = useLocation();
  const [mode, setMode] = useState<AuthMode>(getInitialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleModeChange = (nextMode: AuthMode) => {
    window.history.replaceState(null, "", `/signin#${nextMode}`);
    setMode(nextMode);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please complete all required fields.");
      return;
    }

    setIsLoading(true);

    try {
      const endpoint = mode === "signup" ? "/api/auth/signup" : "/api/auth/login";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const message = await readErrorMessage(response, "Unable to complete authentication.");
        setError(message);
        setIsLoading(false);
        return;
      }

      const payload = (await response.json()) as AuthSuccessResponse;
      localStorage.setItem(AUTH_STORAGE_KEY, payload.token);
      setLocation("/dashboard");
    } catch {
      setError("Unable to reach the authentication service right now.");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
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
            <span className="text-[#9333EA]">SITE</span>
            <span className="text-gray-900">BLOOM</span>
          </a>
          <CardTitle
            className="text-2xl"
            style={{ fontFamily: "'VT323', monospace" }}
            data-testid="text-signin-title"
          >
            {mode === "signup" ? "CREATE ACCOUNT" : "SIGN IN"}
          </CardTitle>
          <CardDescription data-testid="text-signin-description">
            {mode === "signup"
              ? "Create your customer account."
              : "Sign in to your customer dashboard."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Button
              type="button"
              variant={mode === "signin" ? "default" : "outline"}
              onClick={() => handleModeChange("signin")}
              className="uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              data-testid="button-auth-signin"
            >
              Sign In
            </Button>
            <Button
              type="button"
              variant={mode === "signup" ? "default" : "outline"}
              onClick={() => handleModeChange("signup")}
              className="uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              data-testid="button-auth-signup"
            >
              Sign Up
            </Button>
          </div>

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
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                data-testid="input-auth-email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder={mode === "signup" ? "Create a password (8+ characters)" : "Enter your password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                data-testid="input-auth-password"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              disabled={isLoading}
              data-testid="button-auth-submit"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {mode === "signup" ? "CREATING ACCOUNT..." : "SIGNING IN..."}
                </>
              ) : mode === "signup" ? (
                "CREATE ACCOUNT"
              ) : (
                "SIGN IN"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
