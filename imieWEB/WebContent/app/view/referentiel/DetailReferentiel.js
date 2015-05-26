Ext.define('ExtJsMVC.view.referentiel.DetailReferentiel', {
    extend : 'Ext.form.Panel',
    xtype : 'referentiel-DetailReferentiel',
    store: 'ReferentielStore',
    title : 'Detail Referentiel',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailReferentielNom',
        	itemId : 'detailReferentielNom',
            xtype : 'textareafield',
            name : 'text',
            bind:'{currentRefTree.text}',
            fieldLabel : 'Intitule',
            width : 500,
        },
        {
        	id : 'seleniumDetailReferentielSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveRefButtonClick',
            disabled:true,
            bind:{
				disabled:'{!refTreeStatus.dirtyAndValid}'
			},
        },
        {
        	id : 'seleniumDetailReferentielAdd',
            xtype : 'button',
            text : 'Ajouter AT',
            itemId : 'AddRecord',
            handler : 'onAddRefButtonClick',
        }
    ]
});