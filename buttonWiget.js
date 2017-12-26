$(function() {
    $.widget('asifhossain.buttonWidget', {
        _create: function() {
            this._button = $('<button>');
            this._button.text = 'My Widget Button';
            this._button.width = this.options.width;
            this._button.css({
                'background-color': this.options.color,
                'position': 'absolute',
                'left': '100px'
            });
            
            $(this.element).append(this._button);
        }
    });
});