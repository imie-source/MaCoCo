Ext.define('ExtJsMVC.controller.ReferentielController',
{
	extend: 'Ext.app.Controller',

	models : 
		[	'referentiel.RootReferentiel',
		 	'referentiel.Referentiel',
		 	'referentiel.ActiviteType',
		 	'referentiel.CompetencePro',
		 	'referentiel.Savoir'
		],
	
	views : 
	[
		'referentiel.ArbreReferentiel',
		'referentiel.DetailReferentiel',
		'referentiel.DetailActiviteType',
		'referentiel.DetailCompetencePro',
		'referentiel.DetailSavoir'
	],
	
	
	refs :
	[
		{ref : 'switchView', selector: 'viewport #switchView'},
	],
	

	stores : 
	[
		'Referentiel'
	],
	
	
	init: function()
	{
		
		this.control(
		{
			'viewport > panel': 
			{
				render : this.toLog
			},
			
			'arbre-Referentiel' : 
			{
			//	itemclick : this.showClick
			}
		});
	},
	
	toLog: function() 
	{
		console.log('Affichage Panel');
	},
	
	showClick : function(grid, record)
	{
		console.log('Click sur ' + record.get('text') +  '  classe : ' + record.entityName);
		console.log(record);
		
		
		var referentielModel = this.getReferentielReferentielModel();
		var activiteTypeModel = this.getReferentielActiviteTypeModel();
		var competenceProModel = this.getReferentielCompetenceProModel();
		var savoirModel = this.getReferentielSavoirModel();
		
		
		var switchview = this.getSwitchView();
		
		var modelName = record.entityName;
		switch(modelName)
		{
		
			case 'ExtJsMVC.model.referentiel.Referentiel' :
				
			       console.log('Affichage Referentiel');
			       
			       //Nettoyage de la vue centrale
			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       //Ajout de la vue correspondante
			       switchview.add({xtype : 'referentiel-DetailReferentiel'});
			       
			       //Chargement des données correspondantes
					var detailView = Ext.ComponentQuery.query('form')[0];
					referentielModel.load(record.get('refId'),
					{
					  scope: this,
					  callback: function(record, operation) 
					  {
						  //Chargement du referentiel sans toute son arborescence
						  //record.data.children = undefined;
						  //record.data.activiteTypes = undefined;
						  detailView.loadRecord(record);
					  }
					});
					//Preparation du panel pour les elements "enfants"
					var panelEnfants = Ext.create('Ext.panel.Panel', {
					    title: 'Activités Types de ce Référentiel',
	                    autoDestroy : true,
					    bodyPadding: 10,
					    
					    tpl : new Ext.XTemplate
					    (
				    		'<tpl for=".">',
									'<div class="activiteType-row" id="activiteType-{actId}">',
										'Activité type : {actLibelle}',
									'</div>',
							'</tpl>'
						),
					    
					    listeners:
					    {
					    	afterrender:function()
					        {
					    		var renderSelector = Ext.query('div.activiteType-row'); 
				                for(var i in renderSelector)
				                {
				                	var renderRow = renderSelector[i];
				                	
				                	new Ext.Button(
				                	{
				                		cls : 'SeleniumActiviteTypeSuppButton',
				                		//id: 'SeleniumCPSuppButton'+i,
				    					text:' X ',
				    					renderTo: renderRow,
				    				    handler: function(bouton) 
				    				    {
				    				    	var childrenRowId = bouton.renderTo.id;
				    				    	var sliceIndex = childrenRowId.indexOf('-');
				    				    	childrenRowId = childrenRowId.slice(sliceIndex+1,childrenRowId.length);
				    				    	
				    				    	//suppression de l'element
				    				    	activiteTypeModel.load(childrenRowId,
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
					panelEnfants.setData(record.get('activiteTypes'));
					//Ajout du panel
					switchview.add(panelEnfants);
				
				break;
				
			case 'ExtJsMVC.model.referentiel.ActiviteType' :
				
			       console.log('Affichage Activite Type');
			       
			       //Nettoyage de la vue centrale
			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       //Ajout de la vue correspondante
			       switchview.add({xtype : 'referentiel-DetailActiviteType'});
			       
			       //Chargement des données correspondantes
					var detailView = Ext.ComponentQuery.query('form')[0];
					
				   //Chargement de l'Activite Type et de son Referentiel associé dans le formulaire
				   var recordSimple = record;
				       
					activiteTypeModel.load(record.get('actId'),
					{
					  scope: this,
					  callback: function(record, operation) 
					  {
						  recordSimple.data.referentiel = record.data.referentiel;
					  }
					});

					detailView.loadRecord(recordSimple);					
					
					//Preparation du panel pour les elements "enfants"
					var panelEnfants = Ext.create('Ext.panel.Panel', {
					    title: 'Competences Pros de cette Activite Type',
	                    autoDestroy : true,
					    bodyPadding: 10,
					    
					    tpl : new Ext.XTemplate
					    (
				    		'<tpl for=".">',
									'<div class="competencePro-row" id="competencePro-{comId}">',
										'Competence Pro : {comLibelle}',
									'</div>',
							'</tpl>'
						),
					    
					    listeners:
					    {
					    	afterrender:function()
					        {
					    		var renderSelector = Ext.query('div.competencePro-row'); 
				                for(var i in renderSelector)
				                {
				                	var renderRow = renderSelector[i];
				                	
				                	new Ext.Button(
				                	{
				                		cls : 'SeleniumModuleSuppButton',
				                		//id: 'SeleniumCPSuppButton'+i,
				    					text:' X ',
				    					renderTo: renderRow,
				    				    handler: function(bouton) 
				    				    {
				    				    	var childrenRowId = bouton.renderTo.id;
				    				    	var sliceIndex = childrenRowId.indexOf('-');
				    				    	childrenRowId = childrenRowId.slice(sliceIndex+1,childrenRowId.length);
				    				    	
				    				    	//suppression de l'element
				    				    	competenceProModel.load(childrenRowId,
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
					panelEnfants.setData(record.get('competencePros'));
					//Ajout du panel
					switchview.add(panelEnfants);
					
					
					
				
				break;
				
			case 'ExtJsMVC.model.referentiel.CompetencePro' :
				
			       console.log('Affichage Competence Pro');
			       
			       //Nettoyage de la vue centrale
			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       //Ajout de la vue correspondante
			       switchview.add({xtype : 'referentiel-DetailCompetencePro'});
			       
			       //Chargement des données correspondantes
					var detailView = Ext.ComponentQuery.query('form')[0];

					

				   //Chargement de la CompetencePro et de son ActiviteType associé dans le formulaire
				   var recordSimple = record;
				       
					competenceProModel.load(record.get('comId'),
					{
					  scope: this,
					  callback: function(record, operation) 
					  {
						  recordSimple.data.activiteType = record.data.activiteType;
					  }
					});

					detailView.loadRecord(recordSimple);
					
					

					
					//Preparation du panel pour les elements "enfants"
					var panelEnfants = Ext.create('Ext.panel.Panel', {
					    title: 'Savoirs de cette competence Pro',
	                    autoDestroy : true,
					    bodyPadding: 10,
					    
					    tpl : new Ext.XTemplate
					    (
				    		'<tpl for=".">',
									'<div class="savoir-row" id="savoir-{savId}">',
										'Savoir : {savLibelle}',
									'</div>',
							'</tpl>'
						),
					    
					    listeners:
					    {
					    	afterrender:function()
					        {
					    		var renderSelector = Ext.query('div.savoir-row'); 
				                for(var i in renderSelector)
				                {
				                	var renderRow = renderSelector[i];
				                	
				                	new Ext.Button(
				                	{
				                		cls : 'SeleniumModuleSuppButton',
				                		//id: 'SeleniumSavoirSuppButton'+i,
				    					text:' X ',
				    					renderTo: renderRow,
				    				    handler: function(bouton) 
				    				    {
				    				    	var childrenRowId = bouton.renderTo.id;
				    				    	var sliceIndex = childrenRowId.indexOf('-');
				    				    	childrenRowId = childrenRowId.slice(sliceIndex+1,childrenRowId.length);
				    				    	
				    				    	//suppression de l'element
				    				    	savoirModel.load(childrenRowId,
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
					panelEnfants.setData(record.get('savoirs'));
					//Ajout du panel
					switchview.add(panelEnfants);	
				
				
				break;
				
			case 'ExtJsMVC.model.referentiel.Savoir' :
				
			       console.log('Affichage Savoir');
			       
			       //Nettoyage de la vue centrale
			       if(switchview.getChildEls())
		    	   {
			    	   switchview.removeAll();
		    	   }
			       //Ajout de la vue correspondante
			       switchview.add({xtype : 'referentiel-DetailSavoir'});
			       
			       //Chargement des données correspondantes
					var detailView = Ext.ComponentQuery.query('form')[0];

				   //Chargement du Savoir et de sa CompetencePro associée dans le formulaire
				   var recordSimple = record;
				       
					savoirModel.load(record.get('savId'),
					{
					  scope: this,
					  callback: function(record, operation) 
					  {
						  recordSimple.data.competencePro = record.data.competencePro;
					  }
					});

					detailView.loadRecord(recordSimple);

				
				break;
		
				
			default : 
				console.log('Ne correspond pas');
		}
	
	
	
		
	}
	
});