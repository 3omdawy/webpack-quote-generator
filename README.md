# Webpack Configuration Project
Based on [this tutorial](https://www.youtube.com/watch?v=IZGNcSuwBZs), this project offers a simple project which uses webpack for bundling JS/SCSS/CSS files and minifying them

## Webpack advantages
Webpack allows you to split your JavaScript into separate modules in development (better for maintenance) while letting you compile those modules into a single bundle in production (better for performance).
1. Bundle JS modules and scripts to 1 file => better performance (instead of having many requests to the server)
2. Include styling files (e.g. SCSS / CSS / assets) into the bundled JS
3. Minify JS => better optimization
4. Generate HTML file from a template HTML => better to avoid keeping track of dependencies and includes
5. Avoid wrong caching by adding a hash to the file name
6. Have a server with automatic reload => easier development

## App Functionality
Simple quote generator based on [https://api.quotable.io/random](https://api.quotable.io/random)
![Quote](https://github.com/user-attachments/assets/f02597dc-e689-4526-9810-83d27cc9da64)


## Technical Highlights
* `sass-loader` / `css-loader` / `style-loader`: to be bundled inside the JS bundle file
* `HTMLWebpackPlugin`: to generate output HTML based on a template HTML file
* `Caching`: adding (contenthash) to filename to avoid caching an outdated file
* `WebpackDevServer`: to auto-reload the page on changes (for development phase only)
* `Source Maps`: provide a mapping between the original source code and bundled file (useful for debugging)
* `Babel Loader`: for browser backward compatibility
* `Asset Resource Loader`: for loading images from JS
* `TerserWebpackPlugin`: for JS minification
* `MiniCssExtractPlugin`: for CSS minification

## Steps
```
git clone https://github.com/3omdawy/webpack-quote-generator.git
cd webpack-quote-generator
npm install
npm run dev // in case of development
npm run build // to generate a build
```
