import './gridAndCard.css'
function DataRenderComponent(props) {
    console.log(props);
    
    if(props.renderType == 'grid'){
        return(
            <div>
                <table className='table table-bordered tableComponent' > 
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
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.discount}</td>
                                    <td>
                                        <img src={item.imageUrl}/>
                                    </td>
                                    <td>{item.rating}</td>
                                </tr>
                            ))
                        }
                    </tbody>    
                </table>
            </div>
        )
    }else if(props.renderType == 'cards'){
        return(
            <div className='cardBlockContainer'>
                {
                    props.data.map((item) => (
                        <ul className='cardBlock'>
                            <li>Product: {item.name}</li>
                            <li>Price: {item.price}</li>
                            <li>Discount: {item.discount}</li>
                            <li>
                                <img src={item.imageUrl} />
                            </li>
                            <li>Rating: {item.rating}</li>
                        </ul>
                    ))
                }

            </div>
        )
    }
    
}

export default DataRenderComponent;