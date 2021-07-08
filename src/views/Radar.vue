<!-- 雷达图 -->
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
      radarData:[
        {
          name:'性能',
          max:100
        },
        {
          name:'续航',
          max:100
        },
        {
          name:'散热',
          max:100
        },
        {
          name:'价格',
          max:100
        },
        {
          name:'外观',
          max:100
        },
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {
    let echartsContent = this.$refs.box;
    let myEcharts = mEcharts.init(echartsContent);

    //Options
    let options = {
      radar:{
        indicator:this.radarData,
        //最外层形状   circle polygon
        shape:'polygon'
      },
      series:[{
        name:'雷达图',
        type:'radar',
        data:[{
            name:"小米10",
            value:[80,90,60,95,88]
          },{
            name:"华为mate30Pro",
            value:[96,90,90,50,85]
        }],
        // label:{
        //   show:true,
        //   formatter:args=>args.name+":"+args.value+"("+args.percent+"%)"
        // },

        //阴影填充
        areaStyle:{},
        
      }]
    }

    myEcharts.setOption(options)
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
  .box{
    width: 400px;
    height:400px;
  }
</style>