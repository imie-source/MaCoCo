Ext.define('ExtJsMVC.view.enseignement.EnseignementWindowGrid',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.enseignementWindowGrid',
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
	height : 600,
	title:'Liste des enseignements',
	bind:{
		store:'{enseignementStore}',
	},
	reference:'enseignementsGrid',
	columns:[{
		text:'Enseignements',
		dataIndex:'entNom',
		flex:1.5,
	}],
	
	 //enableLocking: true,
     plugins: [{
         ptype: 'rowexpander',
         rowBodyTpl : new Ext.XTemplate(
             '<p><b>Contenu:</b> {entContenu}</p>',
             '<p><b>Prérequis:</b> {prerequis}</p>',
         {
             formatChange: function(v){
                 var color = v >= 0 ? 'green' : 'red';
                 return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
             }
         })
     }],
   //  collapsible: true,
   //  animCollapse: false,
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
