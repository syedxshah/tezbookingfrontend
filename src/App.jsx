import React, { useState } from "react";

const CHANNEL_URL = "https://whatsapp.com/channel/0029VbDcdCGDuMRe1PCtne2p";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <path d="m6 18 20-13-9 22-3.1-8.1L6 18Z" fill="currentColor" />
        <path d="m13.9 18.9 7-7" stroke="#f6f7f2" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 10 3.2 3.2L15.5 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function StorePreview() {
  return (
    <div className="store-stage" role="img" aria-label="3D preview of a small business booking page with a service list and quick booking form">
      <div className="store-glow" aria-hidden="true" />
      <div className="store-shadow" aria-hidden="true" />
      <div className="store-card">
        <div className="store-browser">
          <div className="browser-dots" aria-hidden="true"><i /><i /><i /></div>
          <span className="browser-address">bloom.tezbooking.site</span>
          <span className="browser-share" aria-hidden="true">↗</span>
        </div>
        <div className="store-content">
          <div className="store-brand-row">
            <div className="shop-logo">b.</div>
            <div className="shop-identity">
              <strong>Bloom Studio</strong>
              <span>Flowers & little things</span>
            </div>
            <span className="shop-menu" aria-hidden="true">•••</span>
          </div>

          <div className="shop-cover">
            <div className="flower-art" aria-hidden="true">
              <span className="flower flower--one" />
              <span className="flower flower--two" />
              <span className="flower flower--three" />
              <span className="flower-stem flower-stem--one" />
              <span className="flower-stem flower-stem--two" />
              <span className="flower-stem flower-stem--three" />
              <span className="flower-vase" />
            </div>
            <div className="cover-copy">
              <span>MADE WITH A LITTLE LOVE</span>
              <strong>Flowers for<br />your every day.</strong>
            </div>
          </div>

          <div className="shop-section-heading">
            <div><span>THE LITTLE SHOP</span><strong>What can we help with?</strong></div>
            <span className="shop-see-all">See all ↗</span>
          </div>
          <div className="service-row">
            <div className="service-thumb service-thumb--bouquet" aria-hidden="true">
              <span>✿</span>
            </div>
            <div className="service-details">
              <strong>Everyday bouquet</strong>
              <span>Fresh seasonal stems</span>
              <b>₹350 <small>/ booking</small></b>
            </div>
            <button className="book-button" type="button" tabIndex={-1}>Select</button>
          </div>

          <div className="booking-form">
            <div className="form-heading">
              <div><span>READY WHEN YOU ARE</span><strong>Make it yours</strong></div>
              <span className="form-step">1 OF 2</span>
            </div>
            <div className="form-fields">
              <div className="form-field"><span>Your name</span><strong>Alex Morgan</strong></div>
              <div className="form-field"><span>Choose a time</span><strong>Pick a time <i>⌄</i></strong></div>
            </div>
            <button className="form-submit" type="button" tabIndex={-1}>
              Request a booking <ArrowIcon />
            </button>
            <div className="secure-note"><span>✓</span> Quick form · No account needed</div>
          </div>
        </div>
      </div>

      <div className="floating-badge share-badge">
        <span className="badge-share-icon" aria-hidden="true">↗</span>
        <span><strong>Your own booking link</strong><small>Ready to share anywhere</small></span>
      </div>
      <div className="floating-badge booking-badge">
        <span className="badge-check"><CheckIcon /></span>
        <span><strong>Booking received</strong><small>Nice and simple.</small></span>
      </div>
      <div className="stage-caption"><span /> A mini shop, made for your business</div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Add what you offer",
    detail: "List your services, products, prices, and details.",
    icon: "＋",
  },
  {
    number: "02",
    title: "Share your page",
    detail: "One simple link for your bio, socials, or customers.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Take bookings",
    detail: "Customers choose what they need and send a request.",
    icon: "✓",
  },
];

const faqs = [
  {
    question: "What is TezBooking?",
    answer:
      "TezBooking is an upcoming mini-shop and booking-page service for small businesses. It is being designed to help businesses display products or services and share one page where customers can send booking requests.",
  },
  {
    question: "Who is TezBooking for?",
    answer:
      "TezBooking is being designed for small businesses, independent sellers, and service providers who want a simple page to show what they offer and receive booking requests.",
  },
  {
    question: "Is TezBooking accepting real bookings yet?",
    answer:
      "Not yet. TezBooking is preparing for launch. The booking form shown on this website is a visual preview and does not accept or save real booking requests. Join the TezBooking WhatsApp channel for launch updates.",
  },
  {
    question: "How will customers request a booking?",
    answer:
      "The planned flow is for a customer to open a business page, review its listed products or services, and submit a booking request through a form. The service is not live yet.",
  },
];

function App() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <div className="site-shell">
      <div className="ambient ambient--top" aria-hidden="true" />
      <div className="ambient ambient--bottom" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="TezBooking home">
          <BrandMark />
          <span>tez<span className="brand-light">booking</span></span>
        </a>
        <div className="launch-status">
          <span className="status-pulse" aria-hidden="true" />
          <span>Pre-launch · For small businesses</span>
        </div>
        <a className="header-cta" href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
          Get early access <ArrowIcon />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span /> A SIMPLE WAY TO GET BOOKED</div>
            <h1 id="hero-title">
              Your mini-shop.<br />
              <span className="word-wonder">Easy bookings.</span>
            </h1>
            <p className="hero-description">
              Give your small business one simple page to show what you offer
              and take booking requests. Share your link. That’s it.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Get early updates
                <span className="cta-arrow"><ArrowIcon /></span>
              </a>
            </div>
            <div className="use-cases">
              <span>MADE FOR</span>
              <i>Services</i>
              <i>Products</i>
              <i>Appointments</i>
            </div>
          </div>

          <div className="hero-art">
            <StorePreview />
          </div>
        </section>

        <section className="journey" id="journey" aria-labelledby="journey-title">
          <div className="journey-heading">
            <div>
              <p className="section-kicker">From “I’m interested” to “you’re booked.”</p>
              <h2 id="journey-title">From your link to <span>their booking.</span></h2>
            </div>
            <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="journey-link">
              Get the first update <ArrowIcon />
            </a>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-top">
                  <span className="step-number">{step.number}</span>
                  <span className="step-icon" aria-hidden="true">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-intro">
            <p className="section-kicker">The quick answers</p>
            <h2 id="faq-title">Good to <span>know.</span></h2>
            <p>
              TezBooking is being built for small businesses that want a simple online
              page for their offers and booking requests.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top"><BrandMark /> TezBooking</a>
        <p>Small business, beautifully bookable.</p>
        <p>A project of <a href="https://qodesystem.com" target="_blank" rel="noopener noreferrer">Qode System</a></p>
        <span>© {year} TezBooking</span>
      </footer>
    </div>
  );
}

export default App;
