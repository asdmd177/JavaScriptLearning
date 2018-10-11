var vm = new Vue({
	el:"#mainBody",
	data:{
        pageNum:1,
        pageSize:2,
        dataCount:0,
		columns:[{
			//添加checkbox
			type:"selection",
			width:60,
			align:"center"
		},{
            title: '路名',
            key: 'IFV_LM'
        },{
            title: '发布日期',
            key: 'IFV_FBRQ'
        },{
        	title: '公里数(KM)',
        	key: 'IFV_GLS'
        },{
            title: '米数',
            key: 'IFV_MS'
        },{
        	title: '所属支队',
        	key: 'IFV_SSZD'
        },{
            title:'备注',
            key: 'IFV_BZ'
        },{
        	title: 'Action',
            key: 'action',
            fixed: 'right',
            align: 'center',
            width: 120,
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        }
                    }, '编辑'),
                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        on: {
                        	click:()=>{
                        		console.log(params.index);
                        	}
                        }
                    }, '删除')
                ]);
            }
        }],
        tableData:[],
        roadName:'',
        DSEPath:'http:localhost:8080/web-appserver/test/getData'
	},
	methods:{
        //http:localhost:8080/web-appserver/test/getData   
        changePage(args){
            this.pageNum = args;
            this.loadTableData();
        },
        getDSEData(method,url,params,successCB,failureCB){
            console.log(params);
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
        },
        loadTableData(){
            var params = {
                interfaceCode:'citypark_resource_ifv_list',
                pageNum:this.pageNum,
                pageSize:this.pageSize
            };
            
            if(this.roadName){
                params.keyword = this.roadName;
            }

            this.getDSEData('post',this.DSEPath,params,(response)=>{
                var data = response.data;
                if(data.code<0){
                    console.error("获取dse数据出错"); 
                    console.error(data.message);  
                }else{
                    //解析
                    var resultcount = this.getDSEValue(data.result,"resultcount");
                    //数据总条数
                    if(this.pageNum===1){
                        var count = Number(resultcount[0].RET);
                        this.dataCount = count;
                    }
                    this.tableData = this.getDSEValue(data.result,"result");
                    console.log(this.tableData);
                }
            },(error)=>{
                console.error(error);
            });
        },
        search(){
            this.pageNum = 1;
            this.loadTableData();
        }
	},
    mounted(){
        this.loadTableData();
    }
});