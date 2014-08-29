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
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            width : 500,
        },
        {
            xtype : 'textareafield',
            name : 'mocObjectifs',
            fieldLabel : 'Objectifs',
            width : 500,
            height : 100
        },
        {
            xtype : 'textareafield',
            name : 'mocModalite',
            fieldLabel : 'Modalités',
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
            text : 'Ajouter',
            itemId : 'AddRecord'
        }
    ]
});