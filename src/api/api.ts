export const fetchPosts = (subreddit: string) => (
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((response) => response.json())
    .catch(() => 'Error')
);
