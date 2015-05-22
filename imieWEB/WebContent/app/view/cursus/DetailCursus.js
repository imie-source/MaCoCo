Ext.define('ExtJsMVC.view.cursus.DetailCursus', {
    extend : 'Ext.form.Panel',
    xtype  : 'cursus-DetailCursus',
    /*bind :{
		store: '{cursuses}'
	},*/
    store: 'CursusStore',
    title   : 'Informations',
    bodyPadding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailCursusNom',
        	itemId: 'detailCursusNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Nom',
            bind:'{currentSecondTreeItem.text}',
            width : 500,
        },
        
        {
        	id : 'seleniumDetailCursusPerDeb',
        	itemId: 'TestPeriodeDebut',
            xtype : 'datefield',
            fieldLabel : 'Du :',
            format: 'd/m/y'
        },
        
        {
        	id : 'seleniumDetailCursusPerFin',
        	itemId: 'TestPeriodeFin',
            xtype : 'datefield',
            fieldLabel : 'Au :',
            format: 'd/m/y'
        },
        
        {
        	id : 'seleniumDetailCursusSave',
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
        	id : 'seleniumDetailCursusAdd',
            xtype : 'button',
            text : 'Ajouter UF',
            itemId : 'AddRecord',
            handler :'onAddButtonClick',
        }
        ,
        {
        	id : 'seleniumDetailCursusPrint',
            xtype : 'button',
            text : 'Imprimer',
            itemId : 'Print'
        }
    ]
});