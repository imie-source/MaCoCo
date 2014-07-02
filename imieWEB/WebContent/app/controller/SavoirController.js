Ext.define('ExtJsMVC.controller.SavoirController',
{
	extend: 'Ext.app.Controller',
	
	models : 
	[
		'SavoirModel', 'ATModel', 'RefModel'
	],
	
	views : 
	[
		'savoir.RefArbre'
	],
	

	stores : 
	[
		'SavoirStore'
	],
	
	
	init: function()
	{
		this.control(
		{
			'viewport > panel': {
				render : this.toLog
			},
			
			'savoir-Tree' : {
				itemclick : this.showClick
			}
		});
	},
	
	toLog: function() 
	{
		console.log('Affichage Panel');
	},
	
	showClick : function(grid, record)
	{
		console.log('Click sur ' + record.get('text') +  '  classe : ' + record.$className);
		console.log(record);
		//modifier pour agir sur le store
		//record.set('name', 'savoirModif');
		//var stockage = this.getSavoirStoreStore();
		//stockage.insert(0, record);
	}
	
});