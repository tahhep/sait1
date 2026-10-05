import { useState, useEffect, useCallback } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Что именно телепортируется при квантовой телепортации?',
    options: [
      'Сами атомы вещества',
      'Информация о квантовом состоянии частицы',
      'Электрический заряд',
      'Молекулы ДНК',
    ],
    correct: 1,
    explanation: 'При квантовой телепортации передаётся не материя, а информация о квантовом состоянии частицы. Сама материя никуда не перемещается.',
  },
  {
    id: 2,
    question: 'Как Эйнштейн называл квантовую запутанность?',
    options: [
      'Великим открытием',
      'Жутким дальнодействием',
      'Квантовым парадоксом',
      'Волшебной связью',
    ],
    correct: 1,
    explanation: 'Эйнштейн называл квантовую запутанность «жутким дальнодействием» (spooky action at a distance), потому что она казалась ему невозможной.',
  },
  {
    id: 3,
    question: 'Из скольких атомов примерно состоит человеческое тело?',
    options: [
      '7 × 10²⁰',
      '7 × 10²⁷',
      '7 × 10¹⁵',
      '7 × 10³⁰',
    ],
    correct: 1,
    explanation: 'Человеческое тело состоит из примерно 7 × 10²⁷ (7 октиллионов) атомов. Это невероятно большое число!',
  },
  {
    id: 4,
    question: 'Что такое суперпозиция в квантовой физике?',
    options: [
      'Способность частицы двигаться быстрее света',
      'Способность частицы находиться в нескольких состояниях одновременно до измерения',
      'Способность частицы исчезать и появляться',
      'Способность частицы менять свой заряд',
    ],
    correct: 1,
    explanation: 'Суперпозиция — это способность квантовой частицы находиться в нескольких состояниях одновременно, пока её не измерили.',
  },
  {
    id: 5,
    question: 'Как называется спутник, с помощью которого в 2017 году была телепортирована частица на 1400 км?',
    options: [
      'Спутник-1',
      'Хаббл',
      'Мо-цзы (Micius)',
      'Тяньгун',
    ],
    correct: 2,
    explanation: 'В 2017 году китайские учёные использовали спутник «Мо-цзы» (Micius) для телепортации квантового состояния на расстояние более 1400 км.',
  },
  {
    id: 6,
    question: 'Что происходит с исходной частицей при квантовой телепортации?',
    options: [
      'Она удваивается',
      'Она остаётся неизменной',
      'Она разрушается (её состояние стирается)',
      'Она перемещается к получателю',
    ],
    correct: 2,
    explanation: 'При квантовой телепортации исходная частица разрушается — её квантовое состояние стирается. Нельзя сделать идеальную копию (принцип неопределённости).',
  },
  {
    id: 7,
    question: 'Может ли квантовая телепортация происходить быстрее скорости света?',
    options: [
      'Да, запутанность работает мгновенно',
      'Нет, потому что нужно отправить обычное сообщение получателю',
      'Да, но только на короткие расстояния',
      'Это пока не доказано',
    ],
    correct: 1,
    explanation: 'Хотя запутанность проявляется мгновенно, для завершения телепортации Алиса должна отправить Бобу обычное сообщение (со скоростью света), поэтому телепортация не может быть быстрее света.',
  },
  {
    id: 8,
    question: 'Что такое фотон?',
    options: [
      'Частица с большой массой',
      'Мельчайшая частица света, не имеющая массы покоя',
      'Элемент атомного ядра',
      'Вид электрического заряда',
    ],
    correct: 1,
    explanation: 'Фотон — это мельчайшая частица света, не имеющая массы покоя. Фотоны могут запутываться и участвовать в квантовой телепортации.',
  },
  {
    id: 9,
    question: 'Какое главное применение квантовой телепортации в области безопасности?',
    options: [
      'Создание невидимых самолётов',
      'Абсолютно защищённая передача информации (квантовый интернет)',
      'Телепортация военных грузов',
      'Создание лазерного оружия',
    ],
    correct: 1,
    explanation: 'Главное применение — квантовый интернет с абсолютной защитой. Любая попытка перехватить данные разрушит запутанность, и стороны мгновенно узнают о прослушке.',
  },
  {
    id: 10,
    question: 'На какой высоте пролетал спутник «Мо-цзы» во время эксперимента?',
    options: [
      '100 км',
      '500 км',
      '2000 км',
      '35 000 км',
    ],
    correct: 1,
    explanation: 'Спутник «Мо-цзы» пролетал на высоте 500 км. Учёные выстрелили запутанный фотон с наземной станции в Тибете прямо на спутник с помощью мощного лазера.',
  },
];

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(600); // 10 минут в секундах
  const [finished, setFinished] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const finishQuiz = useCallback(() => {
    setFinished(true);
    setShowResults(true);
  }, []);

  useEffect(() => {
    if (!started || finished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, finished, finishQuiz]);

  const handleAnswer = (optionIndex: number) => {
    if (finished) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => {
    finishQuiz();
  };

  const getScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) score++;
    });
    return score;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getGrade = (score: number) => {
    if (score >= 9) return { text: 'Отлично! 🏆', color: 'text-green-400', bg: 'bg-green-900/40' };
    if (score >= 7) return { text: 'Хорошо! 👍', color: 'text-blue-400', bg: 'bg-blue-900/40' };
    if (score >= 5) return { text: 'Удовлетворительно 📚', color: 'text-yellow-400', bg: 'bg-yellow-900/40' };
    return { text: 'Нужно повторить материал 📖', color: 'text-red-400', bg: 'bg-red-900/40' };
  };

  const restartQuiz = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setTimeLeft(600);
    setFinished(false);
    setShowResults(false);
  };

  // Start screen
  if (!started) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center shadow-2xl">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Тест: Квантовая телепортация
          </h1>
          <div className="space-y-3 text-gray-300 mb-8">
            <p className="text-lg">📋 Количество вопросов: <span className="text-white font-bold">10</span></p>
            <p className="text-lg">⏱️ Время на выполнение: <span className="text-white font-bold">10 минут</span></p>
            <p className="text-lg">✅ Результат: <span className="text-white font-bold">сразу после завершения</span></p>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 mb-8 text-left">
            <p className="text-sm text-gray-400 mb-2">Инструкция:</p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Выберите один правильный ответ из четырёх вариантов</li>
              <li>• Можно переключаться между вопросами</li>
              <li>• Таймер начнёт отсчёт при нажатии «Начать»</li>
              <li>• По истечении времени тест завершится автоматически</li>
            </ul>
          </div>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            🚀 Начать тест
          </button>
        </div>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const score = getScore();
    const grade = getGrade(score);

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Score summary */}
        <div className={`rounded-2xl border p-6 mb-8 text-center ${grade.bg} border-slate-700/50`}>
          <div className="text-5xl mb-4">
            {score >= 9 ? '🏆' : score >= 7 ? '👍' : score >= 5 ? '📚' : '📖'}
          </div>
          <h2 className="text-2xl font-bold mb-2">Результат теста</h2>
          <p className={`text-4xl font-bold mb-2 ${grade.color}`}>{score} / {questions.length}</p>
          <p className={`text-xl ${grade.color}`}>{grade.text}</p>
          <p className="text-gray-400 mt-2">
            Время: {formatTime(600 - timeLeft)} из 10:00
          </p>
        </div>

        {/* Detailed results */}
        <h3 className="text-xl font-bold mb-4 text-purple-300">Разбор ответов:</h3>
        <div className="space-y-4">
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correct;
            return (
              <div
                key={q.id}
                className={`rounded-xl border p-5 ${
                  isCorrect
                    ? 'bg-green-900/20 border-green-500/30'
                    : 'bg-red-900/20 border-red-500/30'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl">{isCorrect ? '✅' : '❌'}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">
                      Вопрос {index + 1}: {q.question}
                    </p>
                    {userAnswer !== null && !isCorrect && (
                      <p className="text-red-300 text-sm">
                        Ваш ответ: {q.options[userAnswer]}
                      </p>
                    )}
                    <p className="text-green-300 text-sm">
                      Правильный ответ: {q.options[q.correct]}
                    </p>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 mt-2">
                  <p className="text-gray-300 text-sm">
                    <span className="text-cyan-400 font-semibold">💡 Пояснение:</span> {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={restartQuiz}
            className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg shadow-purple-500/30 transition-all transform hover:scale-105"
          >
            🔄 Пройти тест заново
          </button>
        </div>
      </div>
    );
  }

  // Quiz in progress
  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Timer and progress */}
      <div className="flex items-center justify-between mb-6">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-lg font-bold ${
          timeLeft <= 60 ? 'bg-red-900/50 text-red-400 animate-pulse' : 
          timeLeft <= 180 ? 'bg-yellow-900/50 text-yellow-400' : 
          'bg-slate-800/50 text-cyan-400'
        }`}>
          ⏱️ {formatTime(timeLeft)}
        </div>
        <div className="text-gray-400">
          Вопрос {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-700 rounded-full h-2 mb-8">
        <div
          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 shadow-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                answers[currentQuestion] === index
                  ? 'bg-purple-900/50 border-purple-500 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-slate-700/30 border-slate-600/30 text-gray-200 hover:bg-slate-700/50 hover:border-slate-500/50'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  answers[currentQuestion] === index
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-600 text-gray-300'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className={`px-5 py-3 rounded-xl font-semibold transition-all ${
            currentQuestion === 0
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/30'
          }`}
        >
          ← Пред.
        </button>

        {/* Question dots */}
        <div className="hidden md:flex gap-1.5">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQuestion(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentQuestion
                  ? 'bg-purple-400 scale-125'
                  : answers[i] !== null
                  ? 'bg-green-500/70'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-5 py-3 rounded-xl font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 transition-all"
          >
            След. →
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-500/30 transition-all"
          >
            ✅ Завершить
          </button>
        )}
      </div>

      {/* Question overview */}
      <div className="mt-8 bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
        <p className="text-sm text-gray-400 mb-3">Обзор вопросов:</p>
        <div className="flex flex-wrap gap-2">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQuestion(i)}
              className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                i === currentQuestion
                  ? 'bg-purple-600 text-white ring-2 ring-purple-400'
                  : answers[i] !== null
                  ? 'bg-green-700/50 text-green-300 border border-green-500/30'
                  : 'bg-slate-700/50 text-gray-400 border border-slate-600/30'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
