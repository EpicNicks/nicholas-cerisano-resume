import React from "react";
import "./CaloriesIn.css";
import { FaGithub } from "react-icons/fa";

export function CaloriesIn() {
  return (
    <div className="CaloriesIn">
      <div className="TextContent">
        <h1>Calories In</h1>
        <h3>A calorie-tracking mobile app created with Flutter and Dart</h3>
        <a
          href="https://github.com/EpicNicks/Calories-In-SimpleCalorieCounter-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            My GitHub repo &nbsp;
            <FaGithub className="Github" size={32} />
          </h3>
        </a>
        <p>
          Built to help users track calories at their own pace with an optional
          amount of specificity. Users can log calorie counts of food items they
          consume with the option to append the type of food. This approach
          allows users to quickly track their calorie intake without getting
          bogged down in unnecessary details, while still providing the
          flexibility to add more context if desired.
        </p>
        <p>
          The app was developed as a personal project to improve my skills in
          mobile app development and to create a useful tool for
          health-conscious individuals.
        </p>
        <div className="CaloriesIn-Details">
          <div className="CaloriesIn-features">
            <h3>Technologies used:</h3>
            <ul>
              <li>Flutter</li>
              <li>Dart</li>
              <li>Kotlin (for native interop)</li>
              <li>SQLite</li>
            </ul>
          </div>
          <div className="IconLinksGrid">
            <a
              href="https://caloriesin.49385219.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://caloriesin.49385219.xyz/images/calories-in-logo.webp"
                alt="calories in logo"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.aspirant.calorie_tracker"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/pioug/google-play-badges/main/svg/English.svg"
                alt="google play logo"
              />
            </a>
            <a href="https://dart.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dart_programming_language_logo_icon.svg/960px-Dart_programming_language_logo_icon.svg.png?20220708094811"
                alt="dart logo"
              />
            </a>
            <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png"
                alt="flutter logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
