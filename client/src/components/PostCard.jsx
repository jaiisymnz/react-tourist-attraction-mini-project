import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "lucide-react";

export default function PostCard() {
  const [inputName, setInputName] = useState("");
  const [blogs, setBlogs] = useState([]);

  const getBlogInformation = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${query}`
      );
      console.log(response);
      setBlogs(response.data.data);
    } catch (error) {
      alert("Error fetching blogs: " + error.message);
    }
  };
  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

  useEffect(() => {
    getBlogInformation(inputName);
  }, [inputName]);

  return (
    <div className="search-bar place-self-center max-w-min-5/6 flex flex-col items-center mt-2 font-Bai Jamjuree">
      <h1 className="text-3xl font-bold text-center text-[#4796c5] ">เที่ยวไหนดี</h1>
      <p className="w-full">ค้นหาที่เที่ยว</p>
      <label htmlFor="input" className="w-full">
        <input
          className="border-b-2 border-black w-[80vw] text-center"
          placeholder="ค้นหาที่เที่ยวแล้วไปกัน..."
          value={inputName}
          onChange={handleInputChange}
        ></input>
      </label>
      <div className="post-card flex flex-col gap-10 my-7 w-full">
        {blogs.map((blog, index) => (
          <div key={index} className="flex gap-5 w-full">
            <a href={blogs[index].url} target="blank">
              <img
                src={blog.photos[0]}
                className="w-64 h-48 rounded-2xl object-cover "
              />
            </a>

            <div className="card-right w-3/4">
              <h2 className="font-bold">{blog.title}</h2>
              <p className="text-sm">
                {blog.description.length > 50
                  ? `${blog.description.substring(0, 100)}... `
                  : blog.description}
              </p>
              <a
                href={blog.url}
                target="_blank"
                className="text-blue-400  underline w-fit"
              >
                อ่านต่อ
              </a>
              <p>
                หมวดหมู่ : &nbsp;
                {blog.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="underline mr-2"
                    onClick={() => setInputName(inputName  + tag)}
                  >
                    {tag}
                    {index === blog.tags.length - 2 ? (
                      <span className="no-underline"> และ </span>
                    ) : index < blog.tags.length - 2 ? (
                      ", "
                    ) : (
                      ""
                    )}
                  </button>
                ))}
              </p>
              <div className="preview-image flex flex-row justify-between items-center">
                <div className="image flex gap-3 mt-3">
                  {blog.photos.map((photo, index) => {
                    if (index === 0) {
                      return null;
                    }
                    return (
                      <a href={blog.url}>
                        <img
                          key={index}
                          src={photo}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                      </a>
                    );
                  })}
                </div>

                <button
                  className="border-2 rounded-[999px] p-1 border-[#34a0d5]"
                  onClick={() => {
                    navigator.clipboard.writeText(blogs[index].url);
                    alert("Copied to clipboard");
                  }}
                >
                  <Link color="#34a0d5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
