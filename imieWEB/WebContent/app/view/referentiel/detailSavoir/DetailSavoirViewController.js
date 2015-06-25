Ext.define('ExtJsMVC.view.referentiel.detailSavoir.DetailSavoirViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailSavoirViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	
	onSaveSavoirClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentRefTree');
		var me = this;	
		var myStore = vm.getStore('savoirStore');
				
				if(itemSelected.get('savId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre ref
					myUrl = '/imieWEB/webapi/savoir/'.concat(itemSelected.get('savId'));	
					myStore.load({
						url : myUrl,
						callback : function(records){
							me.syncStore(myStore, itemSelected);
						}
					});	
				}	
				else{
					me.syncStore(myStore, itemSelected,vm);
				}
	},
	syncStore : function(myStore, itemSelected, vm){
		var me = this;
		var savoir = myStore.data.items[0];
		savoir.set('text', itemSelected.get('text'));
		
		if(vm !== undefined){
			myStore.sync({
				callback : function(){
					var tree =  Ext.ComponentQuery.query('arbre-Referentiel')[0];
					tree.getSelectionModel().select(savoir);
					
					var refId = vm.get('currentCursus').get('refId');
					var storeActiviteType = vm.getStore('rootReferentiels');
					var refModel = vm.getStore('referentiels').getModel();
					var arbreRef = refModel.load(refId,{	
					    scope: this,
					    success: function(recordRef, operation) 
					    {
					    	
					    	storeActiviteType.setRoot(
							{
								text: 'new referentiel root',
								expanded: true,
								children: recordRef
							});			
							tree.expandPath(savoir.parentNode.getPath());
					    },
					});
				}
			});	
		} else{
			myStore.sync();
		}
	},
	
});