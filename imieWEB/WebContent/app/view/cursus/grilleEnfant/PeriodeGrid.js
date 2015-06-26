Ext.define('ExtJsMVC.view.cursus.grilleEnfant.PeriodeGrid', 
{
	extend : 'Ext.grid.Panel',
    xtype : 'cursus-periodeGrid',
    
    frame : true,

    requires : [
	            'ExtJsMVC.view.cursus.grilleEnfant.PeriodeGridViewController'
	],
	
	controller : 'PeriodeGridViewController',
	reference : 'periodeGrid',
	columns:[{
		text : 'Date de début',
    	dataIndex : 'perDebut',
    	width : '40%',
    },
    {
		text : 'Date de fin',
    	dataIndex : 'perFin',
    	width : '40%',
    },{
    	xtype : 'actioncolumn',
    	width : '20%',
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