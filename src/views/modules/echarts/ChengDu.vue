<template>
	<div class="chengdu">
		<div :style="{height:'850px',width:'100%'}" ref="myEchart"></div>
	</div>
</template>

<script>
	export default {
		name: "ChengDu",
		data() {
			return {
				mapData: require('../../../assets/mapJson/chengdu.json'),
				cityList: [],
			}
		},
		mounted() {
			this.map();
			// 请求获取静态资源待整理
			// $.get('../../../assets/mapJson/chengdu.json', function(chinaJson) {
			// 	console.log(chinaJson)
			// });
		},
		created() {},
		methods: {
			map() {
				let myChart = this.$echarts.init(this.$refs.myEchart);
				window.onresize = myChart.resize;
				this.mapData.features.forEach((item) => {
					let obj = {}
					obj.name = item.properties.name
					obj.value = Math.floor(Math.random() * Math.random() * Math.random() * 1000)
					this.cityList.push(obj)
				})

				this.$echarts.registerMap("chengdu", this.mapData);
				myChart.setOption({
					backgroundColor: '#FFF',
					title: {
						text: "成都市",
						left: 'center',
						textStyle: {
							color: '#000'
						}
					},
					tooltip: {
						show: true,
						// triggerOn: "click",
						formatter: function(e, t, n) {
							console.log(e, t, n)
							return `${e.seriesName} <br /> ${e.name}: ${e.value}`
						}
					},
					visualMap: {
						show: true,
						// calculable: true,
						showLabel: true,
						min: 0,
						max: 1000,
						left: 'left',
						top: 'bottom',
						text: ['高', '低'],
						textStyle: {
							color: '#000'
						},
						// inRange: {
						// 	color: ['yellow', 'lightskyblue', 'orangered']
						// },
						pieces: [{
							gt: 100,
							label: "> 100 人",
							color: "#7f1100"
						}, {
							gte: 10,
							lte: 100,
							label: "10 - 100 人",
							color: "#ff5428"
						}, {
							gte: 1,
							lt: 10,
							label: "1 - 9 人",
							color: "#ff8c71"
						}, {
							gt: 0,
							lt: 1,
							label: "疑似",
							color: "#ffd768"
						}, {
							value: 0,
							color: "#ffffff"
						}],
					},

					series: [{
						// coordinateSystem: 'geo', ?
						type: 'map',
						mapType: 'chengdu',
						name: 'demo',
						zoom: 1.2,
						roam: true,
						data: this.cityList,
						// ?
						animation: false,
						label: {
							normal: {
								show: true,
							},
							emphasis: {
								textStyle: {
									color: '#fff',
								}
							}
						},
						itemStyle: {
							normal: {
								borderColor: '#389BB7',
								areaColor: '#fff',
								cursor: "pointer"
							},
							emphasis: {
								areaColor: '#389BB7',
								borderWidth: 0,
							}
						},
					}]
				});
			}
		}
	}
</script>

<style>

</style>
