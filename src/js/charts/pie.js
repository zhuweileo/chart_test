/**
 * Created by cennavi on 2017/5/19.
 */
import echarts from "echarts/lib/echarts"
import "echarts/lib/chart/pie"
import "echarts/lib/component/legend"
import "echarts/lib/component/title"
import "echarts/lib/component/tooltip"

export default function () {

// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pie'));

// 指定图表的配置项和数据
    var dataOption = {
        tooltip: {
            trigger: 'item',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:"{b}:{c}"
        },
        title: {
            text: "重庆市各区县在线车辆数量统计"
        },
        legend: {
            data: [
                '渝中区',
                '江北区',
                '双桥区',
                '巴南区',
                '南川区'
            ]
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data: [
                    {value: 235, name: '渝中区'},
                    {value: 274, name: '江北区'},
                    {value: 310, name: '双桥区'},
                    {value: 335, name: '巴南区'},
                    {value: 400, name: '南川区'}
                ]
            }
        ]
    };

//样式配置
    var styleOption = {
        backgroundColor: "rgba(0,0,0,.5)",
        grid:{
          left:10
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
            right: "3%",
            top: "5%",
            itemWidth: 7,
            itemHeight: 7,
            // orient:"vercital",
            backgroundColor:"rgba(255,255,255,.2)",
            width:150
        },
        series: {
            label: {
                normal: {
                    show: false
                },
                emphasis:{
                    show:true
                }
            },
            labelLine:{
                normal: {
                    show: false
                },
                emphasis:{
                    show:true
                }
            }
        }
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(dataOption);
    myChart.setOption(styleOption);
}

