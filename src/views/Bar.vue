<!-- 柱状图 -->
<template>
  <div>
    <!-- <h1>HelloWorld</h1> -->
    <div class="box" ref="box"></div>
  </div>
</template>

<script>
const mEcharts = require('echarts') 
export default {
  data () {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted() {
    let echartsContent = this.$refs.box;
    let myEcharts = mEcharts.init(echartsContent);

    //Options
    let options = {
      //
      title:{
        text:'2020年销售额(百万)',
        textStyle:{
          color:'red'
        },
        // borderWidth:5,
        // borderColor:'red',
        // borderRadius:10,
        // top:0,
        left:50
      },
      
      //
      tooltip:{
        trigger:'axis',   //  item | axis
        triggerOn:'click',  //click | mouseover
        // formatter:args=>args[0].name+":"+args[0].value
        // formatter:args=>console.log(args)
      },

      //
      toolbox:{
        feature:{
          saveAsImage:{}, //导出图片
          dataView:{},  //数据视图（可以修改数据并展示）
          restore:{},   //重置视图
          dataZoom:{},  //区域缩放
          magicType:{   //切换视图类型
            type:['bar','line']
          }
        }
      },

      //筛选
      legend:{
        data:['销售额(百万)','销售量(千)']
      },

      //表格边框
      grid:{
        show:true,
        borderWidth:1,
        borderColor:'yellow',
        left:50,
        top:50,
        width:600,
        height:300
      },

      //
      xAxis:{
        type:"category",
        data:['华为','小米','vivo','oppo','魅族','OnePlus']
      },
      yAxis:{
        type:'value'
      },
      series:[{
        name:'销售额(百万)',
        type:'bar',
        data:[1900,960,820,400,750,870],
        //显示数值
        label:{
          show:true,
          rotate:20,
          position:'inside'
        },
        //标记点
        markPoint:{
          data:[{
          type:'max',name:'销售最高'
          },
          {
            type:'min',name:'销售最低'
        }]
        },
        
        //标记线
        markLine:{
          data:[{
            type:'average',name:'平均值'
          }]
        },

        //柱宽度
        barWidth:'35%'
        },
        {
          name:'销售量(千)',
          type:'bar',
          data:[300,300,220,120,200,250],
          label:{
            show:true,
            rotate:20,
            position:'inside'
          },
          //标记点
          markPoint:{
            data:[{
                type:'max',name:'销售最高'
              },
              {
                type:'min',name:'销售最低'
            }]
          },
        
          //标记线
          markLine:{
            data:[{
              type:'average',name:'平均值'
            }]
          },
          //柱宽度
          barWidth:'35%'
        },
        ]
    }

    myEcharts.setOption(options)
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
  .box{
    width: 700px;
    height:400px;
  }
</style>