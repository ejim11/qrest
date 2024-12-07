/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const appContext = React.createContext({
  isHeaderSticky: false,
  solutionsModalIsOpen: false,
  changeStickyHeader: (val: boolean) => {},
  setSolutionsModalIsOpen: (val: boolean) => {}
});

export default appContext;
