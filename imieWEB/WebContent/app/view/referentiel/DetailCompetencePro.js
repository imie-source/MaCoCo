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
        	itemId : 'detailCompetenceProNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            width : 500,
        },
        {
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord'
        },
        {
            xtype : 'button',
            text : 'Ajouter',
            itemId : 'AddRecord'
        }
    ]
});