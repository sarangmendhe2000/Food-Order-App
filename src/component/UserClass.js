import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        
        // State Variavle 

        this.state = {
            count: 0,
            count2 : 1,
        }

        // console.log(this.props.name + "Child Constructor called");
    };
    
    componentDidMount(){
        // console.log(this.props.name + "Child componentDidMount method is called....");
    }
    
    render(){
        // console.log(this.props.name + "Child render method called");
        const {name , id} = this.props;
        return(
            
            <div className="user">

                <h1>Count : {this.state.count}</h1>



                <button className="countBtn" onClick={()=>{
                    this.setState({
                        count: this.state.count + 1 ,
                        count2: this.state.count2 + 1,
                    })
                }}>Count++</button>





                <h1>Count : {this.state.count2}</h1>
                <h2>Name : {name}</h2>
                <h3>ID : {id}</h3>
                <h3>Contact: sarangmendhe22@gmail.com</h3>

            </div>
        ); 
    };
};

export default UserClass;