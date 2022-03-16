//var vm = new Vue({
//    el: '#wrapper',
//    data: {
//        productList:[]
//    },
//    //過濾
//    filters: {
//    },
//    mounted :function(){
//        this.$nextTick(function(){//$nextTick用來指定vm
//            vm.cartView();
//        })
//    },
//    methods: {
//        //json
//        cartView : function(){
//            var _this=this;
//            this.$http.get('data/headImag.json',{'id':123}).then(function(res){
//                _this.productList = res.body.result.list;
//                _this.headImage();
//            });
//        },
//        headImage:function(){
//            console.log(212);
//            $('.single-item').slick({
//                //dots: true,
//                infinite: true,
//                speed: 300,
//                slidesToShow: 1,
//                adaptiveHeight: true,
//                autoplay: true,
//                autoplaySpeed: 2000
//            });
//        }
//
//    }
//})
//(function Read(){
//    $.get('data/headImag.json', {}, function(Json) {
//        if ( Json.status == true ) {
//            var $Data = Json.result.list;
//            var $html = '';
//            var $Replace = '';
//            var $Template = $('#headimg');
//            var $Content = $('#headimg').html();
//            $.each( $Data, function(k, v){
//                $Replace = $Content.replace(/\{Image\}/i, "<img src=" + v.headImage + " class='img-responsive' />");
//                $html += $Replace;
//            });
//            $Template.html($html);
//        }
//    }, 'json').done(function(){
//        $('#headimg').slick({
//            //dots: true,
//            //lazyLoad: 'ondemand',
//            infinite: true,
//            speed: 300,
//            slidesToShow: 1,
//            adaptiveHeight: true,
//            autoplay: true,
//            autoplaySpeed: 2000
//        });
//        $('.slick-list').height(440)
//    });
//
//    $.get('data/headNew.json', {}, function(Json) {
//        if ( Json.status == true ) {
//            var $Data = Json.result.list;
//            var $html = '';
//            var $Replace = '';
//            var $Template = $('#headNew');
//            var $Content = $('#headNew').html();
//            $.each( $Data, function(k, v){
//                $Replace = $Content.replace(/\{Image\}/i, "<img src=" + v.headNewImage + " class='img-responsive' />").replace(/\{title\}/i, v.headNewtitle).replace(/\{text\}/i, v.headNewtext);
//                $html += $Replace;
//            });
//            $Template.html($html);
//        }
//    });
//
//    $.get('manager.php?a=Index/MainPlay', {}, function(Json) {
//        if ( Json.status == true ) {
//            var $Data = Json.result.list;
//            var $html = '';
//            var $Replace = '';
//            var $headprice='';
//            var $Template = $('#headProduct');
//            var $Content = $('#headProduct').html();
//            $.each( $Data, function(k, v){
//                if(v.headprice){
//                    $headprice='$'+v.headprice;
//                }
//                $Replace = $Content.replace(/\{Image\}/i, "<img src=" + v.headImage + " class='img-responsive' />").replace(/\{title\}/i, v.headtitle).replace(/\{text\}/i, v.headtext).replace(/\{price\}/i, $headprice);
//                $html += $Replace;
//            });
//            $Template.html($html);
//        }
//    });
//
//
//    $.get('data/headvideo.json', {}, function(Json) {
//        if ( Json.status == true ) {
//            var $Data = Json.result.list;
//            var $html = '';
//            var $Replace = '';
//            var $Template = $('#headvideo');
//            var $Content = $('#headvideo').html();
//            $.each( $Data, function(k, v){
//                $Replace = $Content.replace(/\{text\}/i, v.text).replace(/\{video\}/i, "<video src=" + v.video + ">");
//                $html += $Replace;
//            });
//            $Template.html($html);
//        }
//    }).done(function(){
//        var $play = $('#headvideo i');
//        $play.on('click',function(){
//            var _this=$(this)
//            _this.hide().next().find('video').get(0).play();
//            _this.next().find('video').get(0).onended=function(){
//                _this.show();
//                this.currentTime = 0;
//            };
//        })
//    });
//
//})();

