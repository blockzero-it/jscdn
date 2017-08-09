//<script src="CryptoPrice.js"></script>
//1.0 BTC = <coincap currency="bitcoin" fiat="usd">0.0</coincap>$
jQuery(document).ready(function($) {
  $.each($('coincap'), function() {
    var thisCoincap = $(this);
    try {
      var currency = thisCoincap.attr('currency').toLowerCase();
      var FIAT = thisCoincap.attr('fiat').toLowerCase();
      var APIv1 = 'https://api.coinmarketcap.com/v1/ticker/' + currency + '/?convert=' + FIAT;

      $.getJSON(APIv1, function(json) {
        if (json['error']) {
          thisCoincap.html('CoinNotFound');
          return;
        }

        var data = json[0]['price_' + FIAT];
        var price = 'CurrencyNotFound';

        if (data) {
          price = parseFloat(data).toFixed(2);
        }

        thisCoincap.html(price);
      }).fail(function() {
        thisCoincap.html('CoinNotFound');
      });
    } catch (err) {
      thisCoincap.html('CoinCapError');
    }
  });
});
