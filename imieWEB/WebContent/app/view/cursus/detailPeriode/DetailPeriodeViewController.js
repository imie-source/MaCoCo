Ext.define('ExtJsMVC.view.cursus.detailPeriode.DetailPeriodeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailPeriodeViewController',
    
    onSavePeriodeClick: function(){
    	var switchview = Ext.ComponentQuery.query('#switchView')[0];    	
	    switchview.removeAll();
	    switchview.add({xtype : 'cursus-DetailCursusGlobal'});
    }
	
	
});