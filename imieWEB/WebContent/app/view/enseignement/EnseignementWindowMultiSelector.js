Ext.define('ExtJsMVC.view.enseignement.EnseignementWindowMultiSelector', {
    extend: 'Ext.container.Container',

    xtype: 'multi-selector',
    alias : 'widget.enseignementWindowMultiSelector',
    id : 'multiselectorId',
    requires: [
        'Ext.view.MultiSelector'
    ],

    width: '100%',
    height: 200,
    layout: 'fit',


    items: [{
        xtype: 'multiselector',
        itemId : 'prerequisMultiselector',
        id : 'prerequisMultiselector',
        title: 'Prérequis',
        fieldName: 'entNom',
        viewConfig: {
            deferEmptyText: false,
            emptyText: 'Pas de prérequis sélectionné'
        },
        
        search: {
        	
        	id : 'searchEntGrid',
        	xtype : 'enseignementWindowSimpleGrid',
            width : 300,
            height : 400,
           
            autoScroll : true,
           
        }
        
    }]
});