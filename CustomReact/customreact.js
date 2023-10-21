function customRender (reactElemet,container){
    const domElement = document.createElement(reactElemet.type)
    domElement.innerHTML = reactElemet.children
    // domElement.setAttribute('href',reactElemet.props.href)
    // domElement.setAttribute('target',reactElemet.props.target)


    //whhat if there is large number of props, then use a loop

    for(const prop in reactElemet.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElemet.props[prop])
    }
    container.appendChild(domElement)
}
 

  

const reactElemet= {
    type: 'a' ,
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click here to visit google"
}

const container = document.querySelector("#root");
customRender(reactElemet, container)