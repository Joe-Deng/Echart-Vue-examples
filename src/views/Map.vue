<!-- 地图 -->
<template>
  <div>
    <!-- <h1>HelloWorld</h1> -->
    <div class="box" ref="box"></div>
    <button ref='backBtn' id="backBtn" v-if="showBackBtn" @click="initChinaMap" >Back</button>
  </div>
</template>

<script>
const mEcharts = require('echarts') ;
import mRequest from '@/../public/mRequest.js';
import {dataMap} from '@/assets/static/map/dataMap.js';
import {provinceID} from '@/assets/static/map/provinceID.js';
export default {
  data () {
    return {
      mapData:{},
      options:{},
      chinaMap:{},
      myEcharts:{},
      scatterData:[
        {
          value:[114,31]
        }
      ],
      showBackBtn:false,
      provinceMap:{}
    };
  },

  components: {},

  computed: {
    
  },

  mounted() {
    let echartsContent = this.$refs.box;
    this.myEcharts = mEcharts.init(echartsContent);

  //先请求数据
  console.log(mRequest)
  mRequest.request('/china').then(res=>{
    console.log(res);
    this.chinaMap = res.data;
    //只有当请求成功后才进行渲染
    this.initChinaMap();
    

    //为每个省份添加点击事件
    this.myEcharts.on('click',params=>{
      console.log(params)
      if(params.color){
        //有颜色说明点击是省级块
        provinceID.forEach(element => {
        if(params.name.match(element.name)){
          //如果匹配到了名字就发送网络请求
          mRequest.request('/province?id='+element.id).then(res=>{
            console.log(res)
            //这里保存请求到的所有省份信息，后面需要用来查询省份ID的
            this.provinceMap = res.data;
            mEcharts.registerMap('provinceMap',res.data);
            //准备渲染
            this.options={
              geo:[{
                type:'map',
                map:'provinceMap',
                //允许鼠标拖拽和滚轮放大
                roam:true,
                label:{
                  show:true,
                },
                //初始化缩放比例
                // zoom:10,
                //地图中心点
                center:res.data.features[0].properties.center,
              }]        
            }
            //开始绘图
            this.myEcharts.setOption(this.options)
            //让按钮出现
            this.showBackBtn = true;
          })
        }
      });
      }else{
        //没颜色说明是市级块
        //查询provinceMap（根据名字）
        let name = params.name;
        let index = this.provinceMap.features.findIndex(item=>item.properties.name == name);
        if(index<0){
          return; //防止点县级块报错
        }
        let id = this.provinceMap.features[index].properties.adcode;
        mRequest.request('/city?id='+id).then(res=>{
          console.log(res.data)
          mEcharts.registerMap('cityMap',res.data);
            //准备渲染
            this.options={
              geo:[{
                type:'map',
                map:'cityMap',
                //允许鼠标拖拽和滚轮放大
                roam:true,
                label:{
                  show:true,
                },
                //初始化缩放比例
                // zoom:10,
                //地图中心点
                center:res.data.features[0].properties.center,
              }]        
            }
            //开始绘图
            this.myEcharts.setOption(this.options)
        })
      }

      
    })
  })
  /* .then(res=>{
  console.log(res)
  mEcharts.registerMap('sichuanMap',res.data);
  this.options.geo.push({
        type:'map',
        map:'sichuanMap',
        //允许鼠标拖拽和滚轮放大
        roam:true,
        label:{
          // show:true,
        },
        //初始化缩放比例
        // zoom:10,
        //地图中心点
        // center:[102.42359, 30.704713],
      }) 
    this.myEcharts.setOption(this.options)
  }) */
  },

  methods: {
    initChinaMap(){
      //注意这个函数是echarts的函数，不是echarts容器的函数
    mEcharts.registerMap('chinaMap',this.chinaMap);
      //Options
    this.options  = {
      geo:[{
        type:'map',
        map:'chinaMap',
        //允许鼠标拖拽和滚轮放大
        roam:true,
        label:{
          show:false,
        },
        //初始化缩放比例
        // zoom:10,
        //地图中心点
        center:[112.42359, 30.704713],
      }],
      series:[
        {
          //添加一个地图的热力图
          data:dataMap,
          geoIndex:0,
          type:'map'
        },
        {
          //添加一个散点图
          //散点坐标数据
          data:this.scatterData,
          type:'effectScatter',
          //散点使用geo的坐标（相对坐标）
          coordinateSystem:'geo',
          rippleEffect:{
            scale:10
          }
        }
      ],
      visualMap:{
        min:0,
        max:500,
        inRange:{
          color:["#fff","#006fff"]
        },
        //范围选择器
        calculable:true
      }
    }
    //隐藏按钮
    this.showBackBtn = false;
    //开始绘图
    this.myEcharts.setOption(this.options);
    }
  }
}

</script>
<style lang='scss' scoped>
  .box{
    width: 800px;
    height:800px;
  }
  #backBtn{
    width: 60px;
    height: 30px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px #888;
    transition: 0.3s;
    position: absolute;
    left: 10px;
    top: 80px;
    &:hover{
      background-color: green;
    }
  }
</style>