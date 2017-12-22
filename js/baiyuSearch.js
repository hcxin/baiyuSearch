$(function () {
    //搜索框菜单控制
    $("#searchInput").focus(function () {
        $("#searchMenu").show();
    }).blur(function () {
        //$("#searchMenu").hide();
    });

    var rotateDeg = 0;
    $("#refreshContainer").click(function () {
        rotateDeg = rotateDeg + 360;
        $("#changeText").css("transform", 'rotate(' + rotateDeg + 'deg)');
        $("#changeText").css("-webkit-transform", 'rotate(' + rotateDeg + 'deg)');
        initAdviseTags();
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

    var initAdviseTags = function () {
        var firstTagArrays = ["猫途","救助","送养","领养"];
        $("#first-advise-container").empty();
        $.each(shuffle(firstTagArrays), function (index, item) {
            var $adviseTagTemplate =  $("#advise-tag-template").clone();
            $adviseTagTemplate.text(item);
            $adviseTagTemplate.mouseover(function () {
                $(this).addClass("advise-tag-highlight");
            }).mouseout(function () {
                $(this).removeClass("advise-tag-highlight");
                $(this).addClass("advise-tag-highlight-reset");
            }).click(function () {
                console.log($(this).text());
            });

            $("#first-advise-container").append($adviseTagTemplate);
            $adviseTagTemplate.show();
        });

        var rotateXDeg = 0;
        var secondTagArrays = ["快活呀","猫的世界","世界和平"];
        $("#second-advise-container").empty();
        $.each(shuffle(secondTagArrays), function (index, item) {
            var $adviseTagTemplate =  $("#advise-tag-template").clone();
            $adviseTagTemplate.text(item);
            $adviseTagTemplate.mouseover(function () {

                $(this).addClass("advise-tag-highlight");
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

    initAdviseTags();

});