Ext.define('ExtJsMVC.controller.referentiel.DetailReferentiel',
{
	extend: 'Ext.app.Controller',
	
	views : 
	[
		'referentiel.DetailReferentiel'
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
            'referentiel-DetailReferentiel > button#SaveRecord' : 
            {
                click : this.onSaveButtonClick
            },
	        'referentiel-DetailReferentiel > button#AddRecord' : 
	        {
	            click : this.onAddButtonClick
	        }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		var detailView = bouton.up('referentiel-DetailReferentiel');
		
		detailView.getRecord().data.refNom = detailView.getComponent('detailReferentielNom').getValue();
		detailView.updateRecord();
		detailView.getRecord().save();
	},
	
	onAddButtonClick : function(bouton)
	{
		var detailView = bouton.up('referentiel-DetailReferentiel');
		var recordReferentiel = detailView.getRecord();

		var switchview = this.getSwitchView();
	    //Nettoyage de la vue centrale
	        if(switchview.getChildEls())
 	    {
	    	   switchview.removeAll();
 	    }
	    //Ajout du formulaire de l'entite fille
	    switchview.add({xtype : 'referentiel-DetailActiviteType'});
		
	    //Creation et ajout d'un nouveau record correspondant
		var newDetailView = Ext.ComponentQuery.query('form')[0];
		newDetailView.loadRecord(Ext.create('ExtJsMVC.model.referentiel.ActiviteType'));
		
		//recuperation des données de l'entite mere
		var referentielData = recordReferentiel.getData({persist: true});
		//Nettoyage des data du Referentiel (présence des champs propres à l'arbre)
        cleanTreeFields(referentielData);
		//Ajout du Referentiel pour maintenir la relation
		newDetailView.getRecord().set('referentiel', referentielData);
	}
	
});