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
                this.set_name("sketch");
                this.set_classname("sketch");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edt00", "absolute", "23", "405", "105", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "136", "406", "120", "50", null, null, this);
            obj.set_taborder("4");
            obj.set_text("set width");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01", "absolute", "23", "461", "105", "50", null, null, this);
            obj.set_taborder("5");
            obj.set_value("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "136", "462", "120", "50", null, null, this);
            obj.set_taborder("6");
            obj.set_text("set color");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "424", "272", "120", "50", null, null, this);
            obj.set_taborder("9");
            obj.set_text("draw stroke");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "20", "272", "120", "50", null, null, this);
            obj.set_taborder("10");
            obj.set_text("undo");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "292", "414", "120", "50", null, null, this);
            obj.set_taborder("11");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "292", "336", "120", "50", null, null, this);
            obj.set_taborder("13");
            obj.set_text("text mode");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "160", "272", "120", "50", null, null, this);
            obj.set_taborder("14");
            obj.set_text("redo");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "20", "336", "120", "50", null, null, this);
            obj.set_taborder("15");
            obj.set_text("draw mode");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "292", "272", "120", "50", null, null, this);
            obj.set_taborder("16");
            obj.set_text("draw text");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "160", "336", "120", "50", null, null, this);
            obj.set_taborder("17");
            obj.set_text("erase mode");
            this.addChild(obj.name, obj);

            obj = new Sketch("sketch", "absolute", "3.32%", "23", null, "228", "55.37%", null, this);
            obj.set_taborder("18");
            obj.set_text("Sketch00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sketch");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("sketch.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var value = this.edt00.value;
        	this.sketch.setBrushSize(value);
        }

        this.Button01_onclick = function(obj,e)
        {
        	var value = this.edt01.value;
        	this.sketch.setBrushColor(value);	
        }

        this.Button02_onclick = function(obj,e)
        {
        	//var value = this.edt02.value;
        	//this.sketch.set_penopacity(value);	
        }

        this.Button03_onclick = function(obj,e)
        {

        		this.sketch.drawStroke(0,0,true);
        		this.sketch.drawStroke(100,10);
        		this.sketch.drawStroke(400,220);
        		this.sketch.drawStroke(25,23);

        		this.sketch.drawErase(0,0,true);
        		this.sketch.drawErase(10,10);
        		this.sketch.drawErase(130,220);
        		this.sketch.drawErase(5,23);	
        }

        

        this.Button04_onclick = function(obj,e)
        {
        	this.sketch.undo();
        }

        this.Button05_onclick = function(obj,e)
        {
        	this.sketch.clear();
        	
        	//this.sketch.getImageData(this, "cbfnc");
        }

        this.cbfnc = function(data)
        {
        		   var imgv  = this.iv._control_element._handle.childNodes[0].childNodes[0];
        			imgv.src = data;
        			imgv.style.width = "100%";
        			imgv.style.height = "100%";

        }
        this.Button07_onclick = function(obj,e)
        {
        	this.sketch.redo();
        }

        this.Button08_onclick = function(obj,e)
        {
        	this.sketch.set_editmode("stroke");
        }

        
        	 var sizex = 19;
        	 var x1 = 0;
        	 var y1 = 0;
        	 var cl = ["blue", "yellow", "green", "red", "black"];
        	 var fl  = ["calibri", "Times New Roman", "Comic Sans MS", "BRUSH SCRIPT MT", "MONACO"];
        	 var x = 0;
        this.Button09_onclick = function(obj,e)
        {
        	
        		if(x == 5) x = 0;
        		this.sketch.setTextFont(fl[x], sizex++);
        		//this.setBrushColor(cl[x]);
        		this.sketch.setTextColor(cl[x++]);
        		if(x1 == 100){ x1 = 0; y1 = 0;}
        		this.sketch.drawText(x1++, y1++, "AaBbCeDf 가나다라" + x1);	
        	
        	return;
        }

        this.Button06_onclick = function(obj,e)
        {
        	this.sketch.set_editmode("text");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);

        };

        this.loadIncludeScript("sketch.xfdl");

       
    };
}
)();
