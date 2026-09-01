import './biography.css';

const photos = [
  '/mell-1.jpg',
  '/mell-2.jpg',
  '/mell-3.jpg',
  '/mell-4.jpg',
  '/mell-5.jpg',
  '/mell-6.jpg',
];

function goHome() {
  window.history.pushState({}, '', '/');
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function Biography() {
  return (
    <main className="biography-page">

      {/* =========================================
          BACKGROUND SYSTEM
      ========================================= */}

      <div className="bio-noise" />
      <div className="bio-grid" />
      <div className="bio-glow bio-glow-one" />
      <div className="bio-glow bio-glow-two" />


      {/* =========================================
          NAVIGATION
      ========================================= */}

      <nav className="bio-nav">

        <button
          className="bio-logo"
          onClick={goHome}
          type="button"
        >
          <span>MELL</span>
          <strong>NET</strong>
        </button>

        <div className="bio-nav-status">
          <span className="status-dot" />
          MELLNET ARCHIVE
        </div>

        <div className="bio-nav-index">
          BIO / 04
        </div>

      </nav>


      {/* =========================================
          HERO
      ========================================= */}

      <section className="bio-hero">

        <div className="bio-hero-image">

          <img
            src={photos[0]}
            alt="Mellstroy"
          />

          <div className="bio-image-gradient" />

          <div className="bio-image-glass" />

        </div>


        <div className="bio-hero-content">

          <div className="bio-kicker">
            MELLNET / DIGITAL ARCHIVE / 004
          </div>

          <h1>
            МЕЛЛСТРОЙ
          </h1>

          <div className="bio-hero-bottom">

            <p>
              История человека, который стал
              отдельным явлением русскоязычного
              интернета.
            </p>

            <div className="bio-scroll">
              <span>SCROLL TO EXPLORE</span>
              <i />
            </div>

          </div>

        </div>


        <div className="bio-floating-data bio-data-left">
          <span>SUBJECT</span>
          <strong>MELLSTROY</strong>
        </div>

        <div className="bio-floating-data bio-data-right">
          <span>ARCHIVE</span>
          <strong>04 / 05</strong>
        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="bio-section bio-intro">

        <div className="bio-section-label">
          <span>01</span>
          OVERVIEW
        </div>

        <div className="bio-intro-grid">

          <div className="bio-big-text">
            Не просто
            <br />
            <span>медиаобраз.</span>
          </div>

          <div className="bio-glass-panel">

            <div className="panel-top">
              <span>FILE / MELLSTROY</span>
              <span>OPEN</span>
            </div>

            <p>
              Mellstroy — интернет-псевдоним Андрея Бурима,
              белорусского блогера и стримера, получившего
              широкую известность благодаря прямым эфирам,
              провокационному контенту и яркой интернет-культуре
              вокруг своего имени.
            </p>

            <p>
              Со временем вокруг личности Mellstroy сформировалось
              отдельное медиапространство: мемы, цитаты,
              фанатские сообщества, нарезки, визуальные образы
              и многочисленные отсылки внутри русскоязычного
              интернета.
            </p>

            <div className="panel-line" />

            <div className="panel-meta">
              <div>
                <span>TYPE</span>
                <strong>INTERNET CULTURE</strong>
              </div>

              <div>
                <span>FORMAT</span>
                <strong>STREAM / MEDIA</strong>
              </div>

              <div>
                <span>ARCHIVE</span>
                <strong>MELLNET</strong>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          PHOTO WALL
      ========================================= */}

      <section className="bio-section bio-gallery-section">

        <div className="bio-section-label">
          <span>02</span>
          VISUAL ARCHIVE
        </div>

        <div className="bio-gallery">

          <div className="bio-photo photo-main">
            <img
              src={photos[1]}
              alt="Mellstroy archive"
            />

            <div className="photo-overlay">
              <span>ARCHIVE 01</span>
              <strong>MELLSTROY</strong>
            </div>
          </div>


          <div className="bio-photo photo-small">
            <img
              src={photos[2]}
              alt="Mellstroy archive"
            />

            <div className="photo-overlay">
              <span>ARCHIVE 02</span>
            </div>
          </div>


          <div className="bio-photo photo-small">
            <img
              src={photos[3]}
              alt="Mellstroy archive"
            />

            <div className="photo-overlay">
              <span>ARCHIVE 03</span>
            </div>
          </div>


          <div className="bio-photo photo-wide">
            <img
              src={photos[4]}
              alt="Mellstroy archive"
            />

            <div className="photo-overlay">
              <span>ARCHIVE 04</span>
              <strong>DIGITAL CULTURE</strong>
            </div>
          </div>

        </div>

      </section>


      {/* =========================================
          STORY
      ========================================= */}

      <section className="bio-section bio-story">

        <div className="bio-section-label">
          <span>03</span>
          THE STORY
        </div>

        <div className="bio-story-heading">

          <h2>
            От стримов
            <br />
            <span>к феномену.</span>
          </h2>

          <div className="story-description">
            Интернет меняется быстрее,
            чем успевают сохраняться его
            главные моменты.
          </div>

        </div>


        <div className="story-cards">

          <article className="story-card">

            <div className="story-number">
              01
            </div>

            <div className="story-card-content">

              <span>
                НАЧАЛО
              </span>

              <h3>
                Первые трансляции
              </h3>

              <p>
                Путь к большой аудитории начинался с
                прямых трансляций и постепенного формирования
                собственного узнаваемого формата.
              </p>

            </div>

          </article>


          <article className="story-card story-card-featured">

            <div className="story-number">
              02
            </div>

            <div className="story-card-content">

              <span>
                РОСТ
              </span>

              <h3>
                Большая аудитория
              </h3>

              <p>
                Стримы, клипы и обсуждения начали выходить
                далеко за пределы первоначальной аудитории.
                Имя Mellstroy стало узнаваемым мемом само по себе.
              </p>

            </div>

          </article>


          <article className="story-card">

            <div className="story-number">
              03
            </div>

            <div className="story-card-content">

              <span>
                КУЛЬТУРА
              </span>

              <h3>
                Отдельный интернет-мир
              </h3>

              <p>
                Вокруг образа появились мемы, цитаты,
                фанатские проекты, сообщества и целый пласт
                интернет-культуры.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* =========================================
          QUOTE
      ========================================= */}

      <section className="bio-quote-section">

        <div className="quote-decoration">
          MELL
        </div>

        <div className="quote-glass">

          <div className="quote-label">
            MELLNET / ARCHIVE QUOTE
          </div>

          <div className="quote-mark">
            “
          </div>

          <blockquote>
            Интернет запоминает не только события.
            Он запоминает мемы, фразы и моменты,
            которые становятся частью общей культуры.
          </blockquote>

          <div className="quote-footer">
            <span>MELLNET ARCHIVE</span>
            <span>2026</span>
          </div>

        </div>

      </section>


      {/* =========================================
          FINAL PHOTO
      ========================================= */}

      <section className="bio-final">

        <div className="bio-final-image">

          <img
            src={photos[5]}
            alt="Mellstroy"
          />

          <div className="bio-final-overlay" />

        </div>

        <div className="bio-final-content">

          <div className="bio-kicker">
            END OF FILE / 004
          </div>

          <h2>
            История
            <br />
            продолжается.
          </h2>

          <p>
            MellNet собирает материалы, которые
            помогают сохранить отдельные страницы
            этой интернет-эпохи.
          </p>

          <button
            className="bio-back-button"
            onClick={goHome}
            type="button"
          >
            <span>Вернуться в MellNet</span>
            <strong>→</strong>
          </button>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="bio-footer">

        <div>
          MELLNET
        </div>

        <span>
          DIGITAL ARCHIVE / BIOGRAPHY
        </span>

        <span>
          2026
        </span>

      </footer>

    </main>
  );
}

export default Biography;