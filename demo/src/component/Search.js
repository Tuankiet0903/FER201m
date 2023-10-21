import React,{ useState } from 'react'

function Search() {

    const [searchInput, setSearchInput] = useState('');
    const items = ['React','NodeJS','MongoDB','Express','Angular','VueJS']; // Replace with your data

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

  
     const filterItems = items.filter((item) =>
        item.toLowerCase().includes(searchInput.toLowerCase())
    );

return (
    <div>
    <input
      type="text"
      placeholder="Search"
      value={searchInput}
      onChange={handleInputChange}
    />

    <ul>
      {filterItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  );

}


export default Search
