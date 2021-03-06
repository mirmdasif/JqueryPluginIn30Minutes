(function ($) {
    'use strict';

    function Tooltip(el, option) {
        this.$el = $(el);
        this.option = option;

        this._generate();
    }

    Tooltip.prototype = {

        _generate: function () {

            var _this = this;

            this.$toolTip = $('<div></div>').css('position', 'absolute').hide();
            $('body').append(this.$toolTip);

            this._setOptions();

            this.$el.mousemove(elMouseMove);
            this.$el.hover(elMouseEnter, elMouseLeave);

            function elMouseMove(e) {
                _this.$toolTip.css({
                    left: e.pageX + 3,
                    top: e.pageY + 3
                });
            }

            function elMouseEnter() {
                _this.$toolTip.show();
            }

            function elMouseLeave() {
                _this.$toolTip.hide();
            }
        },

        _destroy: function () {

            this.$toolTip.remove();

            $.removeData(this.$el, 'wTooltip');
        },

        _setOptions: function () {
            for (var opt in this.option) {
                var optionValue = this.$el.attr('data-' + opt) || this.option[opt];
                var setter = 'set' + opt.charAt(0).toUpperCase() + opt.substring(1);
                if (this[setter]) {
                    this[setter](optionValue);
                }
            }
        },

        setColor: function (color) {

            this.$toolTip.css('color', color);
        },

        setTitle: function (title) {
            this.$toolTip.html(title);
        },

        setOpacity: function (opacity) {
            this.$toolTip.css('opacity', opacity);
        }
    };


    $.fn.wTooltip = function (option) {
        var defaults = {
            theme: 'classic',
            opacity: .8,
            color: 'red',
            title: 'Tooltip'
        };

        option = $.extend({}, defaults, option);

        function get() {
            return $.data(this, 'wTooltip') || $.data(this, 'wTooltip', new Tooltip(this, $.extend(true, {}, option)));
        }

        return this.each(get);
    };


    $.fn.opacity50 = function () {
        function get() {
            $(this).css('opacity', 0.5);
        }

        return $(this).each(get);
    }
})(jQuery);
