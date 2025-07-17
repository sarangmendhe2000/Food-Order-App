import { json } from "react-router-dom";
import User from "./user";
import UserClass from "./UserClass";
import React, { useEffect } from "react";
import Button from '@mui/material/Button';


// class About extends React.Component{

//     constructor(){
//         super()

//         // console.log("Parent Constructor Called");

//         this.state = {
//             userInfo:{
//                 name: "Dummy Name",
//                 id : "Getting soon"
//             }
//         }

//     }

//    async componentDidMount(){
//         // console.log("Parent componentDidMount method is called....");

//         const data = await fetch ("https://api.github.com/users/Sarang");

//         const json = await data.json();

//         this.setState({
//             userInfo : json
//         });

//         console.log(json);

        


//     }

//     componentDidUpdate(){
//         console.log("Component Did Update called ! ")
//     }

//     componentWillUnmount(){
//         console.log("Componenet Will Unmount will call when I go to the new page ")
//     }

//     render(){
//         // console.log("Parent render metheod Called");
//         const {login , id} = this.state.userInfo;
//         return(
        
//            <div>
//         <h1>Here is About Page</h1>
//         <h2>Thank you</h2>
//         <h2>Name - {login}</h2>
//         <h2> Id - {id}</h2>
//         <User name={"Sarang Mendhe"} location={"indore"}/>
//         <UserClass name={login} id={id}/>
//         {/* <UserClass name={"Second"} location={"indore"}/> */}
//             </div> 
//         )
//     }
// }






const About = () =>{

    useEffect(()=>{
        console.log("useEffect working")
        fetchData();

      const timer =  setInterval(()=>{
        console.log("Namste React !");
       }, 1000); 

       return () =>{
        clearInterval(timer);
        console.log("Unmounting")

       }
        
    },[]);
    console.log("render")
    const fetchData = async () =>{

        const data = await fetch("https://api.github.com/users/Sarang");

        const json = await data.json();

        console.log(json);
    }
    return(
          <div>
        <h1>Here is About Page</h1>
        <h2>Thank you</h2>
        <Button variant="contained" color="warning">
        Click Me
      </Button>

        <User name={"Sarang Mendhe"} location={"indore"}/>
        <UserClass name={"Sarang Mendhe"} location={"indore"}/>
    </div>
    )
}
    
  

export default About ;