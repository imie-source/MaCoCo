Ext.define('ExtJsMVC.view.cursus.DetailUniteFormation', {
    extend : 'Ext.form.Panel',
    xtype  : 'cursus-DetailUniteFormation',
   // store: 'CursusStore',
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
           bind:'{currentSecondTreeItem.text}',
           width : 500,
        },
        {
        	id : 'seleniumDetailUFObj',
            xtype : 'textareafield',
            name : 'ufcObjectifs',
            fieldLabel : 'Objectifs',
            bind:'{currentSecondTreeItem.ufcObjectifs}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailUFSave',
            xtype : 'button',
            handler : 'onSaveButtonClick',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            disabled:true,
			bind:{
				disabled:'{!itemStatus.dirtyAndValid}'
			},
        },
        {
        	id : 'seleniumDetailUFAdd',
            xtype : 'button',
            handler :'onAddButtonClick',
            text : 'Ajouter Module',
            itemId : 'AddRecord'
        },
    ]
});