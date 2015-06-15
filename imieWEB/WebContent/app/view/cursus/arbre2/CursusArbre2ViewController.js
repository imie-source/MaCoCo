Ext.define('ExtJsMVC.view.cursus.arbre2.CursusArbre2ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CursusArbre2ViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			'cursus-Arbre2' : 
			{
				selectionchange :this.chargeSecondTreeForm,
				itemcontextmenu : this.onSecondTreeContextMenu,
			},
		});
		
	},
	chargeSecondTreeForm : function(grid, selectedRecords, eOpts)
	{
		var record = selectedRecords[0];
		var vm = this.getViewModel();
		var switchview = Ext.ComponentQuery.query('#switchView')[0];
		var myStore;
		//var itemSelectedId;
		var myUrl;
		var cursusModel = vm.getStore('cursuses').getModel();
		var storeUniteFormations = vm.getStore('rootCursuses');
		var modelName = record.entityName;
		switch(modelName) 
		{	

		case 'ExtJsMVC.model.cursus.CursusModel' :
		//case 'ExtJsMVC.model.promotion.CursusPromotionModel' :  
		       console.log('Affichage Cursus');
		       
		       if(switchview.getChildEls())
	    	   {
		    	   switchview.removeAll();
	    	   }
		       switchview.add({xtype : 'cursus-DetailCursusGlobal'});
		       
				
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
			    				    	var uniteFormationModel = vm.getStore('ufStore').getModel();
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
				var storeOrdo = this.getViewModel().getStore('coursByCursus');
				var myUrl = '/imieWEB/webapi/courscursus/cursus/'.concat(record.get('curId')).concat('/root');
				storeOrdo.load({url : myUrl});
				console.log('storeOrdo');
				console.log(storeOrdo);
				
				
				break;
		
			case 'ExtJsMVC.model.cursus.UniteFormationCursusModel' :
			console.log('Affichage Unite formation');
		    
			// suppression de l'ancienne vue
			if(switchview.getChildEls())
	    	   {
		    	   switchview.removeAll();
	    	   }
		    //Ajout de la vue correspondante  
		    switchview.add({xtype : 'cursus-DetailUniteFormation'});
		    

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
		    				    	var moduleCursusModel = vm.getStore('moduleStore').getModel();
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
			       
					//Preparation du panel pour les elements "enfants"
					var panelTemplate = Ext.create('Ext.panel.Panel', {
					    title: 'Cours du module',
					    bodyPadding: 10,
					    cls : 'SeleniumCoursByModule',
					    tpl : new Ext.XTemplate
					    (
				    		'<tpl for=".">',
									'<div class="cours-row" id="cours-{cocId}">',
										'{cocIntitule}	',
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
				    				    	var coursCursusModel = vm.getStore('coursByCursus').getModel();
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

			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       switchview.add({xtype : 'cursus-DetailCours'});
			       
			       var detailBottomView = Ext.ComponentQuery.query('#detailBottomView')[0];
			       
			     //Preparation du panel pour les elements "enfants"
			       var savoirModel = vm.getStore('savoirStore').getModel();
			       var enseignementModel = vm.getStore('enseignementStore').getModel();
			       var detailView = Ext.ComponentQuery.query('form')[0];
			       var panelTemplate = Ext.create('Ext.panel.Panel', {
					    title: 'Glisser des savoirs dans cette zone',
					    bodyPadding: 10,
					    flex  : 1,
					    
					    itemId : 'TemplateSavoirs',
					    
					    tpl : new Ext.XTemplate
					    (
				    		'<tpl for=".">',
									'<div class="savoir-row" id="savoir-{savId}">',
										'{savLibelle}	',
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
							                 //var coursCursus = detailView.getRecord().getData({persist: true});
							                 
							                 var coursCursus  = vm.get('currentCursusSecondTree').getData({persist: true});
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
	    											
//	    											var coursCursusModel = this.getCursusCoursCursusModelModel();
//	    											coursCursusModel.load(coursCursus.cocId),
//	    											{
//	    											  scope: this,
//	    											  callback: function(record, operation) 
//	    											  {
//	    									l			  recordArbre.data.moduleCursus = record.data.moduleCursus;
//	    												  
//	    	    										  detailView.loadRecord(recordArbre);
//	    											  }
//	    											});

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
				    							  
									              //var coursCursus = detailView.getRecord().getData();
				    							  var coursCursus  = vm.get('currentCursusSecondTree').getData();
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
					//switchview.add(panelTemplate);
					detailBottomView.add(panelTemplate);
					//****************************************************
					var panelTemplateEnt = Ext.create('Ext.panel.Panel', {
					    title: 'Glisser des enseignements dans cette zone',
					    bodyPadding: 10,
					    flex  : 1,
					    
					    itemId : 'TemplateEnseignements',
					    
					    tpl : new Ext.XTemplate
					    (
				    		'<tpl for=".">',
									'<div class="enseignement-row" id="enseignement-{entId}">',
										'{entNom}	',
									'</div>',
							'</tpl>'
						),
						
						
					    listeners: {
					    	
					        'afterrender': function () 
					        {
					        	
					            this.dropZone = Ext.create('Ext.dd.DropTarget', this.getEl(), {
					            	ddGroup: 'groupCoursEnseignement',
					                panel: this,
					                
					                notifyDrop : function(source, e, data) 
					                {
					                    var nouveauEnseignement =  data.records[0];
					                    
					                    var entId = nouveauEnseignement.get('entId');
					                    
			    				    	enseignementModel.load(entId,
			    				    	{
			    						  scope: this,
			    						  callback: function(record, operation) 
			    						  {
							                 var arrayCoursCursuses = record.get('coursCursuses');
							                 if(arrayCoursCursuses == null) { arrayCoursCursuses = new Array() }
							                  
							                 
							                 //Ajout du cours a la liste des cours du enseignement 
							                 //var coursCursus = detailView.getRecord().getData({persist: true});
							                 
							                 var coursCursus  = vm.get('currentCursusSecondTree').getData({persist: true});
							                 arrayCoursCursuses.push(coursCursus);
							                  
							                 
							                 //preparation sauvegarde enseignement
							                 arrayCoursCursuses.forEach(function(cours) 
											 {
							                	  cleanTreeFields(cours);
							                	  cours.enseignements = null;
											 });
							                  
			    							record.save(
	    									{
	    										scope: this,
	    										callback: function()
	    										{
	    											console.log('enseignement ajouté');
	    											console.log(coursCursus.cocId);
	    											
	    											//TODO: rafraichir Record du panel
	    											
//	    											var coursCursusModel = this.getCursusCoursCursusModelModel();
//	    											coursCursusModel.load(coursCursus.cocId),
//	    											{
//	    											  scope: this,
//	    											  callback: function(record, operation) 
//	    											  {
//	    									l			  recordArbre.data.moduleCursus = record.data.moduleCursus;
//	    												  
//	    	    										  detailView.loadRecord(recordArbre);
//	    											  }
//	    											});

//	    									       
	    											
	    										}
	    									});
			    						  }
			    				    	});
					                    
					                    return true;
					                }          
					            });  
					            
					            
					            
					            
					            var renderSelector = Ext.query('div.enseignement-row'); 
				                for(var i in renderSelector)
				                {
				                	var renderRow = renderSelector[i];
				                	
				                	new Ext.Button(
				                	{
				                		cls : 'SeleniumModuleSuppButton',
				                		//id: 'SeleniumEnseignementCoursSuppButton'+i,
				    					text:' X ',
				    					renderTo: renderRow,
				    				    handler: function(bouton) 
				    				    {
				    				    	var enseignementRowId = bouton.renderTo.id;
				    				    	var sliceIndex = enseignementRowId.indexOf('-');
				    				    	enseignementRowId = enseignementRowId.slice(sliceIndex+1,enseignementRowId.length);
				    				    	
				    				    	
				    				    	//suppression de l'element
				    				    	
				    				    	enseignementModel.load(enseignementRowId,
				    				    	{
				    						  scope: this,
				    						  callback: function(record, operation) 
				    						  {
				    							  var arrayCoursCursuses = record.get('coursCursuses');
				    							  
									              //var coursCursus = detailView.getRecord().getData();
				    							  var coursCursus  = vm.get('currentCursusSecondTree').getData();
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
				    							switchview.remove(panelTemplateEnt);
					    							
				    							
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
					panelTemplateEnt.setData(record.get('enseignements'));
					//switchview.add(panelTemplateEnt);
					detailBottomView.add(panelTemplateEnt);
					//*****************************************************
			       break;				
			
			default:
				console.log('Ne correspond pas');
			} 
	},
	onSecondTreeContextMenu : function(tree,record,item,index,e,eOpts){
    	e.stopEvent();
    	
    	var vm = this.getViewModel();
    	var myStore;
    	var me = this;
    	var modelName = record.entityName;
    	var menu;


		switch(modelName) 
		{	
			case 'ExtJsMVC.model.cursus.CoursCursusModel' :
		    	menu = new Ext.menu.Menu({	
		    		items:[ 
		    		{
		    			text : 'supprimer le cours',
		    			handler:function(){
		    				myStore = vm.getStore('coursByCursus');
		    				myUrl = '/imieWEB/webapi/courscursus/'.concat(record.get('cocId'));	
							myStore.load({
								url : myUrl,
								callback : function(){
				    				myStore.removeAll();
				    				myStore.sync();
								}
							});
		    	    	},
		    		}
		    		]
		    	}).showAt(e.getXY());
			break;
			
			case 'ExtJsMVC.model.cursus.ModuleCursusModel' :
				menu = new Ext.menu.Menu({	
		    		items:[ 
		    		{
		    			text : 'supprimer le module',
		    			handler:function(){
		    				myStore = vm.getStore('moduleStore');
		    				myUrl = '/imieWEB/webapi/modulecursus/'.concat(record.get('mocId'));	
							myStore.load({
								url : myUrl,
								callback : function(){
				    				myStore.removeAll();
				    				myStore.sync();
								}
							});
		    	    	},
		    	    	border : '0 0 1 0',
		    	    	style : {
		    	    		borderColor : '#CCCCCC',
		    	    		borderStyle: 'solid'
		    	    	}
		    		},{
		    			text : 'ajouter un cours',
		    			handler:function(){
		    				me.onAddButtonClick();		    	    	
		    			},	
		    		},
		    		]
		    	}).showAt(e.getXY());
			break;
		
			case 'ExtJsMVC.model.cursus.UniteFormationCursusModel' :
				menu = new Ext.menu.Menu({	
		    		items:[ 
		    		{
		    			text : 'supprimer l\'unité de formation',
		    			handler:function(){
		    				myStore = vm.getStore('ufStore');
		    				myUrl = '/imieWEB/webapi/uniteformationcursus/'.concat(record.get('ufcId'));	
							myStore.load({
								url : myUrl,
								callback : function(){
				    				myStore.removeAll();
				    				myStore.sync();
								}
							});
		    				
		    	    	},
		    	    	border : '0 0 1 0',
		    	    	style : {
		    	    		borderColor : '#CCCCCC',
		    	    		borderStyle: 'solid'
		    	    	}
		    		},{
		    			text : 'ajouter un module',
		    			handler:function(){
		    				me.onAddButtonClick();
		    	    	},	
		    		},
		    		]
		    	}).showAt(e.getXY());
			break;
			
			case 'ExtJsMVC.model.cursus.CursusModel' :
				menu = new Ext.menu.Menu({	
		    		items:[ 
		    		{
		    			text : 'ajouter une unité de formation',
		    			handler:function(){
		    				me.onAddButtonClick();
		    	    	},	
		    		},
		    		]
		    	}).showAt(e.getXY());
			break;
			
			default:
				console.log('Ne correspond pas');
		} 	
    },
});