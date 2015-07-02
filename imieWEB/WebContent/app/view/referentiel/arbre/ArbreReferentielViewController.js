Ext.define('ExtJsMVC.view.referentiel.arbre.ArbreReferentielViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ArbreReferentielViewController',
    init: function()
	{
		
    	
		this.control
		({
			'arbre-Referentiel' : 
			{
				selectionchange : this.chargeRefTreeForm,
				beforeitemclick : this.itemClick,
				itemclick : this.chargeSavForm,
				//itemcontextmenu : this.onRefTreeContextMenu,
			},
			
		});
		
	},
	
	itemClick : function( tree, record, item, index, e, eOpts ){
		var vm = this.getViewModel();
		var selectedItem = vm.get('currentRefTree');
		if (selectedItem===record){
			console.log('selectedItem===record');	
			var selectedRecords = new Array();
			selectedRecords.push(record);
			this.chargeRefTreeForm(tree, selectedRecords, eOpts);
		}
	},
	chargeRefTreeForm : function(grid, selectedRecords)
	{
		var record = selectedRecords[0];
		var vm = this.getViewModel();
		var switchview = Ext.ComponentQuery.query('#switchView')[0];
		var myStore;
		//var itemSelectedId;
		var myUrl;
		
		var modelName = record.entityName;
		switch(modelName) 
		{	
		case 'ExtJsMVC.model.referentiel.Referentiel' :
			
		       console.log('Affichage Referentiel');
		       
		      
		       if(selectedRecords[0].get('refId')!== undefined){
			       myStore = vm.getStore('actTypeStore');
			       myUrl = './webapi/activitetype/referentiel/'.concat(record.get('refId'));	
			       myStore.load({
			    	   url : myUrl,
			    	   callback : function(){
			    		   //Nettoyage de la vue centrale
					       if(switchview.getChildEls())
				    	   {
					    	   switchview.removeAll();
				    	   }
					       //Ajout de la vue correspondante
					       switchview.add({xtype : 'referentiel-DetailReferentiel'});
			    	   }
			       });
		       }else {
		    	   vm.getStore('actTypeStore').removeAll();
		    	   //Nettoyage de la vue centrale
			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       //Ajout de la vue correspondante
			       switchview.add({xtype : 'referentiel-DetailReferentiel'});
			    }
			break;
			
		case 'ExtJsMVC.model.referentiel.ActiviteType' :
			
		       console.log('Affichage Activite Type');
		      
		       
		       if(selectedRecords[0].get('actId')!== undefined){
			       myStore = vm.getStore('compProStore');
			       myUrl = './webapi/competencepro/activitetype/'.concat(record.get('actId'));	
			       myStore.load({
			    	   url : myUrl,
			    	   callback : function(){
			    		   //Nettoyage de la vue centrale
					       if(switchview.getChildEls())
				    	   {
					    	   switchview.removeAll();
				    	   }
					       //Ajout de la vue correspondante
					       switchview.add({xtype : 'referentiel-DetailActiviteType'});
			    	   }
			       });		       			
		       }else {
		    	   vm.getStore('compProStore').removeAll();
		    	   //Nettoyage de la vue centrale
			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       //Ajout de la vue correspondante
			       switchview.add({xtype : 'referentiel-DetailActiviteType'});
			    }
			break;
			
		case 'ExtJsMVC.model.referentiel.CompetencePro' :
			
		       console.log('Affichage Competence Pro');
		       
		       

		       if(selectedRecords[0].get('comId')!== undefined){
			       myStore = vm.getStore('savoirStore');
			       myUrl = './webapi/savoir/competencepro/'.concat(record.get('comId'));	
			       myStore.load({
			    	   url : myUrl,
			    	   callback : function(){
			    		 //Nettoyage de la vue centrale
					       if(switchview.getChildEls())
				    	   {
					    	   switchview.removeAll();
				    	   }
					       //Ajout de la vue correspondante
					       switchview.add({xtype : 'referentiel-DetailCompetencePro'});
			    	   }
			       });
		       }else {
		    	   vm.getStore('savoirStore').removeAll();
		    	 //Nettoyage de la vue centrale
			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       //Ajout de la vue correspondante
			       switchview.add({xtype : 'referentiel-DetailCompetencePro'});
			    }
			break;
			
		case 'ExtJsMVC.model.referentiel.Savoir' :
			
		       console.log('Affichage Savoir');
		    
		       if(selectedRecords[0].get('savId')=== undefined){
			       //Nettoyage de la vue centrale
			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       //Ajout de la vue correspondante
			       switchview.add({xtype : 'referentiel-DetailSavoir'});
		       }	
			break;
	
			
			        
			
			
			default:
				console.log('Ne correspond pas');
		} 
	},
	
	
	chargeSavForm : function(grid, selectedRecord)
	{
		
		var switchview = Ext.ComponentQuery.query('#switchView')[0];
	
		
		var modelName = selectedRecord.entityName;
		if(modelName ==='ExtJsMVC.model.referentiel.Savoir') 
		{	

		   console.log('Affichage Savoir');
		    
		   if(selectedRecord.get('savId')!== undefined){
			   //Nettoyage de la vue centrale
		   if(switchview.getChildEls())
		   {
			   switchview.removeAll();
		    }
			  //Ajout de la vue correspondante
			switchview.add({xtype : 'referentiel-DetailSavoir'});
		 }	

		} 
	},
	
	onRefTreeContextMenu : function(tree,record,item,index,e,eOpts){
    	e.stopEvent();
    	
    	var vm = this.getViewModel();
    	var myStore;
    	var me = this;
    	var modelName = record.entityName;
    	var menu;


		switch(modelName) 
		{	
			case 'ExtJsMVC.model.referentiel.Savoir' :
		    	menu = new Ext.menu.Menu({	
		    		items:[ 
		    		{
		    			text : 'supprimer le savoir',
		    			handler:function(){
		    				myStore = vm.getStore('savoirStore');
		     				myUrl = './webapi/savoir/'.concat(record.get('savId'));	
							myStore.load({
								url : myUrl,
								callback : function(){
				    				myStore.removeAll();
				    				myStore.sync({
				    					failure : function(batch){
				    		    			var message = batch.operations[0].error.response.responseText;
				    		    			Ext.Msg.alert('Erreur', message);
				    		    		}
				    				});
								}
							});
		    	    	},
		    		}
		    		]
		    	}).showAt(e.getXY());
			break;
			
			case 'ExtJsMVC.model.referentiel.CompetencePro' :
				menu = new Ext.menu.Menu({	
		    		items:[ 
		    		{
		    			text : 'supprimer la compétence pro',
		    			handler:function(){
		    				myStore = vm.getStore('compProStore');
		    				myUrl = './webapi/competencepro/'.concat(record.get('comId'));	
							myStore.load({
								url : myUrl,
								callback : function(){
				    				myStore.removeAll();
				    				myStore.sync({
				    					failure : function(batch){
				    		    			var message = batch.operations[0].error.response.responseText;
				    		    			Ext.Msg.alert('Erreur', message);
				    		    		}
				    				});
								}
							});
		    	    	},
		    	    	border : '0 0 1 0',
		    	    	style : {
		    	    		borderColor : '#CCCCCC',
		    	    		borderStyle: 'solid'
		    	    	}
		    		},{
		    			text : 'ajouter un savoir',
		    			handler:function(){
		    				me.onAddButtonClick();		    	    	
		    			},	
		    		},
		    		]
		    	}).showAt(e.getXY());
			break;
		
			case 'ExtJsMVC.model.referentiel.ActiviteType' :
				menu = new Ext.menu.Menu({	
		    		items:[ 
		    		{
		    			text : 'supprimer l\'activité type',
		    			handler:function(){
		    				myStore = vm.getStore('actTypeStore');
		    				myUrl = './webapi/activitetype/'.concat(record.get('actId'));	
							myStore.load({
								url : myUrl,
								callback : function(){
				    				myStore.removeAll();
				    				myStore.sync({
				    					failure : function(batch){
				    		    			var message = batch.operations[0].error.response.responseText;
				    		    			Ext.Msg.alert('Erreur', message);
				    		    		}
				    				});
								}
							});
		    				
		    	    	},
		    	    	border : '0 0 1 0',
		    	    	style : {
		    	    		borderColor : '#CCCCCC',
		    	    		borderStyle: 'solid'
		    	    	}
		    		},{
		    			text : 'ajouter une compétence pro',
		    			handler:function(){
		    				me.onAddButtonClick();
		    	    	},	
		    		},
		    		]
		    	}).showAt(e.getXY());
			break;
			
			case 'ExtJsMVC.model.referentiel.Referentiel' :
				menu = new Ext.menu.Menu({	
		    		items:[ 
		    		{
		    			text : 'ajouter une activité type',
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