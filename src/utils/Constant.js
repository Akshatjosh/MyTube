export const mostPopularApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyBxd27KF5gbH5bT7QD1dOlHWj5kTDA3ryo`;
// for future reference youtube api documentation https://developers.google.com/youtube/v3/docs/videos/list

export const videoApi = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyBxd27KF5gbH5bT7QD1dOlHWj5kTDA3ryo`;

// will make showing all video  of particular channel
//https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=AIzaSyDbYEj0e2cr7znf6041f2bG1uHPLKRMPUA

export const suggestionApi =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${}&key=AIzaSyDbYEj0e2cr7znf6041f2bG1uHPLKRMPUA
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyDbYEj0e2cr7znf6041f2bG1uHPLKRMPUA
