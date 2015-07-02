Ext.define('ExtJsMVC.view.promotion.detailModule.DetailModulePromoViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailModulePromoViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	onAddCoursPromoClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondPromoTreeItem');
    	var modelName = itemSelected.entityName;
		
			
		//création d'un objet "promo id" à partir de l'id de la promotion selectionnée
    	var parent = {mopId : itemSelected.get('mopId')};
		//création d'une nouvelle unite de formation avec insertion de la promotion pour garder l'arborescence
    	var newChild = Ext.create('ExtJsMVC.model.promotion.CoursPromotionModel');
		newChild.set ('modulePromotion', parent);
		newChild.parentNode = itemSelected;
		
		var myStore = vm.getStore('coursByPromotion');
			
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var secondTree = Ext.ComponentQuery.query('promo-Arbre2')[0];
		console.log(secondTree);
    	secondTree.getSelectionModel().select(record);

	},
	onSaveModulePromoClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondPromoTreeItem');
		var me = this;	
		var myStore = vm.getStore('modulePromoStore');
				
				if(itemSelected.get('mopId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
					myUrl = './webapi/modulepromotion/'.concat(itemSelected.get('mopId'));	
					myStore.load({
						url : myUrl,
						callback : function(records){
							me.syncModuleStore(myStore, itemSelected);
						}
					});	
				}	
				else{
					me.syncModuleStore(myStore, itemSelected,vm);
				}
	},
	syncModuleStore : function(myStore, itemSelected, vm){
		var me = this;
		var module = myStore.data.items[0];
		module.set('text', itemSelected.get('text'));
		module.set('mopObjectifs', itemSelected.get('mopObjectifs'));
		if(vm !== undefined){
			myStore.sync({
				success : function(){
					var tree =  Ext.ComponentQuery.query('promo-Arbre2')[0];
					tree.getSelectionModel().select(module);
					
					var promoId = vm.get('currentCursus').get('proId');
					var storeUniteFormations = vm.getStore('rootPromotion');
					var promoModel = vm.getStore('promotionStore').getModel();
					var arboPromo = promoModel.load(promoId,{	
					    scope: this,
					    success: function(recordPromo, operation) 
					    {
					    	
							storeUniteFormations.setRoot(
							{
								text: 'new promo root',
								expanded: true,
								children: recordPromo
							});		
							
							tree.expandPath(module.parentNode.getPath());
							
					    },
					});
				},
				failure : function(batch){
	    			var message = batch.operations[0].error.response.responseText;
	    			Ext.Msg.alert('Erreur', message);
	    		}
			});	
		} else{
			myStore.sync({
				failure : function(batch){
	    			var message = batch.operations[0].error.response.responseText;
	    			Ext.Msg.alert('Erreur', message);
	    		}
			});
		}
	},
	
});