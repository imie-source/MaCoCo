Ext.define('ExtJsMVC.controller.cursus.DetailCursus', {
	extend : 'Ext.app.Controller',

	views : [ 'cursus.DetailCursus', 'cursus.DetailCursusGlobal',
			'cursus.DetailCursusOrdo' ],

	refs : [ {
		ref : 'switchView',
		selector : 'viewport #switchView'
	}, {
		ref : 'arbre',
		selector : 'cursus-Arbre'
	}, ],

	stores : [ 'UniteFormationStore', 'Referentiel' ],

	init : function() {
		this.control({
			/*'cursus-DetailCursus > button#SaveRecord' : {
				click : this.onSaveButtonClick
			},
			'cursus-DetailCursus > button#AddRecord' : {
				click : this.onAddButtonClick
			},
			'cursus-DetailCursus > button#Print' : {
				click : this.onPrintClick
			},
			'button#printOrdo' : {
				click : this.onPrintOrdoClick
			}*/

		});
	},

	onSaveButtonClick : function(bouton) {
		var detailView = bouton.up('cursus-DetailCursus');

		detailView.updateRecord();

		console.log('le record');
		console.log(detailView.getRecord().getData({
			persist : true
		}));

		detailView.getRecord().save();
	},

	onAddButtonClick : function(bouton) {

		var detailView = bouton.up('cursus-DetailCursus');
		var recordCursus = detailView.getRecord();

		var switchview = this.getSwitchView();

		switchview.removeAll();
		switchview.add({
			xtype : 'cursus-DetailUniteFormation'
		});

		var newDetailView = Ext.ComponentQuery.query('form')[0];
		newDetailView.loadRecord(Ext
				.create('ExtJsMVC.model.cursus.UniteFormationCursusModel'));

		var cursusData = recordCursus.getData({
			persist : true
		});

		// Nettoyage des data du cursus (présence des champs propres à l'arbre)
		cleanTreeFields(cursusData);

		// Ajout du cursus pour mailntenir la relation
		newDetailView.getRecord().set('cursus', cursusData);
	},

	onPrintClick : function(bouton) {

		var uniteFormationStore = this.getUniteFormationStoreStore();
		var cursus = uniteFormationStore.getRoot().getChildAt(0);
		var cursusData = cursus.pseudoWriting();

		console.log(cursusData);

		var drawDocument = function() {

			var htmlBody = this.document.body;

			var dh = Ext.DomHelper;

			// nom document
			var today = new Date();
			var day = today.getDate();
			var month = today.getMonth() + 1;
			if (month < 10) {
				month = '0' + month;
			}
			var year = today.getFullYear();
			var dateToday = day + '/' + month + '/' + year;
			var documentName = 'Schema Pédagogique : ' + cursusData.curNom
					+ ' | ' + dateToday;
			this.document.title = documentName;

			// Ajout dans un tableau pour la mise en page
			var child = {
				tag : 'table',
				cls : 'bloc-table'
			};
			var blocTable = dh.append(htmlBody, child);
			var child = {
				tag : 'thead',
				cls : 'bloc-tableHead'
			};
			var blocTableHead = dh.append(blocTable, child);
			var child = {
				tag : 'tr',
				cls : 'bloc-tableRowHead'
			};
			var blocTableRowHead = dh.append(blocTableHead, child);
			var child = {
				tag : 'th',
				cls : 'bloc-tableH'
			};
			var blocTableH = dh.append(blocTableRowHead, child);

			// Titre
			var schemaPedago = 'Schéma pédagogique : ';
			var child = {
				tag : 'div',
				cls : 'bloc-titre',
				html : schemaPedago.concat(cursusData.curNom)
			};
			var blocTitre = dh.append(blocTableH, child);

			// Nom des colonnes
			var child = {
				tag : 'div',
				cls : 'bloc-columnName'
			};
			var blocColumnName = dh.append(blocTableH, child);

			var columnName = [ [ 'Compétences Visées', 'column-reac' ],
					[ 'Modules', 'column-module' ],
					[ 'Jours', 'column-jour' ],
					[ 'Heures', 'column-heure' ],
					[ 'Evaluations', 'column-infoeval' ],
					[ 'Commentaires', 'column-infomodule' ] ];

			columnName.forEach(function(element, index, array) {
				var child = {
					tag : 'div',
					cls : element[1],
					html : element[0]
				};
				var column = dh.append(blocColumnName, child);
			});

			// Total des heures
			var sommeHeures = 0;
			var sommeJours= 0;
			// Ajout dans une balise td pour la mise en page
			var child = {
				tag : 'tbody',
				cls : 'bloc-tableBody'
			};
			var blocTableBody = dh.append(blocTable, child);

			// UnitesFormations
			cursusData.uniteFormationCursuses.forEach(function(uf) {
				var child = {
					tag : 'tr',
					cls : 'bloc-tableRowData'
				};
				var blocTableRowData = dh.append(blocTableBody, child);
				var child = {
					tag : 'td',
					cls : 'bloc-tableData'
				};
				var blocTableData = dh.append(blocTableRowData, child);

				var child = {
					tag : 'div',
					cls : 'bloc-global'
				};
				var blocGlobal = dh.append(blocTableData, child);

				// Ajout des deux blocs principaux
				var child = {
						tag : 'div',
						cls : 'entete-uf',
						html : uf.ufcNom
					};
					var enteteUf = dh.append(blocGlobal, child);
				
				
				var child = {
					tag : 'div',
					cls : 'bloc-reac',
				};
				var blocReac = dh.append(blocGlobal, child);

				var child = {
					tag : 'div',
					cls : 'bloc-uf'
				};
				var blocUniteFormation = dh.append(blocGlobal, child);

				// Reac
			/*	var child = {
					tag : 'div',
					cls : 'entete-reac',
					html : uf.ufcNom
				};
				var enteteReac = dh.append(blocReac, child);*/

				// preparation de la liste des savoirs
				var savoirsArray = new Array();

				// Modules
				uf.moduleCursuses.forEach(function(module) {

					// bloc module
					var child = {
						tag : 'div',
						cls : 'bloc-module'
					};
					var blocModule = dh.append(blocUniteFormation, child);

					// blocs secondaires cours/infos

					// entete module
					var child = {
						tag : 'div',
						cls : 'entete-module',
						html : module.mocIntitule
					};
					var enteteModule = dh.append(blocModule, child);

					// nb heures module
					var child = {
						tag : 'div',
						cls : 'bloc-heure'
					};
					var blocInfoModuleHeure = dh.append(blocModule, child);

					// nb jours module
					var child = {
						tag : 'div',
						cls : 'bloc-jour'
					};
					var blocInfoModuleJour = dh.append(blocModule, child);
					
					// blocs vides pour rendu CSS
					var child = {
						tag : 'div',
						cls : 'bloc-vide'
					};
					var blocVide = dh.append(blocModule, child);

					var child = {
						tag : 'div',
						cls : 'bloc-cours'
					};
					var blocCours = dh.append(blocModule, child);

					var child = {
						tag : 'div',
						cls : 'bloc-infomodule',
					};
					var blocInfoModule = dh.append(blocModule, child);

					// contenu info module

					var child = {
						tag : 'div',
						cls : 'bloc-evaluation',
						html : module.mocModalite
					};
					var blocInfoModuleEvaluation = dh.append(blocInfoModule,
							child);

					var child = {
						tag : 'div',
						cls : 'bloc-commentaire',
						html : module.mocObjectifs
					};
					var blocInfoModuleCommentaire = dh.append(blocInfoModule,
							child);

					// Cours
					var moduleJours = 0;
					var moduleHeures = 0;
					module.coursCursuses.forEach(function(cours) {

						var child = {
							tag : 'div',
							cls : 'row-cours',
							html : cours.cocIntitule
						};
						var rowCours = dh.append(blocCours, child);

						var child = {
							tag : 'div',
							cls : 'infos-cours',
							html : cours.cocDuree
						};
						var infosCours = dh.append(blocCours, child);

						var child = {
								tag : 'div',
								cls : 'infos-coursHeure',
								html : cours.cocDuree*7
							};
						var infosCoursHeure = dh.append(blocCours, child);
						
						moduleJours = moduleJours + cours.cocDuree;
						moduleHeures = moduleJours*7;
						sommeJours = sommeJours + cours.cocDuree;
						sommeHeures = sommeJours*7;
						// ajout de tous les savoirs (pas de duplication) dans
						// la liste
						cours.savoirs.forEach(function(savoir) {
							console.log(savoir);
							Ext.Array.include(savoirsArray, savoir);
						});

					});

					dh.insertHtml('afterBegin', blocInfoModuleHeure,
							moduleHeures);

					dh.insertHtml('afterBegin', blocInfoModuleJour,
							moduleJours);
				});

				// ajout des savoirs dans le bloc correspondant
				Ext.Array.forEach(savoirsArray, function(savoir) {
					var child = {
						tag : 'div',
						cls : 'bloc-savoir',
						html : savoir.savLibelle
					};
					var blocSavoir = dh.append(blocReac, child);
				});

			});

			// Total des heures
			// var sommeHeure =0;
			// Total des heures de cours
			var child = {
				tag : 'div',
				cls : 'bloc-sommeHeure'
			};
			var blocSommeHeure = dh.append(htmlBody, child);
			var child = {
				tag : 'div',
				cls : 'bloc-sommeHeureTxt',
				html : 'Total des heures de cours en centre :'
			};
			var blocSommeHeureTxt = dh.append(blocSommeHeure, child);
			var child = {
				tag : 'div',
				cls : 'bloc-sommeHeureNb',
				html : sommeHeure
			};
			var blocSommeHeureNb = dh.append(blocSommeHeure, child);
		};

		var win = window.open('print.html');
		win.onload = drawDocument;
	},

	onPrintOrdoClick : function(bouton) {
		var uniteFormationStore = this.getUniteFormationStoreStore();
		var cursus = uniteFormationStore.getRoot().getChildAt(0);
		var cursusData = cursus.pseudoWriting();

		console.log(cursusData);

		var drawDocument = function() {

			var htmlBody = this.document.body;

			var dh = Ext.DomHelper;

			// nom document
			var today = new Date();
			var day = today.getDate();
			var month = today.getMonth() + 1;
			if (month < 10) {
				month = '0' + month;
			}
			var year = today.getFullYear();
			var dateToday = day + '/' + month + '/' + year;
			var documentName = 'Ruban Pédagogique : ' + cursusData.curNom
					+ ' | ' + dateToday;
			this.document.title = documentName;

			// Ajout dans un tableau pour la mise en page
			var child = {
				tag : 'table',
				cls : 'bloc-table'
			};
			var blocTable = dh.append(htmlBody, child);
			var child = {
				tag : 'thead',
				cls : 'bloc-tableHead'
			};
			var blocTableHead = dh.append(blocTable, child);
			var child = {
				tag : 'tr',
				cls : 'bloc-tableRowHead'
			};
			var blocTableRowHead = dh.append(blocTableHead, child);
			var child = {
				tag : 'th',
				cls : 'bloc-tableH'
			};
			var blocTableH = dh.append(blocTableRowHead, child);

			// Titre
			var schemaPedago = 'Ruban pédagogique : ';
			var child = {
				tag : 'div',
				cls : 'bloc-titre',
				html : schemaPedago.concat(cursusData.curNom)
			};
			var blocTitre = dh.append(blocTableH, child);

			// Nom des colonnes
			var child = {
				tag : 'div',
				cls : 'bloc-columnName'
			};
			var blocColumnName = dh.append(blocTableH, child);

			var columnName = [ [ 'Année', 'column-anneeRp' ],
					[ 'ECF', 'column-ecfRp' ], [ 'Cours', 'column-coursRp' ],
					[ 'Jour', 'column-jourRp' ] ];

			columnName.forEach(function(element, index, array) {
				var child = {
					tag : 'div',
					cls : element[1],
					html : element[0]
				};
				var column = dh.append(blocColumnName, child);
			});

			// Total des jours
			var sommeJour = 0;

			// Ajout dans une balise td pour la mise en page
			var child = {
				tag : 'tbody',
				cls : 'bloc-tableBody'
			};
			var blocTableBody = dh.append(blocTable, child);

			// UnitesFormations
			cursusData.uniteFormationCursuses.forEach(function(uf) {
				var child = {
					tag : 'tr',
					cls : 'bloc-tableRowData'
				};
				var blocTableRowData = dh.append(blocTableBody, child);
				var child = {
					tag : 'td',
					cls : 'bloc-tableData'
				};
				var blocTableData = dh.append(blocTableRowData, child);

				var child = {
					tag : 'div',
					cls : 'bloc-global'
				};
				var blocGlobal = dh.append(blocTableData, child);

				var child = {
					tag : 'div',
					cls : 'bloc-ufRp'
				};
				var blocUniteFormation = dh.append(blocGlobal, child);

				// Modules
				uf.moduleCursuses.forEach(function(module) {

					// Cours
					module.coursCursuses.forEach(function(cours) {
						var child = {
							tag : 'div',
							cls : 'bloc-coursRp'
						};
						var blocCours = dh.append(blocUniteFormation, child);

						var child = {
							tag : 'div',
							cls : 'row-coursNomRp',
							html : cours.cocIntitule
						};
						var rowCours = dh.append(blocCours, child);

						var child = {
							tag : 'div',
							cls : 'row-coursDureeRp',
							html : cours.cocDuree
						};
						var infosCours = dh.append(blocCours, child);

						sommeJour = sommeJour + cours.cocDuree;
						console.log("sommeJour : " + sommeJour);

					});

				});

			});

			// Total des heures
			// var sommeHeure =0;
			// Total des heures de cours
			var child = {
				tag : 'div',
				cls : 'bloc-sommeJourRp'
			};
			var blocSommeJour = dh.append(htmlBody, child);
			var child = {
				tag : 'div',
				cls : 'bloc-sommeJourRpTxt',
				html : 'Total des jours de cours en centre :'
			};
			var blocSommeJourTxt = dh.append(blocSommeJour, child);
			var child = {
				tag : 'div',
				cls : 'bloc-sommeJourRpNb',
				html : sommeJour
			};
			var blocSommeJourNb = dh.append(blocSommeJour, child);
		};

		var win = window.open('print.html');
		win.onload = drawDocument;
	}

});