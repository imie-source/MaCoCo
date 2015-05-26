Ext.define('ExtJsMVC.view.referentiel.DetailCompetencePro', 
{
    extend : 'Ext.form.Panel',
    xtype : 'referentiel-DetailCompetencePro',
    store: 'ReferentielStore',
    title : 'Detail Competence Professionnelle',
    frame : true,
    padding : 10,
    
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
            handler : 'onSaveRefButtonClick',
            disabled:true,
            bind:{
            	disabled:'{!refTreeStatus.dirtyAndValid}'
			},
        },
        {
        	id : 'seleniumDetailCompetenceProAdd',
            xtype : 'button',
            text : 'Ajouter Savoir',
            itemId : 'AddRecord',
            handler : 'onAddRefButtonClick',
        }
    ]
});