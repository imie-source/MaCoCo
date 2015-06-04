Ext.define('ExtJsMVC.view.cursus.DetailCursusGlobal', {
    extend : 'Ext.tab.Panel',
    xtype  : 'cursus-DetailCursusGlobal',
    store: 'CursusStore',
    requires : [
  		      'ExtJsMVC.view.cursus.DetailCursusGlobalViewController', 
  	],
  	controller : 'DetailCursusGlobalViewController',
// title : 'Detail Cursus Global',
    frame   : true,
// padding : 5,
    bodyPadding : 5,
    activeTab: 0,

    
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
		            text : 'Imprimer',
		            itemId : 'printOrdo',
		            handler : 'onPrintOrdoClick',
		
		        }
		    ]
		}
    ]
});