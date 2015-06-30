Ext.define('ExtJsMVC.view.promotion.detailPromotion.DetailNewPromo', {
    extend : 'Ext.form.Panel',
    xtype  : 'promo-DetailNewPromo',
    requires : [
	            'ExtJsMVC.view.promotion.detailPromotion.DetailNewPromoViewController',
	],
	
	controller : 'DetailNewPromoViewController',

    //store: 'PromotionStore',
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
            bind:'{currentCursus.text}',
            width : 500,
        },
        
        {
        	id : 'seleniumDetailPromoSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSavePromoClick',
            disabled:true,
			bind:{
				disabled:'{!cursusStatus.dirtyAndValid}'
			},
        },
        
    ]
});