Ext.define('ExtJsMVC.view.cursus.grilleEnfant.CursusChildrenGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CursusChildrenGridViewController',

	
	onRemove : function(view, row, col, action, ev, record){
		var myStore = view.getStore();
		var parentNode = record.parentNode;
		console.log('record');
		console.log(record);

		myStore.remove(record);
		myStore.sync({
			failure : function(batch){
    			var message = batch.operations[0].error.response.responseText;
    			Ext.Msg.alert('Erreur', message);
    		}
		});
		
		var vm = this.getViewModel();
		console.log('vm');
		console.log(vm);
		var storeCursus = vm.getStore('rootCursuses');
		var cursusModel = vm.getStore('cursuses').getModel();
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