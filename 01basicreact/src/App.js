
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);

  container.appendChild(domElement);
}

const reactElement = {
  type: "a", // Corrected type to "a" for anchor element
  props: {
      href: 'https://arhaam.com',
      target: "_blank"
  },
  children: "click me to visit google"
};

const mainContainer = document.querySelector('#root');

// Function call
customRender(reactElement, mainContainer);

