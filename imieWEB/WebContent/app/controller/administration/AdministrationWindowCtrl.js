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