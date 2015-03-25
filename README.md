# Videojs-UI-With-Angular.js
An example of how to create Videojs UI Controls with Angularjs and JQuery. For now it only implements a single component, and that will be found in my forked video.js repo at https://github.com/Spaceninja7u/video-angularwidget.js, and is declared as a dependency that bower will install for this repo. The point of this repo is to provide the project files for a blog entry of mine.

This project use a php Proxy to grab an rss feed containing video enclosures (from lifehacker.com) and converts the xml to JSON for us.

# Setting up dependencies
- Node.js -- [Download and install Node.js](http://nodejs.org/download/)
- grunt-cli -- Install grunt-cli globally so that you will have the correct version of grunt available for any project that needs it.

# To run this demo
- Clone this git repo to a folder under the webroot of a php server (for the proxy)
- run `npm install` (with root privileges)
- run `bower install` (as your regular self)

# Gruntfile.js
Grunt will handle the job of building dependencies with Google's closure library. But once you get the bower packages installed, the code should run right out of the box.
