Ext.define('ExtJsMVC.controller.cursus.DetailCursus',
{
	extend: 'Ext.app.Controller',

	
	views : 
	[
		'cursus.DetailCursus',
		'cursus.DetailCursusGlobal',
		'cursus.DetailCursusOrdo'
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
		var cursus = uniteFormationStore.getRoot().getChildAt(0);
		var cursusData = cursus.pseudoWriting();
		
		console.log(cursusData);
		
		var drawDocument = function()
		{
			var htmlBody = this.document.body;
			
			var dh = Ext.DomHelper;
			
			//Ajout dans un tableau pour la mise en page
			var child = {tag: 'table', cls: 'bloc-table'};
			var blocTable = dh.append(htmlBody, child);
			var child = {tag: 'thead', cls: 'bloc-tableHead'};
			var blocTableHead = dh.append(blocTable, child);
			var child = {tag: 'tr', cls: 'bloc-tableRowHead'};
			var blocTableRowHead = dh.append(blocTableHead, child);
			var child = {tag: 'th', cls: 'bloc-tableH'};
			var blocTableH = dh.append(blocTableRowHead, child);
			
			//Titre
			var schemaPedago = 'Schéma pédagogique : ';
			var child = {tag: 'div', cls: 'bloc-titre', html: schemaPedago.concat(cursusData.curNom)};
			var blocTitre = dh.append(blocTableH, child);
			
			//Nom des colonnes
			var child = {tag: 'div', cls: 'bloc-columnName'};
			var blocColumnName = dh.append(blocTableH, child);
			
			var columnName = [
			            ['Compétences Visées','column-reac'],
			            ['Modules','column-module'],
			            ['Heures','column-heure'],
			            ['Evaluations','column-infoeval'],
			            ['Commentaires','column-infomodule']
			];
		
			columnName.forEach(function(element, index, array){
				var child = {tag: 'div', cls: element[1], html :element[0]};
				var column = dh.append(blocColumnName, child);
			});
			
			
			
			
			
			//Total des heures
			var sommeHeure =0;
			
			//Ajout dans une balise td pour la mise en page
			var child = {tag: 'tbody', cls: 'bloc-tableBody'};
			var blocTableBody = dh.append(blocTable, child);
			var child = {tag: 'tr', cls: 'bloc-tableRowData'};
			var blocTableRowData = dh.append(blocTableBody, child);
			var child = {tag: 'td', cls: 'bloc-tableData'};
			var blocTableData = dh.append(blocTableRowData, child);
			
			//UnitesFormations
			cursusData.uniteFormationCursuses.forEach(function(uf) 
			{
				
				var child = {tag: 'div', cls: 'bloc-global'};
				var blocGlobal = dh.append(blocTableData, child);
				
				
				//Ajout des deux blocs principaux
				
				var child = {tag: 'div',cls: 'bloc-reac',};
				var blocReac = dh.append(blocGlobal, child);
				
				
				var child = {tag: 'div', cls: 'bloc-uf'};
				var blocUniteFormation = dh.append(blocGlobal, child);
				
				
				//Reac
				var child = {tag: 'div', cls: 'entete-reac', html: uf.ufcNom};
				var enteteReac = dh.append(blocReac, child);
				
				
				
				//preparation de la liste des savoirs
				var savoirsArray = new Array();
				
				
				//Modules
				uf.moduleCursuses.forEach(function(module) 
				{
					
					//bloc module
					var child = {tag: 'div',cls: 'bloc-module'};
					var blocModule = dh.append(blocUniteFormation, child);
					
					
					//blocs secondaires cours/infos
					
					//entete module
					var child = {tag: 'div', cls: 'entete-module', html: module.mocIntitule};
					var enteteModule = dh.append(blocModule, child);
					
					//nb heures module
					var child = {tag: 'div', cls: 'bloc-heure'};
					var blocInfoModuleHeure = dh.append(blocModule, child);
					
					//blocs vides pour rendu CSS
					var child = {tag: 'div', cls: 'bloc-vide'};
					var blocVide = dh.append(blocModule, child);
	
					
					var child = {tag: 'div', cls: 'bloc-cours'};
					var blocCours = dh.append(blocModule, child);
					
					var child = {tag: 'div', cls: 'bloc-infomodule',};
					var blocInfoModule = dh.append(blocModule, child);
					
					
					//contenu info module
					
					var child = {tag: 'div',cls: 'bloc-modalite',html: module.mocModalite};
					var blocInfoModuleModalite = dh.append(blocInfoModule, child);
					
					var child = {tag: 'div',cls: 'bloc-evaluation',html: module.mocObjectifs};
					var blocInfoModuleEvaluation = dh.append(blocInfoModule, child);
					
					//Cours
					var moduleHeures = 0;
					module.coursCursuses.forEach(function(cours) 
					{
						
						var child = {tag: 'div',cls: 'row-cours', html: cours.cocIntitule};
						var rowCours = dh.append(blocCours, child);
						
						var child = {tag: 'div',cls: 'infos-cours', html: cours.cocDuree};
						var infosCours = dh.append(blocCours, child);
						
						
						moduleHeures = moduleHeures + cours.cocDuree;
						sommeHeure = sommeHeure + cours.cocDuree;
						console.log("sommeHeure : " + sommeHeure);
						//ajout de tous les savoirs (pas de duplication) dans la liste
						cours.savoirs.forEach(function(savoir)
						{
							console.log(savoir);
							Ext.Array.include(savoirsArray, savoir);
						});
						
					});
					
					dh.insertHtml('afterBegin', blocInfoModuleHeure, moduleHeures);
					
				});
				
				
				//ajout des savoirs dans le bloc correspondant
				Ext.Array.forEach(savoirsArray, function(savoir)
				{
					var child = {tag: 'div',cls: 'bloc-savoir',html: savoir.savLibelle};
					var blocSavoir = dh.append(blocReac, child);
				});
				
			});	
			
			
			//Total des heures
			//var sommeHeure =0;
			//Total des heures de cours
			var child = {tag: 'div', cls: 'bloc-sommeHeure'};
			var blocSommeHeure = dh.append(htmlBody, child);
			var child = {tag: 'div', cls: 'bloc-sommeHeureTxt', html: 'Total des heures de cours en centre :'};
			var blocSommeHeureTxt = dh.append(blocSommeHeure, child);
			var child = {tag: 'div', cls: 'bloc-sommeHeureNb', html: sommeHeure};
			var blocSommeHeureNb = dh.append(blocSommeHeure, child);
		};
		
		
		var win = window.open('print.html');
		win.onload = drawDocument;
	}
});