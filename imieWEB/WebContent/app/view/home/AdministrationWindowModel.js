Ext.define('ExtJsMVC.view.home.AdministrationWindowModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.administrationWindowModel',

   /* data: {
        name: 'ExtJsMVC'
    }*/
    
    stores: {
    	
    	cursuses:{
    		model:'ExtJsMVC.model.cursus.CursusModel',
    		autoLoad:true,

    		//autoSync:true,
    		
    	},

    	referentiels:{
    		model:'ExtJsMVC.model.referentiel.Referentiel',
    		
    		autoLoad:true
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
        		var ret = {
        				dirty:cursus ? cursus.dirty : false,
        				valid: cursus && cursus.isModel ? cursus.isValid() : false
        		};
        		ret.dirtyAndValid = ret.dirty && ret.valid;
        		return ret;
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
        		var ret = {
        				dirty:referentiel ? referentiel.dirty : false,
        				valid: referentiel && referentiel.isModel ? referentiel.isValid() : false
        		};
        		ret.dirtyAndValid = ret.dirty && ret.valid;
        		return ret;
        	},
    	},
    	
    }
    


});