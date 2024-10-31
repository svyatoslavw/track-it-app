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
  categories: () => "/categories",
  settings: () => "/settings",
  auth: () => "/auth",

  sitemap: () => "/sitemap.xml"
}
export const ROUTES = {
  HOME: "/",
  ANALYTICS: "/analytics",
  HABITS: "/habits",
  CATEGORIES: "/categories",
  SETTINGS: "/settings",
  FEEDBACK: "/feedback",
  ISSUE: "/issue",
  AUTH: "/auth"
}
