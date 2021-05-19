/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const renderTweets = function (tweets) {
    $("#tweets-container").empty();
    for (const tweet of tweets) {
      createTweetElement(tweet);
    }
  };

  const createTweetElement = function (tweet) {
    $("#tweets-container").prepend(`
    <article class="tweet">
          <header>
            <div class="tweet-user">
              <img src="${tweet.user.avatars}" alt="${
      tweet.user.name
    }'s avatar" />
              <p>${tweet.user.name}</p>
            </div>
            <p>${tweet.user.handle}</p>
          </header>
          <div class="tweet-body">
            <p>${tweet.content.text}</p>
          </div>
          <footer>
            <time>${timeago.format(tweet.created_at)}</time>
            <div class="icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </article>
    `);
  };

  $(".new-tweet form").submit(function (event) {
    event.preventDefault();
    const tweet = $(this).serialize();

    $.post("/tweets", tweet).then(() => loadTweets());
  });

  const loadTweets = function () {
    $.ajax("/tweets", { method: "GET" }).then(function (tweets) {
      renderTweets(tweets);
    });
  };

  loadTweets();
});
