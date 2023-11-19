// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count , setCount] = useState(1);
//   const [showText , SetShowText] = useState(false);

//   return (
//     <> 
//     <h1>{count }</h1>

//     <button
//     onClick={
//       () => {
//         setCount(count * 9);
//         SetShowText(!showText);
//       }

//     }
//     >
//       click here
//     </button>

//     {showText || <p>Checking</p> }


//     </>
//   )
// }

// export default App



//BUILDING THE SAME SHIT IT USE-REDUCER

  //use reducer is mainly used when we have more than one state that is to be altered



import { useReducer} from 'react'
import './App.css'

const reducer = (state , action ) =>{

  switch(action.type){
  
    case "INCREMENT":
      return{count: state.count + 1 , showText: state.showText }
  
      case"toggleShowText":
    return {count: state.count , showText : !state.showText}
  
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0 , showText: true });

  

  //single declaration of all the variables  - 
  //dispatch variable             

  //creat a function which chooses what happens when we change the sate

  return (
    <> 
    <h1>{state.count}</h1>

    <button
    onClick={
      () => {
       dispatch({type: "INCREMENT"});
       dispatch({type: "toggleShowText"})
      }

    }
    >
      click here
    </button>

    {state.showText && <p>Checking</p> }


    </>
  )
}

export default App



//using use-reducer when there aremore than one states that are to be altered
//when we are altering a lot of states at once is when this is used other than that it is not commonly used