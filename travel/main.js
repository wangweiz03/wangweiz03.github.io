var uploadedDataURL = "china.json";

var myChart = echarts.init(document.getElementById('container'))
myChart.showLoading();

var provinces = {
    '': 'json/data-1482818963027-Hko9SKJrg.json',
    ' ': 'json/data-1482909944620-r1-WKyWHg.json',
    '  ': 'json/data-1482909799572-Hkgu_yWSg.json',
    '   ': 'json/data-1482909909703-SyCA_JbSg.json',
    '    ': 'json/data-1482909841923-rkqqdyZSe.json',//内蒙古
    '     ': 'json/data-1482909836074-rJV9O1-Hg.json',
    '      ': 'json/data-1482909832739-rJ-cdy-Hx.json',
    '       ': 'json/data-1482909803892-Hy4__J-Sx.json',
    '        ': 'json/data-1482909900836-H1BC_1WHg.json',
    '         ': 'json/data-1482909823260-HkDtOJZBx.json',
    '          ': 'json/data-1482909960637-rkZMYkZBx.json',
    '           ': 'json/data-1482909768458-HJlU_yWBe.json',
    '            ': 'json/data-1478782908884-B1H6yezWe.json',
    '             ': 'json/data-1482909827542-r12YOJWHe.json',
    '              ': 'json/data-1482909892121-BJ3auk-Se.json',
    '               ': 'json/data-1482909807135-SJPudkWre.json',
    '                ': 'json/data-1482909813213-Hy6u_kbrl.json',
    '                 ': 'json/data-1482909818685-H17FOkZSl.json',
    '                  ': 'json/data-1482909784051-BJgwuy-Sl.json',
    '                   ': 'json/data-1482909787648-SyEPuJbSg.json',
    '                    ': 'json/data-1482909796480-H12P_J-Bg.json',
    '                     ': 'json/data-1482909775470-HJDIdk-Se.json',
    '                      ': 'json/data-1482909931094-H17eKk-rg.json',
    '                       ': 'json/data-1482909791334-Bkwvd1bBe.json',
    '                        ': 'json/data-1482909957601-HkA-FyWSx.json',
    '                         ': 'json/data-1482927407942-SkOV6Qbrl.json',
    '                          ': 'json/data-1482909918961-BJw1FyZHg.json',
    '                           ': 'json/data-1482909780863-r1aIdyWHl.json',
    '                            ': 'json/data-1482909853618-B1IiOyZSl.json',
    '                             ': 'json/data-1482909848690-HJWiuy-Bg.json',
    '                              ': 'json/data-1482909952731-B1YZKkbBx.json',
    '                                ': 'json/data-1461584707906-r1hSmtsx.json',
    '                                 ': 'json/data-1482909771696-ByVIdJWBx.json'
};

let data = [
    { name: '', value: 80 },//北京
    { name: '城六区', value: 90 },
    { name: '大兴区', value: 60 },
    { name: '昌平区', value: 60 },
    { name: ' ', value: 0 },//天津
    { name: '  ', value: 50 },//河北
    { name: '石家庄市', value: 50 },
    { name: '   ', value: 0 },//山西
    { name: '    ', value: 0 },//内蒙古
    { name: '     ', value: 0 },//辽宁
    { name: '      ', value: 0 },//吉林
    { name: '       ', value: 0 },//黑龙江
    { name: '        ', value: 0 },//上海
    { name: '         ', value: 50 },//江苏
    { name: '南京市', value: 50 },
    { name: '          ', value: 0 },//浙江
    { name: '           ', value: 0 },//安徽
    { name: '            ', value: 60 },//福建
    { name: '厦门市', value: 50 },
    { name: '龙岩市', value: 60 },
    { name: '             ', value: 50 },//江西
    { name: '赣州市', value: 50 },
    { name: '              ', value: 0 },//山东
    { name: '               ', value: 50 },//河南
    { name: '洛阳市', value: 50 },
    { name: '                ', value: 0 },//湖北
    { name: '                 ', value: 80 },//湖南
    { name: '娄底市', value: 70 },
    { name: '岳阳市', value: 50 },
    { name: '                  ', value: 100 },//广东
    { name: '深圳市', value: 100 },
    { name: '广州市', value: 60 },
    { name: '揭阳市', value: 90 },
    { name: '惠州市', value: 50 },
    { name: '                   ', value: 0 },//广西
    { name: '                    ', value: 70 },//海南
    { name: '                     ', value: 0 },//重庆
    { name: '                      ', value: 50 },//四川
    { name: '成都市', value: 50 },
    { name: '                       ', value: 50 },//贵州
    { name: '贵阳市', value: 50 },
    { name: '安顺市', value: 60 },
    { name: '                        ', value: 0 },//云南
    { name: '                         ', value: 0 },//西藏
    { name: '                          ', value: 50 },//陕西
    { name: '西安市', value: 50 },
    { name: '                           ', value: 70 },//甘肃
    { name: '兰州市', value: 50 },
    { name: '武威市', value: 50 },
    { name: '张掖市', value: 50 },
    { name: '嘉峪关市', value: 50 },
    { name: '酒泉市', value: 50 },
    { name: '                            ', value: 0 },//青海
    { name: '                             ', value: 0 },//宁夏
    { name: '                              ', value: 0 },//新疆
    { name: '                               ', value: 0 },//台湾
    { name: '                                ', value: 60 },//香港
    { name: '                                 ', value: 0 },//澳门
];

