Ext.define('ExtJsMVC.view.enseignement.EnseignementWindowMultiSelector', {
    extend: 'Ext.container.Container',

    xtype: 'multi-selector',
    alias : 'widget.enseignementWindowMultiSelector',

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
        //bind:'{currentEnseignement.prerequis}',
        fieldName: 'entNom',

        viewConfig: {
            deferEmptyText: false,
            emptyText: 'Pas de prérequis sélectionné'
        },

        search: {
            field: 'entNom',

            store: {
				model:'ExtJsMVC.model.enseignement.EnseignementModel',
				autoLoad:true
			},
        }
        
    }]
});