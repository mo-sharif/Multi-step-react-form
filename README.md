# MyBrainSolutions Frontend Coding Challenge (React/Redux)

The goal of this coding challenge is to create a very simple questionnaire form. We are looking for good, organized, and modular code.

There are already some suggested npm packages (check them out in package.json). You are more then welcome to use whatever packages you are more comfortable with. You can delete all the packages (and everything else in package.json) and put in new ones if you want to.


## TECH
Please use the following tech:

* React
* Webpack
* Redux (optional)

Before starting to code, you will need to setup your own Webpack. Feel free to copy & modify a Webpack config you have used before.
Please don't use create-react-app or any other starter kits. We want to see how you start and organize the project, as much as we want to see great code.

## INSTRUCTIONS
* Fork this repo in Bitbucket
* Create an entry page that will just have a button (centered in the middle) that says "START YOUR CHECK-UP". This will be the initial route.
* Create another page that will house the questionnaire. This page should be accessible by "/assess" route.
* Check your email for an invitation from Zeplin and make sure you create an account at https://zeplin.io/ .
* Open the Zeplin link we shared with you, and replicate the designed components in code.
    * The questionnaire component should be able to display multiple sections, and each section should be able to display multiple questions.
    * The section indicator should match which section the user is at currently.
    * The Next button should only be enabled when all the questions in a section are answered.
    * Make sure to add a "PREV" button to let the user go back and edit their answers.
    * It is up to you how you want to store the data.
    * At the last section, instead of the "NEXT" button, create a "SUBMIT" button that console.logs the answers of the user.

## BONUS POINTS
These are optional, you don't have to do them. It'll help you earn bonus brownie points with us.

* Animations (CSS or otherwise)
* Mobile-Optimization

## TIPS
* Folders are always a great way to organize.
* Commit small & often, show your progress.
* Don't over-think or over-design. The code should be readable.
