<!-- 折线图 -->
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
        data:['华为','小米','网络访问量(TB)']
      },

      //
      xAxis:{
        type:"category",
        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        //边缘(false为取消边缘即紧挨边缘)
        boundaryGap:false
      },
      yAxis:{
        type:'value',
        //自动缩放
        scale:true,
      },
      // ---------------
      series:[{
        name:'华为',
        type:'line',
        data:[200,180,100,30,40,580,20,60,40,20,500,230],
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
        // 平滑
        smooth:true,
        //使用堆叠图
        // stack:'all'
        },
        // --------------
        {
          name:'小米',
          type:'line',
          data:[100,50,20,60,10,300,10,30,20,10,200,50],
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
          //标记区间
          markArea:{
            data:[
              [
                {
                  xAxis:'1月'
                },
                {
                  xAxis:'2月'
                }
              ],
              [
                {
                  xAxis:'8月'
                },
                {
                  xAxis:'9月'
                }
              ]
            ]
          },
          // 平滑
          smooth:true,
          //线样式
          lineStyle:{
            color:"orange",
            type:'solid'   //solid | dotted | dashed
          },
          //包裹区域填充
          areaStyle:{
            color:'orange'
          },
          //使用堆叠图
          // stack:'all'
        },
        // ---------------
        {
          name:'网络访问量(TB)',
          type:'line',
          data:[501,506,495,497,505,510,499,496,502,500,511,500],
          label:{
            show:true,
            rotate:20,
            position:'inside'
          },
          //标记点
          markPoint:{
            data:[{
                type:'max',name:'访问最高'
              },
              {
                type:'min',name:'访问最低'
            }]
          },
          //标记线
          markLine:{
            data:[{
              type:'average',name:'平均访问值'
            }]
          },
          //标记区间
          markArea:{
            data:[
              [
                {
                  xAxis:'1月'
                },
                {
                  xAxis:'2月'
                }
              ],
              [
                {
                  xAxis:'8月'
                },
                {
                  xAxis:'9月'
                }
              ]
            ]
          },
          // 平滑
          smooth:true,
          //线样式
          lineStyle:{
            color:"orange",
            type:'dotted'   //solid | dotted | dashed
          },
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