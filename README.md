# React Google Maps Autofill Location Form

A React-based project that integrates the Google Maps API to autofill address fields based on user input. Using Google Places Autocomplete, the app automatically populates fields like name, street address, city, state, and zip code. Additionally, a real-time Google Map displays with a marker at the selected location.

---

## 📑 Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

## ✏️ Description

This project provides an interface where users can start typing an address, triggering the Google Places Autocomplete API. Suggestions are displayed, and when a user selects an address, the form fields (name, street address, city, state, zip code) are automatically populated. Additionally, the selected location is marked on a Google Map below the form, which updates in real time.

This project is ideal for forms requiring location input, such as delivery or address forms.

---

## 🚀 Technologies Used

- **ReactJS**: For building the frontend user interface.
- **Google Maps API**: For the map integration and Places Autocomplete feature.
- **TailwindCSS**: For responsive and modern styling.

---

🔧 Installation
Follow these steps to run the project locally:

## 1. Clone the Repository
```bash
git clone https://github.com/yourusername/react-google-maps-autofill.git
cd react-google-maps-autofill
```


## 2. Install Dependencies
```bash
npm install
```

## 3. Start the Development Server
```bash
npm start
```

Once the server is running, visit http://localhost:3000 in your browser to view the app.


---


## 🖥️ How to Use

### 1. **Enter a Location:**
In the input field labeled "Location," begin typing an address. Google Places Autocomplete will suggest possible addresses.

### 2. **Select a Place:**
Once you select an address from the suggestions, the form fields (name, street address, city, state, zip code) will be automatically filled.

### 3. **View Location on Map:**
A Google Map will display below the form with a marker indicating the selected location. The map will update in real-time as you select a new place.

### 4. **Edit Information:**
You can manually edit any of the fields (name, street address, city, state, zip code). The changes will be reflected in the form state.

---

## ✨ Features

- **Google Places Autocomplete**: The input field suggests possible addresses as you type.
- **Real-time Map Updates**: A Google Map updates with a marker at the selected location.
- **Automatic Form Population**: Address details are auto-filled (name, street address, city, state, zip code).
- **Responsive Layout**: The app adapts to various screen sizes using TailwindCSS.

---

## 💖 Acknowledgements

- **Google Maps JavaScript API**: For providing the Autocomplete and Map features.
- **ReactJS**: For building the UI.
- **TailwindCSS**: For styling the application.

---

## 📬 Contact

For any questions or feedback, feel free to reach out to:  
**miralimoradiya@gmail.com** 

