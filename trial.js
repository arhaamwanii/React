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

function factory(radius){
    return {

        //ket value pairs - PROPERTIES
        
            radius: radius,
        
        //FUNCTION - METHOD(logic)
        
            draw: function(){
                console.log(radius);
            }
        };
        
}

const prduct1 = factory(12);



//DUPLUCATING OBJECT - can cause errors if the there are a lot of functions inside the obcject  
//so we use FACTORIES AND CONSTRUCTORS TO predeine repaitable stuff



