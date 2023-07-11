// get area 
 
class circle{
    constructor(radius , color){
        this.radius=radius;
    }
    getarea(){
        return Math.PI * this.radius * this.radius;
    }
}
var circle1 = new circle("circle" , 1.0);
console.log(circle1.getarea());

// get radius

class circle{
    constructor(radius , color){
        this.radius=radius;
    }
    getRadius(){
        return this.radius;
    }
}
var circle2= new.circle(1.0, "blue");
console.log(circle2.getRadius());


// set radius


class circle{
    constructor(radius , color){
        this.radius=radius;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(newRadius){
        this.radius=newRadius;
    }
}
var circle2= new.circle(1.0, " blue");
console.log(circle2.getRadius());
circle2.setRadius(2.0);
console.log(circle2.getRadius());


// get circumference

class circle{
    constructor(radius , color){
        this.radius=radius;
    }
    getcircumference(){
        return 2*Math.PI * this.radius;
    }
}
var circle2= new.circle(1.0,"blue");
console.log(circle2.getcircunference());