/**
 * Created by cennavi on 2017/5/19.
 */
import echarts from "echarts/lib/echarts"
import "echarts/lib/chart/bar"
import "echarts/lib/component/legend"
import "echarts/lib/component/dataZoom"
import "echarts/lib/component/title"
import "echarts/lib/component/tooltip"

export default function () {

// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('bar'));

// 指定图表的配置项和数据
    var dataOption = {
        tooltip: {
            trigger: 'item',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: "重庆市各区县四类车辆在线数量统计"
        },
        legend: {
            data: ["出租车", "网约车", "公交车", "快轨"]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true,

        },
        xAxis: [
            {
                type: 'category',
                data: ["1区", "1区", "1区", "1区", "1区", "1区", "1区", "1区", "1区", "1区"]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '出租车',
                type: 'bar',
                barWidth: 10,
                data: [320, 332, 301, 334, 390, 330, 320, 390, 330, 320]
            },
            {
                name: '网约车',
                type: 'bar',
                barWidth: 10,
                data: [320, 332, 301, 334, 390, 330, 320, 390, 330, 320]
            },
            {
                name: '公交车',
                type: 'bar',
                barWidth: 10,
                data: [320, 332, 301, 334, 390, 330, 320, 390, 330, 320]
            },
            {
                name: '快轨',
                type: 'bar',
                barWidth: 10,
                data: [320, 332, 301, 334, 390, 330, 320, 390, 330, 320]
            }

        ],
        dataZoom: [
            {
                type: 'slider',
                xAxisIndex: 0,
                start: 10,
                end: 60,
                zoomLock:true
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 10,
                end: 60,
                zoomLock:true
            }
        ]
    };

//样式配置
    var styleOption = {
        backgroundColor: "rgba(0,0,0,.8)",
        textStyle: {
            color: "#979797"
        },
        title: {
            textStyle: {
                color: "#fff"
            }
        },
        legend: {
            textStyle: {
                color: "#979797",
            },
            right: 0,
            top: "5%",
            itemWidth: 14,
            itemHeight: 14
        }
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(dataOption);
    myChart.setOption(styleOption);
}


