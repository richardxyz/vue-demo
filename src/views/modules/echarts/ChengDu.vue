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
					obj.value = Math.floor(Math.random() * 100000)
					this.cityList.push(obj)
					console.log(obj.name)
				})

				this.$echarts.registerMap("chengdu", this.mapData);
				myChart.setOption({
					backgroundColor: '#044060',
					title: {
						text: "成都市",
						left: 'center',
						textStyle: {
							color: '#ffffff'
						}
					},
					visualMap: {
						min: 0,
						max: 100000,
						left: 'left',
						top: 'bottom',
						text: ['高', '低'],
						calculable: true,
						inRange: {
							color: ['yellow', 'lightskyblue', 'orangered']
						},
						textStyle: {
							color: '#ffffff'
						}
					},
					series: [{
						type: 'map',
						mapType: 'chengdu',
						// coordinateSystem: 'geo', ?
						roam: true,
						zoom: 1.3,
						label: {
							normal: {
								show: true,
							},
							emphasis: {
								textStyle: {
									color: '#fff'
								}
							}
						},
						itemStyle: {
							normal: {
								borderColor: '#389BB7',
								areaColor: '#fff',
							},
							emphasis: {
								areaColor: '#389BB7',
								borderWidth: 0
							}
						},
						// ?
						animation: false,
						data: this.cityList
					}]
				});
			}
		}
	}
</script>

<style>
</style>
