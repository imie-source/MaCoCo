Ext.define('ExtJsMVC.view.promotion.DetailPromoViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailPromoViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	onAddUfPromoClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondPromoTreeItem');
    	var modelName = itemSelected.entityName;
		
			
		//création d'un objet "promo id" à partir de l'id de la promotion selectionnée
    	var parent = {proId : itemSelected.get('proId')};
		//création d'une nouvelle unite de formation avec insertion de la promotion pour garder l'arborescence
    	var newChild = Ext.create('ExtJsMVC.model.promotion.UniteFormationPromotionModel');
		newChild.set ('promotion', parent);
							
		var myStore = vm.getStore('ufPromoStore');
			
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var secondTree = Ext.ComponentQuery.query('promo-Arbre2')[0];
		console.log(secondTree);
    	secondTree.getSelectionModel().select(record);

	},
	
	
});