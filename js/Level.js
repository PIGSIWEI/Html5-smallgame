/**
 * Level等级类
 * 每超过1000分自动升级
 * by PIGSIWEI
 */
(function(window) {
    'use strict';

    var levelArr = (function() {
        var arr = [0];
        for (var i = 0; i < 10; i++) {
            arr.push(Math.pow(2, i) * 1000);
        }
        return arr;
    })();

    function Level() {
        this.canvas = new Canvas('level', 70, 60);
        this.level = 1;

        this._init();
    }

    Level.prototype = {
        constructor: Level,
        _init: function() {
            this._render();
        },
        _render: function() {
            this.canvas.drawText('Level ' + this.level);
        },
        checkLevel: function(score) {
            if (score >= levelArr[this.level]) {
                this.level++;
                this._render();
                return this.level;
            }
            return 0;
        }
    };

    window.Level = Level;
})(window);