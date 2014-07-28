Ext.define('ExtJsMVC.store.Referentiel', 
{
	extend : 'Ext.data.TreeStore',
	
	storeId : 'Referentiel',
	
    model : 'ExtJsMVC.model.referentiel.Referentiel',
    
    autoLoad : false
});