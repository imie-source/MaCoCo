Ext.define('ExtJsMVC.view.cursus.detailPeriode.DetailPeriode', {
    extend : 'Ext.form.Panel',
    xtype : 'cursus-DetailPeriode',
    store: 'PeriodeStore',
    requires : [
	            'ExtJsMVC.view.cursus.detailPeriode.DetailPeriodeViewController',
	],
	
	controller : 'DetailPeriodeViewController',
    title : 'Detail Periode',
    frame : true,
    padding : 10,
    
    items : 
    [
		{
			id : 'seleniumDetailCursusPerDeb',
			itemId: 'TestPeriodeDebut',
		    xtype : 'datefield',
		    fieldLabel : 'Du :',
		    format: 'd/m/y',
		    bind:'{currentPeriode.perDebut}',
		},
		{
			id : 'seleniumDetailCursusPerFin',
			itemId: 'TestPeriodeFin',
		    xtype : 'datefield',
		    fieldLabel : 'Au :',
		    format: 'd/m/y',
		    bind:'{currentPeriode.perFin}',
		},
		{
			id : 'seleniumDetailCursusNbJours',
			itemId: 'TestNbJours',
		    xtype : 'textareafield',
		    fieldLabel : 'Nombre de jours',
		    bind:'{currentPeriode.perNbjours}',
		},
        {
        	id : 'seleniumDetailModuleSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSavePeriodeClick',
        },
        
    ]
});