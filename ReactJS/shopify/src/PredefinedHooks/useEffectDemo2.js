import { useEffect, useState } from 'react';
import './useEffect.css'
import HomeComp from './useEffectDemo2_Component/homeComponent';
import ContactComp from './useEffectDemo2_Component/contactComponent';
import CareerComp from './useEffectDemo2_Component/careerComponent';
import AddressComp from './useEffectDemo2_Component/addressComponent';
import ClientComp from './useEffectDemo2_Component/clientComponent';

function UseEffectMountandUnmount2() {
    useEffect(() => {
        console.log(("Use Effect from main function getting mounted")); 
    }, []);

    const [currentComp, setCurrentComp] = useState(<HomeComp></HomeComp>);

    var handleHomeEvent = () => {
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
        setCurrentComp(<ClientComp></ClientComp>);
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

export default UseEffectMountandUnmount2;