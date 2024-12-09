function Details (data) {
    // var name = "Raj";
    // var age = 21;
    // var gender = "Male";

    console.log(data)
    return(
        <ul>
            <li>Name : {data.Name}</li>
            <li>Age : {data.Age}</li>
            <li>Gender : {data.Gender}</li>
            <li>Department : {data.Dept}</li>
        </ul>
    )
}

function StudentDetails () {
    var std1 = {name : "Jack", age : 20, gender : "Male", dept : "IT"};
    var std2 = {name : "Maria", age : 19, gender : "Female", dept : "Sales"};
    var std3 = {name : "Jennie", age : 20, gender : "Female", dept : "IT"};
    var std4 = {name : "Karan", age : 22, gender : "Male", dept : "R&D"};
    var std5 = {name : "Saad", age : 21, gender : "Male", dept : "Mgt"};
   
    return(
        <div>
            <Details Name={std1.name} Age={std1.age} Gender={std1.gender} Dept={std1.dept}></Details>

            <Details Name={std2.name} Age={std2.age} Gender={std2.gender} Dept={std2.dept}></Details>

            <Details Name={std3.name} Age={std3.age} Gender={std3.gender} Dept={std3.dept}></Details>

            <Details Name={std4.name} Age={std4.age} Gender={std4.gender} Dept={std4.dept}></Details>

            <Details Name={std5.name} Age={std5.age} Gender={std5.gender} Dept={std5.dept}></Details>
        </div>
    )
}

export default StudentDetails;