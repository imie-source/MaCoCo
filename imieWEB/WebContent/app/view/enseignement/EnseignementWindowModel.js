Ext.define('ExtJsMVC.view.enseignement.EnseignementWindowModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.enseignementWindowModel',

    
    stores: {
    	
    	enseignementStore:{
    		model:'ExtJsMVC.model.enseignement.EnseignementModel',
    		autoLoad:true,
    		sorters:[{
    			property:'entNom',
    			direction:'ASC'
    		}],
    	},
    },
    formulas:{
    	currentEnseignement:{
    		bind:{
        		bindTo:'{enseignementsGrid.selection}',
        		deep:true
        	},
        	get:function(enseignement){
        		return enseignement;
        	},
        	set:function(enseignement){
        		if(!enseignement.isModel){
        			enseignement = this.get('enseignementStore').getById(enseignement);
        		}
        		this.set('currentEnseignement',enseignement);
        	}
    	},
    	enseignementStatus:{
    		bind:{
        		bindTo:'{currentEnseignement}',
        		deep:true
        	},
        	get:function(enseignement){
        		var retEnseignementStatus = {
        				dirty:enseignement ? enseignement.dirty : false,
        				valid: enseignement && enseignement.isModel ? enseignement.isValid() : false
        		};
        		retEnseignementStatus.dirtyAndValid = retEnseignementStatus.dirty && retEnseignementStatus.valid;
        		return retEnseignementStatus;
        	},
    	},
    }
    


});
