Ext.define('ExtJsMVC.controller.administration.AdministrationWindowCtrl',
{
	extend: 'Ext.app.Controller',
	
	views : 
		[
		 	'administration.AdministrationWindow'
		],
	
	refs :
		[
		 	{ref : 'adminWindow', selector: 'AdministrationWindow'},
		],

	stores : 
	[
		'CursusStore',
		'Referentiel'
	],
	
	
	init: function()
	{
		this.control(
		{

			'AdministrationWindow #closeAdminWin' : 
            {
                click : this.onCloseAdminWinButtonClick
            },
			/*'AdministrationWindow #saveRefRecord' : 
            {
                click : this.onSaveRefButtonClick
            },*/
			'AdministrationWindow #saveCursusRecord' :
            {
                click : this.onSaveCursusButtonClick
            },
			/*'AdministrationWindow #savePromoRecord' : 
            {
                click : this.onSavePromoButtonClick
            }*/
		});

	},
	
	onCloseAdminWinButtonClick : function(bouton)
	{
		console.log('test: .close()');
		this.getAdminWindow().close();
	},
	
	onSaveCursusButtonClick : function(bouton)
	{
		console.log('onSaveCursusButtonClick');
		var detailView = bouton.up('AdministrationWindow');
		console.log(detailView);
		
		console.log(detailView.getComponent('adminWinCursusName').getValue());
		
		
		/*console.log("detailView.getRecord().data");
		console.log(detailView.getRecord().data);
		
		detailView.updateRecord();
		detailView.getRecord().save();*/
	}
	
		
});