Ext.define('ExtJsMVC.controller.referentiel.DetailActiviteType',
{
	extend: 'Ext.app.Controller',
	
	views : 
	[
		'referentiel.DetailActiviteType'
	],
	
	refs :
		[
		 	{ref : 'switchView', selector: 'viewport #switchView'},
		 	{ref : 'arbre', selector: 'arbre-Referentiel'},
		 	{ref : 'arbreCursus', selector: 'cursus-Arbre'}
		],

	stores : 
	[
		'Referentiel'
	],
	
	models : 
	[
		'referentiel.Referentiel'
	],
	
	
	init: function()
	{
		this.control(
		{
            'referentiel-DetailActiviteType > button#SaveRecord' : 
            {
                click : this.onSaveButtonClick
            },
	        'referentiel-DetailActiviteType > button#AddRecord' : 
	        {
	            click : this.onAddButtonClick
	        }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		var detailView = bouton.up('referentiel-DetailActiviteType');
		
		detailView.getRecord().data.actLibelle = detailView.getComponent('detailActiviteTypeNom').getValue();
		detailView.updateRecord();
		detailView.getRecord().save(
		{
		    success: function()
		    {
		    	console.log('Success');
		    }
		});
		

		
//		var storeReferentiel = this.getReferentielStore();
//		var referentielModel = this.getReferentielReferentielModel();
//		var referentielRoot = storeReferentiel.getRoot();
//		var arboReferentiel = referentielModel.load(referentielRoot.get('refId'));
//		this.getReferentielStore().loadRawData(arboReferentiel);

		var storeReferentiel = this.getReferentielStore();
		var referentielModel = this.getReferentielReferentielModel();
		var referentielRoot = storeReferentiel.getRoot();
		//GET du referentiel concerné
		var arboReferentiel = referentielModel.load(referentielRoot.get('refId'),
		{
		 // Arborescence complete du referentiel récupérée	
		  success: function(record, operation) 
		  {
			  console.log('GET done');
			  storeReferentiel.removeAll();
			  storeReferentiel.setRoot(record);
			  storeReferentiel.getRoot().expand();
		  }
		});
		
	},
	
	onAddButtonClick : function(bouton)
	{
		var detailView = bouton.up('referentiel-DetailActiviteType');
		var recordActiviteType = detailView.getRecord();

		var switchview = this.getSwitchView();
	    //Nettoyage de la vue centrale
	        if(switchview.getChildEls())
 	    {
	    	   switchview.removeAll();
 	    }
	    //Ajout du formulaire de l'entite fille
	    switchview.add({xtype : 'referentiel-DetailCompetencePro'});
		
	    //Creation et ajout d'un nouveau record correspondant
		var newDetailView = Ext.ComponentQuery.query('form')[0];
		newDetailView.loadRecord(Ext.create('ExtJsMVC.model.referentiel.CompetencePro'));
		newDetailView.getRecord().set('comId',null);
		
		//recuperation des données de l'entite mere
		var activiteTypeData = recordActiviteType.getData({persist: true});
		//Nettoyage des data du ActiviteType (présence des champs propres à l'arbre)
        cleanTreeFields(activiteTypeData);
		//Ajout du ActiviteType pour maintenir la relation
		newDetailView.getRecord().set('activiteType', activiteTypeData);
	}
	
});