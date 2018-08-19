# willtyler98.github.io

This is my personal website. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Organization

The static web files generated by Angular are pushed to the **master** branch using [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages), a convienient tool that helps developers build their Github Pages with Angular. In order to commit my build to **master**, I use `ngh --branch="master" --dir=dist/willtyler98/`. This is done because in order to create a GitHub User Page, you must have an index.html file in the master branch.

The **angular** branch contains the actual Angular CLI project and source files.

## Using particles.js in Angular CLI 6

1. Load the particles script in the body of the index.html in your project. See index.html on branch **angular**.
2. Place a particles.json file in your assets folder. You can use the one I made or configure your own settings at <https://vincentgarreau.com/particles.js/>.
3. Create a component with `ng generate component particles`.
4. Have a look at my particles component files to go about loading the particles. You may want to adjust the CSS depending on how you want the particles to appear.
5. Finally, place an `<app-particles>` tag wherever you'd like the particles to load. I recommend only loading the particles once as I did in my root component.

## Room for Improvement

* I am not completely satisfied with the look of the about me page. It could use some smoother styles / improvements.
