Ext.define('ExtJsMVC.store.Referentiel', 
{
	extend : 'Ext.data.TreeStore',
	
	storeId : 'Referentiel',
	
    model : 'ExtJsMVC.model.referentiel.RootReferentiel',
    
    /*root : {
    	
    },*/
    
    autoLoad : false
});