# WWE Sound Slam
#### Video Demo:  https://www.youtube.com/watch?v=bAagzqgZukw
#### Description:

**WWE Sound Slam** is a web-based game designed to test your knowledge of WWE theme songs. If you’re a fan of professional wrestling, this project offers an interactive way to recognize and identify iconic entrance themes of WWE superstars from different eras. The game challenges players with three difficulty levels: **Easy**, **Medium**, and **Hard**, each featuring progressively harder theme songs to recognize.

The project is designed to be fun and engaging for wrestling fans of all experience levels. Players are rewarded for accuracy with a scoring system and motivational appreciation messages at the end of each level. Whether you’re a casual fan or a die-hard enthusiast, WWE Sound Slam offers a mix of nostalgia and challenge.

---

### How It Works:
1. **Level Selection**:
   - On the landing page, players can choose a difficulty level to play: Easy, Medium, or Hard.
   - Each level contains 10 WWE theme songs tailored to the selected difficulty.

2. **Gameplay**:
   - An audio clip of a WWE superstar's entrance music plays.
   - Players are presented with multiple-choice options and must select the correct superstar's name.
   - Upon selection, the game provides immediate feedback before moving to the next question.

3. **Scoring**:
   - Each correct answer awards 10 points.
   - A maximum score of 100 points can be achieved in each level, encouraging players to aim for perfection.

4. **Appreciation Messages**:
   - Upon completing a level, players receive a motivational message based on their performance.
   - For example:
     - If a player performs exceptionally well on Easy, they are encouraged to try Medium for a greater challenge.
     - If a player excels in Hard mode, they are praised as a true WWE fan.

---

### Files in the Project:
- **`app.py`**:
   - The main Python file that handles the backend logic of the web application using Flask.
   - It serves the game interface, processes user interactions, and manages scoring.

- **`static/`**:
   - Contains CSS styles, images, and JavaScript files to create an engaging and polished UI.
   - Audio files for WWE theme songs are stored here as well, categorized into difficulty levels.

- **`templates/`**:
   - Contains HTML templates for the game’s UI, structured using Flask’s template rendering system.
   - Includes pages for the main menu, gameplay, and level completion.

- **`data/`**:
   - This directory holds essential data files for the application:
     - **`scores.json`**: Tracks player scores and performance data.
     - **`songs.json`**: Stores metadata about the WWE theme songs, including the song titles, superstars, and difficulty levels.

- **`requirements.txt`**:
   - A file listing the required Python dependencies for the project, including Flask.

- **`README.md`**:
   - This documentation file, detailing the project, its features, and how to set it up.

---

### Design Choices:
- **Difficulty Levels**:
   - The division into Easy, Medium, and Hard ensures accessibility for all users. Each level was carefully curated to include theme songs with varying levels of recognizability.

- **Motivational Messages**:
   - Appreciation messages were added to encourage replayability and make the experience more interactive.

- **Audio Clarity**:
   - Only high-quality audio clips were included to ensure players could recognize songs without distortion.

- **Responsive Design**:
   - The interface was designed to work on various devices, including desktops, tablets, and smartphones.

---

### Challenges and Considerations:
1. **Choosing Theme Songs**:
   - Picking songs that balance familiarity and challenge was a key design consideration. Popular and nostalgic themes dominate Easy, while more obscure tracks are reserved for Hard.

2. **Feedback System**:
   - Deciding how much feedback to provide (e.g., correct answer highlighting) was crucial to keeping the game engaging but not overly easy.

3. **Audio Playback**:
   - Ensuring audio compatibility across browsers and devices required some testing and adjustments.

---

### Installation:
To run WWE Sound Slam locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/bayuoktarino/WWE-Sound-Slam.git
