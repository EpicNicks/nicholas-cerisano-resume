import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";
import siteScreenshot from "../../../../../../media/images/persian_phonetic_ime_site.png";

const SITE_URL = "https://persian-phonetic-ime.vercel.app/";

export function PersianPhoneticIME() {
  return (
    <ProjectDetail
      title="Persian Phonetic IME"
      subtitle="A phonetic Persian input method for Windows, written in Rust"
      media={
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer">
          <img src={siteScreenshot} alt="The Persian Phonetic IME site, with its try-it-now typing demo" />
        </a>
      }
      pointsHeading="Status"
      points={[
        ["Pre-release", "The engine, candidate window, settings app and text service all build and pass their tests"],
        ["Configurable", "A built-in preset plus an optional TOML file"],
      ]}
      tech={["Rust", "Windows TSF"]}
      links={[
        { label: "Try it on the project site", href: SITE_URL },
        { label: "View on GitHub", href: "https://github.com/EpicNicks/Persian-Phonetic-IME" },
      ]}
    >
      <p>
        A native Text Services Framework text service written in Rust. Type
        Latin letters and get Persian script: typing <em>slam</em> gives سلام.
        The current word is underlined while you compose it, and ambiguous
        letters such as <em>s</em> and <em>z</em> open a numbered candidate
        list.
      </p>
    </ProjectDetail>
  );
}
