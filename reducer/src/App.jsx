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
import { useDispatch } from 'react-redux';

function App() {

  const [state, dispatch] = useReducer();


  //single declaration of all the variables  - 
  //dispatch variable             

  return (
    <> 
    <h1>{count }</h1>

    <button
    onClick={
      () => {
        setCount(count * 9);
        SetShowText(!showText);
      }

    }
    >
      click here
    </button>

    {showText || <p>Checking</p> }


    </>
  )
}

export default App



//using use-reducer when there aremore than one states that are to be altered