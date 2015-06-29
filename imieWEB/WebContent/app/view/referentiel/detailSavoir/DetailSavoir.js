Ext.define('ExtJsMVC.view.referentiel.detailSavoir.DetailSavoir', 
{
    extend : 'Ext.form.Panel',
    xtype : 'referentiel-DetailSavoir',
    store: 'ReferentielStore',
    title : 'Detail Savoir',
    frame : true,
    padding : 10,
    requires : [
	            'ExtJsMVC.view.referentiel.detailSavoir.DetailSavoirViewController'
	],
	
	controller : 'DetailSavoirViewController',
   
    items : 
    [
        {
        	id : 'seleniumDetailSavoirNom',
        	itemId : 'detailSavoirNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            bind:'{currentRefTree.text}',
            width : 500,
        },
        {
        	id : 'seleniumDetailSavoirSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveSavoirClick',
            disabled:true,
            bind:{
				disabled:'{!refTreeStatus.dirtyAndValid}'
			},
        },
        
        /*{
            cls: 'cours-view',
            tpl: '<tpl for="savoirs">' +
                    '<div class="savoir">hello</div>' +
                 '</tpl>',
            itemSelector: 'div.savoir',
            overItemCls: 'savoir-over',
            selectedItemClass: 'savoir-selected',
            singleSelect: true,

        }*/
    ]
    
});