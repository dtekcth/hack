Hack
====
Hackathon websites for dHack.


Installation
------------
You need npm installed to continue.
Run `npm install` to install the necessary tools to build the site.


Deploying
---------
TL;DR

	gulp && git checkout publish && cp -r build/* . && git add index.html
	css/ assets/ && git commit ... && git push dhack publish

We use gulp to minify, uglify etc. css, javascript and html.
To deploy run:

	gulp

which will fill the directory build/ with the files needed for deploy.
Checkout the publish branch and add the files from build/ as under the
current working directory, then push the publish branch to the dHack server
to make the changes live. (Should we use gulp-gh-pages instead?)

