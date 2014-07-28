Ext.define('ExtJsMVC.controller.referentiel.DetailCompetencePro',
{
	extend: 'Ext.app.Controller',
	
	views : 
	[
		'referentiel.DetailCompetencePro'
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
            'referentiel-DetailCompetencePro > button#SaveRecord' : 
            {
                click : this.onSaveButtonClick
            },
	        'referentiel-DetailCompetencePro > button#AddRecord' : 
	        {
	            click : this.onAddButtonClick
	        }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		var detailView = bouton.up('referentiel-DetailCompetencePro');
		
		detailView.getRecord().data.comLibelle = detailView.getComponent('detailCompetenceProNom').getValue();
		detailView.updateRecord();
		detailView.getRecord().save();
	},
	
	onAddButtonClick : function(bouton)
	{
		var detailView = bouton.up('referentiel-DetailCompetencePro');
		var recordCompetencePro = detailView.getRecord();

		var switchview = this.getSwitchView();
	    //Nettoyage de la vue centrale
	    if(switchview.getChildEls())
 	    {
	    	   switchview.removeAll();
 	    }
	        
	    //Ajout du formulaire de l'entite fille
	    switchview.add({xtype : 'referentiel-DetailSavoir'});
		
	    //Creation et ajout d'un nouveau record correspondant
		var newDetailView = Ext.ComponentQuery.query('form')[0];
		newDetailView.loadRecord(Ext.create('ExtJsMVC.model.referentiel.Savoir'));
		
		//recuperation des données de l'entite mere
		var competenceProData = recordCompetencePro.getData({persist: true});
		//Nettoyage des data du CompetencePro (présence des champs propres à l'arbre)
        cleanTreeFields(competenceProData);
		//Ajout du CompetencePro pour maintenir la relation
		newDetailView.getRecord().set('competencePro', competenceProData);
	}
	
});