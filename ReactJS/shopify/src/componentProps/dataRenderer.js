function DataRender(props) {
    console.log(props);
    return(
        <div>
            <h3>Conditional Based React Components</h3>
            
            <table className="table table-primary">
                <thead>
                    <tr>
                        {
                            props.fields.map((fieldName) => (
                                <th>{fieldName}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item) => (
                            <tr>
                                <td>{item.No}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.discount}</td>
                                <td>{item.image}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
           
        </div>
    )

}
export default DataRender;

/*  // Hard Coded Data in a Table

        <table className="table table-primary">
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Image</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mobile</td>
                        <td>15000</td>
                        <td>10%</td>
                        <td>abc.png</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Laptop</td>
                        <td>45000</td>
                        <td>15%</td>
                        <td>pqr.png</td>
                    </tr> 
                </tbody>
        </table>


*/