var common = require("./common");

function initTable(){
	common.writer(
		`<table>
			<thead>
				<th>学号</th>
				<th>姓名</th>
				<th>性别</th>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>狗剩</td>
					<td>男</td>
				</tr>
				<tr>
					<td>2</td>
					<td>铁蛋</td>
					<td>男</td>
				</tr>
				<tr>
					<td>3</td>
					<td>凤霞</td>
					<td>女</td>
				</tr>
			</tbody>
	   </table>`);
}


module.exports = {
	initTable:initTable
}