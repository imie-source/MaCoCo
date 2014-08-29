Ext.define('ExtJsMVC.view.referentiel.DetailSavoir', 
{
    extend : 'Ext.form.Panel',
    xtype : 'referentiel-DetailSavoir',
    store: 'ReferentielStore',
    title : 'Detail Savoir',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	itemId : 'detailSavoirNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            width : 500,
        },
        {
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord'
        },
        
        {
            cls: 'cours-view',
            tpl: '<tpl for="savoirs">' +
                    '<div class="savoir">hello</div>' +
                 '</tpl>',
            itemSelector: 'div.savoir',
            overItemCls: 'savoir-over',
            selectedItemClass: 'savoir-selected',
            singleSelect: true,

        }
    ]
    
});