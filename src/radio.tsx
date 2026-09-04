import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./radio.css";
import type { Theme } from "./App";

type Track = {
  id: number;
  title: string;
  author: string;
  file: string;
  cover?: string;
};

type RadioProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const tracks: Track[] = [
  {
    id: 1,
    title: "Industry Baba",
    author: "zominat42",
    file: "/music/zominat42 — Industry Baba.mp3",
  },
  {
    id: 2,
    title: "Баба моя",
    author: "zominat42",
    file: "/music/zominat42 — Баба моя.mp3",
  },
  {
    id: 3,
    title: "Будто в кофте Dragon Money",
    author: "zominat42",
    file: "/music/zominat42 — Будто в кофте Dragon Money.mp3",
  },
  {
    id: 4,
    title: "Где ж ты Меллстрой",
    author: "zominat42",
    file: "/music/zominat42 — Где ж ты Меллстрой.mp3",
  },
  {
    id: 5,
    title: "Дай один банан",
    author: "zominat42",
    file: "/music/zominat42 — Дай один банан.mp3",
  },
  {
    id: 6,
    title: "Двери гнутся",
    author: "zominat42",
    file: "/music/zominat42 — Двери гнутся.mp3",
  },
  {
    id: 7,
    title: "Знаешь ли ты",
    author: "zominat42",
    file: "/music/zominat42 — Знаешь ли ты.mp3",
  },
  {
    id: 8,
    title: "И снова иду в хаммам",
    author: "zominat42",
    file: "/music/zominat42 — И снова иду в хаммам.mp3",
  },
  {
    id: 9,
    title: "Кто прогрел хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Кто прогрел хаммам.mp3",
  },
  {
    id: 10,
    title: "Мама накорми",
    author: "zominat42",
    file: "/music/zominat42 — Мама накорми.mp3",
  },
  {
    id: 11,
    title: "Попробуй ты купить хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Попробуй ты купить хаммам.mp3",
  },
  {
    id: 12,
    title: "Птенцы кричат",
    author: "zominat42",
    file: "/music/zominat42 — Птенцы кричат.mp3",
  },
  {
    id: 13,
    title: "С вами блогер Меллстрой",
    author: "zominat42",
    file: "/music/zominat42 — С вами блогер Меллстрой.mp3",
  },
  {
    id: 14,
    title: "Сигма Славик",
    author: "zominat42",
    file: "/music/zominat42 — Сигма Славик.mp3",
  },
  {
    id: 15,
    title: "Стоп а где колбаска",
    author: "zominat42",
    file: "/music/zominat42 — Стоп а где колбаска.mp3",
  },
  {
    id: 16,
    title: "Ты идешь в этот хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Ты идешь в этот хаммам.mp3",
  },
  {
    id: 17,
    title: "Ты отвезёшь меня в хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Ты отвезёшь меня в хаммам.mp3",
  },
  {
    id: 18,
    title: "Ты правда думаешь",
    author: "zominat42",
    file: "/music/zominat42 — Ты правда думаешь.mp3",
  },
  {
    id: 19,
    title: "Ты чёто борщишь",
    author: "zominat42",
    file: "/music/zominat42 — Ты чёто борщишь.mp3",
  },
  {
    id: 20,
    title: "Тыща птенцов",
    author: "zominat42",
    file: "/music/zominat42 — Тыща птенцов.mp3",
  },
  {
    id: 21,
    title: "У бабушки болит",
    author: "zominat42",
    file: "/music/zominat42 — У бабушки болит.mp3",
  },
  {
    id: 22,
    title: "Хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Хаммам.mp3",
  },
  {
    id: 23,
    title: "Чечевичный суп",
    author: "zominat42",
    file: "/music/zominat42 — Чечевичный суп.mp3",
  },
  {
    id: 24,
    title: "Я бы мог хаммам купить",
    author: "zominat42",
    file: "/music/zominat42 — Я бы мог хаммам купить.mp3",
  },
  {
    id: 25,
    title: "Я иду по улице",
    author: "zominat42",
    file: "/music/zominat42 — Я иду по улице.mp3",
  },
  {
    id: 26,
    title: "Я схожу в хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Я схожу в хаммам.mp3",
  },
  {
    id: 27,
    title: "Я устала повторять",
    author: "zominat42",
    file: "/music/zominat42 — Я устала повторять.mp3",
  },
  {
    id: 28,
    title: "Я хочу быть как Меллстрой",
    author: "zominat42",
    file: "/music/zominat42 — Я хочу быть как Меллстрой.mp3",
  },
  {
    id: 29,
    title: "嘭 嘭 嘭",
    author: "zominat42",
    file: "/music/zominat42 — 嘭 嘭 嘭.mp3",
  },
];

