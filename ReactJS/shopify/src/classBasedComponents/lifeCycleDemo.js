import React from 'react'

class ComponentA extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        console.log("From Render of Class A Component...");
        return(
            <div>Component A got loaded</div>
        )
    }
}

class ComponentB extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        console.log("From Render of Class B Component...");
        return(
            <div>Component B got loaded</div>
        )
    }
}


export class ParentClassComp extends React.Component {
    constructor() {
        super();
        this.state = {
            currentView: '',
        };
    }

    showCompA(){
        this.setState({
            currentView: <ComponentA></ComponentA>
        })        
    };

    showCompB(){
        this.setState({
            currentView: <ComponentB></ComponentB>
        })
    }


    render(){
        console.log("From Render of Parent Class Component...");
        return(
            <>
                <div>
                    Implementing Life Cycle of class based Component
                </div>

                <button onClick={this.showCompA} className='btn btn-primary'>Show Comp A</button>
                <button onClick={this.showCompA} className='btn btn-primary'>Show Comp B</button>

                <div style={{border: '2px solid red', margin: '30px', padding: "50px"}}>

                </div>
            </>
        
        )
    }
}