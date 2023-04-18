const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.plugins.push(new NodePolyfillPlugin());

  /** Fixes warnings */
  // config.ignoreWarnings = [/Failed to parse source map/];

  /* adding resolve.fallback hide build errors but causes runtime error: 
    Cannot destructure property 'readFile' of 'fs_1.promises' as it is undefined.
  */

  // config.resolve.fallback = {
  //   ...config.resolve.fallback,
  //   module: false,
  //   dgram: false,
  //   dns: false,
  //   fs: false,
  //   http2: false,
  //   net: false,
  //   tls: false,
  //   child_process: false,
  // };


  console.log(JSON.stringify(config))
  return config;
});
