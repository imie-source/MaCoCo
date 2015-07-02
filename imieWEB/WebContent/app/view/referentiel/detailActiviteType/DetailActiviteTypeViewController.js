Ext.define('ExtJsMVC.view.referentiel.detailActiviteType.DetailActiviteTypeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailActiviteTypeViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	onAddCompetenceProClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentRefTree');
		
		//création d'un objet "activite type id" à partir de l'id de l'activite type selectionnée
		parent = {actId : itemSelected.get('actId')};
		//création d'une nouvelle competence pro avec insertion de l'activite pour garder l'arborescence
		newChild = Ext.create('ExtJsMVC.model.referentiel.CompetencePro');
		newChild.set ('activiteType', parent);
		newChild.parentNode = itemSelected;				
		myStore = vm.getStore('compProStore');
		
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var refTree = Ext.ComponentQuery.query('arbre-Referentiel')[0];
		refTree.getSelectionModel().select(record);

	},
	onSaveActiviteTypeClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentRefTree');
		var me = this;	
		var myStore = vm.getStore('actTypeStore');
				
				if(itemSelected.get('actId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre ref
					myUrl = './webapi/activitetype/'.concat(itemSelected.get('actId'));	
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
		var actType = myStore.data.items[0];
		actType.set('text', itemSelected.get('text'));
		
		if(vm !== undefined){
			myStore.sync({
				success : function(){
					var tree =  Ext.ComponentQuery.query('arbre-Referentiel')[0];
					tree.getSelectionModel().select(actType);
					
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
							tree.expandPath(actType.parentNode.getPath());
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