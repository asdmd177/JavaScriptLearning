var vue = new Vue({
	el:"#app",
	data:{
		content : "hello world",
		list : "<li>铁蛋</li><li>狗剩</li><li>美美</li>",
		url : "https://www.baidu.com",
		contacts : [{
			name:"铁蛋",
			contact:"138****4223"
		},{
			name:"狗剩",
			contact:"171****2345"
		},{
			name:"美美",
			contact:"150****9533"
		}],
		username : '',
		flag : true,
		flag_show : true
	},
	methods:{
		showMsg : function(){
			alert("vue.js的使用方便快捷！");
		},
		print : function(){
			console.log(this.username);
		},
		hide : function(){
			this.flag = false;
		},
		show : function(){
			this.flag = true;
		},
		toggle : function(){
			var button = this.$refs.toggleBtn;
			if("隐藏" === button.value){
				this.flag_show = false;
				button.value = "显示";
			}else{
				this.flag_show = true;
				button.value = "隐藏";
			}
		}
	}
});