layui.define(['layer'], function (exports) {
    "use strict";

    let dateUtils = {
         api:"http://167.179.79.96:8082"  //根据自己项目的端口而定
         // api:"http://127.0.0.1:8082"  //根据自己项目的端口而定
    }

    exports("http", dateUtils);
});
