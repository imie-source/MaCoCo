Ext.define('ExtJsMVC.controller.referentiel.DetailSavoir',
{
	extend: 'Ext.app.Controller',
	
	views : 
	[
		'referentiel.DetailSavoir'
	],
	
	refs :
		[
		 	{ref : 'switchView', selector: 'viewport #switchView'},
		 	{ref : 'arbre', selector: 'arbre-Referentiel'},
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
            'referentiel-DetailSavoir > button#SaveRecord' : 
            {
                click : this.onSaveButtonClick
            }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		var detailView = bouton.up('referentiel-DetailSavoir');
		
		detailView.getRecord().data.savLibelle = detailView.getComponent('detailSavoirNom').getValue();
		detailView.updateRecord();
		detailView.getRecord().save();
	}	
});