//$('#headimg').slick({
//    //dots: true,
//    //lazyLoad: 'ondemand',
//    infinite: true,
//    speed: 300,
//    slidesToShow: 1,
//    //adaptiveHeight: true,
//    //autoplay: true,
//    autoplaySpeed: 2000
//});


function showslider(){
    var slideshow = document.getElementById('slideshow');
    if(!slideshow){
        return;
    }
    var lis = slideshow.querySelectorAll('li');
    var lisHeight = lis[0].offsetHeight;
    var liLength = lis.length;
    var ul = slideshow.querySelector('ul');
    var slideIndex = 0;
    var animation = false;
    const animSpd = 750;

    showslidesinit();

    function showslidesinit(){
        //liWidth
        for(var i=0; i<liLength; i++){
            lis[i].style.left = (100*i)+'%';
        }

        //slideshowheight
        slideshow.style.height = lisHeight+'px';

        //dotDiv
        var dotDiv = document.createElement('div');
        dotDiv.className='dotdiv';

        //prev
        var prev = document.createElement('div');
        prev.className='prev';
        prev.onclick = function(){
            now(-1);
        };
        dotDiv.appendChild(prev);

        //next
        var next = document.createElement('div');
        next.className='next';
        next.onclick = function(){
            now(1);
        };
        dotDiv.appendChild(next);

        //dot
        var dotOut = document.createElement('div');
        dotOut.className = 'dotOut';
        for (var i = 0; i < liLength; i++) {
            var dot = document.createElement('span');
            dot.className = 'dot';
            dot.index=i;
            dot.onclick = function(){
                showSlides(this.index);
            };
            dotOut.appendChild(dot);
        }

        dotDiv.appendChild(dotOut);
        slideshow.appendChild(dotDiv);

        showSlides(slideIndex);
    }

    function now(n){
        var now = (slideIndex+n+liLength)%liLength;
        showSlides(now);
    }

    function timeout() {
        animation = false;
    }

    function showSlides(n) {
        animation = true;
        setTimeout(timeout, animSpd);

        //當前Index
        slideIndex = n;

        //ul move
        ul.style.transform = 'translateX(-'+(100*n)+'%)';

        //dot
        var dots = slideshow.querySelectorAll('.dot');

        for(var i=0;i<dots.length;i++){
            dots[i].className = 'dot';
        }
        dots[n].className += " active";
    }

    window.addEventListener('resize',function(){
        lisHeight = lis[0].offsetHeight;
        slideshow.style.height = lisHeight+'px';
    });

    //鍵盤
//          window.onkeydown = function(e){
//              if (e.which === 39)  now(-1);
//              if (e.which === 37)  now(1);
//          }


    //滾輪事件
    //JQ
//     $(document).on('mousewheel DOMMouseScroll', function(e) {
//       // if (animation) return;
//       let delta = e.originalEvent.wheelDelta;

//       if (delta > 0 || e.originalEvent.detail < 0) now(-1);
//       if (delta < 0 || e.originalEvent.detail > 0) now(1);
//     });

    //JS
//          var EventUtil = {
//              addHandler: function (element, type, handler) {
//                  if (element.addEventListener) {
//                      element.addEventListener(type, handler, false);
//                  } else if (element.attachEvent) {
//                      element.attachEvent('on' + type, handler);
//                  } else {
//                      element['on' + type] = handler;
//                  }
//              },
//              getEvent: function (event) {
//                  return event ? event : window.event;
//              },
//              stopPropagation: function (event) {
//                  event = event || window.event;
//                  if (event.stopPropagation) {
//                      event.stopPropagation();
//                  } else {
//                      event.cancelBubble = true;
//                  }
//              }
//          };
//          EventUtil.addHandler(document, 'mousewheel', handleMouseWheel);
//          EventUtil.addHandler(document, 'DOMMouseScroll', handleMouseWheel);
//          function handleMouseWheel(event) {
//              EventUtil.stopPropagation(event);
//              event = EventUtil.getEvent(event);
//              var value = event.wheelDelta || -event.detail;
//              var delta = Math.max(-1, Math.min(1, value));
//              //console.log(delta < 0 ? 'down' : 'up');
//              if (animation) return;
//              delta < 0 ? now(-1) : now(1);
//          }




}

