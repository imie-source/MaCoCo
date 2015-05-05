Ext.define('ExtJsMVC.store.ReferentielStore',{
	extend:'Ext.data.Store',
	//alias:'store.cursuses',
	storeId : 'referentiels',
	//requires:['ExtJsMVC.model.Cursus'],
	model:'ExtJsMVC.model.referentiel.Referentiel',
	autoLoad:true
});