---
title: Building from Source
lastUpdated: true
---


# Building the app from source

To build Task Assistant from source ensure that Node and git are installed on your system. Task Assistant can be build in all the platforms supported by NPM including but not limited to Linux, Mac OS and Windows.

### Clone the Repository Locally
```bash 
git clone https://github.com/Mahinkumar/Task_assistant.git
cd Task_assistant
```

### Install NPM Packages
```bash
npm install
```

Now you can either choose to run a development server or build it. This is less optimized but offers realtime updates when code changes, Built servers are optimized but needs to be rebuilt on every change. 

### To run a development server
```bash
npm run dev
```

### To Build the site
```bash
npm run build
```


Builds will be availible in .next directory and can be hosted from there.