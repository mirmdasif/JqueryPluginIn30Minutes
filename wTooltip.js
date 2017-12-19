(function($) {
    'use strict';

    function Tooltip(el, message) {
        this.$el = $(el);
        this.$message = message;
        this._generate();
    }

    Tooltip.prototype = {

        _generate : function() {

            var _this = this;
            
            this.$toolTip = $('<div></div>').text(this.$message)
                                            .css('position', 'absolute')
                                            .hide();

            $('body').append(this.$toolTip);

            this._setColor('red');

            this.$el.mousemove(elMouseMove);
            this.$el.hover(elMouseEnter, elMouseLeave);

            function elMouseMove(e) {
                _this.$toolTip.css({left: e.pageX + 3, top: e.pageY + 3});
            }

            function elMouseEnter() {
                _this.$toolTip.show();
            }

            function elMouseLeave() {
                _this.$toolTip.hide();
            }
        }, 
        
        _destroy : function() {
        
            this.$toolTip.remove();
            
            $.removeData(this.$el, 'wTooltip');
        },

        _setColor : function(color) {
            
            this.$toolTip.css('color', color);
        }
    };

    $.fn.wTooltip = function(message) {
        function get() {
            return $.data(this, 'wTooltip') || $.data(this, 'wTooltip', new Tooltip(this, message));
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