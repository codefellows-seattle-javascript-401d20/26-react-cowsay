401 JS --  Lab 26 Cowsay
===

## Starting Your Webpack
* start: `npm run watch`

#### Project  
A `Generate Cowsay Lorem` app. One can click the site's `Click Me` button to generate an ASCII art cow speaking in random lorem ipsum.
###### Technical Overview
* Made with the react, react-dom, cowsay, and faker dependencies.
* Holds the application's view and state
* Has a property on the state called content
* Creates a view with the following display
  * A heading with the title "Generate Cowsay Lorem"
  * A Button that displays "click me"
    * `onClick` the button should generate new content on the app state using cowsay and faker
  * A pre tag that displays the App's state's content
