import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Moon,
  Sun,
} from 'lucide-react';
import './App.css';
import Biography from './biography';
import Seasons from './seasons';

type Theme = 'light' | 'dark';

type ServiceCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  path: string;
  available: boolean;
};

const THEME_KEY = 'mellnet-theme';

const services: ServiceCard[] = [
  {
    id: 'chat',
    title: 'МеллЧат',
    subtitle: 'MELLCHAT',
    description:
      'Мессенджер, каналы, общение и собственная лента MellNet.',
    icon: '💬',
    path: '/mellchat',
    available: false,
  },
  {
    id: 'tok',
    title: 'МеллТок',
    subtitle: 'MELLTOK',
    description:
      'Мемы, короткие видео и бесконечная лента контента по Меллу.',
    icon: '▶',
    path: '/melltok',
    available: false,
  },
  {
    id: 'radio',
    title: 'МеллФМ',
    subtitle: 'MELLFM',
    description:
      'Мэшапы, треки и собственное радио с красивым плеером.',
    icon: '♫',
    path: '/radio',
    available: false,
  },
  {
    id: 'biography',
    title: 'Биография',
    subtitle: 'BIOGRAPHY',
    description:
      'История Андрея Бурима и путь Mellstroy в интернете.',
    icon: '✦',
    path: '/biography',
    available: true,
  },
  {
    id: 'seasons',
    title: 'История сезонов',
    subtitle: 'SEASONS',
    description:
      'Архив эпох, событий, мемов и главных моментов MellNet.',
    icon: '◈',
    path: '/seasons',
    available: true,
  },
];

function getInitialTheme(): Theme {
  const saved = localStorage.getItem(THEME_KEY);

  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  return 'light';
}

function navigate(path: string) {
  window.history.pushState({}, '', path);

  window.dispatchEvent(
    new PopStateEvent('popstate')
  );

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname
  );

  const [theme, setTheme] = useState<Theme>(
    getInitialTheme
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    window.addEventListener(
      'popstate',
      handlePopState
    );

    return () => {
      window.removeEventListener(
        'popstate',
        handlePopState
      );
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  if (currentPath === '/biography') {
    return (
      <Biography
        theme={theme}
        setTheme={setTheme}
      />
    );
  }

  if (currentPath === '/seasons') {
    return (
      <Seasons
        theme={theme}
        setTheme={setTheme}
      />
    );
  }

  return (
    <div
      className={`app app-${theme}`}
    >
      <button
        className="theme-switcher"
        type="button"
        aria-label={
          theme === 'light'
            ? 'Включить тёмную тему'
            : 'Включить светлую тему'
        }
        onClick={() =>
          setTheme(
            theme === 'light'
              ? 'dark'
              : 'light'
          )
        }
      >
        <span className="theme-switcher-icon">
          {theme === 'light' ? (
            <Moon size={16} strokeWidth={2} />
          ) : (
            <Sun size={16} strokeWidth={2} />
          )}
        </span>

        <span className="theme-switcher-text">
          {theme === 'light'
            ? 'DARK'
            : 'LIGHT'}
        </span>
      </button>

      {/* HERO */}

      <section className="hero">
        <div className="hero-sky" />
        <div className="hero-clouds" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-title-area">
            <div className="hero-label">
              THE INTERNET OF MELLSTROY
            </div>

            <h1 className="hero-title">
              МЕЛЛНЕТ
            </h1>

            <div className="hero-subtitle-glass">
              DIGITAL UNIVERSE / 2026
            </div>
          </div>

          <div className="hero-bottom">
            <button
              className="login-button"
              type="button"
              onClick={() => {
                alert(
                  'Регистрация появится на следующем этапе.'
                );
              }}
            >
              <span>Войти</span>

              <span className="login-arrow">
                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                />
              </span>
            </button>

            <div className="scroll-indicator">
              <span>SCROLL</span>
              <span className="scroll-line" />
            </div>
          </div>
        </div>

        <div className="hero-grass" />
        <div className="hero-bottom-glow" />

        <div className="hero-glass-orb hero-orb-one" />
        <div className="hero-glass-orb hero-orb-two" />
      </section>

      {/* SERVICES */}

      <section className="services">
        <div className="services-transition" />

        <div className="services-header">
          <div className="services-header-main">
            <div className="section-label">
              MELLNET / 01
            </div>

            <h2>
              Всё
              <br />
              <span>в одном месте.</span>
            </h2>
          </div>

          <p>
            Несколько сервисов.
            <br />
            Одна интернет-вселенная.
          </p>
        </div>

        <div className="services-grid">
          {services.map(
            (service, index) => (
              <button
                key={service.id}
                type="button"
                className={[
                  'service-card',
                  index === 0
                    ? 'service-card-large'
                    : '',
                  service.available
                    ? 'service-card-active'
                    : 'service-card-disabled',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => {
                  if (service.available) {
                    navigate(service.path);
                  }
                }}
              >
                <div className="service-card-bg" />
                <div className="service-card-shine" />

                <div className="service-card-top">
                  <span className="service-number">
                    {String(index + 1).padStart(
                      2,
                      '0'
                    )}
                  </span>

                  <span className="service-status">
                    {service.available
                      ? 'OPEN'
                      : 'SOON'}
                  </span>
                </div>

                <div className="service-icon">
                  {service.icon}
                </div>

                <div className="service-card-bottom">
                  <div className="service-subtitle">
                    {service.subtitle}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <div className="service-action">
                    <span>
                      {service.available
                        ? 'ОТКРЫТЬ СЕРВИС'
                        : 'СКОРО'}
                    </span>

                    <span className="service-action-arrow">
                      <ArrowRight
                        size={17}
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>
                </div>
              </button>
            )
          )}
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section">
        <div className="about-glow" />

        <div className="section-label">
          MELLNET / 02
        </div>

        <div className="about-grid">
          <div className="about-title">
            <span>
              Это не
            </span>

            <strong>
              просто сайт.
            </strong>
          </div>

          <div className="about-text">
            <p>
              MellNet создаётся как
              отдельная цифровая
              вселенная со своими
              сервисами, архивами,
              мемами и сообществом.
            </p>

            <p>
              Здесь можно будет общаться,
              смотреть мемы, слушать
              музыку, изучать историю
              и находить то, что давно
              потерялось в интернете.
            </p>

            <div className="about-meta">
              <span>ARCHIVE</span>
              <strong>2026</strong>

              <span>STATUS</span>
              <strong>BUILDING</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW */}

      <section className="preview-section">
        <div className="preview-grid" />

        <div className="preview-content">
          <div className="preview-label">
            SOON ON MELLNET
          </div>

          <div className="preview-title">
            Больше,
            <br />
            <span>чем кажется.</span>
          </div>

          <div className="preview-description">
            Вселенная только начинает
            собираться.
          </div>
        </div>

        <div className="preview-orb preview-orb-one" />
        <div className="preview-orb preview-orb-two" />
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-logo">
          МЕЛЛНЕТ
        </div>

        <div className="footer-center">
          THE INTERNET OF MELLSTROY
        </div>

        <div className="footer-year">
          2026
        </div>
      </footer>
    </div>
  );
}

export default App;