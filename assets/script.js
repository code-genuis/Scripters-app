const emojis = [
  "❤️",
  "💡",
  "🚀",
  "✨",
  "🌟",
  "💪",
  "🎯",
  "🎨",
  "📚",
  "🎮",
  "🎵",
  "🎬",
  "🌍",
  "🎪",
  "🎭",
];

function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Check for saved theme preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
});

// Set random emoji
document.getElementById("random-emoji").textContent = getRandomEmoji();

const quizData = {
  general: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Mercury"],
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O",
    },
  ],
  science: [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Fe", "Au", "Cu"],
      answer: "Au",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond",
    },
    {
      question: "What is the speed of light in miles per second?",
      options: ["186,282", "150,000", "200,000", "170,000"],
      answer: "186,282",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Liver", "Skin"],
      answer: "Skin",
    },
    {
      question: "What is the atomic number of carbon?",
      options: ["6", "12", "14", "8"],
      answer: "6",
    },
  ],
  history: [
    {
      question: "In which year did World War II end?",
      options: ["1945", "1939", "1941", "1943"],
      answer: "1945",
    },
    {
      question: "Who was the first President of the United States?",
      options: [
        "Thomas Jefferson",
        "George Washington",
        "Abraham Lincoln",
        "John Adams",
      ],
      answer: "George Washington",
    },
    {
      question: "When was the first moon landing?",
      options: ["1969", "1971", "1967", "1973"],
      answer: "1969",
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
      answer: "Marie Curie",
    },
    {
      question: "In which year did the Berlin Wall fall?",
      options: ["1989", "1991", "1987", "1993"],
      answer: "1989",
    },
  ],
  geography: [
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
      answer: "Antarctic",
    },
    {
      question: "Which country has the largest population?",
      options: ["India", "China", "USA", "Indonesia"],
      answer: "China",
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      answer: "Tokyo",
    },
  ],
  sports: [
    {
      question: "Which country won the first FIFA World Cup?",
      options: ["Brazil", "Uruguay", "Italy", "Argentina"],
      answer: "Uruguay",
    },
    {
      question: "How many players are there in a basketball team on court?",
      options: ["4", "5", "6", "7"],
      answer: "5",
    },
    {
      question: "In which year were the first modern Olympics held?",
      options: ["1896", "1900", "1886", "1912"],
      answer: "1896",
    },
    {
      question: "Who has won the most Grand Slam tennis titles?",
      options: [
        "Roger Federer",
        "Rafael Nadal",
        "Novak Djokovic",
        "Pete Sampras",
      ],
      answer: "Roger Federer",
    },
    {
      question: "Which country has won the most Olympic medals?",
      options: ["USA", "Soviet Union", "China", "Germany"],
      answer: "USA",
    },
  ],
  entertainment: [
    {
      question: "Who played Iron Man in the Marvel Cinematic Universe?",
      options: [
        "Chris Evans",
        "Robert Downey Jr.",
        "Chris Hemsworth",
        "Mark Ruffalo",
      ],
      answer: "Robert Downey Jr.",
    },
    {
      question: "Which band released the album 'Abbey Road'?",
      options: ["The Rolling Stones", "The Beatles", "Queen", "Pink Floyd"],
      answer: "The Beatles",
    },
    {
      question: "Who directed the movie 'Titanic'?",
      options: [
        "Steven Spielberg",
        "James Cameron",
        "Christopher Nolan",
        "Martin Scorsese",
      ],
      answer: "James Cameron",
    },
    {
      question: "Which actor has won the most Academy Awards?",
      options: [
        "Jack Nicholson",
        "Katharine Hepburn",
        "Meryl Streep",
        "Daniel Day-Lewis",
      ],
      answer: "Katharine Hepburn",
    },
    {
      question: "What was the first feature-length animated film by Disney?",
      options: ["Pinocchio", "Snow White", "Bambi", "Dumbo"],
      answer: "Snow White",
    },
  ],
  literature: [
    {
      question: "Who wrote 'Pride and Prejudice'?",
      options: [
        "Jane Austen",
        "Charlotte Brontë",
        "Charles Dickens",
        "Virginia Woolf",
      ],
      answer: "Jane Austen",
    },
    {
      question: "Which novel features the character Atticus Finch?",
      options: [
        "To Kill a Mockingbird",
        "The Great Gatsby",
        "1984",
        "The Catcher in the Rye",
      ],
      answer: "To Kill a Mockingbird",
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      options: [
        "Ernest Hemingway",
        "F. Scott Fitzgerald",
        "John Steinbeck",
        "William Faulkner",
      ],
      answer: "F. Scott Fitzgerald",
    },
    {
      question: "Which Shakespeare play is known as 'The Scottish Play'?",
      options: ["Hamlet", "Macbeth", "Othello", "King Lear"],
      answer: "Macbeth",
    },
    {
      question: "Who wrote 'The Lord of the Rings'?",
      options: [
        "C.S. Lewis",
        "J.R.R. Tolkien",
        "George R.R. Martin",
        "J.K. Rowling",
      ],
      answer: "J.R.R. Tolkien",
    },
  ],
  technology: [
    {
      question: "Who is the co-founder of Microsoft?",
      options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
      answer: "Bill Gates",
    },
    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Computer Processing Unit",
      ],
      answer: "Central Processing Unit",
    },
    {
      question: "Which company developed the first iPhone?",
      options: ["Samsung", "Apple", "Microsoft", "Google"],
      answer: "Apple",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "High Text Machine Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Who created the World Wide Web?",
      options: [
        "Bill Gates",
        "Tim Berners-Lee",
        "Steve Jobs",
        "Mark Zuckerberg",
      ],
      answer: "Tim Berners-Lee",
    },
  ],
};

