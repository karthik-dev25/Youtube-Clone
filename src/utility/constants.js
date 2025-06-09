const GOOGLE_API_KEY = "AIzaSyDx7yuGovM7KlvGulCLQvuHfJjaGlHvq0Y";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const Watch_Video_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  GOOGLE_API_KEY + "&videoId=" ;

  export const YOUTUBE_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

  export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=videos&key=" + GOOGLE_API_KEY + "&q=" 
