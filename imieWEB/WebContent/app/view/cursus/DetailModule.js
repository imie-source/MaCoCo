Ext.define('ExtJsMVC.view.cursus.DetailModule', {
    extend : 'Ext.form.Panel',
    xtype : 'cursus-DetailModule',
    store: 'CursusStore',
    title : 'Detail Module',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	itemId : 'detailModuleNom',
            xtype : 'textfield',
            name : 'text',
            fieldLabel : 'Intitule'
        },
        {
            xtype : 'textfield',
            name : 'mocObjectifs',
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