import { useEffect, useState } from 'react';
import './App.css';
import Biography from './biography';

type ServiceCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  path: string;
  available: boolean;
};

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
      'Архив эпох, событий, мемов и главных моментов.',
    icon: '◈',
    path: '/seasons',
    available: false,
  },
];

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

  if (currentPath === '/biography') {
    return <Biography />;
  }

  return (
    <div className="app">

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
                →
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

      </section>


      {/* SERVICES */}

      <section className="services">

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

          {services.map((service, index) => (

            <button
              key={service.id}
              type="button"
              className={`service-card ${
                index === 0
                  ? 'service-card-large'
                  : ''
              } ${
                service.available
                  ? 'service-card-active'
                  : 'service-card-disabled'
              }`}
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
                  {String(index + 1).padStart(2, '0')}
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

                  <span>→</span>

                </div>

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* ABOUT */}

      <section className="about-section">

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
              MellNet создаётся как отдельная
              цифровая вселенная со своими
              сервисами, архивами, мемами
              и сообществом.
            </p>

            <p>
              Здесь можно будет общаться,
              смотреть мемы, слушать музыку,
              изучать историю и находить
              то, что давно потерялось
              в интернете.
            </p>

          </div>

        </div>

      </section>


      {/* PREVIEW */}

      <section className="preview-section">

        <div className="preview-content">

          <div className="preview-label">
            SOON ON MELLNET
          </div>

          <div className="preview-title">
            Больше,
            <br />
            <span>чем кажется.</span>
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