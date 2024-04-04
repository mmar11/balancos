import React from "react";

interface Params {
  params: {
    userid: string;
  };
}

const NewUserPage = ({ params }: Params) => {
  let userId = params;
  console.log(userId);
  return <div>NewUserPage ID: {params.userid}</div>;
};

export default NewUserPage;
