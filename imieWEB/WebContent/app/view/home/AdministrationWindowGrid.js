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
			}
		]
		
	}],

		listeners:{
			
			rowkeydown :function(grid,record,tr,rowIndex,e,eOpts){
				console.log(e.keyCode);
				if(e.keyCode===46){
					//this.findParentByType('administrationWindow').getController().onRemove();
				}else if(e.keyCode===113){
					e.stopEvent();
					//this.findParentByType('administrationWindow').getController().onCommit();
				}else if(e.keyCode===13){
					e.stopEvent();
					//this.findParentByType('administrationWindow').getController().onCommit();
				}
			},
			
		}
} );
