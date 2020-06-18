import React from "react";

const Person = props => {
  const { name, age } = props;
  return (
    <div className="person">
      <p>
        I'm a {name} and I am {age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
