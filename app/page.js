"use client";
import data from "../data/data.json";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query !== "") {
      const filteredResults = data.filter((item) =>
        item.word.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults.slice(0, 20));
      // limiting to 20
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="flex justify-center items-center bg-[#AF69F9] h-screen">
      <div className="flex flex-col bg-red-300">
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        {query !== "" && (
          <div className="bg-white h-25 overflow-auto w-full space-x-5">
            <ul>
              {results.map((item, index) => (
                <li key={index}>{item.word}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
