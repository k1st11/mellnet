import {
  ArrowLeft,
  Moon,
  Sun,
  Monitor,
} from 'lucide-react';
import type { Theme } from './App';
import './seasons.css';

type SeasonsProps = {
  theme: Theme;
  setTheme: React.Dispatch<
    React.SetStateAction<Theme>
  >;
};

type Season = {
  number: string;
  title: string;
  period: string;
  description: string;
  character: string;
  visual: string;
};

const seasons: Season[] = [
  {
    number: '01',
    title: 'Шарага',
    period: '2023 — 2024',
    description:
      'Первые мемы вокруг Mellstroy. Старые кадры, клипы, бытовые ситуации и атмосфера учёбы.',
    character: 'Ч',
    visual: 'school',
  },
  {
    number: '02',
    title: 'Армия',
    period: '2023 — 2024',
    description:
      'Мемы из армейских казарм, новые кадры, больше персонажей и больше возможностей для творчества.',
    character: 'Друн',
    visual: 'army',
  },
  {
    number: '03',
    title: 'Темщики',
    period: '2024',
    description:
      'Сезон про друзей-темщиков, схемы, обходные пути и попытки найти способ заработать.',
    character: 'Ч',
    visual: 'scheme',
  },
  {
    number: '04',
    title: 'Простые мемы',
    period: '2021 — настоящее время',
    description:
      'Отдельные мемы, которые не относятся к конкретному месту, сезону или персонажу.',
    character: '—',
    visual: 'free',
  },
  {
    number: '05',
    title: 'Поезд',
    period: '2025',
    description:
      'Одна ситуация, из которой вырос целый словарь: Ч, Друн, Батч, Дод и другие легендарные слова.',
    character: 'Друн',
    visual: 'train',
  },
  {
    number: '06',
    title: 'Мурино',
    period: '2025 — 2026',
    description:
      'Гигантский человеческий муравейник из бесконечных многоэтажек. Фог, Артур, Ч и Друн.',
    character: 'Фог',
    visual: 'murino',
  },
  {
    number: '07',
    title: 'Село Молочное',
    period: 'конец 2025 — начало 2026',
    description:
      'Таинственное село в Крыму с единственным трамваем, пауками и атмосферой локального хоррора.',
    character: 'Фог',
    visual: 'milk',
  },
  {
    number: '08',
    title: 'Банька',
    period: '2026',
    description:
      'Бытовые банные ситуации, Дод, Прадод и другие персонажи.',
    character: 'Дод',
    visual: 'bath',
  },
  {
    number: '09',
    title: 'Мытищи',
    period: '2026',
    description:
      'Футуристический город, вдохновлённый Frutiger Aero. Чистюли, бассейны и обязательное приветствие Артуру.',
    character: 'Артур',
    visual: 'mytischi',
  },
  {
    number: '10',
    title: 'Элджеевка',
    period: '2026',
    description:
      'Деревня, где у всех белые закатанные глаза. Сезон быстро вышел за пределы сообщества.',
    character: 'Элджей',
    visual: 'eldzheevka',
  },
  {
    number: '11',
    title: 'Бурмалденс',
    period: '2026',
    description:
      'Ноги из jumpstyle-клипа, смонтированные так, будто Бурим танцует. Часто пересекается с Элджеевкой.',
    character: 'Бурим',
    visual: 'dance',
  },
  {
    number: '12',
    title: 'Городские против сельских',
    period: '2026',
    description:
      'Абсурдное сравнение деревенской и городской жизни: питбайки, сёла, города и AI-видео.',
    character: 'Ч',
    visual: 'city',
  },
  {
    number: '13',
    title: 'Тёмный Друн',
    period: '2026',
    description:
      'Смешение образа Тёмного Принца и вирусного слова Друн.',
    character: 'Друн',
    visual: 'dark',
  },
  {
    number: '14',
    title: 'Смены',
    period: '2026',
    description:
      'Школьные смены: от обычных детей до всё более абсурдных AI-образов.',
    character: 'Ч',
    visual: 'shifts',
  },
  {
    number: '15',
    title: 'Котость',
    period: '2026',
    description:
      'Долгий и насыщенный сезон с котами. Котость — AI-версия Куки из SlivkiShow.',
    character: 'Котость',
    visual: 'cat',
  },
  {
    number: '16',
    title: 'Другие',
    period: '2025 — 2026',
    description:
      'Менее масштабные сезоны и отдельные контексты, которые не получили собственного полноценного мира.',
    character: '—',
    visual: 'other',
  },
];

