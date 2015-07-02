Ext.define('ExtJsMVC.view.cursus.detailCursus.DetailCursusGlobal', {
    extend : 'Ext.tab.Panel',
    xtype  : 'cursus-DetailCursusGlobal',
    store: 'CursusStore',
    requires : [
  		      'ExtJsMVC.view.cursus.detailCursus.DetailCursusGlobalViewController', 
  	],
  	controller : 'DetailCursusGlobalViewController',
    frame   : true,
    bodyPadding : 5,
    activeTab: 0,
    height : (Ext.getBody().getViewSize().height-10),
    
    items : 
    [
		{
			itemId: 'detailCursus',
			title: 'Detail Cursus',
			items :
			[
			 	{xtype : 'cursus-DetailCursus'}
			]
		},
		
		{
			itemId: 'ordoCursus',
		    title: 'Ordonnancement',
		    items :
		    [
		     	{xtype : 'cursus-Arbre-Ordo'},
		        {
		        	id : 'seleniumDetailCursusOrdoPrint',
		            xtype : 'button',
		            text : 'Imprimer ruban pédagogique',
		            itemId : 'printOrdo',
		            handler : 'onPrintOrdoClick',
		
		        }
		    ]
		}
    ]
});