Ext.define('ExtJsMVC.view.referentiel.detailReferentiel.DetailReferentielViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailReferentielViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	onAddActiviteTypeClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentRefTree');
		
		//création d'un objet "referentiel id" à partir de l'id du referentiel selectionné
		parent = {refId : itemSelected.get('refId')};
		//création d'une nouvelle activite type avec insertion du referentiel pour garder l'arborescence
		newChild = Ext.create('ExtJsMVC.model.referentiel.ActiviteType');
		newChild.set ('referentiel', parent);
		newChild.parentNode = itemSelected;				
		myStore = vm.getStore('actTypeStore');
		
		// insertion de l'item dans le store;
    	var record = myStore.insert(0,newChild)[0];
		
    	// selection de l'item en cours de création
		var refTree = Ext.ComponentQuery.query('arbre-Referentiel')[0];
		refTree.getSelectionModel().select(record);
		
		console.log('myStoreAfter');
		console.log(myStore);
		console.log('record');
		console.log(record);

	},
	
	
	
});