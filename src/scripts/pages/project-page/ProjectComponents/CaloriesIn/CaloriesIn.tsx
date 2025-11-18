import React from "react";
import "./CaloriesIn.css";

export function CaloriesIn() {
  return (
    <div className="CaloriesIn">
      <div className="TextContent">
        <h1>Calories In</h1>
        <p>
          A mobile app created with Flutter and Dart to help users track
          calories at their own pace with an optional amount of specificity.
          Users can log calorie counts of food items they consume with the
          option to append the type of food. This approach allows users to
          quickly track their calorie intake without getting bogged down in
          unnecessary details, while still providing the flexibility to add more
          context if desired.
        </p>
        <p>
          The app was developed as a personal project to improve my skills in
          mobile app development and to create a useful tool for
          health-conscious individuals.
        </p>
        <h3>Technologies used:</h3>
        <ul>
          <li>Flutter</li>
          <li>Dart</li>
          <li>Kotlin (for native interop)</li>
          <li>SQLite</li>
        </ul>
        <div className="IconLinksGrid">
          <a
            href="https://caloriesin.49385219.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://caloriesin.49385219.xyz/images/calories-in-logo.webp"
              alt="calories in logo"
              height="100"
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
              height="100"
            />
          </a>
          <a href="https://dart.dev/" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dart_programming_language_logo_icon.svg/960px-Dart_programming_language_logo_icon.svg.png?20220708094811"
              alt="dart logo"
              height="100"
            />
          </a>
          <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
            <img
              src="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png"
              alt="flutter logo"
              height="100"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
