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

    get Perimeter() {
        let p = this.a + this.b + this.c;
        return p;
    }

    get Area() {
        let halfP = 0.5 * this.Perimeter;
        let s = Number((Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c))).toFixed(3));
        return s;
    }

}

// function getTriangle(a, b, c) {
//     try {
//         return new Triangle(a, b, c);
//     }
//     catch (exception) {
// не понимаю как вернуть  п2:
// В случае перехвата исключения возвращайте объект с двумя геттерами area и perimeter, которые возвращают строку: «Ошибка! Треугольник не существует».
//         let noTriangle = {};
//         noTriangle.Perimeter ??? "Ошибка! Треугольник не существует";
//         noTriangle.Area ??? "Ошибка! Треугольник не существует";
//         return noTriangle;
//     }
// }