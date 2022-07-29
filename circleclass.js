// circle-class
class circle {
    constructor(radius,colour) {
        this.radius=radius
        this.colour=colour
    }

getRadius()
{
    console.log(`The radius of the circle is: ${this.radius}`);

}
getColour()
{
    console.log(`The colour of the circle is: ${this.colour}`);
}
getArea()
{
    const pi=3.14;
    console.log(`the area of the circle is:${pi*(this.radius*this.radius)}`)
}
getCircumference()
{
    const pi=3.14;
    console.log(`the circumference of the circle:${2*pi*this.radius}`)
}

}
let data = new circle(1,"red");

data.getRadius();
data.getColour();
data.getArea();
data.getCircumference();