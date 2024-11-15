let currentQuestion = 0;
const userAnswers = []; // Array per memorizzare le risposte dell'utente

const questions = [
    {
        text: "Nel primo capoverso, nella frase «È questa una distinzione che non piace a tutti gli psicologi», “questa”:",
        options: [
            "A: nessuna delle altre risposte è corretta",
            "B: è un aggettivo dimostrativo",
            "C: si riferisce a “situazione”",
            "D: è un aggettivo qualificativo",
            "E: si riferisce alla sociologia"
        ],
        correct: "B",
        explanation: "La risposta corretta è B. 'Questa' è un aggettivo dimostrativo che si riferisce a una distinzione esplicita."
    },
    {
        text: "All’inizio del secondo capoverso, nella frase «facendo presumere che, vista dall’esterno, la sua condotta subisca la costrizione di una pressione» “costrizione” significa:",
        options: [
            "A: tristezza",
            "B: angheria",
            "C: coartazione",
            "D: infelicità",
            "E: fatica"
        ],
        correct: "C",
        explanation: "La risposta corretta è C. 'Costrizione' in questo contesto indica una pressione esterna, ossia una coartazione."
    },
    {
        text: "Quale delle seguenti affermazioni descrive meglio il concetto di 'interiorizzazione' nella socializzazione?",
        options: [
            "A: Apprendere nozioni scolastiche",
            "B: Acquisire abitudini attraverso la ripetizione",
            "C: Costruire il proprio sé attraverso le percezioni degli altri",
            "D: Seguire un comportamento normativo senza capire il motivo",
            "E: Imitare le persone più anziane"
        ],
        correct: "C",
        explanation: "La risposta corretta è C. 'Interiorizzazione' si riferisce al processo di costruzione del sé attraverso la percezione delle opinioni e dei giudizi degli altri."
    },
    {
        text: "Secondo il brano, quale sarebbe un esempio di 'ordine della cultura' che guida il comportamento umano?",
        options: [
            "A: Mangiare con il coltello e la forchetta",
            "B: Il bisogno di dormire",
            "C: L'istinto di sopravvivenza",
            "D: Bere acqua quando si ha sete",
            "E: Piangere quando si è tristi"
        ],
        correct: "A",
        explanation: "La risposta corretta è A. L'ordine della cultura comprende norme apprese, come mangiare con il coltello e la forchetta, che non sono innate ma acquisite culturalmente."
    }
];

function showQuestion() {
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const explanation = document.getElementById('explanation');

    explanation.style.display = 'none';
    const current = questions[currentQuestion];

    questionText.textContent = current.text;
    optionsContainer.innerHTML = '';

    current.options.forEach((option, index) => {
        const id = `option${index}`;
        optionsContainer.innerHTML += `
            <input type="radio" id="${id}" name="options" value="${option[0]}" ${userAnswers[currentQuestion] === option[0] ? 'checked' : ''}>
            <label for="${id}">${option}</label>
        `;
    });

    if (userAnswers[currentQuestion]) {
        explanation.style.display = 'block';
        explanation.className =
            `explanation ${userAnswers[currentQuestion] === current.correct ? 'correct' : 'incorrect'}`;
        explanation.innerHTML = userAnswers[currentQuestion] === current.correct ?
            `<strong>✔️ Corretto!</strong> ${current.explanation}` :
            `<strong>❌ Errato.</strong> ${current.explanation}`;
    }
}

function checkAnswer() {
    const selected = document.querySelector('input[name="options"]:checked');
    const explanation = document.getElementById('explanation');

    if (!selected) {
        alert('Seleziona una risposta prima di continuare.');
        return;
    }

    userAnswers[currentQuestion] = selected.value;

    const current = questions[currentQuestion];
    explanation.style.display = 'block';
    if (selected.value === current.correct) {
        explanation.className = 'explanation correct';
        explanation.innerHTML = `<strong>✔️ Corretto!</strong> ${current.explanation}`;
    } else {
        explanation.className = 'explanation incorrect';
        explanation.innerHTML = `<strong>❌ Errato.</strong> ${current.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showSummary();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function toggleText() {
    const brano = document.getElementById('brano');
    const toggleButton = document.getElementById('toggle-text-button');

    brano.classList.toggle('hidden');

    if (brano.classList.contains('hidden')) {
        toggleButton.textContent = 'Mostra Testo';
    } else {
        toggleButton.textContent = 'Nascondi Testo';
    }
}

function showSummary() {
    // Nascondi la sezione delle domande e mostra la sezione del resoconto
    document.getElementById('question-section').style.display = 'none';
    const summarySection = document.getElementById('summary-section');
    summarySection.style.display = 'block';

    let correctAnswers = 0;
    let summaryHTML = `
        <div class="summary-header">
            <h2>Resoconto delle Risposte</h2>
            <p>Di seguito trovi il riepilogo delle tue risposte e il punteggio totale.</p>
        </div>
    `;

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] ? userAnswers[index] : 'Nessuna risposta';
        const isCorrect = userAnswer === question.correct;
        if (isCorrect) {
            correctAnswers++;
        }

        summaryHTML += `
            <div class="summary-item">
                <div class="summary-header">
                    <p>Domanda ${index + 1}: ${question.text}</p>
                    <span class="icon ${isCorrect ? 'icon-correct' : 'icon-incorrect'}">
                        ${isCorrect ? '✔️' : '❌'}
                    </span>
                </div>
                <p><strong>Risposta data:</strong> <span class="${isCorrect ? 'correct' : 'incorrect'}">${userAnswer}</span></p>
                <p><strong>Risposta corretta:</strong> ${question.correct}</p>
            </div>
        `;
    });

    summaryHTML += `
        <div class="summary-total">
            <h3 class="summary-total1">Punteggio totale: ${correctAnswers} / ${questions.length}</h3>
            <button class="btn" onclick="restartQuiz()">Ricomincia Quiz</button>
        </div>
    `;

    summarySection.innerHTML = summaryHTML;
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers.length = 0; // Reset delle risposte

    // Nascondi il resoconto e mostra la sezione delle domande
    document.getElementById('summary-section').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';

    // Nascondi eventuali spiegazioni residue
    document.getElementById('explanation').style.display = 'none';

    // Ripristina il testo del pulsante "Mostra Testo" se necessario
    const brano = document.getElementById('brano');
    const toggleButton = document.getElementById('toggle-text-button');
    if (!brano.classList.contains('hidden')) {
        brano.classList.add('hidden');
        toggleButton.textContent = 'Mostra Testo';
    }

    // Riporta la pagina all'inizio
    window.scrollTo(0, 0);

    // Mostra la prima domanda
    showQuestion();
}
