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
				beforeitemclick : this.itemClick,
			},
		});
		
	},
	
	itemClick : function( tree, record, item, index, e, eOpts ){
		var vm = this.getViewModel();
		var selectedItem = vm.get('currentCursusSecondTree');
		if (selectedItem===record){	
			var selectedRecords = new Array();
			selectedRecords.push(record);
			this.chargeSecondTreeForm(tree, selectedRecords, eOpts);
		}
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
		
		       if(selectedRecords[0].get('curId')!== undefined){
			       myStore = vm.getStore('ufStore');
			       myUrl = './webapi/uniteformationcursus/cursus/'.concat(record.get('curId'));	
			       myStore.load({
			    	   url : myUrl,
			    	   callback : function(){
			    		   var myPeriodeStore = vm.getStore('periodeStore');
					       myUrl = './webapi/periode/cursus/'.concat(record.get('curId'));	
					       myPeriodeStore.load({
					    	   url : myUrl,
					    	   callback : function(){  
					    		   myPeriodeStore.sort(
					    		   {
					    		       property : 'perDebut',
					    		       direction: 'ASC'
					    		   });
					    		   if(switchview.getChildEls())
						    	   {
							    	   switchview.removeAll();
						    	   }
							       switchview.add({xtype : 'cursus-DetailCursusGlobal'});
							       var myCoursStore = vm.getStore('coursByCursus');
							       
							       //function.myFunctions.js
							       addNbJourWindow(myPeriodeStore.getData().items,myCoursStore.getData().items);
							      
					    	   }
					       }); 
			    	   }
			       });				
			      				
		       }else {
		    	   vm.getStore('ufStore').removeAll();
		    	   vm.getStore('periodeStore').removeAll();
		    	   //suppression ancienne vue
		    	   if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       switchview.add({xtype : 'cursus-DetailCursusGlobal'});
			       
		       }
		       
		       
				//Ordonnancement
				var storeOrdo = this.getViewModel().getStore('coursByCursus');
				var myUrl = './webapi/courscursus/cursus/'.concat(record.get('curId')).concat('/root');
				storeOrdo.load({url : myUrl});
							
				
				break;
		
			case 'ExtJsMVC.model.cursus.UniteFormationCursusModel' :
			
			
			if(selectedRecords[0].get('ufcId')!== undefined){
			       myStore = vm.getStore('moduleStore');
			       myUrl = './webapi/modulecursus/uniteformation/'.concat(record.get('ufcId'));	
			       
			       myStore.load({
			    	   url : myUrl,
			    	   callback : function(){
			    		   if(switchview.getChildEls())
				    	   {
					    	   switchview.removeAll();
				    	   }
					    //Ajout de la vue correspondante  
					    switchview.add({xtype : 'cursus-DetailUniteFormation'});
					        		   
			    	   }
			       });
			       
			}else {
				// création d'un nouvel uf
	    	   vm.getStore('moduleStore').removeAll();
	    	// suppression de l'ancienne vue
	    	   if(switchview.getChildEls())
	    	   {
		    	   switchview.removeAll();
	    	   }
		    //Ajout de la vue correspondante  
	    	   switchview.add({xtype : 'cursus-DetailUniteFormation'});
		    }
			
	
		    
		    
			break;
			
			case 'ExtJsMVC.model.cursus.ModuleCursusModel' :
			       
			       if(selectedRecords[0].get('mocId')!== undefined){
				       myStore = vm.getStore('coursByCursus');
				       myUrl = './webapi/courscursus/module/'.concat(record.get('mocId'));	
				       myStore.load({
				    	   url : myUrl,
				    	   callback : function(){

						       if(switchview.getChildEls())
					    	   {
						    	   switchview.removeAll();
					    	   }
						       switchview.add({xtype : 'cursus-DetailModule'});
						 
				    	   }
				       });
			       }else {
			    	   vm.getStore('coursByCursus').removeAll();
			    	   

				       if(switchview.getChildEls())
			    	   {
				    	   switchview.removeAll();
			    	   }
				       switchview.add({xtype : 'cursus-DetailModule'});
				 
			       }
			       
			      
			       break;
			  case 'ExtJsMVC.model.cursus.CoursCursusModel' :

			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       
			       if(selectedRecords[0].get('cocId')!== undefined){
				       myStore = vm.getStore('savoirStore');
				       var myStoreEnt = vm.getStore('enseignementStore');
				       myUrl = './webapi/savoir/courscursus/'.concat(record.get('cocId'));	
				       myStore.load({
				    	   url : myUrl,
				    	   callback :function(){
				    		   
						       myUrl = './webapi/enseignement/courscursus/'.concat(record.get('cocId'));	
						       myStoreEnt.load({
						    	   url : myUrl,
						    	   callback :function(){
						    		   
								       switchview.add({xtype : 'cursus-DetailCours'});
								       var detailBottomView = Ext.ComponentQuery.query('#detailBottomView')[0];
								       
									     //Preparation du panel pour les elements "enfants"
								       
								       var savoirModel = vm.getStore('savoirStore').getModel();
									   var enseignementModel = vm.getStore('enseignementStore').getModel();
									   var detailView = Ext.ComponentQuery.query('form')[0];
									   var gridSavoir = Ext.create('Ext.grid.Panel', {
									    	   frame : true,
												itemId : 'savoirCoursGrid',
								                id : 'savoirCoursGrid',
								                title: 'Glisser des savoirs dans cet zone',
								                hideHeaders : true,
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
												autoScroll : true,
												height : 140,
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
													                 var arrayCoursCursuses = record.get('coursCursuses');
													                 if(arrayCoursCursuses == null) { arrayCoursCursuses = new Array() }
					
													                 //Ajout du cours a la liste des cours du savoir
													                 
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
							    											
							    											var myStore = vm.getStore('savoirStore');
							    										       myUrl = './webapi/savoir/courscursus/'.concat(coursCursus.cocId);	
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
												itemId : 'enseignementCoursGrid',
								                id : 'enseignementCoursGrid',
								                title: 'Glisser des enseignements dans cet zone',
								                bind:{
								                	store:'{enseignementStore}',
								    			},
								    			hideHeaders : true,
								    			width : '50%',
								    			autoScroll : true,
												height : 140,
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
							    											var myStore = vm.getStore('enseignementStore');
							    										       myUrl = './webapi/enseignement/courscursus/'.concat(coursCursus.cocId);	
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
			       else{
			    	   switchview.add({xtype : 'cursus-DetailCours'});
				    }
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
		    				myUrl = './webapi/courscursus/'.concat(record.get('cocId'));	
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
		    				myUrl = './webapi/modulecursus/'.concat(record.get('mocId'));	
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
		    				myUrl = './webapi/uniteformationcursus/'.concat(record.get('ufcId'));	
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