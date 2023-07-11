// 3 . 

class person{
  constructor(name , gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
}
var a = new person("RAM", "MALE" , "30");
var b = new person("SITHA" , "FEMALE" , "30");

// uber 
class ride{
  constructor(distance,time){
    this.distance = distance;
    this.time = time;

  }
  basefare(){return 60 ; }
  distancefare(){ return this.distance * 10}
  timefare(){ return this.time*1;}
  total(){
    return(this.basefare()+this.distancefare + this.timefare())
  }
}
var ride1 = new ride(10 , 5);
console.log(ride1.total());