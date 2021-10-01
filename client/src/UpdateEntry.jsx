import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const UpdateEntry = ({match}) => {

  const [post, setPost] = useState({})

  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8085/${match.params.idasdf}`)
      .then(res => res.json().then(setPost))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {...post};
    for (const input of e.target) {
      const {name, value} = input;
      if (!name) {
        continue;
      }
      post[name] = value;
    }
    fetch(`http://localhost:8085/${match.params.idasdf}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }).then(
      () => {
        history.push('/')
      }
    );
  }

  return (
    <main id="site-main">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <table className="newentrytable">
            <tr>
              <th>Date:</th>
              <td><input name="date" type="text" placeholder="date" defaultValue={post.date}></input></td>
            </tr>
            <tr>
              <th>Description:</th>
              <td><input name="description" type="text" placeholder="description" defaultValue={post.description}></input></td>
            </tr>
            <tr>
              <th>Distance:</th>
              <td><input name="distance" type="text" placeholder="distance" defaultValue={post.distance}></input></td>
            </tr>
            <tr>
              <th>Time:</th>
              <td><input name="run_time" type="text" placeholder="run time" defaultValue={post.run_time}></input></td>
            </tr>
            <tr className="entrybtn">
            <input id="entrybutton" type="submit" value="Submit"/>
            </tr>
          </table>
          
        </form>
        
      </div>
      
    </main>
  );
};
