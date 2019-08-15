let reverseTree = (treeNode, targetNodeName, array) => {
	if(treeNode.name == targetNodeName){
		array.push(treeNode.title);
		return true
	}
	if(!treeNode.children){
		return false
	}
	let len = treeNode.children.length;
	if(len == 0){
		return false
	}
	let flg = false;
	for(let i = 0; i < len; i++){
		flg = reverseTree(treeNode.children[i],targetNodeName,array);
		if(flg){
			array.push(treeNode.title);
			break
		}
	}
	return flg;
}



export default {
	reverseTree:reverseTree
}