export class Question {

    /**
     * 
     * @param {string} texto este es el texto de la pregunta
     * @param {string[]} opcion opciones de la pregunta
     * @param {string} respuesta respuesta de la pregunta
     */

    constructor(texto, opcion, respuesta) {
        this.text = texto;
        this.choices = opcion;
        this.answer = respuesta;

    }

    /**
     * 
     * @param {string} choice agun texto para adivinar
     * @returns {boolean} return true si la respuesta es correcta
     */

    correctAnswer(choice) {
        return choice === this.answer;
    }
}

