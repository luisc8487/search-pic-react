# Unsplash Image Search Application

This project is a simple web application that allows users to search for images using Unsplash's API. Users can input a search term, and the application will fetch and display relevant images from Unsplash. The project demonstrates how to handle text inputs in React, manage state, and make API requests using Axios. The application is styled using CSS.

## Features

- **Search for Images**: Users can type a search term to find images related to their input.
- **Dynamic State Management**: The application updates its state dynamically as users interact with the input field.
- **Responsive Design**: Styled using CSS for a clean and user-friendly interface.

## Technologies Used

- **React**: For building the user interface and managing - state.
- **Axios**: For making HTTP requests to Unsplash's API.
- **CSS**: For styling the application.

## How It Works

### 1. Handling Text Inputs

The application uses React's state to manage the value of the input field. Here's how it works:

- A new piece of state is created to store the input value.
- An event handler listens for changes in the input field (`onChange` event).
- When the user types in the input field, the event handler updates the state with the new value.
- The state is passed back to the input field as its `value` prop, ensuring the input is always in sync with the state.

### 2. Making API Requests

When the user submits the search form, the application sends a request to Unsplash's API using Axios. The API returns a list of images based on the search term, which are then displayed on the page.

## Code Examples

### API Integration

The `searchImages` function uses Axios to make a GET request to Unsplash's API.

```jsx
import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_SECRET}`, // API key from environment variables
    },
    params: {
      query: term,
    },
  });
  return response.data.results; // Return the list of images
};

export default searchImages;
```

### SearchBar Component

The `SearchBar` component handles the input field and form submission.

```jsx
import "./SearchBar.css";
import {useState} from "react";

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term); // Pass the search term to the parent component
  };

  const handleChange = (event) => {
    setTerm(event.target.value); // Update state with input value
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
```

### App Component

The `App` component manages the state for the list of images and handles the API request.

```jsx
import {useState} from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term); // Fetch images from Unsplash API
    setImages(result); // Update state with the fetched images
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
```

### Styling

The application is styled using CSS for a clean and responsive design.

```css
.search-bar {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
}
.search-bar form {
  display: flex;
  flex-direction: column;
}
```

## How to Run the Project

### 1. Clone the Repository

```luna
git clone git@github.com:luisc8487/search-pic-react.git
cd pics
```

### 2. Install Dependencies:

```luna
npm install
```

### 3. Set Up Environment Variables:

- Create a `.env` file in the root of the project.
- Add your Unsplash API key:
  `REACT_APP_SECRET=your_api_key_here`

### 4. Start the Development Server:

`npm start`

### 5. Open your browser and navigate to `htttp://localhost:3000`
