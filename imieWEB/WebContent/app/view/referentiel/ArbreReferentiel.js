Ext.define('ExtJsMVC.view.referentiel.ArbreReferentiel', 
{
	extend : 'Ext.tree.Panel',
	xtype  : 'arbre-Referentiel',
	title : 'Referentiel',
	store: 'Referentiel',
	rootVisible: false,
	
	//TODO: Fix permettant le collapse/expand apres un setRoot
	animate: false,
	
    viewConfig: 
    {
		plugins: 
		{
			ptype: 'treeviewdragdrop',
			dragGroup: 'groupCoursSavoir'
		}
    },
    
    listeners: 
    {
        viewready: function(tree) 
        {
            var treeView = tree.getView(),
                dd = treeView.findPlugin('treeviewdragdrop');
            
            dd.dragZone.onBeforeDrag = function (data, e) 
            {
                var rec = treeView.getRecord(e.getTarget(treeView.itemSelector));
                return rec.isLeaf();
            };
        }
   }
});