var vm = new Vue({
	el:"#mainBody",
	data:{
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
        contactData:[{
            'name': '铁蛋',
            'phone': '13585332843',
            'mail': 'tiedan@coldmail.com',
            'address': '浙江省温州市鹿城区吴桥路77号',
            'date': '2014-09-01'
        }],
        addNew:{
        	'name':'',
        	'phone':'',
        	'mail':'',
        	'address':''
        }
	},
	methods:{
		addNewContact:function(){
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
		}
	}
});