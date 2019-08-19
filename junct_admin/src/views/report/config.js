//饼图配置项
export let pieOption = (args) => {
	return {
		title : {
	        text: args.title,
	        x:'center'
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: args.formatterStr
	    },
	    legend: {
	        bottom: 10,
        	left: 'center',
	        data:args.legendData
	    },
	    series: [
	        {
	            name:args.title,
	            type:'pie',
	            radius: ['30%', '70%'],
	            labelLine: {
	                normal: {
	                    show: true
	                }
	            },
	            data:args.pieData,
	            itemStyle:{
	            	normal:{
	            		color:args.colorFilter
	            	}
	            }
	        }
	    ]
	}
}

//柱状图配置
export let barOption = (args) => {
	return {
		title : {
	        text: args.title,
	        x:'center'
	    },
	    xAxis: {
	        type: 'category',
	        data: args.xAxisData
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [{
	        data: args.yAxisData,
	        type: 'bar',
	        itemStyle:{
	        	normal:{
	        		color:args.colorFilter
	        	}
	        }
	    }]
	}
}