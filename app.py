from flask import Flask, render_template, request, jsonify
import json
import random
import os

app = Flask(__name__)

# Load theme songs data
with open("data/songs.json", "r") as f:
    songs_data = json.load(f)

# Load player scores
if os.path.exists("data/scores.json"):
    with open("data/scores.json", "r") as f:
        scores_data = json.load(f)
else:
    scores_data = {}

# Route for the landing page
@app.route("/")
def index():
    return render_template("index.html")

# Route for the choose level page
@app.route("/choose_level")
def choose_level():
    return render_template("choose_level.html")

# Route for the game page
@app.route("/game")
def game():
    level = request.args.get("level", "easy")  # Default to easy level
    return render_template("game.html", level=level)

# Route to get all songs data
@app.route("/get_songs", methods=["GET"])
def get_songs():
    return jsonify(songs_data)

# Route to get a random song
@app.route("/get_song", methods=["GET"])
def get_song():
    level = request.args.get("level", "easy")  # Default to easy level
    song = random.choice(songs_data[level])
    return jsonify(song)

# Route to check the answer
@app.route("/check_answer", methods=["POST"])
def check_answer():
    data = request.json
    wrestler = data["wrestler"]
    answer = data["answer"]

    if wrestler == answer:
        return jsonify({"result": "correct"})
    else:
        return jsonify({"result": "wrong", "correct_answer": wrestler})

# Route to save the score
@app.route("/save_score", methods=["POST"])
def save_score():
    data = request.json
    player_name = data["name"]
    score = data["score"]

    scores_data[player_name] = score
    with open("data/scores.json", "w") as f:
        json.dump(scores_data, f)

    return jsonify({"status": "success"})

# Route to display the leaderboard
@app.route("/leaderboard")
def leaderboard():
    return render_template("leaderboard.html", scores=scores_data)

if __name__ == "__main__":
    app.run(debug=True)
