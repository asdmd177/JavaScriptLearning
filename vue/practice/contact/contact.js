var vm = new Vue({
	el:"#mainBody",
	data:{
        pageNum:"1",
        pageSize:"0",
		columns:[{
			//添加checkbox
			type:"selection",
			width:60,
			align:"center"
		},{
            title: '姓名',
            key: 'name'
        },{
            title: '手机号码',
            key: 'phone'
        },{
        	title: '邮箱地址',
        	key: 'mail'
        },{
            title: '住址',
            key: 'address'
        },{
        	title: '添加日期',
        	key: 'date'
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
                        		vm.contactData.splice(params.index,1);
                        	}
                        }
                    }, '删除')
                ]);
            }
        }],
        contactData:[],
        addNew:{
        	'name':'',
        	'phone':'',
        	'mail':'',
        	'address':''
        }
	},
	methods:{
		addNewContact(){
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth()+1;
			month = Number(month)>=10?month:'0'+month;
			var date = date.getDate();
			date = Number(date)>=10?date:'0'+date;
			this.addNew.date = year+"-"+month+"-"+date;
			this.contactData.push(this.addNew);
			this.addNew = {
				'name':'',
	        	'phone':'',
	        	'mail':'',
	        	'address':''
			};
		},
        //http:localhost:8080/web-appserver/test/getData    test_by_fja    
        changepage(num){
            this.pageNum+=num;
            axios({
                method:"get",
                url:"http:localhost:8080/web-appserver/test/getData",
                params:{
                    interface:"test_by_fja "
                }
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
	},
    mounted(){
        this.changepage(0);
    }
});