Hack
====
Hackathon websites for dHack.


Installation
------------
You need npm installed to continue.
Run `npm install` to install the necessary tools to build the site.


Deploying
---------
We use gulp to minify, uglify etc. css, javascript and html.
To deploy run:

	gulp

which will fill the directory build/ with the files needed for deploy.
Checkout the publish branch and commit the files in the build directory.
Then push publish branch to dHack server to deploy.
