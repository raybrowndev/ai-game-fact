# 👾 Fun AI Game Fact Generator

<!-- <img title="game-mock-up" alt="game-mock-up" src="public/ai-game-photo-mock.png"> -->
<img src="/public/ai-game-photo-mock.png" alt="game-preview-mock-up">

## 🛠️ Tech Stack
This project uses a variety of technologies to create an engaging and interactive experience:
- **JavaScript**: Core programming language used for functionality.
- **Express.js**: Backend framework for routing and server setup.
- **OpenAI API**: Powers the AI-generated quotes.
- **HTML & CSS**: For structuring and styling the app.
- **Node.js**: Runtime environment for server-side JavaScript execution.
- **RESTful API**: Facilitates communication between the client and server.
- **Public Static Files**: Contains assets such as CSS for styling.

---

## 🌟 Description
The Fact Generator is an interactive web application designed to provide users with **fun fact about the history of retro gaming**. It leverages artificial intelligence to craft unique, gane facts. Here's what the app does:

- **Dynamic Quote Generation**: 
   - Each visit or interaction with the app prompts the OpenAI API to generate a fresh game fact quote.  
   - Ther fun facts are designed to show fun facts about retro games.
   
- **User-Friendly Interface**:
   - A clean and simple interface ensures the focus remains on the quotes.
   - Responsive design for optimal viewing on different devices.

- **Static Assets**:
   - A `style.css` file includes custom styling.
   - Public directory serves static assets seamlessly.

---
## 🚀 How It Works
1. **Server**: 
   - The backend, powered by `Express.js`, serves the HTML page and fetches AI-generated quotes from the OpenAI API.
2. **Client**:
   - JavaScript fetches the quote from the server and dynamically displays it on the page.
3. **AI Integration**:
   - The app sends prompts to the OpenAI API, instructing it to craft gaming facts of retro games.

---

## 📌 Features
- **Real-Time Quote Display**:
  - Users receive a new quote with every interaction.
  
- **Customizable Prompts**:
  - The app’s backend can be updated with different prompts for tailored quote styles.

- **Scalable Design**:
  - The project can be extended to include categories or user-selected themes for quotes.

---

## 📂 File Structure
- **`/public`**:
  - Contains static files such as the CSS file for styling.
- **`/services`**:
  - Houses the AI service that communicates with OpenAI.
- **`app.js`**:
  - Main application logic, including API routing.
