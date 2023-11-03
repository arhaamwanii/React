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
            }
        };
        
}

const prduct1 =  fst(144);

prduct1.draw();

console.log(prduct1)


//we created a function/factory and we named it fst 
//inside there wer put in a property and an method, 
    //in the property we redfined the value of radius, which otheerwise




//DUPLUCATING OBJECT - can cause errors if the there are a lot of functions inside the obcject  
//so we use FACTORIES AND CONSTRUCTORS TO predeine repaitable stuff



