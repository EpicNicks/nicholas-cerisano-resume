import "./DummyInsomnia.css";

export function DummyInsomnia() {
  return (
    <div className="DummyInsomnia">
      <div className="TextContent">
        <h1>Dummy Insomnia</h1>
        <h4>
          A PG 3D Survival Horror Game Prototype created for a group project for
          my University game design class DATT 4300
        </h4>
      </div>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/VJyeTu9Kdzc"
          title="Dummy Insomnia Gameplay"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="TextContent">
        <p>
          This game was created with the limitation of following the theme of
          "Snooze"
          <br />
          <br />
          Unfortunately, the project was built for the HD Render Pipeline (HDRP)
          and cannot be built for WebGL, so I am unable to provide a playable
          version. Above is a link to another group member's YouTube video of
          the game being played.
          <br />
        </p>
      </div>
    </div>
  );
}
