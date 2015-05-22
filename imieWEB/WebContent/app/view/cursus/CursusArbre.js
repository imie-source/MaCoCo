/*
Ext.define('ExtJsMVC.view.cursus.CursusArbre', 
{
	extend : 'Ext.tree.Panel',
	xtype  : 'cursus-Arbre',
	title : 'liste des cursus',
	store: 'CursusStore',
	rootVisible: false
});
*/

Ext.define('ExtJsMVC.view.cursus.CursusArbre', 
		{
			extend : 'Ext.tree.Panel',
			xtype  : 'cursus-Arbre',
			title : 'liste des cursus',
			bind :{
				store: '{cursuses}'
			},
			rootVisible: false,
			reference:'cursusesTree'
		});
