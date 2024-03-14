import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import { ChangeEvent, FormEvent, useState } from "react";
import { contentData, postContent } from "../../helper/axios";

interface Formstate {
  [key: string]: string;
}

export const Home: React.FC = () => {
  const [form, setForm] = useState<Formstate>({});

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: contentData = {
      title: form.title || "",
      post: form.post || "",
      author: "shiva",
    };

    postContent(formData);
  };

  return (
    <MainLayout>
      <div className="bg-gray-300 ">
        <form className="top flex space-x-10" onSubmit={handleOnSubmit}>
          <div className="post w-3/4">
            <div className="mt-3">
              <input
                name="title"
                placeholder="Title of blog"
                className="border border-gray-500 rounded  mx-5 px-3 py-2 w-full"
                onChange={handleOnChange}
              />
              <textarea
                key="3"
                name="post"
                required={true}
                className="border border-gray-500 rounded mt-1 mb-3 mx-5 px-3 py-2 w-full"
                placeholder="Write your blog here"
                rows={7}
                onChange={handleOnChange}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end items-end mb-4 ">
            <button className="bg-blue-400 py-2 px-4 rounded" type="submit">
              post
            </button>
          </div>
        </form>
        <hr className=" w-3/4 mx-auto border-black" />
        <div className="contents">
          <h1 className="text-center mt-5 font-bold">Read All Blogs</h1>
        </div>
      </div>
    </MainLayout>
  );
};
