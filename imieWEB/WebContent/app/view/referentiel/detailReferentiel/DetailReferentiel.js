Ext.define('ExtJsMVC.view.referentiel.detailReferentiel.DetailReferentiel', {
    extend : 'Ext.form.Panel',
    xtype : 'referentiel-DetailReferentiel',
    store: 'ReferentielStore',
    title : 'Detail Referentiel',
    frame : true,
    padding : 10,
    requires : [
	            'ExtJsMVC.view.referentiel.detailReferentiel.DetailReferentielViewController'
	],
	
	controller : 'DetailReferentielViewController',
   
    items : 
    [
        {
        	id : 'seleniumDetailReferentielNom',
        	itemId : 'detailReferentielNom',
            xtype : 'textareafield',
            name : 'text',
            bind:'{currentRefTree.text}',
            fieldLabel : 'Intitule',
            width : 500,
        },
        {
        	xtype : 'referentiel-childrenGrid',
        	itemId : 'ActTypeGrid',
            id : 'ActTypeGrid',
            title: 'Activité type',
            
            bind:{
            	store:'{actTypeStore}',
			},
        },
        {
        	id : 'seleniumDetailReferentielAdd',
            xtype : 'button',
            text : 'Ajouter AT',
            itemId : 'AddRecord',
            handler : 'onAddActiviteTypeClick',
        },
        
    ]
});