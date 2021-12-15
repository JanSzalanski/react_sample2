import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import Element from "../UI/Element";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <Element key={user.id}>
            <li>
              {user.name} ({user.age} years old)
            </li>
          </Element>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
