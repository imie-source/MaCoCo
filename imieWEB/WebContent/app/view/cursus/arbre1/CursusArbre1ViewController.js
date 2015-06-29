Ext.define('ExtJsMVC.view.cursus.arbre1.CursusArbre1ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CursusArbre1ViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({

			'cursus-Arbre' : 
			{
				beforeitemclick : this.itemClick,
				selectionchange : this.chargeSecondArbre
			},
		});
		
	},
	
	itemClick : function( tree, record, item, index, e, eOpts ){
		var vm = this.getViewModel();
		var selectedItem = vm.get('currentCursus');
		if (selectedItem===record){
			console.log('selectedItem===record');	
			var selectedRecords = new Array();
			selectedRecords.push(record);
			this.chargeSecondArbre(tree, selectedRecords, eOpts);
		}
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
			var refTree = Ext.ComponentQuery.query('#refTree')[0];
			if(refTree.getChildEls())
	    	   {
				refTree.removeAll();
	    	   }
			refTree.add({xtype : 'arbre-Referentiel'});
			
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
			

		else if (modelName === 'ExtJsMVC.model.promotion.FirstTreePromotionModel' && record.get('text') !== undefined){
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
});