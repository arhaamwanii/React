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


// class FootBallPlayer {
//     constructor(playerName ,  age , country){
//         this.name = playerName;
//         this.age = age;
//         this.country  = country;
    
//     }
//      text() {
//         console.log(`my name is ${this.name} am ${this.age} , curretly living in ${this.country}`)
//     }

// }


// let messi = new FootBallPlayer( "messi" , 37 , "usa");
// let ronaldo = new FootBallPlayer("ronaldo" , 38 , "pourtgal")


// messi.text();
// ronaldo.text();


// class TennisPlayer extends FootBallPlayer{
//     constructor( playerName, age , country , hits){
//         super(playerName , age , country);
//         this.playerName  =  playerName;
//         this.age = this.age;
//         this.country = this.country;
//         this.hits = 1213;
//     }
    
//         text2(){
//             console.log(`am a tennis player , my name is ${this.playerName} i live in ${this.country} i had ${this.hits} hits till now `)
//         }
//     }


// let rafael  = new TennisPlayer("rafel" , 32 , "someplace" , 23);

// rafael.text2();


// console.log(messi.age)

// const buyFlightTicket = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout( () =>{
//             const error = false;


//         } , 3000)
//     }
//     )
// }

// let prom = new Promise((resolve, reject) => {
//     let  a = 1 + 1
//     if(a == 2){
//         resolve("shit is Working")
//     }else{
//         reject("shit is not working")
//     }
// })


// prom.then((message) => {
//     console.log("this is in the then, - " + message)
// })
// prom.catch((message) => {
//     console.log("this is in the catch, - " + message)
// })


//then is used when a promise is resolves i.e it is fullfilled  -- is going to run for reslove
//we create a new js object and name it prom 
//we put in two in built functions related to promise  - resolve and reject as the parameters to the inbuilt object promise
//then we define the function  and and the conditions for resolve and reject in there

//once the inital conditions are defined we ca define the outPut
    //.then will be used to deifine the result for --"RESOLVE"
    //.cath is used to define the result for --"REJECT"



// const axiosRequest = require('axios')

// axiosRequest
//     .get("https://www.boreapi.com/api/activity")
//     .then(response => {
//         console.log(`if could ${response.data.activity}`)
//     })
//     .catch(error => {
//         console.error(`ERROR! ${error}`)
//     })


// async function getActivity(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/post')
//     console.log(`working? ${response.json.data}`)
// }

// getActivity();
