Ext.define('ExtJsMVC.view.cursus.DetailCursus', {
    extend : 'Ext.form.Panel',
    xtype  : 'cursus-DetailCursus',
    store: 'CursusStore',
    title   : 'Detail Cursus',
    frame   : true,
    padding : 10,
    
    items : 
    [
        {
        	itemId: 'detailCursusNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Nom',
            width : 500,
        },
        {
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord'
        },
        {
            xtype : 'button',
            text : 'Ajouter une UF',
            itemId : 'AddRecord'
        }
        ,
        {
            xtype : 'button',
            text : 'Print',
            itemId : 'Print'
        }
    ]
});