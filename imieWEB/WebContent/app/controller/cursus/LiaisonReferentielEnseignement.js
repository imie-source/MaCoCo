Ext.define('ExtJsMVC.controller.cursus.LiaisonReferentielEnseignement',
{
	extend: 'Ext.app.Controller',

	
	views : 
	[
		'cursus.LiaisonReferentielEnseignement',
//		'cursus.CursusArbre'
	],
	
    refs: 
    [
     	{ref: 'vueArbre2', selector: 'cursus-Arbre2'} 
    ],
	

//	stores : 
//	[
//		'UniteFormationStore'
//	],
	
	
	init: function()
	{
		this.control(
		{
            'cursus-LiaisonReferentielEnseignement > button#SaveRecord' : 
            {
                click : this.onSaveButtonClick
            }
		});
	},
	
	
	onSaveButtonClick : function(bouton)
	{
		
//		var store = this.getUniteFormationStoreStore();
//		var view = this.getCursusCursusArbreView2();
		
		//var node = Ext.fly('cursus-Arbre').getSelectionModel().getSelectedNode();
//		var records = this.getVueArbre().getSelectionModel().getSelection();
		
//		var lastChildIndex = record.lastChild;
		//console.log(records[0]);
//		records[0].insertChild(0,{name:'TEST'});
		
		//console.log(records[0].getData().itemId);
		//console.log()
		//var item = store.getRoot().findChild('itemId',records[0].getData().itemId,true);
//		var item = store.getRoot().findChild('name','TEST',true);
		//item.insertChild(0,{name:'TEST'});
//		console.log(item.getData());

		var selectedRecords = this.getVueArbre2().getSelectionModel().getSelection();
		var selectedRecord = selectedRecords[0];
		selectedRecord.appendChild({name:'TEST'});
	}
	
});