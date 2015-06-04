Ext.define('ExtJsMVC.view.promotion.DetailUfPromoViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailUfPromoViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	onAddModulePromoClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondPromoTreeItem');
    	var modelName = itemSelected.entityName;
		
			
		//création d'un objet "promo id" à partir de l'id de la promotion selectionnée
    	var parent = {ufpId : itemSelected.get('ufpId')};
		//création d'une nouvelle unite de formation avec insertion de la promotion pour garder l'arborescence
    	var newChild = Ext.create('ExtJsMVC.model.promotion.ModulePromotionModel');
		newChild.set ('uniteFormationPromotion', parent);
							
		var myStore = vm.getStore('modulePromoStore');
			
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var secondTree = Ext.ComponentQuery.query('promo-Arbre2')[0];
		console.log(secondTree);
    	secondTree.getSelectionModel().select(record);

	},
	onSaveUfPromoClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondPromoTreeItem');
		var me = this;	
		var myStore = vm.getStore('ufPromoStore');
				
				if(itemSelected.get('ufpId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
					myUrl = '/imieWEB/webapi/uniteformationpromotion/'.concat(itemSelected.get('ufpId'));	
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
	},
	syncUfStore : function(myStore, itemSelected){
		var me = this;
		var uf = myStore.data.items[0];
		uf.set('text', itemSelected.get('text'));
		uf.set('ufpObjectifs', itemSelected.get('ufpObjectifs'));
		myStore.sync();
	},
	
});