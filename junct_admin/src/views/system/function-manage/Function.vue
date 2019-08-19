<template>
	<el-table
    :data="tableData"
    style="width: 100%;"
    row-key="name"
    border
    :tree-props="{children: 'children'}">
    <el-table-column prop="title" label="名称"></el-table-column>
    <el-table-column prop="name" label="编码"></el-table-column>
    <el-table-column label="图标">
    	<template slot-scope="scope">
    		<i :class="scope.row.icon"></i>
    	</template>
    </el-table-column>
    <el-table-column label="操作">
      	<template slot-scope="scope">
      		<el-button 
      			type="primary" 
      			icon="el-icon-edit" 
      			:size="'mini'" 
      			circle @click="handleEdit(scope.row)"></el-button>
      		<el-button 
      			type="danger" 
      			icon="el-icon-delete" 
      			:size="'mini'" 
      			circle @click="handleDelete(scope.row)"></el-button>
      	</template>
      </el-table-column>
  </el-table>
</template>
	
<script>
	export default{
		data() {
			return {
				tableData:[]
			}
		},
		methods:{
			handleEdit(row) {

			},
			handleDelete(row) {

			}
		},
		created(){
			//获取侧边栏菜单的数据
			var str = window.sessionStorage.getItem("homeMenuData")
			if(str){
				this.tableData = JSON.parse(str)
			}
		}
	};
</script>


<style lang="less">
	@import './Function.less';
</style>