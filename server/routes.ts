import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Free Audit submission endpoint
  app.post("/api/free-audit", async (req, res) => {
    try {
      const { websiteUrl, name, email, notes } = req.body;

      // Validate required fields
      if (!websiteUrl || !name || !email) {
        return res.status(400).json({
          message: "Missing required fields: websiteUrl, name, and email are required"
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      // Validate URL format
      try {
        new URL(websiteUrl);
      } catch {
        return res.status(400).json({ message: "Invalid website URL format" });
      }

      // Log the audit request (in production, this would send an email or store in database)
      console.log("Free Audit Request:", { websiteUrl, name, email, notes, timestamp: new Date().toISOString() });

      // Return success response
      return res.status(200).json({
        message: "Audit request submitted successfully",
        data: { websiteUrl, name, email }
      });
    } catch (error) {
      console.error("Error processing audit request:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Book Demo / Bloom My Site submission endpoint
  app.post("/api/book-demo", async (req, res) => {
    try {
      const { name, email, website, message } = req.body;

      if (!name || !email) {
        return res.status(400).json({
          message: "Missing required fields: name and email are required"
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      if (website) {
        try {
          new URL(website);
        } catch {
          return res.status(400).json({ message: "Invalid website URL format" });
        }
      }

      console.log("Book Demo Request:", { name, email, website, message, timestamp: new Date().toISOString() });

      return res.status(200).json({
        message: "Demo request submitted successfully",
        data: { name, email }
      });
    } catch (error) {
      console.error("Error processing demo request:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
