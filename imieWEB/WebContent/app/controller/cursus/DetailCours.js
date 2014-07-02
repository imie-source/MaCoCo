Ext.define('ExtJsMVC.controller.cursus.DetailCours',
{
	extend: 'Ext.app.Controller',

	
	views : 
	[
		'cursus.DetailCours'
	],
	

	stores : 
	[
		'CursusStore'
	],
	
	
	init: function()
	{
		this.control(
		{
            'cursus-DetailCours > button#SaveRecord' : 
            {
                click : this.onSaveButtonClick
            }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		var detailView = bouton.up('cursus-DetailCours');
		
		detailView.getRecord().data.cocIntitule = detailView.getComponent('detailCoursNom').getValue();
		
		detailView.updateRecord();
		
		detailView.getRecord().save();
	}
	
});