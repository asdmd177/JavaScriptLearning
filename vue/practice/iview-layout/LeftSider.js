var vm = new Vue({
	el:".layout",
	data:{
		headerTabs:[{
			icon:"ios-navigate",
			name:"资源管理"
		},{
			icon:"ios-keypad",
			name:"车辆管理"
		},{
			icon:"ios-analytics",
			name:"用户管理"
		},{
			icon:"ios-paper",
			name:"人员管理"
		}],

		siderTabs:[{
			icon:"ios-navigate",
			name:"资源管理",
			subTabs:[{
				name:"探头提示"
			},{
				name:"附近车站"
			},{
				name:"设备资产管理"
			}]
		}],

		//DSE相关
		DSEPath:'http:localhost:8080/web-appserver/test/getData',

		isCollapsed:false
	},
	methods:{
		getDSEData(method,url,params,successCB,failureCB){
            axios({
                method:method,
                url:url,
                params:params
            }).then(function (response) {
                if(typeof successCB === 'function'){
                    successCB(response);
                }
            }).catch(function (error) {
                if(typeof failureCB === 'function'){
                    failureCB(error);
                }
            });
        },
        getDSEValue(data,key){
            var value;
            for(var i = 0;i<data.length;i++){
                var item = data[i];
                if(item.alias===key){
                    value = item.value;
                }
            }
            return value;
        }
	},
	mounted(){
		//vm挂载后从server请求sidertabs数据
		this.getDSEData('post',"http:localhost:8081/web-citypark/export/menu?mark=test",{
			mark:"test"
		},(response)=>{
            var data = response.data;
            if(data.code<0){
                console.error("获取dse数据出错"); 
                console.error(data.message);  
            }else{
                //解析
                this.siderTabs = data;
            }
        },(error)=>{
            console.error(error);
        });
	}
});