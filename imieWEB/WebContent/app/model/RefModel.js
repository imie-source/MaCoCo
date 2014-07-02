Ext.define('ExtJsMVC.model.RefModel',
{
	extend : 'Ext.data.TreeModel',
	fields : [{name: 'name', mapping: 'text'}],
	childType : 'ExtJsMVC.model.ATModel'
});

