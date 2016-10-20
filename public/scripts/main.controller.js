angular.module('giphyApp')
  .controller('MainController', MainController);

  function MainController(giphy) {
    var main = this;
    console.log('MainController loaded');

    main.randomGifs = [];
    main.searchGifs = [];

    console.log('about to call giphy.getRandomGifs');
    main.getRandomGifs = function(){
      main.randomGifs = [];

      var promise = giphy.getRandomGifs(main.selected);
      console.log('promise ', promise);
        promise.then(function(gifs) {
          main.randomGifs = gifs;
          console.log('main.randomGifs ',main.randomGifs);
        });
      };

    main.searchGifData = function(){
      main.searchGifs = [];

      var promise = giphy.searchGifData(main.selected);
      console.log('promise', promise);
        promise.then(function(gif) {
          main.searchGifs = gif;
          console.log('searchGifData', gif);
        });
      };
  };
