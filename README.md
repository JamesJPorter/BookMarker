## BookMarker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application is a web based text editor which offers offline persistence of functionality and content as well as local installation via the progressive web app framework. The application utilizes an integrated service worker and Cache API to ensure the aforementioned functionality. 

For a link to the apps relevant GitHub repository, see the following: https://github.com/JamesJPorter/Challenge-19-PWA

The Application has been deployed to Heroku and can be found at the following URL: 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [References](#references)
* [License](#license)

## Installation

* This application utilizes an indexDb for the storing of user data. 

* Any user of the application will need to download code from the GitHub Repo and open the code in their local environment (such as VSCode). 

* Once the code is loaded in your local environemnt, open your terminal and navigate into the root directory. Once there, enter "npm install -y". This command will install all node package dependencies including but not limited too: 
    - - Express.js
    - - webpack
    - - Babel
    - - CSS-loader 
    - - concurrently 
    - - IndexedDB      

## Usage

Utilizing the app includes initializing and building the app via the invocation of "npm run start". Utilizing this command will build the application and start your server.

Once the app has been started, open your web browser and navigate to localhost:3000. This page should load the text editor and appear just like the following: 

![Text Editor Landing Page](/Assets/Text-Editor-landing-page.png)

Once you have arrived at the above page, you may utilize the text editor however you see fit. You will notice that you can enter content into the editor, close it / navigate away from it and reopen it and all of your content persist. 

The same stand true for the text editors other feature, that being the option to install the application as a progressive web app. Utilizing the install button in the top left of the application you will be able to instal a dektop version of the app.

This version will maintain all previously entered content as well!
 
## License

This project is licensed under the terms of the MIT license.