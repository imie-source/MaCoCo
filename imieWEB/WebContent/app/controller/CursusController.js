Ext.define('ExtJsMVC.controller.CursusController',
{
	extend: 'Ext.app.Controller',
	
	models : 
	[
		'cursus.CursusModel',
		'cursus.UniteFormationCursusModel',
		'cursus.ModuleCursusModel',
		'cursus.CoursCursusModel'
	],
	
	views : 
	[
		'cursus.CursusArbre',
		'cursus.CursusArbre2',
	],
	
	refs :
	[
	 	{ref : 'switchView', selector: 'viewport #switchView'},
	 	{ref : 'arbre2', selector: 'cursus-Arbre2'},
	],

	stores : 
	[
		'CursusStore',
		'UniteFormationStore',
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
			}
		});
	},
	
	
	

	chargeSecondArbre : function(grid, record)
	{
		
		
		var cursusModel = this.getCursusCursusModelModel();
		
		var arbre2 = this.getArbre2();
		
		var storeUniteFormations = arbre2.getStore();
		
		
		
		
		
		var cursusTree = cursusModel.load(record.get('curId'),
		{
		  success: function(record, operation) 
		  {
		      storeUniteFormations.removeAll();
		      storeUniteFormations.loadData(record.data.children);
		  }
		});
		
		
		
		//Ajout formulaire cursus
		//TODO separer le chargement formulaire
		var modelName = record.entityName;
		var switchview = this.getSwitchView();
		
		switch(modelName) 
		{
		    case 'ExtJsMVC.model.cursus.CursusModel' :
		    
		       console.log('Affichage Cursus');
		       
		       if(switchview.getChildEls())
	    	   {
		    	   switchview.removeAll();
	    	   }
		       switchview.add({xtype : 'cursus-DetailCursus'});
		       
		       var detailView = Ext.ComponentQuery.query('form')[0];
		       detailView.loadRecord(record);
		       
		       
				
				//Preparation du panel pour les elements "enfants"
				var panelTemplate = Ext.create('Ext.panel.Panel', {
				    title: 'Unite Formation du Cursus',
				    bodyPadding: 10,
				    
				    tpl : new Ext.XTemplate
				    (
			    		'<tpl for=".">',
								'<div class="uniteformation-row" id="uniteformation-{cocId}">',
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
			    							  console.log(record);
			    							  record.erase();
			    						  }
			    				    	});
			    				    }
			    				});
			                } 
				        }
				    }
				});
				
				
				console.log('cursusTree');
				console.log(cursusTree.data.children);
				
				
				//Ajout des elements "enfants" au panel
//				panelTemplate.setData(record.get('uniteFormationCursuses'));
				//Ajout du panel
				switchview.add(panelTemplate);
		       
		       
		       
		        break;
		        
		    default:
		        console.log('Ne correspond pas');
		} 
	},
	
	
	
	
	//Chargement des formulaires associés aux éléments
	chargeFormulaire : function(grid, record)
	{
		
    	var moduleCursusModel = this.getCursusModuleCursusModelModel();
		var coursCursusModel = this.getCursusCoursCursusModelModel();
		
		var modelName = record.entityName;
		var switchview = this.getSwitchView();
		var arbre2 = this.getArbre2();
		var storeUniteFormations = arbre2.getStore();
	    
		
		//Clic sur une unité de formation
		switch(modelName) 
		{
	    
		    case 'ExtJsMVC.model.cursus.UniteFormationCursusModel' :
		    
		       console.log('Affichage Unite formation');
		       
		       //Nettoyage de la vue centrale
		       if(switchview)
	    	   {
		    	   switchview.removeAll();
	    	   }
		       //Ajout de la vue correspondante
		       switchview.add({xtype : 'cursus-DetailUniteFormation'});
		       
		       //Recuperation du formulaire
		       var detailView = Ext.ComponentQuery.query('form')[0];
		
		        //Chargement de l'unité de formation dans le formulaire
				var uniteFormationModel = this.getCursusUniteFormationCursusModelModel();
				uniteFormationModel.load(record.get('ufcId'),
				{
				  scope: this,
				  callback: function(record, operation) 
				  {
					  detailView.loadRecord(record);
				  }
				});

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
			    					text:' X ',
			    					renderTo: renderRow,
			    				    handler: function(bouton) 
			    				    {
			    				    	var moduleRowId = bouton.renderTo.id;
			    				    	var sliceIndex = moduleRowId.indexOf('-');
			    				    	moduleRowId = moduleRowId.slice(sliceIndex+1,moduleRowId.length);
			    				    	console.log(moduleRowId);
			    				    	
			    				    	//suppression de l'element
			    				    	moduleCursusModel.load(moduleRowId,
			    				    	{
			    						  scope: this,
			    						  callback: function(record, operation) 
			    						  {
			    							  record.set('children', null);
			    							  console.log(record);
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
				panelTemplateTest.setData(record.get('moduleCursuses'));
				//Ajout du panel
				switchview.add(panelTemplateTest);
				
		       
		        break;
		        
		        
		        
		        
		        
		        
		    case 'ExtJsMVC.model.cursus.ModuleCursusModel' :
		    
		       console.log('Affichage Module');
		       
		       if(switchview)
	    	   {
		    	   switchview.removeAll();
	    	   }
		       switchview.add({xtype : 'cursus-DetailModule'});
		       
		       var detailView = Ext.ComponentQuery.query('form')[0];
		       
		       
		        //Chargement du module dans le formulaire
				var moduleCursusModel = this.getCursusModuleCursusModelModel();
				moduleCursusModel.load(record.get('mocId'),
				{
				  scope: this,
				  callback: function(record, operation) 
				  {
					  detailView.loadRecord(record);
				  }
				});

				
				//Preparation du panel pour les elements "enfants"
				var panelTemplate = Ext.create('Ext.panel.Panel', {
				    title: 'Cours du module',
				    bodyPadding: 10,
				    
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
			    							  console.log(record);
			    							  record.erase();
//					    				      arbre2.getView().getSelectedNodes()[0].collapse();
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
		       
		       if(switchview)
	    	   {
		    	   switchview.removeAll();
	    	   }
		       switchview.add({xtype : 'cursus-DetailCours'});
		       
		       var detailView = Ext.ComponentQuery.query('form')[0];
		       detailView.loadRecord(record);
		       
		       
		       break;	
		       
		    default:
		        console.log('Ne correspond pas');
		} 
	}
});