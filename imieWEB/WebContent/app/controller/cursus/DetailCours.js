Ext.define('ExtJsMVC.controller.cursus.DetailCours',
{
	extend: 'Ext.app.Controller',

	
	views : 
	[
		'cursus.DetailCours'
	],
	

	stores : 
	[
		'CursusStore'
	],
	
	
	init: function()
	{
		this.control(
		{
            'cursus-DetailCours > button#SaveRecord' : 
            {
             //   click : this.onSaveButtonClick
            }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		var detailView = bouton.up('cursus-DetailCours');
		
		detailView.getRecord().data.cocIntitule = detailView.getComponent('detailCoursNom').getValue();
		
		//suppression branche modulesCursus.coursCursuses SLO risque de merge jpa destructif
		detailView.getRecord().data.moduleCursus.coursCursuses= undefined;
		
		detailView.updateRecord();
		
		detailView.getRecord().save();
		
		
		//Partie refresh static tree
		var recordCours = detailView.getRecord();
		var coursId = recordCours.get('cocId');  
		
		var store = this.getUniteFormationStoreStore();
		var coursFound = store.getRoot().findChild('cocId', coursId, true);
		
		refreshStaticTree(store, 'curId');
		
		var arbre2 = this.getArbre2();
		
		console.log(coursFound.getPath());
//		arbre2.expandPath('root/2001/ufcId2002');
		arbre2.expandPath(coursFound.getPath());
	}
	
});