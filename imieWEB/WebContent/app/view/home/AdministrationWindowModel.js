Ext.define('ExtJsMVC.view.home.AdministrationWindowModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.administrationWindowModel',

    
    stores: {
    	
    	cursuses:{
    		model:'ExtJsMVC.model.cursus.CursusModel',
    		autoLoad:true,
    	},

    	referentiels:{
    		model:'ExtJsMVC.model.referentiel.Referentiel',
    		autoLoad:true,
    	}
    },
    formulas:{
    	currentCursus:{
    		bind:{
        		bindTo:'{cursusesGrid.selection}',
        		deep:true
        	},
        	get:function(cursus){
        		return cursus;
        	},
        	set:function(cursus){
        		if(!cursus.isModel){
        			cursus = this.get('cursuses').getById(cursus);
        		}
        		this.set('currentCursus',cursus);
        	}
    	},
    	cursusStatus:{
    		bind:{
        		bindTo:'{currentCursus}',
        		deep:true
        	},
        	get:function(cursus){
        		var retCursusStatus = {
        				dirty:cursus ? cursus.dirty : false,
        				valid: cursus && cursus.isModel ? cursus.isValid() : false
        		};
        		retCursusStatus.dirtyAndValid = retCursusStatus.dirty && retCursusStatus.valid;
        		return retCursusStatus;
        	},
    	},
    	
    	
    	currentReferentiel:{
    		bind:{
        		bindTo:'{referentielsGrid.selection}',
        		deep:true
        	},
        	get:function(referentiel){
        		return referentiel;
        	},
        	set:function(referentiel){
        		if(!cursus.isModel){
        			referentiel = this.get('referentiels').getById(referentiel);
        		}
        		this.set('currentReferentiel',referentiel);
        	}
    	},
    	refStatus:{
    		bind:{
        		bindTo:'{currentReferentiel}',
        		deep:true
        	},
        	get:function(referentiel){
        		var retRefStatus = {
        				dirty:referentiel ? referentiel.dirty : false,
        				valid: referentiel && referentiel.isModel ? referentiel.isValid() : false
        		};
        		retRefStatus.dirtyAndValid = retRefStatus.dirty && retRefStatus.valid;
        		return retRefStatus;
        	},
    	},
    	
    }
    


});
