Ext.define('ExtJsMVC.controller.cursus.DetailUniteFormation',
{
	extend: 'Ext.app.Controller',

	
	views : 
	[
		'cursus.DetailUniteFormation'
	],
	
	refs :
		[
		 	{ref : 'switchView', selector: 'viewport #switchView'},
		 	{ref : 'arbre', selector: 'cursus-Arbre'}
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
            'cursus-DetailUniteFormation > button#SaveRecord' : 
            {
                click : this.onSaveButtonClick
            },
	        'cursus-DetailUniteFormation > button#AddRecord' : 
	        {
	            click : this.onAddButtonClick
	        }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		var detailViewUF = bouton.up('cursus-DetailUniteFormation');
		
		detailViewUF.getRecord().data.ufcNom = detailViewUF.getComponent('detailUniteFormationNom').getValue();
		
		console.log(detailViewUF.getRecord().data.ufcNom);
		console.log(detailViewUF.getComponent('detailUniteFormationNom').getValue());
		
		console.log("detailViewUF.getRecord().data");
		console.log(detailViewUF.getRecord().data);
		
		detailViewUF.updateRecord();
		detailViewUF.getRecord().save();
	},	
	
	onAddButtonClick : function(bouton)
	{
		var detailView = bouton.up('cursus-DetailUniteFormation');
		var recordUniteFormation = detailView.getRecord();
		
		var switchview = this.getSwitchView();
		
		switchview.removeAll();
		switchview.add({xtype : 'cursus-DetailModule'});
		
		var newDetailView = Ext.ComponentQuery.query('form')[0];
		newDetailView.loadRecord(Ext.create('ExtJsMVC.model.cursus.ModuleCursusModel'));

		
		
		var uniteFormationData = recordUniteFormation.getData({persist: true});
		
		//Nettoyage des data du cursus (présence des champs propres à l'arbre)
        cleanTreeFields(uniteFormationData);

		//Ajout du cursus pour maintenir la relation
		newDetailView.getRecord().set('uniteFormationCursus', uniteFormationData);
	}
	
});