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
                this.set_name("Applet_test");
                this.set_classname("Applet_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,980,488);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button14", "absolute", "236", "332", "70", "44", null, null, this);
            obj.set_taborder("19");
            obj.set_text("play()");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "316", "332", "70", "44", null, null, this);
            obj.set_taborder("20");
            obj.set_text("pause()");
            this.addChild(obj.name, obj);

            obj = new Button("Button17", "absolute", "397", "332", "68", "44", null, null, this);
            obj.set_taborder("22");
            obj.set_text("stop()");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "122", "64", "92", "44", null, null, this);
            obj.set_taborder("32");
            obj.set_text("duration");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "21", "120", "92", "44", null, null, this);
            obj.set_taborder("33");
            obj.set_text("mute");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "21", "64", "92", "44", null, null, this);
            obj.set_taborder("34");
            obj.set_text("loop");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "122", "178", "92", "44", null, null, this);
            obj.set_taborder("35");
            obj.set_text("controls");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "21", "232", "92", "44", null, null, this);
            obj.set_taborder("36");
            obj.set_text("size");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "121", "118", "92", "44", null, null, this);
            obj.set_taborder("37");
            obj.set_text("autoplay");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "21", "178", "92", "44", null, null, this);
            obj.set_taborder("38");
            obj.set_text("status");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "503", "375", "37", "25", null, null, this);
            obj.set_taborder("39");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "122", "12", "92", "44", null, null, this);
            obj.set_taborder("41");
            obj.set_text("currenttime");
            this.addChild(obj.name, obj);

            obj = new Button("Button22", "absolute", "640", "332", "56", "26", null, null, this);
            obj.set_taborder("43");
            obj.set_text("보더");
            this.addChild(obj.name, obj);

            obj = new Button("Button23", "absolute", "701", "331", "58", "26", null, null, this);
            obj.set_taborder("44");
            obj.set_text("보더타입");
            this.addChild(obj.name, obj);

            obj = new Button("Button24", "absolute", "701", "398", "58", "26", null, null, this);
            obj.set_taborder("45");
            obj.set_text("클래스");
            this.addChild(obj.name, obj);

            obj = new Button("Button25", "absolute", "640", "366", "56", "26", null, null, this);
            obj.set_taborder("46");
            obj.set_text("포지션");
            this.addChild(obj.name, obj);

            obj = new Button("Button26", "absolute", "701", "366", "59", "26", null, null, this);
            obj.set_taborder("47");
            obj.set_text("포지션스탭");
            this.addChild(obj.name, obj);

            obj = new Button("Button27", "absolute", "640", "398", "56", "26", null, null, this);
            obj.set_taborder("48");
            obj.set_text("스타일");
            this.addChild(obj.name, obj);

            obj = new Button("Button28", "absolute", "701", "432", "58", "26", null, null, this);
            obj.set_taborder("49");
            obj.set_text("비지블");
            this.addChild(obj.name, obj);

            obj = new Button("Button29", "absolute", "640", "432", "53", "26", null, null, this);
            obj.set_taborder("50");
            obj.set_text("활성화");
            this.addChild(obj.name, obj);

            obj = new Button("Button30", "absolute", "640", "462", "84", "26", null, null, this);
            obj.set_taborder("51");
            obj.set_text("활성화 이벤트");
            this.addChild(obj.name, obj);

            obj = new Button("Button31", "absolute", "236", "384", "70", "44", null, null, this);
            obj.set_taborder("52");
            obj.set_text("move()");
            this.addChild(obj.name, obj);

            obj = new Button("Button32", "absolute", "316", "384", "70", "44", null, null, this);
            obj.set_taborder("53");
            obj.set_text("resize()");
            this.addChild(obj.name, obj);

            obj = new Button("Button33", "absolute", "236", "438", "134", "44", null, null, this);
            obj.set_taborder("54");
            obj.set_text("bringToFront()");
            this.addChild(obj.name, obj);

            obj = new Button("Button34", "absolute", "396", "384", "70", "44", null, null, this);
            obj.set_taborder("55");
            obj.set_text("destroy()");
            this.addChild(obj.name, obj);

            obj = new Button("Button35", "absolute", "380", "437", "134", "44", null, null, this);
            obj.set_taborder("56");
            obj.set_text("bringToPrev()");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00", "absolute", "660", "5", "100", "307", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox00_innerdataset = new Dataset("ListBox00_innerdataset", this.ListBox00);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">컴온</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아름다운나라</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">애인있어요</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">금요일</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">만져요내몸</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">따라하기</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">벗꽃 말고</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">약속해</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">행복</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">생 모야</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">뜨거운아기</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">연예의 조건</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">꺼저</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">달링</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_taborder("59");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static00", "absolute", "503", "353", "91", "18", null, null, this);
            obj.set_taborder("60");
            obj.set_text("volume");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button37", "absolute", "544", "375", "36", "25", null, null, this);
            obj.set_taborder("61");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("Button38", "absolute", "495", "2", "161", "322", null, null, this);
            obj.set_taborder("62");
            obj.set_text("Button38");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "230", "18", "408", "308", null, null, this);
            obj.set_taborder("63");
            obj.style.set_background("orange");
            obj.style.set_border("1 solid #808080ff");
            obj.style.setStyleValue("background", "disabled", "green");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "3", "3", "400", "300", null, null, this.Div00);
            obj.set_taborder("0");
            obj.style.set_background("white");
            obj.set_text("Div00");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "767", "8", "194", "470", null, null, this);
            obj.set_taborder("66");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "913", "457", "60", "25", null, null, this);
            obj.set_taborder("67");
            obj.set_text("clear");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 408, 308, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("63");
            		p.style.set_background("orange");
            		p.style.set_border("1 solid #808080ff");
            		p.style.setStyleValue("background", "disabled", "green");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 980, 488, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Applet_test");
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
        this.registerScript("MedaiPlayer_demo.xfdl", function() {
        var mediaPlayer00 = null; 
        var TextArea00 = null;

        this.mediaplayer_onload = function(obj,e)
        {
        	mediaPlayer00 = new MediaPlayer("MediaPlayer00", "absolute", "0", "0", "400", "300", null, null, this);
        	TextArea00 = this.TextArea00;
        	mediaPlayer00.set_volume(25);	
        	
        	this.Div00.Div00.addChild(mediaPlayer00.name , mediaPlayer00);
        	mediaPlayer00.show();
        	
        	mediaPlayer00.addEventHandler("onerror", this.media_onerror, this);
        //	mediaPlayer00.addEventHandler("oncurrenttimechanged", this.media_oncurrenttimechanged, this);
        	mediaPlayer00.addEventHandler("onplaystatuschanged", this.media_onplaystatuschanged, this);
        }

        this.Button03_onclick = function(obj,e)
        {
        	mediaPlayer00.set_adjustalpha(50);
        	trace(mediaPlayer00.adjustalpha);
        	TextArea00.set_value(TextArea00.value + mediaPlayer00.adjustalpha + "\n");
        }

        this.Button05_onclick = function(obj,e)
        {
        	var aa = mediaPlayer00.currenttime;
        //	mediaPlayer00.set_currenttime(25);
        	mediaPlayer00.set_currenttime(8);
        	trace(mediaPlayer00.currenttime);
        	TextArea00.set_value(TextArea00.value + "pre: " + aa + ", post : " + mediaPlayer00.currenttime + "\n");
        }

        this.Button06_onclick = function(obj,e)
        {
        	mediaPlayer00.set_duration();
        	trace(mediaPlayer00.duration);	
        	TextArea00.set_value(TextArea00.value + mediaPlayer00.duration + "\n");
        }

        this.Button07_onclick = function(obj,e)
        {
        	mediaPlayer00.set_mute(!mediaPlayer00.mute);
        	trace(mediaPlayer00.mute);	
        	TextArea00.set_value(TextArea00.value + mediaPlayer00.mute + "\n");
        }

        this.Button08_onclick = function(obj,e)
        {
        	mediaPlayer00.set_loop(!mediaPlayer00.loop);
        	trace(mediaPlayer00.loop);	
        	TextArea00.set_value(TextArea00.value + mediaPlayer00.loop + "\n");
        }

        this.Button09_onclick = function(obj,e)
        {
        	mediaPlayer00.set_controls(!mediaPlayer00.controls);
        	trace(mediaPlayer00.controls);	
        	TextArea00.set_value(TextArea00.value + mediaPlayer00.controls + "\n");
        }

        this.Button10_onclick = function(obj,e)
        {
        // 	mediaPlayer00.set_size();
         	trace(mediaPlayer00.size);
         	TextArea00.set_value(TextArea00.value + mediaPlayer00.size + "\n");

        //	trace(mediaPlayer00._obj_elem._handle.ImageSourceWidth);
        }

        this.Button11_onclick = function(obj,e)
        {
        	mediaPlayer00.set_autoplay(!mediaPlayer00.autoplay);
        	trace(mediaPlayer00.autoplay);	
        	TextArea00.set_value(TextArea00.value + mediaPlayer00.autoplay + "\n");
        }

        this.Button12_onclick = function(obj,e)
        {
        	mediaPlayer00.set_status("ddd");
        	trace(mediaPlayer00.status);
        	TextArea00.set_value(TextArea00.value + mediaPlayer00.status + "\n");
        }

        this.media_volume_up = function(obj,e)
        {
        	var volume = mediaPlayer00.volume;
        	mediaPlayer00.set_volume(volume + 10);
        	trace(mediaPlayer00.volume);	
        	TextArea00.set_value(TextArea00.value + mediaPlayer00.volume + "\n");
        }

        this.media_volume_down = function(obj,e)
        {
        	var volume = mediaPlayer00.volume;
        	mediaPlayer00.set_volume(volume - 10);
        	trace(mediaPlayer00.volume);	
        	TextArea00.set_value(TextArea00.value + mediaPlayer00.volume + "\n");
        }

        this.Button14_onclick = function(obj,e)
        {
        	mediaPlayer00.play();
        }

        this.Button15_onclick = function(obj,e)
        {
        	mediaPlayer00.pause();
        }

        this.Button17_onclick = function(obj,e)
        {
        	mediaPlayer00.stop();
        }

        this.Button22_onclick = function(obj,e)
        {
        	mediaPlayer00.style.set_border("3px solid red");
        }

        this.media_move = function(obj,e)
        {
        	mediaPlayer00.move(100, 100, 800, 600);
        }

        this.media_resize = function(obj,e)
        {
        	mediaPlayer00.resize(200, 150);
        }

        this.media_destroy = function(obj,e)
        {
        	mediaPlayer00.destroy();
        	mediaPlayer00 = null;
        }

        this.media_bringtofront = function(obj,e)
        {
        //	mediaPlayer00.bringToFront();
        	this.Div00.bringToFront();
        }

        this.media_bringtoprev = function(obj,e)
        {
        //	mediaPlayer00.bringToPrev();
        	this.Div00.bringToPrev();
        }

        this.ListBox00_onitemchanged = function(obj,e)
        {
        	var url = "http://121.134.99.168:9090/compWraper/down/";
        	if(this._base_url == "http://172.10.12.61:9090/Career/Base/"){
        		url = "http://172.10.12.61:9090/compWraper/down/";
        	}
         	if(!mediaPlayer00)
         	{
         		mediaPlayer00 = new MediaPlayer("mediaplayer00", "absolute", "0", "0", "400", "300", null, null, this);
         	}
        	switch(obj.index){
        		case 0:
        			mediaPlayer00.set_url(url + "come on.mp4");
        			break;
        		case 1:
        			mediaPlayer00.set_url(url + "beautiful contry.mp4");
        			break;
        		case 2:
        			mediaPlayer00.set_url(url + "tae.mp4");
        			break;
        		case 3:
        			mediaPlayer00.set_url(url + "Friday.mp4");
        			break;
        		case 4:		
        			mediaPlayer00.set_url(url + "touch my body.mp4");
        			break;
        		case 5:		
        			mediaPlayer00.set_url(url + "My Copycat.mp4");
        			break;
        		case 6:		
        			mediaPlayer00.set_url(url + "Not Spring.mp4");
        			break;
        		case 7:		
        			mediaPlayer00.set_url(url + "I Swear.mp4");
        			break;	
        		case 8:		
        			mediaPlayer00.set_url(url + "Happiness.mp4");
        			break;	
        		case 9:		
        			mediaPlayer00.set_url(url + "moya_live.mp4");
        			break;
        		case 10:		
        			mediaPlayer00.set_url(url + "Hot Baby.mp4");
        			break;
        		case 11:		
        			mediaPlayer00.set_url(url + "Love Options.mp4");
        			break;	
        		case 12:		
        			mediaPlayer00.set_url(url + "get out.mp4");
        			break;		
        		case 13:		
        			mediaPlayer00.set_url(url + "Darling.mp4");
        			break;		
        	}
        }

        this.Button38_onclick = function(obj,e)
        {
        	this.Button38.bringToFront();
        	this.Button38.bringToFront();
        }

        this.Button23_onclick = function(obj,e)
        {
        	mediaPlayer00.style.set_bordertype("round 20 20");
        }

        this.Button24_onclick = function(obj,e)
        {
        		mediaPlayer00.set_cssclass("mytheme");
        }

        this.Button25_onclick = function(obj,e)
        {
        		mediaPlayer00.set_taborder(1);
        }

        this.Button26_onclick = function(obj,e)
        {
        		mediaPlayer00.set_tabstop(!mediaPlayer00.tabstop);
        }

        this.Button27_onclick = function(obj,e)
        {
        	mediaPlayer00.set_style("border: 5px dotted blue; background: skyblue; opacity: 30;");
        }

        this.Button28_onclick = function(obj,e)
        {
        	mediaPlayer00.set_visible(!mediaPlayer00.visible);
        }

        this.Button29_onclick = function(obj,e)
        {
        	mediaPlayer00.set_enable(!mediaPlayer00.enable);
        //	this.Div00.set_enable(!mediaPlayer00.enable);
        }

        this.Button30_onclick = function(obj,e)
        {
        	mediaPlayer00.set_visible(!mediaPlayer00.visible);
        }

        this.Button13_onclick = function(obj,e)
        {
        	
        }

        this.media_onerror = function(obj,e)
        {
        //	trace(e);
        	TextArea00.set_value(TextArea00.value + "== error ==\n");
        	TextArea00.set_value(TextArea00.value + e.errortype + "\n");
        	TextArea00.set_value(TextArea00.value + e.errormsg + "\n");
        	TextArea00.set_value(TextArea00.value + e.statuscode + "\n");
        	TextArea00.set_value(TextArea00.value + "===================\n");
        }

        this.media_oncurrenttimechanged = function(obj,e)
        {
        	trace(e.newvalue);
        	TextArea00.set_value(TextArea00.value + "== timechanged ==\n");
        //	TextArea00.set_value(TextArea00.value + e.oldvalue + "\n");
        	TextArea00.set_value(TextArea00.value + e.newvalue + "\n");
        	TextArea00.set_value(TextArea00.value + "===================\n");
        }

        this.media_onplaystatuschanged = function(obj,e)
        {
        	trace(e.newvalue);
        	TextArea00.set_value(TextArea00.value + "== statuschanged ==\n");
        //	TextArea00.set_value(TextArea00.value + e.oldvalue + "\n");
        	TextArea00.set_value(TextArea00.value + e.newvalue + "\n");
        	TextArea00.set_value(TextArea00.value + "===================\n");
        }
        this.Edit00_oneditclick = function(obj,e)
        {
        	
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.TextArea00.set_value("//");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.mediaplayer_onload, this);
            this.Button14.addEventHandler("onclick", this.Button14_onclick, this);
            this.Button15.addEventHandler("onclick", this.Button15_onclick, this);
            this.Button17.addEventHandler("onclick", this.Button17_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.Button11.addEventHandler("onclick", this.Button11_onclick, this);
            this.Button12.addEventHandler("onclick", this.Button12_onclick, this);
            this.Button13.addEventHandler("onclick", this.media_volume_up, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button22.addEventHandler("onclick", this.Button22_onclick, this);
            this.Button23.addEventHandler("onclick", this.Button23_onclick, this);
            this.Button24.addEventHandler("onclick", this.Button24_onclick, this);
            this.Button25.addEventHandler("onclick", this.Button25_onclick, this);
            this.Button26.addEventHandler("onclick", this.Button26_onclick, this);
            this.Button27.addEventHandler("onclick", this.Button27_onclick, this);
            this.Button28.addEventHandler("onclick", this.Button28_onclick, this);
            this.Button29.addEventHandler("onclick", this.Button29_onclick, this);
            this.Button30.addEventHandler("onclick", this.Button30_onclick, this);
            this.Button31.addEventHandler("onclick", this.media_move, this);
            this.Button32.addEventHandler("onclick", this.media_resize, this);
            this.Button33.addEventHandler("onclick", this.media_bringtofront, this);
            this.Button34.addEventHandler("onclick", this.media_destroy, this);
            this.Button35.addEventHandler("onclick", this.media_bringtoprev, this);
            this.ListBox00.addEventHandler("onitemchanged", this.ListBox00_onitemchanged, this);
            this.Button37.addEventHandler("onclick", this.media_volume_down, this);
            this.Button38.addEventHandler("onclick", this.Button38_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("MedaiPlayer_demo.xfdl");

       
    };
}
)();
