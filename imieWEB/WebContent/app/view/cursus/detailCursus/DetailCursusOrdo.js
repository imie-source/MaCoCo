Ext.define('ExtJsMVC.view.cursus.detailCursus.DetailCursusOrdo', {
	xtype  : 'cursus-Arbre-Ordo',
	extend : 'Ext.panel.Panel',
	
    height : window.innerHeight -100, 
	autoScroll : true,
		layout : 
			{
	 			type  : 'hbox',
	 			//align : 'stretch'
			},
		items : 
			[
				{
					xtype : 'cursusViewGrid',
		 			flex  : 5,
					
				},
				{
					xtype : 'weekGrid',
					flex  : 1,
					
				},
		
			],
			
});