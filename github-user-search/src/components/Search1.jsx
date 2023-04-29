import React from "react";
import { useState } from "react";
// import { FaSearch } from 'react-icons/fa';


const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

export default function Search1() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  }

  return (
    <div className="app justify-center">
      <main className="main flex flex-col">
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        <h3 className="text-white font-bold text-3xl my-8 self-center">Results</h3>
        <div id="results" className="w-full flex justify-center self-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full mx-auto justify-center items-center gap-4 self-center p-8">
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function User({ avatar, url, username }) {
  return (
    <div className="user flex w-full ">
      <img src={avatar} alt="Profile" width="100" height="100" className="rounded-md border-[#009dfa] border-[3px] "/>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#009dfa] self-center underline text-xl ml-8">
        {username}
      </a>
    </div>
  );
}

function Form({ onSubmit, onChange, value }) {
  return (
    <form className="search-form flex flex-col w-[60%] self-center mt-8" onSubmit={onSubmit}>
      <input
        className="text-[#00df9a] focus:outline-0 bg-[#00000000] border-[2px] border-[#00df9a] p-4 text-center text-3xl"
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <button type="submit" className="w-full text-center bg-[#00df9a] p-4 self-center text-xl">Search </button>
    </form>
  );
}
