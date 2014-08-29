Ext.define('ExtJsMVC.view.cursus.DetailCursusGlobal', {
    extend : 'Ext.tab.Panel',
    xtype  : 'cursus-DetailCursusGlobal',
    store: 'CursusStore',
//    title   : 'Detail Cursus Global',
    frame   : true,
//    padding : 5,
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
		     	{xtype : 'cursus-Arbre-Ordo'}
		    ]
		}
    ]
});