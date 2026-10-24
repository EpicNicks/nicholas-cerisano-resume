import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";

export function DummyInsomnia() {
  return (
    <ProjectDetail
      title="Dummy Insomnia"
      subtitle={'A PG 3D survival horror game prototype created for a group project for my University game design class DATT 4300, built around the theme "Snooze"'}
      media={
        <iframe
          src="https://www.youtube.com/embed/VJyeTu9Kdzc"
          title="Dummy Insomnia Gameplay"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      }
      tech={["C#", "Unity"]}
    >
      <p>
        The project was built for Unity's HD Render Pipeline (HDRP), which
        can't be built for WebGL, so there's no playable version. Above is
        another group member's YouTube video of the game being played.
      </p>
    </ProjectDetail>
  );
}
