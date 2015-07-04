Ext.define('ExtJsMVC.view.promotion.detailPromotion.DetailNewPromoViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailNewPromoViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},
	
	onSavePromoClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentCursus');
		if(itemSelected === undefined){
			itemSelected = vm.get('currentSecondPromoTreeItem');
		}
		var myStore = vm.getStore('firstTreePromoStore');		
		var promo = myStore.data.items[0];
		promo.set('text', itemSelected.get('text'));
		myStore.sync({
			success : function(){
				var myUrl = './webapi/cursus/'.concat(promo.get('cursus').curId);
				vm.getStore('firstTreeStore').load({
					url : myUrl,
					success : function(){
					
						var tree =  Ext.ComponentQuery.query('cursus-Arbre')[0];
						tree.getSelectionModel().select(promo);
				
						tree.expandPath(promo.parentNode.getPath());
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
		
	},
	
	
});