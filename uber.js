
//write a class to calculate uber price.


class uberOutStation{
    constructor(name,location,drop,distance){
      this.name=name ;
      this.location=location ;
      this.drop=drop ;
      this.distance=distance ;
      this.price=function(){
          console.log(
         `Cost for 1km: Rs.11, 
          PickUp:${this.location} 
          Drop:${this.drop}  
          Distance: ${this.distance} 
          your price:`,(11*this.distance));
      }
    }
}
const passenger=new uberOutStation("Raju","Chennai","Arcot","114");
passenger.price();