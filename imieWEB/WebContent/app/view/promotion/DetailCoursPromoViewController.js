Ext.define('ExtJsMVC.view.promotion.DetailCoursPromoViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailCoursPromoViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},

	onSaveCoursPromoClick : function()
	{
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondPromoTreeItem'); 
		var me = this;	
		var myStore = vm.getStore('coursByPromotion');
				
				if(itemSelected.get('copId')!== undefined){
				 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
					myUrl = '/imieWEB/webapi/courspromotion/'.concat(itemSelected.get('copId'));	
					myStore.load({
						url : myUrl,
						callback : function(records){
							me.syncModuleStore(myStore, itemSelected);
						}
					});	
				}	
				else{
					me.syncCoursStore(myStore, itemSelected);
				}
	},
	syncCoursStore : function(myStore, itemSelected){
		var me = this;
		var cours = myStore.data.items[0];
		cours.set('text', itemSelected.get('text'));
		cours.set('copDuree', itemSelected.get('copDuree'));
		cours.set('copType', itemSelected.get('copType'));
		cours.set('copObjectifs', itemSelected.get('copObjectifs'));
		cours.set('copEvaluation', itemSelected.get('copEvaluation'));
		cours.set('copCommentaires', itemSelected.get('copCommentaires'));
		myStore.sync();
	},
	
});