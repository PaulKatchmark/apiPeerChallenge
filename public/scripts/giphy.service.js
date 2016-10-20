angular.module('giphyApp')
  .service('giphy', GiphyAPIService);

  function GiphyAPIService($http) {
    var API = 'http://api.giphy.com/v1/gifs/';
    var key = 'api_key=dc6zaTOxFJmzC';
    var gifSearch = 'search?q='
    var space = ' ';

  this.getRandomGifs = function(){
    return $http.get(API + 'random?' + key)
        .then(function(response){
        return response.data.data.image_url;
        });
  };

  this.searchGifData = function() {
    return $http.get(API + gifSearch.replace(' ', '+') + '&' + key)
      .then(function(response){
        return response.data.data;
      });
  };
};
