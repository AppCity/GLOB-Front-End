//Configuration for NEXT Js
// Increase the max num of event listeners to support image optimization.
// @see {@link https://bit.ly/2ST9m2w}
process.setMaxListeners(50);


const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  webp: {
    preset: 'default',
    quality: 100,
  },
  target: 'serverless'
});


  