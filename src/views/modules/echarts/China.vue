<template>
	<div class="echarts">
		<div :style="{height:'850px',width:'100%'}" ref="myEchart"></div>
	</div>
</template>

<script>
	import echarts from "echarts";
	import '../../../../node_modules/echarts/map/js/china.js'
	export default {
		name: "Echarts",
		data() {
			return {
				chart: null
			}
		},
		mounted() {
			this.chinaConfigure();
		},
		beforeDestroy() {
			if (!this.chart) {
				return;
			}
			this.chart.dispose();
			this.chart = null;
		},
		methods: {
			chinaConfigure() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(this.$refs.myEchart);
				// 自适应此处不生效
				window.onresize = myChart.resize;
				// 进行相关配置
				myChart.setOption({
					// 地图下面的背景颜色
					backgroundColor: "green",
					// 标题
					title: {
						text: '中国地图',
						left: "center",
						top: 50,
						textStyle: {
							color: "pink",
							fontSize: "22",
							fontWeight: '100'
						}
					},
					// 鼠标移到图里面的浮动提示框
					tooltip: {
						// 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis' ？
						trigger: 'item',
						// 显示延迟，添加显示延迟可以避免频繁切换，单位ms
						showDelay: 20,
						// 隐藏延迟，单位ms
						hideDelay: 20,
						// 动画变换时间，单位s
						transitionDuration: 0.2,
						// 提示背景颜色，默认为透明度为0.7的黑色

						backgroundColor: 'rgba(0,0,0,0.7)',
						// 提示边框线宽，单位px，默认为0（无边框）
						borderWidth: 1,
						// 提示边框颜色 
						borderColor: 'red',
						// 提示边框圆角，单位px，默认为4
						borderRadius: 4,
						// 提示内边距，单位px，默认各方向内边距为5，
						padding: 5,
						textStyle: {
							color: '#FFF',
							fontSize: "16"
						},

						// 坐标轴指示器，坐标轴触发有效 ?
						axisPointer: {
							// 默认为直线，可选为：'line' | 'shadow'
							type: 'line',
							// 直线指示器样式设置
							lineStyle: {
								color: '#48b',
								width: 2,
								type: 'solid'
							},
							// 阴影指示器样式设置
							shadowStyle: {
								// 阴影大小
								width: 'auto',
								// 阴影颜色
								color: 'rgba(150,150,150,0.3)'
							}
						},
					},
					// 值域
					dataRange: {
						show: true,
						// 布局方式，默认为垂直布局，可选为：'horizontal' ¦ 'vertical'
						orient: 'vertical',
						// 水平安放位置，默认为全图左对齐，可选为：'center' ¦ 'left' ¦ 'right' ¦ {number}（y坐标，单位px）
						x: 'left',
						// 垂直安放位置，默认为全图底部，可选为：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
						y: 'bottom',

						// 背景颜色
						backgroundColor: 'rgba(255,255,255,0.8)',
						// 边框宽度
						borderWidth: 2,
						// 边框颜色
						borderColor: '#ccc',
						// 值域内边距，单位px，默认各方向内边距为5，
						padding: 5,
						// 值域文字颜色
						textStyle: {
							color: 'red'
						},

						// ?
						itemGap: 100,

						min: 0,
						max: 1000,
						text: ['High', 'Low'],
						realtime: true,
						calculable: true,
						color: ['orangered', 'yellow', 'lightskyblue']
					},
					// 这个是重点配置区
					geo: {
						show: true,
						//   //地图类型。world世界地图，china中国地图
						map: 'china',
						//是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
						roam: false,
						//当前视角的中心点，用经纬度表示
						// center: [115.97, 29.71],
						//这个参数用于 scale 地图的长宽比。
						aspectScale: 0.75,
						//二维数组，定义定位的左上角以及右下角分别所对应的经纬度
						// boundingCoords: [
						// 	[-180, 90],
						// 	[180, -90]
						// ],
						//当前视角的缩放比例
						zoom: 1,
						// 所属组件的z分层，z值小的图形会被z值大的图形覆盖
						scaleLimit: {
							//最小的缩放值
							min: 1,
							//最大的缩放值
							max: 1,
						},
						nameMap: {
							// 自定义地区的名称映射
							'China': '中国'
						},
						// 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
						selectedMode: false,
						// 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
						label: {
							normal: {
								// 是否显示对应地名
								show: true,
								textStyle: {
									color: 'rgba(0,0,0,0.9)'
								}
							},
							emphasis: {
								//是否在高亮状态下显示标签。
								show: false,
							}
						},
						//地图区域的多边形 图形样式
						itemStyle: {
							normal: {
								// 区域边框
								borderColor: 'rgba(0, 0, 0, 0.2)',
								// 区域背景色
								areaColor: '#fff',
							},
							emphasis: {
								areaColor: null,
								shadowOffsetX: 0,
								shadowOffsetY: 0,
								shadowBlur: 20,
								borderWidth: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						},
						//所属图形的 zlevel 值。
						// zlevel: 0,
						//所属图形的 z 值。
						// z: 2,
						//组件离容器左侧的距离,百分比字符串或整型数字
						// left: "10%",
						//组件离容器上侧的距离，百分比字符串或整型数字
						// top: 60,
						//组件离容器右侧的距离,百分比字符串或整型数字
						// right: "auto",
						//组件离容器下侧的距离,百分比字符串或整型数字
						// bottom: "auto",
						//地图中心在屏幕中的位置
						// layoutCenter: ['30%', '30%'],
						//地图的大小,支持相对于屏幕宽高的百分比或者绝对的像素大小。
						// layoutSize: 100,
						//在地图中对特定的区域配置样式。
						regions: [{
							name: '广东',
							itemStyle: {
								normal: {
									areaColor: 'red',
									color: 'red'
								}
							}
						}],
						//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
						silent: false,
					},
					series: [{
							type: 'scatter',
							// 对应上方配置
							coordinateSystem: 'geo'
						},
						{
							name: '启动次数', // 浮动框的标题
							type: 'map',
							geoIndex: 0,
							data: [{
								"name": "北京",
								"value": 599
							}, {
								"name": "上海",
								"value": 142
							}, {
								"name": "黑龙江",
								"value": 44
							}, {
								"name": "深圳",
								"value": 92
							}, {
								"name": "湖北",
								"value": 810
							}, {
								"name": "四川",
								"value": 453
							}]
						}
					]
				})
			}
		}
	}
</script>

<style scoped>
</style>
