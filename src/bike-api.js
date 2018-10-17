var Promise = require('es6-promise').Promise;

export class StolenBikeList {
  getStolenBikes() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen&access_token=ddf0cccea600221aeb4d81540580b81db8fd9e71273009fc7a126334fdbae318`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
