(function($) {
    'use strict';

    function Tooltip(el) {
        this.$el = $(el);
        this._generate();
    }

    Tooltip.prototype._generate = function() {

        var _this = this;
        
        this.$toolTip = $('<div>Tooltip</div>').css('position', 'absolute');

        $('body').append(this.$toolTip);

        this._setColor('red');
        
        this.$initialized = true;

        this.$el.mousemove(elMouseMove);

        function elMouseMove(e) {
            console.log("Mouse Moveed" + e);
            _this.$toolTip.css({left: e.pageX, top: e.pageY});
        }
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