function showslider02(){
    var slideshow = document.getElementById('slideshow02');
    if(!slideshow){
        return;
    }
    var lis = slideshow.querySelectorAll('li');
    var liHeight;
//          var liWidth = lis[0].offsetWidth;
    var liWidth;
    var liLength = lis.length;
    var ul = slideshow.querySelector('ul');
    var SlidesNumber;

    init();

    function init(){


        //liWidth
        var slideshowW = slideshow.offsetWidth;
        var customNumber = -10;
        var lg = window.matchMedia( "(min-width: 1500px)" );
        var md = window.matchMedia( "(min-width: 992px)" );
        if (lg.matches) {
            liWidth = slideshowW/5;
            SlidesNumber = 2;
        }else if(md.matches){
            liWidth = slideshowW/3;
            SlidesNumber = 1;
        }else{
            liWidth = slideshowW;
            customNumber = +20;
        }
        liWidth = Math.floor(liWidth);
        for(var i=0; i<liLength; i++){
            lis[i].style.width = liWidth + 'px';
        }

        //ul
        ul.style.width = liWidth*liLength+'px';

        //slideshowheight
        liHeight = lis[0].offsetHeight;
        slideshow.style.height = liHeight+'px';

        $(slideshow).find('.control').remove();

        //prev
        var prev = document.createElement('div');
        prev.className='control previous';
        prev.style.marginLeft= -(liWidth/2) + customNumber + 'px';
        prev.onclick = function(){
            showSlides(-1);
        };
        slideshow.appendChild(prev);

        //next
        var next = document.createElement('div');
        next.className='control next';
        next.style.marginRight = -(liWidth/2) + customNumber + 'px';
        next.onclick = function(){
            showSlides(1);
        };
        slideshow.appendChild(next);


        showSlides(0);
    }

    function showSlides(n) {
        //ul move
        var $ul = $(ul).eq(0);
        var $liLast = $ul.find('li').last();
        var $liFirst = $ul.find('li').first();

        $ul.animate({
            left: liWidth*n + 'px'
        },200,function(){
            if(n==1){
                $liLast.prependTo($ul);
            }else if(n==-1){
                $liFirst.appendTo($ul);
            }
            $ul.css('left', '');
            active(SlidesNumber);
        });
        active(SlidesNumber);
    }

    function active(e){
        $('#slideshow02 ul li').removeClass('active').eq(e).addClass('active');
    }

    window.addEventListener('resize',function(){
        init();
    });
}

