export const projectIds = [
  "default",
  "space-shooter",
  "glitch-garden",
  "game-day",
  "calories-in",
  "portfolio",
  "nengine-editor",
  "university-projects",
] as const;
export type ProjectId = (typeof projectIds)[number];