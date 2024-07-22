export const mostPopularApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyDbYEj0e2cr7znf6041f2bG1uHPLKRMPUA`;
// for future reference youtube api documentation https://developers.google.com/youtube/v3/docs/videos/list

export const videoApi = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyDbYEj0e2cr7znf6041f2bG1uHPLKRMPUA`;

// will make showing all video  of particular channel
//https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=AIzaSyDbYEj0e2cr7znf6041f2bG1uHPLKRMPUA

export const suggestionApi =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
