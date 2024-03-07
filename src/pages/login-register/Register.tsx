import React from "react";

import { userInput } from "../../components/input/inputFields";
import CustomInput from "../../components/input/CustomInput";

const Register = () => {
  return (
    <div
      className="flex justify-center items-center "
      style={{ height: "100vh" }}
    >
      <div className="mt-5 border shadow-lg bg-gray-200 w-1/3">
        <form className="d-grid p-3">
          {userInput.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}
        </form>
      </div>
    </div>
  );
};

export default Register;