function showslider03(){
    var slideshow = document.getElementById('slideshow03');
    if(!slideshow){
        return;
    }
    var ul = slideshow.querySelectorAll('ul');
    var li = $(ul).find('li');
    var liLength = $(ul).find('li').length;
    var liActive =li.eq(0).addClass('active');

    //創建bottom
    var liClone = li.clone();
    //var liClone02 = li.clone();
    //var creater = $('<ul></ul>').append(liClone,liClone02);
    var creater = $('<ul></ul>').append(liClone);
    var bottomContent = $("<div></div>").append(creater).addClass('content');

    //bottomcontrol
    var bottom = $('<div></div>').addClass('bottom');
    var prev = $('<div></div>').addClass('prev control');
    var next = $('<div></div>').addClass('next control');
    bottom.append(bottomContent,prev,next);
    $(slideshow).append(bottom);

    var bottomUl,bottomLi,bottomLiWidth,bottomUiWidth,SlidesNumber=0;

    init();

    function init(){
        var bottom =  $(slideshow).find('.bottom');
        bottomUl =  bottom.find('ul');
        bottomLi =  bottom.find('li');
        bottomLiWidth = bottom.find('.content').width()/4;
        bottomUiWidth = bottomLiWidth*liLength;
        bottomUl.width(bottomLiWidth*(liLength*2));
        bottom.height(bottomLiWidth-10);
        bottomLi.removeClass('active');
        bottomLi.eq(0).addClass('active');
        bottomLi.map(function(i){
            if(i>4){
                i = i-liLength
            }
            $(this).width(bottomLiWidth-10).data('id',i);
        });
    }

    function showSlides(n) {
        console.log(n);
        if(n==-1){
            bottomUl.css('left', -bottomUiWidth);
            n = liLength-1;
            SlidesNumber = liLength-1;
        }
        bottomUl.animate({
            left: -(bottomLiWidth*n) + 'px'
        },200,function(){
            if(n==5){
                bottomUl.css('left', 0);
                n = 0;
                SlidesNumber = 0;
            }
            var id = bottomUl.find('li').removeClass('active').eq(n).addClass('active').data('id');
            $(li).removeClass('active').eq(id).addClass('active');
        });


        //ul move
        //var $ul = bottomUl;
        ////var $liLast = $ul.find('li').last();
        ////var $liFirst = $ul.find('li').first();
        //console.log(n);
        //bottomUl.animate({
        //    left: -(bottomLiWidth*n) + 'px'
        //},200,function(){
        //    //if(n==5){
        //    //    $ul.css('left', 0);
        //    //}else if(n==-1){
        //    //    $ul.css('left', bottomLiWidth*liLength);
        //    //}
        //    //active(0);
        //});
        //var now = (slideIndex+n+liLength)%liLength;
        //console.log(SlidesNumber = (SlidesNumber+n+liLength)%liLength)-4;

        //console.log(n);
        //console.log(SlidesNumber);

        //$(li).removeClass('active').eq(SlidesNumber).addClass('active');

    }

    //function active(e){
    //    var bottomUlIndex = bottomUl.find('li').removeClass('active').eq(e).addClass('active').data('id');
    //    //$(li).removeClass('active').eq(bottomUlIndex).addClass('active');
    //}

    function now(n){

        //var now = (SlidesNumber+n+liLength)%liLength;
        //SlidesNumber = now;
        SlidesNumber = SlidesNumber + n;
        //showSlides(now);
        showSlides(SlidesNumber);
    }


    $(bottomLi).on('click',function(){
        $(this).siblings().removeClass('active');
        var id = $(this).addClass('active').data('id');
        console.log(id);
        showSlides(id);
        //$(li).removeClass('active').eq(id).addClass('active');
    })
    $(prev).on('click',function(){
        now(-1);
    })
    $(next).on('click',function(){
        now(1);
    })
    window.addEventListener('resize',function(){
        init();
    });
}

function scrollTop(){
    window.addEventListener('scroll',scroll);window.onload = scroll();
    function scroll(){
        var scrolled = $(this).scrollTop();
        var windowHeight =  $(window).height();
        var scrollTop = $('.scrollTop,.scrollActive');
        if(!scrollTop){
            return;
        }
        scrollTop.each(function(){
            var $this = $(this);
            if(scrolled >= $this.offset().top - windowHeight * 0.8){
                $this.addClass("active");
            }else{
                $this.removeClass("active");
            }
        })
    }
}

function leftNav(){
    var leftNav = $('#leftNav');
    if(!leftNav){
        return;
    }
    leftNav.find('li').eq(0).find('ul').slideDown();
    leftNav.find('>li').click(function(){
        if(!$(this).hasClass('active')){
            leftNav.find('>li').removeClass('active').end().find('li>ul').slideUp();
            $(this).addClass('active').find('ul').slideDown();
        }
    })
}

function tabs(){
    var $tabs =$('#tabs');
    if(!$tabs){
        return;
    }
    var $tabLink = $tabs.find('.tab-head a');
    var tabPane = $tabs.find('.tab-pane');
    tabPane.eq(1).hide();
    $tabLink.on('click',function(e){
        e.preventDefault();
        var $this = $(this),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        tabPane.hide();
        $(target).show();
    })
}

