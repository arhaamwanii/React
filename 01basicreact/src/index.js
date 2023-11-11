import React from 'react';

//core foundation library

import ReactDOM from 'react-dom/client';

//it is the implimentation of react on web 
//just like react native is the implimentation of the react on thr mobile


//DOM - TREE STRUCTURE , here we dont use the main dom i.e DOM of the website we make a Virtual DOM
//it dosent actually make a completly new it just compares what is the main dom and manuplates it accodingly


import App from './App';


//createroot is a method  in the ReactDom
//where => "document.getElementById('root')" this specifies the location

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//we just rendered a fucntion whcih itself is rendering the HTML
//react strict mode is not strictly to be used but it has some usecases during the devlopment
