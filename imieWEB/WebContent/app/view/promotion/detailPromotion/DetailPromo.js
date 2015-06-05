Ext.define('ExtJsMVC.view.promotion.detailPromotion.DetailPromo', {
    extend : 'Ext.form.Panel',
    xtype  : 'promo-DetailPromo',

    store: 'PromotionStore',
    title   : 'Informations',
    bodyPadding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailPromoNom',
        	itemId: 'detailPromoNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Nom',
            bind:'{currentSecondPromoTreeItem.text}',
            width : 500,
        },
        
        {
        	id : 'seleniumDetailPromoPerDeb',
        	itemId: 'TestPeriodeDebut',
            xtype : 'datefield',
            fieldLabel : 'Du :',
            format: 'd/m/y'
        },
        
        {
        	id : 'seleniumDetailPromoPerFin',
        	itemId: 'TestPeriodeFin',
            xtype : 'datefield',
            fieldLabel : 'Au :',
            format: 'd/m/y'
        },
        
        {
        	id : 'seleniumDetailPromoSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSavePromoClick',
            disabled:true,
			bind:{
				disabled:'{!itemPromoStatus.dirtyAndValid}'
			},
        },
        {
        	id : 'seleniumDetailPromoAdd',
            xtype : 'button',
            text : 'Ajouter UF',
            itemId : 'AddRecord',
            handler :'onAddUfPromoClick',
        }
        ,
        {
        	id : 'seleniumDetailPromoPrint',
            xtype : 'button',
            text : 'Imprimer',
            itemId : 'Print',
            handler :'onPrintClick',
        }
    ]
});