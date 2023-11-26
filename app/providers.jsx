"use client";

import { ThemeProvider } from "next-themes";

const providers = ({ children }) => {
  return <ThemeProvider attribute="class"> {children} </ThemeProvider>;
};

export default providers;
