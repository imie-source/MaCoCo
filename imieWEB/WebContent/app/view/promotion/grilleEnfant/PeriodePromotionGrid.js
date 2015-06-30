Ext.define('ExtJsMVC.view.promotion.grilleEnfant.PeriodePromotionGrid', 
{
	extend : 'Ext.grid.Panel',
    xtype : 'promotion-periodePromotionGrid',
    
    frame : true,

    requires : [
	            'ExtJsMVC.view.promotion.grilleEnfant.PeriodePromotionGridViewController'
	],
	hideHeaders : true,
	controller : 'PeriodePromotionGridViewController',
	reference : 'periodePromotionGrid',
	columns:[{
		text : 'Période',
    	dataIndex : 'perproNom',
    	width : '35%',
    },{
		text : 'Date de début',
    	dataIndex : 'perproDebut',
    	width : '25%',
    },
    {
		text : 'Date de fin',
    	dataIndex : 'perproFin',
    	width : '25%',
    },{
    	xtype : 'actioncolumn',
    	width : '15%',
    	menuDisabled : true,
    	items :[
		{
			icon : 'img/edit2.png',
			tooltip : 'Modifier',
			handler : 'onEdit'
		},
		{
			icon : 'img/blank.png',
			
		},
    	{
    		icon : 'img/delete.png',
    		tooltip : 'Supprimer',
    		handler : 'onRemove'
    	}],
    }],
});