let currentCategory = "";
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timer;
const timePerQuestion = 15;
let currentQuestions = [];

const categoryScreen = document.getElementById("category-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const timerDisplay = document.getElementById("timer");
const restartBtn = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-bar");

// Add click event listeners to category cards
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    currentCategory = card.dataset.category;
    startQuiz();
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  categoryScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  currentQuestion = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;

  // Shuffle questions for this category
  currentQuestions = shuffleArray([...quizData[currentCategory]]);
  loadQuestion();
}

function loadQuestion() {
  const q = currentQuestions[currentQuestion];
  questionNumber.textContent = `${currentQuestion + 1} of ${
    currentQuestions.length
  }`;
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  nextBtn.classList.add("hidden");

  // Update progress bar
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
  progressBar.style.width = `${progress}%`;

  // Shuffle options for this question
  const shuffledOptions = shuffleArray([...q.options]);
  shuffledOptions.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add(
      "w-full",
      "py-3",
      "rounded-lg",
      "option-btn",
      "text-gray-700",
      "dark:text-gray-200"
    );

    // Add touch feedback
    button.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.98)";
    });

    button.addEventListener("touchend", function () {
      this.style.transform = "scale(1)";
    });

    button.addEventListener("click", () => selectAnswer(option, button));
    optionsContainer.appendChild(button);
  });

  startTimer();
}

function startTimer() {
  let timeLeft = timePerQuestion;
  timerDisplay.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    // Add visual warning when time is running low
    if (timeLeft <= 5) {
      timerDisplay.classList.add("text-error");
      progressBar.classList.add("pulse");
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer(null);
    }
  }, 1000);
}

function selectAnswer(selected, button) {
  clearInterval(timer);
  timerDisplay.classList.remove("text-error");
  progressBar.classList.remove("pulse");

  const q = currentQuestions[currentQuestion];
  const buttons = optionsContainer.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  if (selected === q.answer) {
    correctAnswers++;
    feedback.textContent = "Correct!";
    feedback.classList.add("text-success");
    if (button) button.classList.add("correct");

    // Add animation for correct answer
    if (button) {
      button.style.animation = "pulse 0.5s";
    }
  } else {
    incorrectAnswers++;
    feedback.textContent = `Incorrect! The correct answer is ${q.answer}.`;
    feedback.classList.add("text-error");
    if (button) button.classList.add("incorrect");
    buttons.forEach((btn) => {
      if (btn.textContent === q.answer) btn.classList.add("correct");
    });
  }

  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestion++;
  feedback.classList.remove("text-success", "text-error");
  if (currentQuestion < currentQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function getPerformanceMessage(score) {
  if (score >= 90) return "Outstanding! You're a master of this subject!";
  if (score >= 70) return "Great job! You really know your stuff!";
  if (score >= 50) return "Good effort! Keep learning and improving!";
  return "Keep practicing! You'll get better with time!";
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  const totalQuestions = currentQuestions.length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  document.getElementById("correct-answers").textContent = correctAnswers;
  document.getElementById("incorrect-answers").textContent = incorrectAnswers;
  document.getElementById("score").textContent = score;
  document.getElementById("performance-message").textContent =
    getPerformanceMessage(score);

  // Save quiz result
  saveQuizResult(currentCategory, score);
}

// Quiz history functionality
function saveQuizResult(category, score) {
  const quizHistory = JSON.parse(localStorage.getItem("quizHistory") || "[]");
  const existingQuiz = quizHistory.findIndex(
    (quiz) => quiz.category === category
  );

  if (existingQuiz !== -1) {
    quizHistory[existingQuiz].score = Math.max(
      quizHistory[existingQuiz].score,
      score
    );
    quizHistory[existingQuiz].lastAttempt = new Date().toISOString();
  } else {
    quizHistory.push({
      category,
      score,
      lastAttempt: new Date().toISOString(),
    });
  }

  localStorage.setItem("quizHistory", JSON.stringify(quizHistory));
  updateQuizHistory();
}

function updateQuizHistory() {
  const quizHistory = JSON.parse(localStorage.getItem("quizHistory") || "[]");
  const historyContainer = document.getElementById("quiz-history");
  historyContainer.innerHTML = "";

  quizHistory
    .sort((a, b) => new Date(b.lastAttempt) - new Date(a.lastAttempt))
    .forEach((quiz) => {
      const historyItem = document.createElement("div");
      historyItem.className = "history-item p-3 rounded-lg";
      historyItem.innerHTML = `
            <div class="flex justify-between items-center">
              <span class="font-medium">${quiz.category}</span>
              <span class="text-sm ${
                quiz.score >= 70 ? "text-success" : "text-accent"
              }">${quiz.score}%</span>
            </div>
            <div class="text-xs text-secondary mt-1">
              ${new Date(quiz.lastAttempt).toLocaleDateString()}
            </div>
          `;
      historyContainer.appendChild(historyItem);
    });
}

// Sidebar toggle functionality
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  categoryScreen.classList.remove("hidden");
});

// Initialize quiz history on page load
updateQuizHistory();

// Add touch event handling for mobile
document.addEventListener("DOMContentLoaded", function () {
  // Add touch swipe for sidebar on mobile
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    false
  );

  document.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    const sidebar = document.querySelector(".sidebar");
    const swipeDistance = touchEndX - touchStartX;

    // If swipe is significant and sidebar is not open
    if (swipeDistance > 100 && !sidebar.classList.contains("open")) {
      sidebar.classList.add("open");
    }
    // If swipe is significant and sidebar is open
    else if (swipeDistance < -100 && sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    }
  }

  // Add pulse animation for timer warning
  const style = document.createElement("style");
  style.textContent = `
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          .pulse {
            animation: pulse 1s infinite;
          }
        `;
  document.head.appendChild(style);
});
