import React from "react";
import axios from "axios";
export class DemoClassFeatures extends React.Component {
    constructor(){
        super();
        this.state = {
            ISROCentreData : [] 
        }
    }

    componentDidMount(){
        console.log(this.props);
        this.loadISROData();
    }

    loadISROData() {
        axios.get("https://isro.vercel.app/api/centres").then((response) => {
            console.log(response);
            this.setState({
                ISROCentreData: response.data.centres, 
           })
        });
    }
    render(){
        return(
            <div>
                <h3 style={{backgroundColor: this.props.bgcolor, color: this.props.clr}}>From Properties class</h3>

                {this.props.msg}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ISROCentreData.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.Place}</td>
                                    <td>{item.State}</td>
                                </tr>
                            ))
                        }
                            
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}