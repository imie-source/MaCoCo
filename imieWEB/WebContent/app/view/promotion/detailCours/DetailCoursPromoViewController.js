Ext.define('ExtJsMVC.view.promotion.detailCours.DetailCoursPromoViewController', {
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
							me.syncCoursStore(myStore, itemSelected, vm);
						}
					});	
				}	
				else{
					me.syncCoursStore(myStore, itemSelected, vm);
					}
	},
	syncCoursStore : function(myStore, itemSelected, vm){
		var me = this;
		var cours = myStore.data.items[0];
		cours.set('text', itemSelected.get('text'));
		cours.set('copDuree', itemSelected.get('copDuree'));
		// Set de l'ordre à 1000 en cas de durée = 0 (prérequis)
		if(itemSelected.get('copDuree')==='0'){
			cours.set('copOrdre', 1000); 
		}
		cours.set('copType', itemSelected.get('copType'));
		cours.set('copObjectifs', itemSelected.get('copObjectifs'));
		cours.set('copEvaluation', itemSelected.get('copEvaluation'));
		cours.set('copCommentaires', itemSelected.get('copCommentaires'));
		console.log(cours);
		myStore.sync({
			callback : function(){
				var tree =  Ext.ComponentQuery.query('promo-Arbre2')[0];
				tree.getSelectionModel().select(cours);
				
				var promoId = vm.get('currentCursus').get('proId');
				var storeUniteFormations = vm.getStore('rootPromotion');
				var promoModel = vm.getStore('promotionStore').getModel();
				var arboPromo = promoModel.load(promoId,{	
				    scope: this,
				    success: function(recordPromo, operation) 
				    {
				    	console.log('success : recordPromo');
				    	console.log(recordPromo);
						storeUniteFormations.setRoot(
						{
							text: 'new promo root',
							expanded: true,
							children: recordPromo
						});				
						tree.expandPath(cours.parentNode.getPath());
				    },
				});
			}
		});
		
	},
	
});