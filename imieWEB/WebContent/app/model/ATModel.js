Ext.define('ExtJsMVC.model.ATModel',
{
	extend : 'Ext.data.TreeModel',
	fields : [{name: 'name', mapping: 'text'}],
	childType : 'ExtJsMVC.model.SavoirModel'
});


