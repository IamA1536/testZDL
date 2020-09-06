jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if (e.which == 3) {
            showMessage("秘密通道：<br /> <a href=\"\" title=\"首页\">首页</a>    <a href=\"\" title=\"订阅\">订阅</a> <a href=\"\" title=\"留言\">留言</a>", 10000);
        }
    });
    $("#spig").bind("contextmenu",
        function (e) {
            return false;
        });
});

jQuery(document).ready(function ($) {
    $("#message").hover(function () {
        $("#message").fadeTo("100", 1);
    });
});

jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
        $(".mumu").fadeTo("300", 0.3);
        msgs = ["又是一个小细节","抽啊，囤钻是没意义的，囤钻只会让你在沉船的时候更难受罢了","毛那么多分，你一定很快乐吧","十万个为什么，这憨憨怎么这么多问题","讲道理，现在三次元都不流行舔狗了，为什么还要放二刺螈来伤害肥宅", "没这卡你的弹珠就少一种颜色", "这个必抽，不抽我不知道你在玩什么", "为什么出货还要晒的，不是很懂，这游戏不是随便抽两发就有了吗", "原来是这样啊", "残疾人呢，怎么配在芳文说话", "我看泥潭又有人在婊春黑刀，讲道理，这期的春黑刀应该表扬才对", "主要纯爱的重点在剧情，18x部分就好像附赠的", "没这卡，你就少了一整块游戏体验，就好像别人比你多了个天赋树", "停一下，你怎么这么自信的，说自己是二等残废，少一张才是二等残废，你数数你几张卡？像不像个植物人"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});

jQuery(document).ready(function ($) {
    if (isindex) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 出刀了吗，报一下伤害', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + '你回头练练 ，明天多打点', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + '伤害太低了，不能高点吗', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' 轴你回头练练 ，明天多打点', 6000);
        } else {
            showMessage(visitor + '怎么那么多11点以后才出刀的', 6000);
        }
    } else {
        showMessage('记录犯罪过程', 6000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    },
        {
            queue: false,
            duration: 1000
        });
});


jQuery(document).ready(function ($) {

    window.setInterval(function () {
        msgs = [$("#hitokoto").text(), weather.c[0], weather.c[2], weather.c[5], weather.c[7]];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    },
        35000);
});

jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = [$("#hitokoto").text()];
        //if(weather.state)msgs.concat(weather.c);
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
        $(".spig").animate({
            left: document.body.offsetWidth / 2 * (1 + s[i1]),
            top: document.body.offsetheight / 2 * (1 + s[i1])
        },
            {
                duration: 2000,
                complete: showMessage(msgs[i])
            });
    },
        45000);
});


var spig_top = 50;
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f + 300
        },
            {
                queue: false,
                duration: 1000
            });
    });
});

jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click <= 4) {
                msgs = [weather.c[0], weather.c[2], weather.c[5], weather.c[7]];
            } else if (stat_click > 4) {
                msgs = ["讲道理，现在三次元都不流行舔狗了，为什么还要放二刺螈来伤害肥宅", "没这卡你的弹珠就少一种颜色", "这个必抽，不抽我不知道你在玩什么", "为什么出货还要晒的，不是很懂，这游戏不是随便抽两发就有了吗", "没这卡，你就少了一整块游戏体验，就好像别人比你多了个天赋树", "停一下，你怎么这么自信的，说自己是二等残废，少一张才是二等残废，你数数你几张卡？像不像个植物人"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["抽啊，囤钻是没意义的，囤钻只会让你在沉船的时候更难受罢了","没这卡你的弹珠就少一种颜色", "这个必抽，不抽我不知道你在玩什么", "为什么出货还要晒的，不是很懂，这游戏不是随便抽两发就有了吗", "原来是这样啊", "残疾人呢，怎么配在芳文说话", "我看泥潭又有人在婊春黑刀，讲道理，这期的春黑刀应该表扬才对", "主要纯爱的重点在剧情，18x部分就好像附赠的", "没这卡，你就少了一整块游戏体验，就好像别人比你多了个天赋树", "停一下，你怎么这么自信的，说自己是二等残废，少一张才是二等残废，你数数你几张卡？像不像个植物人"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
            var i1 = Math.floor(Math.random() * s.length);
            var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: document.body.offsetheight / 2 * (1 + s[i1])
            },
                {
                    duration: 500,
                    complete: showMessage(msgs[i])
                });
        } else {
            ismove = false;
        }
    });
});


function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
    });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x;
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if (x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
                ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null;
}
function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString()
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/"
}
