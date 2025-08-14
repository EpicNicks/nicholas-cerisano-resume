import React from "react";

export function CaloriesIn() {
  return (
    <div className="CaloriesIn">
      <h1>Calories In</h1>
      <p>
        A mobile app created with Flutter and Dart to help users track calories
        at their own pace with an optional amount of specificity. Users can log
        calorie counts of food items they consume with the option to append the
        type of food. This approach allows users to quickly track their calorie
        intake without getting bogged down in unnecessary details, while still
        providing the flexibility to add more context if desired.
      </p>
      <p>
        The app was developed as a personal project to improve my skills in
        mobile app development and to create a useful tool for health-conscious
        individuals.
      </p>
      <p>
        Technologies used: Flutter, Dart, Kotlin (for native interop), SQLite
      </p>
      <div>
        <table style={{ margin: "auto" }}>
          <tr>
            <td align="center">
              <a href="https://caloriesin.49385219.xyz/">
                <img
                  src="https://caloriesin.49385219.xyz/images/calories-in-logo.webp"
                  alt="calories in logo"
                  height="100"
                />
              </a>
            </td>
            <td align="center">
              <a href="https://play.google.com/store/apps/details?id=com.aspirant.calorie_tracker">
                <img
                  src="https://raw.githubusercontent.com/pioug/google-play-badges/main/svg/English.svg"
                  alt="google play logo"
                  height="100"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td align="center">
              <a href="https://dart.dev/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dart_programming_language_logo_icon.svg/960px-Dart_programming_language_logo_icon.svg.png?20220708094811"
                  alt="dart logo"
                  height="100"
                />
              </a>
            </td>
            <td align="center">
              <a href="https://flutter.dev/">
                <img
                  src="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png"
                  alt="flutter logo"
                  height="100"
                />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
