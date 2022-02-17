import React from "react";
import { Film } from "../types/types";

const TdComponent = ({ id, name, rate, author }: Film) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{rate}</td>
    </tr>
  );
};

export default TdComponent;
