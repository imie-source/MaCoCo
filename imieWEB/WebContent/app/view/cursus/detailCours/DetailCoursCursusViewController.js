Ext.define('ExtJsMVC.view.cursus.detailCours.DetailCoursCursusViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DetailCoursCursusViewController',
    init: function()
	{
		//this.draggedItem;
    	
		this.control
		({
			
			
		});
		
	},

	onSaveCoursCursusClick : function()
	{
		
		var vm = this.getViewModel();
		var itemSelected =vm.get('currentSecondTreeItem'); 
		var me = this;	
		var myStore = vm.getStore('coursByCursus');
				
		if(itemSelected.get('cocId')!== undefined){
			 // on charge dans le store l'item correspondant à l'item selectionné dans l'arbre 2
			myUrl = '/imieWEB/webapi/courscursus/'.concat(itemSelected.get('cocId'));	
			myStore.load({
				url : myUrl,
				callback : function(records){
					me.syncCoursStore(myStore, itemSelected);
				}
			});
		} else{			
			me.syncCoursStore(myStore,itemSelected,vm);
		}		
		
	},
	syncCoursStore : function(myStore, itemSelected, vm){
		var me = this;
		var cours = myStore.data.items[0];
		cours.set('text', itemSelected.get('text'));
		cours.set('cocDuree', itemSelected.get('cocDuree'));
		// Set de l'ordre à 1000 en cas de durée = 0 (prérequis)
		if(itemSelected.get('cocDuree')==='0'){
			cours.set('cocOrdre', 1000); 
		}
		cours.set('cocType', itemSelected.get('cocType'));
		cours.set('cocObjectifs', itemSelected.get('cocObjectifs'));
		cours.set('cocEvaluation', itemSelected.get('cocEvaluation'));
		cours.set('cocCommentaires', itemSelected.get('cocCommentaires'));
		console.log(cours);
		myStore.sync({
			callback : function(){
				var tree =  Ext.ComponentQuery.query('cursus-Arbre2')[0];
				tree.getSelectionModel().select(cours);
				
				var promoId = vm.get('currentCursus').get('curId');
				var storeUniteFormations = vm.getStore('rootCursuses');
				var cursusModel = vm.getStore('cursuses').getModel();
				var arboCursus = cursusModel.load(promoId,{	
				    scope: this,
				    success: function(recordCursus, operation) 
				    {
				    	console.log('success : recordCursus');
				    	console.log(recordCursus);
						storeUniteFormations.setRoot(
						{
							text: 'new cursus root',
							expanded: true,
							children: recordCursus
						});				
						tree.expandPath(cours.parentNode.getPath());
				    },
				});
			}
		});
		
	},
	
});