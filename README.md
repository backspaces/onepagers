# What is this:

This is a single page repo showing how to integrate a model with a view.

It uses a new approach for drawing a model in the AS tests/ dir:

    import TwoDraw from 'https://backspaces.github.io/agentscript/tests/TwoDraw.js'

It works by creating a properties object describing how to "draw" the model.

It is very experimental and it is showing me lots of issues. That's what this is all about, right?

See the repo: https://github.com/backspaces/virus

Run the model using TwoView: https://backspaces.github.io/virus/

Add any queryString to use TwoDraw: https://backspaces.github.io/virus/?foo

# Init:

-   cd ~/src
-   mkdir virus
-   cd virus
-   code .
-   touch README.md

Then

-   copy/modify VirusModel.js index.html from AS;
-   server.js from Josh

Files are:

-   VirusModel.js: From agentscript/models, imports modified
-   index.html: Imports VirusModel, creates View & Draw options for run()
-   runModel.js: An async runner: run(ModelClass, ViewOptions, DrawOptions)

Also:

-   README.md // this file
-   server.js // Josh's http server

Run via:

-   node < server.js &
-   browser: http://localhost:9000/virus.html .. or whatever page you wan
-   Open console for debug info

# Workflow:

Turn into git repo:

```
git init
echo ' # ignore these in the repo
node_modules/
npm-debug.log
yarn-error.log
\*\*/.DS_Store' > .gitignore
```

Then

```
git add .
git commit -m "first commit"
```

Integrate with github:

```
https://github.com/backspaces/
    +: new repository .. virus
    https://github.com/backspaces/virus
git remote add origin https://github.com/backspaces/virus.git
git push -u origin master
<create ghpage in master>
    https://github.com/backspaces/virus/settings
    scroll down to GitHub Pages, source: master, theme:
to get page metadata locally:
    git pull origin master
```

See it here: https://backspaces.github.io/virus/

Rinse and repeat:

```
git add .
git status
git commit
git push -u origin master
```
