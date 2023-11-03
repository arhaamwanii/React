// class Animal{
//     constructor(type , legs){
//         this.type  = type;
//         this.legs = legs;
//     }
// }

// function yourName(name){

//     let legs = "anything" ;

//     this.legs = name;
//     console.log(this.legs)
    
//     console.log(legs)
// }

// yourName("Arham Amin Wani");


//  let myDetails = {
//     name: "Arham",
//     residency: "Dalgate",
//     age: "17 years and 3 months",
//     timeIn: 18,
//     laverage: 3,
//     outPut: function(){
//         return this.timeIn * this.laverage;
//     }
//  };


//  let out = myDetails.outPut(45 , 11000);
 
//  console.log(out);


//FACTORY 

// function fst(radius){
//     return {

//         //ket value pairs - PROPERTIES
        
//             pp: radius =  "2442",
        
//         //FUNCTION - METHOD(logic)
        
//             draw: function(){
//                 console.log(radius);
//             },

//             one: function() {console.log(radius)}
//         };
        
// }

// const prduct1 =  fst(144);

// prduct1.draw();

// console.log(prduct1)


// //we created a function/factory and we named it fst -- we put in the a parameter which we are going to use to diffenrntite between the differnt objects this factory is going to return us
//inside there wer put in a property and an method, 
    //in the property we redfined the value of radius, which otheerwise we had defined when calling the function
    //in the function we put a loggig the value of radius on the cosole command
//then we called this ffactory using paramerters and then stored the value in const "product1",
//what it basically did is that created a new object and stored that value in product1 - with the parameter provided while calling the function 
//now we can acess that object using the "prduct1" keyword and can acess its properties and method like this
    //product1.propertyName         
    //product1.methodName()




//DUPLUCATING OBJECT - can cause errors if the there are a lot of functions inside the obcject  
//so we use FACTORIES AND CONSTRUCTORS TO predeine repaitable stuff


//CONSTRUCTOR

// class Animal{
//     constructor(one  , two){
//         this.legs = one;
//         this.arms = two;
//     }
// };

// let human = new Animal("two legs" , "two arms");
// console.log(human)

// console.log(human.legs)
// console.log(human.arms)

// const dog = new Animal("four legs " , "four arms");
// const horse = new Animal("4 legs" , "0 arms")




//OBJECT-FACTORY and CLASSES  basically so the same thing
//first we difined a class named "Animals" - first letter is capial because it is comsidered good practise
//inside  the class we puted in a CONSTRUCTOR whcih was is used to put in parameters inside when we call the function
//inside we can define the code we need to use these parameters for
//'THIS' refers to the name of the animal in this case which we are going to set using the "new" keyword , the name of the variable given there will be the name of "THIS" in that case     "let human = new Animal "
// we put the name of the property or function in that case using "this.name" - name here determines the name of the function or propeerty in that which will be specific to the "this" -- this is the name determined while calling the class
// then we puted this property equal to the parameter we got while calling the class - these paraemters are specific to every object created from the class
// CALLING THE CLASS - 
//whatever we keep the name of the variable while calling the class will be the name of that class(THIS will be specified to it)  
//"NEW" keyword here determines the making of a new object
//then we call the fumction and put in the parameter specific to the name of the variable in that case


class FootBallPlayer {
    constructor(playerName ,  age , country){
        this.name = playerName;
        this.age = age;
        this.country  = country;
    
    }
     text() {
        console.log(`my name is ${this.name} am ${this.age} , curretly living in ${this.country}`)
    }

}


let messi = new FootBallPlayer( "messi" , 37 , "usa");
let ronaldo = new FootBallPlayer("ronaldo" , 38 , "pourtgal")


messi.text();
ronaldo.text();


class TennisPlayer extends FootBallPlayer{
    constructor( hits){
        super(playerName , age , coun );
        this.playerName  =  playerName;
        this.country = this.country;
    }
    
        text2(){
            console.log(`am a tennis player , my name is ${this.playerName} i live in ${this.country} `)
        }
    }


let rafael  = new TennisPlayer("rafel" , 32 , "someplace");



// console.log(messi.age)