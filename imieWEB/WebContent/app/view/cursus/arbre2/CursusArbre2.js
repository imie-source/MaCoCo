
Ext.define('ExtJsMVC.view.cursus.arbre2.CursusArbre2', 
		{
			extend : 'Ext.tree.Panel',
			xtype  : 'cursus-Arbre2',
			title : 'Détail',
			bind :{
				store: '{rootCursuses}'
			},
			requires : [
			            'ExtJsMVC.view.cursus.arbre2.CursusArbre2ViewController',
			],
			
			controller : 'CursusArbre2ViewController',
			reference:'cursusTree',
			loader : {
			},
			rootVisible: false,
			//TODO: Fix permettant le collapse/expand apres un setRoot
			//animate: false,
		    viewConfig: 
		    {
		        plugins: 
		        {
		            ptype: 'treeviewdragdrop',
		        }
		    },
		});

