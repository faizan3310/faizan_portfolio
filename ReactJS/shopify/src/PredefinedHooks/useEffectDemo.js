import './useEffect.css'
import { useEffect, useState } from "react";

function HomeComp() {
    useEffect(() => {
        console.log("Home component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Home component got Unmounted");
        }
    }, [])
    return(
        <div>Home component got loaded</div>
    )
}

function ContactComp() {
    useEffect(() => {
        console.log("Contact component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Contact component got Unmounted");
        }
    }, [])
    return(
        <div>Contact component got loaded</div>
    )
}

function CareerComp() {
    useEffect(() => {
        console.log("Career component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Career component got Unmounted");
        }
    }, [])
    return(
        <div>Career component got loaded</div>
    )
}

function AddressComp() {
    useEffect(() => {
        console.log("Address component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Address component got Unmounted");
        }
    }, [])
    return(
        <div>Address component got loaded</div>
    )
}

function ClientComp() {
    useEffect(() => {
        console.log("Client component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Client component got Unmounted");
        }
    }, [])
    return(
        <div>Client component got loaded</div>
    )
}


function UseEffectMountandUnmount() {
    useEffect(()=> {
        console.log("Use Effect from main function getting mounted")
    }, []);

    const [currentComp, setCurrentComp] = useState(<HomeComp></HomeComp>)

    var handleHomeEvent = () =>{
        setCurrentComp(<HomeComp></HomeComp>);
    }

    var handleContactEvent = () => {
        setCurrentComp(<ContactComp></ContactComp>);
    }

    var handleCareerEvent = () => {
        setCurrentComp(<CareerComp></CareerComp>);
    }

    var handleAddressEvent = () => {
        setCurrentComp(<AddressComp></AddressComp>);
    }

    var handleClientEvent = () => {
        setCurrentComp(<ClientComp></ClientComp>)
    }

    return(
        <>
            <div className="tabContainer">
                <div onClick={handleHomeEvent}>Home</div>
                <div onClick={handleContactEvent}>Contact</div>
                <div onClick={handleCareerEvent}>Careers</div>
                <div onClick={handleAddressEvent}>Address</div>
                <div onClick={handleClientEvent}>Clients</div>
            </div>

            <div className='tabContent'>
                {currentComp}
            </div>
        </>
    )
}

export default UseEffectMountandUnmount;