Ext.define('ExtJsMVC.view.cursus.CursusViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.cursusViewModel',
    requires : [            
           'ExtJsMVC.model.*',
    ],

   /* data: {
        name: 'ExtJsMVC'
    }*/
    
    stores: {
    	
    	cursuses:{
    		type:'tree',
    		model:'ExtJsMVC.model.cursus.CursusModel',
    		root : {
    			expanded : true
    		},
    		folderSort: true,
    		sorters:[{
    			property:'text',
    			direction:'ASC'
    		}],
    	},
    	rootCursuses:{
    		type:'tree',
    		model:'ExtJsMVC.model.cursus.RootCursusModel',
    		root : {
    		},
    		folderSort: true,
    		sorters:[{
    			property:'text',
    			direction:'ASC'
    		}],

    	},
    	
    	ufStore:{
     	    model : 'ExtJsMVC.model.cursus.UniteFormationCursusModel',   	    
    	},
    	
    	moduleStore:{
     	    model : 'ExtJsMVC.model.cursus.ModuleCursusModel',   	    
    	},
    	
    	
    	coursByCursus : {
    		model:'ExtJsMVC.model.cursus.CoursCursusModel',    		
    	},
    	referentiels:{
    		
    		type:'tree',
    		model:'ExtJsMVC.model.referentiel.Referentiel',
    		root : {
    			expanded : true
    		},
    	},
    	rootReferentiels:{
    		
    		type:'tree',
    		model:'ExtJsMVC.model.referentiel.RootReferentiel',
    		root : {
    		},
    	},
    	actTypeStore:{
     	    model : 'ExtJsMVC.model.referentiel.ActiviteType',   	    
    	},
    	
    	compProStore:{
     	    model : 'ExtJsMVC.model.referentiel.CompetencePro',   	    
    	},
    	
    	
    	savoirCursus : {
    		model:'ExtJsMVC.model.referentiel.Savoir',    		
    	},
    },
    formulas:{
    	currentCursus:{
    		bind:{
        		bindTo:'{cursusesTree.selection}',
        		deep:true
        	},
        	get:function(cursus){
        		return cursus;
        	},
        	set:function(cursus){
        		if(!cursus.isModel){
        			cursus = this.get('rootCursuses').getById(cursus);
        		}
        		this.set('currentCursus',cursus);
        	},
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
    	
    	currentCursusSecondTree:{
    		bind:{
        		bindTo:'{cursusTree.selection}',
        		deep:true
        	},
        	get:function(cursus){
        		return cursus;
        	},
        	set:function(cursus){
        		if(!cursus.isModel){
        			cursus = this.get('rootCursuses').getById(cursus);
        		}
        		this.set('currentCursusSecondTree',cursus);
        	},
    	},
    	
    	cursusSecondTreeStatus:{
    		bind:{
        		bindTo:'{currentCursusSecondTree}',
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
    	currentRefTree:{
    		bind:{
        		bindTo:'{referentielTree.selection}',
        		deep:true
        	},
        	get:function(item){
        		return item;
        	},
        	set:function(item){
        		if(!item.isModel){
        			item = this.get('rootReferentiels').getById(item);
        		}
        		this.set('currentRefTree',item);
        	},
    	},
    	
    	cursusRefTreeStatus:{
    		bind:{
        		bindTo:'{currentRefTree}',
        		deep:true
        	},
        	get:function(item){
        		var item = {
        				dirty:item ? item.dirty : false,
        				valid: item && item.isModel ? item.isValid() : false
        		};
        		ret.dirtyAndValid = ret.dirty && ret.valid;
        		return ret;
        	},
    	},

    	currentSecondTreeItem:{
    		bind:{
        		bindTo:'{cursusTree.selection}',
        		deep:true
        	},
        	get:function(item){
        		return item;
        	},
        	set:function(item){
        		this.set('currentSecondTreeItem',item);
        	}
    	},
    	itemStatus:{
    		bind:{
        		bindTo:'{currentSecondTreeItem}',
        		deep:true
        	},
        	get:function(item){
        		var ret = {
        				dirty:item ? item.dirty : false,
        				valid: item && item.isModel ? item.isValid() : false
        		};
        		ret.dirtyAndValid = ret.dirty && ret.valid;
        		return ret;
        	},
    	},
    	
    	currentReferentielTree:{
    		bind:{
        		bindTo:'{referentielsTree.selection}',
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
    	
 	
    }
    


});