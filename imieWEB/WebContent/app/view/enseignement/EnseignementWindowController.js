Ext.define('ExtJsMVC.view.enseignement.EnseignementWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.enseignementWindowController',

    init: function()
	{


		this.control
		({
			'view-enseignementWindow':{
				beforeexpand : this.onExpand,
			},
			'enseignementWindowGrid':{
				rowdblclick : this.onCollapse,
				rowcontextmenu : this.onContextMenu,
				
			},
			'#textfieldRecToolBar' : {
				keyup : this.onFind,
			}
			
		});
	},
    
	onFind : function(textfield){
		var vm = this.getViewModel();
		var myStore = vm.getStore('enseignementStore');
		var myString = textfield.getValue();
		var nameFilter = new Ext.util.Filter({
		    property : 'entSearch',
		    anyMatch : true,
		    value : myString,
		});
		myStore.addFilter(nameFilter);
	},  
    
	onCollapse : function(grid,record,tr,rowIndex,e){
    	e.stopEvent();
    	var adminWindow = grid.up('view-enseignementWindow');
    	adminWindow.toggleCollapse();
    	
    },
    onExpand : function(panel,e){
    	this.switchFormToGrid();
    	var adminWindow = Ext.ComponentQuery.query('view-administrationWindow')[0];
    	if(adminWindow.getCollapsed()===false){
    		adminWindow.toggleCollapse();  		
    	}
    },
    
    onReject: function (btn,e) {
    	var vm = this.getViewModel(); 	
    	var enseignementSelected = vm.get('currentEnseignement');
    	enseignementSelected.reject();
            
        var entNomSelected = enseignementSelected.getData().entNom;
        if(entNomSelected===""||entNomSelected===undefined){
          	var store = vm.getStore('enseignementStore');
           	store.remove(enseignementSelected);
        }
    	this.switchFormToGrid();
    },

    onCommit: function (btn,e) {
    	var vm = this.getViewModel()
    	
    	var enseignementSelected = vm.get('currentEnseignement');
    	
    	var multiSelector = Ext.ComponentQuery.query('#prerequisMultiselector')[0];
    	
    	console.log(multiSelector);

    	console.log(Ext.getCmp('prerequisMultiselector').getValue());
    	console.log(Ext.getCmp('multiselectorId').getValue());
    	
    	var enseignementStore = vm.getStore('enseignementStore');
    	enseignementStore.sync();  
    	this.switchFormToGrid();
	    
    },

    onAdd:function(btn,e){
    	this.addEnt();    	
    },

    
    onUpdate:function(btn,e){
    	this.updateEnt();	
    },
    
    onRemove: function (btn,e) {        

    	this.removeEnt(); 
    },
    

    onContextMenu : function(grid,record,tr,rowIndex,e,eOpts){
    	e.stopEvent();
    	entCtrl = this;
     	var menu = new Ext.menu.Menu({	
        items:[       
        {
        	text : 'ajouter un enseignement',
        	handler:function(){
        		entCtrl.addEnt();
        },
           	border : '0 0 1 0',
           	style : {
        	borderColor : '#CCCCCC',
        	borderStyle: 'solid'
        	}
        },
        {
        	text : 'modifier l\'enseignement',
        	handler:function(){
        		entCtrl.updateEnt();
           	},
        },
        {
        	text : 'supprimer l\'enseignement',
        	handler:function(){
        		entCtrl.removeEnt();
           	},
        },
        
        ]
        }).showAt(e.getXY());
   		
    },
    
    
    /**********************************************************************************************************
     ************************** Private functions *************************************************************
     **********************************************************************************************************/
    
    removeEnt : function(){
    	var vm = this.getViewModel();
    	var entSelected = vm.get('currentEnseignement');
    	if(entSelected !== null){
    		var entNomSelected = entSelected.getData().entNom;
            Ext.Msg.show({
                title:'Supprimer l\'enseignement',
                message: 'Voulez vous supprimer l\'enseignement '+ entNomSelected +' ?',
                buttons: Ext.Msg.YESNO,
                buttonText:{
                	yes : 'Oui',
                	non : 'Non',
                },
                icon: Ext.Msg.QUESTION,
                fn: function(btn) {
                    if (btn === 'yes') {
                    	entSelected.reject();
                        console.log(entSelected.getData());
                        var store = vm.getStore('enseignementStore');
                        store.remove(entSelected);
                        store.sync();
                    }
                }
            });	
    	}
    },
    
    addEnt : function(){
    	this.switchGridToForm();
    	var vm = this.getViewModel();
    	var formView = Ext.ComponentQuery.query('enseignementWindowForm')[0];
		formView.setTitle('Ajouter un enseignement');
		    
		var store = vm.getStore('enseignementStore');
    	var record = store.insert(0,{})[0];
    	vm.set('currentEnseignement',record);
    },
    
  
    updateEnt : function(){
    	var vm = this.getViewModel();
    	var entSelected = vm.get('currentEnseignement');
    	if(entSelected !== null){
    		this.switchGridToForm();
    		var formView = Ext.ComponentQuery.query('enseignementWindowForm')[0];
    		formView.setTitle('Modifier l\'enseignement');
    	}
    },
    
   switchGridToForm : function(){
	   var switchview = Ext.ComponentQuery.query('#entSwitchView')[0];
  		if(switchview.getChildEls())
  		{
  			switchview.removeAll();
  		}
  		switchview.add({xtype : 'enseignementWindowForm'});
   },
   
   switchFormToGrid : function(){
	   var switchview = Ext.ComponentQuery.query('#entSwitchView')[0];
 		if(switchview.getChildEls())
 		{
 			switchview.removeAll();
 		}
 		switchview.add({xtype : 'enseignementWindowGrid'});	   
   },
});