function goHome() {
  window.history.pushState({}, '', '/');

  window.dispatchEvent(
    new PopStateEvent('popstate')
  );

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function getNextTheme(theme: Theme): Theme {
  if (theme === 'light') {
    return 'dark';
  }

  if (theme === 'dark') {
    return 'retro';
  }

  return 'light';
}

function getThemeName(theme: Theme): string {
  if (theme === 'light') {
    return 'LIGHT';
  }

  if (theme === 'dark') {
    return 'DARK';
  }

  return 'RETRO';
}

function getThemeIcon(theme: Theme) {
  if (theme === 'light') {
    return (
      <Moon
        size={16}
        strokeWidth={2}
      />
    );
  }

  if (theme === 'dark') {
    return (
      <Monitor
        size={16}
        strokeWidth={2}
      />
    );
  }

  return (
    <Sun
      size={16}
      strokeWidth={2}
    />
  );
}

function Seasons({
  theme,
  setTheme,
}: SeasonsProps) {
  const nextTheme = getNextTheme(theme);

  return (
    <main
      className={`seasons-page seasons-${theme}`}
    >
      <button
        className="seasons-theme-switcher"
        type="button"
        aria-label={`Переключить тему на ${getThemeName(nextTheme)}`}
        onClick={() => {
          setTheme(nextTheme);
        }}
      >
        <span className="seasons-theme-icon">
          {getThemeIcon(theme)}
        </span>

        <span>
          {getThemeName(theme)}
        </span>
      </button>

      <div className="seasons-background-grid" />
      <div className="seasons-glow seasons-glow-one" />
      <div className="seasons-glow seasons-glow-two" />

      <nav className="seasons-nav">
        <button
          type="button"
          className="seasons-back"
          onClick={goHome}
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
          />

          <span>
            MELLNET
          </span>
        </button>

        <div className="seasons-nav-center">
          MELLNET / ARCHIVE
        </div>

        <div className="seasons-nav-index">
          SEASONS / 16
        </div>
      </nav>

      <section className="seasons-hero">
        <div className="seasons-kicker">
          DIGITAL MEME ARCHIVE / 2023 — 2026
        </div>

        <h1>
          История
          <br />
          <span>сезонов.</span>
        </h1>

        <p>
          Архив развития мем-вселенной:
          от первых бытовых кадров
          до целых городов, персонажей
          и самостоятельных миров.
        </p>

        <div className="seasons-scroll">
          <span>DESCEND</span>
          <i />
        </div>
      </section>

      <section className="seasons-intro">
        <div className="seasons-section-label">
          <span>00</span>
          ARCHIVE STRUCTURE
        </div>

        <div className="seasons-intro-grid">
          <h2>
            Не просто
            <br />
            <span>список мемов.</span>
          </h2>

          <div>
            <p>
              Каждый этаж — отдельная эпоха.
              С каждым уровнем вниз меняются
              места, персонажи, визуальный язык
              и сами правила мем-вселенной.
            </p>

            <p>
              Но сезоны не существуют отдельно:
              персонажи и идеи переходят
              из одного мира в другой,
              постепенно создавая общую историю.
            </p>
          </div>
        </div>
      </section>

      <section className="seasons-tower">
        <div className="tower-line" />

        {seasons.map((season, index) => (
          <article
            key={season.number}
            className={[
              'season-floor',
              `season-${season.visual}`,
              index % 2 === 0
                ? 'floor-left'
                : 'floor-right',
            ].join(' ')}
          >
            <div className="floor-number">
              <span>
                FLOOR
              </span>

              <strong>
                {season.number}
              </strong>
            </div>

            <div className="floor-visual">
              <div className="visual-sky" />
              <div className="visual-city" />

              <div className="visual-character">
                {season.character}
              </div>

              <div className="visual-glass" />
            </div>

            <div className="floor-content">
              <div className="floor-meta">
                <span>
                  {season.period}
                </span>

                <span>
                  {String(index + 1).padStart(
                    2,
                    '0'
                  )}
                  /16
                </span>
              </div>

              <h2>
                {season.title}
              </h2>

              <p>
                {season.description}
              </p>

              <div className="floor-bottom">
                <span>
                  MELLNET ARCHIVE
                </span>

                <span>
                  ↓
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="seasons-end">
        <div className="end-orbit end-orbit-one" />
        <div className="end-orbit end-orbit-two" />

        <div className="end-content">
          <span>
            END OF CURRENT ARCHIVE
          </span>

          <h2>
            История
            <br />
            <span>
              продолжается.
            </span>
          </h2>

          <p>
            Новые сезоны появляются
            вместе с новыми мемами,
            персонажами и мирами.
          </p>

          <button
            type="button"
            onClick={goHome}
            className="seasons-home-button"
          >
            <span>
              Вернуться в MellNet
            </span>

            <ArrowLeft
              size={17}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </section>

      <footer className="seasons-footer">
        <strong>
          MELLNET
        </strong>

        <span>
          DIGITAL MEME ARCHIVE
        </span>

        <span>
          2026
        </span>
      </footer>
    </main>
  );
}

export default Seasons;
