/**
 * Created by hcxin on December 22h, 2017.as a gift to my cat baiyu.
 */
;(function ($) {
    var defaults = {
        firstAdviseTags: [],
        secondAdviseTags: [],
        rotateX: false,
        rotateY: true,
        refreshClick: function () {
        },
        tagClick: function () {
        }
    };
    $.extend({
        baiyuSearch: function (options) {
            var options = $.extend(defaults, options);
            //搜索框菜单控制
            $(".search-input").focus(function () {
                $("#searchMenu").show();
            });
            $("#mainContainer").click(function () {
                $("#searchMenu").hide();
                event.stopPropagation();
            });

            $("#refreshContainer").click(function () {
                options.refreshClick(resetAdviseTags);
            });

            function shuffle(array) {
                var tmp, current, top = array.length;
                if (top) while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
                return array;
            }

            var rotateDeg = 0;
            var resetAdviseTags = function (firstAdviseTags, secondAdviseTags) {
                if (firstAdviseTags && firstAdviseTags.length > 0) {
                    options.firstAdviseTags = firstAdviseTags;
                }
                if (secondAdviseTags && secondAdviseTags.length > 0) {
                    options.secondAdviseTags = secondAdviseTags;
                }

                rotateDeg = rotateDeg + 360;
                $("#refreshIcon").css("transform", 'rotate(' + rotateDeg + 'deg)');
                var firstTagRotateDeg = 0;
                $("#first-advise-container").empty();
                $.each(options.firstAdviseTags, function (index, item) {
                    var $adviseTagTemplate = $("#advise-tag-template").clone();
                    $adviseTagTemplate.text(item);
                    $adviseTagTemplate.mouseover(function () {
                        $(this).addClass("advise-tag-highlight");
                        if (options.rotateX){
                            firstTagRotateDeg = firstTagRotateDeg + 360;
                            $(this).css("transform", 'rotateX(' + firstTagRotateDeg + 'deg)');
                        }
                        if (options.rotateY){
                            firstTagRotateDeg = firstTagRotateDeg + 360;
                            $(this).css("transform", 'rotateY(' + firstTagRotateDeg + 'deg)');
                        }

                        if (options.rotateX && options.rotateY){
                            firstTagRotateDeg = firstTagRotateDeg + 360;
                            $(this).css("transform", 'rotateZ(' + firstTagRotateDeg + 'deg)');
                        }

                    }).mouseout(function () {
                        $(this).removeClass("advise-tag-highlight");
                        $(this).addClass("advise-tag-highlight-reset");
                    }).click(function () {
                        options.tagClick($(this).text());
                    });

                    $("#first-advise-container").append($adviseTagTemplate);
                    $adviseTagTemplate.show();
                });

                var secondTagRotateDeg = 0;
                $("#second-advise-container").empty();
                $.each(options.secondAdviseTags, function (index, item) {
                    var $adviseTagTemplate = $("#advise-tag-template").clone();
                    $adviseTagTemplate.text(item);
                    $adviseTagTemplate.mouseover(function () {
                        $(this).addClass("advise-tag-highlight");
                        if (options.rotateX){
                            secondTagRotateDeg = secondTagRotateDeg + 360;
                            $(this).css("transform", 'rotateX(' + secondTagRotateDeg + 'deg)');
                        }
                        if (options.rotateY){
                            secondTagRotateDeg = secondTagRotateDeg + 360;
                            $(this).css("transform", 'rotateY(' + secondTagRotateDeg + 'deg)');
                        }

                        if (options.rotateX && options.rotateY){
                            secondTagRotateDeg = secondTagRotateDeg + 360;
                            $(this).css("transform", 'rotateZ(' + secondTagRotateDeg + 'deg)');
                        }
                    }).mouseout(function () {
                        $(this).removeClass("advise-tag-highlight");
                        $(this).addClass("advise-tag-highlight-reset");
                    }).click(function () {
                        options.tagClick($(this).text());
                    });

                    $("#second-advise-container").append($adviseTagTemplate);
                    $adviseTagTemplate.show();
                });
            };

            resetAdviseTags();
        }
    });
})(jQuery);
