<!-- 饼图 -->
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
      pieData:[
        {
          name:'淘宝',
          value:16050
        },
        {
          name:'京东',
          value:10050
        },
        {
          name:'唯品会',
          value:6050
        },
        {
          name:'拼多多',
          value:6050
        },
        {
          name:'聚美优品',
          value:850
        },
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {
    let echartsContent = this.$refs.box;
    console.log(echartsContent);
    let myEcharts = mEcharts.init(echartsContent);

    //Options
    let options = {
      series:[{
        name:'饼图',
        type:'pie',
        data:this.pieData,
        label:{
          show:true,
          formatter:args=>args.name+":"+args.value+"("+args.percent+"%)"
        },
        //圆半径
        radius:'40%',
        //圆环效果
        // radius:[60,40],
        //南丁格尔图
        // roseType:"radius",

        //选中效果
        // selectedMode:'single',
        selectedMode:'multiple',
        //选中偏离距离
        selectedOffset:50
      }]
    }

    myEcharts.setOption(options)
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
  .box{
    width: 600px;
    height:600px;
  }
</style>