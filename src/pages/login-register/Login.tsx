import { loginInput } from "../../components/input/inputFields";
import CustomInput from "../../components/input/CustomInput";
import { useState } from "react";
import { loginUser, userData } from "../../helper/axios";
import MainLayout from "../../components/layout/MainLayout";
import { toast } from "react-toastify";

interface FormState {
  [key: string]: string;
}

const Login: React.FC = () => {
  const [form, setForm] = useState<FormState>({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: userData = {
      email: form.email || "",
      password: form.password || "",
    };
    const { status, message } = await loginUser(formData);

    (toast as any)[status](message);
  };

  return (
    <MainLayout>
      <div
        className="flex justify-center items-center "
        style={{ height: "100vh" }}
      >
        <div className="mt-5 border shadow-lg bg-gray-200 w-1/3">
          <form className="d-grid p-3" onSubmit={handleOnLogin}>
            {loginInput.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <button
              type="submit"
              className="w-full my-5 py-2 rounded-md bg-blue-500 text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
