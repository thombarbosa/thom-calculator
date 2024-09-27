function createCalculator() {
    return {

        //Attributes
        calculatorDisplay: document.querySelector('.calculator-display'),

        //Methods
        init() {
            this.btnClick();
        },

        btnClick() {
            document.addEventListener('click', function (event) {
                const element = event.target;

                if (element.classList.contains('num-btn')) {
                    this.btnToDisplay(element.innerText);
                }

                if (element.classList.contains('clear-btn')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('del-btn')) {
                    this.delLastBtn();
                }

                if (element.classList.contains('equal-btn')) {
                    this.calculateResult();
                }

            }.bind(this)); //My this is the calculator and not the document
        },

        btnToDisplay(value) {
            this.calculatorDisplay.value += value;
        },

        clearDisplay() {
            this.calculatorDisplay.value = '';
        },

        delLastBtn() {
            this.calculatorDisplay.value = this.calculatorDisplay.value.slice(0, -1);
        },

        calculateResult() {
            let result = this.calculatorDisplay.value;

            try {

                if (!result.trim()) return alert('Empty expression!');

                result = eval(result);

                this.calculatorDisplay.value = String(result);

            } catch (exception) {
                alert('Invalid expression!');
            }
        },
        // Other methods...
    };
}

const calculator = createCalculator();
calculator.init();