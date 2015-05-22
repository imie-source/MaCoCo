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
            bind:'{currentSecondTreeItem.text}',
            width : 500,
        },
        {
        	id : 'seleniumDetailModuleObjectif',
            xtype : 'textareafield',
            name : 'mocObjectifs',
            fieldLabel : 'Objectifs',
            bind:'{currentSecondTreeItem.mocObjectifs}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailModuleModalite',
            xtype : 'textareafield',
            name : 'mocModalite',
            fieldLabel : 'Modalités',
            bind:'{currentSecondTreeItem.mocModalite}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailModuleSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveButtonClick',
            disabled:true,
			bind:{
				disabled:'{!itemStatus.dirtyAndValid}'
			},
        },
        {
        	id : 'seleniumDetailModuleAdd',
            xtype : 'button',
            handler :'onAddButtonClick',
            text : 'Ajouter Cours',
            itemId : 'AddRecord'
        }
    ]
});