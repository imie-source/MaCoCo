Ext.define('ExtJsMVC.view.home.AdministrationWindowGrid',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.administrationWindowGrid',
	requires:[
	          'Ext.grid.plugin.CellEditing'
	],
	plugins:[{
		ptype:'cellediting',
		pluginId:'editing',
		triggerEvent:'rowfocus'
	}],
	hideHeaders : true,
	modelValidation:true,
	autoScroll:true,
	dockedItems:[{
		xtype:'toolbar',
		dock:'bottom',
		items:[
		    '->',
		    {
				text : '+',
				itemId:'addRecToolBar',
				handler:'onAdd'
			},{
				text : 'o',
				itemId:'updateRecToolBar',
				handler:'onUpdate'
			},{
				text : '-',
				itemId:'RecToolBar',
				handler:'onRemove'
			},
		]
	}],
});
