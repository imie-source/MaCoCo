Ext.define('ExtJsMVC.controller.cursus.DetailCursus',
{
	extend: 'Ext.app.Controller',

	
	views : 
	[
		'cursus.DetailCursus'
	],
	
	refs :
	[
	 	{ref : 'switchView', selector: 'viewport #switchView'},
	 	{ref : 'arbre', selector: 'cursus-Arbre'},
	],
	
	
	init: function()
	{
		this.control(
		{
            'cursus-DetailCursus > button#SaveRecord' : 
            {
                click : this.onSaveButtonClick
            },
            'cursus-DetailCursus > button#AddRecord' : 
            {
                click : this.onAddButtonClick
            }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		var detailView = bouton.up('cursus-DetailCursus');
		
		detailView.updateRecord();
		
		console.log('le record');
		console.log(detailView.getRecord().getData({persist : true}));
		
		detailView.getRecord().save();
	},
	
	onAddButtonClick : function(bouton)
	{
		
		var detailView = bouton.up('cursus-DetailCursus');
		var recordCursus = detailView.getRecord();
		
		var switchview = this.getSwitchView();
		
		switchview.removeAll();
		switchview.add({xtype : 'cursus-DetailUniteFormation'});
		
		var newDetailView = Ext.ComponentQuery.query('form')[0];
		newDetailView.loadRecord(Ext.create('ExtJsMVC.model.cursus.UniteFormationCursusModel'));

		
		
		var cursusData = recordCursus.getData({persist: true});
		
		//Nettoyage des data du cursus (présence des champs propres à l'arbre)
        cleanTreeFields(cursusData);

		//Ajout du cursus pour maintenir la relation
		newDetailView.getRecord().set('cursus', cursusData);
	}
});