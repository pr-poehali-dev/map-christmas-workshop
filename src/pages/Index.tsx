import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Place {
  id: string;
  name: string;
  emoji: string;
  shortDesc: string;
  description: string;
  color: string;
  // позиция на карте в %
  x: number;
  y: number;
}

const PLACES: Place[] = [
  {
    id: "apple",
    name: 'Мастерская ёлочной игрушки «Рождественское Яблоко»',
    emoji: "🎄",
    shortDesc: "Ёлочные игрушки ручной работы",
    description:
      "Здесь рождаются настоящие чудеса: стеклянные шары, расписные фигурки и бережно сделанные руками мастеров ёлочные украшения. Каждая игрушка — маленькая история о Новом годе и детстве.",
    color: "#8b3a2a",
    x: 60,
    y: 55,
  },
  {
    id: "suitcase",
    name: 'Лавка душевных подарков «Старый Чемодан»',
    emoji: "🧳",
    shortDesc: "Подарки с душой и историей",
    description:
      "Соседняя с мастерской лавка, полная тёплых сюрпризов. Здесь можно найти необычные подарки, сделанные с любовью: открытки, поделки, уютные мелочи для дома и близких.",
    color: "#5a3a1a",
    x: 72,
    y: 55,
  },
  {
    id: "kaleidoscope",
    name: "Мастерская Калейдоскопов",
    emoji: "🔮",
    shortDesc: "Волшебные узоры и оптика",
    description:
      "Слева от Старого Чемодана притаилась удивительная мастерская, где создают настоящие калейдоскопы — от маленьких карманных до больших напольных. Загляни внутрь и увидишь бесконечный танец цвета.",
    color: "#4a6741",
    x: 28,
    y: 55,
  },
  {
    id: "lighthouse",
    name: "Красно-белый маяк",
    emoji: "🏮",
    shortDesc: "Ориентир и смотровая точка",
    description:
      "Красно-белый маяк стоит напротив Мастерской Калейдоскопов и служит главным ориентиром нашего места. Его яркие полосы видны издалека — найдёшь маяк, найдёшь всё остальное!",
    color: "#c8922a",
    x: 18,
    y: 30,
  },
  {
    id: "teahouse",
    name: "Чайный Домик",
    emoji: "🫖",
    shortDesc: "Чай, уют и душевные беседы",
    description:
      "Прямо напротив Рождественского Яблока расположился уютный Чайный Домик. Здесь всегда горячий чай, свежая выпечка и тихая музыка. Самое место, чтобы отдохнуть после прогулки по мастерским.",
    color: "#4a6741",
    x: 60,
    y: 18,
  },
  {
    id: "dairy",
    name: "Сыроварня",
    emoji: "🧀",
    shortDesc: "Свежий сыр и молочные лакомства",
    description:
      "Между Рождественским Яблоком и Чайным Домиком, чуть вглубь, дымит своими трубами уютная Сыроварня. Здесь варят сыры по старинным рецептам и угощают всех желающих прямо у прилавка.",
    color: "#c8922a",
    x: 48,
    y: 35,
  },
];

