//how does the react see the HTML we give to it as it is JS
//tries to make a treee
//tells about the type of the element 
//props - properties of the element
//now we want to add the these react elemts ito the root file actually


//funtion make
//method to render this element into the root

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href' , reactElement.props.href);
    domElement.setAttribute('target' , reactElement.props.target);

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


const mainContainer = document.querySelector('#root')

customRender(reactElement , mainContainer)


