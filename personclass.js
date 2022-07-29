//class-person
class person
{
    constructor(name,age,gender,city,state,number){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.city=city;
        this.state=state;
        this.number=number;
}
getName()
{
    console.log(`Name: ${this.name}`);

}
getAge()
{
    console.log(`Age: ${this.age}`);

}
getGender()
{
    console.log(`Gender: ${this.gender}`);

}
getCity()
{
    console.log(`City: ${this.city}`);

}
getState()
{
    console.log(`STATE: ${this.state}`);

}
getPhoneNumber()
{
    console.log(`Phone Number: ${this.number}`);

}

}
let data=new person("Rama",29,"Female","chennai","Tamil Nadu","7200*****72");

data.getName();
data.getAge();
data.getGender();
data.getState();
data.getPhoneNumber();