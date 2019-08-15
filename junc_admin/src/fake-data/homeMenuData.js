const data = [{
	"title":"设置",
	"name":"settings",
	"icon":"el-icon-setting",
	"children":[{
		"title":"系统相关",
		"name":"system-settings",
		"icon":"el-icon-s-operation",
		"children":[{
			"title":"菜单管理",
			"name":"menu-manage",
			"icon":"el-icon-s-order",
			"path":"/menuManage"
		},{
			"title":"指令管理",
			"name":"instructs-manage",
			"icon":"el-icon-s-flag",
			"path":"/instructsManage"
		}]
	},{
		"title":"用户相关",
		"name":"user-settings",
		"icon":"el-icon-user",
		"children":[{
			"title":"用户角色",
			"icon":"el-icon-setting",
			"name":"user-role",
			"path":"/userRole"
		}]
	}]
}]

export default data