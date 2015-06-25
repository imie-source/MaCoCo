Ext.define('ExtJsMVC.view.referentiel.detailCompetencePro.DetailCompetencePro', 
{
    extend : 'Ext.form.Panel',
    xtype : 'referentiel-DetailCompetencePro',
    store: 'ReferentielStore',
    title : 'Detail Competence Professionnelle',
    frame : true,
    padding : 10,
    requires : [
	            'ExtJsMVC.view.referentiel.detailCompetencePro.DetailCompetenceProViewController'
	],
	
	controller : 'DetailCompetenceProViewController',
   
    items : 
    [
        {
        	id : 'seleniumDetailCompetenceProNom',
        	itemId : 'detailCompetenceProNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            bind:'{currentRefTree.text}',
            width : 500,
        },
        {
        	id : 'seleniumDetailCompetenceProSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveCompetenceProClick',
            disabled:true,
            bind:{
            	disabled:'{!refTreeStatus.dirtyAndValid}'
			},
        },
        {
        	xtype : 'referentiel-childrenGrid',
        	itemId : 'savGrid',
            id : 'savGrid',
            title: 'Savoir',
            bind:{
            	store:'{savoirStore}',
			},
        },
        {
        	id : 'seleniumDetailCompetenceProAdd',
            xtype : 'button',
            text : 'Ajouter Savoir',
            itemId : 'AddRecord',
            handler : 'onAddSavoirClick',
        }
    ]
});