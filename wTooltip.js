(function($) {
    'use strict';
    $.fn.wTooltip = function() {
        console.log("wTooltip called on " + this[0].id);
        return this;
    };

    $.fn.opacity50 = function() {
        return $(this).css('opacity', 0.5);  
    }
})(jQuery);