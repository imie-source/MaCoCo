Ext.define('ExtJsMVC.view.home.AdministrationWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.administrationWindowController',

    onCollapse : function(grid,record,tr,rowIndex){
    	var home = grid.up('view-administrationWindow');
    	console.log(home);
    	home.toggleCollapse();
    },
    
    
    onReject: function (btn,e) {
    	var vm = this.getViewModel();
    	if(btn.up('cursusAdminWindowForm')!==undefined){
    		var cursusSelected = vm.get('currentCursus');
            cursusSelected.reject();
            
            var curNomSelected = cursusSelected.getData().curNom;
            if(curNomSelected===""||curNomSelected===undefined){
            	var store = vm.getStore('cursuses');
            	store.remove(cursusSelected);
            }
            btn.up('cursusAdminWindowForm').hide();
    	}else if(btn.up('refAdminWindowForm')!==undefined){
    		var refSelected = vm.get('currentReferentiel');
    		refSelected.reject();
            
            var refNomSelected = refSelected.getData().refNom;
            if(refNomSelected===""||refNomSelected===undefined){
            	var store = vm.getStore('referentiels');
            	store.remove(refSelected);
            }
            btn.up('refAdminWindowForm').hide();
    	}

    },

    onCommit: function (btn,e) {
    	
    	if(btn.up('cursusAdminWindowForm')!==undefined){
	    	var cususStore =this.getViewModel().getStore('cursuses');
	    	cususStore.sync();
	    	btn.up('cursusAdminWindowForm').hide();
    	}else if(btn.up('refAdminWindowForm')!==undefined){
    		var refStore =this.getViewModel().getStore('referentiels');
	    	refStore.sync();
    		/*var referentiel = this.getViewModel().get('currentReferentiel');
    		referentiel.commit();
    		referentiel.reject();*/
    		btn.up('refAdminWindowForm').hide();
    	}	
    },
    
    onAdd:function(btn,e){
    	if(btn.up('#voletRef')!==undefined){
    		this.addRef();    	
    	} else if (btn.up('#voletCursus')!==undefined){
    		this.addCursus();
    	}
    },

    
    onUpdate:function(btn,e){

    	if(btn.up('#voletRef')!==undefined){
    		this.updateRef();
    		
    	} else if (btn.up('#voletCursus')!=='undefined'){
    		this.updateCursus();	
    	}
    },
    

    
    onRemove: function (btn,e) {        
    	if(btn.up('#voletRef')!==undefined){
    		this.removeRef(); 
        	
    	} else if (btn.up('#voletCursus')!==undefined){
    		 this.removeCursus();
    	}  
    },
    

    onContextMenu : function(grid,record,tr,rowIndex,e,eOpts){
    	e.stopEvent();
    	adminCtrl = this;
    	if(grid.up('#voletRef')!==undefined){
    		var menu = new Ext.menu.Menu({	
        		items:[{
        			text : 'ajouter un référentiel',
        			handler:function(){
        				adminCtrl.addRef();
        	    	},
        		},
        		{
        			text : 'modifier le référentiel',
        			handler:function(){
        				adminCtrl.updateRef();
        	    	},
        		},
        		{
        			text : 'supprimer le référentiel',
        			handler:function(){
        				adminCtrl.removeRef();
        	    	},
        		},
        		]
        	}).showAt(e.getXY());
   	} else if (grid.up('#voletCursus')!==undefined){
   			var menu = new Ext.menu.Menu({
    		items:[{
    			text : 'ajouter un cursus',
    			handler:function(){
    				adminCtrl.addCursus();
    	    	},
    		},
    		{
    			text : 'modifier le cursus',
    			handler:function(){
    				adminCtrl.updateCursus();
    	    	},
    		},
    		{
    			text : 'supprimer le cursus',
    			handler:function(){
    				adminCtrl.removeCursus();
    	    	},
    		},
    		]
    	}).showAt(e.getXY());
   	}
    	
    },
    
    
    
    
    
    /**********************************************************************************************************
     ************************** Private functions *************************************************************
     **********************************************************************************************************/
    
    removeRef : function(){
    	var vm = this.getViewModel();
    	var refSelected = vm.get('currentReferentiel');
        var refNomSelected = refSelected.getData().refNom;
        Ext.Msg.show({
            title:'Supprimer le référentiel',
            message: 'Voulez vous supprimer le référentiel '+ refNomSelected +' ?',
            buttons: Ext.Msg.YESNO,
            buttonText:{
            	yes : 'Oui',
            	non : 'Non',
            },
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                	refSelected.reject();
                    console.log(refSelected.getData());
                    var store = vm.getStore('referentiels');
                    store.remove(refSelected);
                    store.sync();
                }
            }
        });
    },
    removeCursus : function(){
    	var vm = this.getViewModel();
    	var cursusSelected = vm.get('currentCursus');
        var curNomSelected = cursusSelected.getData().curNom;
        Ext.Msg.show({
            title:'Supprimer le cursus',
            message: 'Voulez vous supprimer le cursus '+ curNomSelected +' ?',
            buttons: Ext.Msg.YESNO,
            buttonText:{
            	yes : 'Oui',
            	non : 'Non',
            },
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                	cursusSelected.reject();
                    console.log(cursusSelected.getData());
                    var store = vm.getStore('cursuses');
                    store.remove(cursusSelected);
                    store.sync();
                }
            }
        });
    },
    addCursus : function(){
    	var vm = this.getViewModel();
    	var formView = Ext.ComponentQuery.query('cursusAdminWindowForm')[0];
		formView.setTitle('Ajouter un cursus');
    	formView.show();
    
    	var store = vm.getStore('cursuses');
    	var record = store.insert(0,{})[0];
    	vm.set('currentCursus',record);
    },
    addRef : function(){
    	var vm = this.getViewModel();
    	var formView = Ext.ComponentQuery.query('refAdminWindowForm')[0];
		formView.setTitle('Ajouter un référentiel');
    	formView.show();
    
		var store = vm.getStore('referentiels');
    	var record = store.insert(0,{})[0];
    	vm.set('currentReferentiel',record);
    },
    
    updateCursus : function(){
    	var formView = Ext.ComponentQuery.query('cursusAdminWindowForm')[0];
		formView.setTitle('Modifier le cursus');
		formView.show();
    },
    updateRef : function(){
    	var formView = Ext.ComponentQuery.query('refAdminWindowForm')[0];
		formView.setTitle('Modifier le référentiel');
		formView.show();
    },
});