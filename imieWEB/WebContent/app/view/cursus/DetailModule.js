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
        	id : 'seleniumDetailModuleNom',
        	itemId : 'detailModuleNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            width : 500,
        },
        {
        	id : 'seleniumDetailModuleObjectif',
            xtype : 'textareafield',
            name : 'mocObjectifs',
            fieldLabel : 'Objectifs',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailModuleModalite',
            xtype : 'textareafield',
            name : 'mocModalite',
            fieldLabel : 'Modalités',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailModuleSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord'
        },
        {
        	id : 'seleniumDetailModuleAdd',
            xtype : 'button',
            text : 'Ajouter Cours',
            itemId : 'AddRecord'
        }
    ]
});