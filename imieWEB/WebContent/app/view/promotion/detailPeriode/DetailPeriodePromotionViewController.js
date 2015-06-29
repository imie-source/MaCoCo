Ext.define('ExtJsMVC.view.promotion.detailPeriode.DetailPeriodePromotionViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailPeriodePromotionViewController',
    
    onSavePeriodePromotionClick: function(){
    	var vm = this.getViewModel();
    	var myStore = vm.getStore('periodePromotionStore');
    	myStore.sync();
    	var switchview = Ext.ComponentQuery.query('#switchView')[0];    	
	    switchview.removeAll();
	    switchview.add({xtype : 'promo-DetailPromoGlobal'});
    }
	
	
});