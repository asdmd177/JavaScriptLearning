<template>
	<div class="echarts-container">
		<el-row :gutter="20">
			<el-col :span="8">
				<el-card>
					<div id="pie" style="height:350px"></div>
				</el-card>
			</el-col>
			<el-col :span="16">
				<el-card>
					<div id="bar" style="height:350px"></div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import echarts from 'echarts'
	import userdata from '../../fake-data/tableData'
	//图标配置项
	import { pieOption, barOption } from './config.js'
	
	export default {
		mounted() {
			let pie = echarts.init(document.getElementById('pie'))
			let bar = echarts.init(document.getElementById('bar'))
			let pieData = [{
				name:"男性用户",
				value:0
			},{
				name:"女性用户",
				value:0
			}];
			let xAxisData = [];
			let yAxisData = [];
			for(let i = 0;i < userdata.length; i++){
				let user = userdata[i]
				//bar
				xAxisData.push(user.username)
				yAxisData.push(user.age)
				//pie
				if(user.gender == 0){
					pieData[0].value++
				}else{
					pieData[1].value++
				}
			}
			pie.setOption(pieOption({
				formatterStr:'{a} <br/>{b}: {c} ({d}%)',
				legendData:['男性用户','女性用户'],
				title:'用户比列统计',
				colorFilter:function(params){
					let colors = ['#2D8CF0','#9A66E4']
					return colors[params.dataIndex]
				},
				pieData:pieData
			}))

			bar.setOption(barOption({
				title:'用户年龄统计',
				xAxisData:xAxisData,
				yAxisData:yAxisData,
				colorFilter:function(params){
					let colors = ['#2D8CF0','#9A66E4','#19BE6B','#FF9900','#E46CBB']
					return colors[params.dataIndex]
				}
			}))
		}
	}
</script>


<style lang="less">
	
</style>