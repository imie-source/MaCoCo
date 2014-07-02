Ext.define('ExtJsMVC.controller.cursus.DetailModule',
{
	extend: 'Ext.app.Controller',
	
	views : 
	[
		'cursus.DetailModule'
	],
	
	refs :
		[
		 	{ref : 'switchView', selector: 'viewport #switchView'},
		 	{ref : 'arbre', selector: 'cursus-Arbre'},
		],

	stores : 
	[
		'CursusStore',
		'UniteFormationStore'
	],
	
	
	init: function()
	{
		this.control(
		{
            'cursus-DetailModule > button#SaveRecord' : 
            {
                click : this.onSaveButtonClick
            },
	        'cursus-DetailModule > button#AddRecord' : 
	        {
	            click : this.onAddButtonClick
	        }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		var detailView = bouton.up('cursus-DetailModule');
		
		detailView.getRecord().data.mocIntitule = detailView.getComponent('detailModuleNom').getValue();
		
		detailView.updateRecord();
		
		detailView.getRecord().save();
	},
	
	onAddButtonClick : function(bouton)
	{
		var detailView = bouton.up('cursus-DetailModule');
		var recordModule = detailView.getRecord();
		
		var switchview = this.getSwitchView();
		
		switchview.removeAll();
		switchview.add({xtype : 'cursus-DetailCours'});
		
		var newDetailView = Ext.ComponentQuery.query('form')[0];
		newDetailView.loadRecord(Ext.create('ExtJsMVC.model.cursus.CoursCursusModel'));

		
		
		var moduleData = recordModule.getData({persist: true});
		
		//Nettoyage des data du cursus (présence des champs propres à l'arbre)
        cleanTreeFields(moduleData);

		//Ajout du cursus pour maintenir la relation
		newDetailView.getRecord().set('moduleCursus', moduleData);
	}
	
});