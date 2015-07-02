
Ext.define('ExtJsMVC.view.cursus.arbre1.CursusArbre', 
		{
			extend : 'Ext.tree.Panel',
			xtype  : 'cursus-Arbre',
			title : 'liste des promotions',
			bind :{
				store: '{firstTreeStore}'
			},
			rootVisible: false,
			reference:'cursusesTree',
			requires : [
			            'ExtJsMVC.view.cursus.arbre1.CursusArbre1ViewController',
			],
			
			controller : 'CursusArbre1ViewController',
		});
