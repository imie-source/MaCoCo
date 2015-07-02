Ext.define('ExtJsMVC.view.cursus.detailModule.DetailModuleCursusViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailModuleCursusViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
		});
		
	},
	onAddCoursCursusClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondTreeItem');
		//création d'un objet "module id" à partir de l'id du module selectionné
		var parent = {mocId : itemSelected.get('mocId')}
		//création d'un nouveau cours avec insertion du module pour garder l'arborescence
		var newChild = Ext.create('ExtJsMVC.model.cursus.CoursCursusModel');
		newChild.set ('moduleCursus', parent);
		newChild.parentNode = itemSelected;			
		myStore = vm.getStore('coursByCursus');
		
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var secondTree = Ext.ComponentQuery.query('cursus-Arbre2')[0];
		console.log(secondTree);
    	secondTree.getSelectionModel().select(record);

	},
	onSaveModuleCursusClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondTreeItem');
		var me = this;	
		var myStore = vm.getStore('moduleStore');
				
				if(itemSelected.get('mocId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
					myUrl = './webapi/modulecursus/'.concat(itemSelected.get('mocId'));	
					myStore.load({
						url : myUrl,
						callback : function(records){
							me.syncModuleStore(myStore, itemSelected);
						}
					});	
				}	
				else{
					me.syncModuleStore(myStore, itemSelected,vm);
				}
	},
	syncModuleStore : function(myStore, itemSelected, vm){
		var me = this;
		var module = myStore.data.items[0];
		console.log('module');
		console.log(module);
		module.set('text', itemSelected.get('text'));
		module.set('mocObjectifs', itemSelected.get('mocObjectifs'));
		if(vm !== undefined){
			myStore.sync({
				success : function(){
					var tree =  Ext.ComponentQuery.query('cursus-Arbre2')[0];
					tree.getSelectionModel().select(module);
					
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
							tree.expandPath(module.parentNode.getPath());
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