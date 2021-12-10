import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return;
    }
    if (+enteredUserAge > 1) {
      return;
    }
    console.log(enteredUser, enteredUserAge);
    setEnteredUser("");
    setEnteredUserAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">User name</label>
        <input id="username" type="text" value={enteredUser} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredUserAge} onChange={ageChangeHandler} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
