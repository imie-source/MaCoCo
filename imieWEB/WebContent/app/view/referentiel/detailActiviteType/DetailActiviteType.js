Ext.define('ExtJsMVC.view.referentiel.detailActiviteType.DetailActiviteType', 
{
    extend : 'Ext.form.Panel',
    xtype : 'referentiel-DetailActiviteType',
    store: 'ReferentielStore',
    title : 'Detail Activite Type',
    frame : true,
    padding : 10,
    requires : [
	            'ExtJsMVC.view.referentiel.detailActiviteType.DetailActiviteTypeViewController'
	],
	
	controller : 'DetailActiviteTypeViewController',
    
    items : 
    [
        {
        	id : 'seleniumDetailActiviteTypeNom',
        	itemId : 'detailActiviteTypeNom',
            xtype : 'textareafield',
            name : 'text',
            bind:'{currentRefTree.text}',
            fieldLabel : 'Intitule',
            width : 500,
        },
        {
        	id : 'seleniumDetailActiviteTypeSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveActiviteTypeClick',
            disabled:true,
            bind:{
				disabled:'{!refTreeStatus.dirtyAndValid}'
			},
        },
        {
        	
        	xtype : 'referentiel-childrenGrid',
        	itemId : 'CompProGrid',
            id : 'CompProGrid',
            title: 'Compétence pro',
            bind:{
            	store:'{compProStore}',
			},
        },
        {
        	id : 'seleniumDetailActiviteTypeAdd',
            xtype : 'button',
            text : 'Ajouter Compétence Pro',
            itemId : 'AddRecord',
            handler : 'onAddCompetenceProClick',
        }
    ]
});