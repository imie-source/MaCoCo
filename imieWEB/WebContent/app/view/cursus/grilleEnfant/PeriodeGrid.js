Ext.define('ExtJsMVC.view.cursus.grilleEnfant.PeriodeGrid', 
{
	extend : 'Ext.grid.Panel',
    xtype : 'cursus-periodeGrid',
    
    frame : true,

    requires : [
	            'ExtJsMVC.view.cursus.grilleEnfant.PeriodeGridViewController'
	],
	hideHeaders : true,
	controller : 'PeriodeGridViewController',
	reference : 'periodeGrid',
	columns:[{
		text : 'Période',
    	dataIndex : 'perNom',
    	width : '35%',
    },{
		text : 'Date de début',
    	dataIndex : 'perDebut',
    	width : '25%',
    },
    {
		text : 'Date de fin',
    	dataIndex : 'perFin',
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