function selectColor(){
    var link = $('.color-choose a');
    link.on('click',function(){
        link.removeClass('selected');
        $(this).addClass('selected');
    })
}

function number(){
    var $qtyWrap = $('.qty-wrap');
    var $link = $qtyWrap.find('.link');
    var $input = $qtyWrap.find('#quantity');
    var value;
    if(!$link){return;}
    $link.on('click',function(){
       if($(this).hasClass('qty-minus')){
           value = $input.val()-1;
       }else{
           value = $input.val()*1+1;
       };
       if(value <= $input.data('min')){
           $input.val('1');
       }else if(value >= $input.data('max')){
           $input.val('15');
       }else{
           $input.val(value);
       }
    })
}

function slickShow(){
    var $slickshow = $('#clickShow');
    if(!$slickshow){return;}
    var $title = $slickshow.find('.title');
    $title.on('click',function(e){
        e.preventDefault();
        $slickshow.find('.editor').slideUp();
        $(this).next('.editor').slideDown();
    })
}

function searchFn(e){
    var $searchObj = $('#searchObj');
    if(!$searchObj){return;}
    var $searchBtn = $('#searchBtn');
    var $searchResult = $searchObj.find('.search-result');
    var $close = $searchObj.find('.s-close');
    $searchBtn.on('click',function(e){
        e.preventDefault;
        $searchObj.addClass('active');
        $searchObj.animate({
            opacity: 1
        },500,function(){
            $searchResult.slideDown();
        });
    })
    $close.on('click',function(e){
        e.preventDefault;
        $searchResult.slideUp();
        $searchObj.animate({
            opacity: 0
        },500,function(){
            $searchObj.removeClass('active');
        });
    })
}

function browseProduct(){
    var $browseProductBtn = $('#browseProductBtn');
    if(!browseProduct){return;}
    var $productListBtn = $('#productListBtn');
    var $productListObj = $('#productListObj');
    var $sideArea = $productListObj.find('.side-area');
    var $sideAreaW = $sideArea.width();
    var $productList = $productListObj.find('#recent_list');
    var $cartList = $productListObj.find('#cart_list');
    var $close = $productListObj.find('.side-close');
    $browseProductBtn.add($productListBtn).on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('btn-recent')){
            $cartList.hide();
            $productList.show();
        }else{
            $cartList.show();
            $productList.hide();
        }
        $productListObj.addClass('active');
        $productListObj.animate({
            opacity: 1
        },200,function(){
            $('html').css({overflow:'hidden'});
            $sideArea.animate({
                right: 0
            },500);
        });
    })
    $close.on('click',function(e){
        e.preventDefault;
        $sideArea.animate({
            right: -$sideAreaW+'px'
        },500,function(){
            $productListObj.animate({
                opacity: 0
            },200,function(){
                $productListObj.removeClass('active');
                $('html').css({overflow:'auto'});
            });
        })

    })
}

function windowScrollTop(){
    $('.scrollUp').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            //scrollTop: $($(this).attr('href')).offset().top
            scrollTop: 0
        },1200)
    })
}

function banner(){
    var $banner = $('#banner');
    if(!$banner){return;}
    var _banners=[
        '<img src="img/ban1.jpg" alt=""/>',
        '<img src="img/ban2.jpg" alt=""/>',
    ];
    var _i = 0;
    setTimeout(function () {
        //callback
        var _callee = arguments.callee;
        _i = ++_i%_banners.length;
        $banner.animate({
            opacity:0
        },500,function(){
            $banner.html(_banners[_i]);
            $banner.animate({
                opacity:1
            },800,function(){
                setTimeout(_callee,8000);
            })
        })
    })
}

window.onload=function(){
    showslider();
    showslider02();
    showslider03();
    scrollTop();
    leftNav();
    tabs();
    selectColor();
    number();
    slickShow();
    searchFn();
    browseProduct();
    windowScrollTop();
    banner();
}