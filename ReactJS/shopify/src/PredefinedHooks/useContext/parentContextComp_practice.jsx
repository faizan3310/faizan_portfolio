import { createContext, useContext } from 'react'
import './useContext.css'

var ContextRef = createContext(null);

function Children1() {
    var nameRefValue = useContext(ContextRef);
    return(
        <div className='child1Comp'>
            Child 1 Component <br></br>
            Employee name is {nameRefValue}    
        </div>
    )
}

function Children2() {
    var nameRefValue2 = useContext(ContextRef);
    return(
        <div className='child2Comp'>
            Child 2 Component <br></br>
            Employee Name is {nameRefValue2}
        </div>
    )
}

function Children3() {
    var ageRefValue = useContext(ContextRef);
    return(
        <div className='child3Comp'>
            Child 3 Component <br></br>
            Employee Age is {ageRefValue}
        </div>
    )
}

function Children4() {
    var deptRefValue = useContext(ContextRef);
    return(
        <div className='child4Comp'>
            Child 4 Component <br></br>
            Employee Department is {deptRefValue}
        </div>
    )
}

function ParentComponent() {
    var empName = "Sabeer"
    var empAge = 25
    var empDept = "R&D"
    return(
        <div>
            <div className='parentComp'>
                Parent Component <br></br> 
                Employee name is {empName} , Age is {empAge} and Department is {empDept}   

                <ContextRef.Provider value={empName}>
                    <Children1></Children1>
                    <Children2></Children2>
                </ContextRef.Provider>

                <ContextRef.Provider value={empAge}>
                    <Children3></Children3>
                </ContextRef.Provider>

                <ContextRef.Provider value={empDept}>
                    <Children4></Children4>
                </ContextRef.Provider>
                 
            </div>
        </div>
    )
}

export default ParentComponent;