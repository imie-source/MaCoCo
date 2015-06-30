Ext.define('ExtJsMVC.view.promotion.grilleEnfant.PromoChildrenGrid', 
{
	extend : 'Ext.grid.Panel',
    xtype : 'promotion-childrenGrid',
    
    frame : true,

    requires : [
	            'ExtJsMVC.view.promotion.grilleEnfant.PromoChildrenGridViewController'
	],
	
	controller : 'PromoChildrenGridViewController',
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