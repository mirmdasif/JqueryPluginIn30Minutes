(function($) {
    'use strict';

    function Tooltip(el) {
        this.$el = el;
    }

    $.fn.wTooltip = function() {

        function get() {
            return $.data(this, 'wTooltip') || $.data(this, 'wTooltip', new Tooltip(this));
        }

        return this.each(get);
    };

    $.fn.opacity50 = function() {
        function get() {
            $(this).css('opacity', 0.5);
        }

        return $(this).each(get);  
    }
})(jQuery);