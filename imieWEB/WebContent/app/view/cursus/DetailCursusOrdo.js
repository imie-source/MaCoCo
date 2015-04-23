Ext.define('ExtJsMVC.view.cursus.DetailCursusOrdo', {
	extend : 'Ext.tree.Panel',
	xtype  : 'cursus-Arbre-Ordo',
	title : 'Cours du cursus',
	store: 'CoursByCursus',
	rootVisible: false,
	
	//TODO: Fix permettant le collapse/expand apres un setRoot
	animate: false,
	
    viewConfig: 
    {
        plugins: 
        {
            ptype: 'treeviewdragdrop',
        }
    },
});



