Ext.define('ExtJsMVC.view.cursus.grilleEnfant.PeriodeGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.PeriodeGridViewController',

	
	onRemove : function(view, row, col, action, ev, record){
		var vm = this.getViewModel();
		var myPeriodeStore = view.getStore();
		myPeriodeStore.remove(record);
		myPeriodeStore.sync({
			callback : function(){
				var myCoursStore = vm.getStore('coursByCursus');
			    //function.myFunctions.js
			    addNbJourWindow(myPeriodeStore.getData().items,myCoursStore.getData().items);
			}
		});
			
	},
	
	onEdit : function(view, row, col, action, ev, record){
		view.setSelection(record);
		var myStore = view.getStore();
		var switchview = Ext.ComponentQuery.query('#switchView')[0];
		switchview.removeAll();
		switchview.add({xtype : 'cursus-DetailPeriode'});
	}
	
});