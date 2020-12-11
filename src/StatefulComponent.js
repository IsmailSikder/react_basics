//Stateful Component

import React from 'react'

class StatefulExample extends React.Component{

    constructor(){

        super();
        this.state={
            data: 
            [
                {
                    "id":'1',
                    "name":'foo',
                    "age":'21'

                },
                {
                    "id":'2',
                    "name":'bar',
                    "age":'23'

                },
                {
                    "id":'3',
                    "name":'bazz',
                    "age":'25'

                }


            ]
        }


    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                        {
                            this.state.data.map((person,i)=>
                                <TableRow key = {i} datasd = {person} />
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

class TableRow extends React.Component{

    render()
    {
        return(
            <tr>
                <td>{this.props.datasd.id} </td>
                <td>{this.props.datasd.name}</td>
                <td>{this.props.datasd.age}</td>
            </tr>

        )
    }
}

export {StatefulExample}