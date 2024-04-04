import Link from "next/link";
import React from "react";
import UserButton from "../../components/UserButton.jsx";

interface User {
  id: number;
  name: string;
  // "username": "Bret",
  email: string;
  // "address": {
  //   "street": "Kulas Light",
  //   "suite": "Apt. 556",
  //   "city": "Gwenborough",
  //   "zipcode": "92998-3874",
  //   "geo": {
  //     "lat": "-37.3159",
  //     "lng": "81.1496"
}

const UsersPage = async () => {
  const newLocal = "";
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "default",
  });
  const users: User[] = await res.json();

  return (
    <>
      <div>UsersPage</div>
      <div className="overflow-x-auto">
        <p className="p-2">{new Date().toLocaleTimeString()}</p>
        <table className="table">
          <thead>
            <tr>
              <th>USR ID:</th>
              <th>E-mail:</th>
            </tr>
          </thead>
          <tbody>
            {users.map((usr) => {
              return (
                <tr key={usr.id}>
                  <td>
                    <UserButton id={usr.id.toString()} />
                  </td>
                  <td>E-mail {usr.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;
