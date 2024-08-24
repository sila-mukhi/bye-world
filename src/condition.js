 function Pass(){
    return <h1>yahhh.....you are passed</h1>
}
function Waiting(){
    return <h1>okey....have patience for your turn.your mark will be calculate very soon.....</h1>
}
function Fail(){
    return <h1>oops...you are fail.</h1>
}
function Result(props){
    const marks=props.marks;
    // return(
    // <>
      if(marks>100){
       return <Pass/>
    }
    else if(marks<100){
       return  <Fail/>
    }
    else{
     return <Waiting/>
    }
    // </> 
    // )
  
}
export default Result;