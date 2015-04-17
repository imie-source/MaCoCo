Ext.define('ExtJsMVC.view.referentiel.DetailActiviteType', 
{
    extend : 'Ext.form.Panel',
    xtype : 'referentiel-DetailActiviteType',
    store: 'ReferentielStore',
    title : 'Detail Activite Type',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailActiviteTypeNom',
        	itemId : 'detailActiviteTypeNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            width : 500,
        },
        {
        	id : 'seleniumDetailActiviteTypeSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord'
        },
        {
        	id : 'seleniumDetailActiviteTypeAdd',
            xtype : 'button',
            text : 'Ajouter Compétence Pro',
            itemId : 'AddRecord'
        }
    ]
});