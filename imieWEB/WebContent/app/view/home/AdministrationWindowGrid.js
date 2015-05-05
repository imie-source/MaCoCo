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
	/*bind:{
		store:'{cursuses}',
		title:'<b>{currentCursus.curNom}</b>'
	},
	reference:'cursusesGrid',*/
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
/*	columns:[{
		text:'Cursus',
		dataIndex:'curNom',
		flex:1.5,
		editor:{
			bind:'{currentCursus.curNom}',
			selectedOnFocus:true
		},

	},
	
		],*/
		listeners:{
			rowdblclick : function(grid,record,tr,rowIndex,e,eOpts){
				e.stopEvent();
				this.findParentByType('administrationWindow').getController().onCollapse(grid,record,tr,rowIndex);
				
				//TODO: collapse la fenetre pour arriver sur l'écran principal
				//this.findParentByType('administrationWindow').setCollapsed(true);
			},
			rowcontextmenu : function(grid,record,tr,rowIndex,e,eOpts){
				//TODO: afficher une popUp de contextmenu
				//var posi = e.getXY();
				e.stopEvent();
				//maPopUp.showAt(posi);
				this.findParentByType('administrationWindow').getController().onUpdate();
			},
			rowkeydown :function(grid,record,tr,rowIndex,e,eOpts){
				console.log(e.keyCode);
				if(e.keyCode===46){
					this.findParentByType('administrationWindow').getController().onRemove();
				}else if(e.keyCode===113){
					e.stopEvent();
					this.findParentByType('administrationWindow').getController().onCommit();
					//this.findParentByType('administrationWindow').getController().onUpdateF2(grid,rowIndex);
				}else if(e.keyCode===13){
					e.stopEvent();
					this.findParentByType('administrationWindow').getController().onCommit();
				}
			},
			
		}
} );
