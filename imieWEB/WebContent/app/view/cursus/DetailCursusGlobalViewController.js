Ext.define('ExtJsMVC.view.cursus.DetailCursusGlobalViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailCursusGlobalViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			         
		});
		
	},
	onPrintOrdoClick : function(bouton) {
		var uniteFormationStore = this.getViewModel().getStore('rootCursuses');
		var cursus = uniteFormationStore.getRoot().getChildAt(0);
		var cursusData = cursus.pseudoWriting();
		var coursStore = this.getViewModel().getStore('coursByCursus');
		var coursData = coursStore.getData().items;
		
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


			coursData.forEach(function(cours) {
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
					cls : 'bloc-listeCoursRp'
				};
				var blocListeCours = dh.append(blocGlobal, child);

						var child = {
							tag : 'div',
							cls : 'bloc-coursRp'
						};
						var blocCours = dh.append(blocListeCours, child);
						
						var child = {
							tag : 'div',
							cls : 'row-anneeRp',
							//html : cours.getData().cocIntitule
						};
						var rowAnnee = dh.append(blocCours, child);

						var child = {
							tag : 'div',
							cls : 'row-ecfRp',
							//html : cours.getData().cocDuree
						};
						var rowEcf = dh.append(blocCours, child);
						
						var child = {
							tag : 'div',
							cls : 'row-coursNomRp',
							html : cours.getData().cocIntitule
						};
						var rowCours = dh.append(blocCours, child);

						var child = {
							tag : 'div',
							cls : 'row-coursDureeRp',
							html : cours.getData().cocDuree
						};
						var infosCours = dh.append(blocCours, child);

						sommeJour = sommeJour + cours.getData().cocDuree;
				

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

		var win = window.open('printRubanPedagogique.html');
		win.onload = drawDocument;
	}

	
});
