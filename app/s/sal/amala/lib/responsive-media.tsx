import { createMedia } from "@artsy/fresnel";

const AmalaMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

export const mediaStyle = AmalaMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AmalaMedia;
