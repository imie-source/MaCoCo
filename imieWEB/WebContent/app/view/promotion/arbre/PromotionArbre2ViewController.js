Ext.define('ExtJsMVC.view.promotion.arbre.PromotionArbre2ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.PromotionArbre2ViewController',
    init: function()
	{
		this.control
		({
			'promo-Arbre2' : 
			{
				beforeitemclick : this.itemClick,
				selectionchange :this.chargeSecondPromoTreeForm,
				itemcontextmenu : this.onPromoTreeContextMenu,
			},
			
		});
		
	},
	
	itemClick : function( tree, record, item, index, e, eOpts ){
		var vm = this.getViewModel();
		var selectedItem = vm.get('currentSecondPromoTreeItem');
		if (selectedItem===record){
			console.log('selectedItem===record');	
			var selectedRecords = new Array();
			selectedRecords.push(record);
			this.chargeSecondPromoTreeForm(tree, selectedRecords, eOpts);
		}
	},
	 chargeSecondPromoTreeForm : function(grid, selectedRecords, eOpts)
		{
			var vm = this.getViewModel();
			var promoModel = vm.getStore('promotionStore').getModel();
			var switchview = Ext.ComponentQuery.query('#switchView')[0];
			var myStore;
			var myUrl;
			
			var record = selectedRecords[0];
			var modelName = record.entityName;
			switch(modelName) 
			{	

			case 'ExtJsMVC.model.promotion.PromotionModel' :
				console.log('chargement du formulaire promo');
				
			       if(selectedRecords[0].get('proId')!== undefined){
				       myStore = vm.getStore('ufPromoStore');
				       myUrl = '/imieWEB/webapi/uniteformationpromotion/promotion/'.concat(record.get('proId'));	
				       myStore.load({
				    	   url : myUrl,
				    	   callback : function(){
				    		   myPeriodeStore = vm.getStore('periodePromotionStore');
						       myUrl = '/imieWEB/webapi/periodepromotion/promotion/'.concat(record.get('proId'));	
						       myPeriodeStore.load({
						    	   url : myUrl,
						    	   callback : function(){
						    		   if(switchview.getChildEls())
							    	   {
								    	   switchview.removeAll();
							    	   }
								       switchview.add({xtype : 'promo-DetailPromoGlobal'});
								       
								       var myCoursStore = vm.getStore('coursByPromotion');
								       
								       //function.myFunctions.js
								       addNbJourWindow(myPeriodeStore.getData().items,myCoursStore.getData().items);
						    	   }
						       }); 
				    	   }
				       });
			       }else {
			    	   vm.getStore('ufPromoStore').removeAll();
				    }
					//Ordonnancement
					var storeOrdo = this.getViewModel().getStore('coursByPromotion');
					var myUrl = '/imieWEB/webapi/courspromotion/promotion/'.concat(record.get('proId')).concat('/root');
					storeOrdo.load({url : myUrl});
					console.log('storeOrdo');
					console.log(storeOrdo);
					
			break; 
			case 'ExtJsMVC.model.promotion.UniteFormationPromotionModel' :
				console.log('chargement du formulaire uf promo');

				
			    if(selectedRecords[0].get('ufpId')!== undefined){
				       myStore = vm.getStore('modulePromoStore');
				       myUrl = '/imieWEB/webapi/modulepromotion/uniteformation/'.concat(record.get('ufpId'));	
				       myStore.load({
				    	   url : myUrl,
				    	   callback : function(){
				    		// suppression de l'ancienne vue
								if(switchview.getChildEls())
						    	   {
							    	   switchview.removeAll();
						    	   }
							    //Ajout de la vue correspondante  
							    switchview.add({xtype : 'promo-DetailUniteFormation'});
				    	   }
				       });	
				}else {
			    	   vm.getStore('modulePromoStore').removeAll();
			    }
			break;
			case 'ExtJsMVC.model.promotion.ModulePromotionModel' :
				console.log('chargement du formulaire module promo');
				  
			      
			       if(selectedRecords[0].get('mopId')!== undefined){
				       myStore = vm.getStore('coursByPromotion');
				       myUrl = '/imieWEB/webapi/courspromotion/module/'.concat(record.get('mopId'));	
				       myStore.load({
				    	   url : myUrl,
				    	   callback : function(){
					    		// suppression de l'ancienne vue
									if(switchview.getChildEls())
							    	   {
								    	   switchview.removeAll();
							    	   }
								    //Ajout de la vue correspondante  
								    switchview.add({xtype : 'promo-DetailModule'});
					    	   }
				       });
			       }else {
			    	   vm.getStore('coursByPromotion').removeAll();
			       }
			break;
			case 'ExtJsMVC.model.promotion.CoursPromotionModel' :
				console.log('chargement du formulaire cours promo');
				  if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       
			       
			       if(selectedRecords[0].get('copId')!== undefined){
				       myStore = vm.getStore('savoirStore');
				       myUrl = '/imieWEB/webapi/savoir/courspromotion/'.concat(record.get('copId'));	
				       myStore.load({
				    	   url : myUrl,
				    	   callback : function(){
				    		   var myStoreEnt = vm.getStore('enseignementStore');
						       myUrl = '/imieWEB/webapi/enseignement/courspromotion/'.concat(record.get('copId'));	
						       myStoreEnt.load({
						    	   url : myUrl,
						    	   callback : function(){
						    		   switchview.add({xtype : 'promo-DetailCours'});
						    		   
								       var detailBottomView = Ext.ComponentQuery.query('#detailBottomView')[0];
								     //Preparation du panel pour les elements "enfants"
								       var savoirModel = vm.getStore('savoirStore').getModel();
								       var enseignementModel = vm.getStore('enseignementStore').getModel();
								       var detailView = Ext.ComponentQuery.query('form')[0];
									   var gridSavoir = Ext.create('Ext.grid.Panel', {
										   frame : true,
										   hideHeaders : true,
										itemId : 'savoirCoursGrid',
						                id : 'savoirCoursGrid',
						                title: 'Glisser des savoirs dans cet zone',
						                bind:{
						                	store:'{savoirStore}',
						    			},
						    			width : '50%',
										columns:[{
											dataIndex : 'text',
											width : '85%',
										},{
											xtype : 'actioncolumn',
											width : '15%',
											menuDisabled : true,
											items :[
											{
												icon : 'img/delete.png',
												tooltip : 'Supprimer',
												handler : 'onRemoveSavoir'
											}],
										}],
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
									                	
									                    var savoirModel = vm.getStore('savoirStore').getModel();
							    				    	savoirModel.load(savId,
							    				    	{
							    						  scope: this,
							    						  callback: function(record, operation) 
							    						  {
											                 var arrayCoursPromotions = record.get('coursPromotions');
											                 if(arrayCoursPromotions == null) { arrayCoursPromotions = new Array() }

											                 //Ajout du cours a la liste des cours du savoir
											                 
											                 var coursPromotion  = vm.get('currentSecondPromoTreeItem').getData({persist: true});
											                 arrayCoursPromotions.push(coursPromotion);
											                  
											                 
											                 //preparation sauvegarde savoir
											                 arrayCoursPromotions.forEach(function(cours) 
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
					    											console.log(coursPromotion.copId);  	
					    										
					    											var myStore = vm.getStore('savoirStore');
					    										       myUrl = '/imieWEB/webapi/savoir/courspromotion/'.concat(coursPromotion.copId);	
					    										       myStore.load({
					    										    	   url : myUrl,
					    										       });
					    										}
					    									});
							    						  }
							    				    	});
									                    
									                    return true;
									                }          
									           });
									        }
										}
							       });
						       
							
								
								detailBottomView.add(gridSavoir);
								
								var gridEnseignement = Ext.create('Ext.grid.Panel', {
							    	   frame : true,
							    	   hideHeaders : true,
										itemId : 'enseignementCoursGrid',
						                id : 'enseignementCoursGrid',
						                title: 'Glisser des enseignements dans cet zone',
						                bind:{
						                	store:'{enseignementStore}',
						    			},
						    			width : '50%',
										columns:[{
											dataIndex : 'entNom',
											width : '85%',
										},{
											xtype : 'actioncolumn',
											width : '15%',
											menuDisabled : true,
											items :[
											{
												icon : 'img/delete.png',
												tooltip : 'Supprimer',
												handler : 'onRemoveEnseignement'
											}],
										}],
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
											                 var arrayCoursPromotions = record.get('coursPromotions');
											                 if(arrayCoursPromotions == null) { arrayCoursPromotions = new Array() }
											                  
											                 
											                 //Ajout du cours a la liste des cours du enseignement 
											                 
											                 
											                 var coursPromotion = vm.get('currentSecondPromoTreeItem').getData({persist: true});
											                 arrayCoursPromotions.push(coursPromotion);
											                  
											                 
											                 //preparation sauvegarde enseignement
											                 arrayCoursPromotions.forEach(function(cours) 
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
					    											console.log(coursPromotion.copId);
				    									       
					    											var myStore = vm.getStore('enseignementStore');
					    										       myUrl = '/imieWEB/webapi/enseignement/courspromotion/'.concat(coursPromotion.copId);	
					    										       myStore.load({
					    										    	   url : myUrl,
					    										       });
					    											
					    										}
					    									});
							    						  }
							    				    	});
									                    
									                    return true;
									                }                  
									           });
									        }
										}
							       });
						       
							
								
								detailBottomView.add(gridEnseignement);	

						    	   }
						       });
				    	   }
				       });
				       
				    }
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