# viewer
The files required to run are in /dist

Edit the endpoints.json file in /dist to add endpoints to query,  this file has to be valid json with quoted key names and no extraneous commas after the last array item.
```
{ 
"data" :[
  {
  "name":"Some name for endpoint",
  "url":"http://some/endpoint/with/no/trailing/slash"
  },
  ...
 
  ]
}

```
Changes to the endpoints.json file in /dist will be lost if you rebuild so make sure and back that file up or add the changes to /public/endpoints.json before rebuilding.
 
 




# You can skip all of the below unless you want to change anything

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd viewer`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
