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
    	
        
        
        //var formView = this.getView().getChildByElement('cursusAdminWindowForm');
        //formView.hide();
    },

    onCommit: function (btn,e) {
    	
    	if(btn.up('cursusAdminWindowForm')!==undefined){
    		
	    	var currentCursus = this.getViewModel().get('currentCursus');
	    	//console.log(this.getViewModel().getStore('cursuses').getUpdatedRecords());
	    	//currentCursus.commit();
	    	var cususStore =this.getViewModel().getStore('cursuses');
	    	cususStore.sync();
	    	//currentCursus.reject();
	    
	    	
	    	btn.up('cursusAdminWindowForm').hide();
	    
	    	
    	}else if(btn.up('refAdminWindowForm')!==undefined){
    		var refStore =this.getViewModel().getStore('referentiels');
	    	refStore.sync();
    		var referentiel = this.getViewModel().get('currentReferentiel');
    		referentiel.commit();
    		referentiel.reject();
    		btn.up('refAdminWindowForm').hide();
    	}
    	
    },
    
    onAdd:function(btn,e){
    	
    	
    	var vm = this.getViewModel();
    	
    	if(btn.up('#voletRef')!==undefined){
    		
    		var formView = Ext.ComponentQuery.query('refAdminWindowForm')[0];
        	formView.show();
        
    		var store = vm.getStore('referentiels');
        	var record = store.insert(0,{})[0];
        	vm.set('currentReferentiel',record);
        	
    	} else if (btn.up('#voletCursus')!==undefined){
    		var formView = Ext.ComponentQuery.query('cursusAdminWindowForm')[0];
        	formView.show();
        
        	var store = vm.getStore('cursuses');
        	var record = store.insert(0,{})[0];
        	vm.set('currentCursus',record);
        	//var gridView = this.getView().getChildByElement('administrationWindowGrid');
        	//gridView.setSelection(record);
    	}

    },
    
    onUpdate:function(btn,e){

    	if(btn.up('#voletRef')!==undefined){
    		var formView = Ext.ComponentQuery.query('refAdminWindowForm')[0];
        	formView.show();
    		
    	} else if (btn.up('#voletCursus')!=='undefined'){
    		var formView = Ext.ComponentQuery.query('cursusAdminWindowForm')[0];
        	formView.show();
    		
    	}
    	
    },
    

    
    onRemove: function (btn,e) {
        var vm = this.getViewModel();
        
    	if(btn.up('#voletRef')!==undefined){
    		 var refSelected = vm.get('currentReferentiel');
    	        var refNomSelected = refSelected.getData().refNom;
    	        Ext.Msg.show({
    	            title:'Supprimer le référentiel?',
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
        	
    	} else if (btn.up('#voletCursus')!==undefined){
    		 var cursusSelected = vm.get('currentCursus');
    	        var curNomSelected = cursusSelected.getData().curNom;
    	        Ext.Msg.show({
    	            title:'Supprimer le cursus?',
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
    	}
       
        
    },
});