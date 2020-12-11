import React from 'react'
//Nested elemment from the div

const NestedElements = () => {
    return (
        <div>
            <h1>Nested Elements</h1>
            <p>With Nested Elements with div tag</p>
        </div>
    )
}

const Attributes = () =>{
    return (
        <div>
            <h1>Attributes</h1>
            {/**Inbuild attributes */}
            <p style={{hight:'10px',width:'100px', padding:'5px'}}>Some Attributes</p>
            {/**Costomize attribute */}
            <p data-myattributes="somevalue"></p>
        </div>
    )
}

const Style = () =>{
    var myStyle = {
        fontsize : 100,
        color : '#ff2436'
    }

    return(
        <div>
            <h1 style ={myStyle}>Styling my header</h1>
            <p style= {{myStyle, color : '#FF9814'}}> Styling my paragraph!</p>
        </div>
    )
}

const JSExpression = () =>{
    var a =10
    var b= 100
    var c = a+b
    return (
        <div>
            <h1>JS Expression Header</h1>
             <p>{c}</p>
        </div>
    )
}

export { NestedElements, Attributes, Style,JSExpression}