Ext.define('ExtJsMVC.view.referentiel.grilleEnfant.RefChildrenGrid', 
{
	extend : 'Ext.grid.Panel',
    xtype : 'referentiel-childrenGrid',
    
    frame : true,

    requires : [
	            'ExtJsMVC.view.referentiel.grilleEnfant.RefChildrenGridViewController'
	],
	
	controller : 'RefChildrenGridViewController',
	
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