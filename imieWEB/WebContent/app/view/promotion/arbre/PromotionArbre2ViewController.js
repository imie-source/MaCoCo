Ext.define('ExtJsMVC.view.promotion.arbre.PromotionArbre2ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.PromotionArbre2ViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			'promo-Arbre2' : 
			{
				selectionchange :this.chargeSecondPromoTreeForm,
				itemcontextmenu : this.onPromoTreeContextMenu,
			},
			
		});
		
	},
	 chargeSecondPromoTreeForm : function(grid, selectedRecords, eOpts)
		{
			var record = selectedRecords[0];

			var vm = this.getViewModel();
			var switchview = Ext.ComponentQuery.query('#switchView')[0];
			var myStore;
			var promoModel = vm.getStore('promotionStore').getModel();
			//var itemSelectedId;
			var myUrl;
			
			var modelName = record.entityName;
			switch(modelName) 
			{	

			case 'ExtJsMVC.model.promotion.PromotionModel' :
				console.log('chargement du formulaire promo');
				 if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       switchview.add({xtype : 'promo-DetailPromoGlobal'});
			      
					
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
					switchview.child().child('#ordoPromo').add(panelTemplatePeriodes);
			       
					//Preparation du panel pour les unites de formation associees
					var panelTemplate = Ext.create('Ext.panel.Panel', {
					    title: 'Unite Formation de la Promotion',
					    bodyPadding: 10,
					    
					    tpl : new Ext.XTemplate
					    (
				    		'<tpl for=".">',
									'<div class="uniteformation-row" id="uniteformation-{ufpId}">',
										'Unite Formation : {ufpNom}',
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
				    				    	var uniteFormationModel = vm.getStore('ufPromoStore').getModel();
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
					panelTemplate.setData(record.get('uniteFormationPromotions'));
					//Ajout du panel
					switchview.child().child('#detailPromo').add(panelTemplate);
					
					
					//Ordonnancement
					var storeOrdo = this.getViewModel().getStore('coursByPromotion');
					var myUrl = '/imieWEB/webapi/courspromotion/promotion/'.concat(record.get('proId')).concat('/root');
					storeOrdo.load({url : myUrl});
					console.log('storeOrdo');
					console.log(storeOrdo);
					
			break; 
			case 'ExtJsMVC.model.promotion.UniteFormationPromotionModel' :
				console.log('chargement du formulaire uf promo');

				// suppression de l'ancienne vue
				if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			    //Ajout de la vue correspondante  
			    switchview.add({xtype : 'promo-DetailUniteFormation'});


				//Preparation du panel pour les elements "enfants"
				var panelTemplateTest = Ext.create('Ext.panel.Panel', {
				    title: 'Modules de cette unité de formation',
	                autoDestroy : true,
				    bodyPadding: 10,
				    
				    tpl : new Ext.XTemplate
				    (
			    		'<tpl for=".">',
								'<div class="module-row" id="module-{mopId}">',
									'Module : {mopIntitule}',
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
			    				    	var modulePromoModel = vm.getStore('modulePromoStore').getModel();
			    				    	modulePromoModel.load(moduleRowId,
			    				    	{
			    						  scope: this,
			    						  callback: function(record, operation) 
			    						  {
			    							  record.erase();
			    							  
			    							//Retrait du panel
			    							switchview.remove(panelTemplateTest);
			    							
			    							
			    							//TODO: Recharger correctement
			    							var storeUniteFormations = vm.getStore('rootPromotion');
			    							var arboCursus = promoModel.load(storeUniteFormations.getRoot().get('proId'),
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
				panelTemplateTest.setData(record.get('modulePromotions'));
				//Ajout du panel
				switchview.add(panelTemplateTest);


			break;
			case 'ExtJsMVC.model.promotion.ModulePromotionModel' :
				console.log('chargement du formulaire module promo');
				  
			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       switchview.add({xtype : 'promo-DetailModule'});

					//Preparation du panel pour les elements "enfants"
					var panelTemplate = Ext.create('Ext.panel.Panel', {
					    title: 'Cours du module',
					    bodyPadding: 10,
					    cls : 'SeleniumCoursByModule',
					    tpl : new Ext.XTemplate
					    (
				    		'<tpl for=".">',
									'<div class="cours-row" id="cours-{copId}">',
										'Cours : {copIntitule}',
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
				    				    	var coursPromoModel = vm.getStore('coursByPromotion').getModel();
				    				    	coursPromoModel.load(coursRowId,
				    				    	{
				    						  scope: this,
				    						  callback: function(record, operation) 
				    						  {
				    							record.erase();

				    							//Retrait du panel
				    							switchview.remove(panelTemplate);
				    							
				    							
				    							//TODO: Recharger Correctement
				    							var storeUniteFormations = vm.getStore('rootPromotion');
				    							var arboCursus = promoModel.load(storeUniteFormations.getRoot().get('curId'),
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
					panelTemplate.setData(record.get('coursPromotions'));
					//Ajout du panel
					switchview.add(panelTemplate);
			break;
			case 'ExtJsMVC.model.promotion.CoursPromotionModel' :
				console.log('chargement du formulaire cours promo');
				  if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       switchview.add({xtype : 'promo-DetailCours'});
			       
			     //Preparation du panel pour les elements "enfants"
			       var savoirModel = vm.getStore('savoirStore').getModel();
			       var detailView = Ext.ComponentQuery.query('form')[0];
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
							                 var arrayCoursPromotion = record.get('coursPromotions');
							                 if(arrayCoursPromotion == null) { arrayCoursPromotion = new Array() }
							                  
							                 
							                 //Ajout du cours a la liste des cours du savoir 
							                 //var coursCursus = detailView.getRecord().getData({persist: true});
							                 
							                 var coursPromotion  = vm.get('currentSecondPromoTreeItem').getData({persist: true});
							                 console.log('coursPromo à ajouter');
							                 console.log(coursPromotion);
							                 arrayCoursPromotion.push(coursPromotion);
							                  
							                 
							                 //preparation sauvegarde savoir
							                 arrayCoursPromotion.forEach(function(coursPromo) 
											 {
							                	  cleanTreeFields(coursPromo);
							                	  coursPromo.savoirs = null;
											 });
							                  
			    							record.save(
	    									{
	    										scope: this,
	    										callback: function()
	    										{
	    											console.log('savoir ajouté');
	    											console.log(coursPromotion.copId);
	    																       
	    											
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
				    							  var arrayCoursPromotion = record.get('coursPromotion');
				    							  
									              //var coursCursus = detailView.getRecord().getData();
				    							  var coursPromotion  = vm.get('currentSecondPromoTreeItem').getData();
				    							  var coursPromotionId = coursPromotion.copId;
									              
								                 arrayCoursPromotion.forEach(function(promo) 
												 {
								                	 if(coursPromotionId == promo.copId)
								                	 {
								                		 Ext.Array.remove(arrayCoursPromotion, promo);
								                     }
												 });
									              
				    							 record.save();
				    							 
				    							//Retrait du panel
				    							switchview.remove(panelTemplate);
					    							
				    							
				    							//TODO: recharger correctement
				    							var storeUniteFormations = vm.getStore('rootPromotion');
				    							var arboCursus = promoModel.load(storeUniteFormations.getRoot().get('proId'),
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
		},
		
		onPromoTreeContextMenu : function(tree,record,item,index,e,eOpts){
	    	e.stopEvent();
	    	
	    	var vm = this.getViewModel();
	    	var myStore;
	    	var me = this;
	    	var modelName = record.entityName;
	    	var menu;


			switch(modelName) 
			{	
				case 'ExtJsMVC.model.promotion.CoursPromotionModel' :
			    	menu = new Ext.menu.Menu({	
			    		items:[ 
			    		{
			    			text : 'supprimer le cours',
			    			handler:function(){
			    				myStore = vm.getStore('coursByPromotion');
			    				myUrl = '/imieWEB/webapi/courspromotion/'.concat(record.get('copId'));	
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
				
				case 'ExtJsMVC.model.promotion.ModulePromotionModel' :
					menu = new Ext.menu.Menu({	
			    		items:[ 
			    		{
			    			text : 'supprimer le module',
			    			handler:function(){
			    				myStore = vm.getStore('modulePromoStore');
			    				myUrl = '/imieWEB/webapi/modulepromotion/'.concat(record.get('mopId'));	
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
			
				case 'ExtJsMVC.model.promotion.UniteFormationPromotionModel' :
					menu = new Ext.menu.Menu({	
			    		items:[ 
			    		{
			    			text : 'supprimer l\'unité de formation',
			    			handler:function(){
			    				myStore = vm.getStore('ufPromoStore');
			    				myUrl = '/imieWEB/webapi/uniteformationpromotion/'.concat(record.get('ufpId'));	
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
				
				case 'ExtJsMVC.model.promotion.PromotionModel' :
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