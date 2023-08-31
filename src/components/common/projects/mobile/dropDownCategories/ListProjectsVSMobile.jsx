import React, { useState } from "react";
import Reactjs from "./Reactjs";
import Nextjs from "./Nextjs";

export default function ListProjectsVSMobile({ selected }) {

  // ****************** PAGINATIONS NEXT JS ****************** //
  const [category1] = useState("nextJS");
  const [category2] = useState("reactJS");

  if (category1 === selected) {
    return (
      <Nextjs />
    );
  }
  else if (category2 === selected) {
    return <Reactjs />
  }
}
