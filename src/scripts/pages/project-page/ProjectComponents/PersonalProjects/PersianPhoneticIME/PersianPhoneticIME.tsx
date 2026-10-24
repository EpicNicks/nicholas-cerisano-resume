import { FaGithub } from "react-icons/fa";
import "./PersianPhoneticIME.css";
import siteScreenshot from "../../../../../../media/images/persian_phonetic_ime_site.png";

export function PersianPhoneticIME() {
  return (
    <div className="PersianPhoneticIME">
      <div className="PersianPhoneticIMEHeader">
        <h1>Persian Phonetic IME</h1>
        <h3>A phonetic Persian input method for Windows, written in Rust</h3>
        <a
          href="https://github.com/EpicNicks/Persian-Phonetic-IME"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            My GitHub repo &nbsp;
            <FaGithub className="Github" size={32} />
          </h3>
        </a>
      </div>
      <a
        className="PersianPhoneticIMEShot"
        href="https://persian-phonetic-ime.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={siteScreenshot} alt="The Persian Phonetic IME site, with its try-it-now typing demo" />
        <span>Try it in the browser on the project site</span>
      </a>
      <div className="PersianPhoneticIMEText">
        <p>
          A native Text Services Framework text service written in Rust. Type
          Latin letters and get Persian script: typing <em>slam</em> gives
          سلام. The current word is underlined while you compose it, and
          ambiguous letters such as <em>s</em> and <em>z</em> open a numbered
          candidate list.
        </p>
        <div className="PersianPhoneticIME-features">
          <h4>Status</h4>
          <ul>
            <li>
              <strong>Pre-release:</strong> the engine, candidate window,
              settings app and text service all build and pass their tests.
            </li>
            <li>
              <strong>Configurable:</strong> a built-in preset plus an optional
              TOML file.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
