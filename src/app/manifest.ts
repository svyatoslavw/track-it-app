import type { MetadataRoute } from "next"

import { APP_DESCRIPTION, APP_NAME, DEFAULT_DIR, DEFAULT_LANG } from "@/shared/config"

export default function manifest(): MetadataRoute.Manifest {
  // Desktop.
  const SCREENSHOT_SIZE_DESKTOP = "2840x1560"
  const SCREENSHOT_FORM_FACTOR_DESKTOP = "wide"
  // Mobile.
  const SCREENSHOT_SIZE_MOBILE = "1125x2323"
  const SCREENSHOT_FORM_FACTOR_MOBILE = "narrow"
  const SCREENSHOT_MOBILE_SUFFIX = "mobile"
  // Desktop and mobile.
  const SCREENSHOT_TYPE = "image/png"

  return {
    name: APP_NAME.SHORT,
    short_name: APP_NAME.SHORT,
    description: APP_DESCRIPTION,
    lang: DEFAULT_LANG,
    dir: DEFAULT_DIR,
    id: "/",
    start_url: "/",
    display: "standalone",
    display_override: ["window-controls-overlay"],
    orientation: "portrait",
    background_color: "white",
    theme_color: "white",
    icons: [
      {
        src: "/images/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon"
      },
      {
        src: "/images/android-chrome-192x192.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
    // screenshots: [
    //   {
    //     src: "/images/screenshots/home.png",
    //     sizes: SCREENSHOT_SIZE_DESKTOP,
    //     type: SCREENSHOT_TYPE,
    //     // @ts-ignore
    //     form_factor: SCREENSHOT_FORM_FACTOR_DESKTOP,
    //     label: ROUTES.HOME
    //   },
    //   {
    //     src: "/images/screenshots/chart.png",
    //     sizes: SCREENSHOT_SIZE_DESKTOP,
    //     type: SCREENSHOT_TYPE,
    //     // @ts-ignore
    //     form_factor: SCREENSHOT_FORM_FACTOR_DESKTOP,
    //     label: ROUTES.ANALYTICS
    //   },
    //   {
    //     src: "/images/screenshots/home-mobile.png",
    //     sizes: SCREENSHOT_SIZE_MOBILE,
    //     type: SCREENSHOT_TYPE,
    //     // @ts-ignore
    //     form_factor: SCREENSHOT_FORM_FACTOR_MOBILE,
    //     label: `${ROUTES.HOME} ${SCREENSHOT_MOBILE_SUFFIX}`
    //   },
    //   {
    //     src: "/images/screenshots/categories-mobile.png",
    //     sizes: SCREENSHOT_SIZE_MOBILE,
    //     type: SCREENSHOT_TYPE,
    //     // @ts-ignore
    //     form_factor: SCREENSHOT_FORM_FACTOR_MOBILE,
    //     label: `${ROUTES.CATEGORIES} ${SCREENSHOT_MOBILE_SUFFIX}`
    //   }
    // ]
  }
}
