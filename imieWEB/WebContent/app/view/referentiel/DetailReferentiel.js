Ext.define('ExtJsMVC.view.referentiel.DetailReferentiel', {
    extend : 'Ext.form.Panel',
    xtype : 'referentiel-DetailReferentiel',
    store: 'ReferentielStore',
    title : 'Detail Referentiel',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	itemId : 'detailReferentielNom',
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