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
        	itemId : 'detailActiviteTypeNom',
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