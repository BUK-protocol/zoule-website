import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Globe, Zap, Users, TrendingUp, MapPin, Calendar, Plane } from "lucide-react";
import { useState } from "react";

/**
 * Zoule.ai - AI-Powered Travel Planning Browser
 * Design: Premium Tech-Forward with Warm Accents
 * 
 * Color Palette:
 * - Primary: Golden-orange (#e89d3a) - warmth, optimism, discovery
 * - Foreground: Deep charcoal (#1a1a1a) - professional, tech-forward
 * - Background: Soft white (#fafafa) - clean, breathable
 * - Secondary: Teal (#0d9488) - trust, reliability
 * - Muted: Sage gray - supporting text
 * 
 * Typography:
 * - Headlines: Playfair Display (serif) - elegant, premium
 * - Body: Inter (sans-serif) - clean, readable, modern
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-bold text-xl text-foreground">Zoule.ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#for-agencies" className="text-muted-foreground hover:text-primary transition-colors">For Agencies</a>
            <a href="#for-travelers" className="text-muted-foreground hover:text-primary transition-colors">For Travelers</a>
            <a href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors">Roadmap</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              ✨ AI-Powered Travel Planning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Travel Planning, <span className="text-primary">Reimagined</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Eliminate the tedious, repetitive work of travel booking. Zoule.ai automates deal hunting, data entry, and comparison—while keeping you in control.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start Free Trial <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663459284556/2uipZtDbE3gR5AeaFqPtDw/zoule-hero-2-G7PhbwtzhSazAho9PSwJZ2.webp"
              alt="Travel Planning"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent opacity-30"></div>
      </section>

      {/* Value Proposition - Dual Audience */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Everyone</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a travel agency managing multiple bookings or a frequent traveler seeking simplicity, Zoule.ai transforms how you plan trips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B2B Card */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Travel Agencies</h3>
              <p className="text-muted-foreground mb-6">
                Manage bookings for multiple travelers effortlessly. Optimize loyalty programs, credit card benefits, and pricing across all platforms—all from one unified interface.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Multi-traveler booking management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Loyalty program optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Enterprise-grade analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Dedicated support</span>
                </li>
              </ul>
            </Card>

            {/* B2C Card */}
            <Card className="p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-colors shadow-lg">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Frequent Travelers</h3>
              <p className="text-muted-foreground mb-6">
                Minimize planning friction while maximizing value. Get personalized recommendations, automatic loyalty optimization, and one-click booking across all travel services.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span>Unified travel search</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span>Personalized recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span>Automatic price optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span>One-click booking</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zoule.ai combines intelligent automation with user control to revolutionize travel planning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unified Search</h3>
              <p className="text-muted-foreground">
                Search hotels, flights, attractions, and transport across 100+ platforms in one place. No more switching between websites.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Automation</h3>
              <p className="text-muted-foreground">
                Our computer-use agent handles deal hunting, data entry, and comparison. You stay in control with final approval on all bookings.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Optimization</h3>
              <p className="text-muted-foreground">
                Automatically optimize for loyalty programs, credit card benefits, and pricing. Maximize value on every trip.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A seamless journey from discovery to booking to in-trip management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "1", title: "Discover", desc: "Set your destination, dates, and preferences" },
              { step: "2", title: "Plan", desc: "AI searches and compares across 100+ services" },
              { step: "3", title: "Optimize", desc: "Get personalized recommendations and best deals" },
              { step: "4", title: "Book", desc: "One-click booking with automatic optimization" },
              { step: "5", title: "Manage", desc: "Real-time alerts and in-trip assistance" },
              { step: "6", title: "Share", desc: "Collaborate with travel companions" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663459284556/2uipZtDbE3gR5AeaFqPtDw/zoule-feature-1-nnhFu3wV5NYf8oaTegWeMZ.webp"
              alt="How It Works"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From MVP to comprehensive travel management platform. We're building the future of travel planning.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { phase: "Phase 1", title: "MVP - Single Hotel Search", timeline: "1-2 months", status: "Current" },
              { phase: "Phase 2", title: "Multi-City Hotel Search", timeline: "Month 2-3", status: "Planned" },
              { phase: "Phase 3", title: "Flights + Loyalty Optimization", timeline: "Month 4-5", status: "Planned" },
              { phase: "Phase 4", title: "Itinerary Optimization + Mobile", timeline: "Month 6-8", status: "Planned" },
              { phase: "Phase 5+", title: "Transport, Attractions, Meals & Beyond", timeline: "Year 2+", status: "Future" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                    item.status === "Current" ? "bg-primary" : item.status === "Planned" ? "bg-primary/60" : "bg-muted"
                  }`}>
                    {idx + 1}
                  </div>
                  {idx < 4 && <div className="w-1 h-12 bg-primary/30 mt-2"></div>}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.phase} • {item.timeline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Travel Planning?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join travel agencies and frequent travelers who are already saving time and money with Zoule.ai.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Start Free Trial <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <Card className="p-8 border-2 border-primary/20">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your travel planning needs..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold">Z</span>
                </div>
                <span className="font-bold text-lg">Zoule.ai</span>
              </div>
              <p className="text-gray-400">AI-Powered Travel Planning Browser</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © 2026 Buk Technology Inc. All rights reserved. Zoule.ai is a product of Buk Technology Inc.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