const STORAGE_BURMALDA = "mellfm-burmalda";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export default function Radio({
  theme,
  setTheme,
}: RadioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTrackId, setCurrentTrackId] = useState(
    tracks[0]?.id ?? 0,
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLive, setIsLive] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(0.8);

  const [burmalda, setBurmalda] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(
        STORAGE_BURMALDA,
      );

      if (!saved) {
        return [];
      }

      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        return parsed.filter((id) =>
          tracks.some((track) => track.id === id),
        );
      }
    } catch {
      return [];
    }

    return [];
  });

  const currentTrack =
    tracks.find(
      (track) => track.id === currentTrackId,
    ) ?? tracks[0];

  const burmaldaTracks = useMemo(() => {
    return burmalda
      .map((id) =>
        tracks.find((track) => track.id === id),
      )
      .filter(Boolean) as Track[];
  }, [burmalda]);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_BURMALDA,
      JSON.stringify(burmalda),
    );
  }, [burmalda]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();

    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [currentTrackId]);

  const playTrack = async (
    trackId: number,
  ) => {
    if (isLive) {
      setIsLive(false);
    }

    if (trackId !== currentTrackId) {
      setCurrentTrackId(trackId);

      requestAnimationFrame(async () => {
        const audio = audioRef.current;

        if (!audio) {
          return;
        }

        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      });

      return;
    }

    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const togglePlay = async () => {
    if (isLive) {
      setIsLive(false);
      return;
    }

    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    const source =
      burmaldaTracks.length > 0
        ? burmaldaTracks
        : tracks;

    if (source.length === 0) {
      return;
    }

    const currentIndex =
      source.findIndex(
        (track) =>
          track.id === currentTrackId,
      );

    const nextIndex =
      currentIndex === -1
        ? 0
        : (currentIndex + 1) %
          source.length;

    setCurrentTrackId(
      source[nextIndex].id,
    );

    setTimeout(async () => {
      const audio = audioRef.current;

      if (!audio) {
        return;
      }

      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }, 50);
  };

  const previousTrack = () => {
    const source =
      burmaldaTracks.length > 0
        ? burmaldaTracks
        : tracks;

    if (source.length === 0) {
      return;
    }

    const currentIndex =
      source.findIndex(
        (track) =>
          track.id === currentTrackId,
      );

    const previousIndex =
      currentIndex <= 0
        ? source.length - 1
        : currentIndex - 1;

    setCurrentTrackId(
      source[previousIndex].id,
    );

    setTimeout(async () => {
      const audio = audioRef.current;

      if (!audio) {
        return;
      }

      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }, 50);
  };

  const handleSeek = (
    value: number,
  ) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.currentTime = value;
    setCurrentTime(value);
  };

  const toggleBurmalda = (
    trackId: number,
  ) => {
    setBurmalda((previous) => {
      if (previous.includes(trackId)) {
        return previous.filter(
          (id) => id !== trackId,
        );
      }

      return [...previous, trackId];
    });
  };

  const startBurmalda = async () => {
    if (burmalda.length === 0) {
      return;
    }

    const firstTrack =
      burmaldaTracks[0];

    if (!firstTrack) {
      return;
    }

    setIsLive(false);

    setCurrentTrackId(
      firstTrack.id,
    );

    setTimeout(async () => {
      const audio = audioRef.current;

      if (!audio) {
        return;
      }

      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }, 50);
  };

  const startLive = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
    }

    setIsPlaying(false);
    setCurrentTime(0);

    setIsLive(
      (previous) => !previous,
    );
  };

  const goHome = () => {
    window.history.pushState(
      {},
      "",
      "/",
    );

    window.dispatchEvent(
      new PopStateEvent("popstate"),
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextTheme =
    theme === "light"
      ? "dark"
      : theme === "dark"
        ? "retro"
        : "light";

  const themeName =
    theme === "light"
      ? "LIGHT"
      : theme === "dark"
        ? "DARK"
        : "RETRO";

  return (
    <div className="radio-page">
      <audio
        ref={audioRef}
        src={currentTrack?.file}
        preload="metadata"
        onTimeUpdate={(event) => {
          setCurrentTime(
            event.currentTarget.currentTime,
          );
        }}
        onLoadedMetadata={(event) => {
          setDuration(
            event.currentTarget.duration,
          );
        }}
        onEnded={nextTrack}
        onPlay={() =>
          setIsPlaying(true)
        }
        onPause={() =>
          setIsPlaying(false)
        }
      />

      <header className="radio-header">
        <button
          className="radio-back-button"
          type="button"
          onClick={goHome}
        >
          ← MELLNET
        </button>

        <div className="radio-brand">
          <span className="radio-brand-small">
            MELLNET
          </span>

          <strong>
            МеллFM
          </strong>
        </div>

        <button
          className="theme-switcher"
          type="button"
          title={`Переключить тему: ${nextTheme}`}
          onClick={() => {
            setTheme(nextTheme);
          }}
        >
          <span className="theme-switcher-icon">
            {theme === "light"
              ? "☀"
              : theme === "dark"
                ? "◐"
                : "90s"}
          </span>

          <span className="theme-switcher-text">
            {themeName}
          </span>
        </button>
      </header>

      <main className="radio-content">
        <section className="radio-player-card">
          <div className="radio-player-main">
            <div className="vinyl-area">
              <div
                className={`vinyl-player ${
                  isPlaying || isLive
                    ? "is-spinning"
                    : ""
                }`}
              >
                <div className="vinyl-disc">
                  <div className="vinyl-grooves" />
                  <div className="vinyl-hole" />
                </div>
              </div>

              <div className="vinyl-shadow" />
            </div>

            <div className="track-information">
              <div className="track-status">
                {isLive ? (
                  <span className="live-status">
                    <i />
                    LIVE
                  </span>
                ) : (
                  <span>
                    LOCAL PLAYER
                  </span>
                )}
              </div>

              <h1>
                {isLive
                  ? "МеллFM — прямой эфир"
                  : currentTrack?.title ??
                    "МеллFM"}
              </h1>

              <p>
                {isLive
                  ? "Сейчас в эфире — мэшапы МеллFM"
                  : currentTrack
                    ? `мэшап — ${currentTrack.author}`
                    : "Выберите трек"}
              </p>

              {!isLive && (
                <>
                  <div className="progress-area">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      step="0.1"
                      value={currentTime}
                      onChange={(event) =>
                        handleSeek(
                          Number(
                            event.target.value,
                          ),
                        )
                      }
                    />

                    <div className="progress-times">
                      <span>
                        {formatTime(
                          currentTime,
                        )}
                      </span>

                      <span>
                        {formatTime(
                          duration,
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="player-controls">
                    <button
                      className="control-button"
                      type="button"
                      onClick={
                        previousTrack
                      }
                      title="Предыдущий трек"
                    >
                      ‹‹
                    </button>

                    <button
                      className="play-button"
                      type="button"
                      onClick={
                        togglePlay
                      }
                      title={
                        isPlaying
                          ? "Пауза"
                          : "Воспроизвести"
                      }
                    >
                      {isPlaying
                        ? "Ⅱ"
                        : "▶"}
                    </button>

                    <button
                      className="control-button"
                      type="button"
                      onClick={
                        nextTrack
                      }
                      title="Следующий трек"
                    >
                      ››
                    </button>
                  </div>

                  <div className="volume-control">
                    <span>
                      VOL
                    </span>

                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(
                        event,
                      ) =>
                        setVolume(
                          Number(
                            event.target.value,
                          ),
                        )
                      }
                    />

                    <span>
                      {Math.round(
                        volume * 100,
                      )}
                      %
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="radio-live-area">
            <div className="live-copy">
              <span>
                24 / 7
              </span>

              <strong>
                МеллFM LIVE
              </strong>

              <p>
                Мэшапы, мемы и всё,
                что сейчас звучит
                в МеллНете.
              </p>
            </div>

            <button
              className={`live-button ${
                isLive
                  ? "active"
                  : ""
              }`}
              type="button"
              onClick={startLive}
            >
              <span className="live-dot" />

              {isLive
                ? "LIVE ON"
                : "LIVE"}
            </button>
          </div>
        </section>

        <section className="radio-library">
          <div className="section-heading">
            <div>
              <span>
                LIBRARY
              </span>

              <h2>
                Мэшапы
              </h2>
            </div>

            <span className="track-count">
              {tracks.length} треков
            </span>
          </div>

          <div className="track-list">
            {tracks.map(
              (
                track,
                index,
              ) => {
                const isCurrent =
                  track.id ===
                  currentTrackId;

                const isInBurmalda =
                  burmalda.includes(
                    track.id,
                  );

                return (
                  <div
                    className={`track-row ${
                      isCurrent &&
                      !isLive
                        ? "current"
                        : ""
                    }`}
                    key={track.id}
                  >
                    <span className="track-number">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <button
                      className="track-play"
                      type="button"
                      onClick={() =>
                        playTrack(
                          track.id,
                        )
                      }
                    >
                      {isCurrent &&
                      isPlaying
                        ? "Ⅱ"
                        : "▶"}
                    </button>

                    <div className="track-meta">
                      <strong>
                        {
                          track.title
                        }
                      </strong>

                      <span>
                        {
                          track.author
                        }
                      </span>
                    </div>

                    <button
                      className={`burmalda-add ${
                        isInBurmalda
                          ? "added"
                          : ""
                      }`}
                      type="button"
                      onClick={() =>
                        toggleBurmalda(
                          track.id,
                        )
                      }
                      title={
                        isInBurmalda
                          ? "Убрать из Моей Бурмалду"
                          : "Добавить в Мою Бурмалду"
                      }
                    >
                      {isInBurmalda
                        ? "✓"
                        : "+"}
                    </button>
                  </div>
                );
              },
            )}
          </div>
        </section>

        <section className="burmalda-card">
          <div className="burmalda-heading">
            <div>
              <span>
                YOUR PERSONAL RADIO
              </span>

              <h2>
                Моя Бурмалда
              </h2>
            </div>

            <span>
              {burmalda.length} треков
            </span>
          </div>

          <p className="burmalda-description">
            Собери собственную
            волну из любимых
            мэшапов МеллFM.
          </p>

          {burmaldaTracks.length >
          0 ? (
            <div className="burmalda-list">
              {burmaldaTracks.map(
                (
                  track,
                  index,
                ) => (
                  <button
                    className="burmalda-track"
                    type="button"
                    key={track.id}
                    onClick={() =>
                      playTrack(
                        track.id,
                      )
                    }
                  >
                    <span>
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <div>
                      <strong>
                        {
                          track.title
                        }
                      </strong>

                      <small>
                        {
                          track.author
                        }
                      </small>
                    </div>

                    <span>
                      ▶
                    </span>
                  </button>
                ),
              )}
            </div>
          ) : (
            <div className="burmalda-empty">
              <div className="empty-icon">
                +
              </div>

              <div>
                <strong>
                  Бурмалда пока пустая
                </strong>

                <p>
                  Добавляй мэшапы
                  из библиотеки,
                  чтобы собрать
                  свою волну.
                </p>
              </div>
            </div>
          )}

          <button
            className="burmalda-start"
            type="button"
            disabled={
              burmalda.length === 0
            }
            onClick={
              startBurmalda
            }
          >
            ▶ Запустить
            Мою Бурмалду
          </button>
        </section>
      </main>

      <footer className="radio-footer">
        <span>
          MELLNET / MELLFM
        </span>

        <span>
          LOCAL RADIO SYSTEM
        </span>
      </footer>
    </div>
  );
}