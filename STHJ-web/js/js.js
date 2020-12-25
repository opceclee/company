$(function() {

    $('nav ul li a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });


    $('.adva ul .li1').hover(function() {
        $(".al1").show();
    }, function() {
        $(".al1").hide();
    });
    $('.adva ul .li2').hover(function() {
        $(".al2").show();
    }, function() {
        $(".al2").hide();
    });
    $('.adva ul .li3').hover(function() {
        $(".al3").show();
    }, function() {
        $(".al3").hide();
    });
    $('.adva ul .li4').hover(function() {
        $(".al4").show();
    }, function() {
        $(".al4").hide();
    });
    $('.adva ul .li5').hover(function() {
        $(".al5").show();
    }, function() {
        $(".al5").hide();
    });
    $('.adva ul .li6').hover(function() {
        $(".al6").show();
    }, function() {
        $(".al6").hide();
    });









    $('.header li.abus').hover(function() {
        $('.header .join').show();
        $('.header li.abus u').addClass('arr-top');
    }, function() {
        $('.header .join').hide();
        $('.header li.abus u').removeClass('arr-top');
    });
    $('.mobile .abus').click(function() {
        $('.join').toggle();
        $(this).children('u').toggleClass('arr-top');
    });
    $('.mobile .abus h2').click(function() {
        $(this).children('u').toggleClass('arr-top');
    });
    $('.mao-nav ul li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.mobile ul li a').click(function() {
        $('.mobile ul').hide();
        $('.cancle').hide();
        $('.menu').show();
    });
    $('.mobile ul li.abus a').click(function() {
        $('.mobile ul').show();
        $('.cancle').show();
        $('.menu').hide();
    });
    $('.mobile .menu').click(function() {
        $('.mobile ul').show();
        $('.mobile ul li').fadeIn(600);
        $('.cancle').show(600);
        $('.menu').hide();
        $('.tou-mobile').css('background', '#000');
        $(".mobile ul").animate({

            height: '600px'
        }, 600);
    });
    $('.mobile .cancle').click(function() {
        $('.cancle').hide();

        $('.menu').show(600);
        $('.mobile ul li').fadeOut(600);
        $(".mobile ul").animate({
            height: '0'

        }, 600);
        $('.tou-mobile').css('background', '#000');


    });
    $('.chanpin1').click(function() {
        $('.chanpin1 .mpro').toggle();
        $(this).children('.xia').toggleClass('arr-top');
        return false;

    });
    $('.chanpin1 h2').click(function() {

        $(this).children('.xia').toggleClass('arr-top');

    });
    $('.chanpin2').click(function() {
        $('.chanpin2 .mpro').toggle();
        $(this).children('.xia').toggleClass('arr-top');
        return false;

    });
    $('.chanpin2 h2').click(function() {

        $(this).children('.xia').toggleClass('arr-top');

    });

    $('.chanlist').click(function() {

        $(this).children('.detailpro').toggle();
        $(this).children('u').toggleClass('arr-top');
        return false;
    });





    /*var dao_height = $('.tou-mobile').offset().top();*/
    // $(window).scroll(function() {
    //   	var this_scrollTop = $(this).scrollTop();
    //   if(this_scrollTop>60){
    //   	$('.tou-mobile').css('position','static');
    //   }else{
    //   	$('.tou-mobile').css('position','fixed');
    //   }
    // });

    $('.pnn').hover(function() {
        $('.con-act').css('display', 'none');
        $('.con-big').css({
            "color": "white",
            "background": "url('images/plan1.jpg')",
            "background-size": "100%",
            "transform": "scale(1)"
        });
        $('.con-hid').css('display', 'block');
    }, function() {
        $('.con-act').css('display', 'block');
        $('.con-big').css({
            "color": "white",
            "background": "linear-gradient(#0056b7, #41a3ff)",

            "transform": "scale(1.1)"
        });
        $('.con-hid').css('display', 'none');

    });




    $('.col1').hover(function() {
        $(this).children('.event-link ').addClass('event-in');
    }, function() {
        var that = this;
        setTimeout(function() { $(that).children('.event-link ').removeClass('event-in'); }, 1000);

    });


    $('.child1').click(function() {
        $('.tab-con1').show();
        $('.tab-con2').hide();
        $('.child1').addClass('current');
        $('.child2').removeClass('current');
    });

    $("#row1").hover(function() {
        $("#intro").show();
    }, function() {
        $("#row1").hide();
    });
    $('.product-li').hover(function() {
        $('.product-li a.chan').addClass('active');
        $('.product-li .proNav').show();
    }, function() {
        $('.product-li a.chan').removeClass('active');
        $('.product-li .proNav').hide();
    });
    $('.solve-li').hover(function() {
        $('.solve-li a.chan').addClass('active');
        $('.solve-li .proNav').show();
    }, function() {
        $('.solve-li a.chan').removeClass('active');
        $('.solve-li .proNav').hide();
    });

    $('.pro-types h2').hover(function() {
        $(this).addClass('active').siblings().removeClass('active');

    });
    $('.pro-types h2:nth-child(1)').hover(function() {
        $('.pro-content li:nth-child(1)').addClass('active').siblings().removeClass('active');

    });
    $('.pro-types h2:nth-child(2)').hover(function() {
        $('.pro-content li:nth-child(2)').addClass('active').siblings().removeClass('active');

    });
    $('.pro-types h2:nth-child(3)').hover(function() {
        $('.pro-content li:nth-child(3)').addClass('active').siblings().removeClass('active');

    });
    $('.pro-types h2:nth-child(4)').hover(function() {
        $('.pro-content li:nth-child(4)').addClass('active').siblings().removeClass('active');

    });
    $('.pro-types h2:nth-child(5)').hover(function() {
        $('.pro-content li:nth-child(5)').addClass('active').siblings().removeClass('active');

    });
    $('.pro-types h2:nth-child(6)').hover(function() {
        $('.pro-content li:nth-child(6)').addClass('active').siblings().removeClass('active');

    });
    $('.pro-types h2:nth-child(7)').hover(function() {
        $('.pro-content li:nth-child(7)').addClass('active').siblings().removeClass('active');

    });
    $('.pro-types h2:nth-child(8)').hover(function() {
        $('.pro-content li:nth-child(8)').addClass('active').siblings().removeClass('active');

    });

    // $('.nt span').hover(function() {
    //     console.log(0);
    //     $(this).addClass('active').siblings().removeClass('active');

    // });



    /* $(".jishu-h1").hover(function(){
    	 $(".line").animate({
                    'width' : '0'
                },'2000');
            },function(){
                $(".line").animate({
                    'width' : '60px'
                },'2000');
    	   });*/

    $("#mem1").hover(function() {
        $("#intro").show();

        $(".line").addClass("line")
    }, function() {
        $("#intro").hide();


    });
    $("#mem2").hover(function() {
        $("#intro1").show();

        $(".line").addClass("line")
    }, function() {
        $("#intro1").hide();

    });
    $("#mem3").hover(function() {
        $("#intro2").show();

        $(".line").addClass("line")
    }, function() {
        $("#intro2").hide();

    });
    $("#mem4").hover(function() {
        $("#intro3").show();

        $(".line").addClass("line")
    }, function() {
        $("#intro3").hide();

    });
    $("#mem5").hover(function() {
        $("#intro4").show();

        $(".line").addClass("line")
    }, function() {
        $("#intro4").hide();
    });


    $('.right-btn').click(function() {
        $(".pro ul").animate({ marginLeft: "-1140px" }, 600, function() {
            $(".pro ul>li").eq(0).appendTo($(".pro ul"));
            $(".pro ul").css('marginLeft', '0px');
        });
    })
    $('.left-btn').click(function() {
        $(".pro ul").css('marginLeft', '-1140px');
        $(".pro ul>li").eq(3).prependTo($(".pro ul"));
        $(".pro ul").animate({ marginLeft: "0px" }, 600);
    });

})