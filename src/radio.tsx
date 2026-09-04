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

const STORAGE_LIKED = "mellfm-liked";
const STORAGE_PLAYED = "mellfm-played";
const STORAGE_PLAY_COUNTS = "mellfm-playcounts";
const STORAGE_SHUFFLE = "mellfm-shuffle";

function pickRandom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export default function Radio({ theme, setTheme }: RadioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTrackId, setCurrentTrackId] = useState(tracks[0]?.id ?? 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLive, setIsLive] = useState(false);
  // Режимы: 'playlist' (лайкнутые), 'burmalda' (все треки с умным выбором), 'live'
  const [mode, setMode] = useState<"playlist" | "burmalda" | "live">("playlist");
  const [played, setPlayed] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_PLAYED) || "[]"); } catch { return []; }
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  // Лайкнутые треки (плейлист)
  const [liked, setLiked] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LIKED);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed.filter((id) => tracks.some((t) => t.id === id));
      }
    } catch {}
    return [];
  });

  // Счётчики прослушиваний
  const [playCounts, setPlayCounts] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PLAY_COUNTS);
      if (!saved) return {};
      const parsed = JSON.parse(saved);
      if (typeof parsed === "object" && parsed !== null) return parsed;
    } catch {}
    return {};
  });

  const [shuffleEnabled, setShuffleEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SHUFFLE);
      if (saved !== null) return JSON.parse(saved);
    } catch {}
    return true;
  });

  const currentTrack = tracks.find((t) => t.id === currentTrackId) ?? tracks[0];
  const likedTracks = useMemo(() => {
    return liked.map((id) => tracks.find((t) => t.id === id)).filter(Boolean) as Track[];
  }, [liked]);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_LIKED, JSON.stringify(liked));
  }, [liked]);
  useEffect(() => {
    localStorage.setItem(STORAGE_PLAYED, JSON.stringify(played));
  }, [played]);
  useEffect(() => {
    localStorage.setItem(STORAGE_PLAY_COUNTS, JSON.stringify(playCounts));
  }, [playCounts]);
  useEffect(() => {
    localStorage.setItem(STORAGE_SHUFFLE, JSON.stringify(shuffleEnabled));
  }, [shuffleEnabled]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [currentTrackId]);

  // ---- Вспомогательная функция выбора следующего трека (общая) ----
  const getNextTrack = (source: Track[], excludeLastN: number = 10): Track | null => {
    if (source.length === 0) return null;

    const lastN = played.slice(-excludeLastN);
    let exclude = new Set(lastN);
    if (exclude.size >= source.length) {
      exclude = new Set([currentTrackId]);
    }

    const candidates = source.filter((t) => !exclude.has(t.id));
    if (candidates.length === 0) {
      const fallback = source.filter((t) => t.id !== currentTrackId);
      if (fallback.length === 0) return source[0];
      return pickRandom(fallback);
    }

    // Взвешенный выбор: weight = 1 / (playCount + 1)
    const weights = candidates.map((t) => 1 / ((playCounts[t.id] || 0) + 1));
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalWeight;
    for (let i = 0; i < candidates.length; i++) {
      rand -= weights[i];
      if (rand <= 0) return candidates[i];
    }
    return candidates[candidates.length - 1];
  };

  // ---- Управление воспроизведением ----
  const playTrack = async (trackId: number) => {
    if (isLive) {
      setIsLive(false);
      setMode("playlist");
    }
    // При ручном выборе трека переключаемся в плейлист (чтобы показать, что мы играем конкретный трек)
    setMode("playlist");

    if (trackId !== currentTrackId) {
      setCurrentTrackId(trackId);
      requestAnimationFrame(async () => {
        const audio = audioRef.current;
        if (!audio) return;
        try { await audio.play(); setIsPlaying(true); } catch { setIsPlaying(false); }
      });
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;
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
      setMode("playlist");
      const audio = audioRef.current;
      if (audio) { audio.pause(); setIsPlaying(false); setCurrentTime(0); }
      return;
    }
    const audio = audioRef.current;
    if (!audio) return;
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
    let source: Track[];
    if (mode === "playlist") {
      source = likedTracks;
    } else if (mode === "burmalda") {
      source = tracks;
    } else {
      return;
    }
    if (source.length === 0) return;

    const next = shuffleEnabled
      ? getNextTrack(source)
      : (() => {
          const currentIndex = source.findIndex((t) => t.id === currentTrackId);
          const nextIndex = (currentIndex + 1) % source.length;
          return source[nextIndex];
        })();

    if (!next) return;
    setPlayed((items) => [...items.filter((id) => id !== next.id), next.id].slice(-30));
    setCurrentTrackId(next.id);
    setTimeout(async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try { await audio.play(); setIsPlaying(true); } catch { setIsPlaying(false); }
    }, 50);
  };

  const previousTrack = () => {
    if (shuffleEnabled) {
      nextTrack();
      return;
    }
    let source: Track[];
    if (mode === "playlist") {
      source = likedTracks;
    } else if (mode === "burmalda") {
      source = tracks;
    } else {
      return;
    }
    if (source.length === 0) return;
    const currentIndex = source.findIndex((t) => t.id === currentTrackId);
    const prevIndex = currentIndex <= 0 ? source.length - 1 : currentIndex - 1;
    setCurrentTrackId(source[prevIndex].id);
    setTimeout(async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try { await audio.play(); setIsPlaying(true); } catch { setIsPlaying(false); }
    }, 50);
  };

  const handleSeek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  // ---- Лайки ----
  const toggleLike = (trackId: number) => {
    setLiked((prev) => {
      if (prev.includes(trackId)) return prev.filter((id) => id !== trackId);
      return [...prev, trackId];
    });
  };

  const toggleLikeCurrent = () => {
    if (currentTrack) toggleLike(currentTrack.id);
  };

  // ---- Переключение режимов ----
  const setModeHandler = (newMode: "playlist" | "burmalda" | "live") => {
    if (newMode === "live") {
      setIsLive(true);
      setMode("live");
      const audio = audioRef.current;
      if (audio) { audio.pause(); setIsPlaying(false); setCurrentTime(0); }
      return;
    }
    if (isLive) {
      setIsLive(false);
    }
    setMode(newMode);
    const source = newMode === "playlist" ? likedTracks : tracks;
    if (source.length === 0) return;
    const first = shuffleEnabled ? getNextTrack(source) : source[0];
    if (!first) return;
    setCurrentTrackId(first.id);
    setPlayed((items) => [...items.filter((id) => id !== first.id), first.id].slice(-30));
    setTimeout(async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try { await audio.play(); setIsPlaying(true); } catch { setIsPlaying(false); }
    }, 50);
  };

  // ---- UI ----
  const goHome = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "retro" : "light";
  const themeName = theme === "light" ? "LIGHT" : theme === "dark" ? "DARK" : "RETRO";

  const isLiked = currentTrack ? liked.includes(currentTrack.id) : false;

  return (
    <div className="radio-page">
      <audio
        ref={audioRef}
        src={currentTrack?.file}
        preload="metadata"
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => {
          if (currentTrack) {
            setPlayCounts((prev) => ({
              ...prev,
              [currentTrack.id]: (prev[currentTrack.id] || 0) + 1,
            }));
          }
          nextTrack();
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <header className="radio-header">
        <button className="radio-back-button" type="button" onClick={goHome}>
          ← MELLNET
        </button>
        <div className="radio-brand">
          <span className="radio-brand-small">MELLNET</span>
          <strong>МеллFM</strong>
        </div>
        <button
          className="theme-switcher"
          type="button"
          title={`Переключить тему: ${nextTheme}`}
          onClick={() => setTheme(nextTheme)}
        >
          <span className="theme-switcher-icon">
            {theme === "light" ? "☀" : theme === "dark" ? "◐" : "90s"}
          </span>
          <span className="theme-switcher-text">{themeName}</span>
        </button>
      </header>

      <main className="radio-content">
        <section className="radio-player-card">
          <div className="radio-player-main">
            <div className="vinyl-area">
              <div
                className={`vinyl-player ${isPlaying || isLive ? "is-spinning" : ""}`}
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
                  <span className="live-status"><i />LIVE</span>
                ) : mode === "burmalda" ? (
                  <span style={{ color: "var(--radio-accent-2)" }}>МОЯ БУРМАЛДА</span>
                ) : (
                  <span>ПЛЕЙЛИСТ</span>
                )}
              </div>
              <h1>
                {isLive
                  ? "МеллFM — прямой эфир"
                  : currentTrack?.title ?? "МеллFM"}
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
                      onChange={(e) => handleSeek(Number(e.target.value))}
                    />
                    <div className="progress-times">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  <div className="player-controls">
                    <button className="control-button" type="button" onClick={previousTrack} title="Предыдущий трек">
                      ‹‹
                    </button>
                    <button className="play-button" type="button" onClick={togglePlay} title={isPlaying ? "Пауза" : "Воспроизвести"}>
                      {isPlaying ? "Ⅱ" : "▶"}
                    </button>
                    <button className="control-button" type="button" onClick={nextTrack} title="Следующий трек">
                      ››
                    </button>
                    <button
                      className={`control-button like-button ${isLiked ? "liked" : ""}`}
                      type="button"
                      onClick={toggleLikeCurrent}
                      title={isLiked ? "Убрать из Плейлиста" : "Добавить в Плейлист"}
                      style={{ fontSize: "18px" }}
                    >
                      {isLiked ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="volume-control">
                    <span>VOL</span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                    />
                    <span>{Math.round(volume * 100)}%</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="radio-live-area">
            <div className="live-copy">
              <span>24 / 7</span>
              <strong>МеллFM LIVE</strong>
              <p>Мэшапы, мемы и всё, что сейчас звучит в МеллНете.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                className={`live-button ${mode === "playlist" && !isLive ? "active" : ""}`}
                type="button"
                onClick={() => setModeHandler("playlist")}
              >
                <span>▶</span>
                Плейлист
              </button>
              <button
                className={`live-button ${mode === "burmalda" && !isLive ? "active" : ""}`}
                type="button"
                onClick={() => setModeHandler("burmalda")}
              >
                <span style={{ marginRight: "6px" }}>🎵</span>
                Моя Бурмалда
              </button>
              <button
                className={`live-button ${isLive ? "active" : ""}`}
                type="button"
                onClick={() => setModeHandler("live")}
              >
                <span className="live-dot" />
                {isLive ? "LIVE ON" : "Эфир"}
              </button>
            </div>
          </div>
        </section>

        {/* Блок с лайкнутыми треками (Плейлист) */}
        <section className="playlist-card">
          <div className="playlist-heading">
            <div>
              <span>YOUR PLAYLIST</span>
              <h2>Плейлист</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span>{liked.length} треков</span>
              <button
                className="shuffle-toggle"
                type="button"
                onClick={() => setShuffleEnabled((prev) => !prev)}
                title={shuffleEnabled ? "Перемешивание включено" : "Перемешивание выключено"}
                style={{
                  background: "transparent",
                  border: "1px solid var(--radio-border)",
                  borderRadius: "999px",
                  padding: "4px 12px",
                  cursor: "pointer",
                  color: shuffleEnabled ? "var(--radio-accent-2)" : "var(--radio-muted)",
                  fontSize: "12px",
                }}
              >
                {shuffleEnabled ? "🔀 ON" : "🔀 OFF"}
              </button>
            </div>
          </div>

          {likedTracks.length > 0 ? (
            <div className="playlist-list">
              {likedTracks.map((track, index) => (
                <button
                  className="playlist-track"
                  type="button"
                  key={track.id}
                  onClick={() => playTrack(track.id)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{track.title}</strong>
                    <small>{track.author}</small>
                  </div>
                  <span>▶</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="playlist-empty">
              <div className="empty-icon">♡</div>
              <div>
                <strong>Плейлист пуст</strong>
                <p>Лайкайте треки, чтобы добавить их сюда.</p>
              </div>
            </div>
          )}

          <button
            className="playlist-start"
            type="button"
            disabled={liked.length === 0}
            onClick={() => setModeHandler("playlist")}
          >
            ▶ Запустить Плейлист
          </button>
        </section>

        {/* Библиотека всех треков (компактный список) */}
        <section className="radio-library">
          <div className="library-heading">
            <span>ВСЕ ТРЕКИ</span>
            <span className="track-count">{tracks.length} мэшапов</span>
          </div>
          <div className="track-list">
            {tracks.map((track, index) => {
              const isCurrent = track.id === currentTrackId;
              const isLikedTrack = liked.includes(track.id);
              return (
                <div
                  className={`track-row ${isCurrent && !isLive ? "current" : ""}`}
                  key={track.id}
                >
                  <span className="track-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <button
                    className="track-play"
                    type="button"
                    onClick={() => playTrack(track.id)}
                  >
                    {isCurrent && isPlaying ? "Ⅱ" : "▶"}
                  </button>
                  <div className="track-meta">
                    <strong>{track.title}</strong>
                    <span>{track.author}</span>
                  </div>
                  <button
                    className={`track-like ${isLikedTrack ? "liked" : ""}`}
                    type="button"
                    onClick={() => toggleLike(track.id)}
                    title={isLikedTrack ? "Убрать из Плейлиста" : "Добавить в Плейлист"}
                  >
                    {isLikedTrack ? "♥" : "♡"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="radio-footer">
        <span>MELLNET / MELLFM</span>
        <span>LOCAL RADIO SYSTEM</span>
      </footer>
    </div>
  );
}