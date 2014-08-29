Ext.define('ExtJsMVC.store.UniteFormationStore', 
{
	extend : 'Ext.data.TreeStore',
	
	storeId : 'UniteFormationStore',
	
    model : 'ExtJsMVC.model.cursus.RootCursusModel',
    
    root : {
    	
    },
	
    autoLoad : false
});
