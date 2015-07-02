Ext.define('ExtJsMVC.view.cursus.detailUf.DetailUfCursusViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailUfCursusViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	onAddModuleCursusClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondTreeItem');
		//création d'un objet "uf id" à partir de l'id du uf selectionné
		var parent = {ufcId : itemSelected.get('ufcId')}
		//création d'un nouveau module avec insertion du uf pour garder l'arborescence
		var newChild = Ext.create('ExtJsMVC.model.cursus.ModuleCursusModel');
		newChild.set ('uniteFormationCursus', parent);
		newChild.parentNode = itemSelected;			
		myStore = vm.getStore('moduleStore');
		
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var secondTree = Ext.ComponentQuery.query('cursus-Arbre2')[0];
    	secondTree.getSelectionModel().select(record);

	},
	onSaveUfCursusClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondTreeItem');
		var me = this;	
		var myStore = vm.getStore('ufStore');
				
				if(itemSelected.get('ufcId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
					myUrl = './webapi/uniteformationcursus/'.concat(itemSelected.get('ufcId'));	
					myStore.load({
						url : myUrl,
						callback : function(records){
							me.syncUfStore(myStore, itemSelected);
						}
					});	
				}	
				else{
					me.syncUfStore(myStore, itemSelected,vm);
				}
	},
	syncUfStore : function(myStore, itemSelected, vm){
		var me = this;
		var uf = myStore.data.items[0];
		uf.set('text', itemSelected.get('text'));
		uf.set('ufcObjectifs', itemSelected.get('ufcObjectifs'));
		if(vm !== undefined){
			myStore.sync({
				success : function(){
					var tree =  Ext.ComponentQuery.query('cursus-Arbre2')[0];
					tree.getSelectionModel().select(uf);
					
					var promoId = vm.get('currentCursus').get('curId');
					var storeUniteFormations = vm.getStore('rootCursuses');
					var cursusModel = vm.getStore('cursuses').getModel();
					var arbreCursus = cursusModel.load(promoId,{	
					    scope: this,
					    success: function(recordCursus, operation) 
					    {
					    	
							storeUniteFormations.setRoot(
							{
								text: 'new cursus root',
								expanded: true,
								children: recordCursus
							});			
							tree.expandPath(uf.parentNode.getPath());
					    },
					});
				},
				failure : function(batch){
	    			var message = batch.operations[0].error.response.responseText;
	    			Ext.Msg.alert('Erreur', message);
	    		}
			});	
		} else{
			myStore.sync({
				failure : function(batch){
	    			var message = batch.operations[0].error.response.responseText;
	    			Ext.Msg.alert('Erreur', message);
	    		}
			});
		}
	},
	
});