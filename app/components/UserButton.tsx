"use client";

interface Props {
  id: string;
}

import React from "react";
import Link from "next/link";
const UserButton = (props: Props) => {
  return (
    <>
      <Link href={`/app/users/${props.id}`}>USR ID {props.id}</Link>
    </>
  );
};

export default UserButton;
