import React from "react";
import AddUser from "./components/User/AddUser";
import UserItem from "./components/User/UserItem";
import Card from "./components/UI/Card";
import classes from "./AppCard.module.css";

function App() {
  return (
    <div>
      <AddUser />

      <Card className={classes.input}>
        <UserItem />
        <UserItem />
      </Card>
    </div>
  );
}

export default App;
