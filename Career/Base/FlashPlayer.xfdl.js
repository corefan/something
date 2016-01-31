(function() {
    return function() {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (this._type == "TOBEForm") {
                this.set_name("flashP");
                this.set_classname("flashP");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,494,317);
            }

            // Object(Dataset, ExportObject) Initialize

            // UI Components Initialize
            obj = new Button("Button00", "absolute", "25", "32", "100", "62", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            obj.style.set_opacity("60");
            obj.style.set_shadow("outer 5,5 5 darkorange");
            this.addChild(obj.name, obj);

            obj = new FlashPlayer("FlashPlayer00", "absolute", "161", "76", "303", "212", null, null, this);
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 494, 317, this, function(p){} );
            this.addLayout(obj.name, obj);

            
            
            // BindItem Information
        
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FlashPlayer.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.FlashPlayer00.set_movie("http://211.254.32.45:9090/XP13/down/sul.swf");
        //	this.FlashPlayer00.play();
        }
        
        });


    
        // Regist UI Components Event
        this.on_initEvent = function()
        {  
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };
        
        // Init Value
        this.on_initLayout = function()
        {  

        };

        this.loadIncludeScript("FlashPlayer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
})();
