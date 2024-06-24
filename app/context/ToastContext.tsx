"use client";
import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <div>
      <h1>this is for demo</h1>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ToasterContext;
