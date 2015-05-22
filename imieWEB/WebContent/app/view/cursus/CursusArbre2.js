/*
Ext.define('ExtJsMVC.view.cursus.CursusArbre2', 
{
	extend : 'Ext.tree.Panel',
	xtype  : 'cursus-Arbre2',
	title : 'Detail',
	store: 'UniteFormationStore',
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
//    
//    listeners: 
//    {
//        viewready: function(tree) 
//        {
//            var treeView = tree.getView(),
//                dd = treeView.findPlugin('treeviewdragdrop');
//            
//            
//            //TODO: Verifier que le drop est fait sur le meme model (overModel)
//            //TODO: Verifier que ce n'est pas un 'append'
//            //TODO: Verifier que même parent
//            
//            treeView.on('beforedrop', function(node, data, overModel, dropPosition, dropHandlers) {
//                // Defer the handling
//                dropHandlers.wait = true;
//                Ext.MessageBox.confirm('Drop', 'Are you sure', function(btn){
//                    if (btn === 'yes') {
//                        dropHandlers.processDrop();
//                        console.log('overModel');
//                        console.log(overModel);
//                        console.log('dropPosition');
//                        console.log(dropPosition);
//                        console.log('data records');
//                        console.log(data.records);                        
//                    } else {
//                        dropHandlers.cancelDrop();
//                    }
//                });
//            });
//            
////            dd.dragZone.onBeforeDrag = function (data, e) 
////            {
////                var rec = treeView.getRecord(e.getTarget(treeView.itemSelector));
////                return rec.isLeaf();
////            };
//            
//            dd.dragZone.afterValidDrop = function(target, e, id)
//            {
//            	//TODO: recuperer record
//            	//TODO: sauvegarder tous les elements de même niveau ('siblings')
//            	console.log('drop');
//            	console.log(e);
//            };
//        }
//   },
});
*/

Ext.define('ExtJsMVC.view.cursus.CursusArbre2', 
		{
			extend : 'Ext.tree.Panel',
			xtype  : 'cursus-Arbre2',
			title : 'Détail',
			bind :{
				store: '{rootCursuses}'
			},
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

