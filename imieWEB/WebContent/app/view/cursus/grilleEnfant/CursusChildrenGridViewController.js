Ext.define('ExtJsMVC.view.cursus.grilleEnfant.CursusChildrenGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CursusChildrenGridViewController',

	
	onRemove : function(view, row, col, action, ev, record){
		var myStore = view.getStore();
		var parentNode = record.parentNode;
		console.log('record');
		console.log(record);

		myStore.remove(record);
		myStore.sync();
		
		var vm = this.getViewModel();
		var storeCursus = vm.getStore('rootCursuses');
		var cursusModel = vm.getStore('Cursuses').getModel();
		var currentFirstCursusTree = vm.get('currentCursus');
		
		var arboCursus = cursusModel.load(currentFirstCursusTree.get('curId'),{	
		    scope: this,
		    success: function(recordCursus, operation) 
		    {
		    	console.log('success Cursus');
		    	console.log(recordCursus);
				storeCursus.setRoot(
				{
					text: 'new Cursus root',
					expanded: true,
					children: recordCursus.data
				});	
		    },
		    failure: function(recordCursus, operation) 
		    {
		    	console.log('failure Cursus');
		    	console.log(recordCursus);
		    },
		});
		
	}
	
});