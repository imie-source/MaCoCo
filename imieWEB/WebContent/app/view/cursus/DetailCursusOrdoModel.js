Ext.define('ExtJsMVC.view.cursus.DetailCursusOrdoModel', {
	 extend: 'Ext.app.ViewModel',

	    alias: 'viewmodel.detailCursusOrdoModel',

	   /* data: {
	        name: 'ExtJsMVC'
	    }*/
	    
	    stores: {
	    	
	    	coursByCursusStore:{
	    		model:'ExtJsMVC.model.cursus.CoursCursusModel',
	    		autoLoad:true,
	    	},

	    },
	    /*formulas:{
	    	currentCours:{
	    		bind:{
	        		bindTo:'{coursOrdoGrid.selection}',
	        		deep:true
	        	},
	        	get:function(cours){
	        		return cours;
	        	},
	        	set:function(cours){
	        		if(!cours.isModel){
	        			cours = this.get('coursByCursusStore').getById(cours);
	        		}
	        		this.set('currentCours',cours);
	        	}
	    	},
	    	coursStatus:{
	    		bind:{
	        		bindTo:'{currentCours}',
	        		deep:true
	        	},
	        	get:function(cours){
	        		var ret = {
	        				dirty:cours ? cours.dirty : false,
	        				valid: cours && cours.isModel ? cours.isValid() : false
	        		};
	        		ret.dirtyAndValid = ret.dirty && ret.valid;
	        		return ret;
	        	},
	    	},	    	
	    }*/
	    
});