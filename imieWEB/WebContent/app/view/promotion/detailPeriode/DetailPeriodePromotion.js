Ext.define('ExtJsMVC.view.promotion.detailPeriode.DetailPeriodePromotion', {
    extend : 'Ext.form.Panel',
    xtype : 'promotion-DetailPeriode',
    store: 'PeriodePromotionStore',
    requires : [
	            'ExtJsMVC.view.promotion.detailPeriode.DetailPeriodePromotionViewController',
	],
	
	controller : 'DetailPeriodePromotionViewController',
    title : 'Detail Periode',
    frame : true,
    padding : 10,
    
    items : 
    [	{
			id : 'seleniumDetailPeriodePromotionNom',
			itemId: 'TestNom',
			xtype : 'textfield',
			fieldLabel : 'Intitulé',
			bind:'{currentPeriodePromotion.perproNom}',
		},
		{
			id : 'seleniumDetailPeriodePromotionPerDeb',
			itemId: 'TestPeriodeDebut',
		    xtype : 'datefield',
		    fieldLabel : 'Du :',
		    format: 'd/m/y',
		    bind:'{currentPeriodePromotion.perproDebut}',
		},
		{
			id : 'seleniumDetailPeriodePromotionPerFin',
			itemId: 'TestPeriodeFin',
		    xtype : 'datefield',
		    fieldLabel : 'Au :',
		    format: 'd/m/y',
		    bind:'{currentPeriodePromotion.perproFin}',
		},
		{
			id : 'seleniumDetailPeriodePromotionNbJours',
			itemId: 'TestNbJours',
		    xtype : 'textareafield',
		    fieldLabel : 'Nombre de jours',
		    bind:'{currentPeriodePromotion.perproNbjours}',
		},
        {
        	id : 'seleniumDetailPeriodePromotionSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSavePeriodePromotionClick',
        },
        
    ]
});