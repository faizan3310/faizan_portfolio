import { createContext, useContext } from 'react';
import './useContext.css'

var ContextRef = createContext(null);

function Child1() {
    var refValue = useContext(ContextRef);
    return(
        <div className="child1Comp">
            Child 1 Component <br></br>
            User name is - {refValue} 
        </div>
    )
}

function Child2() {
    var refValue2 = useContext(ContextRef);
    return(
        <div className='child2Comp'>
            Child 2 Component <br></br> 
            User name is - {refValue2}
        </div>
    )
}

function Child3() {
    var ageRefValue = useContext(ContextRef)
    return(
        <div className='child3Comp'>
            Child 3 Component <br></br>
            User Age is - {ageRefValue} 

            <ContextRef.Provider value={ageRefValue}>
                <InnerChild></InnerChild>
            </ContextRef.Provider>
            
        </div>
    )
}

function InnerChild() {
    var ageRefVal2 = useContext(ContextRef)
    return(
        <div className='innerChild'>
            Inner child component <br></br>
            User Age is - {ageRefVal2} 

        </div>
    )
}


function ParentComponentPage() {
    var username = "Jack Sparrow";
    var userage = 22;
    return(
        <div>
            Implementing useContext

            <div className="parentComp">
                    
                    Parent Component  <br></br>
                    User name is - {username} and Age is - {userage}

                    <ContextRef.Provider value={username}>
                        <Child1></Child1>
                        <Child2></Child2>
                    </ContextRef.Provider>
                    
                    <ContextRef.Provider value={userage}>
                        <Child3></Child3>
                    </ContextRef.Provider>      
                    
            </div>

        </div>
    )
}
export default ParentComponentPage;