Ext.define('ExtJsMVC.view.cursus.detailCours.DetailCoursCursusViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailCoursCursusViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},

	onSaveCoursCursusClick : function()
	{
		
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondTreeItem'); 
		var me = this;	
		var myStore = vm.getStore('coursByCursus');
				
		if(itemSelected.get('cocId')!== undefined){
			 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
			myUrl = './webapi/courscursus/'.concat(itemSelected.get('cocId'));	
			myStore.load({
				url : myUrl,
				callback : function(records){
					me.syncCoursStore(myStore, itemSelected);
				}
			});
		} else{			
			me.syncCoursStore(myStore,itemSelected,vm);
		}		
		
	},
	syncCoursStore : function(myStore, itemSelected, vm){
		var me = this;
		var cours = myStore.data.items[0];
		cours.set('text', itemSelected.get('text'));
		cours.set('cocDuree', itemSelected.get('cocDuree'));
		// Set de l'ordre à 1000 en cas de durée = 0 (prérequis)
		if(itemSelected.get('cocDuree')==='0'){
			cours.set('cocOrdre', 1000); 
		}
		cours.set('cocType', itemSelected.get('cocType'));
		cours.set('cocObjectifs', itemSelected.get('cocObjectifs'));
		cours.set('cocEvaluation', itemSelected.get('cocEvaluation'));
		cours.set('cocCommentaires', itemSelected.get('cocCommentaires'));
		console.log(cours);
		myStore.sync({
			success : function(){
				var tree =  Ext.ComponentQuery.query('cursus-Arbre2')[0];
				tree.getSelectionModel().select(cours);
				
				var promoId = vm.get('currentCursus').get('curId');
				var storeUniteFormations = vm.getStore('rootCursuses');
				var cursusModel = vm.getStore('cursuses').getModel();
				var arboCursus = cursusModel.load(promoId,{	
				    scope: this,
				    success: function(recordCursus, operation) 
				    {
				    	console.log('success : recordCursus');
				    	console.log(recordCursus);
						storeUniteFormations.setRoot(
						{
							text: 'new cursus root',
							expanded: true,
							children: recordCursus
						});				
						tree.expandPath(cours.parentNode.getPath());
				    },
				});
			},
			failure : function(batch){
				var message = batch.operations[0].error.response.responseText;
				Ext.Msg.alert('Erreur', message);
			}
		});
		
	},
	onPrintClick : function(){
		var me = this;
		var currentCours = this.getViewModel().get('currentSecondTreeItem');
		
		var theoriePratiqueTextField = Ext.ComponentQuery.query('#theoriePratiqueTextField')[0];
		var myForm = theoriePratiqueTextField.findParentByType('form');
		var theoriePratique = myForm.getForm().findField('theoriePratiqueTextField').getValue();
		
		var coursData;
		var moduleData; 
		var ufData;
		var cursusData;
		var enseignementsData;
		var prerequisData = new Array();
		var materielData = new Array();
		
		var myUrl = './webapi/courscursus/fichecours/'.concat(currentCours.get('cocId'));
		var coursStore = this.getViewModel().getStore('coursByCursus').load({
			url : myUrl,
			callback : function(records){
				coursData = records[0].data;
				console.log('coursData');
				console.log(coursData);
				moduleData = coursData.moduleCursus;
				ufData = moduleData.uniteFormationCursus;
				cursusData = ufData.cursus;
				enseignementsData= coursData.enseignements;
				
		
				if(enseignementsData !== null){
					//ajout prérequis
					enseignementsData.forEach(function(enseignement){
						
						if (prerequisData !== null){
							enseignement.prerequis.forEach(function(prerequis){
								var bool = false;
								prerequisData.forEach(function(prerequis2){
									console.log('prerequis===prerequis2');
									console.log(prerequis.entId);
									console.log(prerequis2[0].entId);
									if(prerequis.entId === prerequis2[0].entId){
										bool = true;
									}
								});
								if(!bool){
									prerequisData.push(enseignement.prerequis);
								}	
							});
							
						}else{
							prerequisData.push(enseignement.prerequis);
						}				
					});	
				
				
				}
			}
		});
		
				
		var drawDocument = function() {

			var htmlBody = this.document.body;

			var dh = Ext.DomHelper;
				
			var child = {
				tag : 'div',
				cls : 'contenuFicheCours'
			};
			var contenuFC = dh.append(htmlBody, child);

			var titre = 'Fiche de cours : ';
			var child = {
					tag : 'h1',
					cls : 'titre',
					html : titre.concat(coursData.cocIntitule)
				};
			var titre = dh.append(contenuFC, child);
			
			//ajout bloc cursus
			var child = {
				tag : 'div',
				cls : 'bloc-cursus',
			};
			var blocCursus = dh.append(contenuFC, child);
			
			var cursus = 'Cursus : ';
			var child = {
				tag : 'h2',
				cls : 'titre-cursus',
				html : cursus.concat(cursusData.curNom)
			};
			var titreCursus = dh.append(blocCursus, child);
			
			//ajout bloc uf
			var child = {
					tag : 'div',
					cls : 'bloc-uf',
			};
			var blocUf = dh.append(contenuFC, child);
			var uf = 'Unité de formation : '
			var child = {
					tag : 'h2',
					cls : 'titre-uf',
					html : uf.concat(ufData.ufcId).concat(' - ').concat(ufData.ufcNom)
			};
			var titreUf = dh.append(blocUf, child);
				
			var child = {
					tag : 'h3',
					cls : 'p-objectif',
					html : 'Objectifs : '
			};
			var pObj = dh.append(blocUf, child);
			var child = {
					tag : 'p',
					cls : 'bloc-objectif',
					html : ufData.ufcObjectifs
			};
			var blocObj = dh.append(blocUf, child);
				
			//ajout bloc module		
			var child = {
					tag : 'div',
					cls : 'bloc-module',
			};
			var blocModule = dh.append(contenuFC, child);
			var module = 'Module : '
			var child = {
					tag : 'h2',
					cls : 'titre-module',
					html : module.concat(moduleData.mocId).concat(' - ').concat(moduleData.mocIntitule)
			};
			var titreModule = dh.append(blocModule, child);
			var child = {
					tag : 'h3',
					cls : 'p-objectif',
					html : 'Objectifs : '
			};
			var pObj = dh.append(blocModule, child);
			var child = {
					tag : 'p',
					cls : 'bloc-objectif',
					html : moduleData.mocObjectifs
			};
			var blocObj = dh.append(blocModule, child);

			//ajout bloc cours
			var child = {
					tag : 'div',
					cls : 'bloc-cours',
			};
			var blocCours = dh.append(contenuFC, child);
			
			//titre
			var cours = 'Cours : '
			var child = {
					tag : 'h2',
					cls : 'titre-cours',
					html : cours.concat(coursData.cocId).concat(' - ').concat(coursData.cocIntitule)
			};
			var titreCours = dh.append(blocCours, child);

			//durée
			var child = 
			{
					tag : 'div',
					cls : 'conteneur',
			};
			var conteneur = dh.append(blocCours, child);
			
			var child = {
					tag : 'h3',
					cls : 's-duree',
					html : 'Durée : '
			};
			var sDuree = dh.append(conteneur, child);
			var child = {
					tag : 'span',
					cls : 's-duree2',
					html : coursData.cocDuree.toString().concat('j')
			};
			var sDuree2 = dh.append(conteneur, child);		
			
			var child = 
			{
					tag : 'div',
					cls : 'conteneur',
			};
			var conteneur = dh.append(blocCours, child);
			
			//ration théorie pratique
			
			var child = {
					tag : 'h3',
					cls : 'h3-theorie',
					html : 'Répartition théorie/pratique (en %) :'
			};
			var h3Theorie = dh.append(conteneur, child);
			
			var child = {
					tag : 'span',
					cls : 'tf-theorie',
					html : theoriePratique,
			};
			var tfTheorie = dh.append(conteneur, child);
			
			
			
			//prerequis
			var child = 
			{
					tag : 'div',
					cls : 'conteneur',
			};
			var conteneur = dh.append(blocCours, child);
			
			var child = {
					tag : 'h3',
					cls : 'p-prerequis',
					html : 'Prérequis : '
			};
			var pPrerequis = dh.append(conteneur, child);
			var child = {
					tag : 'ul',
					cls : 'ul-prerequis',
			};
			
			var ulPrerequis = dh.append(conteneur, child);
			
			
			if (prerequisData!== null){
				prerequisData.forEach(function(prerequis){
				
				var child = {
					tag : 'li',
					cls : 'li-prerequis',
					html : prerequis[0].entNom 
				};
					
				var liPrerequis = dh.append(ulPrerequis, child);
				console.log('prerequis');
				console.log(prerequis);
				var coursList = prerequis[0].coursCursuses
				if (coursList !== null){
									
					var child = {
						tag : 'ul',
						cls : 'ul-cours',
					};
					var ulCours = dh.append(ulPrerequis, child);
					coursList.forEach(function(cours) {
						var child = {
								tag : 'li',
								cls : 'li-cours',
								html : 'cours associé : '.concat(cours.cocIntitule)
						};
						var liCours = dh.append(ulCours, child);		
					});
					
				}
							
			});
			}
			
			

			//objectifs
			var child = 
			{
				tag : 'div',
				cls : 'conteneur',
			};
			var conteneur = dh.append(blocCours, child);
		
			var child = {
					tag : 'h3',
					cls : 'p-objectif',
					html : 'Objectifs : '
			};
			var pObj = dh.append(conteneur, child);
			var child = {
					tag : 'p',
					cls : 'bloc-objectif',
					html : coursData.cocObjectifs
			};
			var blocObj = dh.append(conteneur, child);

			//contenu
			var child = 
			{
					tag : 'div',
					cls : 'conteneur',
			};
			var conteneur = dh.append(blocCours, child);
			
			var child = {
					tag : 'h3',
					cls : 'p-contenu',
					html : 'Contenu : '
			};
			var pContenu = dh.append(conteneur, child);
			var child = {
					tag : 'ul',
					cls : 'ul-enseignement',
			};
			var ulContenu= dh.append(conteneur, child);
			
			console.log(coursData);
			
			if(enseignementsData !== null){
				enseignementsData.forEach(function(enseignement) {
					var child = {
							tag : 'li',
							cls : 'li-enseignement',
							html : enseignement.entNom
					};
					var liContenu = dh.append(ulContenu, child);
					
					//contenu
					var child = {
							tag : 'p',
							cls : 'p-contenu',
					};
					var pContenu = dh.append(liContenu, child);
					
					var child = {
							tag : 'span',
							cls : 's-contenu',
							html : 'Contenu : '
					};
					var sContenu = dh.append(pContenu, child);
					var child = {
							tag : 'span',
							cls : 'bloc-contenu',
							html : enseignement.entContenu
					};
					var blocContenu = dh.append(pContenu, child);
					
					//contexte technique
					var child = {
							tag : 'p',
							cls : 'p-contexte',
					};
					var pContexte  = dh.append(liContenu, child);
					var child = {
							tag : 'span',
							cls : 's-contexte',
							html : 'Contexte technique : '
					};
					var sContexte = dh.append(pContexte, child);
					var child = {
							tag : 'span',
							cls : 'bloc-contexte',
							html : enseignement.entContrainte
					};
					var blocContexte = dh.append(pContexte, child);

					//materiel
					var child = {
							tag : 'p',
							cls : 'p-materiel',
					};
					var pMateriel = dh.append(liContenu, child);
					
					var child = {
							tag : 'span',
							cls : 's-materiel',
							html : 'Matériels : '
					};
					var sMateriel = dh.append(pMateriel, child);
					var child = {
							tag : 'span',
							cls : 'bloc-materiel',
							html : enseignement.entMateriel
					};
					var blocMateriel = dh.append(pMateriel, child);
					
				});
			}
			

			//savoir
			var child = 
			{
					tag : 'div',
					cls : 'conteneur',
			};
			var conteneur = dh.append(blocCours, child);
			
			var child = {
					tag : 'h3',
					cls : 'p-savoir',
					html : 'Savoir : '
			};
			var pSavoir = dh.append(conteneur, child);
			var child = {
					tag : 'ul',
					cls : 'ul-savoir',
			};
			var ulSavoir = dh.append(conteneur, child);
			
			console.log(coursData);
			var savoirList = coursData.savoirs;
			if(savoirList !== null){

				savoirList.forEach(function(savoir) {
					var child = {
							tag : 'li',
							cls : 'li-savoir',
							html : savoir.savLibelle
					};
					var liSavoir = dh.append(ulSavoir, child);
				});	
				
			}
			
			//evaluation
			var child = 
			{
					tag : 'div',
					cls : 'conteneur',
			};
			var conteneur = dh.append(blocCours, child);
			
			var child = {
					tag : 'h3',
					cls : 'p-eval',
					html : 'Evalution : '
			};
			var pEval = dh.append(conteneur, child);
			var child = {
					tag : 'p',
					cls : 'bloc-eval',
					html : coursData.cocEvaluation
			};
			var blocEval = dh.append(conteneur, child);
			
			
			//commentaire
			var child = 
			{
					tag : 'div',
					cls : 'conteneur',
			};
			var conteneur = dh.append(blocCours, child);
			
			var child = {
					tag : 'h3',
					cls : 'p-com',
					html : 'Commentaire : '
			};
			var pCom = dh.append(conteneur, child);
			var child = {
					tag : 'p',
					cls : 'bloc-com',
					html : coursData.cocCommentaire
			};
			var blocCom = dh.append(conteneur, child);
			
		};
		var win = window.open('printFicheCours.html');
		win.onload = drawDocument;
	},
	
	
	onRemoveEnseignement : function(view, row, col, action, ev, record){
		 
		var vm = this.getViewModel();
		
		var enseignementModel = vm.getStore('enseignementStore').getModel();
        
        var entId = record.get('entId');
        
    	enseignementModel.load(entId,
    	{
		  scope: this,
		  callback: function(record, operation) 
		  {
			  
			  var arrayCoursCursuses = record.get('coursCursuses');
			  
			  var coursCursus  = vm.get('currentCursusSecondTree').getData();
			  var coursCursusId = coursCursus.cocId;
              
             arrayCoursCursuses.forEach(function(cours) 
			 {
            	 if(coursCursusId == cours.cocId)
            	 {
            		 Ext.Array.remove(arrayCoursCursuses, cours);
                 }
			 });

			record.save(
			{
				scope: this,
				callback: function()
				{
					var myStore = vm.getStore('enseignementStore');
				       myUrl = './webapi/enseignement/courscursus/'.concat(coursCursusId);	
				       myStore.load({
				    	   url : myUrl,
				       });
					
				}
			});
		  }
    	});
        
	},
	onRemoveSavoir : function(view, row, col, action, ev, record){
		var vm = this.getViewModel();
		
		var savoirModel = vm.getStore('savoirStore').getModel();
        
        var savId = record.get('savId');
        
        savoirModel.load(savId,
    	{
		  scope: this,
		  callback: function(record, operation) 
		  {
			  
			  var arrayCoursCursuses = record.get('coursCursuses');
			  
			  var coursCursus  = vm.get('currentCursusSecondTree').getData();
			  var coursCursusId = coursCursus.cocId;
              
             arrayCoursCursuses.forEach(function(cours) 
			 {
            	 if(coursCursusId == cours.cocId)
            	 {
            		 Ext.Array.remove(arrayCoursCursuses, cours);
                 }
			 });

			record.save(
			{
				scope: this,
				callback: function()
				{
					var myStore = vm.getStore('savoirStore');
				       myUrl = './webapi/savoir/courscursus/'.concat(coursCursusId);	
				       myStore.load({
				    	   url : myUrl,
				       });
					
				}
			});
		  }
    	});
	},

	
	
	
});