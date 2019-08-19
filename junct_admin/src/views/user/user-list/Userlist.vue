<!-- 
	user-list
	@author:fja
	@date:2019-08-17
-->
<template>
	<el-card class="box-card">
		<el-row :gutter="5">
			<el-col :span="6">
				<el-input v-model="keyWords" placeholder="请输入用户名"></el-input>
			</el-col>
			<el-col :span="2">
				<el-button type="primary" @click="handleSearch">搜索</el-button>
			</el-col>
		</el-row>
		<el-row>
			<el-table
			  border
			  stripe
			  highlight-current-row
		      :data="tableData"
		      style="width: 100%"
		      @select-all="handleSelectAll">
		      <el-table-column
		      	type="selection"
		      	width="55">
		      </el-table-column>
		      <el-table-column prop="username" label="用户名"> </el-table-column>
		      <el-table-column label="性别">
		      	<template slot-scope='scope'>
		      		{{scope.row.gender | genderFilter}}
		      	</template>
		      </el-table-column>
		      <el-table-column prop="age" label="年龄"></el-table-column>
		      <el-table-column prop="phone" label="电话"></el-table-column>
		      <el-table-column prop="email" label="邮箱"></el-table-column>
		      <el-table-column prop="state" label="禁用">
		      	<template slot-scope="scope">
		      		<el-switch v-model="scope.row.state"></el-switch>
		      	</template>
		      </el-table-column>
		      <el-table-column label="操作">
		      	<template slot-scope="scope">
		      		<el-button type="primary" icon="el-icon-edit" :size="'mini'" circle @click="handleEdit(scope.row)"></el-button>
		      		<el-button type="danger" icon="el-icon-delete" :size="'mini'" circle @click="handleDelete(scope.row)"></el-button>
		      	</template>
		      </el-table-column>
		    </el-table>
		</el-row>
		<el-row>
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="tableData.length">
			</el-pagination>
		</el-row>
	</el-card>
</template>

<script>
	import tableData from '../../../fake-data/tableData'
	export default {
		data() {
			return {
				"keyWords":"",
				"tableData":tableData
			}
		},
		methods:{
			handleDelete(row) {
				console.log(JSON.stringify(row))
			},
			handleEdit(row) {
				console.log(JSON.stringify(row))
			},
			handleSearch(){

			},
			handleSelectAll(selection){
				console.log(selection)
			}
		}
	};
</script>

<style lang="less" scoped>
	@import './Userlist.less';
</style>

