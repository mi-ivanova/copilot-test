function calculator(str) {
    // regex to match the numbers and the operators
    var regex = /(\d+)([+\-*\/])(\d+)/;
    // match the numbers and the operators
    var match = str.match(regex);
    // if there is a match
    if (match) {
        // get the numbers and the operator
        var num1 = parseInt(match[1]);
        var num2 = parseInt(match[3]);

        // use switch to check the operator
        switch (match[2]) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 'Invalid operator';
        }
    }
}

// test Calculator function
console.log(calculator('2+3')); // 5
console.log(calculator('2-3')); // -1
console.log(calculator('2*3')); // 6
console.log(calculator('4/2')); // 2
console.log(calculator('2%3')); // Invalid operator

// create unit tests for the calculator function
describe('calculator', function() {
    it('should add two numbers', function() {
        expect(calculator('2+3')).toBe(5);
    });
    it('should subtract two numbers', function() {
        expect(calculator('2-3')).toBe(-1);
    });
    it('should multiply two numbers', function() {
        expect(calculator('2*3')).toBe(6);
    });
    it('should divide two numbers', function() {
        expect(calculator('4/2')).toBe(2);
    });
    it('should return invalid operator', function() {
        expect(calculator('2%3')).toBe('Invalid operator');
    });
});
