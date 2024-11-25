export const SIDEBAR_TITlES = {
  HOME: "Home",
  ANALYTICS: "Analytics",
  HABITS: "Habits",
  CATEGORIES: "Categories",
  SETTINGS: "Settings",
  FEEDBACK: "Give Feedback",
  ISSUE: "Report Issue"
}

export const PUBLIC_ROUTES = {
  root: (url = "") => `${url ? "/" + url : ""}`,

  home: () => "/",
  analytics: () => "/analytics",
  habits: () => "/habits",
  categories: () => "/categories",
  settings: () => "/settings",
  feedback: () => "/feedback",
  issue: () => "/issue",
  auth: () => "/auth",

  sitemap: () => "/sitemap.xml"
}
export const ROUTES = {
  HOME: "/",
  ANALYTICS: "/analytics",
  HABITS: "/habits",
  EDIT_HABIT: "/habits/edit",
  CATEGORIES: "/categories",
  SETTINGS: "/settings",
  FEEDBACK: "/feedback",
  ISSUE: "https://github.com/svyatoslavw/track-it-app/issues",
  AUTH: "/auth"
}
