Ext.define('ExtJsMVC.controller.CursusController',
{
	extend: 'Ext.app.Controller',
	
	models : 
	[
	 	'referentiel.RootReferentiel',
	 	'referentiel.Referentiel',
	 	'referentiel.ActiviteType',
	 	'referentiel.CompetencePro',
	 	'referentiel.Savoir',
	 	'cursus.RootCursusModel',
		'cursus.CursusModel',
	 	'cursus.CoursByCursusModel',
		'cursus.PeriodeCursusModel',
		'cursus.UniteFormationCursusModel',
		'cursus.ModuleCursusModel',
		'cursus.CoursCursusModel'
	],
	
	views : 
	[
		'cursus.CursusArbre',
		'cursus.CursusArbre2',
		//'administration.AdministrationWindow'
	],
	
	refs :
	[
	 	{ref : 'switchView', selector: 'viewport #switchView'},
	 	{ref : 'arbre2', selector: 'cursus-Arbre2'}
	],

	stores : 
	[
		'CursusStore',
		'UniteFormationStore',
		'Referentiel',
		'CoursByCursus'
	],
	
	
	init: function()
	{
		
		this.getCursusStoreStore().load();

		this.control
		({
			'cursus-Arbre' : 
			{
				itemclick : this.chargeSecondArbre
			},
			
			'cursus-Arbre2' : 
			{
				itemclick : this.chargeFormulaire
			},
			
		});
	},
	
	

	chargeSecondArbre : function(grid, record)
	{

		var cursusModel = this.getCursusCursusModelModel();
		var referentielModel = this.getReferentielReferentielModel();
		
		var storeUniteFormations = this.getUniteFormationStoreStore();
		var storeReferentiel = this.getReferentielStore();
		
		//GET du cursus concerné
		var arboCursus = cursusModel.load(record.get('curId'),{
			
		    scope: this,
		    success: function(recordCur, operation) 
		    {
		    	console.log('success cursus');
		    	console.log(recordCur);
				storeUniteFormations.setRoot(
				{
					text: 'new cur root',
					expanded: true,
					children: recordCur
				});
		    },
		});

		
		//GET du referentiel concerné
		var arboReferentiel = referentielModel.load(record.get('refId'),{
			
		    scope: this,
		    success: function(recordRef, operation) 
		    {
				storeReferentiel.setRoot(
				{
					text: 'new ref root',
					expanded: true,
					children: recordRef
				});
		    },
		});
		
		
//		
//
//		var modelName = record.entityName;
//		var switchview = this.getSwitchView();
//		
//		switch(modelName) 
//		{
//
//		        
//		    default:
//		        console.log('Ne correspond pas');
//		} 
	},
	//Ouverture de la fenêtre d'administration
	/*onOpenAdminWindowButtonClick : function(bouton)
	{
		var viewAdminWindow = Ext.widget('AdministrationWindow');
		viewAdminWindow.show();
	},*/
	
	
	
	//Chargement des formulaires associés aux éléments
	chargeFormulaire : function(grid, record)
	{
		console.log('record');
		console.log(record);
		
		var periodeCursusModel = this.getCursusPeriodeCursusModelModel();
    	var moduleCursusModel = this.getCursusModuleCursusModelModel();
		var coursCursusModel = this.getCursusCoursCursusModelModel();
		var cursusModel = this.getCursusCursusModelModel();
		
		var coursByCursusModel = this.getCursusCoursByCursusModelModel();
		var uniteFormationModel = this.getCursusUniteFormationCursusModelModel();

		
		var modelName = record.entityName;
		var switchview = this.getSwitchView();
		var arbre2 = this.getArbre2();
		var storeUniteFormations = arbre2.getStore();
		
		
		
		
		//Clic sur un cursus
		switch(modelName) 
		{
		
		    case 'ExtJsMVC.model.cursus.CursusModel' :
		    
		       console.log('Affichage Cursus');
		       
		       if(switchview.getChildEls())
	    	   {
		    	   switchview.removeAll();
	    	   }
		       switchview.add({xtype : 'cursus-DetailCursusGlobal'});
		       
		       var detailView = Ext.ComponentQuery.query('form')[0];
		       detailView.loadRecord(record);
		       
				
				//Preparation du panel pour les Periodes associees
				var panelTemplatePeriodes = Ext.create('Ext.panel.Panel', {
				    title: 'Périodes',
				    bodyPadding: 10,
				    
				    tpl : new Ext.XTemplate
				    (
			    		'<tpl for=".">',
								'<div class="periode-row" id="periode-{perId}">',
									'Periode du {perDebut} au {perFin} : {perNbjours} jours.',
								'</div>',
						'</tpl>'
					),
				    
				    listeners:
				    {
				    	afterrender:function()
				        {
				    		var renderSelector = Ext.query('div.periode-row'); 
			                for(var i in renderSelector)
			                {
			                	var renderRow = renderSelector[i];
			                	
			                	new Ext.Button(
			                	{
			    					text:' X ',
			    					renderTo: renderRow,
			    				    handler: function(bouton) 
			    				    {
			    				    	var periodeRowId = bouton.renderTo.id;
			    				    	var sliceIndex = periodeRowId.indexOf('-');
			    				    	periodeRowId = periodeRowId.slice(sliceIndex+1,periodeRowId.length);
			    				    	
			    				    	//suppression de l'element
			    				    	periodeCursusModel.load(periodeRowId,
			    				    	{
			    						  scope: this,
			    						  callback: function(record, operation) 
			    						  {
			    							  record.erase();
			    						  }
			    				    	});
			    				    }
			    				});
			                } 
				        }
				    }
				});
				
				//Ajout des elements "enfants" au panel
				panelTemplatePeriodes.setData(record.get('periodes'));
				//Ajout du panel
				switchview.child().child('#ordoCursus').add(panelTemplatePeriodes);
		       
				//Preparation du panel pour les unites de formation associees
				var panelTemplate = Ext.create('Ext.panel.Panel', {
				    title: 'Unite Formation du Cursus',
				    bodyPadding: 10,
				    
				    tpl : new Ext.XTemplate
				    (
			    		'<tpl for=".">',
								'<div class="uniteformation-row" id="uniteformation-{ufcId}">',
									'Unite Formation : {ufcNom}',
								'</div>',
						'</tpl>'
					),
				    
				    listeners:
				    {
				    	afterrender:function()
				        {
				    		var renderSelector = Ext.query('div.uniteformation-row'); 
			                for(var i in renderSelector)
			                {
			                	var renderRow = renderSelector[i];
			                	
			                	new Ext.Button(
			                	{
			                		cls : 'SeleniumModuleSuppButton',
			                		//id: 'SeleniumUFSuppButton'+i,
			    					text:' X ',
			    					renderTo: renderRow,
			    				    handler: function(bouton) 
			    				    {
			    				    	var uniteFormationRowId = bouton.renderTo.id;
			    				    	var sliceIndex = uniteFormationRowId.indexOf('-');
			    				    	uniteFormationRowId = uniteFormationRowId.slice(sliceIndex+1,uniteFormationRowId.length);
			    				    	
			    				    	//suppression de l'element
			    				    	uniteFormationModel.load(uniteFormationRowId,
			    				    	{
			    						  scope: this,
			    						  callback: function(record, operation) 
			    						  {
			    							  record.erase();
			    						  }
			    				    	});
			    				    }
			    				});
			                } 
				        }
				    }
				});
				
				
				//Ajout des elements "enfants" au panel
				panelTemplate.setData(record.get('uniteFormationCursuses'));
				//Ajout du panel
				switchview.child().child('#detailCursus').add(panelTemplate);
				
				
				//Ordonnancement
				var storeOrdo = this.getCoursByCursusStore();
				
				var myUrl = '/imieWEB/webapi/courscursus/cursus/'.concat(record.get('curId'));
//				var myUrl = storeOrdo.getProxy().concat(record.get('curId'));
				storeOrdo.load({url : myUrl});
				console.log('storeOrdo');
				console.log(storeOrdo);
				
				
				break;
		
		
		
		    //Click sur Unite de Formation    
	    
		    case 'ExtJsMVC.model.cursus.UniteFormationCursusModel' :
		    
		       console.log('Affichage Unite formation');
		       
		       //Nettoyage de la vue centrale
		       if(switchview.getChildEls())
	    	   {
		    	   switchview.removeAll();
	    	   }
		       //Ajout de la vue correspondante
		       switchview.add({xtype : 'cursus-DetailUniteFormation'});
		       
		       //Recuperation du formulaire
		       var detailView = Ext.ComponentQuery.query('form')[0];
		
		        //Chargement de l'unité de formation dans le formulaire
		       var recordArbre = record;
		       
		       var uniteFormationModel = this.getCursusUniteFormationCursusModelModel();
		       uniteFormationModel.load(record.get('ufcId'),
				{
				  scope: this,
				  callback: function(record, operation) 
				  {
					  recordArbre.data.cursus = record.data.cursus;
				  }
				});

				detailView.loadRecord(recordArbre);
		       

				//Preparation du panel pour les elements "enfants"
				var panelTemplateTest = Ext.create('Ext.panel.Panel', {
				    title: 'Modules de cette unité de formation',
                    autoDestroy : true,
				    bodyPadding: 10,
				    
				    tpl : new Ext.XTemplate
				    (
			    		'<tpl for=".">',
								'<div class="module-row" id="module-{mocId}">',
									'Module : {mocIntitule}',
								'</div>',
						'</tpl>'
					),
				    
				    listeners:
				    {
				    	afterrender:function()
				        {
				    		var renderSelector = Ext.query('div.module-row'); 
			                for(var i in renderSelector)
			                {
			                	var renderRow = renderSelector[i];
			                	
			                	new Ext.Button(
			                	{
			                		cls : 'SeleniumModuleSuppButton',
			                		//id: 'SeleniumModuleSuppButton'+i,
			    					text:' X ',
			    					renderTo: renderRow,
			    				    handler: function(bouton) 
			    				    {
			    				    	var moduleRowId = bouton.renderTo.id;
			    				    	var sliceIndex = moduleRowId.indexOf('-');
			    				    	moduleRowId = moduleRowId.slice(sliceIndex+1,moduleRowId.length);
			    				    	
			    				    	//suppression de l'element
			    				    	moduleCursusModel.load(moduleRowId,
			    				    	{
			    						  scope: this,
			    						  callback: function(record, operation) 
			    						  {
			    							  record.erase();
			    							  
			    							//Retrait du panel
			    							switchview.remove(panelTemplateTest);
			    							
			    							
			    							//TODO: Recharger correctement
			    							var arboCursus = cursusModel.load(storeUniteFormations.getRoot().get('curId'),
	    									{
	    									 // Arborescence complete du cursus récupérée	
	    									  success: function(record, operation) 
	    									  {
	    									      storeUniteFormations.removeAll();
	    									      storeUniteFormations.setRoot(record);
	    									      arbre2.expandPath(recordPath);
	    									  }
	    									});
			    						  }
			    				    	});
			    				    }
			    				});
			                } 
				        }
				    }
				});
				

				//Ajout des elements "enfants" au panel
				panelTemplateTest.setData(record.get('moduleCursuses'));
				//Ajout du panel
				switchview.add(panelTemplateTest);
				
		       
		        break;
		        
		        
		        
		        
		        
		        
		    case 'ExtJsMVC.model.cursus.ModuleCursusModel' :
		    
		       console.log('Affichage Module');
		       
		       if(switchview.getChildEls())
	    	   {
		    	   switchview.removeAll();
	    	   }
		       switchview.add({xtype : 'cursus-DetailModule'});
		       
		       var detailView = Ext.ComponentQuery.query('form')[0];
		       
		       //Chargement du module dans le formulaire
		       var recordArbre = record;
		       var recordPath = record.getPath();
		       
				var moduleCursusModel = this.getCursusModuleCursusModelModel();
				moduleCursusModel.load(record.get('mocId'),
				{
				  scope: this,
				  callback: function(record, operation) 
				  {
					  recordArbre.data.uniteFormationCursus = record.data.uniteFormationCursus;
				  }
				});

				detailView.loadRecord(recordArbre);
		       

				//Preparation du panel pour les elements "enfants"
				var panelTemplate = Ext.create('Ext.panel.Panel', {
				    title: 'Cours du module',
				    bodyPadding: 10,
				    cls : 'SeleniumCoursByModule',
				    tpl : new Ext.XTemplate
				    (
			    		'<tpl for=".">',
								'<div class="cours-row" id="cours-{cocId}">',
									'Cours : {cocIntitule}',
								'</div>',
						'</tpl>'
					),
				    
				    listeners:
				    {
				    	afterrender:function()
				        {
				    		var renderSelector = Ext.query('div.cours-row'); 
			                for(var i in renderSelector)
			                {
			                	var renderRow = renderSelector[i];
			                	
			                	new Ext.Button(
			                	{
			                		cls : 'SeleniumModuleSuppButton',
			                		//id: 'SeleniumCoursSuppButton'+i,
			    					text:' X ',
			    					renderTo: renderRow,
			    				    handler: function(bouton) 
			    				    {
			    				    	var coursRowId = bouton.renderTo.id;
			    				    	var sliceIndex = coursRowId.indexOf('-');
			    				    	coursRowId = coursRowId.slice(sliceIndex+1,coursRowId.length);
			    				    	
			    				    	//suppression de l'element
			    				    	coursCursusModel.load(coursRowId,
			    				    	{
			    						  scope: this,
			    						  callback: function(record, operation) 
			    						  {
			    							record.erase();

			    							//Retrait du panel
			    							switchview.remove(panelTemplate);
			    							
			    							
			    							//TODO: Recharger Correctement
			    							var arboCursus = cursusModel.load(storeUniteFormations.getRoot().get('curId'),
	    									{
	    									 // Arborescence complete du cursus récupérée	
	    									  success: function(record, operation) 
	    									  {
	    									      storeUniteFormations.removeAll();
	    									      storeUniteFormations.setRoot(record);
	    									      arbre2.expandPath(recordPath);
	    									  }
	    									});
			    							
			    							
			    						  }
			    				    	});
			    				    }
			    				});
			                } 
				        }
				    }
				});
				
				
				//Ajout des elements "enfants" au panel
				panelTemplate.setData(record.get('coursCursuses'));
				//Ajout du panel
				switchview.add(panelTemplate);
		       
		       break;
		        
		        
		        
		    case 'ExtJsMVC.model.cursus.CoursCursusModel' :
		    
		       console.log('Affichage Cours');
		       
		       
		       var savoirModel = this.getReferentielSavoirModel();
		    	
		    	
		       if(switchview.getChildEls())
	    	   {
		    	   switchview.removeAll();
	    	   }
		       switchview.add({xtype : 'cursus-DetailCours'});
		       
		       
		       var detailView = Ext.ComponentQuery.query('form')[0];
		       
		       //Chargement du cours et de son module associé dans le formulaire
		       var recordArbre = record;
		       
		        //recuperation du module
				var coursCursusModel = this.getCursusCoursCursusModelModel();
				coursCursusModel.load(record.get('cocId'),
				{
				  scope: this,
				  callback: function(record, operation) 
				  {
//					  recordArbre.data.moduleCursus = record.data.moduleCursus;
					  //chargement du record dans la vue
					  detailView.loadRecord(record);
				  }
				});
				
//				detailView.loadRecord(recordArbre);

		       
				//Preparation du panel pour les elements "enfants"
				var panelTemplate = Ext.create('Ext.panel.Panel', {
				    title: 'Glisser des savoirs dans cette zone',
				    bodyPadding: 10,
				    itemId : 'TemplateSavoirs',
				    
				    tpl : new Ext.XTemplate
				    (
			    		'<tpl for=".">',
								'<div class="savoir-row" id="savoir-{savId}">',
									'Savoir : {savLibelle}',
								'</div>',
						'</tpl>'
					),
					
					
				    listeners: {
				    	
				        'afterrender': function () 
				        {
				        	
				            this.dropZone = Ext.create('Ext.dd.DropTarget', this.getEl(), {
				            	ddGroup: 'groupCoursSavoir',
				                panel: this,
				                
				                notifyDrop : function(source, e, data) 
				                {
				                    var nouveauSavoir =  data.records[0];
				                    
				                    var savId = nouveauSavoir.get('savId');
				                    
		    				    	savoirModel.load(savId,
		    				    	{
		    						  scope: this,
		    						  callback: function(record, operation) 
		    						  {
						                 var arrayCoursCursuses = record.get('coursCursuses');
						                 if(arrayCoursCursuses == null) { arrayCoursCursuses = new Array() }
						                  
						                 //Ajout du cours a la liste des cours du savoir 
						                 var coursCursus = detailView.getRecord().getData({persist: true});
						                 arrayCoursCursuses.push(coursCursus);
						                  
						                 
						                 //preparation sauvegarde savoir
						                 arrayCoursCursuses.forEach(function(cours) 
										 {
						                	  cleanTreeFields(cours);
						                	  cours.savoirs = null;
										 });
						                  
		    							record.save(
    									{
    										scope: this,
    										callback: function()
    										{
    											console.log('savoir ajouté');
    											console.log(coursCursus.cocId);
    											
    											//TODO: rafraichir Record du panel
    											
//    											var coursCursusModel = this.getCursusCoursCursusModelModel();
//    											coursCursusModel.load(coursCursus.cocId),
//    											{
//    											  scope: this,
//    											  callback: function(record, operation) 
//    											  {
//    									l			  recordArbre.data.moduleCursus = record.data.moduleCursus;
//    												  
//    	    										  detailView.loadRecord(recordArbre);
//    											  }
//    											});

//    									       
    											
    										}
    									});
		    						  }
		    				    	});
				                    
				                    return true;
				                }          
				            });  
				            
				            
				            
				            
				            var renderSelector = Ext.query('div.savoir-row'); 
			                for(var i in renderSelector)
			                {
			                	var renderRow = renderSelector[i];
			                	
			                	new Ext.Button(
			                	{
			                		cls : 'SeleniumModuleSuppButton',
			                		//id: 'SeleniumSavoirCoursSuppButton'+i,
			    					text:' X ',
			    					renderTo: renderRow,
			    				    handler: function(bouton) 
			    				    {
			    				    	var savoirRowId = bouton.renderTo.id;
			    				    	var sliceIndex = savoirRowId.indexOf('-');
			    				    	savoirRowId = savoirRowId.slice(sliceIndex+1,savoirRowId.length);
			    				    	
			    				    	
			    				    	//suppression de l'element
			    				    	
			    				    	savoirModel.load(savoirRowId,
			    				    	{
			    						  scope: this,
			    						  callback: function(record, operation) 
			    						  {
			    							  var arrayCoursCursuses = record.get('coursCursuses');
			    							  
								              var coursCursus = detailView.getRecord().getData();
								              var coursCursusId = coursCursus.cocId;
								              
							                 arrayCoursCursuses.forEach(function(cours) 
											 {
							                	 if(coursCursusId == cours.cocId)
							                	 {
							                		 Ext.Array.remove(arrayCoursCursuses, cours);
							                     }
											 });
								              
			    							 record.save();
			    							 
			    							//Retrait du panel
			    							switchview.remove(panelTemplate);
				    							
			    							
			    							//TODO: recharger correctement
			    							var arboCursus = cursusModel.load(storeUniteFormations.getRoot().get('curId'),
	    									{
	    									 // Arborescence complete du cursus récupérée	
	    									  success: function(record, operation) 
	    									  {
	    									      storeUniteFormations.removeAll();
	    									      storeUniteFormations.setRoot(record);
	    									      arbre2.expandPath(recordPath);
	    									  }
		    									});
			    						  }
			    				    	});
			    				    }
			    				});
			                }    
				            
				            
				        }
				    } 
				});
				
				//Ajout des elements "enfants" au panel
				panelTemplate.setData(record.get('savoirs'));
		       switchview.add(panelTemplate);
		       
		       
		       break;	
		       
		    default:
		        console.log('Ne correspond pas');
		} 
	}
});
