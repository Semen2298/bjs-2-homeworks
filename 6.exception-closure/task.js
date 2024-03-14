function parseCount(parse) {
    let parseResult = Number.parseFloat(parse);
    if (Number.isNaN(parseResult)) {
        throw new Error("Невалидное значение");
    }
    return parseResult;
}

function validateCount(parse) {
    try {
        return parseCount(parse);;
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c){
        if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        };

        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area(){
        const semiPerimeter = this.perimeter / 2;
        const areaValue = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
        return Number(areaValue.toFixed(3));
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        const errorObj = {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        };
        return errorObj;
    }
}