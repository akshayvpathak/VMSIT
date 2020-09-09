/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.vmsit = {
    attach: function (context, settings) {

    }
  };

})(jQuery, Drupal);
jQuery(document).ready(hideelement);
  function hideelement()
  {
    jQuery(".viewless").hide();
    jQuery(".productfeatures").hide(1000);

    if(window.matchMedia("(max-width: 767px)").matches)
    {
      jQuery(".button--add-to-cart").html("ADD");
    } 
  };
  jQuery(".viewmore").click(function(){
    jQuery(".productfeatures").show(1000);
    jQuery(".viewless").show(1000);
    jQuery(".viewmore").hide();
  }
  );
  jQuery(".viewless").click(function(){
    jQuery(".productfeatures").hide(1000);
    jQuery(".viewless").hide(1000);
    jQuery(".viewmore").show();
  }
  );