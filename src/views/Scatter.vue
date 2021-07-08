<!-- 散点图 -->
<template>
  <div>
    <!-- <h1>HelloWorld</h1> -->
    <div class="box" ref="box"></div>
  </div>
</template>

<script>
const mEcharts = require('echarts') 
const scatterData = require('@/assets/static/data/scatter.json')
const scatterData2 = require('@/assets/static/data/scatter2.json')
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
        text:'',
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
        data:['四川','湖南']
      },

      //缩放条
      dataZoom:[{
        type:'slider', // slider | inside
        xAxisIndex:0,
        start:0,
        end:100
      },{
        type:'slider',
        yAxisIndex:0,
      }],

      //
      xAxis:{
        type:"value",
        //允许自动缩放
        scale:true
      },
      yAxis:{
        type:'value',
        //允许自动缩放
        scale:true
      },
      series:[{
        name:'四川',
        type:'scatter',
        data:scatterData,
        //显示数值
        label:{
          // show:true,
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

        //散点大小
        symbolSize:function(arg){
          if(arg[1]/arg[0]>10){
            return 30;
          }else if(arg[1]/arg[0]>5){
            return 20;
          }else if(arg[1]/arg[0]>3){
            return 10;
          }else{
            return 5;
          }
        },
        },
        {
        name:'湖南',
        type:'effectScatter',
        showEffectOn:'emphasis',    //emphasis 经过 | render 自动
        rippleEffect:{  
          scale:5                   //涟漪动画的大小
        },
        data:scatterData2,
        //显示数值
        label:{
          // show:true,
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

        //散点大小
        symbolSize:function(arg){
          if(arg[1]/arg[0]>10){
            return 30;
          }else if(arg[1]/arg[0]>5){
            return 20;
          }else if(arg[1]/arg[0]>3){
            return 10;
          }else{
            return 5;
          }
        }
        }
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