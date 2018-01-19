/**
 * NextShape下一个方块
 * 通过canvas来获取下一个方块
 * by PIGSIWEI
 */
(function(window) {
    'use strict';

    function NextShape() {
        this.canvas = new Canvas('nextshape', 70, 60);

        this._init();
    }

    NextShape.prototype = {
        constructor: NextShape,
        _init: function() {
            this.rows = 4;
            this.cols = 6;
        },
        render: function(shape) {
            this.canvas.clear();
            shape.draw(this.canvas.context, 16); // 16*4 ~~ 70 , 16*6 ~~ 100
        }
    };

    window.NextShape = NextShape;
})(window);