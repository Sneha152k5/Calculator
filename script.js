
       let display = document.getElementById('display');
        let expression = '';

        function calculate(value) {
            expression += value;
            display.value = expression;
        }

        function calculateResult() {
            try {
                let result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch (error) {
                display.value = 'Error';
                expression = '';
            }
        }

        function clearDisplay() {
            display.value = '';
            expression = '';
        }

        function backspace() {
            expression = expression.slice(0, -1);
            display.value = expression;
        }