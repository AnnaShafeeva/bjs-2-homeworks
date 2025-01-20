function parseCount(value) {
    let numberValue = Number.parseFloat(value);
    if (isNaN(numberValue)) {
        throw new Error("Невалидное значение")
    }
    return numberValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (exception) {
        return exception;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a,
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let halfP = 0.5 * this.perimeter;
        return Number((Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (exception) {
        let noTriangle = {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
        return noTriangle;
    }
}