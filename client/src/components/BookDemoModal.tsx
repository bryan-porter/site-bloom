import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { readErrorMessage } from "@/lib/api";
import { Loader2 } from "lucide-react";

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookDemoModal({ open, onOpenChange }: BookDemoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing info",
        description: "We need your name and email to get started.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("[forms:book-demo] submit started", {
      hasName: Boolean(formData.name),
      hasEmail: Boolean(formData.email),
      hasPhone: Boolean(formData.phone),
      hasWebsite: Boolean(formData.website),
      hasMessage: Boolean(formData.message),
    });

    try {
      console.log("[forms:book-demo] sending request", { endpoint: "/api/book-demo" });
      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("[forms:book-demo] response received", {
        status: response.status,
        ok: response.ok,
      });

      if (!response.ok) {
        throw new Error(await readErrorMessage(response, "Failed to submit"));
      }

      console.log("[forms:book-demo] submit succeeded");
      onOpenChange(false);
      toast({
        title: "You're in! We'll be in touch.",
        description: "Expect a free site audit and action plan within 48 hours.",
      });
      setFormData({ name: "", email: "", phone: "", website: "", message: "" });
    } catch (error) {
      console.error("[forms:book-demo] submit failed", error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]" data-testid="modal-book-demo">
        <DialogHeader>
          <DialogTitle 
            className="text-2xl font-medium"
            style={{ fontFamily: "'VT323', monospace" }}
            data-testid="text-modal-title"
          >
            BLOOM MY SITE
          </DialogTitle>
          <DialogDescription data-testid="text-modal-description">
            Tell us about your site. We'll send you a free audit with specific recommendations, no strings attached.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              data-testid="input-demo-name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="jane@mybusiness.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              data-testid="input-demo-email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Your Website URL</Label>
            <Input
              id="website"
              placeholder="mybusiness.com or anything helpful"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              data-testid="input-demo-company"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              data-testid="input-demo-phone"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">What's not working?</Label>
            <Textarea
              id="message"
              placeholder="Slow load times, low conversions, outdated look..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="resize-none"
              data-testid="input-demo-message"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gray-900 hover:bg-gray-800 uppercase tracking-wider"
            style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
            disabled={isSubmitting}
            data-testid="button-demo-submit"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                SENDING...
              </>
            ) : (
              "GET MY FREE AUDIT"
            )}
          </Button>
          <p className="text-center text-xs text-gray-400">Free audit. No credit card. Results in 48 hours.</p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
