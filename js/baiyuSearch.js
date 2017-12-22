/**
 * Created by hcxin on December 22h, 2017.as a gift to my cat baiyu.
 */
;(function ($) {
    var defaults = {
        firstAdviseTags: [],
        secondAdviseTags: [],
        tagClickCallBack: function () {
        }
    };
    $.extend({
        baiyuSearch: function (options) {
            var options = $.extend(defaults, options);

            // //回到顶部
            // $(options.topBtn).click(function () {
            //     $.when($('body,html').animate({
            //         scrollTop: 0
            //     }, defaults.topSpeed)).then(options.topCallBack());
            // });
            //
            // //回到低部
            // $(options.bottomBtn).click(function () {
            //     $.when(
            //         $('body,html').animate({
            //             scrollTop: $(document).height() - $(window).height()
            //         }, defaults.bottomSpeed)).then(options.bottomCallBack());
            // });

            //搜索框菜单控制
            $("#searchInput").focus(function () {
                $("#searchMenu").show();
            }).blur(function () {
                //$("#searchMenu").hide();
            });

            var rotateDeg = 0;
            $("#refreshContainer").click(function () {
                rotateDeg = rotateDeg + 360;
                $("#refreshIcon").css("transform", 'rotate(' + rotateDeg + 'deg)');
                resetAdviseTags();
            });

            function shuffle(array) {
                var tmp, current, top =array.length;
                if(top) while(--top){
                    current =Math.floor(Math.random() * (top + 1));
                    tmp =array[current];
                    array[current] =array[top];
                    array[top] = tmp;
                }
                return array;
            }

            var resetAdviseTags = function () {
                var firstTagRotateDeg = 0;
                $("#first-advise-container").empty();
                $.each(options.firstAdviseTags, function (index, item) {
                    var $adviseTagTemplate =  $("#advise-tag-template").clone();
                    $adviseTagTemplate.text(item);
                    $adviseTagTemplate.mouseover(function () {
                        $(this).addClass("advise-tag-highlight");
                        firstTagRotateDeg = firstTagRotateDeg + 360;
                        $(this).css("transform", 'rotateY(' + firstTagRotateDeg + 'deg)');
                    }).mouseout(function () {
                        $(this).removeClass("advise-tag-highlight");
                        $(this).addClass("advise-tag-highlight-reset");
                    }).click(function () {
                        console.log($(this).text());
                    });

                    $("#first-advise-container").append($adviseTagTemplate);
                    $adviseTagTemplate.show();
                });

                var secondTagRotateDeg = 0;
                $("#second-advise-container").empty();
                $.each(options.secondAdviseTags, function (index, item) {
                    var $adviseTagTemplate =  $("#advise-tag-template").clone();
                    $adviseTagTemplate.text(item);
                    $adviseTagTemplate.mouseover(function () {
                        $(this).addClass("advise-tag-highlight");
                        secondTagRotateDeg = secondTagRotateDeg + 360;
                        $(this).css("transform", 'rotateY(' + secondTagRotateDeg + 'deg)');
                    }).mouseout(function () {
                        $(this).removeClass("advise-tag-highlight");
                        $(this).addClass("advise-tag-highlight-reset");
                    }).click(function () {
                        console.log($(this).text());
                    });

                    $("#second-advise-container").append($adviseTagTemplate);
                    $adviseTagTemplate.show();
                });
            };

            resetAdviseTags();
        }
    });
})(jQuery);
