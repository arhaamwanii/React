import React from 'react'


const ContactList = (props) => {
console.log(props);
//acess the data we gave to it in app.jsx -- then logged that shit
  


  const renderConstactList = props.contacts.map((contact) => {
      return(
        <div className='item '>
          <div className='content'>
            <div className='header'>{contact.name} </div>
            <div>{contact.email }</div>
          </div>
          <i className='trash alternate outline icon' ></i>
        </div> 
      );
  } )

  return (

    <div className='ui celled list '>
      
      {renderConstactList}

    </div>
  )
}


export default ContactList;


//github comment
//git hub change
//bro am not coding
//git shit to do
//1
//2
//3
//4
//5
//6
//7
//8
//0