<template>
	<div class="about">
		<el-button type="primary">{{$t('brand.lg')}}</el-button>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
		</el-pagination>
	</div>
</template>
<script>
	export default {
		name: 'About',
		data() {
			return {
				currentPage4: 4
			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		},
	}
</script>
