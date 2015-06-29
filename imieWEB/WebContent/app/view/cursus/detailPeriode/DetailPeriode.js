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
    [	{
			id : 'seleniumDetailPeriodeCursusNom',
			itemId: 'TestNom',
			xtype : 'textfield',
			fieldLabel : 'Intitulé',
			bind:'{currentPeriode.perNom}',
		},
		{
			id : 'seleniumDetailPeriodeCursusPerDeb',
			itemId: 'TestPeriodeDebut',
		    xtype : 'datefield',
		    fieldLabel : 'Du :',
		    format: 'd/m/y',
		    bind:'{currentPeriode.perDebut}',
		},
		{
			id : 'seleniumDetailPeriodeCursusPerFin',
			itemId: 'TestPeriodeFin',
		    xtype : 'datefield',
		    fieldLabel : 'Au :',
		    format: 'd/m/y',
		    bind:'{currentPeriode.perFin}',
		},
		{
			id : 'seleniumDetailPeriodeCursusNbJours',
			itemId: 'TestNbJours',
		    xtype : 'textareafield',
		    fieldLabel : 'Nombre de jours',
		    bind:'{currentPeriode.perNbjours}',
		},
        {
        	id : 'seleniumDetailPeriodeSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSavePeriodeClick',
        },
        
    ]
});