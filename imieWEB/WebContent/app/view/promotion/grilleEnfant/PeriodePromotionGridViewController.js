Ext.define('ExtJsMVC.view.promotion.grilleEnfant.PeriodePromotionGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.PeriodePromotionGridViewController',

	
	onRemove : function(view, row, col, action, ev, record){
		var myStore = view.getStore();
		myStore.remove(record);
		myStore.sync();
			
	},
	
	onEdit : function(view, row, col, action, ev, record){
		view.setSelection(record);
		var myStore = view.getStore();
		var switchview = Ext.ComponentQuery.query('#switchView')[0];
		switchview.removeAll();
		switchview.add({xtype : 'promotion-DetailPeriode'});
	}
	
});