import MainLayout from "../../components/layout/MainLayout";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { contentData, userData } from "../../helper/axios";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  deleteContentAction,
  getAllContentAction,
  postContentAction,
} from "./contentAction";
import { format } from "date-fns";
import { pulledUser } from "../../components/layout/Header";
import { FaDeleteLeft } from "react-icons/fa6";

const initialFormState: contentData = {
  title: "",
  post: "",
  author: " ",
  authorId: " ",
};

export interface updatedContentData extends contentData {
  _id: string;
  createdAt: Date;
}

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userInfo);
  const { contents } = useAppSelector((state) => state.contentInfo);
  console.log(contents);

  const { _id, fName, lName } = (user as pulledUser) || {};
  let userId = _id;

  useEffect(() => {
    dispatch(getAllContentAction());
  }, [dispatch]);

  const [form, setForm] = useState<contentData>({ ...initialFormState });
  const [expandedContentIds, setExpandedContentIds] = useState<string[]>([]);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      title: form.title,
      post: form.post,
      author: `${fName} ${lName}`,
      authorId: `${_id}`,
    };

    const { status } = await dispatch(postContentAction(formData));

    if (status === "success") {
      setForm({ ...initialFormState });
    }
  };

  const handleOnDelete = (contentId: string) => {
    dispatch(deleteContentAction(contentId, userId));
  };

  const toggleExpand = (contentId: string) => {
    setExpandedContentIds((prev: string[]) =>
      prev.includes(contentId)
        ? prev.filter((id) => id !== contentId)
        : [...prev, contentId]
    );
  };

  return (
    <MainLayout>
      <div className="bg-gray-300 p-4">
        {_id && (
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col space-y-2">
              <input
                name="title"
                placeholder="Title of blog"
                className="border border-gray-500 rounded px-3 py-2"
                onChange={handleOnChange}
                value={form.title}
              />
              <textarea
                name="post"
                required={true}
                className="border border-gray-500 rounded px-3 py-2 h-32"
                placeholder="Write your blog here"
                onChange={handleOnChange}
                value={form.post}
              ></textarea>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                type="submit"
              >
                Post
              </button>
            </div>
          </form>
        )}
        <hr className="my-4 border-black" />
        <div className="contents">
          <h1 className="text-center font-bold">Read All Blogs</h1>
          {!contents[0] && (
            <div style={{ height: "70vh" }}>
              <h1 className="pt-5 text-red-600 text-center">
                No blogs found!!
              </h1>
            </div>
          )}
          {contents.map((content) => (
            <div
              key={content._id}
              className="border shadow-lg rounded p-4 my-4 relative"
            >
              <p className="text-sm text-gray-500">
                {format(content.createdAt, "MM/dd/yyyy")}
              </p>
              <p className="text-gray-600">By: {content.author}</p>
              <h2 className="text-lg font-bold text-center underline my-2 text-blue-500">
                {content.title}
              </h2>
              <p>
                {expandedContentIds.includes(content._id)
                  ? content.post
                  : `${content.post.split("").slice(0, 300).join("")}...`}
                <button
                  className="text-blue-500 underline ml-1"
                  onClick={() => toggleExpand(content._id)}
                >
                  {expandedContentIds.includes(content._id)
                    ? "See less"
                    : "See more"}
                </button>
              </p>

              <div className="absolute top-0 right-1 ">
                <FaDeleteLeft
                  className="text-red-800 cursor-pointer"
                  onClick={() => {
                    handleOnDelete(content._id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
