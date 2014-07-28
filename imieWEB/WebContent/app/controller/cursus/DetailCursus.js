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
	
	stores :
	[
	 	'UniteFormationStore',
	 	'Referentiel'
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
            },
            'cursus-DetailCursus > button#Print' : 
            {
                click : this.onPrintClick
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

		//Ajout du cursus pour mailntenir la relation
		newDetailView.getRecord().set('cursus', cursusData);
	},
	
	onPrintClick : function(bouton)
	{
		
		var uniteFormationStore = this.getUniteFormationStoreStore();
		var cursus = uniteFormationStore.getRoot();
		var cursusData = cursus.pseudoWriting();
		
		var drawDocument = function()
		{
			var htmlBody = this.document.body;
			
			var dh = Ext.DomHelper;
			
			
			//Titre
			var child = {tag: 'div', cls: 'bloc-titre', html: cursusData.curNom};
			var blocTitre = dh.append(htmlBody, child);
			
		
			//UnitesFormations
			cursusData.uniteFormationCursuses.forEach(function(uf) 
			{
				
				
				var child = {tag: 'div', cls: 'bloc-global'};
				var blocGlobal = dh.append(htmlBody, child);
				
				
				//Ajout des deux blocs principaux
				
				var child = {tag: 'div',cls: 'bloc-reac',};
				var blocReac = dh.append(blocGlobal, child);
				
				
				var child = {tag: 'div', cls: 'bloc-uf'};
				var blocUniteFormation = dh.append(blocGlobal, child);
				
				
				//Reac
				var child = {tag: 'div', cls: 'entete-reac', html: uf.ufcNom};
				var enteteReac = dh.append(blocReac, child);
				
				
				//Modules
				uf.moduleCursuses.forEach(function(module) 
				{
					
					//bloc module
					var child = {tag: 'div',cls: 'bloc-module'};
					var blocModule = dh.append(blocUniteFormation, child);
					
					
					//blocs secondaires cours/infos
					var child = {tag: 'div', cls: 'bloc-cours',html: module.mocIntitule};
					var blocCours = dh.append(blocModule, child);
					
					
					var child = {tag: 'div', cls: 'bloc-infomodule',};
					var blocInfoModule = dh.append(blocModule, child);
					
					
					//contenu info module
					
					var child = {tag: 'div', cls: 'bloc-heure'};
					var blocInfoModuleHeure = dh.append(blocInfoModule, child);
					
					var child = {tag: 'div',cls: 'bloc-modalite',html: module.mocObjectifs};
					var blocInfoModuleModalite = dh.append(blocInfoModule, child);
					
//					var child = {tag: 'div',cls: 'bloc-evaluation',html: module.mocObjectifs};
//					var blocInfoModuleEvaluation = dh.append(blocInfoModule, child);
					
					//Cours
					var sommeHeures = 0;
					module.coursCursuses.forEach(function(cours) 
					{
						var child = {tag: 'div',cls: 'row-cours', html: cours.cocIntitule};
						var rowCours = dh.append(blocCours, child);
						
						var child = {tag: 'div',cls: 'infos-cours', html: cours.cocDuree};
						var infosCours = dh.append(blocCours, child);
						
						
						sommeHeures = sommeHeures + cours.cocDuree;

						cours.savoirs.forEach(function(savoir)
						{
							var child = {tag: 'div',cls: 'bloc-savoir',html: savoir.savLibelle};
							var blocSavoir = dh.append(blocReac, child);
						});
					});
					
//					console.log(blocInfoModuleHeure);
					dh.insertHtml('afterBegin', blocInfoModuleHeure, sommeHeures);
					
				});
			});
		};
		
		
		var win = window.open('print.html');
		win.onload = drawDocument;
	}
});