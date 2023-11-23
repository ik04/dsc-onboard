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
      // Limiting to 20
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="flex justify-center items-center bg-[#AF69F9] h-screen">
      <div className="flex space-x-2">
        <div className="flex flex-col">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {query !== "" && (
            <div className="bg-white h-[200px] overflow-auto w-full space-x-5 cursor-pointer">
              <ul>
                {results.map((item, index) => (
                  <li onClick={() => setQuery(item.word)} key={index}>
                    {item.word}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {query !== "" && (
          <div
            className="text-white cursor-pointer"
            onClick={() => setQuery("")}
          >
            X
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
