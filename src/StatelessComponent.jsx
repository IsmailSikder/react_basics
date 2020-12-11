import React from 'react'
//Functional Component

const FunctionalComponent =()=>{
    return (
        <div>
            <p>This is functional Component</p>
        </div>
    )
}

class ClassComponent extends React.Component{

    render(){
        return(
            <div>
                <h1>Class Based Component</h1>
            </div>
        )
    }
}
export {FunctionalComponent,ClassComponent}