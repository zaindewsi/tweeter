# Tweeter

Tweeter is a single-page Twitter clone that allows you to do share your thoughts in 140 chracters or less.

I built this app using HTML, CSS/SASS, JavaScript, jQuery and AJAX to render tweets on the front end. On the back end, I used Node and Express to run the server and handle the tweet database.

## Final Product

Here's a look at the Tweeter home page:

!["Home page on desktop"](https://github.com/zaindewsi/tweeter/blob/master/public/images/desktop-home.png)

Mobile view:

!["Home page on mobile](https://github.com/zaindewsi/tweeter/blob/master/public/images/mobile-home.png)

## Get Started

1. Fork or clone this repository to get the files.
2. Install dependencies using the `npm install` command or `npm i` for short.
3. Start the web server using the `npm run local` command to start nodemon. Alternatively, `npm start` will start the server without nodemon.
4. Go to <http://localhost:8080/> in your browser.
5. Click the 'Write a Tweet' button to access the new tweet area.
6. Start tweeting!

## Dependencies

- Express
- Node 5.10.x or above
- Body Parser
- Chance
- md5
- Timeago js

## Features

1. Allows users to send and view tweets.
2. New tweets section can be toggled to open and close with a smooth animation.
3. Tweeter is responsive to mobile, tablet, and desktop.
4. Performs error validation to determine if tweet is over 140 characters or if tweet is empty.
5. Quickly scroll to the top of the page with the arrow up button or by clicking the logo.
6. Smooth animations and buttons
7. Advanced CSS using SASS/SCSS
