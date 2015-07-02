Ext.define('ExtJsMVC.view.promotion.detailCours.DetailCoursPromo', {
    extend : 'Ext.form.Panel',
    xtype : 'promo-DetailCours',
    requires : [
	            'ExtJsMVC.view.promotion.detailCours.DetailCoursPromoViewController',
	],
	
	controller : 'DetailCoursPromoViewController',
    title : 'Detail Cours',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailCoursPromoNom',
        	itemId : 'detailCoursPromoNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            bind:'{currentSecondPromoTreeItem.text}',
            width : 500
        },
        
        {
        	id : 'seleniumDetailCoursPromoDuree',
            xtype : 'textfield',
            name : 'copDuree',
            bind:'{currentSecondPromoTreeItem.copDuree}',
            fieldLabel : 'Duree'
        },
        {
        	id : 'seleniumDetailCoursTheorie',
        	itemId : 'theoriePratiqueTextField',
            xtype : 'textfield',
            emptyText : 'ex : 30/70',
            fieldLabel : 'Répartition théorie/pratique (en %) :',
            name : 'theoriePratiqueTextField',
        },
        {
        	id : 'seleniumDetailCoursPromoType',
            xtype : 'textfield',
            name : 'copType',
            bind:'{currentSecondPromoTreeItem.copType}',
            fieldLabel : 'Type'
        },
        {
        	id : 'seleniumDetailCoursPromoObj',
            xtype : 'textareafield',
            name : 'copObjectifs',
            fieldLabel : 'Objectifs',
            bind:'{currentSecondPromoTreeItem.copObjectifs}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailCoursPromoEval',
            xtype : 'textfield',
            name : 'copEvaluation',
            fieldLabel : 'Evaluation',
            bind:'{currentSecondPromoTreeItem.copEvaluation}',
            width : 500
        },
        {
        	id : 'seleniumDetailCoursPromoComm',
            xtype : 'textareafield',
            name : 'copCommentaires',
            fieldLabel : 'Commentaires',
            bind:'{currentSecondPromoTreeItem.copCommentaires}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailCoursPromoSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveCoursPromoClick',
            disabled:true,
			bind:{
				disabled:'{!itemPromoStatus.dirtyAndValid}'
			},
        },
        {
        	id : 'seleniumDetailCoursPrint',
            xtype : 'button',
            text : 'Imprimer fiche de cours',
            handler : 'onPrintClick',
            itemId : 'Print'
        },
        {
        	itemId : 'detailBottomView',
        	layout : 
  			{
        		type  : 'hbox'
    
  			},
        }
    ]
});