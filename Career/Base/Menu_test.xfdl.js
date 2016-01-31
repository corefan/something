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
                this.set_name("Menu_test");
                this.set_classname("Menu_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"captioncolumn\" type=\"STRING\" size=\"256\"/><Column id=\"levelcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"iconcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"enablecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"checkboxcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"hotkeycolumn\" type=\"STRING\" size=\"256\"/><Column id=\"userdatcolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idcolumn\">1</Col><Col id=\"captioncolumn\">File</Col><Col id=\"levelcolumn\">0</Col><Col id=\"checkboxcolumn\">false</Col><Col id=\"hotkeycolumn\">F</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">2</Col><Col id=\"captioncolumn\">New</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">false</Col><Col id=\"hotkeycolumn\">CTRL+N</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">3</Col><Col id=\"captioncolumn\">Open</Col><Col id=\"levelcolumn\">1</Col><Col id=\"hotkeycolumn\">CTRL+O</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">4</Col><Col id=\"captioncolumn\">Project</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+P</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">5</Col><Col id=\"captioncolumn\">File..</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+F</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">6</Col><Col id=\"captioncolumn\">Save</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+S</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">7</Col><Col id=\"captioncolumn\">Exit</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">false</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+E</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">8</Col><Col id=\"captioncolumn\">Edit</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">false</Col><Col id=\"hotkeycolumn\">E</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">9</Col><Col id=\"captioncolumn\">Cut</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+X</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">10</Col><Col id=\"captioncolumn\">Copy</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+C</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">11</Col><Col id=\"captioncolumn\">Undo</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">false</Col><Col id=\"hotkeycolumn\">CTRL+U</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">12</Col><Col id=\"captioncolumn\">1</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/></Row><Row><Col id=\"idcolumn\">13</Col><Col id=\"captioncolumn\">1-1</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"idcolumn\">14</Col><Col id=\"captioncolumn\">1-2</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"idcolumn\">15</Col><Col id=\"captioncolumn\">1-2-1</Col><Col id=\"levelcolumn\">2</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"idcolumn\">16</Col><Col id=\"captioncolumn\">1-2-2</Col><Col id=\"levelcolumn\">2</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"idcolumn\">17</Col><Col id=\"captioncolumn\">1-2-2-1</Col><Col id=\"levelcolumn\">3</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col><Col id=\"checkboxcolumn\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu00", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">000100</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"FORM_NM\">GRID</Col></Row><Row><Col id=\"MENU_ID\">000101</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000101</Col><Col id=\"FORM_NM\">Drag &amp; Drop</Col></Row><Row><Col id=\"MENU_ID\">000103</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000103</Col><Col id=\"FORM_NM\">HEAD SORT</Col></Row><Row><Col id=\"MENU_ID\">000200</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\"/><Col id=\"FORM_ID\"/><Col id=\"FORM_NM\">CHART</Col></Row><Row><Col id=\"MENU_ID\">002002</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000202</Col><Col id=\"FORM_NM\">Rmate Chart</Col></Row><Row><Col id=\"MENU_ID\">000300</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\"/><Col id=\"FORM_ID\"/><Col id=\"FORM_NM\">웹브라우저</Col></Row><Row><Col id=\"MENU_ID\">000301</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000301</Col><Col id=\"FORM_NM\">데이터연동TEST</Col></Row><Row><Col id=\"MENU_ID\">000302</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000302</Col><Col id=\"FORM_NM\">웹에디터</Col></Row><Row><Col id=\"MENU_ID\">000400</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_004001</Col><Col id=\"FORM_NM\">파일</Col></Row><Row><Col id=\"MENU_ID\">000401</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000401</Col><Col id=\"FORM_NM\">업로드 다운로드</Col></Row><Row><Col id=\"MENU_ID\">000500</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\"/><Col id=\"FORM_NM\">팝업</Col></Row><Row><Col id=\"MENU_ID\">000501</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000501</Col><Col id=\"FORM_NM\">팝업화면</Col></Row><Row><Col id=\"MENU_ID\">000600</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000600</Col><Col id=\"FORM_NM\">공통함수</Col></Row><Row><Col id=\"MENU_ID\">000601</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000601</Col><Col id=\"FORM_NM\">String</Col></Row><Row><Col id=\"MENU_ID\">000602</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PARENT_ID\">func</Col><Col id=\"URL\">Func</Col><Col id=\"FORM_ID\">FUNC_000602</Col><Col id=\"FORM_NM\">Date</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Menu("Menu00", "absolute", "55", "40", "209", "90", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_menu");
            obj.set_idcolumn("idcolumn");
            obj.set_captioncolumn("captioncolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_userdatacolumn("userdatcolumn");
            obj.style.set_checkboximage("URL('theme://images/titlebar_icon.png')");
            obj.style.set_itempadding("10 10 10 10");
            obj.style.set_itembackground("darkorange");
            obj.style.set_itemborder("5 solid greenyellow");
            obj.style.set_itembordertype("round 20 20");
            obj.style.set_itemalign("right bottom");
            obj.style.set_popupbackground("bisque");
            obj.style.set_popupgradation("linear 0,0 yellow 100,100 red");
            obj.style.set_popupborder("3 dotted darkorange");
            obj.style.set_popupbordertype("round 20 20");
            obj.style.set_popuppadding("3 3 3 3");
            obj.style.set_popupitemheight("40");
            obj.style.set_popupitempadding("5 5 5 5");
            obj.style.set_popupcolor("deeppink");
            obj.style.set_popupfont("bold 12 HY헤드라인M");
            obj.style.set_popupitemgradation("linear 0,0 yellow 100,100 brown");
            obj.style.set_popupitemborder("5 solid seashell");
            obj.style.set_popupitembordertype("round 25 25");
            obj.style.set_padding("10 0 0 10");
            obj.style.set_background("darkgreen URL('theme://images/extrabutton_normal.png') repeat");
            obj.style.set_border("3 solid fuchsia");
            obj.style.set_color("yellow");
            obj.style.set_bordertype("round 25 25");
            obj.style.set_font("bold antialias 14 Cambria");
            obj.style.set_cursor("help");
            obj.style.set_opacity("60");
            obj.style.set_shadow("outer 0,0 0 gray");

            obj = new Menu("Menu01", "absolute", "8", "197", "792", "38", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_menu00");
            obj.set_idcolumn("MENU_ID");
            obj.set_captioncolumn("FORM_NM");
            obj.set_levelcolumn("MENU_LVL");
            obj.style.set_background("@gradation URL('theme://images/img_TP_GNB_GuideLine.png') stretch 10,2");

            obj = new Menu("Menu02", "absolute", "338", "43", "173", "90", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_menu");
            obj.set_idcolumn("idcolumn");
            obj.set_captioncolumn("captioncolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_userdatacolumn("userdatcolumn");
            obj.style.set_itempadding("1 10 10 10");
            obj.style.set_popuppadding("1 1 1 1");
            obj.style.set_popupitempadding("1 1 1 1");

            obj = new Button("Button00", "absolute", "3.52%", "419", null, "38", "81.05%", null, this);
            obj.set_taborder("3");
            obj.set_text("popupmenu(1400, 300)");
            obj.style.set_font("SimSun,9,bold");
            obj.style.set_cursor("wait");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "27.54%", "416", null, "41", "48.44%", null, this);
            obj.set_taborder("4");
            obj.set_text("popupmeu 동적생성(-1800, 500)");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00", "absolute", "6.15%", "253", null, "147", "72.66%", null, this);
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
            obj.style.set_itemheight("30");
            obj.style.set_itemborder("3px solid darksalmon");
            obj.style.set_itembordertype("round 20px 20px");
            obj.style.set_border("3px solid red");
            obj.style.set_bordertype("round 25px 25px");
            obj.style.set_cursor("wait");
            obj.getSetter("ontouch").set("PopupMenu00_ontouch");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Menu_test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Menu_test.xfdl", function() {

        this.Menu00_onmenuclick = function(obj,e)
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

        this.Menu02_onmenuclick = function(obj,e)
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

        this.Button00_onclick = function(obj,e)
        {
        	this.PopupMenu00.trackPopup(1400, 300, "right bottom");	
        }

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
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick", this.Menu00_onmenuclick, this);
            this.Menu02.addEventHandler("onmenuclick", this.Menu02_onmenuclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.PopupMenu00.addEventHandler("onmenuclick", this.PopupMenu00_onmenuclick, this);
            this.PopupMenu00.addEventHandler("onlbuttondown", this.PopupMenu00_onlbuttondown, this);
            this.PopupMenu00.addEventHandler("onlbuttonup", this.PopupMenu00_onlbuttonup, this);
            this.PopupMenu00.addEventHandler("onmouseenter", this.PopupMenu00_onmouseenter, this);
            this.PopupMenu00.addEventHandler("onmouseleave", this.PopupMenu00_onmouseleave, this);
            this.PopupMenu00.addEventHandler("onmousedown", this.PopupMenu00_onmousedown, this);
            this.PopupMenu00.addEventHandler("onmouseup", this.PopupMenu00_onmouseup, this);
            this.PopupMenu00.addEventHandler("onkeydown", this.PopupMenu00_onkeydown, this);
            this.PopupMenu00.addEventHandler("onkeyup", this.PopupMenu00_onkeyup, this);
            this.PopupMenu00.addEventHandler("ondrag", this.PopupMenu00_ondrag, this);
            this.PopupMenu00.addEventHandler("ondragenter", this.PopupMenu00_ondragenter, this);
            this.PopupMenu00.addEventHandler("ondragmove", this.PopupMenu00_ondragmove, this);
            this.PopupMenu00.addEventHandler("ondragleave", this.PopupMenu00_ondragleave, this);
            this.PopupMenu00.addEventHandler("ondrop", this.PopupMenu00_ondrop, this);
            this.PopupMenu00.addEventHandler("onsize", this.PopupMenu00_onsize, this);
            this.PopupMenu00.addEventHandler("onmove", this.PopupMenu00_onmove, this);

        };

        this.loadIncludeScript("Menu_test.xfdl");

       
    };
}
)();
