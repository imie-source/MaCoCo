Ext.define('ExtJsMVC.view.cursus.DetailUniteFormation', {
    extend : 'Ext.form.Panel',
    xtype  : 'cursus-DetailUniteFormation',
    store: 'CursusStore',
    title   : 'Detail Unite Formation',
    frame   : true,
    padding : 10,
    
    items : 
    [
        {
        	itemId: 'detailUniteFormationNom',
            xtype : 'textareafield',
            name : 'text',
           fieldLabel : 'Nom',
           width : 500,
        },
        {
            xtype : 'textareafield',
            name : 'ufcObjectifs',
            fieldLabel : 'Objectifs',
            width : 500,
            height : 100
        },
        {
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord'
        },
        {
            xtype : 'button',
            text : 'Ajouter Module',
            itemId : 'AddRecord'
        }
    ]
});