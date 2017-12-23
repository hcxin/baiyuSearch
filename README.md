# baiyuSearch
### 初衷

想做个和简书一样的搜索插件。

### baiyuSearch.js介绍
baiyuSearch是一个依赖jquery的仿简书的搜索插件，为增强用户体验而开发，体积极小，可配置性高。源码地址: https://github.com/hcxin/baiyuSearch

### 兼容性
支持全部主流浏览器。


### 使用
可以直接用script标签引入。

```javascript
<!-- 这是控制样式的文件，可按需修改 -->
    <link rel="stylesheet" href="css/iconfont.css">
    <link rel="stylesheet" href="css/baiyuSearch.css">
<!-- 这是依赖 -->
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<!-- 这是我们的插件-->
<script src="js/baiyuSearch.js"></script>
```

你的dom结构是这样的

```html
<div class="header-container">

    <div id="search-container" style="position: relative;width: 300px; margin-left: 60%;">
        <input id="searchInput" placeholder="搜索" class="search-input">
        <a id="iconContent" class="icon-content" href="javascript:void(0);"><i class="iconfont icon-search"></i></a>
        <div class="search-menu angela-wrapper" id="searchMenu">
            <div class="menu-notice"><span class="hot-label">热门搜索</span>
                <span id="refreshContainer" class="refresh-container">
                                <i id="refreshIcon" class="iconfont icon-shuaxin refresh-icon-btn"></i> <span>换一批</span></span>
            </div>
            <div class="advise-tag-container">
                <div id="first-advise-container">
                </div>
                <div id="second-advise-container">
                </div>
                <span id="advise-tag-template" style="display: none;" class="advise-tag advise-tag-transform"></span>
            </div>
        </div>
    </div>

</div>
```

### 用法
下面是js的用法

```javascript
    $(function () {
        //初始化插件
        $.angelaScroll();
    });
```

下面是自定义参数的用法

```javascript
    $(function () {
        var firstTagArrays = ["张学友", "张国荣", "周杰伦"];
        var secondTagArrays = ["angela", "白玉", "拿铁", "海棠"];
//        //初始化插件
        $.baiyuSearch({
            firstAdviseTags: firstTagArrays,
            secondAdviseTags: secondTagArrays,
            //tag旋转配置 （rotateX 为沿着x轴旋转，rotateY为沿着y轴旋转）
            rotateX: false,
            rotateY: true,
            //刷新点击后触发
            refreshClick: function (reset) {
                console.log("refresh click !!");
                //call your function
                resetYourData(reset);
            },
            //tag点击后触发
            tagClick: function (value) {
                console.log("tag click !!");
                alert(value);
            },
            //搜索触发回调
            searchClick: function (value) {
                console.log("search click !!");
                alert(value);
            }
        });

        //把你的新数据传递给插件
        resetYourData = function (reset) {
            var newFirstTagArrays = ["王菲", "zyk", "凤凰传奇", "白玉"];
            var newSecondTagArrays = ["张学友", "haichen", "周杰伦"];
            reset(newFirstTagArrays, newSecondTagArrays);
        };
    });
```

### 其他说明
