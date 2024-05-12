import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "./CreateForm";
import DisplayForm from "./DisplayForm";

const Home = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetchDays();
  }, []); // Fetch days on initial render

  const fetchDays = async () => {
    try {
      const response = await axios.get("http://localhost:8080/daily/get");
      setDays(response.data);
    } catch (error) {
      console.error("Error fetching days", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl underline font-extrabold text-center mb-8">
        Daily Task
      </h1>
      <CreateForm fetchDays={fetchDays} />
      <DisplayForm days={days} />
    </div>
  );
};

export default Home;
