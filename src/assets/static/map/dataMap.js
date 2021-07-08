module.exports = {
  dataMap: [
    { name: '北京市', value: '100' }, { name: '天津市', value: randomData() },
    { name: '上海市', value: randomData() }, { name: '重庆市', value: randomData() },
    { name: '河北省', value: randomData() }, { name: '河南省', value: randomData() },
    { name: '云南省', value: randomData() }, { name: '辽宁省', value: randomData() },
    { name: '黑龙江省', value: randomData() }, { name: '湖南省', value: randomData() },
    { name: '安徽省', value: randomData() }, { name: '山东省', value: randomData() },
    { name: '新疆维吾尔自治区', value: randomData() }, { name: '江苏省', value: randomData() },
    { name: '浙江省', value: randomData() }, { name: '江西省', value: randomData() },
    { name: '湖北省', value: randomData() }, { name: '广西壮族自治区', value: randomData() },
    { name: '甘肃省', value: randomData() }, { name: '山西省', value: randomData() },
    { name: '内蒙古自治区', value: randomData() }, { name: '陕西省', value: randomData() },
    { name: '吉林省', value: randomData() }, { name: '福建省', value: randomData() },
    { name: '贵州省', value: randomData() }, { name: '广东省', value: randomData() },
    { name: '青海省', value: randomData() }, { name: '西藏自治区', value: randomData() },
    { name: '四川省', value: randomData() }, { name: '宁夏回族自治区', value: randomData() },
    { name: '海南省', value: randomData() }, { name: '台湾省', value: randomData() },
    { name: '香港', value: randomData() }, { name: '澳门', value: randomData() }, { name: '南海诸岛', value: randomData() }
  ]
}

function randomData() {
  return Math.round(Math.random() * 500);
}