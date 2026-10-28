import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";
import caloriesInLogo from "../../../../../../media/images/calories_in_icon.webp";

export function CaloriesIn() {
  return (
    <ProjectDetail
      title="Calories In"
      subtitle="A calorie-tracking mobile app created with Flutter and Dart"
      mediaBackground="#ff5722"
      media={<img src={caloriesInLogo} alt="Calories In app icon" />}
      tech={["Flutter", "Dart", "Kotlin", "SQLite"]}
      links={[
        {
          label: "Get it on Google Play",
          href: "https://play.google.com/store/apps/details?id=com.aspirant.calorie_tracker",
        },
        {
          label: "Visit the website",
          href: "https://caloriesin.49385219.xyz/",
        },
        {
          label: "View on GitHub",
          href: "https://github.com/EpicNicks/Calories-In-SimpleCalorieCounter-",
        },
      ]}
    >
      <p>
        Built to help people track calories at their own pace, with as much
        detail as they want. Portions can be represented with mathematical
        expressions to cut mental math. Log the calories of what you eat and
        optionally note the type of food (or whatever you want), so tracking
        stays quick while still allowing more context.
      </p>
      <p>
        Data is stored locally in SQLite and can be exported as CSV. Kotlin
        handles the parts that need native Android capabilities.
      </p>
    </ProjectDetail>
  );
}
