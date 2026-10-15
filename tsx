
import "./App.css";

function App() {
  return (
    <main className="website">
      <header className="header">
        <a className="brand" href="#" aria-label="Strona główna">
          <span className="brand-icon" aria-hidden="true">❧</span>
          <span className="brand-name">
            <span>GABINET</span>
            <strong>FIZJOTERAPII</strong>
          </span>
        </a>

        <nav className="navigation" aria-label="Menu główne">
          <a href="#o-mnie">O mnie</a>
          <a href="#uslugi">Terapia</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="header-cta" href="#kontakt">
          Umów wizytę <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            FIZJOTERAPIA · ŚWIADOMY RUCH
          </span>

          <h1>
            Zadbaj o siebie.
            <br />
            <span>Odzyskaj swobodę.</span>
          </h1>

          <p className="hero-description">
            Indywidualna fizjoterapia, uważna opieka
            i podejście dopasowane do Twoich potrzeb.
            Zrób pierwszy krok w stronę lepszego samopoczucia.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#kontakt">
              Umów wizytę <span aria-hidden="true">↗</span>
            </a>
            <a className="button-secondary" href="#uslugi">
              Poznaj ofertę <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-leaf" aria-hidden="true">✳</span>
            <span>Twoje potrzeby. Indywidualne podejście.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85"
              alt="Spokojne, naturalne wnętrze w stonowanych kolorach"
            />
            <div className="image-caption">
              <span className="caption-leaf" aria-hidden="true">❧</span>
              <span>
                <strong>W harmonii z ciałem</strong>
                <small>Przestrzeń dla Twojego zdrowia</small>
              </span>
            </div>
          </div>

          <div className="botanical botanical-top" aria-hidden="true">
            ❧
          </div>
          <div className="botanical botanical-bottom" aria-hidden="true">
            ❦
          </div>
          <div className="visual-label">SPOKÓJ · RUCH · RÓWNOWAGA</div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span className="index-line" />
          <span>03</span>
        </div>
      </section>

      <section className="intro-strip" id="o-mnie">
        <span className="intro-mark" aria-hidden="true">✳</span>
        <p>
          Dobre samopoczucie zaczyna się od uważności.
          <span> Poznajmy potrzeby Twojego ciała.</span>
        </p>
      </section>

      <section className="services-section" id="uslugi">
        <span className="eyebrow">JAK MOGĘ CI POMÓC</span>
        <h2>Twoje zdrowie, <span>mój priorytet.</span></h2>
        <p>
          Zakres terapii dopasujemy do rzeczywistych usług
          i specjalizacji Twojej fizjoterapeutki.
        </p>
      </section>

      <footer className="footer" id="kontakt">
        <div>
          <span className="footer-mark" aria-hidden="true">❧</span>
          <strong>Twój gabinet fizjoterapii</strong>
        </div>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Wróć na górę ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
