Ext.define('ExtJsMVC.view.referentiel.detailCompetencePro.DetailCompetenceProViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailCompetenceProViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	onAddSavoirClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentRefTree');
		//création d'un objet "competence pro id" à partir de l'id de la competence pro selectionnée
		parent = {comId : itemSelected.get('comId')};
		//création d'un nouveau savoir avec insertion de la competence pro pour garder l'arborescence
		newChild = Ext.create('ExtJsMVC.model.referentiel.Savoir');
		newChild.set ('competencePro', parent);
		newChild.parentNode = itemSelected;							
		myStore = vm.getStore('savoirStore');
		
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var refTree = Ext.ComponentQuery.query('arbre-Referentiel')[0];
		refTree.getSelectionModel().select(record);

	},
	onSaveCompetenceProClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentRefTree');
		var me = this;	
		var myStore = vm.getStore('compProStore');
				
				if(itemSelected.get('comId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre ref
					myUrl = './webapi/competencepro/'.concat(itemSelected.get('comId'));	
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
		console.log('myStore');
		console.log(myStore);
		var compPro = myStore.data.items[0];
		console.log('compPro');
		console.log(compPro);
		compPro.set('text', itemSelected.get('text'));
		
		if(vm !== undefined){
			myStore.sync({
				success : function(){
					var tree =  Ext.ComponentQuery.query('arbre-Referentiel')[0];
					tree.getSelectionModel().select(compPro);
					
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
							tree.expandPath(compPro.parentNode.getPath());
					    },
					    failure : function(batch){
			    			var message = batch.operations[0].error.response.responseText;
			    			Ext.Msg.alert('Erreur', message);
			    		}
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