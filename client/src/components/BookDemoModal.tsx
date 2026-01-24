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
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    onOpenChange(false);
    
    toast({
      title: "Demo Request Submitted",
      description: "We'll be in touch within 24 hours to schedule your demo.",
    });

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
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
            BOOK A DEMO
          </DialogTitle>
          <DialogDescription data-testid="text-modal-description">
            Fill out the form below and we'll reach out to schedule a personalized demo of Juicebox.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              data-testid="input-demo-name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              data-testid="input-demo-email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              placeholder="Acme Inc."
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              data-testid="input-demo-company"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">What are you looking for?</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your recruiting needs..."
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
                SUBMITTING...
              </>
            ) : (
              "REQUEST DEMO"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
