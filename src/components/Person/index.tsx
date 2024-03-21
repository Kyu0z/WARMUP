import { useState } from "react";
import { User } from "@src/interface/User";

const Person = (props: { className: string }) => {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Khai Duy",
    age: 23,
  });

  const handleAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };

  return (
    <div className={props.className}>
      <h1>Information User</h1>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>age: {user.age}</p>
      <button onClick={handleAge}>Click add number age</button>
    </div>
  );
};

export default Person;
