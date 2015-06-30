Ext.define('ExtJsMVC.view.cursus.detailPeriode.DetailPeriodeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailPeriodeViewController',
    
    onSavePeriodeClick: function(){
    	var vm = this.getViewModel();
    	var myPeriodeStore = vm.getStore('periodeStore');
    	myPeriodeStore.sync();
    	var switchview = Ext.ComponentQuery.query('#switchView')[0];    	
	    switchview.removeAll();
	    switchview.add({xtype : 'cursus-DetailCursusGlobal'});
	    var myCoursStore = vm.getStore('coursByCursus');   
	    //function.myFunctions.js
	    addNbJourWindow(myPeriodeStore.getData().items,myCoursStore.getData().items);
    }
	
	
});