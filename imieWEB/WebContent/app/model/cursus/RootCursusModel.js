Ext.define('ExtJsMVC.model.cursus.RootCursusModel',
{
	extend : 'Ext.data.TreeModel',
	fields : [
	          {name: 'itemId'}, 
	          {name: 'name'}
	         ],
	childType : 'ExtJsMVC.model.cursus.CursusModel'
});

