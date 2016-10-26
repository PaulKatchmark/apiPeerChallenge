angular.module('giphyApp')
  .service('giphy', GiphyAPIService);

  function GiphyAPIService($http) {
    var API = 'http://api.giphy.com/v1/gifs/';
    var key = 'api_key=dc6zaTOxFJmzC';



  this.getRandomGifs = function(){
    return $http.get(API + 'random?' + key)
        .then(function(response){
        return response.data.data.image_url;
        });
  };


  this.search = function(query) {
    this.query = query.replace(' ', '+');
    return $http.get(API + 'search?' + key + '&q=' + query)
    .then(function(response) {
      console.log('Got a respone fromAPI', response);
      return response.data.data;
    });
  };

}
