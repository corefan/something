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
                this.set_name("menutest");
                this.set_classname("menutest");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,679,596);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"captioncolumn\" type=\"STRING\" size=\"256\"/><Column id=\"levelcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"iconcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"enablecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"checkboxcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"hotkeycolumn\" type=\"STRING\" size=\"256\"/><Column id=\"userdatcolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idcolumn\">1</Col><Col id=\"captioncolumn\">File</Col><Col id=\"levelcolumn\">0</Col><Col id=\"checkboxcolumn\">false</Col><Col id=\"hotkeycolumn\">F</Col><Col id=\"iconcolumn\">file</Col></Row><Row><Col id=\"idcolumn\">2</Col><Col id=\"captioncolumn\">New</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">false</Col><Col id=\"hotkeycolumn\">CTRL+N</Col><Col id=\"iconcolumn\">Images::new.png</Col></Row><Row><Col id=\"idcolumn\">3</Col><Col id=\"captioncolumn\">Open</Col><Col id=\"levelcolumn\">1</Col><Col id=\"hotkeycolumn\">CTRL+O</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">open</Col></Row><Row><Col id=\"idcolumn\">4</Col><Col id=\"captioncolumn\">Project</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+P</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">projectopen</Col></Row><Row><Col id=\"idcolumn\">5</Col><Col id=\"captioncolumn\">File..</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+F</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">fileopen</Col></Row><Row><Col id=\"idcolumn\">6</Col><Col id=\"captioncolumn\">Save</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+S</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">save</Col></Row><Row><Col id=\"idcolumn\">7</Col><Col id=\"captioncolumn\">Exit</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">false</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+E</Col><Col id=\"iconcolumn\">exit</Col></Row><Row><Col id=\"idcolumn\">8</Col><Col id=\"captioncolumn\">Edit</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">false</Col><Col id=\"hotkeycolumn\">E</Col><Col id=\"iconcolumn\">edit0</Col></Row><Row><Col id=\"idcolumn\">9</Col><Col id=\"captioncolumn\">Cut</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+X</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">cut</Col></Row><Row><Col id=\"idcolumn\">10</Col><Col id=\"captioncolumn\">Copy</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+C</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">copy</Col></Row><Row><Col id=\"idcolumn\">11</Col><Col id=\"captioncolumn\">Undo</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">false</Col><Col id=\"hotkeycolumn\">CTRL+U</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">undo</Col></Row><Row><Col id=\"idcolumn\">12</Col><Col id=\"captioncolumn\">1</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">titlebar_icon</Col></Row><Row><Col id=\"idcolumn\">13</Col><Col id=\"captioncolumn\">1-1</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"idcolumn\">14</Col><Col id=\"captioncolumn\">1-2</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"idcolumn\">15</Col><Col id=\"captioncolumn\">1-2-1</Col><Col id=\"levelcolumn\">2</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"idcolumn\">16</Col><Col id=\"captioncolumn\">1-2-2</Col><Col id=\"levelcolumn\">2</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"enablecolumn\">true</Col><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"idcolumn\">17</Col><Col id=\"captioncolumn\">1-2-2-1</Col><Col id=\"levelcolumn\">3</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"enablecolumn\">true</Col><Col id=\"checkboxcolumn\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new PopupMenu("PopupMenu00", "absolute", "88", "157", "217", "147", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_innerdataset("@ds_menu");
            obj.set_idcolumn("idcolumn");
            obj.set_captioncolumn("captioncolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_userdatacolumn("userdatcolumn");
            obj.getSetter("onpopup").set("PopupMenu00_onpopup");
            obj.getSetter("ontouch").set("PopupMenu00_ontouch");
            obj.style.set_itemheight("30");
            obj.style.set_itemborder("3px solid darksalmon");
            obj.style.set_itembordertype("round 20px 20px");
            obj.style.set_border("3px solid red");
            obj.style.set_bordertype("round 25px 25px");
            obj.style.set_cursor("wait");

            obj = new Button("Button00", "absolute", "18", "21", "158", "38", null, null, this);
            obj.set_taborder("4");
            obj.set_text("trackPopup(1400, 300)");
            obj.style.set_font("SimSun,9,bold");
            obj.style.set_cursor("wait");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "264", "18", "246", "41", null, null, this);
            obj.set_taborder("6");
            obj.set_text("동적생성 trackPopup(-1800, 500)");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 679, 596, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("menutest");
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
        this.registerScript("PopupMenu_test.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
        	this.PopupMenu00.trackPopup(1400, 300, "right bottom");
        }

        
        function Menu00_onmenuclick(obj,e)
        {
        		switch(e.id){
        		case "2":
        			alert(2);
        			break;
        		case "4":
        			alert(4);
        			break;
        		case "5":
        			alert(5);
        			break;
        		case "6":
        			alert(6);
        			break;
        		case "7":
        			alert(7);
        			break;
        		case "9":
        			alert(9);
        			break;
        		case "10":
        			alert(10);
        			break;
        		case "11":
        			alert(11);
        			break;
        		case "13":
        			alert(13);
        			break;
        		case "15":
        			alert(15);
        			break;
        		case "17":
        			alert(17);
        			break;
        		default:
        			alert("기본");
        			break;
        	}
        }

        this.PopupMenu00_onmenuclick = function(obj,e)
        {
        		switch(e.id){
        		case "2":
        			alert(2);
        			break;
        		case "4":
        			alert(4);
        			break;
        		case "5":
        			alert(5);
        			break;
        		case "6":
        			alert(6);
        			break;
        		case "7":
        			alert(7);
        			break;
        		case "9":
        			alert(9);
        			break;
        		case "10":
        			alert(10);
        			break;
        		case "11":
        			alert(11);
        			break;
        		case "13":
        			alert(13);
        			break;
        		case "15":
        			alert(15);
        			break;
        		case "17":
        			alert(17);
        			break;
        		default:
        			alert("기본");
        			break;
        	}	
        };

        this.Button02_onclick = function(obj,e)
        {
        	if(this.popup02){
        		this.popup02.trackPopup(-1800, 500, "right bottom");
        	}
        	else{
        		this.popup02 = new PopupMenu();
        		this.popup02.init("aaa", "absolute", 100, 100, 200, 200 , null, null);
        		this.popup02.set_innerdataset("@ds_menu");
        		this.popup02.set_idcolumn("idcolumn");
        		this.popup02.set_captioncolumn("captioncolumn");
        		this.popup02.set_levelcolumn("levelcolumn");
        		this.popup02.set_checkboxcolumn("checkboxcolumn");
        		this.popup02.set_hotkeycolumn("hotkeycolumn");
        		this.popup02.set_userdatacolumn("userdatcolumn");
        		this.addChild("aaa", this.popup02);
        		this.popup02.show();
        		this.popup02.trackPopup(-1800, 500, "right bottom");
        	}
        };
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.PopupMenu00.addEventHandler("onmenuclick", this.PopupMenu00_onmenuclick, this);
            this.PopupMenu00.addEventHandler("ondrag", this.PopupMenu00_ondrag, this);
            this.PopupMenu00.addEventHandler("ondragenter", this.PopupMenu00_ondragenter, this);
            this.PopupMenu00.addEventHandler("ondragleave", this.PopupMenu00_ondragleave, this);
            this.PopupMenu00.addEventHandler("ondragmove", this.PopupMenu00_ondragmove, this);
            this.PopupMenu00.addEventHandler("ondrop", this.PopupMenu00_ondrop, this);
            this.PopupMenu00.addEventHandler("onkeydown", this.PopupMenu00_onkeydown, this);
            this.PopupMenu00.addEventHandler("onkeyup", this.PopupMenu00_onkeyup, this);
            this.PopupMenu00.addEventHandler("onlbuttondown", this.PopupMenu00_onlbuttondown, this);
            this.PopupMenu00.addEventHandler("onlbuttonup", this.PopupMenu00_onlbuttonup, this);
            this.PopupMenu00.addEventHandler("onmousedown", this.PopupMenu00_onmousedown, this);
            this.PopupMenu00.addEventHandler("onmouseenter", this.PopupMenu00_onmouseenter, this);
            this.PopupMenu00.addEventHandler("onmouseleave", this.PopupMenu00_onmouseleave, this);
            this.PopupMenu00.addEventHandler("onmouseup", this.PopupMenu00_onmouseup, this);
            this.PopupMenu00.addEventHandler("onsize", this.PopupMenu00_onsize, this);
            this.PopupMenu00.addEventHandler("onmove", this.PopupMenu00_onmove, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("PopupMenu_test.xfdl");

       
    };
}
)();
