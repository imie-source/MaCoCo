Ext.define('ExtJsMVC.view.cursus.grilleEnfant.CursusChildrenGrid', 
{
	extend : 'Ext.grid.Panel',
    xtype : 'cursus-childrenGrid',
    frame : true,

    requires : [
	            'ExtJsMVC.view.cursus.grilleEnfant.CursusChildrenGridViewController'
	],
	
	controller : 'CursusChildrenGridViewController',
	hideHeaders : true,
	columns:[{
    	dataIndex : 'text',
    	width : '85%',
    },{
    	xtype : 'actioncolumn',
    	width : '15%',
    	menuDisabled : true,
    	items :[
    	{
    		icon : 'img/delete.png',
    		tooltip : 'Supprimer',
    		handler : 'onRemove'
    	}],
    }],
});