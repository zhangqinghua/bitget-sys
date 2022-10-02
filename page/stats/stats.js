// 解析原始数据




let option = {
    toolbox: {feature: {saveAsImage: {}}},
    xAxis: {type: 'category', data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27', '2017-10-28',
                                     '2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27', '2017-10-28']},
    yAxis: {type: 'value'},
    series: [{
        data: [// 开盘价、收盘价、最高价、最低价
            [20, 30, 40, 15],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [25, 38, 33, 40],
            [10, 38, 33, 40],
            [20, 30, 40, 15],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [25, 38, 33, 40],
            [10, 20, 33, 40],
        ],
        type: 'k',
        barMaxWidth: 10,
        itemStyle: {
            color: 'green',
            color0: 'red',
            borderColor: '#d87c7c',
            borderColor0: '#919e8b',
            normal: {
                color: '#6cb041',
                lineStyle:{
                    width: '5px'//设置线条粗细
                }
            }
        },
    },
    ],
};
layui.use(['layer', 'miniTab', 'echarts'], function () {
    var $       = layui.jquery,
        layer   = layui.layer,
        miniTab = layui.miniTab,
        echarts = layui.echarts;

    miniTab.listen();


    /**
     * 报表功能
     */
    var echartsRecords = echarts.init(document.getElementById('echarts-records'), 'walden');

    echartsRecords.setOption(option);

    // echarts 窗口缩放自适应
    window.onresize = function () {
        echartsRecords.resize();
    }

});
