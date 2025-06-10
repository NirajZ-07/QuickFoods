import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {
    constructor(props){
        console.log("Parent Constructor Called");
        super(props);

    } 
    
    componentDidMount(){
        console.log("Parent component did mount called");
    }
    

    render(){
        console.log("Parent Render Called");
        return(
            <div>
                <h1>About </h1>
                <h3>This is about page</h3>

                <UserClass name={"Niraj Zope class"} location={"Pune class"}/>
                <UserClass name={"Elon musk class"} location={"US class"}/>
                <UserClass name={"Ambani class"} location={"mumbai class"}/>
            </div>
        );
    }
}

// const About = () => {
//     return <div>
//         <h1>About </h1>
//         <h3>This is about page</h3>

//         {/* <User name={"Niraj Zope fuctional"}/> */}


//         <UserClass name={"Niraj Zope class"} location={"Pune class"}/>
//     </div>
// }

export default About;