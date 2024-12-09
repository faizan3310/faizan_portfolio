import React from 'react';

export class DemoClassComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Mikkel",
            age: 21,
            loc: "Winden",
            gender: "Male"
        };     
        this.handleUpdateBtnClick = this.handleUpdateBtnClick.bind(this);
    }
    componentWillMount(){
        // gets invoked before mounting
        console.log("component about to get mounted");
    }
    componentDidMount(){
        // gets invoked after the component got mounted
        console.log("component got mounted");
        // this.setState() // used to set the state value of compoennt.
        this.setState({
            name: "Elizabeth",
            gender: "Female",
            dept: "CS"
        })
    }

    handleBtnClick(event) {
        console.log("From handle button click...");
        console.log(event);
    }

    handleUpdateBtnClick() {
        console.log("From update button click...");
        this.setState({
            name: "Arhan",
            age: 23,
            loc: "Hyderabad",
            gender: "Male",
            dept: "Research & Development"
        })
    }
    
    render() {
        return(
            <>
                <h3>Class Based Component getting rendered</h3>
                
                Student Name - {this.state.name} <br></br>
                Student Age - {this.state.age} <br></br>
                Student Gender - {this.state.gender} <br></br>
                Student City - {this.state.loc} <br></br>
                Student Deptartment - {this.state.dept} <br></br>

                <button onClick={this.handleBtnClick} className='btn btn-primary'>Click Here</button>
                <button onClick={this.handleUpdateBtnClick} className='btn btn-secondary'>Update Data</button>
            </>
        )
    }
}

// export default DemoClassComponent;