import './navBar.css'
function CustomNavBar (props) {
    console.log(props);
    return(
        <div>
            <nav className="customNavBar" style={{background: props.themeColor}}>

                <div>
                    <span>{props.navTitle}</span>
                </div>

                {/* <div className='menuContainer'>
                    <div>Home</div>
                    <div>Contact us</div>
                    <div>Our Address</div>
                    <div>Our History</div>
                </div> */}

                <div className='menuContainer'>
                    {
                        props.menuItems.map((item) => (
                            <div>{item}</div>
                        ))
                    }
                </div>
                
                <div>
                    <input type='text' placeholder={`Search in ${props.navTitle}`}></input>
                    <button className='btn btn-primary'>Search</button>
                </div>
            </nav>
        </div>
    )
}
export default CustomNavBar;