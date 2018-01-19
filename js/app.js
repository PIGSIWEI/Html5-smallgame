/**
 * app说明
 * 基本get本地方法
 * 控制开始游戏和暂停操作
 * by PIGSIWEI
 */

(function(document) {
    var gameInst;

    function DomObject(dom) {
        this.dom = dom;
    };
    DomObject.prototype.get = function() {
        return this.dom;
    };
    DomObject.prototype.on = function(eventName, evenHandler) {
        this.get().addEventListener(eventName, evenHandler);

    };
    DomObject.prototype.css = function(styleKey, styleValue) {
        this.get().style[styleKey] = styleValue;
    };

    function $(selector, context) {
        return new DomObject((context || document).querySelector(selector));
    };

    function startGame() {
        ResourceManager.onResourceLoaded = function() {
            gameInst = new Tetris();
            gameInst.startGame();
        }
        ResourceManager.init();
    }

    function _init() {
        $('#btn-start').on('click', function(ev) {
            $('.start-container').css('display', 'none');
            $('.game-container').css('display', 'block');
            startGame();
        });
        $('#btn-game-pause').on('click', function(evt) {
            var el = evt.target;
            if (el.innerText === 'Pause') {
                el.innerText = 'Continue';
                gameInst.pause();
            } else {
                el.innerText = 'Pause';
                gameInst.resume();
            }
        });
    }
    document.addEventListener('DOMContentLoaded', function(ev) {
        _init();
    });
})(document);