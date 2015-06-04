
Ext.define('ExtJsMVC.view.cursus.CursusArbre', 
		{
			extend : 'Ext.tree.Panel',
			xtype  : 'cursus-Arbre',
			title : 'liste des cursus',
			bind :{
				//store: '{cursuses}'
				store: '{firstTreeStore}'
			},
			rootVisible: false,
			reference:'cursusesTree'
		});
