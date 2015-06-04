Ext.define('ExtJsMVC.view.cursus.CursusViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cursusViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({

			
			'cursusViewGrid dataview' : 
			{
				drop : this.dragdrop,
			
			},
			'cursus-Arbre' : 
			{
				//itemclick : this.chargeSecondArbre,
				selectionchange : this.chargeSecondArbre
			},
			
			'cursus-Arbre2' : 
			{
				selectionchange :this.chargeSecondTreeForm,
				itemcontextmenu : this.onSecondTreeContextMenu,
			},
			'arbre-Referentiel' : 
			{
				//selectionchange :this.chargeRefTreeForm,
				itemclick : this.chargeRefTreeForm,
				itemcontextmenu : this.onRefTreeContextMenu,
			},
			
            

		});
		
	},


	onAddButtonClick : function()
	{
		var myStore;
		var parent;
		var newChild;

		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondTreeItem');
    	var modelName = itemSelected.entityName;
		switch(modelName) 
		{	
			case 'ExtJsMVC.model.cursus.ModuleCursusModel' :
				//création d'un objet "module id" à partir de l'id du module selectionné
				parent = {mocId : itemSelected.get('mocId')};
				//création d'un nouveau cours avec insertion du module pour garder l'arborescence
				newChild = Ext.create('ExtJsMVC.model.cursus.CoursCursusModel');
				newChild.set ('moduleCursus', parent);
							
				myStore = vm.getStore('coursByCursus');
			break;
		
			case 'ExtJsMVC.model.cursus.UniteFormationCursusModel' :
				//création d'un objet "unite de formation id" à partir de l'id de l'unite de formation selectionnée
				parent = {ufcId : itemSelected.get('ufcId')};
				//création d'un nouveau module avec insertion de l'unite de formation pour garder l'arborescence
				newChild = Ext.create('ExtJsMVC.model.cursus.ModuleCursusModel');
				newChild.set ('uniteFormationCursus', parent);
							
				myStore = vm.getStore('moduleStore');
			break;
			
			case 'ExtJsMVC.model.cursus.CursusModel' :
				//création d'un objet "cursus id" à partir de l'id du cursus selectionné
				parent = {curId : itemSelected.get('curId')};
				//création d'une nouvelle unite de formation avec insertion du cursus pour garder l'arborescence
				newChild = Ext.create('ExtJsMVC.model.cursus.UniteFormationCursusModel');
				newChild.set ('cursus', parent);
							
				myStore = vm.getStore('ufStore');
			break;
			
			default:
				console.log('Ne correspond pas');
		} 
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var secondTree = Ext.ComponentQuery.query('cursus-Arbre2')[0];
    	secondTree.getSelectionModel().select(record);

	},onAddButtonClick : function()
	{
		var myStore;
		var parent;
		var newChild;

		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondTreeItem');
    	var modelName = itemSelected.entityName;
		switch(modelName) 
		{	
			case 'ExtJsMVC.model.cursus.ModuleCursusModel' :
				//création d'un objet "module id" à partir de l'id du module selectionné
				parent = {mocId : itemSelected.get('mocId')};
				//création d'un nouveau cours avec insertion du module pour garder l'arborescence
				newChild = Ext.create('ExtJsMVC.model.cursus.CoursCursusModel');
				newChild.set ('moduleCursus', parent);
							
				myStore = vm.getStore('coursByCursus');
			break;
		
			case 'ExtJsMVC.model.cursus.UniteFormationCursusModel' :
				//création d'un objet "unite de formation id" à partir de l'id de l'unite de formation selectionnée
				parent = {ufcId : itemSelected.get('ufcId')};
				//création d'un nouveau module avec insertion de l'unite de formation pour garder l'arborescence
				newChild = Ext.create('ExtJsMVC.model.cursus.ModuleCursusModel');
				newChild.set ('uniteFormationCursus', parent);
							
				myStore = vm.getStore('moduleStore');
			break;
			
			case 'ExtJsMVC.model.cursus.CursusModel' :
				//création d'un objet "cursus id" à partir de l'id du cursus selectionné
				parent = {curId : itemSelected.get('curId')};
				//création d'une nouvelle unite de formation avec insertion du cursus pour garder l'arborescence
				newChild = Ext.create('ExtJsMVC.model.cursus.UniteFormationCursusModel');
				newChild.set ('cursus', parent);
							
				myStore = vm.getStore('ufStore');
			break;
			
			default:
				console.log('Ne correspond pas');
		} 
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var secondTree = Ext.ComponentQuery.query('cursus-Arbre2')[0];
    	secondTree.getSelectionModel().select(record);

	},
	onAddRefButtonClick : function()
	{
		var myStore;
		var parent;
		var newChild;
		var switchview = Ext.ComponentQuery.query('#switchView')[0];
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentRefTree');
    	var modelName = itemSelected.entityName;
		switch(modelName) 
		{	
			case 'ExtJsMVC.model.referentiel.CompetencePro' :
				//création d'un objet "competence pro id" à partir de l'id de la competence pro selectionnée
				parent = {comId : itemSelected.get('comId')};
				//création d'un nouveau savoir avec insertion de la competence pro pour garder l'arborescence
				newChild = Ext.create('ExtJsMVC.model.referentiel.Savoir');
				newChild.set ('competencePro', parent);
							
				myStore = vm.getStore('savoirStore');
				
				switchview.removeAll();
		    	//Ajout de la vue correspondante
			    switchview.add({xtype : 'referentiel-DetailSavoir'});
			break;
		
			case 'ExtJsMVC.model.referentiel.ActiviteType' :
				//création d'un objet "activite type id" à partir de l'id de l'activite type selectionnée
				parent = {actId : itemSelected.get('actId')};
				//création d'une nouvelle competence pro avec insertion de l'activite pour garder l'arborescence
				newChild = Ext.create('ExtJsMVC.model.referentiel.CompetencePro');
				newChild.set ('activiteType', parent);
							
				myStore = vm.getStore('compProStore');
				
				switchview.removeAll();
		    	//Ajout de la vue correspondante
			    switchview.add({xtype : 'referentiel-DetailCompetencePro'});
			break;
			
			case 'ExtJsMVC.model.referentiel.Referentiel' :
				//création d'un objet "referentiel id" à partir de l'id du referentiel selectionné
				parent = {refId : itemSelected.get('refId')};
				//création d'une nouvelle activite type avec insertion du referentiel pour garder l'arborescence
				newChild = Ext.create('ExtJsMVC.model.referentiel.ActiviteType');
				newChild.set ('referentiel', parent);
							
				myStore = vm.getStore('actTypeStore');
			
				switchview.removeAll();
		    	//Ajout de la vue correspondante
			    switchview.add({xtype : 'referentiel-DetailActiviteType'});
			break;
			
			default:
				console.log('Ne correspond pas');
		} 
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var refTree = Ext.ComponentQuery.query('arbre-Referentiel')[0];
    	refTree.getSelectionModel().select(record);

	},
	
	onSaveButtonClick : function()
	{
		var myStore;
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondTreeItem');
		var modelName = itemSelected.entityName;
		var me = this;
		switch(modelName) 
		{	
			case 'ExtJsMVC.model.cursus.CoursCursusModel' :
				myStore = vm.getStore('coursByCursus');
					if(itemSelected.get('cocId')!== undefined){
						 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
						myUrl = '/imieWEB/webapi/courscursus/'.concat(itemSelected.get('cocId'));	
						myStore.load({
							url : myUrl,
							callback : function(records){
								me.syncCoursStore(myStore, itemSelected);
							}
						});
					} else{			
						me.syncCoursStore(myStore,itemSelected);
					}
		

			break;			
 
			case 'ExtJsMVC.model.cursus.ModuleCursusModel' :
				myStore = vm.getStore('moduleStore');
				if(itemSelected.get('mocId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
					myUrl = '/imieWEB/webapi/modulecursus/'.concat(itemSelected.get('mocId'));	
					myStore.load({
						url : myUrl,
						callback : function(records){
							me.syncModuleStore(myStore, itemSelected);
						}
					});
				}
				else{
					me.syncModuleStore(myStore, itemSelected);
				}
				
			break;
		
			case 'ExtJsMVC.model.cursus.UniteFormationCursusModel' :
				myStore = vm.getStore('ufStore');
				
				if(itemSelected.get('ufcId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
					myUrl = '/imieWEB/webapi/uniteformationcursus/'.concat(itemSelected.get('ufcId'));	
					myStore.load({
						url : myUrl,
						callback : function(records){
							me.syncUfStore(myStore, itemSelected);
						}
					});	
				}	
				else{
					me.syncUfStore(myStore, itemSelected);
				}
				
			break;
			
			case 'ExtJsMVC.model.cursus.CursusModel' :

			break;
			
			default:
				console.log('Ne correspond pas');
		} 
		
		
		
	},
	
	syncUfStore : function(myStore, itemSelected){
		var me = this;
		var uf = myStore.data.items[0];
		uf.set('text', itemSelected.get('text'));
		uf.set('ufcObjectifs', itemSelected.get('ufcObjectifs'));
		
		myStore.sync(
				{
					callback : function(){
					/*	var secondTree = Ext.ComponentQuery.query('cursus-Arbre2')[0];
						console.log('refresh tree');
						me.getViewModel().getStore('rootCursuses').load({
							url : '/imieWEB/webapi/cursus/2001',
							callback : function(){
								var secondTree = Ext.ComponentQuery.query('#secondTree')[0];
								if(secondTree.getChildEls())
						    	   {
									secondTree.removeAll();
						    	   }
								secondTree.add({xtype : 'cursus-Arbre2'});
							
							}
							});
						*/	
									
					}
				});
	},
	syncModuleStore : function(myStore, itemSelected){
		var module = myStore.data.items[0];
		module.set('text', itemSelected.get('text'));
		//newModule.set('mocModalite', itemSelected.get('mocModalite'));
		module.set('mocObjectifs', itemSelected.get('mocObjectifs'));
		
		myStore.sync();
	},
	syncCoursStore : function(myStore, itemSelected){
		var cours = myStore.data.items[0];
		cours.set('text', itemSelected.get('text'));
		cours.set('cocDuree', itemSelected.get('cocDuree'));
		cours.set('cocType', itemSelected.get('cocType'));
		cours.set('cocObjectifs', itemSelected.get('cocObjectifs'));
		cours.set('cocEvaluation', itemSelected.get('cocEvaluation'));
		cours.set('cocCommentaires', itemSelected.get('cocCommentaires'));
		
		myStore.sync();		
	},
	
	onSaveRefButtonClick : function()
	{
		var myStore;
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentRefTree');
		var modelName = itemSelected.entityName;
		var me = this;
		switch(modelName) 
		{	
			case 'ExtJsMVC.model.referentiel.Savoir' :
				myStore = vm.getStore('savoirStore');
					if(itemSelected.get('savId')!== undefined){
						 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
						myUrl = '/imieWEB/webapi/savoir/'.concat(itemSelected.get('savId'));	
						myStore.load({
							url : myUrl,
							callback : function(records){
								me.syncSavoirStore(myStore, itemSelected);
								
							}
						});
					} else{		
						me.syncSavoirStore(myStore,itemSelected);
					}
		

			break;			
 
			case 'ExtJsMVC.model.referentiel.CompetencePro' :
				myStore = vm.getStore('compProStore');
				if(itemSelected.get('comId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
					myUrl = '/imieWEB/webapi/competencepro/'.concat(itemSelected.get('comId'));	
					myStore.load({
						url : myUrl,
						callback : function(records){
							me.syncSavoirStore(myStore, itemSelected);
						}
					});
				}
				else{
					me.syncSavoirStore(myStore, itemSelected);
				}
				
			break;
		
			case 'ExtJsMVC.model.referentiel.ActiviteType' :
				myStore = vm.getStore('actTypeStore');
				
				if(itemSelected.get('actId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
					myUrl = '/imieWEB/webapi/activitetype/'.concat(itemSelected.get('actId'));	
					myStore.load({
						url : myUrl,
						callback : function(records){
							me.syncSavoirStore(myStore, itemSelected);
						}
					});	
				}	
				else{
					me.syncSavoirStore(myStore, itemSelected);
				}
				
			break;
			
			case 'ExtJsMVC.model.referentiel.Referentiel' :

			break;
			
			default:
				console.log('Ne correspond pas');
		} 
		
	},
	syncSavoirStore : function(myStore, itemSelected){
		var item = myStore.data.items[0];
		item.set('text', itemSelected.get('text'));
		myStore.sync();
	},
	
	dragdrop : function(node,data,overModel,dropPosition,eOpts){
		
		var coursStore = this.getViewModel().getStore('coursByCursus');
		
		coursStore.each(function(element, index, array){
				element.set('cocOrdre',index+1);	
		});
		
		coursStore.sync(); 
		
	},
	
	
	chargeSecondArbre : function(grid, selectedRecords, eOpts)
	{
		var record = selectedRecords[0];
		var vm = this.getViewModel();
		var modelName = record.entityName;
		
		if(modelName === ('ExtJsMVC.model.promotion.CursusPromotionModel') || (modelName === 'ExtJsMVC.model.cursus.CursusModel')){
			//Chargement arbre cursus
			var secondTree = Ext.ComponentQuery.query('#secondTree')[0];
			if(secondTree.getChildEls())
	    	   {
				secondTree.removeAll();
	    	   }
			secondTree.add({xtype : 'cursus-Arbre2'});
			
			var storeUniteFormations = vm.getStore('rootCursuses');
			var cursusModel = vm.getStore('cursuses').getModel();
			
			var arboCursus = cursusModel.load(record.get('curId'),{	
			    scope: this,
			    success: function(recordCur, operation) 
			    {
			    	console.log('success : recordCur');
			    	console.log(recordCur);
					storeUniteFormations.setRoot(
					{
						text: 'new cur root',
						expanded: true,
						children: recordCur
					});	
					
					var secondTree = Ext.ComponentQuery.query('cursus-Arbre2')[0];
					var firstChild = secondTree.getRootNode().firstChild;
					secondTree.getSelectionModel().select(firstChild);
			    },
			});
			
			//Chargement arbre référentiel
			var storeReferentiels = vm.getStore('rootReferentiels');
			var refModel = vm.getStore('referentiels').getModel();
			
			var arboRef = refModel.load(record.get('refId'),{	
			    scope: this,
			    success: function(recordRef, operation) 
			    {
			    	console.log('success referentiel');
			    	console.log(recordRef);
					storeReferentiels.setRoot(
					{
						text: 'new ref root',
						expanded: true,
						children: recordRef.data
					});	
			    },
			    failure: function(recordRef, operation) 
			    {
			    	console.log('failure referentiel');
			    	console.log(recordRef);
			    },
			});
		}	
			

		else if (modelName === 'ExtJsMVC.model.promotion.FirstTreePromotionModel'){
			//Chargement arbre promotion
			var secondTree = Ext.ComponentQuery.query('#secondTree')[0];
			if(secondTree.getChildEls())
	    	   {
				secondTree.removeAll();
	    	   }
			secondTree.add({xtype : 'promo-Arbre2'});
			
			var storeUniteFormations = vm.getStore('rootPromotion');
			var cursusModel = vm.getStore('promotionStore').getModel();
			var arboPromo = cursusModel.load(record.get('proId'),{	
			    scope: this,
			    success: function(recordPromo, operation) 
			    {
			    	console.log('success : recordPromo');
			    	console.log(recordPromo);
					storeUniteFormations.setRoot(
					{
						text: 'new promo root',
						expanded: true,
						children: recordPromo
					});						

					promoSecondTree = Ext.ComponentQuery.query('promo-Arbre2')[0];
					var firstChild = promoSecondTree.getRootNode().firstChild;
					promoSecondTree.getSelectionModel().select(firstChild);
				      
			    },
			});
			
			
		}				
		else{
			console.log('Ne correspond pas');
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
			       switchview.add(panelTemplate);
			       
			       
			       break;	
			        
			
			
			default:
				console.log('Ne correspond pas');
			} 
	},
	

	//chargeRefTreeForm : function(grid, selectedRecords, eOpts)
	chargeRefTreeForm : function(grid, record)
	{
		//var record = selectedRecords[0];
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
		       
		       //Nettoyage de la vue centrale
		       if(switchview.getChildEls())
	    	   {
		    	   switchview.removeAll();
	    	   }
		       //Ajout de la vue correspondante
		       switchview.add({xtype : 'referentiel-DetailReferentiel'});
		       
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
			    				    	var activiteTypeModel = vm.getStore('actTypeStore').getModel();
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
			    				    	var competenceProModel = vm.getStore('compProStore').getModel();
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
			    				    	var savoirModel = vm.getStore('savoirStore').getModel();
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
		     				myUrl = '/imieWEB/webapi/savoir/'.concat(record.get('savId'));	
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
			
			case 'ExtJsMVC.model.referentiel.CompetencePro' :
				menu = new Ext.menu.Menu({	
		    		items:[ 
		    		{
		    			text : 'supprimer la compétence pro',
		    			handler:function(){
		    				myStore = vm.getStore('compProStore');
		    				myUrl = '/imieWEB/webapi/competencepro/'.concat(record.get('comId'));	
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
		    				myUrl = '/imieWEB/webapi/activitetype/'.concat(record.get('actId'));	
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

 