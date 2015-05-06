Ext.define('ExtJsMVC.store.ReferentielStore',{
	extend:'Ext.data.Store',
	
	storeId : 'referentiels',

	model:'ExtJsMVC.model.referentiel.Referentiel',
	autoLoad:true
});