class Polygon {
    constructor(parameterInArray){
        this.parameter = parameterInArray;
    }

    get countSides(){
        return this.parameter.length;
    }

    get perimeter(){
        return this.parameter.reduce((acc, current) => acc += current)
    }
}

class Triangle extends Polygon {
    get isValid(){
        const sidesSorted = this.parameter.sort((a,b) => a - b); 
        
        return (sidesSorted[0] + sidesSorted[1] > sidesSorted[2] && this.countSides === 3);
    }
}

class Square extends Polygon {
    get isValid(){
        return (this.countSides === 4 && this.perimeter / this.parameter[0] === 4)
    }

    get area(){
        return Math.pow(this.parameter[0], 2)
    }
}