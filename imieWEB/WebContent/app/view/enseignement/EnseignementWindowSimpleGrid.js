Ext.define('ExtJsMVC.view.enseignement.EnseignementWindowSimpleGrid',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.enseignementWindowSimpleGrid',
	requires:[
	          'Ext.grid.plugin.CellEditing'
	],

	modelValidation:true,
	autoScroll:true,
	bind:{
		store:'{enseignementStore}',
	},
	width : '100%',
	height : '100%',
	layout: 'fit',
	columns:[{
		text:'Enseignements',
		dataIndex:'entNom',
		flex:1.5,
	}],
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
	viewConfig: 
    {
        plugins: 
        {
        	ptype: 'gridviewdragdrop',
    		dragGroup: 'groupCoursEnseignement'
        }
    },
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
	}],

} );
