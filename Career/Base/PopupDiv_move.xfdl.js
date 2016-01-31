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
                this.set_name("PopupDiv_M_move_46792_01");
                this.set_classname("23711_Buttoncssimage_01");
                this.set_titletext("PopupDiv_M_move_46792_01");
                this._setFormPosition(0,0,310,450);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txt_result", "absolute", "11", "355", "293", "189", null, null, this);
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "233", "311", "70", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new Button("btn_trackPopup", "absolute", "16", "183", "240", "35", null, null, this);
            obj.set_taborder("1");
            obj.set_text("trackPopup by this 50 50");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "11", "13", "256", "139", null, null, this);
            obj.set_text("PopupDiv00");
            obj.style.set_background("yellowgreen");
            obj.style.set_font("Dotum,14");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Button("btn_move", "absolute", "175", "0", "71", "27", null, null, this.PopupDiv00);
            obj.set_taborder("4");
            obj.set_text("move");
            obj.style.set_background("@gradation");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("txt_left", "absolute", "8", "31", "36", "28", null, null, this.PopupDiv00);
            obj.set_text("Left");
            obj.style.set_background("#ededed00");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("txt_leftValue", "absolute", "50", "29", "60", "32", null, null, this.PopupDiv00);
            obj.set_taborder("5");
            obj.set_value("30");
            obj.style.set_background("#ffffffb3");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("txt_top", "absolute", "136", "31", "36", "28", null, null, this.PopupDiv00);
            obj.set_text("Top");
            obj.style.set_background("#ededed00");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("txt_topValue", "absolute", "186", "29", "60", "32", null, null, this.PopupDiv00);
            obj.set_taborder("6");
            obj.set_value("330");
            obj.style.set_background("#ffffffb3");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("txt_right", "absolute", "8", "106", "47", "28", null, null, this.PopupDiv00);
            obj.set_text("Right");
            obj.style.set_background("#ededed00");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("txt_rightValue", "absolute", "50", "104", "60", "32", null, null, this.PopupDiv00);
            obj.set_taborder("7");
            obj.set_value("100");
            obj.style.set_background("#ffffffb3");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("txt_bottom", "absolute", "120", "106", "53", "28", null, null, this.PopupDiv00);
            obj.set_text("Bottom");
            obj.style.set_background("#ededed00");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("txt_bottomValue", "absolute", "186", "104", "60", "32", null, null, this.PopupDiv00);
            obj.set_taborder("8");
            obj.set_value("310");
            obj.style.set_background("#ffffffb3");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("txt_width", "absolute", "5", "68", "40", "28", null, null, this.PopupDiv00);
            obj.set_text("Width");
            obj.style.set_background("#ededed00");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("txt_height", "absolute", "122", "71", "48", "20", null, null, this.PopupDiv00);
            obj.set_text("Height");
            obj.style.set_background("#ededed00");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("txt_WidthValue", "absolute", "50", "67", "60", "32", null, null, this.PopupDiv00);
            obj.set_taborder("9");
            obj.style.set_background("#ffffffb3");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("txt_HeightValue", "absolute", "187", "67", "60", "32", null, null, this.PopupDiv00);
            obj.set_taborder("10");
            obj.style.set_background("#ffffffb3");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "96", "312", "116", "32", null, null, this);
            obj.set_taborder("32");
            obj.set_text("trackpopup");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "73", "232", "112", "32", null, null, this);
            obj.set_taborder("33");
            obj.set_value("150");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "74", "275", "110", "30", null, null, this);
            obj.set_taborder("34");
            obj.set_value("150");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "232", "47", "27", null, null, this);
            obj.set_text("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16", "278", "47", "27", null, null, this);
            obj.set_text("top");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 221, 116, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("yellowgreen");
            		p.style.set_font("Dotum,14");
            		p.set_visible("false");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 310, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("23711_Buttoncssimage_01");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("PopupDiv_M_move_46792_01");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("PopupDiv_move.xfdl", function() {
        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        
        //move method
        this.btn_move_onclick = function(obj,e)
        {
        	var r_left, r_top, r_width, r_height, r_right, r_bottom;
        	
        	if(this.PopupDiv00.txt_leftValue.value == undefined || this.PopupDiv00.txt_leftValue.value == "")
        	{
        		r_left = null;
        	}
        	else
        	{
        		r_left = parseInt(this.PopupDiv00.txt_leftValue.value);
        	}

        	if(this.PopupDiv00.txt_topValue.value == undefined || this.PopupDiv00.txt_topValue.value == "")
        	{
        		r_top = null;
        	}
        	else
        	{
        		r_top = parseInt(this.PopupDiv00.txt_topValue.value);
        	}

        	if(this.PopupDiv00.txt_WidthValue.value == undefined || this.PopupDiv00.txt_WidthValue.value == "")
        	{
        		r_width = null;
        	}
        	else
        	{
        		r_width = parseInt(this.PopupDiv00.txt_WidthValue.value);
        	}

        	if(this.PopupDiv00.txt_HeightValue.value == undefined || this.PopupDiv00.txt_HeightValue.value == "")
        	{
        		r_height = null;
        	}
        	else
        	{
        		r_height = parseInt(this.PopupDiv00.txt_HeightValue.value);
        	}

        	if(this.PopupDiv00.txt_rightValue.value == undefined || this.PopupDiv00.txt_rightValue.value == "")
        	{
        		r_right = null;
        	}
        	else
        	{
        		r_right = parseInt(this.PopupDiv00.txt_rightValue.value);
        	}

        	if(this.PopupDiv00.txt_bottomValue.value == undefined || this.PopupDiv00.txt_bottomValue.value == "")
        	{
        		r_bottom = null;
        	}
        	else
        	{
        		r_bottom = parseInt(this.PopupDiv00.txt_bottomValue.value);
        	}

        	this.PopupDiv00.move(r_left, r_top, r_width, r_height, r_right, r_bottom);
        	this.txt_result.set_value(this.txt_result.value + "\n" + this.PopupDiv00.pupwindow.width);
        	this.txt_result.set_value(this.txt_result.value + "\n" + this.PopupDiv00.popupwindow.height);
        }

        this.btn_trackPopup_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(this.btn_trackPopup, 50, 50);
        }

        this.Div00_PopupDiv00_onmove = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n" + "onmove 이벤트 발생");
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopup(this.Edit00.value, this.Edit01.value);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_trackPopup.addEventHandler("onclick", this.btn_trackPopup_onclick, this);
            this.PopupDiv00.addEventHandler("onmove", this.Div00_PopupDiv00_onmove, this);
            this.PopupDiv00.btn_move.addEventHandler("onclick", this.btn_move_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("PopupDiv_move.xfdl");

       
    };
}
)();
