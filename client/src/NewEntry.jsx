import React, { Component, useCallback, useEffect, useState } from "react";
import { render } from "react-dom";
import { useHistory } from "react-router";

export const NewEntry = () => {

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    const post = {};
    for (const input of e.target) {
      const {name, value} = input;
      if (!name) {
        continue;
      }
      post[name] = value;
    }
    fetch("http://localhost:8085/newentry", {
      method: "POST",
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
              <td><input name="date" type="text" placeholder="date"></input></td>
            </tr>
            <tr>
              <th>Description:</th>
              <td><input name="description" type="text" placeholder="description"></input></td>
            </tr>
            <tr>
              <th>Distance:</th>
              <td><input name="distance" type="text" placeholder="distance"></input></td>
            </tr>
            <tr>
              <th>Time:</th>
              <td><input name="run_time" type="text" placeholder="time"></input></td>
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
