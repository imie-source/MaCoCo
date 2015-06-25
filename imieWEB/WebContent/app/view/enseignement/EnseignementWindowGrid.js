
Ext.define('ExtJsMVC.view.enseignement.EnseignementWindowGrid',{
	extend : 'ExtJsMVC.view.enseignement.EnseignementWindowSimpleGrid',
	alias : 'widget.enseignementWindowGrid',
	/*requires:[
	          'Ext.grid.plugin.CellEditing'
	],
	plugins:[{
		ptype:'cellediting',
		pluginId:'editing',
		triggerEvent:'rowfocus'
	}],*/
	title:'Liste des enseignements',
	reference:'enseignementsGrid',
	width : '100%',
    height : '100%',
	dockedItems:[{
		xtype:'toolbar',
		dock:'top',
		items:[
		    '->',
		    {
		    	xtype:'textfield',
		    	enableKeyEvents : true,
		    	id:'findWord',
		    	placeholder : 'enseignement...',
				itemId:'textfieldRecToolBar',
			},
		]
	},{
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

} );
