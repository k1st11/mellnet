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
    title: "А шлюха тоже вертолет",
    author: "jaylonebeats",
    file: "/music/jaylonebeats —  А шлюха тоже вертолет.mp3",
  },
  {
    id: 2,
    title: "Я ебу хаммам",
    author: "jaylonebeats",
    file: "/music/jaylonebeats —  Я ебу хаммам.mp3",
  },
  {
    id: 3,
    title: "1 Бурмалбря",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — 1 Бурмалбря.mp3",
  },
  {
    id: 4,
    title: "23 мне уже",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — 23 мне уже.mp3",
  },
  {
    id: 5,
    title: "3 Хаммама",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — 3 Хаммама.mp3",
  },
  {
    id: 6,
    title: "Alors On Drun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Alors On Drun.mp3",
  },
  {
    id: 7,
    title: "And Chai",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — And Chai.mp3",
  },
  {
    id: 8,
    title: "BABA BABA FUNK",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — BABA BABA FUNK.mp3",
  },
  {
    id: 9,
    title: "Baba Chai",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Baba Chai.mp3",
  },
  {
    id: 10,
    title: "Baba Let The Chay Out",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Baba Let The Chay Out.mp3",
  },
  {
    id: 11,
    title: "Billie Drun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Billie Drun.mp3",
  },
  {
    id: 12,
    title: "Blinding Druns",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Blinding Druns.mp3",
  },
  {
    id: 13,
    title: "BurmaLIMBO",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — BurmaLIMBO.mp3",
  },
  {
    id: 14,
    title: "BurmalFaint",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — BurmalFaint.mp3",
  },
  {
    id: 15,
    title: "BurmalKirby",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — BurmalKirby.mp3",
  },
  {
    id: 16,
    title: "BurmalTetris",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — BurmalTetris.mp3",
  },
  {
    id: 17,
    title: "Burmaldancer",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Burmaldancer.mp3",
  },
  {
    id: 18,
    title: "Burmaldolic",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Burmaldolic.mp3",
  },
  {
    id: 19,
    title: "Burmalstalker",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Burmalstalker.mp3",
  },
  {
    id: 20,
    title: "Cute Burmastyle",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Cute Burmastyle.mp3",
  },
  {
    id: 21,
    title: "DRUNTEKK",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — DRUNTEKK.mp3",
  },
  {
    id: 22,
    title: "Die In Chai",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Die In Chai.mp3",
  },
  {
    id: 23,
    title: "Drun Climb Racing",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drun Climb Racing.mp3",
  },
  {
    id: 24,
    title: "Drun Dance",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drun Dance.mp3",
  },
  {
    id: 25,
    title: "Drun Fight 2",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drun Fight 2.mp3",
  },
  {
    id: 26,
    title: "Drun From The Sky",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drun From The Sky.mp3",
  },
  {
    id: 27,
    title: "Drun On A Cross",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drun On A Cross.mp3",
  },
  {
    id: 28,
    title: "Drun Von Anti Piracy",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drun Von Anti Piracy.mp3",
  },
  {
    id: 29,
    title: "Drunale Burmaltail",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drunale Burmaltail.mp3",
  },
  {
    id: 30,
    title: "Drunbath",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drunbath.mp3",
  },
  {
    id: 31,
    title: "Druns Spinning Druns",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Druns Spinning Druns.mp3",
  },
  {
    id: 32,
    title: "Drunshmello",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drunshmello.mp3",
  },
  {
    id: 33,
    title: "Drunwell Cat",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Drunwell Cat.mp3",
  },
  {
    id: 34,
    title: "Du Bist Baba Chai",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Du Bist Baba Chai.mp3",
  },
  {
    id: 35,
    title: "Gangnam Chai",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Gangnam Chai.mp3",
  },
  {
    id: 36,
    title: "Gigadrun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Gigadrun.mp3",
  },
  {
    id: 37,
    title: "Hungry Drun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Hungry Drun.mp3",
  },
  {
    id: 38,
    title: "In The Drun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — In The Drun.mp3",
  },
  {
    id: 39,
    title: "In The Hall Of The Mountain Drun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — In The Hall Of The Mountain Drun.mp3",
  },
  {
    id: 40,
    title: "In Your Chai",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — In Your Chai.mp3",
  },
  {
    id: 41,
    title: "Jetpack Drunride",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Jetpack Drunride.mp3",
  },
  {
    id: 42,
    title: "Lil Uzi Drun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Lil Uzi Drun.mp3",
  },
  {
    id: 43,
    title: "Locked In Drun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Locked In Drun.mp3",
  },
  {
    id: 44,
    title: "The Chay Goes",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — The Chay Goes.mp3",
  },
  {
    id: 45,
    title: "We Not Like Drun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — We Not Like Drun.mp3",
  },
  {
    id: 46,
    title: "What Ive Drun",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — What Ive Drun.mp3",
  },
  {
    id: 47,
    title: "А помнишь щавель",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — А помнишь щавель.mp3",
  },
  {
    id: 48,
    title: "Ананас 3,14",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Ананас 3,14.mp3",
  },
  {
    id: 49,
    title: "Бабадура",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Бабадура.mp3",
  },
  {
    id: 50,
    title: "Баламут и долбаеб",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Баламут и долбаеб.mp3",
  },
  {
    id: 51,
    title: "Бурмалдарики",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Бурмалдарики.mp3",
  },
  {
    id: 52,
    title: "Бурмалдас",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Бурмалдас.mp3",
  },
  {
    id: 53,
    title: "Бурмалдильник",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Бурмалдильник.mp3",
  },
  {
    id: 54,
    title: "Бурмалдиное озеро",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Бурмалдиное озеро.mp3",
  },
  {
    id: 55,
    title: "Бурмалдист",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Бурмалдист.mp3",
  },
  {
    id: 56,
    title: "Возьми бурмалфон",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Возьми бурмалфон.mp3",
  },
  {
    id: 57,
    title: "Вокруг розовая шлюха",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Вокруг розовая шлюха.mp3",
  },
  {
    id: 58,
    title: "Гарри Поттер",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Гарри Поттер.mp3",
  },
  {
    id: 59,
    title: "Год за годом",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Год за годом.mp3",
  },
  {
    id: 60,
    title: "Дед Меллстрой",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Дед Меллстрой.mp3",
  },
  {
    id: 61,
    title: "Дресированный хаммам",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Дресированный хаммам.mp3",
  },
  {
    id: 62,
    title: "Друн Аристократ",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Друн Аристократ.mp3",
  },
  {
    id: 63,
    title: "Друн Боб",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Друн Боб.mp3",
  },
  {
    id: 64,
    title: "Друнячий вальс",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Друнячий вальс.mp3",
  },
  {
    id: 65,
    title: "За окном",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — За окном.mp3",
  },
  {
    id: 66,
    title: "Когда сломался щавель",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Когда сломался щавель.mp3",
  },
  {
    id: 67,
    title: "Круглое говно",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Круглое говно.mp3",
  },
  {
    id: 68,
    title: "Кто мечтает быть хаммамом",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Кто мечтает быть хаммамом.mp3",
  },
  {
    id: 69,
    title: "МеллНет",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — МеллНет.mp3",
  },
  {
    id: 70,
    title: "Меллстрой на Ниве",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Меллстрой на Ниве.mp3",
  },
  {
    id: 71,
    title: "Не ищи хаммам",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Не ищи хаммам.mp3",
  },
  {
    id: 72,
    title: "Подрочил и кончил",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Подрочил и кончил.mp3",
  },
  {
    id: 73,
    title: "Помыться в бане очень хорошо",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Помыться в бане очень хорошо.mp3",
  },
  {
    id: 74,
    title: "Просто шлюшка",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Просто шлюшка.mp3",
  },
  {
    id: 75,
    title: "Саня бурмалди",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Саня бурмалди.mp3",
  },
  {
    id: 76,
    title: "Свинка Меллпа",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Свинка Меллпа.mp3",
  },
  {
    id: 77,
    title: "Сигма щавель",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Сигма щавель.mp3",
  },
  {
    id: 78,
    title: "Спят усталые чекушки",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Спят усталые чекушки.mp3",
  },
  {
    id: 79,
    title: "Твой Малышочек",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Твой Малышочек.mp3",
  },
  {
    id: 80,
    title: "Хаммамский чай",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Хаммамский чай.mp3",
  },
  {
    id: 81,
    title: "Хаммаский чай",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Хаммаский чай.mp3",
  },
  {
    id: 82,
    title: "Цвет настроения красный",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Цвет настроения красный.mp3",
  },
  {
    id: 83,
    title: "Чекушки стаканчик",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Чекушки стаканчик.mp3",
  },
  {
    id: 84,
    title: "Шоколадный Друн",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Шоколадный Друн.mp3",
  },
  {
    id: 85,
    title: "Шоколадный щавель",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Шоколадный щавель.mp3",
  },
  {
    id: 86,
    title: "Это не просто хуй",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Это не просто хуй.mp3",
  },
  {
    id: 87,
    title: "Я дрочу по батареям",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Я дрочу по батареям.mp3",
  },
  {
    id: 88,
    title: "Я собираю чемодан",
    author: "jaylonebeats",
    file: "/music/jaylonebeats — Я собираю чемодан.mp3",
  },

  {
    id: 89,
    title: "Industry Baba",
    author: "zominat42",
    file: "/music/zominat42 — Industry Baba.mp3",
  },
  {
    id: 90,
    title: "Баба моя",
    author: "zominat42",
    file: "/music/zominat42 — Баба моя.mp3",
  },
  {
    id: 91,
    title: "Будто в кофте Dragon Money",
    author: "zominat42",
    file: "/music/zominat42 — Будто в кофте Dragon Money.mp3",
  },
  {
    id: 92,
    title: "Где ж ты Меллстрой",
    author: "zominat42",
    file: "/music/zominat42 — Где ж ты Меллстрой.mp3",
  },
  {
    id: 93,
    title: "Дай один банан",
    author: "zominat42",
    file: "/music/zominat42 — Дай один банан.mp3",
  },
  {
    id: 94,
    title: "Двери гнутся",
    author: "zominat42",
    file: "/music/zominat42 — Двери гнутся.mp3",
  },
  {
    id: 95,
    title: "Знаешь ли ты",
    author: "zominat42",
    file: "/music/zominat42 — Знаешь ли ты.mp3",
  },
  {
    id: 96,
    title: "И снова иду в хаммам",
    author: "zominat42",
    file: "/music/zominat42 — И снова иду в хаммам.mp3",
  },
  {
    id: 97,
    title: "Кто прогрел хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Кто прогрел хаммам.mp3",
  },
  {
    id: 98,
    title: "Мама накорми",
    author: "zominat42",
    file: "/music/zominat42 — Мама накорми.mp3",
  },
  {
    id: 99,
    title: "Попробуй ты купить хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Попробуй ты купить хаммам.mp3",
  },
  {
    id: 100,
    title: "Птенцы кричат",
    author: "zominat42",
    file: "/music/zominat42 — Птенцы кричат.mp3",
  },
  {
    id: 101,
    title: "С вами блогер Меллстрой",
    author: "zominat42",
    file: "/music/zominat42 — С вами блогер Меллстрой.mp3",
  },
  {
    id: 102,
    title: "Сигма Славик",
    author: "zominat42",
    file: "/music/zominat42 — Сигма Славик.mp3",
  },
  {
    id: 103,
    title: "Стоп а где колбаска",
    author: "zominat42",
    file: "/music/zominat42 — Стоп а где колбаска.mp3",
  },
  {
    id: 104,
    title: "Ты идешь в этот хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Ты идешь в этот хаммам.mp3",
  },
  {
    id: 105,
    title: "Ты отвезёшь меня в хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Ты отвезёшь меня в хаммам.mp3",
  },
  {
    id: 106,
    title: "Ты правда думаешь",
    author: "zominat42",
    file: "/music/zominat42 — Ты правда думаешь.mp3",
  },
  {
    id: 107,
    title: "Ты чёто борщишь",
    author: "zominat42",
    file: "/music/zominat42 — Ты чёто борщишь.mp3",
  },
  {
    id: 108,
    title: "Тыща птенцов",
    author: "zominat42",
    file: "/music/zominat42 — Тыща птенцов.mp3",
  },
  {
    id: 109,
    title: "У бабушки болит",
    author: "zominat42",
    file: "/music/zominat42 — У бабушки болит.mp3",
  },
  {
    id: 110,
    title: "Хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Хаммам.mp3",
  },
  {
    id: 111,
    title: "Чечевичный суп",
    author: "zominat42",
    file: "/music/zominat42 — Чечевичный суп.mp3",
  },
  {
    id: 112,
    title: "Я бы мог хаммам купить",
    author: "zominat42",
    file: "/music/zominat42 — Я бы мог хаммам купить.mp3",
  },
  {
    id: 113,
    title: "Я иду по улице",
    author: "zominat42",
    file: "/music/zominat42 — Я иду по улице.mp3",
  },
  {
    id: 114,
    title: "Я схожу в хаммам",
    author: "zominat42",
    file: "/music/zominat42 — Я схожу в хаммам.mp3",
  },
  {
    id: 115,
    title: "Я устала повторять",
    author: "zominat42",
    file: "/music/zominat42 — Я устала повторять.mp3",
  },
  {
    id: 116,
    title: "Я хочу быть как Меллстрой",
    author: "zominat42",
    file: "/music/zominat42 — Я хочу быть как Меллстрой.mp3",
  },
  {
    id: 117,
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