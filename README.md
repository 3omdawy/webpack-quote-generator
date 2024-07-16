# Webpack Configuration Project
Based on [this tutorial](https://www.youtube.com/watch?v=IZGNcSuwBZs), this project offers a simple project which uses webpack for bundling JS/SCSS/CSS files and minifying them

## Functionality
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
