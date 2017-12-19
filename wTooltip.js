(function($) {
    'use strict';

    function Tooltip(el) {
        this.$el = el;
        this._generate();
    }

    Tooltip.prototype._generate = function() {
        
        this.$toolTip = $('<div>Tooltip</div>');

        $('body').append(this.$toolTip);

        this._setColor('red');
        
        this.$initialized = true;
    }

    Tooltip.prototype._destroy = function() {
        
        this.$toolTip.remove();
        
        $.removeData(this.$el, 'wTooltip');
    }

    Tooltip.prototype._setColor = function(color) {
        
        this.$toolTip.css('color', color);

        if(this.initialized) {
            console.log("Changed color of initialized object");
        }
    };

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