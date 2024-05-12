import React, { useState } from "react";
import axios from "axios";

const CreateForm = ({ fetchDays }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addData = async () => {
    const newDay = { title, content };
    try {
      await axios.post("http://localhost:8080/daily/add", newDay);
      setTitle("");
      setContent("");
      fetchDays(); // Fetch updated list of days after adding a new day
    } catch (error) {
      console.error("Error while adding data", error);
    }
  };

  return (
    <form className="mb-8">
      <div className="mb-4">
        <label className="block mb-2">Title</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Content</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          id="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={addData}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
