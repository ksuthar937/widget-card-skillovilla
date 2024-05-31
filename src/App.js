import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";
import { USERS } from "./userData";

function App() {
  const [users, setUser] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    handleFilterData(e.target.value.toLowerCase());
  };

  //Filtered data based on searchQuery input
  const handleFilterData = (searchQuery) => {
    const data = users.filter(function (user) {
      if (
        user.name.first.toLowerCase() === searchQuery ||
        user.name.last.toLowerCase() === searchQuery ||
        user.location.city.toLowerCase() === searchQuery ||
        user.location.country.toLowerCase() === searchQuery
      ) {
        return user;
      }
      return null;
    });
    setFilterUsers(data);
  };

  //Inital stage when users are loaded during components mounting
  useEffect(() => {
    setUser(USERS);
  }, []);

  return (
    <main className="widget">
      <SearchBar handleChange={handleSearch} value={searchQuery} />

      {filterUsers.length > 0
        ? filterUsers.map((user) => (
            <UserCard
              key={user.id}
              fullname={user.name}
              avatar={user.picture}
              address={user.location}
            />
          ))
        : users.map((user) => (
            <UserCard
              key={user.id}
              fullname={user.name}
              avatar={user.picture}
              address={user.location}
            />
          ))}
    </main>
  );
}

export default App;
