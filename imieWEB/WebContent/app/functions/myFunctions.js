var cleanTreeFields =  function(data) 
{
    data.id = undefined;
    data.leaf = undefined;
    data.parentId = undefined;
    data.children = undefined;
    data.text = undefined;
    return data;
}


var refreshStaticTree = function(treeStore, idField)
{
	var firstElement = treeStore.getRoot().getChildAt(0);
	
	var storeModel = firstElement.getProxy().getModel();
	
	var newTree = storeModel.load(firstElement.get(idField));

	
	treeStore.setRoot(
	{
		text: 'new root',
		expanded: true,
		children: []
	});
	
	treeStore.getRoot().appendChild(newTree);
	
}
