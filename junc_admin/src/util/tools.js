/**
 * 工具类
 * ps. 采用按需导出的方式
 */

 //寻找router节点的所有父节点
export let reverseTree = (treeNode, targetNodeName, array) => {
	if(treeNode.name == targetNodeName){
		array.push({
			"name":treeNode.name,
			"path":treeNode.path,
			"title":treeNode.title	
		});
		return true
	}
	if(!treeNode.children){
		return false
	}
	let len = treeNode.children.length;
	if(len == 0){
		return false
	}
	let flg = false
	for(let i = 0; i < len; i++){
		flg = reverseTree(treeNode.children[i],targetNodeName,array);
		if(flg){
			array.push({
				"name":treeNode.name,
				"path":treeNode.path,
				"title":treeNode.title	
			});
			break
		}
	}
	return flg
}