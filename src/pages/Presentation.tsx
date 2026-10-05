import { useState } from 'react';

const sections = [
  {
    id: 'intro',
    emoji: '🎬',
    title: 'Фантастика против Реальности',
    image: 'https://image.qwenlm.ai/generated-images/2b60185e-852e-4831-a239-6a1f8aa2ae87/_result.png',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-200 leading-relaxed">
          Когда мы слышим слово «телепортация», мы представляем себе Гарри Поттера, который трансгрессирует с места на место, 
          или героев «Звёздного пути», которые распадаются на атомы и собираются в другой точке галактики.
        </p>
        <div className="bg-purple-900/40 border border-purple-500/30 rounded-xl p-5">
          <p className="text-purple-200 font-semibold mb-2">❓ Вопрос классу:</p>
          <p className="text-gray-200">Как вы думаете, можем ли мы в реальной жизни телепортировать человека или хотя бы яблоко?</p>
        </div>
        <div className="bg-slate-800/60 border border-cyan-500/30 rounded-xl p-5">
          <p className="text-cyan-200 font-semibold mb-2">🔬 Ответ физики:</p>
          <p className="text-gray-200">
            Нет. Человеческое тело состоит из примерно <span className="text-cyan-400 font-bold">7 × 10²⁷ атомов</span>. 
            Чтобы «просканировать», разобрать и собрать их в другом месте, понадобится больше энергии, 
            чем вырабатывает Солнце за всю свою жизнь, и больше времени, чем существует Вселенная.
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-5">
          <p className="text-green-200 font-semibold mb-2">✨ Но у физиков есть свой «магический трюк»!</p>
          <p className="text-gray-200">
            Мы научились телепортировать не сами предметы, а <span className="text-green-400 font-bold">информацию об их квантовом состоянии</span>. 
            И это не фантастика, а доказанный научный факт!
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'entanglement',
    emoji: '🧩',
    title: 'Главный секрет: Квантовая запутанность',
    image: 'https://image.qwenlm.ai/generated-images/ef1270dc-4f38-4c44-9752-0af763e03279/_result.png',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-200 leading-relaxed">
          Чтобы понять телепортацию, нужно узнать о самом странном явлении во Вселенной — <span className="text-purple-400 font-bold">квантовой запутанности</span>. 
          Альберт Эйнштейн называл это «жутким дальнодействием», потому что оно казалось ему невозможным.
        </p>
        <div className="bg-indigo-900/40 border border-indigo-500/30 rounded-xl p-5">
          <p className="text-indigo-200 font-semibold mb-3">🧤 Аналогия с волшебными перчатками:</p>
          <div className="space-y-3 text-gray-200">
            <p>Представьте, что у вас есть пара перчаток: левая и правая. Вы кладёте их в две одинаковые коробки, не глядя. 
            Одну коробку вы оставляете себе, а вторую отправляете другу на Марс.</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-800/60 rounded-lg p-4 border border-gray-600/30">
                <p className="text-yellow-300 font-semibold mb-2">🌍 В обычной жизни:</p>
                <p>Пока вы не открыли коробку, вы просто не знаете, какая перчатка у вас. Но она уже левая или правая.</p>
              </div>
              <div className="bg-purple-800/40 rounded-lg p-4 border border-purple-500/30">
                <p className="text-purple-300 font-semibold mb-2">⚛️ В квантовом мире:</p>
                <p>Пока коробки закрыты, перчатки находятся в <span className="text-purple-300 font-bold">суперпозиции</span>. 
                Они одновременно и левые, и правые!</p>
              </div>
            </div>
            <p className="mt-3">Но как только вы открываете свою коробку и видите левую перчатку, перчатка на Марсе 
            <span className="text-cyan-400 font-bold"> мгновенно</span> (быстрее скорости света!) становится правой.</p>
          </div>
        </div>
        <div className="bg-slate-800/60 border border-yellow-500/30 rounded-xl p-5">
          <p className="text-yellow-200 font-semibold mb-2">💡 Важно:</p>
          <p className="text-gray-200">
            Частицы (например, фотоны — частички света) могут «запутываться» и становиться такими волшебными перчатками. 
            Что бы ни случилось с одной частицей, вторая мгновенно на это реагирует, даже если они находятся на разных концах Галактики.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'how-it-works',
    emoji: '🛠',
    title: 'Как работает квантовая телепортация?',
    image: 'https://image.qwenlm.ai/generated-images/ef1270dc-4f38-4c44-9752-0af763e03279/_result.png',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-200 leading-relaxed">
          В физике есть два традиционных персонажа для экспериментов: <span className="text-pink-400 font-bold">Алиса</span> (отправитель) и <span className="text-blue-400 font-bold">Боб</span> (получатель).
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-slate-800/40 rounded-xl p-4 border border-slate-600/30">
            <span className="text-2xl">1️⃣</span>
            <div>
              <p className="text-cyan-300 font-semibold">Подготовка</p>
              <p className="text-gray-200">Алиса и Боб создают пару запутанных частиц. Одну (Б) берёт Алиса, вторую (В) увозит Боб.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-800/40 rounded-xl p-4 border border-slate-600/30">
            <span className="text-2xl">2️⃣</span>
            <div>
              <p className="text-cyan-300 font-semibold">Столкновение</p>
              <p className="text-gray-200">Алиса сталкивает свою частицу А (ту, что нужно телепортировать) с запутанной частицей Б.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-800/40 rounded-xl p-4 border border-slate-600/30">
            <span className="text-2xl">3️⃣</span>
            <div>
              <p className="text-cyan-300 font-semibold">Жертва</p>
              <p className="text-gray-200">При измерении исходная частица А разрушается. Её оригинальное состояние стирается. Нельзя сделать идеальную копию!</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-800/40 rounded-xl p-4 border border-slate-600/30">
            <span className="text-2xl">4️⃣</span>
            <div>
              <p className="text-cyan-300 font-semibold">Подсказка</p>
              <p className="text-gray-200">Алиса получает результат измерения и отправляет его Бобу обычным способом (по радио или оптоволокну). Это сообщение летит со скоростью света.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-4 border border-green-500/30">
            <span className="text-2xl">5️⃣</span>
            <div>
              <p className="text-green-300 font-semibold">Магия ✨</p>
              <p className="text-gray-200">Получив сообщение от Алисы, Боб применяет эти данные к своей частице В. И вуаля! Частица Боба В превращается в точную копию частицы А.</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-900/40 border border-amber-500/30 rounded-xl p-5">
          <p className="text-amber-200 font-semibold mb-2">⚡ Важный вывод:</p>
          <p className="text-gray-200">
            Сама материя никуда не перелетает. Частица Боба просто «надевает на себя» свойства частицы Алисы. 
            И, поскольку Алиса должна отправить Бобу обычное сообщение, телепортация не может происходить быстрее скорости света. 
            Эйнштейн может спать спокойно! 😴
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'experiment',
    emoji: '🛰',
    title: 'Реальный эксперимент: Спутник «Мо-цзы»',
    image: 'https://image.qwenlm.ai/generated-images/a4fc9bef-2393-4ccd-ae84-e424231b75e4/_result.png',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-200 leading-relaxed">
          В <span className="text-yellow-400 font-bold">2017 году</span> китайские учёные (совместно с европейскими коллегами) провели эксперимент, который потряс мир. 
          Они использовали научный спутник <span className="text-cyan-400 font-bold">«Мо-цзы» (Micius)</span>.
        </p>
        <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-600/30 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">🎯</span>
            <div>
              <p className="text-cyan-300 font-semibold">Задача:</p>
              <p className="text-gray-200">Телепортировать квантовое состояние фотона с Земли в космос.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">🔬</span>
            <div>
              <p className="text-cyan-300 font-semibold">Действие:</p>
              <p className="text-gray-200">На наземной станции в Тибете (высоко в горах, где воздух чистый) учёные создали запутанную пару фотонов. 
              Один фотон оставили на Земле, а второй с помощью мощного лазера выстрелили на спутник, пролетающий на высоте 500 км.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <p className="text-cyan-300 font-semibold">Эксперимент:</p>
              <p className="text-gray-200">Затем на Земле взяли третий фотон (тот, который нужно было телепортировать), 
              «смешали» его с земным запутанным фотоном и отправили данные на спутник.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">🏆</span>
            <div>
              <p className="text-green-300 font-semibold">Результат:</p>
              <p className="text-gray-200">Фотон на борту спутника в открытом космосе принял точное квантовое состояние того фотона, 
              который остался в лаборатории в Тибете.</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-xl p-5">
          <p className="text-yellow-200 font-semibold mb-2">📏 Масштаб:</p>
          <p className="text-gray-200">
            Учёные успешно телепортировали состояние частицы на расстояние более <span className="text-yellow-400 font-bold text-xl">1400 километров!</span> Это был мировой рекорд, 
            доказавший, что квантовая запутанность не рвётся, даже если между частицами огромная толща атмосферы и космоса.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'applications',
    emoji: '🌍',
    title: 'Зачем нам это нужно? Применение',
    image: 'https://image.qwenlm.ai/generated-images/56c349f0-31b4-4035-a35e-21b3f55fb83e/_result.png',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-200 leading-relaxed">
          Мы не будем телепортировать котов и людей, но эта технология изменит наше будущее:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-blue-500/30 rounded-xl p-5">
            <div className="text-3xl mb-3">🔐</div>
            <p className="text-blue-200 font-semibold text-lg mb-2">Квантовый Интернет</p>
            <p className="text-sm text-blue-300 mb-2">Абсолютная защита</p>
            <p className="text-gray-200">
              Если вы отправите секретный пароль с помощью запутанных частиц, хакер <span className="text-red-400 font-bold">физически не сможет</span> его перехватить. 
              Любая попытка «подсмотреть» за частицами разрушит их запутанность. 
              И отправитель, и получатель мгновенно узнают, что их прослушивают.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-xl p-5">
            <div className="text-3xl mb-3">💻</div>
            <p className="text-purple-200 font-semibold text-lg mb-2">Квантовые компьютеры</p>
            <p className="text-sm text-purple-300 mb-2">Решение невозможных задач</p>
            <p className="text-gray-200">
              Они будут решать задачи, на которые у обычных суперкомпьютеров ушли бы миллионы лет 
              (например, создавать новые лекарства или сверхпрочные материалы). 
              Телепортация нужна, чтобы связывать детали такого компьютера между собой.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'dictionary',
    emoji: '📝',
    title: 'Словарик для запоминания',
    image: '',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          <div className="bg-slate-800/60 rounded-xl p-4 border border-cyan-500/20 flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-cyan-300 font-bold">Фотон</p>
              <p className="text-gray-200">Мельчайшая частица света, не имеющая массы покоя.</p>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4 border border-purple-500/20 flex items-start gap-3">
            <span className="text-2xl">🔗</span>
            <div>
              <p className="text-purple-300 font-bold">Квантовая запутанность</p>
              <p className="text-gray-200">Невидимая связь между двумя частицами, при которой изменение одной мгновенно влияет на другую.</p>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4 border border-pink-500/20 flex items-start gap-3">
            <span className="text-2xl">🎭</span>
            <div>
              <p className="text-pink-300 font-bold">Суперпозиция</p>
              <p className="text-gray-200">Способность квантовой частицы находиться в нескольких состояниях одновременно, пока её не измерили.</p>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4 border border-green-500/20 flex items-start gap-3">
            <span className="text-2xl">📋</span>
            <div>
              <p className="text-green-300 font-bold">Квантовое состояние</p>
              <p className="text-gray-200">«Паспорт» частицы (её спин, поляризация, энергия). Именно его мы и телепортируем.</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 border border-amber-500/30 rounded-xl p-5 mt-6">
          <p className="text-amber-200 font-semibold mb-2">💭 Вопрос для размышления дома:</p>
          <p className="text-gray-200 italic">
            Если мы сможем телепортировать состояние каждого атома вашего тела на Марс, 
            а ваше тело на Земле при этом разрушится... проснётесь ли «вы» на Марсе? 
            Или там будет ваша точная копия, которая лишь думает, что она — это вы?
          </p>
          <p className="text-amber-300 text-sm mt-2">(Этот философский вопрос физики и инженеры обсуждают уже сегодня!)</p>
        </div>
      </div>
    ),
  },
];

