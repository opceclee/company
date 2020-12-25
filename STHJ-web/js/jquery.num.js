/**
 * Created by lizhenya on 2018/6/28.
 */

// 鏁板瓧鏁堟灉

$.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
        // 璁剧疆褰撳墠鍏冪礌鐨勯€夐」
        var settings = $.extend({}, $.fn.countTo.defaults, {
            from:            $(this).data('from'),
            to:              $(this).data('to'),
            speed:           $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals:        $(this).data('decimals')
        }, options);

        // 澶氬皯娆℃洿鏂扮殑鍊硷紝浠ュ強姣忎釜鏇存柊鐨勫€煎鍔犲灏�
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;

        // references & variables that will change with each update
        var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};

        $self.data('countTo', data);

        // 濡傛灉鍙互鎵惧埌鐜版湁鐨勯棿闅旓紝璇峰厛娓呴櫎
        if (data.interval) {
            clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);

        // 鐢ㄨ捣濮嬪€煎垵濮嬪寲鍏冪礌
        render(value);

        function updateTimer() {
            value += increment;
            loopCount++;

            render(value);

            if (typeof(settings.onUpdate) == 'function') {
                settings.onUpdate.call(self, value);
            }

            if (loopCount >= loops) {
                // 鍒犻櫎闂撮殧
                $self.removeData('countTo');
                clearInterval(data.interval);
                value = settings.to;

                if (typeof(settings.onComplete) == 'function') {
                    settings.onComplete.call(self, value);
                }
            }
        }

        function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue);
        }
    });
};

$.fn.countTo.defaults = {
    from: 0,               // 鍏冪礌寮€濮嬬殑鏁板瓧
    to: 0,                 // 鍏冪礌缁撴潫鐨勬暟瀛�
    speed: 1,           // 鍦ㄧ洰鏍囧彿鐮佷箣闂磋绠楀闀挎椂闂�
    refreshInterval: 0.5,  //  鏇存柊鍏冪礌鐨勯鐜�
    decimals: 0,           // 瑕佹樉绀虹殑灏忔暟浣嶆暟
    formatter: formatter,  // 澶勭悊绋嬪簭鐢ㄤ簬鏍煎紡鍖栨覆鏌撳墠鐨勫€�
    onUpdate: null,        // 姣忔鍏冪礌鏇存柊鏃剁殑鍥炶皟鏂规硶
    onComplete: null       // 鍏冪礌瀹屾垚鏇存柊鏃剁殑鍥炶皟鏂规硶
};

function formatter(value, settings) {
    return value.toFixed(settings.decimals);
}



// 鑷畾涔夋牸寮忓寲绀轰緥
$('#count-number').data('', {
    formatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
    }
});



$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {//500 鏍规嵁鏁板瓧涓婇潰鐨勫唴瀹� 璁＄畻楂樺害  婊氬埌姝ゅ尯鍩� 鏁板瓧寮€濮嬫粴鍔�
        //寮€濮嬫墍鏈夌殑璁℃椂鍣�
        $('.timer').each(count);
        $('.count-title').removeClass('timer');
    }
});



function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
}
