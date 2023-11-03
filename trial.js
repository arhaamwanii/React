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

function fst(radius){
    return {

        //ket value pairs - PROPERTIES
        
            pp: radius =  "2442",
        
        //FUNCTION - METHOD(logic)
        
            draw: function(){
                console.log(radius);
            },

            one: function() {console.log(radius)}
        };
        
}

const prduct1 =  fst(144);

prduct1.draw();

console.log(prduct1)


//we created a function/factory and we named it fst -- we put in the a parameter which we are going to use to diffenrntite between the differnt objects this factory is going to return us
//inside there wer put in a property and an method, 
    //in the property we redfined the value of radius, which otheerwise we had defined when calling the function
    //in the function we put a loggig the value of radius on the cosole command
//then we called this ffactory using paramerters and then stored the value in const "product1",
//what it basically did is that created a new object and stored that value in product1 - with the parameter provided while calling the function 
//now we can acess that object using the "prduct1" keyword and can acess its properties and method like this
    //product1.property
    //




//DUPLUCATING OBJECT - can cause errors if the there are a lot of functions inside the obcject  
//so we use FACTORIES AND CONSTRUCTORS TO predeine repaitable stuff



