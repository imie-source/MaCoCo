Ext.define('ExtJsMVC.view.referentiel.grilleEnfant.RefChildrenGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.RefChildrenGridViewController',

	
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
		var storeReferentiels = vm.getStore('rootReferentiels');
		var refModel = vm.getStore('referentiels').getModel();
		var currentFirstCursusTree = vm.get('currentCursus');
		
		var arboRef = refModel.load(currentFirstCursusTree.get('refId'),{	
		    scope: this,
		    success: function(recordRef, operation) 
		    {
		    	console.log('success referentiel');
		    	console.log(recordRef);
				storeReferentiels.setRoot(
				{
					text: 'new ref root',
					expanded: true,
					children: recordRef.data
				});	
		    },
		    failure: function(recordRef, operation) 
		    {
		    	console.log('failure referentiel');
		    	console.log(recordRef);
		    },
		});
		
	}
	
});