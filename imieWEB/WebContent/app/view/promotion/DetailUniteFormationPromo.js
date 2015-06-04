Ext.define('ExtJsMVC.view.promotion.DetailUniteFormationPromo', {
    extend : 'Ext.form.Panel',
    xtype  : 'promo-DetailUniteFormation',
    requires : [
	            'ExtJsMVC.view.promotion.DetailUfPromoViewController',
	],
	
	controller : 'DetailUfPromoViewController',
    title   : 'Detail Unite Formation',
    frame   : true,
    padding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailUFPromoNom',
        	itemId: 'detailUniteFormationPromoNom',
            xtype : 'textareafield',
            name : 'text',
           fieldLabel : 'Nom',
           bind:'{currentSecondPromoTreeItem.text}',
           width : 500,
        },
        {
        	id : 'seleniumDetailUFPromoObj',
            xtype : 'textareafield',
            name : 'ufcObjectifs',
            fieldLabel : 'Objectifs',
            bind:'{currentSecondPromoTreeItem.ufpObjectifs}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailUFPromoSave',
            xtype : 'button',
            handler : 'onSaveUfPromoClick',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            disabled:true,
			bind:{
				disabled:'{!itemPromoStatus.dirtyAndValid}'
			},
        },
        {
        	id : 'seleniumDetailUFPromoAdd',
            xtype : 'button',
            handler :'onAddModulePromoClick',
            text : 'Ajouter Module',
            itemId : 'AddRecord'
        },
    ]
});