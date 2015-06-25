Ext.define('ExtJsMVC.view.promotion.detailModule.DetailModulePromo', {
    extend : 'Ext.form.Panel',
    xtype : 'promo-DetailModule',
    requires : [
	            'ExtJsMVC.view.promotion.detailModule.DetailModulePromoViewController',
	],
	
	controller : 'DetailModulePromoViewController',
    store: 'PromotionStore',
    title : 'Detail Module',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailModulePromoNom',
        	itemId : 'detailModulePromoNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            bind:'{currentSecondPromoTreeItem.text}',
            width : 500,
        },
        {
        	id : 'seleniumDetailModulePromoObjectif',
            xtype : 'textareafield',
            name : 'mopObjectifs',
            fieldLabel : 'Objectifs',
            bind:'{currentSecondPromoTreeItem.mopObjectifs}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailModulePromoModalite',
            xtype : 'textareafield',
            name : 'mopModalite',
            fieldLabel : 'Modalités',
            bind:'{currentSecondPromoTreeItem.mopModalite}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailModulePromoSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveModulePromoClick',
            disabled:true,
			bind:{
				disabled:'{!itemPromoStatus.dirtyAndValid}'
			},
        },
        {
        	xtype : 'promotion-childrenGrid',
        	itemId : 'promoCoursGrid',
            id : 'promoCoursGrid',
            title: 'Cours',
            bind:{
            	store:'{coursByPromotion}',
			},
        },
        {
        	id : 'seleniumDetailModulePromoAdd',
            xtype : 'button',
            handler :'onAddCoursPromoClick',
            text : 'Ajouter Cours',
            itemId : 'AddRecord'
        },
        
    ]
});