function loadMap(mapCode, name) {
    $.get(mapCode, function (geoJson) {
        if (geoJson) {
            echarts.registerMap(name, geoJson);
            myChart.hideLoading();
            if (name === 'china'){
                var option = {
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            if (params.data) return 'freq:' + params.data['value']
                        },
                    },
    
                    visualMap: { //critical
                        min: 0,
                        max: 100,
                        // text: ['100', '0'],
                        // realtime: false,
                        // calculable: true,
                        inRange: {
                            color: ['rgb(197,241,161)', 'rgb(79, 94, 73)']
                        }
                    },
                    geo: {
                        map: name, //crucial
                        aspectScale: 0.75, //长宽比
                        zoom: 1.25,
                        roam: false,
                        itemStyle: {
                            normal: {
                                opacity: 0.7,
                                borderWidth: 0.5,
                                color: 'rgb(197,241,161)',
    
                            },
                            emphasis: {
                                areaColor: 'rgb(176, 237, 105)',//hovering 面颜色
                                borderWidth: 2,
                                color: 'rgb(176, 237, 105)',//hovering 颜色
                            },
                        },
                    },
                    series: [
                        {
                            geoIndex: 0,
                            name: 'china',
                            type: 'map',
                            coordinateSystem: 'geo',
                            map: 'china',
                            data: data,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                        }
                    ],
                };
            } else {
                var option = {
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            if (params.data) return 'freq:' + params.data['value']
                        },
                    },
    
                    visualMap: { //critical
                        min: 0,
                        max: 100,
                        // text: ['100', '0'],
                        // realtime: false,
                        // calculable: true,
                        inRange: {
                            color: ['rgb(197,241,161)', 'rgb(79, 94, 73)']
                        }
                    },
                    geo: {
                        map: name, //crucial
                        aspectScale: 0.75, //长宽比
                        zoom: 0.65,
                        roam: false,
                        itemStyle: {
                            normal: {
                                opacity: 0.7,
                                borderWidth: 0.5,
                                color: 'rgb(197,241,161)',
    
                            },
                            emphasis: {
                                areaColor: 'rgb(176, 237, 105)',//hovering 面颜色
                                borderWidth: 2,
                                color: 'rgb(176, 237, 105)',//hovering 颜色
                            },
                        },
                    },
                    series: [
                        {
                            geoIndex: 0,
                            name: 'china',
                            type: 'map',
                            coordinateSystem: 'geo',
                            map: 'china',
                            data: data,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                        }
                    ],
                };
            }
            
            myChart.setOption(option);
            // curMap = {
            //     mapCode: mapCode,
            //     mapName: name
            // };
        } else {
            alert('无法加载该地图');
        }
    });

}

loadMap(uploadedDataURL, 'china');

var timeFn = null;
//单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
myChart.on('click', function (params) {
    clearTimeout(timeFn);
    //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
    timeFn = setTimeout(function () {
        var name = params.name; //地区name
        var mapCode = provinces[name]; //地区的json数据
        

        loadMap(mapCode, name);

    }, 250);
});

// 绑定双击事件，返回全国地图
myChart.on('dblclick', function (params) {
    //当双击事件发生时，清除单击事件，仅响应双击事件
    clearTimeout(timeFn);

    //返回全国地图
    loadMap(uploadedDataURL, 'china');
});




