Ext.define('ExtJsMVC.view.cursus.CursusViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.cursusViewModel',
    requires : [            
           'ExtJsMVC.model.*',
    ],
    
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
    	
    	
    	savoirStore : {
    		model:'ExtJsMVC.model.referentiel.Savoir',    		
    	},
    	
    	firstTreeStore : {
    		type:'tree',
    		model:'ExtJsMVC.model.promotion.CursusPromotionModel',
        	root : {
  
       		},
        	folderSort: true,
        	sorters:[{
        		property:'text',
        		direction:'ASC'
        	}],
    	},
    	firstTreePromoStore:{
     	    model : 'ExtJsMVC.model.promotion.FirstTreePromotionModel',   	    
    	},
    	
    	promotionStore : {
    		type:'tree',
    		model:'ExtJsMVC.model.promotion.PromotionModel',
        	root : {
       		},
        	folderSort: true,
        	sorters:[{
        		property:'text',
        		direction:'ASC'
        	}],
    	},
    	
    	rootPromotion  : {
    		type:'tree',
    		model:'ExtJsMVC.model.promotion.RootPromotionModel',
        	root : {
        		expanded : true
       		},
        	folderSort: true,
        	sorters:[{
        		property:'text',
        		direction:'ASC'
        	}],
    	},
    	
    	ufPromoStore:{
     	    model : 'ExtJsMVC.model.promotion.UniteFormationPromotionModel',   	    
    	},
    	
    	modulePromoStore:{
     	    model : 'ExtJsMVC.model.promotion.ModulePromotionModel',   	    
    	},
    	
    	
    	coursByPromotion: {
    		model:'ExtJsMVC.model.promotion.CoursPromotionModel',    		
    	},
    	
    	enseignementStore:{
    		model:'ExtJsMVC.model.enseignement.EnseignementModel',
    	},
    	
    	periodeStore : {
    		model:'ExtJsMVC.model.cursus.PeriodeCursusModel',
    	},
    	
    	//utiliser pour la construction du schéma 
    	periodeSchemaStore : {
    		model:'ExtJsMVC.model.cursus.PeriodeCursusModel',
    	},
    	
    	periodePromotionStore : {
    		model:'ExtJsMVC.model.promotion.PeriodePromotionModel',
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
        		var retCursusStatus = {
        				dirty:cursus ? cursus.dirty : false,
        				valid: cursus && cursus.isModel ? cursus.isValid() : false
        		};
        		retCursusStatus.dirtyAndValid = retCursusStatus.dirty && retCursusStatus.valid;
        		return retCursusStatus;
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
        		var retCursusSecondTreeStatus = {
        				dirty:cursus ? cursus.dirty : false,
        				valid: cursus && cursus.isModel ? cursus.isValid() : false
        		};
        		retCursusSecondTreeStatus.dirtyAndValid = retCursusSecondTreeStatus.dirty && retCursusSecondTreeStatus.valid;
        		return retCursusSecondTreeStatus;
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
    	
    	refTreeStatus:{
    		bind:{
        		bindTo:'{currentRefTree}',
        		deep:true
        	},
        	get:function(item){
        		var retRefTreeStatus = {
        				dirty:item ? item.dirty : false,
        				valid: item && item.isModel ? item.isValid() : false
        		};
        		retRefTreeStatus.dirtyAndValid = retRefTreeStatus.dirty && retRefTreeStatus.valid;
        		return retRefTreeStatus;
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
        		var retItemStatus = {
        				dirty:item ? item.dirty : false,
        				valid: item && item.isModel ? item.isValid() : false
        		};
        		retItemStatus.dirtyAndValid = retItemStatus.dirty && retItemStatus.valid;
        		return retItemStatus;
        	},
    	},
    	
    	
    	currentSecondPromoTreeItem:{
    		bind:{
        		bindTo:'{promoTree.selection}',
        		deep:true
        	},
        	get:function(item){
        		return item;
        	},
        	set:function(item){
        		this.set('currentSecondPromoTreeItem',item);
        	}
    	},
    	itemPromoStatus:{
    		bind:{
        		bindTo:'{currentSecondPromoTreeItem}',
        		deep:true
        	},
        	get:function(item){
        		var retItemStatus = {
        				dirty:item ? item.dirty : false,
        				valid: item && item.isModel ? item.isValid() : false
        		};
        		retItemStatus.dirtyAndValid = retItemStatus.dirty && retItemStatus.valid;
        		return retItemStatus;
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
        		var retCoursStatus = {
        				dirty:cours ? cours.dirty : false,
        				valid: cours && cours.isModel ? cours.isValid() : false
        		};
        		retCoursStatus.dirtyAndValid = retCoursStatus.dirty && retCoursStatus.valid;
        		return retCoursStatus;
        	},
    	},
    	currentPeriode:{
    		bind:{
        		bindTo:'{periodeGrid.selection}',
        		deep:true
        	},
        	get:function(periode){
        		return periode;
        	},
        	set:function(periode){
        		if(!periode.isModel){
        			periode = this.get('periodeStore').getById(periode);
        		}
        		this.set('currentPeriode',periode);
        	}
    	},
    	currentPeriodePromotion:{
    		bind:{
        		bindTo:'{periodePromotionGrid.selection}',
        		deep:true
        	},
        	get:function(periode){
        		return periode;
        	},
        	set:function(periode){
        		if(!periode.isModel){
        			periode = this.get('periodePromotionStore').getById(periode);
        		}
        		this.set('currentPeriodePromotion',periode);
        	}
    	},
 	
    }
    


});