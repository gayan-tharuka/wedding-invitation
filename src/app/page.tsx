"use client";

import Image from "next/image";
import { useEffect, useState, FormEvent } from "react";
import {
  CalendarHeart,
  Clock4,
  MapPin,
  ChevronDown,
  Heart,
  Wine,
  UtensilsCrossed,
  Music4,
  CarFront,
  Flower2,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

/* ─── Scroll-reveal observer ─── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ─── Timeline data ─── */
const events = [
  {
    time: "8:30 AM",
    icon: <Heart size={20} />,
    title: "Guest Arrival & Sweet Table",
    desc: "Join us as we gather to celebrate love. A traditional selection of sweets will be available upon arrival.",
  },
  {
    time: "9:12 AM",
    icon: <Flower2 size={20} />,
    title: "Poruwa Ceremony",
    desc: "The sacred poruwa ceremony will commence — the most auspicious moment of the day.",
  },
  {
    time: "10:00 AM",
    icon: <Wine size={20} />,
    title: "Refreshments",
    desc: "A selection of welcome drinks awaits our guests.",
  },
  {
    time: "12:30 PM",
    icon: <UtensilsCrossed size={20} />,
    title: "Lunch",
    desc: "A delightful lunch featuring Sri Lankan & Chinese cuisine will be served.",
  },
  {
    time: "2:00 PM",
    icon: <Music4 size={20} />,
    title: "Dance Floor Opens",
    desc: "Join us on the dance floor as celebrations continue.",
  },
  {
    time: "4:00 PM",
    icon: <CarFront size={20} />,
    title: "Couple's Departure",
    desc: "The newlyweds will bid farewell to begin their new journey together.",
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      {/* Floral corners */}
      <div className="floral-decor floral-tl">
        <Image src="/floral.png" alt="" fill style={{ objectFit: "contain" }} priority />
      </div>
      <div className="floral-decor floral-tr">
        <Image src="/floral.png" alt="" fill style={{ objectFit: "contain" }} priority />
      </div>
      <div className="floral-decor floral-bl">
        <Image src="/floral.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>
      <div className="floral-decor floral-br">
        <Image src="/floral.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>

      {/* ─── Hero ─── */}
      <section className="hero">
        <p className="hero-subtitle hero-fade hero-fade-delay-1">
          Together with their families
        </p>

        <h1 className="hero-name hero-fade hero-fade-delay-2">Hiruni</h1>
        <div className="hero-amp hero-fade hero-fade-delay-3">&amp;</div>
        <h1 className="hero-name hero-fade hero-fade-delay-4">Hasika</h1>

        <p className="hero-tagline hero-fade hero-fade-delay-5">
          Warmly request the honour of your presence
        </p>

        <p className="hero-date hero-fade hero-fade-delay-6">
          Wednesday, the 3rd of June
          <span className="hero-year">2 0 2 6</span>
        </p>

        <div className="hero-scroll-hint hero-fade hero-fade-delay-6">
          <span>Scroll</span>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ─── When & Where ─── */}
      <section className="section" style={{ background: "var(--background)" }}>
        <div className="container text-center">
          <p className="section-label reveal">The Details</p>
          <h2 className="section-title-script reveal reveal-delay-1">
            When &amp; Where
          </h2>
          <div className="ornament reveal reveal-delay-2">✦</div>

          <div className="details-grid">
            <div className="detail-card reveal reveal-delay-1">
              <div className="detail-icon">
                <CalendarHeart size={22} />
              </div>
              <h3>Date</h3>
              <p className="detail-text">Wednesday</p>
              <p className="detail-highlight">June 3</p>
              <p className="detail-sub uppercase">2026</p>
            </div>

            <div className="detail-card reveal reveal-delay-2">
              <div className="detail-icon">
                <Clock4 size={22} />
              </div>
              <h3>Time</h3>
              <p className="detail-highlight">9 AM – 4 PM</p>
              <p className="detail-text" style={{ marginTop: "0.5rem" }}>
                Poruwa Ceremony at
              </p>
              <p className="detail-sub uppercase">9:12 AM</p>
            </div>

            <a
              href="https://maps.app.goo.gl/qvZK2AmdUuFkk8V17"
              target="_blank"
              rel="noopener noreferrer"
              className="detail-card detail-card-link reveal reveal-delay-3"
            >
              <div className="detail-icon">
                <MapPin size={22} />
              </div>
              <h3>Venue</h3>
              <p className="detail-highlight">Hotel Viverra</p>
              <p className="detail-text">Girithale</p>
              <p className="detail-map-link">View on Map →</p>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Order of Events ─── */}
      <section className="section timeline-section">
        <div className="container text-center">
          <p className="section-label reveal">The Celebration</p>
          <h2 className="section-title-script reveal reveal-delay-1">
            Order of Events
          </h2>
          <div className="ornament reveal reveal-delay-2">♡</div>

          <div className="timeline">
            {events.map((ev, i) => (
              <div
                key={i}
                className={`tl-item reveal reveal-delay-${Math.min(i + 1, 6)}`}
              >
                <div className="tl-dot" />
                <div className="tl-content">
                  <span className="tl-time">{ev.time}</span>
                  <h3>
                    {ev.title}
                  </h3>
                  <p>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RSVP ─── */}
      <RsvpSection />

      {/* ─── Footer ─── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-hearts reveal">♡ ♡ ♡</div>
          <h2 className="footer-names reveal reveal-delay-1">
            Hiruni &amp; Hasika
          </h2>
          <p className="footer-info reveal reveal-delay-2">
            June 3, 2026 · Girithale
          </p>
          <p className="footer-love reveal reveal-delay-3">
            Made with <span className="heart">♥</span>
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ─── RSVP Section ─── */
function RsvpSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState<"accept" | "decline" | "">("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !phone || !attending) return;

    setStatus("sending");
    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (!scriptUrl) {
        throw new Error("Google Script URL not configured");
      }

      const res = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          attending,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      // no-cors returns opaque response, so we assume success
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="section rsvp-section">
        <div className="container text-center">
          <div className="rsvp-success reveal visible">
            <CheckCircle2 size={48} style={{ color: "var(--accent)", marginBottom: "1.5rem" }} />
            <h2 className="section-title-script">Thank You!</h2>
            <p style={{ marginTop: "1rem", opacity: 0.8 }}>
              Your response has been recorded. We look forward to celebrating with you!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section rsvp-section">
      <div className="container text-center">
        <p className="section-label reveal">We&apos;d Love to Have You</p>
        <h2 className="section-title-script reveal reveal-delay-1">
          Kindly Respond
        </h2>
        <div className="ornament reveal reveal-delay-2">♡</div>

        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="rsvp-field reveal reveal-delay-1">
            <label className="rsvp-label" htmlFor="rsvp-name">Full Name</label>
            <input
              id="rsvp-name"
              type="text"
              className="rsvp-input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="rsvp-field reveal reveal-delay-2">
            <label className="rsvp-label" htmlFor="rsvp-phone">Contact Number</label>
            <input
              id="rsvp-phone"
              type="tel"
              className="rsvp-input"
              placeholder="07X XXX XXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="rsvp-field reveal reveal-delay-3">
            <label className="rsvp-label">Will You Be Attending?</label>
            <div className="rsvp-toggle-group">
              <button
                type="button"
                className={`rsvp-toggle ${attending === "accept" ? "rsvp-toggle-active" : ""}`}
                onClick={() => setAttending("accept")}
              >
                Joyfully Accept
              </button>
              <button
                type="button"
                className={`rsvp-toggle ${attending === "decline" ? "rsvp-toggle-active" : ""}`}
                onClick={() => setAttending("decline")}
              >
                Regretfully Decline
              </button>
            </div>
          </div>

          <div className="rsvp-field reveal reveal-delay-4">
            <label className="rsvp-label" htmlFor="rsvp-message">Message for the Couple</label>
            <textarea
              id="rsvp-message"
              className="rsvp-textarea"
              placeholder="Your warm wishes..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="reveal reveal-delay-5">
            <button
              type="submit"
              className="rsvp-submit"
              disabled={status === "sending" || !name || !phone || !attending}
            >
              {status === "sending" ? (
                <><Loader2 size={18} className="rsvp-spinner" /> Sending...</>
              ) : (
                <><Send size={16} /> Send RSVP</>
              )}
            </button>
            {status === "error" && (
              <p className="rsvp-error">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