export default function Index() {
  const [selected, setSelected] = useState<Place | null>(null);

  return (
    <div
      className="min-h-screen w-full font-body"
      style={{ background: "#f5ead6" }}
    >
      {/* Фоновая текстура */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a07840' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-6">
        {/* Заголовок */}
        <header className="text-center mb-8 animate-fade-in">
          <div
            className="inline-block px-8 py-2 mb-3"
            style={{
              background: "#8b3a2a",
              clipPath:
                "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)",
            }}
          >
            <span
              className="font-display text-sm tracking-[0.25em] uppercase"
              style={{ color: "#f5ead6" }}
            >
              Добро пожаловать
            </span>
          </div>
          <h1
            className="font-display text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#2c1a0e" }}
          >
            Карта мастерских
          </h1>
          <p
            className="font-handwritten text-2xl mt-1"
            style={{ color: "#5a3a1a" }}
          >
            Нажми на место, чтобы узнать о нём
          </p>
          <div
            className="w-32 h-0.5 mx-auto mt-3"
            style={{ background: "#c8922a" }}
          />
        </header>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Карта */}
          <div className="flex-1 w-full">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: "3px solid #c8922a",
                background: "#e8d5b0",
                aspectRatio: "4/3",
              }}
            >
              {/* Фоновое изображение карты */}
              <img
                src="https://cdn.poehali.dev/projects/4c41d94e-9f40-4ace-999b-0bc612bbcf76/files/5d72bcee-6e29-4bc8-b37f-5ebd1cb6d164.jpg"
                alt="Карта"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />

              {/* Дорожки SVG */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* apple → suitcase */}
                <line
                  x1="60" y1="55" x2="72" y2="55"
                  stroke="#8b3a2a" strokeWidth="0.6" strokeDasharray="2,1.5" strokeLinecap="round"
                />
                {/* suitcase → kaleidoscope */}
                <line
                  x1="72" y1="55" x2="28" y2="55"
                  stroke="#5a3a1a" strokeWidth="0.6" strokeDasharray="2,1.5" strokeLinecap="round"
                />
                {/* kaleidoscope → lighthouse */}
                <line
                  x1="28" y1="55" x2="18" y2="30"
                  stroke="#4a6741" strokeWidth="0.6" strokeDasharray="2,1.5" strokeLinecap="round"
                />
                {/* apple → teahouse */}
                <line
                  x1="60" y1="55" x2="60" y2="18"
                  stroke="#4a6741" strokeWidth="0.6" strokeDasharray="2,1.5" strokeLinecap="round"
                />
                {/* apple → dairy */}
                <line
                  x1="60" y1="55" x2="48" y2="35"
                  stroke="#c8922a" strokeWidth="0.6" strokeDasharray="2,1.5" strokeLinecap="round"
                />
                {/* dairy → teahouse */}
                <line
                  x1="48" y1="35" x2="60" y2="18"
                  stroke="#c8922a" strokeWidth="0.6" strokeDasharray="2,1.5" strokeLinecap="round"
                />
              </svg>

              {/* Точки мест */}
              {PLACES.map((place) => (
                <button
                  key={place.id}
                  onClick={() => setSelected(selected?.id === place.id ? null : place)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${place.x}%`, top: `${place.y}%` }}
                  title={place.name}
                >
                  {/* Пульсирующий круг */}
                  <span
                    className="absolute inset-0 rounded-full animate-pulse-dot"
                    style={{
                      background: place.color,
                      opacity: 0.25,
                      width: 36,
                      height: 36,
                      left: -6,
                      top: -6,
                    }}
                  />
                  {/* Основной маркер */}
                  <span
                    className="relative flex items-center justify-center w-6 h-6 rounded-full shadow-lg transition-transform duration-200 group-hover:scale-125"
                    style={{
                      background: selected?.id === place.id ? place.color : "#f5ead6",
                      border: `2.5px solid ${place.color}`,
                      fontSize: 14,
                    }}
                  >
                    {place.emoji}
                  </span>
                  {/* Подпись */}
                  <span
                    className="absolute left-1/2 -translate-x-1/2 mt-1 top-full whitespace-nowrap font-handwritten text-sm px-1.5 py-0.5 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow"
                    style={{
                      background: "rgba(245,234,214,0.95)",
                      color: place.color,
                      border: `1px solid ${place.color}`,
                      maxWidth: 140,
                      whiteSpace: "normal",
                      textAlign: "center",
                      lineHeight: "1.2",
                      zIndex: 10,
                    }}
                  >
                    {place.shortDesc}
                  </span>
                </button>
              ))}

              {/* Декоративная рамка углы */}
              <div className="absolute inset-0 pointer-events-none" style={{ border: "1px solid rgba(200,146,42,0.3)", margin: 8, borderRadius: 10 }} />
            </div>

            {/* Легенда */}
            <div
              className="mt-4 flex flex-wrap gap-2 justify-center"
            >
              {PLACES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(selected?.id === p.id ? null : p)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-body transition-all duration-200 hover:scale-105"
                  style={{
                    background: selected?.id === p.id ? p.color : "rgba(245,234,214,0.9)",
                    color: selected?.id === p.id ? "#f5ead6" : p.color,
                    border: `1.5px solid ${p.color}`,
                  }}
                >
                  <span>{p.emoji}</span>
                  <span className="font-handwritten text-base">{p.shortDesc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Панель описания */}
          <div className="lg:w-80 w-full">
            {selected ? (
              <div
                key={selected.id}
                className="animate-scale-in rounded-2xl p-6 shadow-xl"
                style={{
                  background: "#fdf6e8",
                  border: `2px solid ${selected.color}`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{selected.emoji}</span>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: "#e8d5b0", color: "#5a3a1a" }}
                  >
                    <Icon name="X" size={14} />
                  </button>
                </div>
                <h2
                  className="font-display text-xl font-bold leading-tight mb-1"
                  style={{ color: "#2c1a0e" }}
                >
                  {selected.name}
                </h2>
                <div
                  className="w-12 h-0.5 mb-3"
                  style={{ background: selected.color }}
                />
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "#5a3a1a" }}
                >
                  {selected.description}
                </p>
                {/* Декоративный элемент снизу */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-px" style={{ background: "#e8d5b0" }} />
                  <span
                    className="font-handwritten text-xs"
                    style={{ color: selected.color }}
                  >
                    ✦ ✦ ✦
                  </span>
                  <div className="flex-1 h-px" style={{ background: "#e8d5b0" }} />
                </div>
              </div>
            ) : (
              <div
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  border: "2px dashed #c8922a",
                }}
              >
                <div className="text-4xl mb-3">🗺️</div>
                <p
                  className="font-display text-lg italic"
                  style={{ color: "#5a3a1a" }}
                >
                  Выбери место на карте или в списке ниже, чтобы узнать о нём подробнее
                </p>

                {/* Список всех мест */}
                <div className="mt-5 text-left space-y-2">
                  {PLACES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelected(p)}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl transition-all duration-150 hover:scale-[1.02]"
                      style={{
                        background: "rgba(245,234,214,0.7)",
                        border: `1px solid ${p.color}30`,
                      }}
                    >
                      <span className="text-xl">{p.emoji}</span>
                      <div className="text-left">
                        <div
                          className="font-handwritten text-base leading-tight"
                          style={{ color: "#2c1a0e" }}
                        >
                          {p.shortDesc}
                        </div>
                        <div
                          className="font-body text-xs mt-0.5 leading-tight"
                          style={{ color: "#a07840" }}
                        >
                          {p.name.length > 40 ? p.name.slice(0, 40) + "…" : p.name}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Подвал */}
        <footer className="text-center mt-8 pb-4">
          <p
            className="font-handwritten text-lg"
            style={{ color: "#a07840" }}
          >
            ✦ Добро пожаловать в мир мастерства и уюта ✦
          </p>
        </footer>
      </div>
    </div>
  );
}
