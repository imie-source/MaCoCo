Ext.define('ExtJsMVC.view.cursus.DetailCursus', {
    extend : 'Ext.form.Panel',
    xtype  : 'cursus-DetailCursus',
    store: 'CursusStore',
    title   : 'Informations',
    bodyPadding : 10,
    
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
        	itemId: 'TestPeriodeDebut',
            xtype : 'datefield',
            fieldLabel : 'Du :',
            format: 'd/m/y'
        },
        
        {
        	itemId: 'TestPeriodeFin',
            xtype : 'datefield',
            fieldLabel : 'Au :',
            format: 'd/m/y'
        },
        
        {
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord'
        },
        {
            xtype : 'button',
            text : 'Ajouter UF',
            itemId : 'AddRecord'
        }
        ,
        {
            xtype : 'button',
            text : 'Imprimer',
            itemId : 'Print'
        }
    ]
});