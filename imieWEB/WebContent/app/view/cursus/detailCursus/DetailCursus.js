Ext.define('ExtJsMVC.view.cursus.detailCursus.DetailCursus', {
    extend : 'Ext.form.Panel',
    xtype  : 'cursus-DetailCursus',
    
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
            handler : 'onSaveCursusClick',
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
            handler :'onAddUfCursusClick',
        },
        {
        	id : 'seleniumDetailCursusAddPromo',
            xtype : 'button',
            text : 'Ajouter Promotion',
            itemId : 'AddPromoRecord',
            handler :'onAddPromoClick',
        },
        {
        	id : 'seleniumDetailCursusPrint',
            xtype : 'button',
            text : 'Imprimer',
            handler : 'onPrintClick',
            itemId : 'Print'
        },
        {
        	xtype : 'cursus-childrenGrid',
        	itemId : 'cursusUfGrid',
            id : 'cursusUfGrid',
            title: 'Unité de formation',
            bind:{
            	store:'{ufStore}',
			},
        },
    ]
});