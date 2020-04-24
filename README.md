# What is this:

Hey, welcome!

This is a collection of one page AgemtScript models along with their views and additional tools from the [AgentScript repo](https://github.com/backspaces/agentscript).

Here's the onepagers repo: [https://github.com/backspaces/onepager](https://github.com/backspaces/onepager)

## Here's how to start a git project, like this one:

```
cd ~/src
mkdir onepagers
cd onepagers
touch README.md
copy/install a server for locally testing.
```

I grabbed a very simple & readable, server.js, from Redfish. You can copy it from the onepagers repo.

Run it via:

```
node < server.js &
browser: http://localhost:9000/\<my model\>.html
Open console for debug info
```

## Workflow:

Turn your directory into git repo:

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

## Integrate with github:

Go to your github account, for me https://github.com/backspaces/

Use the + button to add a new repo in my case onepagers. This creates [https://github.com/backspaces/onepagers](https://github.com/backspaces/onepagers)

Connect your local git repo with github:

```
git remote add origin https://github.com/backspaces/onepagers.git
git push -u origin master
```

Make your repo also a github page: go to: https://github.com/backspaces/onepagers/settings

scroll down to GitHub Pages, source: master, theme: set to one you like

Then to get page metadata locally:

    git pull origin master

See it here: [https://backspaces.github.io/onepagers/](https://backspaces.github.io/onepagers/)

Rinse and repeat:

```
git add .
git status
git commit
git push -u origin master
```
