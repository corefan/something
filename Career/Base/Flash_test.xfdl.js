(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("flashP");
                this.set_classname("flashP");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,494,317);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "22", "16", "100", "62", null, null, this);
            obj.set_taborder("1");
            obj.set_text("set_movie");
            obj.style.set_opacity("60");
            obj.style.set_shadow("outer 5,5 5 darkorange");
            this.addChild(obj.name, obj);

            obj = new FlashPlayer("FlashPlayer00", "absolute", "161", "76", "303", "212", null, null, this);
            obj.getSetter("framenum").set("0");
            obj.getSetter("alignmode").set("center");
            obj.getSetter("text").set("FlashPlayer00");
            obj.getSetter("taborder").set("2");
            obj.style.set_border("3px solid red");
            obj.style.set_bordertype("round 20 20");
            obj.style.set_opacity("60");
            obj.style.set_shadow("outer 5,5 5 darkorange");
            obj.set_movie("http://172.10.12.61:9090/Career/sul.swf");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "142", "22", "331", "38", null, null, this);
            obj.set_taborder("3");
            obj.set_value("http://172.10.12.61:9090/Career/tobelogo.swf");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 494, 317, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("flashP");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Flash_test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.FlashPlayer00.set_movie(this.Edit00.text);
        //	this.FlashPlayer00.play();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Flash_test.xfdl");

       
    };
}
)();
