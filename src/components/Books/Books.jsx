import React, { Fragment } from "react";
import BooksSummary from "./BooksSummary";
import AvailableBooks from "./AvailableBooks";

const Books = () => {
  return (
    <Fragment>
      <BooksSummary />
      <AvailableBooks />
    </Fragment>
  );
};

export default Books;
