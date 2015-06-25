Ext.define('ExtJsMVC.view.promotion.grilleEnfant.PromoChildrenGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.PromoChildrenGridViewController',

	
	onRemove : function(view, row, col, action, ev, record){
		var myStore = view.getStore();
		var parentNode = record.parentNode;
		console.log('record');
		console.log(record);

		myStore.remove(record);
		myStore.sync();
		
		var vm = this.getViewModel();
		var storePromotion = vm.getStore('rootPromotion');
		var promoModel = vm.getStore('promotionStore').getModel();
		var currentFirstCursusTree = vm.get('currentCursus');
		
		var arboPromo = promoModel.load(currentFirstCursusTree.get('proId'),{	
		    scope: this,
		    success: function(recordPromo, operation) 
		    {
		    	console.log('success referentiel');
		    	console.log(recordPromo);
				storePromotion.setRoot(
				{
					text: 'new promo root',
					expanded: true,
					children: recordPromo.data
				});	
		    },
		    failure: function(recordPromo, operation) 
		    {
		    	console.log('failure promotion');
		    	console.log(recordPromo);
		    },
		});
		
	}
	
});