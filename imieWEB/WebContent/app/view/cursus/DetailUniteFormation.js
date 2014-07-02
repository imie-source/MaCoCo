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
            xtype : 'textfield',
            name : 'text',
            fieldLabel : 'Nom'
        },
        {
            xtype : 'textfield',
            name : 'ufcObjectifs',
            fieldLabel : 'Objectifs'
        },
        {
            xtype : 'button',
            text : 'Valider',
            itemId : 'SaveRecord'
        },
        {
            xtype : 'button',
            text : 'Ajouter',
            itemId : 'AddRecord'
        }
    ]
});