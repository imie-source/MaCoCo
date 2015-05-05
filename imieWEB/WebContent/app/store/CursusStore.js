Ext.define('ExtJsMVC.store.CursusStore', 
{
	extend : 'Ext.data.TreeStore',
	
	storeId : 'CursusStore',
	autoSync : true,
    model : 'ExtJsMVC.model.cursus.CursusModel',
});