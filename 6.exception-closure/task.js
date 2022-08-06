// Задача 1.
function parseCount (value) {
   let result = parseInt(value);
   if (isNaN(result)) {
      let  err = new Error ("Невалидное значение");
      throw err;
   }
   return result;
}
function validateCount(value) {
    try {
        let excepion = parseCount(value);
        return excepion;
    } catch(err) {
        return err;
    }
}
//Задача 2.

class Triangle {
	constructor(a, b, c,){
	 this.a = a;
	 this.b = b;
	 this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }	
	}
	  getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = 0.5 * this.getPerimeter();
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +s.toFixed(3);
    }
}
function getTriangle(a, b, c,){
	
	try {
		return new Triangle(a, b, c);
	} catch {
		return {
			getArea() {
				return `Ошибка! Треугольник не существует`;
			},
			getPerimeter() {
				return `Ошибка! Треугольник не существует`;
			}
		}
	}
}