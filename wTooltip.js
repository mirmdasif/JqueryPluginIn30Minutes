(function($) {
    'use strict';

    function Tooltip(el) {
        this.$el = el;
        this.generate();
    }

    Tooltip.prototype.generate = function() {
        // Code here
    }

    $.fn.wTooltip = function() {
        // Code here
    };

    $.fn.opacity50 = function() {
        function get() {
            $(this).css('opacity', 0.5);
        }

        return $(this).each(get);  
    }
})(jQuery);