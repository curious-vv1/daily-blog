import React from "react";

const DisplayForm = ({ days }) => {
  return (
    <div>
      {days.map((day, index) => (
        <div className="border border-gray-300 rounded p-4" key={index}>
          <div className="mb-4">{day.title}</div>
          <div>{day.content}</div>
        </div>
      ))}
    </div>
  );
};

export default DisplayForm;
