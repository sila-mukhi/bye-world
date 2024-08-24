function Sname(props){
    return <li><h2>{props.name}</h2></li>
}



function Students(){
    // const stu_name=['abhijit','abhishek','hansika','sandeep','sudeshna','sila'];
   const stu_name=[
    {id:1,name:'abhijit1'},
    {id:2,name:'abhijit2'},
    {id:3,name:'abhijit3'},
    {id:4,name:'abhijit4'},
    {id:5,name:'abhijit5'},
   ]
    return(
        <>
           <h1>Student's List:</h1>
           <ul>
           
            {stu_name.map((sname)=><Sname key={sname.id} name={sname.name}/>)}

           </ul>

        </>
    )
    }
    export default Students;