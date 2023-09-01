import React, { useState } from "react";
import { Nextjs, Reactjs} from "../../../index"

export default function ListProjectsVSMobile({ selected }) {
  // ****************** PAGINATIONS NEXT JS ****************** //
  const [category1] = useState("nextJS");
  const [category2] = useState("reactJS");

  if (category1 === selected) {
    return <Nextjs />;
  } else if (category2 === selected) {
    return <Reactjs />;
  }
}
