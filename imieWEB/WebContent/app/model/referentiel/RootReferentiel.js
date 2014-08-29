Ext.define('ExtJsMVC.model.referentiel.RootReferentiel',
{
	extend : 'Ext.data.TreeModel',
	fields : [
	          {name: 'itemId'}, 
	          {name: 'name'}
	         ],
	childType : 'ExtJsMVC.model.referentiel.Referentiel'
});

