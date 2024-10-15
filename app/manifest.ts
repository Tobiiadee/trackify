import { MetadataRoute } from "next/types";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#ffffff",
    background_color: "#000000",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "/icons/icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "/icons/icon512_rounded.png",
        type: "image/png",
      },
    ],
    orientation: "any",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    name: "Trackify",
    short_name: "Trackify",
    start_url: "/",
    scope: "/",
  };
}
