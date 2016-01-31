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
                this._setFormPosition(0,0,553,377);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MediaPlayer("MediaPlayer00", "absolute", "37", "16", "222", "172", null, null, this);
            obj.getSetter("left").set("37");
            obj.getSetter("top").set("16");
            obj.getSetter("width").set("222");
            obj.getSetter("height").set("172");
            obj.getSetter("taborder").set("0");
            obj.getSetter("currenttime").set("0");
            obj.getSetter("volumn").set("50");
            obj.getSetter("rewindmode").set("false");
            this.addChild(obj.name, obj);

            obj = new MediaPlayer("MediaPlayer01", "absolute", "277", "16", "233", "169", null, null, this);
            obj.getSetter("left").set("277");
            obj.getSetter("top").set("16");
            obj.getSetter("width").set("233");
            obj.getSetter("height").set("169");
            obj.getSetter("taborder").set("1");
            obj.getSetter("currenttime").set("0");
            obj.getSetter("volumn").set("50");
            obj.getSetter("rewindmode").set("false");
            this.addChild(obj.name, obj);

            obj = new MediaPlayer("MediaPlayer02", "absolute", "136", "196", "271", "167", null, null, this);
            obj.getSetter("left").set("136");
            obj.getSetter("top").set("196");
            obj.getSetter("width").set("271");
            obj.getSetter("height").set("167");
            obj.getSetter("taborder").set("2");
            obj.getSetter("currenttime").set("0");
            obj.getSetter("volumn").set("50");
            obj.getSetter("rewindmode").set("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 553, 377, this,
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
        this.registerScript("Media_test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.FlashPlayer00.set_movie(this.Edit00.text);
        //	this.FlashPlayer00.play();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Media_test.xfdl");

       
    };
}
)();
