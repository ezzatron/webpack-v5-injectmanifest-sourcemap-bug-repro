# Webpack v5 InjectManifest sourcemap bug

This is a repo for demonstrating a bug with `workbox-webpack-plugin`.

## Steps to repro

1. `yarn install`
2. `webpack`
3. Feed `dist/sw.js` and `dist/sw.js.map` into a [source map visualization tool] and see the [buggy output]

[source map visualization tool]: https://sokra.github.io/source-map-visualization/
[buggy output]: https://git.io/JeGZN
