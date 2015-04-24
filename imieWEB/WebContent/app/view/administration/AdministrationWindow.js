Ext.define('ExtJsMVC.view.administration.AdministrationWindow', {
	extend : 'Ext.form.Panel',
	xtype : 'AdministrationWindow',
	stores : [ 'CursusStore', 'Referentiel' ],

	title : 'Console d\'administration',
	//floating : true,
	//centered : true,
	//modal : true,
	width : '100%',//Ext.getBody().getViewSize().width - 100,
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	items : [  {
		itemId : 'voletReferentiel',

		margin : '0 10 0 0',
		flex : 1,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [

		{
			id : 'seleniumAdminWinRef',
			xtype : 'textfield',
			itemId : 'adminWinRefName',
			fieldLabel : 'Referentiels'
		}, {
			id : 'seleniumAdminWinRefSave',
			xtype : 'button',
			text : 'Ajouter',
			itemId : 'saveRefRecord'
		} ]
	}, {
		itemId : 'voletCursus',
		margin : '0 10 0 0',
		flex : 1,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [

		{
			id : 'seleniumAdminWinCursus',
			xtype : 'textfield',
			itemId : 'adminWinCursusName',
			fieldLabel : 'Cursus'
		}, {
			id : 'seleniumAdminWinCursusSave',
			xtype : 'button',
			text : 'Ajouter',
			itemId : 'saveCursusRecord'
		}, {
			xtype : 'cursus-Grid',
			flex : 1,
		} ]
	}, {
		itemId : 'voletPromo',
		margin : '0 10 0 0',
		flex : 1,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [

		{
			id : 'seleniumAdminWinPromotext',
			xtype : 'textfield',
			fieldLabel : 'Promotions'
		},
		{
			id : 'seleniumAdminWinPromoDateDebut',
        	itemId: 'adminWinPromoDateDebut',
            xtype : 'datefield',
            fieldLabel : 'Du :',
            format: 'd/m/y'
		},
		{
			id : 'seleniumAdminWinPromoDateFin',
        	itemId: 'adminWinPromoDateFin',
            xtype : 'datefield',
            fieldLabel : 'Du :',
            format: 'd/m/y'
		},{
			id : 'seleniumAdminWinPromoSave',
			xtype : 'button',
			text : 'Ajouter',
			itemId : 'savePromoRecord'
		}, ]
	}

	]
});