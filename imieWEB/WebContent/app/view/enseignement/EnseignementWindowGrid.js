
Ext.define('ExtJsMVC.view.enseignement.EnseignementWindowGrid',{
	extend : 'ExtJsMVC.view.enseignement.EnseignementWindowSimpleGrid',
	alias : 'widget.enseignementWindowGrid',

	//title:'Liste des enseignements',
	reference:'enseignementsGrid',
	width : '100%',
	height : window.innerHeight-100,
	dockedItems:[{
		xtype:'toolbar',
		dock:'top',
		items:[
		    '->',
		    {
		    	xtype:'image',
		    	src:'img/magGlass.png',
		    	width : 20,
		    	height : 20,
			},
		    {
		    	xtype:'textfield',
		    	enableKeyEvents : true,
		    	id:'findWord',
		    	emptyText : 'filtrer les enseignements',
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
