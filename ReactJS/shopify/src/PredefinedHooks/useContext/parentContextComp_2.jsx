import { createContext, useContext } from 'react'
import './useContext.css'

var ContextRef = createContext(null);

function Child1() {
    var stdNameRef = useContext(ContextRef);
    return(
        <div className='child1Comp'>
            <b>Child 1 Component</b> <br></br>
            Student Name is {stdNameRef} <br></br>
        </div>
    )
}

function Child2() {
    var stdDataRef = useContext(ContextRef)
    return(
        <div className='child2Comp'>
            <b>Child 2 Component</b> <br></br>
            Student Name is {stdDataRef.name} <br></br>
            Student Age is {stdDataRef.age} <br></br>
            Student Gender is {stdDataRef.gender} <br></br>
            Student Location is {stdDataRef.location} <br></br>
            Student Course opted is {stdDataRef.course} <br></br> 

        </div>
    )
}

function Child3() {
    var stdAgeRef = useContext(ContextRef);
    return(
        <div className='child3Comp'>
            <b>Child 3 Component</b> <br></br>
            Student Age is {stdAgeRef} <br></br>
        </div>
    )
}

function Child4() {
    var stdLoctRef = useContext(ContextRef);
    return(
        <div className='child4Comp'>
            <b>Child 4 Component</b> <br></br>
            Student Location is {stdLoctRef} <br></br>
        </div>
    )
}

function Parent() {
    var stdData = {
        name: "Jack",
        age: 22,
        gender: "Male",
        location: "Hyderabad",
        course: "ReactJS"
    }
    return(
        <div className='parentComp'>
               <b>Parent Component</b> <br></br>

               Student Name is {stdData.name} <br></br>
               Student Age is {stdData.age} <br></br>
               Student Gender is {stdData.gender} <br></br>
               Student Location is {stdData.location} <br></br>
               Student Course opted is {stdData.course} <br></br> 

                <ContextRef.Provider value={stdData.name}>
                    <Child1></Child1>
                </ContextRef.Provider>

                <ContextRef.Provider value={stdData}>
                    <Child2></Child2>
                </ContextRef.Provider>
               
               <ContextRef.Provider value={stdData.age}>
                    <Child3></Child3>
               </ContextRef.Provider>

               <ContextRef.Provider value={stdData.location}>
                    <Child4></Child4>
               </ContextRef.Provider>


        </div>
    )
}

export default Parent;