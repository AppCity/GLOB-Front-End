//Configuration for NEXT Js
// Increase the max num of event listeners to support image optimization.
// @see {@link https://bit.ly/2ST9m2w}
process.setMaxListeners(50);

const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  webp: {
    preset: "default",
    quality: 100,
  },
  images: {
    domains: [
      "www.brandinginasia.com",
      "e0.365dm.com",
      "digitaltree.ai",
      "i.pcmag.com",
      "itchronicles.com",
      "www.healtheuropa.eu",
      "cdn.luxe.digital",
      "m.atcdn.co.uk",
      "www.silverkris.com",
      "avatarfiles.alphacoders.com",
      "neilpatel.com",
      "i1.wp.com",
    ],
  },
  target: "serverless",
});
