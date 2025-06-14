import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        // console.log(props);

        console.log(this.props.name + "Child constructor called");
        
        // this.state = {
        //     count : 0,
        //     count2 : 1,
        // }

        this.state = {
            userInfo : {
                name : "dummy",
                location : "Default",
            },
        }
    }

    async componentDidMount(){
        console.log(this.props.name + "Child component did mount called");

        //API Call

        const data = await fetch("https://api.github.com/users/NirajZ-07");
        const json = await data.json();

        this.setState({
            userInfo : json,
        })


        console.log(json);
    }

    componentDidUpdate(){
        console.log(this.props.name + "Child Component did update called");
    }

    render(){
        console.log(this.props.name + "Child Render Called");

        // const {name, location} = this.props;
        const {name, location} = this.state.userInfo;
        // const {count, count2} = this.state;

        return(
            <div className="user-card">
                {/* <h1>Count : {count}</h1>
                <button onClick={() => {
                    //NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}>Increase Count</button> */}
                <h2>Name : {name}</h2>
                <h4>Location : {location}</h4>
                <h4>Contact : niraj@gmail.com</h4>
            </div>
        )
    }
};

export default UserClass;

/*
*   ----MOUNTING-----
*
*   Constructor(dummy)
*   Render(dummy)
*       <HTML Dummy> 
*   Component Did Mount
*       <API Call>
*       <this.setState> -> State Variable is updated
*
*   ----UPDATE-----
*
*       render(API data)
*       <HTML (new API data)>
*       component Did Update
*
*
*/