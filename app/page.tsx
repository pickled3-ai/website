import Image from "next/image";
import Brand from "../components/Brand";
import LaunchLinks from "../components/LaunchLinks";
import ScrollReveals from "../components/ScrollReveals";
import { site } from "../content/site";

export default function HomePage() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap flex items-center justify-between header-inner">
          <Brand />
          <nav className="flex items-center" aria-label="Main navigation">
            <a className="nav-link" href="#approach">Our approach</a>
            <a className="nav-link" href="#preview">App preview</a>
            <LaunchLinks compact />
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">{site.hero.heading} <em>{site.hero.emphasis}</em></h1>
            <p className="intro">{site.hero.description}</p>
            <div className="hero-actions">
              <LaunchLinks />
              <a className="text-link" href="#preview">Explore the app</a>
            </div>
          </div>
          <figure className="court-stage" data-scroll-reveal>
            <div className="stage-label"><span className="mini-court" aria-hidden="true" />App preview</div>
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="hardware" aria-hidden="true"><span /></div>
                <Image src="/product/personalized.png" alt="Train screen with an illustrative skill profile for forehand, backhand and footwork." width={720} height={1170} priority unoptimized />
                <div className="home-indicator" aria-hidden="true" />
              </div>
            </div>
          </figure>
        </section>

        <div className="approach-band" id="approach">
          <div className="wrap approach-grid">
            <section aria-labelledby="problem-title" className="story problem">
              <p className="kicker"><span className="rule" />The problem</p>
              <h2 id="problem-title">More games.<br />Same missed shots.</h2>
              <p>You leave open play knowing your backhand let you down. Then you’re back on court with a partner, half an hour to drill, and no idea where to start.</p>
            </section>
            <section aria-labelledby="solution-title" className="story solution">
              <p className="kicker"><span className="rule" />Our solution</p>
              <h2 id="solution-title">A purpose for<br />every practice.</h2>
              <p>PickleD³ matches your goals with curated drills and structured sessions. Tell us about your game, pick a focus, and take it to the court.</p>
              <a href="#preview" className="text-link">See the training preview</a>
            </section>
          </div>
        </div>

        <section id="preview" className="wrap showcase" aria-labelledby="preview-title">
          <p className="kicker"><span className="rule" />Product showcase</p>
          <div className="section-heading">
            <h2 id="preview-title">Inside <span>PickleD³.</span></h2>
          </div>
          <div className="preview-grid">
            {site.previews.map((item) => (
              <article key={item.title} className="preview-item" data-scroll-reveal>
                <div className="preview-card">
                  <div className="preview-art"><Image src={item.image} alt={item.alt} width={item.width} height={item.height} unoptimized /></div>
                  <div className="preview-copy">
                    <h3>{item.title}</h3><p>{item.caption}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="waitlist" className="wrap closing" aria-labelledby="closing-title">
          <div className="closing-inner">
            <div>
              <h2 id="closing-title">Ready to level up<br />your game?</h2>
              <p>PickleD³ is officially available on the App Store! Start training with purpose today, or join our community to stay updated on upcoming features and opportunities to help shape the app.</p>
            </div>
            <LaunchLinks />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <Brand />
          <nav className="footer-socials" aria-label="Social media">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="PickleD³ on Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="1.75" y="1.75" width="20.5" height="20.5" rx="6" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="12" cy="12" r="4.7" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="18.2" cy="5.9" r="1.35" fill="currentColor" />
              </svg>
            </a>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="PickleD³ on TikTok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 1c.3 3.3 2.2 5.4 5.4 5.6v4a9.8 9.8 0 0 1-5.4-1.8v7a7.3 7.3 0 1 1-6.3-7.2v4.1a3.3 3.3 0 1 0 2.3 3.1V1z" />
              </svg>
            </a>
          </nav>
        </div>
      </footer>
      <ScrollReveals />
    </div>
  );
}
