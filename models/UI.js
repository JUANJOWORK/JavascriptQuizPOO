export class UI {
    constructor() { }

    /**
     * 
     * @param {string} text pregunta a renderizar
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text
    }
    /**
     * 
     * @param {string[]} choices 
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]));
            choicesContainer.append(button);

        }
    }
    /**
     * 
     * @param {number} score total score
     */
    showScores(score) {
        const quizEndHTML = `
        <h1>Resultado</h1>
        <h2>Tu puntaje = ${score}</h2>`;

        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;

    }

    showProgress(currentIndex,total){
        const element = document.getElementById('progress');
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }

}