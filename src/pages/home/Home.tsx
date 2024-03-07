import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-gray-300 ">
        <div className="top flex space-x-10">
          <div className="post w-3/4">
            <textarea
              key="3"
              name="post"
              required={true}
              className="border border-gray-500 rounded my-3 mx-5 px-3 py-2 w-full"
              placeholder="Write your blog here"
              rows={7}
            ></textarea>
          </div>
          <div className="flex justify-end items-end mb-4 ">
            <button className="bg-blue-400 py-2 px-4 rounded">post</button>
          </div>
        </div>
        <div className="contents"></div>
      </div>
    </MainLayout>
  );
};
