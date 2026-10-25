import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiDart,
  SiDocker,
  SiDotnet,
  SiFlutter,
  SiJavascript,
  SiJest,
  SiKotlin,
  SiLua,
  SiNodedotjs,
  SiNvidia,
  SiOpengl,
  SiPuppeteer,
  SiReact,
  SiRedux,
  SiRust,
  SiSfml,
  SiSpringboot,
  SiSqlite,
  SiTypescript,
  SiUnity,
  SiWebassembly,
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";

// Logos for the languages and tools named on the project cards, in each brand's colour.
// A card shows the logo of every language and tool it lists that has an entry here.
export const techIcons: Record<string, { Icon: IconType; color: string }> = {
  TypeScript: { Icon: SiTypescript, color: "#3178c6" },
  JavaScript: { Icon: SiJavascript, color: "#e3c400" },
  Java: { Icon: FaJava, color: "#e76f00" },
  "C++": { Icon: SiCplusplus, color: "#00599c" },
  "C#": { Icon: TbBrandCSharp, color: "#68217a" },
  Lua: { Icon: SiLua, color: "#2c2d72" },
  Dart: { Icon: SiDart, color: "#0175c2" },
  Kotlin: { Icon: SiKotlin, color: "#7f52ff" },
  Rust: { Icon: SiRust, color: "#000000" },
  React: { Icon: SiReact, color: "#149eca" },
  "Redux Toolkit": { Icon: SiRedux, color: "#764abc" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6db33f" },
  "MS SQL Server": { Icon: DiMsqlServer, color: "#cc2927" },
  Azure: { Icon: VscAzure, color: "#0078d4" },
  "Azure Functions": { Icon: VscAzure, color: "#0078d4" },
  Docker: { Icon: SiDocker, color: "#2496ed" },
  Jest: { Icon: SiJest, color: "#c21325" },
  "Node.js": { Icon: SiNodedotjs, color: "#5fa04e" },
  Puppeteer: { Icon: SiPuppeteer, color: "#01b47d" },
  OpenGL: { Icon: SiOpengl, color: "#5586a4" },
  "NVIDIA PhysX": { Icon: SiNvidia, color: "#76b900" },
  WebAssembly: { Icon: SiWebassembly, color: "#654ff0" },
  "SFML.NET": { Icon: SiSfml, color: "#8cc445" },
  WPF: { Icon: SiDotnet, color: "#512bd4" },
  Flutter: { Icon: SiFlutter, color: "#02569b" },
  SQLite: { Icon: SiSqlite, color: "#0f80cc" },
  "Windows TSF": { Icon: FaWindows, color: "#0078d4" },
  Unity: { Icon: SiUnity, color: "#000000" },
};
