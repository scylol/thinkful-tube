$(function(){

var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyDD8n-uCr_ls7qk7aSqEFeSH7scMdZrr1k',
    q: searchTerm,
    maxResults: 20,
    type:'video'

  }
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
}


function displayYouTubeSearchData(data) {
  console.log(data);
  var resultElement = '';
  
  if (data.items) {
    data.items.forEach(function(item) {
    resultElement +="<li><a target='_blank' href='https://www.youtube.com/watch?v=" + item.id.videoId + "'><img class ='thumbnail-image'src='" 
     +  item.snippet.thumbnails.medium.url + "' /></a><a target='_blank' href='https://www.youtube.com/watch?v=" + item.id.videoId + "'><p class='title'>"
     + item.snippet.title + "</p></a></li>";
    });
  }
  $('.js-search-results ul').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYouTubeSearchData);
  });
}
  watchSubmit();
});