export default function Presentation() {
  const [currentSection, setCurrentSection] = useState(0);

  const goTo = (index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const section = sections[currentSection];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Progress bar */}
      <div className="flex gap-2 mb-8">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`flex-1 h-2 rounded-full transition-all duration-300 ${
              i === currentSection
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/30'
                : i < currentSection
                ? 'bg-purple-500/50'
                : 'bg-slate-700'
            }`}
            title={s.title}
          />
        ))}
      </div>

      {/* Section counter */}
      <div className="text-center mb-4">
        <span className="text-sm text-gray-400">
          Раздел {currentSection + 1} из {sections.length}
        </span>
      </div>

      {/* Main content card */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
        {/* Section header */}
        <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-6 border-b border-slate-700/50">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="text-3xl md:text-4xl">{section.emoji}</span>
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              {section.title}
            </span>
          </h2>
        </div>

        {/* Image */}
        {section.image && (
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {section.content}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => goTo(currentSection - 1)}
          disabled={currentSection === 0}
          className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
            currentSection === 0
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50'
          }`}
        >
          ← Назад
        </button>

        {/* Slide indicators */}
        <div className="hidden md:flex gap-2">
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSection ? 'bg-purple-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {currentSection < sections.length - 1 ? (
          <button
            onClick={() => goTo(currentSection + 1)}
            className="px-6 py-3 rounded-xl font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
          >
            Далее →
          </button>
        ) : (
          <a
            href="#/quiz"
            className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-500/30 transition-all flex items-center gap-2"
          >
            📝 Пройти тест →
          </a>
        )}
      </div>
    </div>
  );
}
