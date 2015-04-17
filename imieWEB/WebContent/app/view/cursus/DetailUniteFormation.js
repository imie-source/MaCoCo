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
        	id : 'seleniumDetailUFNom',
        	itemId: 'detailUniteFormationNom',
            xtype : 'textareafield',
            name : 'text',
           fieldLabel : 'Nom',
           width : 500,
        },
        {
        	id : 'seleniumDetailUFObj',
            xtype : 'textareafield',
            name : 'ufcObjectifs',
            fieldLabel : 'Objectifs',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailUFSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord'
        },
        {
        	id : 'seleniumDetailUFAdd',
            xtype : 'button',
            text : 'Ajouter Module',
            itemId : 'AddRecord'
        }
    ]
});