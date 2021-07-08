<!-- 仪表盘 -->
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
      series:[{
        name:'仪表盘',
        type:'gauge',
        data:[{
            value:390,
            itemStyle:{
              color:'pink'
            }
          }
         /*  ,{
            value:190
          } */
          ],
        // label:{
        //   show:true,
        //   formatter:args=>args.name+":"+args.value+"("+args.percent+"%)"
        // },
        // min:100,
        max:450,
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