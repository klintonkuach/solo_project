import React, { useEffect, useState } from "react";
import {
  Link
} from 'react-router-dom';

export const Table = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8085/").then((res) => res.json().then(setData));
  }, []);

  const handleDelete = (post) => {
    console.log("clicked");
    fetch(`http://localhost:8085/${post._id}`, {
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:8085/").then((res) => {
        res.json().then(setData)
      });
    });
  };


  return (
    <main id="site-main">
      <div className="container">
        <form action="/" method="POST">
          <table className="table">
         
              <tr id="tableheader">
                <th>Date</th>
                <th>Description</th>
                <th>Distance</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            
              {data.map((post) => (
                <tr>
                  <td>{post.date}</td>
                  <td>{post.description}</td>
                  <td>{post.distance}</td>
                  <td>{post.run_time}</td>
                  <td id="imgactions">
                    <Link to={`/updateentry/${post._id}`}><img src="/assets/images/edit.png"/></Link>
                    <div onClick={() => handleDelete(post)} className="trashcan"><img src="/assets/images/delete.png"/></div>
                </td>
                </tr>
              ))}

          </table>
        </form>
      </div>
    </main>
  );
};

              {/* <tr>
                <td>09/28/2021</td>
                <td>
                  Went to the park to run on the track and ran into a friend
                  from high school
                </td>
                <td>2.2 miles</td>
                <td>Run Time/Distance</td>
                <td>15 minutes</td>
                <td id="imgactions">
                  <a href="https://www.qries.com/">
                    <img src="/assets/images/edit.png"></img>
                  </a>
                  <a href="https://icons8.com/icons/set/delete-button">
                    <img src="/assets/images/delete.png"></img>
                  </a>
                </td>
                <td></td>
              </tr> */}

              // import React, { Component } from "react";
              // //import { render } from "react-dom";
              // import Goal from "./goalContainer.jsx";
              
              
              // class GoalContainer extends Component {
              //   constructor(props) {
              //     super(props);
              //     this.state = {
              //       goalFeed: [{'goal': '', 'goalhours': ''}],
              //     };
              //   }
              
              //     componentDidMount() {
              //         fetch("/goals")
              //     .then(res => {
              //       let holder = res.json()  
              //       console.log('data coming back', holder) 
              //       return holder
              //   })
              //     .then(data => this.setState({goalFeed: data}, () => console.log('hello', this.state.goalFeed)));
              //     }
              
              //     createGoal() {
              //     let inputGoals = document.getElementById("inputGoals").value;
              //     let inputHours = document.getElementById("inputHours").value;
              //     console.log('input goals', inputGoals)
              //     fetch("/goals",  {
              //         method: "POST",
              //         body: JSON.stringify({
              //           goals: inputGoals,
              //           goalHours: inputHours
              //         }),
              //         headers: { "Content-Type": "application/json" },
              //       })
              //       .then(data => this.setState({goalFeed: data}))
              //     }
              //   // for posting a new goal you would send the data on the request body as JSON
              //   // and parse it on the other side
              
              //   render() {
              //         const goalList = []
              //         this.state.goalFeed.forEach(obj => {
              //             goalList.push(<p>{obj.goal}</p>)
              //         })
              
              //         const goalHours = []
              //         this.state.goalFeed.forEach(obj => {
              //             goalHours.push(<p>{obj.goalhours}</p>)
              //         })
              
              //     return (
              
                  
              //     <div>
              //       <label form="name">Add a new goal: </label>
              //       <input type="text" id="inputGoals" /> 
              //             <label form="name">Hours: </label>
              //             <input type="text" id="inputHours" />
              //       <button id="Create Goal" onClick={this.createGoal}>Create Goal</button>
              //       <span>{goalList}</span><span>{goalHours}</span>
              //     </div>
              //     )
              //   }
              // }
              
              // {/* <input type="text" placeholder="Type something..." id="myInput">
              // <button type="button" onclick="getInputValue();">Get Value</button>
              
              // <script>
              //   function getInputValue(){
              //     // Selecting the input element and get its value 
              //     var inputVal = document.getElementById("inputGoals").value;
                  
              //     // Displaying the value
              //     alert(inputVal);
              //   }
              // </script> */}
              
              
              // export default GoalContainer;