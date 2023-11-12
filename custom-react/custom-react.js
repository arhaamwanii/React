//how does the react see the HTML we give to it as it is JS
//tries to make a treee
//tells about the type of the element 
//props - properties of the element
//now we want to add the these react elemts ito the root file actually




//funtion make
//method to render this element into the root

//we are setting attribute on by one - so loop based code 


//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href' , reactElement.props.href);
//     domElement.setAttribute('target' , reactElement.props.target);

//     container.appendChild(domElement)


function customRender(reactElement, container){



    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){

        if (prop === 'children') continue ;
        domElement.setAttribute(prop , reactElement.props[prop])
        }
        container.appendChild(domElement)
    }




const reactElement = {
    type: "a",
    props: {
        href: 'https://arhaam.com',
        target: "_blank"
    },
    children: "click me to visit google"
}

//same thing happens inside the actuall react as well


const mainContainer = document.querySelector('#root')

customRender(reactElement , mainContainer)


