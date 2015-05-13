Ext.define('ExtJsMVC.store.CursusStore', 
{
	extend : 'Ext.data.TreeStore',
	
	storeId : 'CursusStore',
   model : 'ExtJsMVC.model.cursus.CursusModel',
	//model : 'ExtJsMVC.model.cursus.RootCursusModel',
});