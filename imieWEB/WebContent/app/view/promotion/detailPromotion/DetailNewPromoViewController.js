Ext.define('ExtJsMVC.view.promotion.detailPromotion.DetailNewPromoViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailNewPromoViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	
	onSavePromoClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentCursus');	
		var myStore = vm.getStore('firstTreePromoStore');		
		var uf = myStore.data.items[0];
		uf.set('text', itemSelected.get('text'));
		myStore.sync();
	},
	
	
});