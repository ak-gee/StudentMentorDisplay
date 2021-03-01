import React,{useState} from 'react';

const Form = () =>{

const [name,setName] =  useState('');
const [grade,setGrade] = useState('');
const [mentor,setMent] = useState('');

const [mname,setMname] =  useState('');
const [mid,setMid] = useState('');

const [midStudents,setMidstudents] = useState('');

const [rd,setRd] = useState('');
const [rdment,setRdment] = useState('');
const [rdstument,setRdstument] = useState('');
const [rdstudents,setRdstudents] = useState([]);
const [addStudents,setAddstudents] =useState([]);

const [sid_ment,setSidment] = useState('');


const [id,setId] = useState('');

const updateName = (e) =>{
    setName(e.target.value);
}
const updateStudents = (e) => {
    setAddstudents(e.target.value)//.concat(e.value));
    console.log(addStudents,stu)
}

const updateGrade = (e) => {
    setGrade(e.target.value);
}
const addMname = (e) =>{
    setMname(e.target.value);
}
const updateMent = (e) =>{
    setMent(e.target.value);
}

const updateMid = (e) => {
    setMid(e.target.value);
}
const updateId = (e) => {
    setId(e.target.value);
}

const updateSidment = (e) => {
    setSidment(e.target.value);
}

const updateMidstudents = (e) => {
    setMidstudents(e.target.value);
    
}

const addSdata = async (e) => {
    e.preventDefault();
    // await fetch('http://localhost:5000/student',{
        await fetch('https://studentmentora.herokuapp.com/student',{
        
        method : 'POST',
        headers : {
            'Content-Type' : 'Application/json',
        },
        body: JSON.stringify({name,grade,id}),
        

    });
    console.log('Student Added');
}

const assignStudents = async (e) => {
    e.preventDefault();
    let data = {
        "name":mname,
       "students":addStudents,
    }
    console.log(data);
    // await fetch(`http://localhost:5000/mentor/${id}`,{
        // await fetch(`http://localhost:5000/mentor/${midStudents}`,{
        await fetch(`https://studentmentora.herokuapp.com/${midStudents}`,{
        
        method : 'PUT',
        headers : {
            'Content-Type' : 'Application/json',
        },
        body: JSON.stringify(data),//{name,id,mentor}),
        

    });
    console.log('Mentor Added');
}
const updateMentor = async (e) => {
    e.preventDefault();
    let data = {
        "name":name,
        "class":grade,
        "mentor":mentor,
    }
    console.log(data);
    // await fetch(`http://localhost:5000/student/${sid_ment}`,{
        await fetch(`https://studentmentora.herokuapp.com/${sid_ment}`,{
        
        method : 'PUT',
        headers : {
            'Content-Type' : 'Application/json',
        },
        body: JSON.stringify(data),//{name,id,mentor}),
        

    });
    console.log('Mentor Added');
}
const addMdata = async (e) => {
    e.preventDefault();
    // await fetch('http://localhost:5000/mentor',{
        
        await fetch('https://studentmentora.herokuapp.com/mentor',{
        method : 'POST',
        headers : {
            'Content-Type' : 'Application/json',
        },
        body: JSON.stringify({"name":mname}),
        

    });
    console.log('Mentor Added  '+ mname);
}
const readMentors = async (e) =>{
    e.preventDefault();
    // let response = await fetch('http://localhost:5000/mentors',{
        let response = await fetch('https://studentmentora.herokuapp.com/mentors',{
        
        method : 'GET',
        headers : {
            'Content-Type' : 'Application/json',
        },
        // body: JSON.stringify({mname,mid},
    })     
    .then( (data) => {
    // console.log( data.json())
    return (data.json())
})
    .then(json => {
    //   console.log(json)
      setRdment(json)
      console.log(rdment)

    });
    console.log('Read Mentors Data');

}

// }
 const  readStudents = async (e) =>{
    e.preventDefault();
    // let response = await fetch('http://localhost:5000/students',{
        let response = await fetch('https://studentmentora.herokuapp.com/students',{
        
        method : 'GET',
        headers : {
            'Content-Type' : 'Application/json',
        },
        // body: JSON.stringify({mname,mid},
    })     
    .then( (data) => {
    // console.log( data.json())
    return (data.json())
})
    .then(json => {
      console.log(json)
      setRd(json)
      console.log(rd)

    });
    console.log('Read Data');

}

const readStudentsOfMentors = async (e) => {
    e.preventDefault();
    // let response = await fetch(`http://localhost:5000/liststudents/${rdstument}`,{
        let response = await fetch('https://studentmentora.herokuapp.com/liststudents/${rdstument}',{
        
        method : 'GET',
        headers : {
            'Content-Type' : 'Application/json',
        },
 
    })     
    .then( (data) => {
    // console.log( data.json())
    return (data.json())
})
    .then(json => {
      console.log(json)
      
      setRdstudents(json)
      console.log(rdstudents)

    });
    console.log('Read Data');

}

var stu;
return(
    <div>
    {/* <form onSubmit = {(e) => addSdata(e)}> */}
        <div className="left_div" style ={{float:'left'}}>
       
            <div className = 'form-group'>
                <label htmlFor = 'name'>Student Name</label>
                <input type = 'text'
                className = 'form-group'
                value = {name}
                id = 'name'
                onChange ={(e) => updateName(e)}/>
            </div>

            <div className = 'form-group'>
                <label htmlFor = 'class'>Student class</label>
                <input type = 'text'
                className = 'form-group'
                value = {grade}
                class = 'grade'
                onChange ={(e) => updateGrade(e)}/>
            </div>
            
            <button type = 'submit' onClick = {(e) => addSdata(e)} className = 'btn btn-primary btn_style mt-5 mb-5'> Submit</button>

            <div className = 'form-group mt-50'>
            <label htmlFor = 'ment'>Assign Mentor</label>
                <input type = 'text'
                className = 'form-group'
                value = {mentor}
                id = 'ment'
                onChange ={(e) => updateMent(e)}
                />
            </div>
            <div className = 'form-group mt-50'>
            <label htmlFor = 'sid_ment'>Enter Student Id after reading data</label>
            <input type = 'text'
                className = 'form-group'
                placeHolder  = "Enter Student ID after reading data"
                value = {sid_ment}
                id = 'sid_ment'
                onChange ={(e) => updateSidment(e)}
                />
            </div>

            <button type = 'upd' className = 'btn btn-primary btn_style mt-15 mb-5' 
            onClick = {(e) => updateMentor(e)}  
            > Update Mentor</button>
       
        </div>
        {/* </form> */}
        {/* <form onSubmit = {(e) => addMdata(e)}> */}
        <div className="right_div" style={{float:'right'}}>

        
            <div className = 'form-group'>
                <label htmlFor = 'mname'>Mentor Name</label>
                <input type = 'text'
                className = 'form-group'
                value = {mname}
                id = 'mname'
                onChange ={(e) => addMname(e)}/>
            </div>
            <button type = 'submit' className = 'btn btn-primary btn_style mt-5 mb-5' onClick = {(e) => addMdata(e)}  >Add Mentor</button>
    
            <div className = 'form-group'>
                <label htmlFor = 'sn'>Student Names</label>
                <input type = 'text'
                className = 'form-group'
                value = {stu}
                id = 'sn'
                onChange ={(e) => updateStudents(e)}
               
                />
            </div>
            <div className = 'form-group mt-50'>
                <label htmlFor = 'sid_ment'>Enter Mentor Id after reading data</label>
                <input type = 'text'
                    className = 'form-group'
                    placeHolder  = "Enter Mentor ID after reading data"
                    value = {midStudents}
                    id = 'mid_add_students'
                    onChange ={(e) => updateMidstudents(e)}
                    />              
            </div>

            <button type = 'submit' className = 'btn btn-primary btn_style mt-5 mb-5' onClick = {(e) => assignStudents(e)}  > Assign Students</button>
        </div>

        {/* </form> */}
            <div className = 'form-group'>
                <button type = 'submit' className = 'txt btn btn-primary btn_style mt-5 mb-5' onClick = {(e) => readStudents(e)}  > Read Students Data</button>
                <label htmlFor = 'rd'>Read</label>
                <input type = 'text'
                className = 'txt'
                value = {JSON.stringify(rd)}
                id = 'rd'
                // onChange ={(e) => updateMid(e)}
                />      
            </div>

            <div className = 'form-group'>
                <button type = 'submit' className = 'txt btn btn-primary btn_style mt-5 mb-5' onClick = {(e) => readMentors(e)}  > Read Mentors Data</button>
                <label htmlFor = 'rdment'>Read Mentors</label>
                <input type = 'text'
                className = 'txt'
                value = {JSON.stringify(rdment)}
                id = 'rdment'
                // onChange ={(e) => updateMid(e)}
                />       

            </div>

            <div className = 'form-group'>
            <button type = 'submit' className = 'txt btn btn-primary btn_style mt-5 mb-5' onClick = {(e) => readStudentsOfMentors(e)} > Enter Mentor Id Below and Click Here to see the list of students</button>
                
            <input type = 'text'
                className = 'txt'
                value = {JSON.stringify(rdstument)}
                id = 'rdstument'
                onChange ={(e) => setRdstument(e.target.value)}
                />    
               <label htmlFor = 'rdstument'>List Students of the Mentors</label>
                <input type = 'text'
                className = 'txt'
                value = {JSON.stringify(rdstudents)}
                id = 'rdstudents'
                // onChange ={(e) => setRdstudents(e.target.value)}
                />  

            </div>
    </div>
);
}

export default Form;