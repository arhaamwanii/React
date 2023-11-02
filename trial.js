class Animal{
    constructor(type , legs){
        this.type  = type;
        this.legs = legs;
    }
}

function yourName(name){

    let legs = "anything" ;

    this.legs = name;
    console.log(this.legs)
    
    console.log(legs)
}

yourName("Arham Amin Wani");
