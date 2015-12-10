/*!CK:2206623063!*/
/*1449710384,*/
if (self.CavalryLogger) {
    CavalryLogger.start_js(["q0I3I"]);
}

__d("VideoChannelLoggerEvents", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        SESSION_START: "session_start",
        SESSION_PAUSE: "session_pause",
        SESSION_RESUME: "session_resume",
        SESSION_END: "session_end",
        IMPRESSION: "impression",
        VPV: "vpv",
        CLICK: "click",
        AUTO_ADVANCE: "auto_advance",
        STORY_FETCH_RESULTS: "story_fetch_results",
        FETCH_FIRST_STORY: "fetch_first_story_success",
        FETCH_STORIES_FROM_ENTQUERY: "fetch_stories_from_entquery",
        FETCH_STORIES_FORWARD: "fetch_stories_forward",
        FETCH_STORIES_BACKWARD: "fetch_stories_backward",
        FETCH_FIRST_STORY_SUCCESS: "fetch_first_story_success",
        FETCH_FIRST_STORY_ERROR: "fetch_first_story_error",
        FETCH_STORIES_FROM_ENTQUERY_SUCCESS: "fetch_stories_from_entquery_success",
        FETCH_STORIES_FROM_ENTQUERY_ERROR: "fetch_stories_from_entquery_error",
        FETCH_STORIES_FORWARD_SUCCESS: "fetch_stories_forward_success",
        FETCH_STORIES_FORWARD_ERROR: "fetch_stories_forward_error",
        FETCH_STORIES_BACKWARD_SUCCESS: "fetch_stories_backward_success",
        FETCH_STORIES_BACKWARD_ERROR: "fetch_stories_backward_error"
    };
}, null);
__d("VideoChannelLoggerFields", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        EVENT_TARGET: "event_target",
        EVENT_TARGET_INFO: "event_target_info",
        ENTRY_POINT: "entry_point",
        VIDEO_CHAINING_CALLER: "video_chaining_caller",
        EVENT: "event",
        IS_AD: "is_ad",
        IS_EMPLOYEE: "is_employee",
        IS_TEST_USER: "is_test_user",
        PERF_TIME_MS: "perf_time_ms",
        REQUEST_STATUS: "request_status",
        POSITION_IN_CHANNEL: "position_in_channel",
        SESSION_ID: "session_id",
        STORY_ID: "story_id",
        STORY_FETCH_COUNT: "story_fetch_count",
        STORY_FETCH_CURSOR: "story_fetch_cursor",
        STORY_FETCH_LIMIT: "story_fetch_limit",
        TIME_SINCE_START: "time_since_start",
        VIDEO_ID: "video",
        VIDEO_CHANNEL_ID: "video_channel_id",
        VIDEO_CHANNEL_TYPE: "video_channel_type",
        VIDEO_CHANNEL_TITLE: "video_channel_title",
        VIDEO_HOME_SESSION_ID: "video_home_session_id"
    };
}, null);
__d("VideoHomeEvents", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        SESSION_PREFETCH: "session_prefetch",
        SESSION_START: "session_start",
        SESSION_PAUSE: "session_pause",
        SESSION_RESUME: "session_resume",
        SESSION_END: "session_end",
        NAVIGATION: "navigation",
        CONTENT: "content",
        PULL_TO_REFRESH: "pull_to_refresh",
        BADGE_FETCHED: "badge_fetched",
        BADGE_COUNT_FETCH: "badge_count_fetch",
        IMPRESSION: "impression",
        VPV: "vpv",
        CLICK: "click",
        LOAD_LOADING_CARD_VIEW: "load_loading_card_view",
        LOAD_ITEMS_LOADING_CARD_VIEW: "load_items_loading_card_view",
        TTI: "tti",
        E2E: "e2e",
        LOAD_SECTION: "load_section",
        LOAD_ITEMS: "load_items"
    };
}, null);
__d("VideoHomeEventTargets", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        BOOKMARK: "bookmark",
        CHANNEL: "channel",
        STORY: "story",
        VIDEO: "video",
        NONE: "none"
    };
}, null);
__d("VideoHomeExitPointTypes", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        BACK: "back",
        URL: "url",
        BACKGROUND: "background",
        CHANNEL: "channel",
        UNKNOWN: "unknown"
    };
}, null);
__d("VideoHomeLoggerFields", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        BADGE_COUNT: "badge_count",
        BADGE_FETCH_REASON: "badge_fetch_reason",
        CHANNEL_ID: "channel_id",
        CLICK_TARGET: "click_target",
        DATA_SOURCE: "data_source",
        EVENT: "event",
        EVENT_TARGET: "event_target",
        EVENT_TARGET_ID: "event_target_id",
        ENTRY_POINT_TYPE: "entry_point_type",
        ENTRY_POINT_VALUE: "entry_point_value",
        EXIT_POINT_TYPE: "exit_point_type",
        EXIT_POINT_VALUE: "exit_point_value",
        CHANNEL_POSITION: "channel_position",
        IS_EMPLOYEE: "is_employee",
        IS_TEST_USER: "is_test_user",
        INITIAL_REQUEST: "initial_request",
        LOADING_DATA_TYPE: "loading_data_type",
        REQUEST_STATUS: "request_status",
        OLD_BADGE_COUNT: "old_badge_count",
        PERF_TIME_MS: "perf_time_ms",
        POSITION_IN_CHANNEL: "position_in_channel",
        NEW_BADGE_COUNT: "new_badge_count",
        SESSION_ID: "session_id",
        TIME_SINCE_START: "time_since_start",
        VIDEO_ID: "video",
        VIDEO_CHANNEL_TYPE: "video_channel_type",
        VIDEO_CHANNEL_TITLE: "video_channel_title",
        TRACKING_DATA: "tracking_data",
        TAB_OPTION: "tab_option"
    };
}, null);
__d("VideoPlayerInitializationEvent", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        PLAYER_INITIALIZATION: "player_initialization",
        PLAYER_ALLOCATED: "player_allocated",
        REQUESTED_PLAYING: "requested_playing",
        STARTED_PLAYING: "started_playing",
        PLAYER_SENT_REQUEST: "player_sent",
        PLAYER_RECEIVED_FIRST_BYTE: "player_received_first_byte",
        BUFFER_READY: "buffer_ready",
        METADATA_READY: "metadata_ready"
    };
}, null);
__d("VideoPlayerLoggerSource", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        ADS: "ads",
        ANIMATED_IMAGE_SHARE: "animated_image_share",
        BROADCAST_REQUEST_ATTACHMENT: "broadcast_request_attachment",
        EMBEDDED: "embedded",
        EMBEDDED_VIDEO: "embedded_video",
        EMBEDDED_VIDEO_PREVIEW: "embedded_video_preview",
        EMBEDDED_PAGE_PLUGIN: "embedded_page_plugin",
        HTML5: "html5",
        INLINE: "inline",
        CHAINED: "chained",
        CHAINED_SUGGESTION: "chained_suggestion",
        CHANNEL: "channel",
        INSIGHTS: "insights",
        LOOKBACK: "lookback",
        MEDIA_COLLAGE: "media_collage",
        MESSAGING: "messaging",
        MISC: "misc",
        MOBILE: "mobile",
        PAGES_FINCH_MAIN_VIDEO: "pages_finch_main_video",
        PAGES_FINCH_THUMBNAIL_VIDEO: "pages_finch_thumbnail_video",
        PAGES_FINCH_TRAILER: "pages_finch_trailer",
        PAGES_VIDEO_SET: "pages_video_set",
        PERMALINK: "permalink",
        PROFILE_VIDEO: "profile_video",
        REPORT_FLOW: "report_flow",
        SNOWLIFT: "snowlift",
        TRAILER_OG_ATTACHMENT: "trailer_og_attachment",
        TRAILER_TIMELINE_COLLECTIONS: "trailer_timeline_collections",
        TRAILER_TIMELINE_UNIT: "trailer_timeline_unit",
        VIDEO_COPYRIGHT_PREVIEW: "video_copyright_preview",
        VIDEO_HOME_INLINE: "video_home_inline",
        VIDEO_TV: "video_tv",
        VIDEOHUB_PLAYLIST: "videohub_playlist",
        VIDEOHUB_FEATURED: "videohub_featured",
        SLIDESHOW: "slideshow"
    };
}, null);
__d("VideoPlayerVersions", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        HTML5: "html5",
        SILVERCITY: "silvercity",
        PLEASANTVILLE: "pleasantville",
        OLD_API_PSR: "old_api_psr",
        OLD_API_EXO: "old_api_exo",
        OLD_API_EXO_NEW_LIB: "old_api_exo_new_lib",
        LEGACY: "legacy",
        REFACTORED: "refactored",
        FNF: "fnf",
        UNKNOWN: "unknown"
    };
}, null);
__d('MeasuredComponent.react', ['EventListener', 'React', 'ReactDOM', 'SubscriptionsHandler', 'emptyFunction', 'onlyChild', 'requestAnimationFrame'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if (c.__markCompiled) c.__markCompiled();
    var o = i.PropTypes,
        p = i.createClass({
            displayName: 'MeasuredComponent',
            propTypes: {
                onMeasure: o.func.isRequired,
                measureOnEvents: o.array,
                shouldRemeasure: o.func
            },
            getDefaultProps: function() {
                return {
                    onMeasure: l,
                    measureOnEvents: ['resize', 'orientationchange'],
                    shouldRemeasure: l.thatReturnsFalse
                };
            },
            componentWillReceiveProps: function(q) {
                if (q.measureOnEvents !== this.props.measureOnEvents) {
                    this.detachEventListeners();
                    this.attachEventListeners(q.measureOnEvents);
                }
            },
            attachEventListeners: function(q) {
                this._subscriptionsHandler.engage();
                k.prototype.addSubscriptions.apply(this._subscriptionsHandler, q.map((function(r) {
                    return (h.listen(b, r, this.measure));
                }).bind(this)));
            },
            detachEventListeners: function() {
                this._subscriptionsHandler.release();
            },
            measure: function() {
                var q = j.findDOMNode(this).getBoundingClientRect();
                this.props.onMeasure(q);
            },
            componentDidUpdate: function(q, r) {
                if (this.props.shouldRemeasure(q.children, this.props.children)) this.measure();
            },
            componentDidMount: function() {
                this._subscriptionsHandler = new k();
                this.attachEventListeners(this.props.measureOnEvents);
                n(this.measure);
            },
            componentWillUnmount: function() {
                this.detachEventListeners();
                this._subscriptionsHandler = null;
            },
            render: function() {
                return m(this.props.children);
            }
        });
    f.exports = p;
}, null);
__d('forwardEvent', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j, event) {
        return i.addListener(event, function() {
            for (var k = arguments.length, l = Array(k), m = 0; m < k; m++) l[m] = arguments[m];
            return j.emit.apply(j, [event].concat(l));
        });
    }
    f.exports = h;
}, null);
__d("HTMLMediaElementReadyStates", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        HAVE_NOTHING: 0,
        HAVE_METADATA: 1,
        HAVE_CURRENT_DATA: 2,
        HAVE_FUTURE_DATA: 3,
        HAVE_ENOUGH_DATA: 4
    };
    f.exports = h;
}, null);
__d('HVideoPlayerMixin', ['EventListener', 'VideoPlayerLoggerEvent', 'VideoPlayerHTML5Experiments', 'getHTMLMediaElementMutedState', 'performanceAbsoluteNow'], function a(b, c, d, e, f, g, h, i, j, k, l) {
    if (c.__markCompiled) c.__markCompiled();
    var m = -1;

    function n(p, event) {
        var q = event.timeStamp;
        if (q) {
            var r = q.toString().length - Date.now().toString().length;
            if (r !== 0) q = Math.round(q / Math.pow(10, r));
            p.time_ms = q;
        } else p.time_ms = Date.now();
        return p;
    }
    var o = {
        initLogger: function(p, q) {
            var r = this.getSubscriptions();
            this._loggedEvents = {};
            this._logFunction = p;
            this._useEventTime = q;
            var s = this.getVideoElement();
            this._lastStartTimePosition = m;
            this._muted = k(s);
            this._pausedPosition = m;
            this._seeking = false;
            this._seekSourceTimePosition = m;
            this._volume = s.volume;
            this._lastPlayedTime = m;
            if (s.readyState >= s.HAVE_FUTURE_DATA) {
                this._logReadyToPlay();
            } else r.addSubscriptions(h.listen(s, 'canplay', this._logReadyToPlay.bind(this)));
            r.addSubscriptions(h.listen(s, 'pause', this._onPause.bind(this)), h.listen(s, 'playing', this._onPlaying.bind(this)), h.listen(s, 'seeked', this._onSeeked.bind(this)), h.listen(s, 'seeking', this._onSeeking.bind(this)), h.listen(s, 'play', this._onPlay.bind(this)), h.listen(s, 'timeupdate', this._onTimeUpdate.bind(this)), h.listen(s, 'volumechange', this._onVolumeChange.bind(this)));
        },
        _onPlay: function() {
            this._pendingPlayRequest = true;
        },
        _logOnce: function(event, p) {
            if (this._loggedEvents[event]) return;
            this._logEvent(event, p);
        },
        _logEvent: function(event, p) {
            this._loggedEvents[event] = true;
            var q = p ? p : {};
            q.video_id = this.getVideoID();
            if (!q.hasOwnProperty('video_time_position')) q.video_time_position = this.getVideoElement().currentTime.toFixed(2);
            if (!q.time_ms) q.time_ms = j.useMonotonicallyIncreasingTimers ? l() : Date.now();
            q.time = Math.round(q.time_ms / 1000);
            if (this.getAdClientToken) {
                var r = this.getAdClientToken();
                if (r) q.ad_client_token = r;
            }
            if (this.getChainData) {
                var s = this.getChainData();
                if (s) {
                    q.video_chaining_depth_level = s.video_chaining_depth_level;
                    q.video_chaining_session_id = s.video_chaining_session_id;
                }
            }
            if (this.getPlayerFormat) q.player_format = this.getPlayerFormat();
            if (this.getPlayerOrigin) q.player_origin = this.getPlayerOrigin();
            this._logFunction(event, q);
        },
        _logReadyToPlay: function() {
            this._logOnce(i.READY_TO_PLAY);
        },
        _onPause: function(p) {
            var q = this.getVideoElement();
            if (this._pendingPlayRequest) {
                var r = {
                    debug_reason: this.getLastPlayReason()
                };
                this._pendingPlayRequest = false;
                this._logEvent(i.CANCELLED_REQUESTED_PLAYING, r);
                return;
            }
            var event = q.ended ? i.FINISHED_PLAYING : i.PAUSED;
            if (q.currentTime) this._lastPlayedTime = q.currentTime.toFixed(2);
            var s = this._lastPlayedTime,
                t = p.lastPauseReason;
            if (event === i.FINISHED_PLAYING) {
                s = Math.max(s, q.duration);
            } else if (this.preventPauseLoggingInMixin === true) {
                return;
            } else if (this.preventPauseLoggingInMixin === false) t = t || 'unloaded';
            this._logEvent(event, this._amendEventTime({
                video_last_start_time_position: this._lastStartTimePosition === m ? this._lastPlayedTime : this._lastStartTimePosition,
                video_time_position: s,
                debug_reason: t
            }, p));
            this._lastStartTimePosition = m;
        },
        addWatchTimeData: function(p) {
            if (this._lastStartTimePosition != m && this._lastPlayedTime != m) {
                p.video_last_start_time_position = this._lastStartTimePosition;
                p.video_time_position = this._lastPlayedTime;
                this._lastStartTimePosition = m;
            }
            return p;
        },
        getLastPlayReason: function() {
            return null;
        },
        getVideoPlayReason: function() {
            return null;
        },
        _onPlaying: function(p) {
            var q = this.getLastPlayReason();
            this._pendingPlayRequest = false;
            var event = this._loggedEvents[i.STARTED_PLAYING] ? i.UNPAUSED : i.STARTED_PLAYING,
                r = {
                    debug_reason: q,
                    video_play_reason: this.getVideoPlayReason()
                };
            this._logEvent(event, this._amendEventTime(r, p));
            this._lastStartTimePosition = this.getVideoElement().currentTime.toFixed(2);
            this._lastPlayedTime = this.getVideoElement().currentTime.toFixed(2);
        },
        _onSeeked: function(p) {
            var q = {
                video_seek_source_time_position: this._seekSourceTimePosition
            };
            if (this._lastStartTimePosition !== m) {
                q.video_last_start_time_position = this._lastStartTimePosition;
            } else q.video_last_start_time_position = this._seekSourceTimePosition;
            this._logEvent(i.SCRUBBED, this._amendEventTime(q, p));
            var r = this.getVideoElement();
            if (r.paused) {
                this._lastStartTimePosition = m;
            } else this._lastStartTimePosition = r.currentTime;
            this._seekSourceTimePosition = m;
            this._seeking = false;
        },
        _onSeeking: function() {
            if (!this._seeking) {
                this._seekSourceTimePosition = this.getVideoElement().currentTime.toFixed(2);
                this._seeking = true;
            }
        },
        _onTimeUpdate: function() {
            var p = this.getVideoElement();
            if (!p.paused) this._lastPlayedTime = p.currentTime.toFixed(2);
        },
        _onVolumeChange: function(p) {
            var q = this.getVideoElement(),
                r = {},
                event = null;
            if (q.muted !== this._muted && q.volume === this._volume && q.volume > 0) {
                event = q.muted ? i.MUTED : i.UNMUTED;
            } else {
                event = q.volume > this._volume ? i.VOLUME_INCREASE : i.VOLUME_DECREASE;
                r.current_volume = Math.round(q.volume * 100);
            }
            this._logEvent(event, this._amendEventTime(r, p));
            this._muted = q.muted;
            this._volume = q.volume;
        },
        _amendEventTime: function(p, event) {
            if (j.useMonotonicallyIncreasingTimers) return p;
            if (this._useEventTime) return n(p, event);
            return p;
        }
    };
    f.exports = o;
}, null);
__d('VideoChannelViewChainLengthManager', ['guid', 'Map'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = {
        generateNewSessionID: function() {
            this._currentSessionID = null;
            if (this._channelEligibility) this._currentSessionID = h();
            this._videoIDToDepthMap = new i();
        },
        getLoggingData: function() {
            return {
                video_chaining_depth_level: this.getCurrentChainLength(),
                video_chaining_session_id: this.getCurrentSessionID()
            };
        },
        registerChainingInfos: function(k, l) {
            var m = k;
            if (l) {
                var n = l.decode();
                m = n.root_id;
            }
            if (m) m = m.toString();
            this.registerVideoID(m, k);
        },
        registerVideoID: function(k, l, m) {
            this._channelEligibility = m;
            var n = 0;
            if (k !== l) n = 1;
            if (!this._currentRootVideoID || this._currentRootVideoID !== k) {
                this.generateNewSessionID();
                this._currentRootVideoID = k;
                this._chainLength = n;
                this._videoIDToDepthMap.set(l, n);
            }
            if (!this._videoIDToDepthMap.has(l)) {
                this._chainLength++;
                this._videoIDToDepthMap.set(l, this._chainLength);
            }
            this._currentVideoID = l;
        },
        getCurrentSessionID: function() {
            return this._currentSessionID;
        },
        getCurrentChainLength: function() {
            if (!this._currentVideoID || !this._videoIDToDepthMap) return null;
            return this._videoIDToDepthMap.get(this._currentVideoID);
        }
    };
    f.exports = j;
}, null);
__d('VideoPlayerLoggerErrors', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = {
        ENTERED_FALLBACK: 'entered_fallback',
        ERROR_CALLING_FLASH: 'error_calling_flash'
    };
}, null);
__d('VideoPlayerLoggerErrorStates', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = {
        PLAYBACK_FAILURE: 'playback_failure',
        PLAYER_FAILURE: 'player_failure'
    };
}, null);
__d('VideoPlayerLoggerFallbackReasons', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = {
        TIMEOUT: 'timeout',
        FLASH_ERROR: 'flash_error',
        FLASH_UNAVAILABLE: 'flash_unavailable'
    };
}, null);
__d('VideoPlayerLoggerPlayerStates', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = {
        STARTED: 'started',
        UNPAUSED: 'unpaused'
    };
}, null);
__d('VideoPlayerLogger', ['Banzai', 'ErrorUtils', 'TimeSpentImmediateActiveSecondsLogger', 'VideoPlayerHTML5Experiments', 'VideoPlayerLoggerEvent', 'VideoPlayerLoggerErrors', 'VideoPlayerLoggerErrorStates', 'VideoPlayerLoggerFallbackReasons', 'VideoPlayerLoggerSource', 'VideoPlayerInitializationEvent', 'VideoPlayerLoggerPlayerStates', 'ex', 'performanceAbsoluteNow'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    if (c.__markCompiled) c.__markCompiled();
    var u = 'video_player';

    function v() {
        return k.useMonotonicallyIncreasingTimers ? t() : Date.now();
    }

    function w(x, y) {
        'use strict';
        this.$VideoPlayerLogger1 = x;
        this.$VideoPlayerLogger2 = null;
        this.$VideoPlayerLogger3 = {};
        this.$VideoPlayerLogger4 = y;
        this.$VideoPlayerLogger5 = 0;
        this.$VideoPlayerLogger6();
    }
    w.prototype.updateSource = function(x) {
        'use strict';
        this.$VideoPlayerLogger1 = x;
    };
    w.prototype.logEvent = function(event, x) {
        'use strict';
        x = babelHelpers._extends({}, x, this.$VideoPlayerLogger4);
        if (this.$VideoPlayerLogger3.hasOwnProperty(event)) {
            x.initial_event = false;
        } else x.initial_event = this.$VideoPlayerLogger3[event] = true;
        if (!x.hasOwnProperty('time_ms')) x.time_ms = v();
        if (!x.hasOwnProperty('time')) x.time = Math.round(x.time_ms / 1000);
        if (this.$VideoPlayerLogger2) Object.assign(x, this.$VideoPlayerLogger2);
        switch (event) {
            case q.PLAYER_INITIALIZATION:
                this.$VideoPlayerLogger7 = x.time_ms;
                break;
            case q.REQUESTED_PLAYING:
            case q.STARTED_PLAYING:
            case q.PLAYER_ALLOCATED:
            case q.PLAYER_SENT_REQUEST:
            case q.PLAYER_RECEIVED_FIRST_BYTE:
            case q.BUFFER_READY:
            case q.METADATA_READY:
                if (!x.initial_event) break;
                x.elapsed_time_since_init = Date.now() - this.$VideoPlayerLogger7;
                break;
        }
        switch (event) {
            case l.REQUESTED_PLAYING:
                this.$VideoPlayerLogger6();
                this.$VideoPlayerLogger8();
                if (this.$VideoPlayerLogger3[l.STARTED_PLAYING]) {
                    x.state = r.UNPAUSED;
                } else x.state = r.STARTED;
                break;
            case l.STARTED_PLAYING:
            case l.UNPAUSED:
            case l.FINISHED_PLAYING:
            case l.CANCELLED_REQUESTED_PLAYING:
            case l.ERROR:
            case l.PAUSED:
                if (event === l.ERROR && x.state !== n.PLAYBACK_FAILURE) break;
                if (event === l.CANCELLED_REQUESTED_PLAYING)
                    if (this.$VideoPlayerLogger3[l.STARTED_PLAYING]) {
                        x.state = r.UNPAUSED;
                    } else x.state = r.STARTED;
                this.$VideoPlayerLogger9();
                this.$VideoPlayerLogger10(x);
                this.$VideoPlayerLogger6();
                break;
        }
        var y = {
            logData: x,
            event: event,
            scriptPath: this.$VideoPlayerLogger11,
            source: this.$VideoPlayerLogger1
        };
        if (!event) i.reportError(new Error(s('VideoPlayerLogger: Missing event name')), false);
        if (this.$VideoPlayerLogger1 === p.ANIMATED_IMAGE_SHARE) return;
        if (x.ad_client_token) {
            h.post(u, y, h.VITAL);
        } else h.post(u, y);
        if (event === l.FINISHED_PLAYING || event === l.PAUSED) {
            var z = x.time_ms || v(),
                aa = x.video_time_position - x.video_last_start_time_position;
            if (aa >= 0) j.maybeReportActiveInterval('video', z - Math.floor(aa * 1000), z);
        }
    };
    w.prototype.setScriptPath = function(x) {
        'use strict';
        this.$VideoPlayerLogger11 = x;
    };
    w.prototype.setFTData = function(x) {
        'use strict';
        this.$VideoPlayerLogger2 = x;
    };
    w.prototype.startBuffering = function() {
        'use strict';
        this.$VideoPlayerLogger8();
    };
    w.prototype.endBuffering = function() {
        'use strict';
        this.$VideoPlayerLogger9();
    };
    w.prototype.$VideoPlayerLogger8 = function() {
        'use strict';
        if (this.$VideoPlayerLogger12 <= 0) this.$VideoPlayerLogger12 = Date.now();
    };
    w.prototype.$VideoPlayerLogger9 = function() {
        'use strict';
        if (this.$VideoPlayerLogger12 > 0) {
            var x = Date.now() - this.$VideoPlayerLogger12;
            this.$VideoPlayerLogger13 = this.$VideoPlayerLogger13 + x;
            this.$VideoPlayerLogger5 = this.$VideoPlayerLogger5 + x;
            this.$VideoPlayerLogger14++;
            this.$VideoPlayerLogger12 = 0;
        }
    };
    w.prototype.getCurrentStallTime = function() {
        'use strict';
        return this.$VideoPlayerLogger5;
    };
    w.prototype.$VideoPlayerLogger10 = function(x) {
        'use strict';
        x.stall_time = Math.max(0, this.$VideoPlayerLogger13);
        x.stall_count = this.$VideoPlayerLogger14;
    };
    w.prototype.$VideoPlayerLogger6 = function() {
        'use strict';
        this.$VideoPlayerLogger13 = 0;
        this.$VideoPlayerLogger12 = 0;
        this.$VideoPlayerLogger14 = 0;
    };
    Object.assign(w, {
        Sources: p,
        Errors: m,
        FallbackReasons: o,
        ErrorStates: n,
        PlayerStates: r
    });
    f.exports = w;
}, null);
__d("XPubcontentRelatedVideoInlineController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/pubcontent\/related_video_inline\/", {
        fbvideo_id: {
            type: "Int",
            required: true
        },
        query_id: {
            type: "String",
            required: true
        },
        mf_story_key: {
            type: "String",
            required: true
        },
        root_video_id: {
            type: "Int"
        }
    });
}, null);
__d('EntstreamAttachmentRelatedFBVideo', ['Arbiter', 'AsyncRequest', 'AttachmentRelatedShareConstants', 'csx', 'cx', 'CSS', 'DOM', 'DOMQuery', 'Event', 'ge', 'Parent', 'VideoPlayerReason', 'XPubcontentRelatedVideoInlineController'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    if (c.__markCompiled) c.__markCompiled();
    var u = {
        addHoverListener: function(v, w) {
            var x = q(w),
                y = n.scry(x, "^div._3f-c")[0];
            p.listen(y, 'mouseover', this.doHover.bind(this, v));
            p.listen(y, 'mouseout', this.doHoverOut.bind(this, v));
        },
        addClickOutListener: function(v, w) {
            var x = q(w);
            p.listen(x, 'click', this.doHoverOut.bind(this, v));
        },
        doHover: function(v) {
            v.play(s.USER);
            v.mute();
        },
        doHoverOut: function(v, w) {
            v.pause(s.USER);
        },
        loadRelatedLSCInlineFBVideoAttachmentInRelatedCard: function(v, w, x, y, z, aa, ba, ca) {
            var da = null;
            if (typeof w === 'string') {
                da = q(w);
            } else da = w;
            if (!da) return;
            var ea = null;
            if (typeof v === 'string') {
                ea = q(v);
            } else ea = v;
            if (!ea) return;
            p.listen(ea, 'click', function(event) {
                var fa = event.srcElement ? event.srcElement : event.target;
                if (fa)
                    for (var ga in aa) {
                        var ha = q(aa[ga]);
                        if (ha && o.contains(ha, fa)) return;
                    }
                if (event.isDefaultRequested()) return;
                event.preventDefault();
                var ia = null;
                if (z) {
                    var ja = n.scry(da, "^ul._5h5a")[0];
                    if (!ja) return;
                    ia = ja.previousSibling;
                } else ia = ea.children[0];
                setTimeout(function() {
                    var ka = t.getURIBuilder();
                    ka.setInt('fbvideo_id', x);
                    ka.setString('query_id', ba);
                    ka.setString('mf_story_key', ca);
                    new i().setURI(ka.getURI()).setRelativeTo(ia).send();
                }, 1000);
            });
        },
        loadRelatedLSCInlineFBVideoAttachment: function(v, w, x, y, z) {
            var aa = null;
            if (!aa) return;
            p.listen(aa, 'click', function(event) {
                if (event.isDefaultRequested()) return;
                event.preventDefault();
                var ba = "^div._4-u2",
                    ca = "_4zdu",
                    da = n.scry(aa, ba),
                    ea = da.length === 1 ? da[0] : null,
                    fa = ea.parentNode,
                    ga = fa.previousSibling;
                while (!ga) {
                    fa = fa.parentNode;
                    ga = fa.previousSibling;
                }
                if (!m.hasClass(ga, ca)) {
                    var ha = n.create('div', {
                            className: ca
                        }),
                        ia = n.insertBefore(ea.parentNode, ha),
                        ja = ia.length >= 1 ? ia[0] : null;
                } else ja = ga;
                if (ja.childNodes[0]) m.hide(ja.childNodes[0]);
                var ka = "div._4icy",
                    la = n.scry(fa, ka)[0];
                if (la) {
                    var ma = "_4icx";
                    m.setClass(la, ma);
                }
                setTimeout(function() {
                    var na = t.getURIBuilder();
                    na.setInt('fbvideo_id', w);
                    na.setString('query_id', y);
                    na.setString('mf_story_key', z);
                    new i().setURI(na.getURI()).setRelativeTo(ja).send();
                    if (x) h.inform(j.FBVIDEO_CLICK, {
                        attachment: aa,
                        fbvideo_id: w,
                        continued_chaining: true
                    });
                    if (la)
                        if (x) {
                            n.remove(la);
                        } else m.setClass(la, "_4icy");
                }, 1000);
            });
        },
        loadRelatedFBVideos: function(v, w) {
            var x = q(v);
            if (!x) return;
            var y = "_4zdu",
                z = r.byClass(x, y);
            if (z) return;
            var aa = p.listen(x, 'click', function() {
                aa.remove();
                h.inform(j.FBVIDEO_CLICK, {
                    attachment: x,
                    fbvideo_id: w
                });
            });
        }
    };
    f.exports = u;
}, null);
__d('flash-js', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h() {}
    Object.assign(h, {
        INIT: 'flash/init',
        READY: 'flash/ready',
        FAILED: 'flash/failed'
    });
    f.exports = h;
}, null);
__d('legacy:flash-js', ['flash-js'], function a(b, c, d, e) {
    if (c.__markCompiled) c.__markCompiled();
    b.Flash = c('flash-js');
}, 3);
__d('dispatchEvent', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j) {
        var k;
        if (typeof b.Event === 'function') {
            k = new b.Event(j);
        } else {
            k = b.document.createEvent('Event');
            k.initEvent(j, true, true);
        }
        i.dispatchEvent(k);
    }
    f.exports = h;
}, null);
__d('swfobject', ['AsyncRequest', 'Bootloader', 'CSS', 'htmlSpecialChars'], function a(b, c, d, e, f, g, h, i, j, k) {
    if (c.__markCompiled) c.__markCompiled();
    if (typeof l == "undefined") var l = {};
    if (typeof l.util == "undefined") l.util = {};
    if (typeof l.SWFObjectUtil == "undefined") l.SWFObjectUtil = {};
    l.SWFObject = function(n, o, p, q, r, s, t, u, v, w) {
        if (!document.getElementById) return;
        this.DETECT_KEY = w ? w : 'detectflash';
        this.skipDetect = l.util.getRequestParameter(this.DETECT_KEY);
        this.params = {};
        this.variables = {};
        this.attributes = [];
        this.fallback_html = '';
        this.fallback_js_fcn = function() {};
        if (n) this.setAttribute('swf', n);
        if (o) this.setAttribute('id', o);
        if (p) this.setAttribute('width', p);
        if (q) this.setAttribute('height', q);
        this.installedVer = l.SWFObjectUtil.getPlayerVersion();
        if (r) {
            if (!(r instanceof Array)) r = [r];
            var x;
            r.forEach((function(aa) {
                x = new l.PlayerVersion(aa.toString().split('.'));
                if (x.major == this.installedVer.major) {
                    this.setAttribute('version', x);
                    return;
                } else if (!this.getAttribute('version') || x.major < this.getAttribute('version').major) this.setAttribute('version', x);
            }).bind(this));
        }
        if (!window.opera && document.all && this.installedVer.major > 7)
            if (!l.unloadSet) {
                l.SWFObjectUtil.prepUnload = function() {
                    var aa = function() {},
                        ba = function() {};
                    window.attachEvent("onunload", l.SWFObjectUtil.cleanupSWFs);
                };
                window.attachEvent("onbeforeunload", l.SWFObjectUtil.prepUnload);
                l.unloadSet = true;
            }
        if (s) this.addParam('bgcolor', s);
        var y = t ? t : 'high';
        this.addParam('quality', y);
        this.setAttribute('useExpressInstall', false);
        this.setAttribute('doExpressInstall', false);
        var z = u ? u : window.location;
        this.setAttribute('xiRedirectUrl', z);
        this.setAttribute('redirectUrl', '');
        if (v) this.setAttribute('redirectUrl', v);
    };
    l.SWFObject.ieWorkaroundApplied = false;
    l.SWFObject.ensureIEWorkaroundAttached = function() {
        if (!l.SWFObject.ieWorkaroundApplied && document.attachEvent) {
            l.SWFObject.ieWorkaroundApplied = true;
            document.attachEvent('onpropertychange', l.SWFObject.onDocumentPropertyChange);
        }
    };
    l.SWFObject.onDocumentPropertyChange = function(event) {
        if (event.propertyName == "title") {
            var n = document.title;
            if (n != null && n.indexOf('#!') != -1) {
                n = n.substring(0, n.indexOf('#!'));
                document.title = n;
            }
        }
    };
    Object.assign(l.SWFObject.prototype, {
        useExpressInstall: function(n) {
            this.xiSWFPath = !n ? "/swf/expressinstall.swf" : n;
            this.setAttribute('useExpressInstall', true);
        },
        setAttribute: function(n, o) {
            this.attributes[n] = o;
        },
        getAttribute: function(n) {
            return this.attributes[n] || "";
        },
        addParam: function(n, o) {
            this.params[n] = o;
        },
        getParams: function() {
            return this.params;
        },
        addVariable: function(n, o) {
            this.variables[n] = o;
        },
        getVariable: function(n) {
            return this.variables[n] || "";
        },
        getVariables: function() {
            return this.variables;
        },
        getVariablePairs: function() {
            var n = [],
                o, p = this.getVariables();
            for (o in p) n[n.length] = o + "=" + p[o];
            return n.join('&');
        },
        getSWFHTML: function() {
            var n, o, p;
            if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
                if (this.getAttribute("doExpressInstall")) {
                    this.addVariable("MMplayerType", "PlugIn");
                    this.setAttribute('swf', this.xiSWFPath);
                }
                o = {
                    type: 'application/x-shockwave-flash',
                    src: this.getAttribute('swf'),
                    width: this.getAttribute('width'),
                    height: this.getAttribute('height'),
                    style: this.getAttribute('style') || 'display: block;',
                    id: this.getAttribute('id'),
                    name: this.getAttribute('id')
                };
                var q = this.getParams();
                for (var r in q) o[r] = q[r];
                p = this.getVariablePairs();
                if (p) o.flashvars = p;
                n = m('embed', o, null);
            } else {
                if (this.getAttribute("doExpressInstall")) {
                    this.addVariable("MMplayerType", "ActiveX");
                    this.setAttribute('swf', this.xiSWFPath);
                }
                o = {
                    id: this.getAttribute('id'),
                    classid: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
                    width: this.getAttribute('width'),
                    height: this.getAttribute('height'),
                    style: this.getAttribute('style') || 'display: block;'
                };
                var s = m('param', {
                        name: 'movie',
                        value: this.getAttribute('swf')
                    }, null),
                    q = this.getParams();
                for (var r in q) s += m('param', {
                    name: r,
                    value: q[r]
                }, null);
                p = this.getVariablePairs();
                if (p) s += m('param', {
                    name: 'flashvars',
                    value: p
                }, null);
                n = m('object', o, s);
            }
            return n;
        },
        write: function(n) {
            if (this.getAttribute('useExpressInstall')) {
                var o = new l.PlayerVersion([6, 0, 65]);
                if (this.installedVer.versionIsValid(o) && !this.installedVer.versionIsValid(this.getAttribute('version'))) {
                    this.setAttribute('doExpressInstall', true);
                    this.addVariable("MMredirectURL", escape(this.getAttribute('xiRedirectUrl')));
                    document.title = document.title.slice(0, 47) + " - Flash Player Installation";
                    this.addVariable("MMdoctitle", document.title);
                }
            }
            var p = typeof n == 'string' ? document.getElementById(n) : n;
            if (!p) return false;
            j.addClass(p, 'swfObject');
            p.setAttribute('data-swfid', this.getAttribute('id'));
            if (this.skipDetect || this.getAttribute('doExpressInstall') || this.installedVer.versionIsValid(this.getAttribute('version'))) {
                l.SWFObject.ensureIEWorkaroundAttached();
                p.innerHTML = this.getSWFHTML();
                return true;
            } else {
                if (this.getAttribute('redirectUrl') != "") document.location.replace(this.getAttribute('redirectUrl'));
                var q = this.getAttribute('version').major + '.' + this.getAttribute('version').minor + '.' + this.getAttribute('version').release + '.' + this.getAttribute('version').build,
                    r = this.installedVer.major + '.' + this.installedVer.minor + '.' + this.installedVer.release + '.' + this.installedVer.build;
                this.fallback_js_fcn(r, q);
                p.innerHTML = this.fallback_html;
            }
            return false;
        }
    });
    l.SWFObjectUtil.getPlayerVersion = function() {
        var n = new l.PlayerVersion([0, 0, 0, 0]),
            o;
        if (navigator.plugins && navigator.mimeTypes.length) {
            for (var p = 0; p < navigator.plugins.length; p++) try {
                var r = navigator.plugins[p];
                if (r.name == 'Shockwave Flash') {
                    o = new l.PlayerVersion(r.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+(r|d)|\s+b[0-9]+)/, ".").split("."));
                    if (typeof n == 'undefined' || o.major > n.major || o.major == n.major && (o.minor > n.minor || o.minor == n.minor && (o.release > n.release || o.release == n.release && o.build > n.build))) n = o;
                }
            } catch (q) {}
        } else if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) {
            var s = 1,
                t = 3;
            while (s) try {
                t++;
                s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + t);
                n = new l.PlayerVersion([t, 0, 0]);
            } catch (u) {
                s = null;
            }
        } else {
            try {
                var s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            } catch (v) {
                try {
                    var s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    n = new l.PlayerVersion([6, 0, 21]);
                    s.AllowScriptAccess = "always";
                } catch (w) {
                    if (n.major == 6) return n;
                }
                try {
                    s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                } catch (x) {}
            }
            if (s != null) n = new l.PlayerVersion(s.GetVariable("$version").split(" ")[1].split(","));
        }
        return n;
    };
    l.PlayerVersion = function(n) {
        this.major = n[0] != null ? parseInt(n[0], 10) : 0;
        this.minor = n[1] != null ? parseInt(n[1], 10) : 0;
        this.release = n[2] != null ? parseInt(n[2], 10) : 0;
        this.build = n[3] != null ? parseInt(n[3], 10) : 0;
    };
    l.PlayerVersion.prototype.versionIsValid = function(n) {
        if (this.major < n.major) return false;
        if (this.major > n.major) return true;
        if (this.minor < n.minor) return false;
        if (this.minor > n.minor) return true;
        if (this.release < n.release) return false;
        if (this.release > n.release) return true;
        if (this.build < n.build) return false;
        return true;
    };
    l.util = {
        getRequestParameter: function(n) {
            var o = document.location.search || document.location.hash;
            if (n == null) return o;
            if (o) {
                var p = o.substring(1).split("&");
                for (var q = 0; q < p.length; q++)
                    if (p[q].substring(0, p[q].indexOf("=")) == n) return p[q].substring(p[q].indexOf("=") + 1);
            }
            return "";
        }
    };
    l.SWFObjectUtil.cleanupSWFs = function() {
        var n = document.getElementsByTagName("OBJECT");
        for (var o = n.length - 1; o >= 0; o--) {
            n[o].style.display = 'none';
            for (var p in n[o])
                if (typeof n[o][p] == 'function') n[o][p] = function() {};
        }
    };
    if (!document.getElementById && document.all) document.getElementById = function(n) {
        return document.all[n];
    };
    l.spawn_flash_update_dialog = function() {
        new h().setURI('/ajax/flash_update_dialog.php').setMethod('GET').setReadOnly(true).send();
    };
    l.showFlashErrorDialog = function(n, o) {
        i.loadModules(["ErrorDialog"], function(p) {
            p.show(n, o);
        });
    };

    function m(n, o, p) {
        var q = /^[A-Za-z0-9\-]+$/;
        if (!n.match(q)) throw new Error('Invalid tag ' + n);
        var r = '<' + n;
        for (var s in o) {
            if (!s.match(q)) throw new Error('Invalid attr ' + s);
            r += ' ' + s + '="' + k(o[s]) + '"';
        }
        if (p === null) {
            return r + '/>';
        } else return r + '>' + p + '</' + n + '>';
    }
    f.exports = b.deconcept || l;
}, null);
__d('legacy:swfobject', ['swfobject'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    b.deconcept = h;
    b.SWFObject = h.SWFObject;
    b.showFlashErrorDialog = h.showFlashErrorDialog;
}, 3);
__d('VideoChannelLogger', ['Arbiter', 'Banzai', 'BanzaiLogger', 'Run', 'VideoChannelLoggerEvents', 'VideoChannelLoggerFields', 'VideoChannelViewChainLengthManager'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if (c.__markCompiled) c.__markCompiled();
    var o = 0,
        p = null,
        q = null,
        r = 0,
        s = null,
        t = {
            startSession: function(u, v, w) {
                p = v;
                q = w;
                h.inform('LogEnterChannel', v);
                n.registerVideoID(u, u);
                var x = {};
                x[m.EVENT] = l.SESSION_START;
                t.log(x);
                o = Date.now();
                k.onLeave(t.endSession);
                i.subscribe(i.SHUTDOWN, t.endSession);
            },
            endSession: function() {
                if (p) {
                    h.inform('LogExitChannel', p);
                    var u = {};
                    u[m.EVENT] = l.SESSION_END;
                    t.log(u);
                    p = null;
                    q = null;
                    s = null;
                    o = 0;
                }
            },
            setOffset: function(u) {
                r = u;
            },
            setPosition: function(u) {
                s = u;
            },
            getPlayerLoggingData: function() {
                if (!p) return {};
                return {
                    video_channel_id: p,
                    position_in_channel: s + r
                };
            },
            log: function(u) {
                u[m.SESSION_ID] = n.getCurrentSessionID();
                u[m.VIDEO_CHANNEL_ID] = p;
                u[m.VIDEO_CHAINING_CALLER] = q;
                if (!(m.POSITION_IN_CHANNEL in u)) u[m.POSITION_IN_CHANNEL] = s + r;
                if (o) {
                    var v = Date.now() - o;
                    u[m.TIME_SINCE_START] = v + .001;
                }
                j.log('VideoChannelLoggerConfig', u);
            }
        };
    f.exports = t;
}, null);
__d('VideoPlayerAdditionalLogDataGetter', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        'use strict';
        if (typeof i === 'function') {
            this.$VideoPlayerAdditionalLogDataGetter1 = null;
            this.$VideoPlayerAdditionalLogDataGetter2 = i;
        } else {
            this.$VideoPlayerAdditionalLogDataGetter1 = i;
            this.$VideoPlayerAdditionalLogDataGetter2 = null;
        }
    }
    h.prototype.get = function() {
        'use strict';
        if (this.$VideoPlayerAdditionalLogDataGetter2) return this.$VideoPlayerAdditionalLogDataGetter2();
        return this.$VideoPlayerAdditionalLogDataGetter1;
    };
    f.exports = h;
}, null);
__d('VideoPlayerApiEvents', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = ['buffered', 'buffering', 'beginPlayback', 'updateStatus', 'logEvent', 'pausePlayback', 'clickVideo', 'clickForTracking', 'finishPlayback', 'unmuteVideo', 'muteVideo', 'changeVolume', 'turnOffAutoplay', 'updateBuffer', 'updateMetadata', 'qualityChange', 'updateViewportBegin', 'updateViewportEnd', 'error', 'loadedSubtitles', 'toggleSubtitles', 'toggleFullscreen', 'seekEnd'];
    f.exports = h;
}, null);
__d('FeedVideoPlayerController', ['Arbiter', 'AttachmentRelatedShareConstants', 'CSS', 'DOM', 'DOMDimensions', 'DOMQuery', 'LitestandStoryInsertionStatus', 'Run', 'Set', 'SubscriptionsHandler', 'VideoAutoplayPlayerBase', 'VideoPlayerAdditionalLogDataGetter', 'VideoPlayerApiEvents', 'VideoPlayerLoggerEvent', 'VideoPlayerLoggerErrors', 'VideoPlayerLoggerErrorStates', 'VideoPlayerReason', 'csx', 'getElementPosition'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    if (c.__markCompiled) c.__markCompiled();
    var aa, ba, ca = 1;
    aa = babelHelpers.inherits(da, r);
    ba = aa && aa.prototype;

    function da(ea, fa) {
        'use strict';
        ba.constructor.call(this);
        this.$FeedVideoPlayerController1 = fa;
        this.$FeedVideoPlayerController2 = ea;
        this.$FeedVideoPlayerController3 = new p();
        this.$FeedVideoPlayerController4 = false;
        if (!this.$FeedVideoPlayerController1.viewport_autoplay) this.$FeedVideoPlayerController3.add('server_blocked');
        this.$FeedVideoPlayerController5 = this.isAutoplayable();
        this.$FeedVideoPlayerController6 = new q();
        o.onLeave((function() {
            this.$FeedVideoPlayerController6.release();
        }).bind(this));
        this.$FeedVideoPlayerController7 = fa.controller;
        this.$FeedVideoPlayerController8 = fa.startsMuted;
        this.$FeedVideoPlayerController9 = this.isAutoplayable();
        if (this.$FeedVideoPlayerController7.getIsInChannel() || this.$FeedVideoPlayerController7.isState('playing') && !this.$FeedVideoPlayerController7.isMuted()) this.$FeedVideoPlayerController9 = false;
        this.$FeedVideoPlayerController7.registerOption('FeedAutoplay', 'isAutoplaying', (function() {
            return this.$FeedVideoPlayerController9;
        }).bind(this), (function(ga) {
            this.$FeedVideoPlayerController9 = ga;
        }).bind(this));
        this.$FeedVideoPlayerController7.setAdditionalLogDataGetter(new s((function() {
            return {
                autoplay_eligible: this.isAutoplayable(),
                autoplay_failure_reasons: JSON.stringify(Array.from(this.$FeedVideoPlayerController3))
            };
        }).bind(this)));
        this.$FeedVideoPlayerController10();
        if (this.$FeedVideoPlayerController11('fallback')) {
            this.$FeedVideoPlayerController12('fallback');
            this.$FeedVideoPlayerController13();
            return;
        }
        this.$FeedVideoPlayerController6.addSubscriptions(n.registerBlocker((function() {
            return this.$FeedVideoPlayerController11('playing');
        }).bind(this)));
    }
    da.prototype.$FeedVideoPlayerController14 = function() {
        'use strict';
        return !!this.$FeedVideoPlayerController1.show_play_button_on_finish;
    };
    da.prototype.getDistanceToViewport = function() {
        'use strict';
        if (this.$FeedVideoPlayerController7.isFullscreen()) return 0;
        var ea = l.getViewportDimensions().height,
            fa = this.getDOMPosition();
        if (fa.height === 0) return -Infinity;
        var ga = fa.y + (1 - ca) * fa.height;
        return ga - ea / 2;
    };
    da.prototype.isVisible = function() {
        'use strict';
        if (this.$FeedVideoPlayerController7.isFullscreen()) return true;
        var ea = l.getViewportDimensions().height,
            fa = l.getViewportDimensions().width,
            ga = this.getDOMPosition();
        if (ga.height === 0) return false;
        var ha = ga.y + (1 - ca) * ga.height,
            ia = ga.y + ca * ga.height,
            ja = ga.x + (1 - ca) * ga.width,
            ka = ga.x + ca * ga.width;
        if (ha < 0 || ia >= ea || ja < 0 || ka >= fa) return false;
        var la = this.$FeedVideoPlayerController15();
        if (la !== null) return this.$FeedVideoPlayerController16(ga, z(la));
        return true;
    };
    da.prototype.$FeedVideoPlayerController15 = function() {
        'use strict';
        var ea = m.scry(this.$FeedVideoPlayerController2.video_container, "^div._1yj5");
        if (ea.length > 0) return ea[0];
        return null;
    };
    da.prototype.$FeedVideoPlayerController16 = function(ea, fa) {
        'use strict';
        var ga = ea.x,
            ha = ea.x + ea.width,
            ia = fa.x,
            ja = fa.x + fa.width;
        return ia < ga && ha < ja;
    };
    da.prototype.isAutoplayable = function() {
        'use strict';
        return this.$FeedVideoPlayerController1.viewport_autoplay && !this.$FeedVideoPlayerController17 && !this.$FeedVideoPlayerController3.length;
    };
    da.prototype.$FeedVideoPlayerController18 = function(ea) {
        'use strict';
        if (this.$FeedVideoPlayerController5) {
            this.$FeedVideoPlayerController5 = false;
            this.$FeedVideoPlayerController7.unmute();
        }
        this.$FeedVideoPlayerController7.play(ea);
    };
    da.prototype.getCurrentTimePosition = function() {
        'use strict';
        return this.$FeedVideoPlayerController7.getCurrentTimePosition();
    };
    da.prototype.playWithoutUnmute = function(ea) {
        'use strict';
        this.$FeedVideoPlayerController7.play(ea);
    };
    da.prototype.getVideoID = function() {
        'use strict';
        return this.$FeedVideoPlayerController7.getVideoID();
    };
    da.prototype.$FeedVideoPlayerController19 = function() {
        'use strict';
        this.$FeedVideoPlayerController13();
    };
    da.prototype.$FeedVideoPlayerController10 = function() {
        'use strict';
        var ea = [
                ['finishPlayback', (function() {
                    return this.$FeedVideoPlayerController20();
                }).bind(this)],
                ['turnOffAutoplay', (function(ga) {
                    return (this.$FeedVideoPlayerController21(ga.reason));
                }).bind(this)],
                ['unmuteVideo', (function() {
                    return this.$FeedVideoPlayerController22();
                }).bind(this)],
                ['stateChange', (function() {
                    return this.$FeedVideoPlayerController23();
                }).bind(this)],
                ['switchVideo', (function() {
                    return this.$FeedVideoPlayerController19();
                }).bind(this)],
                ['fallbackPlay', (function() {
                    return this.$FeedVideoPlayerController24();
                }).bind(this)],
                ['buffered', (function() {
                    return this.$FeedVideoPlayerController13();
                }).bind(this)],
                ['buffering', (function() {
                    return this.$FeedVideoPlayerController13();
                }).bind(this)],
                ['enterWatchAndScroll', (function() {
                    return this.$FeedVideoPlayerController25();
                }).bind(this)],
                ['exitWatchAndScroll', (function() {
                    return this.$FeedVideoPlayerController26();
                }).bind(this)],
                ['beginPlayback', (function(ga) {
                    var ha = ga.reason;
                    return this.$FeedVideoPlayerController27(ha);
                }).bind(this)],
                ['toggleFullscreen', (function() {
                    return this.$FeedVideoPlayerController28();
                }).bind(this)],
                ['resumeAutoplay', (function() {
                    return this.$FeedVideoPlayerController29();
                }).bind(this)]
            ],
            fa = (function(event) {
                return this.emit.bind(this, event);
            }).bind(this);
        this.$FeedVideoPlayerController6.addSubscriptions.apply(this.$FeedVideoPlayerController6, ea.map((function(ga) {
            return this.$FeedVideoPlayerController7.addListener.apply(this.$FeedVideoPlayerController7, ga);
        }).bind(this)).concat(t.map((function(event) {
            return this.$FeedVideoPlayerController7.addListener(event, fa(event));
        }).bind(this))));
    };
    da.prototype.$FeedVideoPlayerController28 = function() {
        'use strict';
        if (this.$FeedVideoPlayerController8) this.$FeedVideoPlayerController7.unmute();
    };
    da.prototype.$FeedVideoPlayerController23 = function() {
        'use strict';
        if (this.$FeedVideoPlayerController7.isState('fallback')) this.$FeedVideoPlayerController12('fallback');
        if (!this.$FeedVideoPlayerController7.isState('loading') && this.$FeedVideoPlayerController30) {
            clearTimeout(this.$FeedVideoPlayerController30);
            this.$FeedVideoPlayerController30 = null;
        }
        this.$FeedVideoPlayerController13();
    };
    da.prototype.$FeedVideoPlayerController27 = function(ea) {
        'use strict';
        if (ea === x.USER && this.$FeedVideoPlayerController8) this.$FeedVideoPlayerController7.unmute();
    };
    da.prototype.$FeedVideoPlayerController25 = function() {
        'use strict';
        if (this.$FeedVideoPlayerController2.watchAndScrollOverlay) j.show(this.$FeedVideoPlayerController2.watchAndScrollOverlay);
        this.$FeedVideoPlayerController4 = true;
        this.$FeedVideoPlayerController13();
    };
    da.prototype.$FeedVideoPlayerController26 = function() {
        'use strict';
        if (this.$FeedVideoPlayerController2.watchAndScrollOverlay) j.hide(this.$FeedVideoPlayerController2.watchAndScrollOverlay);
        this.$FeedVideoPlayerController4 = false;
        this.$FeedVideoPlayerController13();
    };
    da.prototype.preload = function() {
        'use strict';
        if (this.$FeedVideoPlayerController7.preload) this.$FeedVideoPlayerController7.preload();
    };
    da.prototype.logDisplayed = function() {
        'use strict';
        this.$FeedVideoPlayerController7.logEvent(u.DISPLAYED, {
            autoplay_reason: this.$FeedVideoPlayerController1.autoplay_reason
        });
    };
    da.prototype.$FeedVideoPlayerController24 = function() {
        'use strict';
        var ea = {
            error: v.ENTERED_FALLBACK,
            state: w.PLAYBACK_FAILURE
        };
        this.$FeedVideoPlayerController7.logEvent(u.ERROR, ea);
    };
    da.prototype.$FeedVideoPlayerController22 = function() {
        'use strict';
        this.$FeedVideoPlayerController8 = false;
        this.$FeedVideoPlayerController31();
        this.$FeedVideoPlayerController9 = false;
    };
    da.prototype.$FeedVideoPlayerController32 = function() {
        'use strict';
        return this.$FeedVideoPlayerController7.getVideosCount() > 1;
    };
    da.prototype.$FeedVideoPlayerController20 = function() {
        'use strict';
        if (this.$FeedVideoPlayerController32()) this.$FeedVideoPlayerController7.nextVideo();
        this.$FeedVideoPlayerController12('has_seen_finished');
    };
    da.prototype.handleFlashApiFactoryError = function(ea, fa) {
        'use strict';
        ba.handleFlashApiFactoryError.call(this, ea, fa);
    };
    da.prototype.$FeedVideoPlayerController12 = function(ea) {
        'use strict';
        this.$FeedVideoPlayerController17 = true;
        this.$FeedVideoPlayerController3.add(ea);
        this.$FeedVideoPlayerController9 = false;
    };
    da.prototype.$FeedVideoPlayerController29 = function() {
        'use strict';
        this.$FeedVideoPlayerController9 = true;
        this.$FeedVideoPlayerController3['delete']('unmuted');
        this.$FeedVideoPlayerController3['delete']('has_seen_finished');
        this.$FeedVideoPlayerController3['delete']('manually_paused');
        this.$FeedVideoPlayerController17 = this.$FeedVideoPlayerController3.length > 0;
    };
    da.prototype.$FeedVideoPlayerController21 = function(ea) {
        'use strict';
        this.$FeedVideoPlayerController12(ea);
        this.$FeedVideoPlayerController9 = false;
    };
    da.prototype.$FeedVideoPlayerController13 = function() {
        'use strict';
        this.$FeedVideoPlayerController33();
    };
    da.prototype.getDOMPosition = function() {
        'use strict';
        return this.$FeedVideoPlayerController7.getDOMPosition();
    };
    da.prototype.pause = function(ea) {
        'use strict';
        this.$FeedVideoPlayerController7.pause(ea);
    };
    da.prototype.$FeedVideoPlayerController33 = function() {
        'use strict';
        if (this.$FeedVideoPlayerController11('fallback')) {
            this.$FeedVideoPlayerController6.release();
            var ea = this.$FeedVideoPlayerController2;
            if (ea.fallback_link) {
                k.remove(this.$FeedVideoPlayerController7.getVideoNode());
                k.replace(ea.video_container, ea.fallback_link);
                k.appendContent(ea.fallback_link, ea.video_container);
            }
        }
    };
    da.prototype.$FeedVideoPlayerController31 = function() {
        'use strict';
        h.inform(i.FBVIDEO_CLICK, {
            attachment: this.$FeedVideoPlayerController2.video_container,
            fbvideo_id: this.$FeedVideoPlayerController1.video_ids[0]
        });
    };
    da.prototype.$FeedVideoPlayerController11 = function(ea) {
        'use strict';
        return this.$FeedVideoPlayerController7.isState(ea);
    };
    da.prototype.getIsInChannel = function() {
        'use strict';
        return this.$FeedVideoPlayerController7.getIsInChannel();
    };
    da.prototype.getVideoPlayerController = function() {
        'use strict';
        return this.$FeedVideoPlayerController7;
    };
    da.prototype.abortLoading = function() {
        'use strict';
        if (!this.$FeedVideoPlayerController1.abort_loading_blocked) this.$FeedVideoPlayerController7.abortLoading();
    };
    f.exports = da;
}, null);
__d('VideoFeedRegister', ['Bootloader', 'FeedVideoPlayerController', 'VideoAutoplayControllerX', 'VideoPlayerFeedRegisterConfig'], function a(b, c, d, e, f, g, h, i, j, k) {
    if (c.__markCompiled) c.__markCompiled();
    var l = {
        registerVideoUnit: function(m, n) {
            var o = new i(m, n);
            if (n.channelVersion) {
                if (n.channelVersion === 'channel_feed') {
                    n.channelModule.registerVideoUnit(o);
                } else if (n.channelVersion === 'channel_view') n.channelModule.registerVideoController(n.controller);
            } else j.registerVideoUnit(o);
            var p = k.watchAndScrollOnLive && n.isLiveStreaming;
            if (k.watchAndScrollV2 || p) k.watchAndScrollModule.registerVideoController(n.controller, k.isSlidingEnabled);
            if (k.disableOffscreenPlayModule) k.disableOffscreenPlayModule.registerVideoUnit(o);
        }
    };
    f.exports = l;
}, null);
__d('VideoWithClickPlayPause', ['VideoPlayerReason', 'logVideosClickTracking'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();

    function j(k) {
        'use strict';
        this.$VideoWithClickPlayPause1 = k;
        this.$VideoWithClickPlayPause2 = this.$VideoWithClickPlayPause1.getVideoNode();
        this.$VideoWithClickPlayPause1.addListener('clickVideo', this.$VideoWithClickPlayPause3.bind(this));
    }
    j.prototype.$VideoWithClickPlayPause3 = function() {
        'use strict';
        if (this.$VideoWithClickPlayPause1.isState('playing')) {
            this.$VideoWithClickPlayPause1.pause(h.USER);
        } else {
            i(this.$VideoWithClickPlayPause2);
            this.$VideoWithClickPlayPause1.play(h.USER);
        }
    };
    f.exports = j;
}, null);
__d('VideoWithFallbackMode', ['VideoPlayerLoggerEvent', 'VideoPlayerLoggerFallbackReasons'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();

    function j(k, l) {
        'use strict';
        this.$VideoWithFallbackMode1 = k;
        if (this.$VideoWithFallbackMode1.isImplementationUnavailable()) {
            this.$VideoWithFallbackMode2(i.FLASH_UNAVAILABLE);
            return;
        }
        k.addListener('error', this.$VideoWithFallbackMode3.bind(this));
        if (l.fallbackTimeoutMs) {
            var m = l.fallbackTimeoutMs;
            setTimeout((function() {
                if (this.$VideoWithFallbackMode1.isState('loading')) {
                    this.$VideoWithFallbackMode1.pause();
                    this.$VideoWithFallbackMode2(i.TIMEOUT);
                }
            }).bind(this), m);
        }
    }
    j.prototype.$VideoWithFallbackMode3 = function() {
        'use strict';
        if (this.$VideoWithFallbackMode1.isState('fallback')) return;
        if (this.$VideoWithFallbackMode1.isState('playing')) this.$VideoWithFallbackMode1.pause();
        this.$VideoWithFallbackMode1.abortLoading();
        this.$VideoWithFallbackMode2(i.FLASH_ERROR);
    };
    j.prototype.$VideoWithFallbackMode2 = function(k) {
        'use strict';
        this.$VideoWithFallbackMode1.setState('fallback');
        this.$VideoWithFallbackMode1.logEvent(h.ENTERED_FALLBACK, {
            debug_reason: k
        });
    };
    f.exports = j;
}, null);
__d('VideoWithSequentialAutoplay', ['Arbiter', 'SubscriptionsHandler', 'VideoPlayerReason', 'destroyOnUnload'], function a(b, c, d, e, f, g, h, i, j, k) {
    if (c.__markCompiled) c.__markCompiled();

    function l(m, n) {
        'use strict';
        this.$VideoWithSequentialAutoplay1 = m;
        this.$VideoWithSequentialAutoplay2 = n;
        this.$VideoWithSequentialAutoplay1.addListener('finishPlayback', this.$VideoWithSequentialAutoplay3.bind(this));
        this.$VideoWithSequentialAutoplay4 = new i();
        this.$VideoWithSequentialAutoplay4.addSubscriptions(h.subscribe('nextVideoAutoplay', (function(o, p) {
            if (p.nextVideoID == this.$VideoWithSequentialAutoplay1.getVideoID()) this.$VideoWithSequentialAutoplay1.play(j.AUTOPLAY);
        }).bind(this)));
        k((function() {
            return this.$VideoWithSequentialAutoplay4.release();
        }).bind(this));
    }
    l.prototype.$VideoWithSequentialAutoplay3 = function() {
        'use strict';
        h.inform('nextVideoAutoplay', {
            nextVideoID: this.$VideoWithSequentialAutoplay2
        });
    };
    f.exports = l;
}, null);
__d('AbstractVideoFullscreenControl.react', ['AbstractButton.react', 'React', 'ReactComponentWithPureRenderMixin'], function a(b, c, d, e, f, g, h, i, j) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var k = i.PropTypes,
        l = i.createClass({
            displayName: 'AbstractVideoFullscreenControl',
            mixins: [j],
            propTypes: {
                image: k.element,
                isFullscreen: k.bool,
                onToggleFullscreen: k.func
            },
            getInitialState: function() {
                return {
                    awaitingUpdate: false
                };
            },
            isFullscreen: function() {
                if (this.state.awaitingUpdate) return this.state.isFullscreenOverride;
                return !!this.props.isFullscreen;
            },
            onButtonClick: function() {
                this.props.onToggleFullscreen && this.props.onToggleFullscreen();
            },
            render: function() {
                return (i.createElement(h, babelHelpers._extends({}, this.props, {
                    className: this.props.className,
                    image: this.props.image,
                    onClick: this.onButtonClick
                })));
            }
        });
    f.exports = l;
}, null);
__d('AbstractVideoPlayerApi', ['EventEmitter', 'VideoPlayerApiEvents', 'arrayContains', 'invariant'], function a(b, c, d, e, f, g, h, i, j, k) {
    if (c.__markCompiled) c.__markCompiled();
    var l, m;
    l = babelHelpers.inherits(n, h);
    m = l && l.prototype;

    function n() {
        'use strict';
        m.constructor.call(this);
    }
    n.prototype.addListener = function() {
        'use strict';
        for (var o = arguments.length, p = Array(o), q = 0; q < o; q++) p[q] = arguments[q];
        return m.addListener.apply(this, p);
    };
    n.prototype.emit = function() {
        'use strict';
        for (var o = arguments.length, p = Array(o), q = 0; q < o; q++) p[q] = arguments[q];
        return m.emit.apply(this, p);
    };
    n.prototype.setSphericalViewport = function(o, p) {
        'use strict';
    };
    n.isImplementationUnavailable = function() {
        'use strict';
        return true;
    };
    f.exports = n;
}, null);
__d("VideoConfig", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        Object.assign(this, i);
    }
    f.exports = h;
}, null);
__d("VideoData", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        "use strict";
        this.$VideoData1 = i;
    }
    h.prototype.hasHD = function() {
        "use strict";
        return !!this.$VideoData1.hd_src;
    };
    h.prototype.hasSphericalHD = function() {
        "use strict";
        return !!this.$VideoData1.spherical_hd_src;
    };
    h.prototype.getEncodingTag = function() {
        "use strict";
        return this.$VideoData1.encoding_tag;
    };
    h.prototype.getVideoID = function() {
        "use strict";
        return this.$VideoData1.video_id;
    };
    h.prototype.getRotation = function() {
        "use strict";
        return this.$VideoData1.rotation;
    };
    h.prototype.hasSubtitles = function() {
        "use strict";
        return !!this.$VideoData1.subtitles_src;
    };
    h.prototype.hasDashManifest = function() {
        "use strict";
        return !!this.$VideoData1.dash_manifest;
    };
    h.prototype.getDashManifest = function() {
        "use strict";
        return this.$VideoData1.dash_manifest;
    };
    h.prototype.getSubtitlesSrc = function() {
        "use strict";
        return this.$VideoData1.subtitles_src;
    };
    h.prototype.getPlayableSrcSD = function() {
        "use strict";
        if (this.$VideoData1.sd_src_no_ratelimit) return this.$VideoData1.sd_src_no_ratelimit;
        return this.$VideoData1.sd_src;
    };
    h.prototype.getPlayableSrcHD = function() {
        "use strict";
        if (this.$VideoData1.hd_src_no_ratelimit) return this.$VideoData1.hd_src_no_ratelimit;
        return this.$VideoData1.hd_src;
    };
    h.prototype.getPlayableSrcSphericalSD = function() {
        "use strict";
        return this.$VideoData1.spherical_sd_src;
    };
    h.prototype.getPlayableSrcSphericalHD = function() {
        "use strict";
        return this.$VideoData1.spherical_hd_src;
    };
    h.prototype.getPlayableSrcRateLimitedSD = function() {
        "use strict";
        return this.$VideoData1.sd_src;
    };
    h.prototype.getPlayableSrcRateLimitedHD = function() {
        "use strict";
        return this.$VideoData1.hd_src;
    };
    h.prototype.hasRateLimit = function() {
        "use strict";
        return !!this.$VideoData1.sd_src_no_ratelimit;
    };
    h.prototype.getStreamType = function() {
        "use strict";
        return this.$VideoData1.stream_type;
    };
    h.prototype.isLiveStream = function() {
        "use strict";
        return this.$VideoData1.is_live_stream;
    };
    h.prototype.liveRoutingToken = function() {
        "use strict";
        return this.$VideoData1.live_routing_token;
    };
    h.prototype.getHDTag = function() {
        "use strict";
        return this.$VideoData1.hd_tag;
    };
    h.prototype.getSDTag = function() {
        "use strict";
        return this.$VideoData1.sd_tag;
    };
    h.prototype.getSphericalHDTag = function() {
        "use strict";
        return this.$VideoData1.spherical_hd_tag;
    };
    h.prototype.getSphericalSDTag = function() {
        "use strict";
        return this.$VideoData1.spherical_sd_tag;
    };
    h.prototype.hasSphericalEncoding = function() {
        "use strict";
        return !!this.$VideoData1.spherical_sd_src || !!this.$VideoData1.spherical_hd_src;
    };
    h.prototype.getProjection = function() {
        "use strict";
        return this.$VideoData1.projection;
    };
    f.exports = h;
}, null);
__d('MediaBufferingDetector', ['Event', 'EventEmitter', 'SubscriptionsHandler', 'setInterval', 'clearInterval', 'performanceNow'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
    if (c.__markCompiled) c.__markCompiled();
    var n, o;
    n = babelHelpers.inherits(p, i);
    o = n && n.prototype;

    function p(q) {
        'use strict';
        o.constructor.call(this);
        this.$MediaBufferingDetector1 = q;
        this.$MediaBufferingDetector2 = new j();
        if (!this.$MediaBufferingDetector1.paused) this.$MediaBufferingDetector3();
        this.$MediaBufferingDetector2.addSubscriptions(h.listen(this.$MediaBufferingDetector1, 'playing', (function() {
            return this.$MediaBufferingDetector4();
        }).bind(this)), h.listen(this.$MediaBufferingDetector1, 'pause', (function() {
            return this.$MediaBufferingDetector5();
        }).bind(this)), h.listen(this.$MediaBufferingDetector1, 'timeupdate', (function() {
            return this.$MediaBufferingDetector6();
        }).bind(this)));
    }
    p.prototype.$MediaBufferingDetector7 = function() {
        'use strict';
        var q = m(),
            r = this.$MediaBufferingDetector1.currentTime,
            s = q - this.$MediaBufferingDetector8,
            t = r - this.$MediaBufferingDetector9,
            u = t * 1000,
            v = s - u;
        if (s * .2 < Math.abs(v)) {
            this.$MediaBufferingDetector10();
        } else this.$MediaBufferingDetector11();
        this.$MediaBufferingDetector12();
    };
    p.prototype.$MediaBufferingDetector12 = function() {
        'use strict';
        this.$MediaBufferingDetector8 = m();
        this.$MediaBufferingDetector9 = this.$MediaBufferingDetector1.currentTime;
    };
    p.prototype.$MediaBufferingDetector3 = function() {
        'use strict';
        if (this.$MediaBufferingDetector13) return;
        this.$MediaBufferingDetector12();
        this.$MediaBufferingDetector13 = k((function() {
            return this.$MediaBufferingDetector7();
        }).bind(this), 500);
    };
    p.prototype.$MediaBufferingDetector14 = function() {
        'use strict';
        l(this.$MediaBufferingDetector13);
        this.$MediaBufferingDetector13 = null;
    };
    p.prototype.$MediaBufferingDetector10 = function() {
        'use strict';
        if (this.$MediaBufferingDetector15) return;
        this.$MediaBufferingDetector15 = true;
        this.emit('bufferingStart');
    };
    p.prototype.$MediaBufferingDetector11 = function() {
        'use strict';
        if (!this.$MediaBufferingDetector15) return;
        this.$MediaBufferingDetector15 = false;
        this.emit('bufferingEnd');
    };
    p.prototype.$MediaBufferingDetector4 = function() {
        'use strict';
        this.$MediaBufferingDetector11();
        this.$MediaBufferingDetector3();
    };
    p.prototype.$MediaBufferingDetector5 = function() {
        'use strict';
        this.$MediaBufferingDetector11();
        this.$MediaBufferingDetector14();
    };
    p.prototype.$MediaBufferingDetector6 = function() {
        'use strict';
        this.$MediaBufferingDetector11();
        this.$MediaBufferingDetector14();
        this.$MediaBufferingDetector3();
    };
    p.prototype.destroy = function() {
        'use strict';
        this.$MediaBufferingDetector14();
        this.$MediaBufferingDetector2.release();
    };
    f.exports = p;
}, null);
__d('VideoMimeTypes', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(o, p, q) {
        return o + '; codecs="' + p + ', ' + q + '"';
    }
    var i = 'mp4a.40.2';

    function j(o) {
        return 'avc1.42E0' + o.toString(16).toUpperCase();
    }

    function k(o) {
        return 'avc1.4D40' + o.toString(16).toUpperCase();
    }

    function l(o) {
        return 'avc1.6400' + o.toString(16).toUpperCase();
    }
    var m = 'video/mp4',
        n = {
            h264baseline: h(m, j(30), i),
            h264main30avc: h(m, k(30), i),
            h264main31avc: h(m, k(31), i),
            h264high50avc: h(m, l(50), i),
            h264high51avc: h(m, l(51), i)
        };
    f.exports = n;
}, null);
__d('canVideoPlayType', ['DOM'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = null;

    function j(k) {
        i = i || h.create('video');
        if (!('canPlayType' in i)) return '';
        return i.canPlayType(k);
    }
    f.exports = j;
}, null);
__d('onCanPlayHTMLMediaElement', ['EventListener', 'HTMLMediaElementReadyStates', 'invariant', 'setImmediate'], function a(b, c, d, e, f, g, h, i, j, k) {
    if (c.__markCompiled) c.__markCompiled();

    function l(n) {
        return n >= i.HAVE_FUTURE_DATA;
    }

    function m(n, o) {
        !(n instanceof window.HTMLMediaElement) ? j(0): undefined;
        if (l(n.readyState)) k(o);
        return h.listen(n, 'canplay', o);
    }
    m.once = function(n, o) {
        var p = m(n, (function() {
            if (!p) return;
            p.remove();
            p = null;
            for (var q = arguments.length, r = Array(q), s = 0; s < q; s++) r[s] = arguments[s];
            o.apply(this, r);
        }).bind(this));
    };
    f.exports = m;
}, null);
__d('onLoadedMetadataHTMLMediaElement', ['EventListener', 'HTMLMediaElementReadyStates', 'setImmediate'], function a(b, c, d, e, f, g, h, i, j) {
    if (c.__markCompiled) c.__markCompiled();

    function k(m) {
        return m >= i.HAVE_METADATA;
    }

    function l(m, n) {
        if (k(m.readyState)) j(n);
        return h.listen(m, 'loadedmetadata', n);
    }
    l.once = function(m, n) {
        var o = l(m, (function() {
            o.remove();
            for (var p = arguments.length, q = Array(p), r = 0; r < p; r++) q[r] = arguments[r];
            n.apply(this, q);
        }).bind(this));
    };
    f.exports = l;
}, null);
__d('seekHTMLMediaElementTo', ['EventListener', 'onLoadedMetadataHTMLMediaElement', 'setImmediate'], function a(b, c, d, e, f, g, h, i, j) {
    if (c.__markCompiled) c.__markCompiled();

    function k(l, m, n) {
        if (l.currentTime == m) return n && j(n);
        try {
            l.currentTime = m;
        } catch (o) {}
        if (l.currentTime) {
            var p = h.listen(l, 'seeked', function() {
                p.remove();
                n && n();
            });
        } else i(l, function() {
            l.currentTime = m;
            var q = h.listen(l, 'seeked', function() {
                q.remove();
                n && n();
            });
        });
    }
    f.exports = k;
}, null);
__d('supportsHTML5Video', ['DOM', 'memoize'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = i(function() {
        return !!h.create('video').canPlayType;
    });
}, null);
__d('VideoPlayerHTML5Api', ['AbstractVideoPlayerApi', 'Arbiter', 'Bootloader', 'CSS', 'DOM', 'DOMDimensions', 'EventListener', 'HVideoPlayerMixin', 'MediaBufferingDetector', 'Run', 'SubscriptionsHandler', 'VideoData', 'VideoMimeTypes', 'VideoFrameBuffer', 'VideoPlayerHTML5Experiments', 'VideoPlayerAbortLoadingExperiment', 'VideoPlayerLoggerEvent', 'VideoPlayerReason', 'VideoPlayerVersions', 'canVideoPlayType', 'dispatchEvent', 'classWithMixins', 'cx', 'forwardEvent', 'getHTMLMediaElementMutedState', 'mixin', 'onCanPlayHTMLMediaElement', 'seekHTMLMediaElementTo', 'setImmediate', 'supportsHTML5Video'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka) {
    if (c.__markCompiled) c.__markCompiled();
    var la, ma;

    function na(ra) {
        switch (ra) {
            case 1:
                return 'The fetching process for the media resource was aborted by the ' + 'user agent at the users request.';
            case 2:
                return 'A network error of some description caused the user agent to ' + 'stop fetching the media resource, after the resource was ' + 'established to be usable.';
            case 3:
                return 'An error of some description occurred while decoding the ' + 'media resource, after the resource was established to be usable.';
            case 4:
                return 'The media resource indicated by the src attribute was not ' + 'suitable.';
        }
    }

    function oa(ra) {
        switch (ra) {
            case 1:
                return 'MEDIA_ERR_ABORTED';
            case 2:
                return 'MEDIA_ERR_NETWORK';
            case 3:
                return 'MEDIA_ERR_DECODE';
            case 4:
                return 'MEDIA_ERR_SRC_NOT_SUPPORTED';
            default:
                return 'Error code ' + ra + ' is unknown';
        }
    }
    var pa = -1;
    la = babelHelpers.inherits(qa, ca(h, ga(o)));
    ma = la && la.prototype;

    function qa(ra, sa) {
        'use strict';
        ma.constructor.call(this);
        this.$VideoPlayerHTML5Api1 = ra;
        this.$VideoPlayerHTML5Api2 = this.$VideoPlayerHTML5Api1.id;
        var ta = m.getElementDimensions(this.$VideoPlayerHTML5Api1);
        this.$VideoPlayerHTML5Api3 = ta.width;
        this.$VideoPlayerHTML5Api4 = ta.height;
        if (sa) {
            this.$VideoPlayerHTML5Api5 = sa;
        } else this.$VideoPlayerHTML5Api5 = JSON.parse(this.$VideoPlayerHTML5Api1.getAttribute('data-config'));
        this.$VideoPlayerHTML5Api6 = {};
        this.$VideoPlayerHTML5Api7 = new p(this.$VideoPlayerHTML5Api1);
        this.$VideoPlayerHTML5Api7.addListener('bufferingStart', (function() {
            return this.$VideoPlayerHTML5Api8();
        }).bind(this));
        this.$VideoPlayerHTML5Api7.addListener('bufferingEnd', (function() {
            return this.$VideoPlayerHTML5Api9();
        }).bind(this));
        this.$VideoPlayerHTML5Api10 = pa;
        this.$VideoPlayerHTML5Api11 = fa(this.$VideoPlayerHTML5Api1);
        this.$VideoPlayerHTML5Api12 = this.$VideoPlayerHTML5Api1.volume;
        this.$VideoPlayerHTML5Api13 = false;
        this.$VideoPlayerHTML5Api14 = pa;
        this.$VideoPlayerHTML5Api15 = null;
        this.$VideoPlayerHTML5Api16 = false;
        this.$VideoPlayerHTML5Api17 = false;
        this.$VideoPlayerHTML5Api18 = this.$VideoPlayerHTML5Api1.getAttribute('preload') == 'auto';
        if (this.$VideoPlayerHTML5Api5.lazyPreload)
            if (this.$VideoPlayerHTML5Api5.onafterloadRegister) {
                q.onAfterLoad((function() {
                    return (this.$VideoPlayerHTML5Api1.setAttribute('preload', this.$VideoPlayerHTML5Api5.lazyPreload));
                }).bind(this));
            } else this.$VideoPlayerHTML5Api1.setAttribute('preload', this.$VideoPlayerHTML5Api5.lazyPreload);
        this.$VideoPlayerHTML5Api19 = this.$VideoPlayerHTML5Api5.disableNativeControls;
        this.$VideoPlayerHTML5Api20 = this.$VideoPlayerHTML5Api1.controls;
        this.$VideoPlayerHTML5Api21 = this.$VideoPlayerHTML5Api5.subtitlesActive;
        this.$VideoPlayerHTML5Api22();
        this.preventPauseLoggingInMixin = false;
        this.$VideoPlayerHTML5Api23 = new r();
        this.$VideoPlayerHTML5Api24();
        this.$VideoPlayerHTML5Api25 = this.$VideoPlayerHTML5Api5.useRateLimited;
        this.$VideoPlayerHTML5Api26 = this.$VideoPlayerHTML5Api5.defaultHD;
        this.$VideoPlayerHTML5Api27 = this.$VideoPlayerHTML5Api5.autoFullscreenHD;
        this.switchVideo(0);
        this.initLogger(this.$VideoPlayerHTML5Api28.bind(this), this.$VideoPlayerHTML5Api5.useEventTime);
        this.$VideoPlayerHTML5Api29();
        if (this.$VideoPlayerHTML5Api5.VideoPlayerHTML5Spherical) this.$VideoPlayerHTML5Api30();
    }
    qa.prototype.getAdClientToken = function() {
        'use strict';
        this.$VideoPlayerHTML5Api5.ad_client_token;
    };
    qa.prototype.$VideoPlayerHTML5Api8 = function() {
        'use strict';
        this.emit('buffering');
    };
    qa.prototype.$VideoPlayerHTML5Api9 = function() {
        'use strict';
        this.emit('buffered');
    };
    qa.prototype.getVideoID = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api31) return this.$VideoPlayerHTML5Api31.getVideoID();
        return this.$VideoPlayerHTML5Api5.video_id;
    };
    qa.prototype.getDOMElement = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api1;
    };
    qa.prototype.getVideoElement = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api1;
    };
    qa.prototype.getSubscriptions = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api23;
    };
    qa.onImplementationReady = function(ra, sa) {
        'use strict';
        ja(sa);
    };
    qa.prototype.destroy = function() {
        'use strict';
        this.$VideoPlayerHTML5Api32();
        if (this.$VideoPlayerHTML5Api33) l.remove(this.$VideoPlayerHTML5Api33);
    };
    qa.prototype.getVideoInfo = function() {
        'use strict';
        if (!this.$VideoPlayerHTML5Api31) return null;
        return {
            isHD: this.$VideoPlayerHTML5Api26,
            streamType: this.$VideoPlayerHTML5Api31.getStreamType(),
            hasHD: this.hasHD(),
            areSubtitlesActive: this.areSubtitlesActive(),
            isMuted: this.isMuted(),
            isPlaying: this.$VideoPlayerHTML5Api34,
            playbackDuration: this.getPlaybackDuration(),
            volume: this.getVolume(),
            resourceUrl: this.$VideoPlayerHTML5Api35 ? 'DASH manifest' : this.$VideoPlayerHTML5Api36(),
            hasSubtitles: this.$VideoPlayerHTML5Api31.hasSubtitles(),
            hasUnlimitedSrc: this.$VideoPlayerHTML5Api31.hasRateLimit(),
            useUnlimitedSrc: !this.$VideoPlayerHTML5Api25,
            projection: this.$VideoPlayerHTML5Api37(),
            tagSD: this.$VideoPlayerHTML5Api38 ? this.$VideoPlayerHTML5Api31.getSphericalSDTag() : this.$VideoPlayerHTML5Api31.getSDTag(),
            tagHD: this.$VideoPlayerHTML5Api38 ? this.$VideoPlayerHTML5Api31.getSphericalHDTag() : this.$VideoPlayerHTML5Api31.getHDTag()
        };
    };
    qa.isImplementationUnavailable = function(ra) {
        'use strict';
        if (ra) {
            var sa = aa(t.h264main30avc);
            if (v.relaxedCanPlay) return sa !== 'probably' && sa !== 'maybe';
            return sa !== 'probably';
        }
        return !ka();
    };
    qa.prototype.pause = function(ra) {
        'use strict';
        this.$VideoPlayerHTML5Api15 = ra;
        if (ra === 'unloaded' && !this.$VideoPlayerHTML5Api39()) {
            this.$VideoPlayerHTML5Api28(x.PAUSED, this.addWatchTimeData({
                reason: 'unloaded'
            }));
            this.preventPauseLoggingInMixin = true;
        }
        this.$VideoPlayerHTML5Api40();
        if (this.$VideoPlayerHTML5Api35) {
            this.$VideoPlayerHTML5Api35.pause();
        } else this.$VideoPlayerHTML5Api1.pause();
    };
    qa.prototype.preload = function() {
        'use strict';
        if (!this.$VideoPlayerHTML5Api18) {
            if (this.$VideoPlayerHTML5Api41) this.$VideoPlayerHTML5Api42();
            this.$VideoPlayerHTML5Api18 = true;
            this.$VideoPlayerHTML5Api1.setAttribute('preload', 'auto');
        }
    };
    qa.prototype.play = function(ra) {
        'use strict';
        if (!this.$VideoPlayerHTML5Api43) this.$VideoPlayerHTML5Api43 = ra;
        this.$VideoPlayerHTML5Api44 = ra;
        if (!this.$VideoPlayerHTML5Api39()) {
            this.$VideoPlayerHTML5Api45();
            return;
        }
        this.$VideoPlayerHTML5Api16 = true;
        if (this.$VideoPlayerHTML5Api41) {
            ba(this.$VideoPlayerHTML5Api1, 'play');
            this.$VideoPlayerHTML5Api42();
            this.$VideoPlayerHTML5Api17 = true;
            return;
        }
        this.$VideoPlayerHTML5Api46();
    };
    qa.prototype.$VideoPlayerHTML5Api40 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api17 && this.$VideoPlayerHTML5Api1.paused) ba(this.$VideoPlayerHTML5Api1, 'pause');
        this.$VideoPlayerHTML5Api47();
    };
    qa.prototype.$VideoPlayerHTML5Api47 = function() {
        'use strict';
        this.$VideoPlayerHTML5Api16 = false;
        this.$VideoPlayerHTML5Api17 = false;
    };
    qa.prototype.$VideoPlayerHTML5Api48 = function() {
        'use strict';
        this.$VideoPlayerHTML5Api1.setAttribute('preload', 'auto');
        this.$VideoPlayerHTML5Api18 = true;
        this.$VideoPlayerHTML5Api1.load();
        this.$VideoPlayerHTML5Api1.muted = this.$VideoPlayerHTML5Api11;
    };
    qa.prototype.seek = function(ra) {
        'use strict';
        this.$VideoPlayerHTML5Api1.currentTime = ra;
    };
    qa.prototype.removeRotation = function() {
        'use strict';
        k.removeClass(this.$VideoPlayerHTML5Api1, "_56jr");
        k.removeClass(this.$VideoPlayerHTML5Api1, "_56js");
        k.removeClass(this.$VideoPlayerHTML5Api1, "_56jt");
        this.$VideoPlayerHTML5Api1.style.marginLeft = '';
        this.$VideoPlayerHTML5Api1.style.marginTop = '';
        this.$VideoPlayerHTML5Api1.style.width = '';
        this.$VideoPlayerHTML5Api1.style.height = '';
    };
    qa.prototype.applyRotation = function(ra) {
        'use strict';
        if (!ra) return;
        k.conditionClass(this.$VideoPlayerHTML5Api1, "_56jr", ra == 90);
        k.conditionClass(this.$VideoPlayerHTML5Api1, "_56js", ra == 180);
        k.conditionClass(this.$VideoPlayerHTML5Api1, "_56jt", ra == 270);
        if (ra == 180) return;
        var sa = this.$VideoPlayerHTML5Api4,
            ta = this.$VideoPlayerHTML5Api3,
            ua = (sa - ta) / 2,
            va = (ta - sa) / 2;
        this.$VideoPlayerHTML5Api1.style.marginLeft = va + 'px';
        this.$VideoPlayerHTML5Api1.style.marginTop = ua + 'px';
        this.$VideoPlayerHTML5Api1.style.height = ta + 'px';
        this.$VideoPlayerHTML5Api1.style.width = sa + 'px';
    };
    qa.prototype.switchVideo = function(ra) {
        'use strict';
        if (!this.$VideoPlayerHTML5Api5.videoData || this.$VideoPlayerHTML5Api5.videoData.length <= ra) return;
        this.$VideoPlayerHTML5Api31 = new s(this.$VideoPlayerHTML5Api5.videoData[ra]);
        if (this.$VideoPlayerHTML5Api31.hasDashManifest() && this.$VideoPlayerHTML5Api5.VideoPlayerHTML5Shaka && this.$VideoPlayerHTML5Api5.VideoPlayerHTML5Shaka.isSupported()) {
            this.$VideoPlayerHTML5Api7.destroy();
            this.$VideoPlayerHTML5Api35 = new this.$VideoPlayerHTML5Api5.VideoPlayerHTML5Shaka(this.$VideoPlayerHTML5Api1, this.$VideoPlayerHTML5Api31.getDashManifest(), {
                playHighQualityTrack: this.$VideoPlayerHTML5Api26
            });
            this.$VideoPlayerHTML5Api35.addListener('bufferingStart', (function() {
                return this.$VideoPlayerHTML5Api8();
            }).bind(this));
            this.$VideoPlayerHTML5Api35.addListener('bufferingEnd', (function() {
                return this.$VideoPlayerHTML5Api9();
            }).bind(this));
            this.$VideoPlayerHTML5Api35.addListener('error', (function() {
                return this.$VideoPlayerHTML5Api49();
            }).bind(this));
            this.$VideoPlayerHTML5Api50.remove();
        } else this.$VideoPlayerHTML5Api1.src = this.$VideoPlayerHTML5Api36();
        this.$VideoPlayerHTML5Api51 && this.$VideoPlayerHTML5Api51.removeSubtitles();
        if (this.$VideoPlayerHTML5Api31.hasSubtitles()) j.loadModules(["VideoPlayerHTML5Subtitles"], (function(sa) {
            if (!this.$VideoPlayerHTML5Api51) {
                this.$VideoPlayerHTML5Api51 = new sa(this.$VideoPlayerHTML5Api1);
                this.$VideoPlayerHTML5Api51.setOnSubtitlesReady((function() {
                    return this.$VideoPlayerHTML5Api52();
                }).bind(this));
            }
            this.$VideoPlayerHTML5Api51.loadSubtitles(this.$VideoPlayerHTML5Api31.getSubtitlesSrc());
        }).bind(this));
        this.removeRotation();
        this.applyRotation(this.$VideoPlayerHTML5Api31.getRotation());
    };
    qa.prototype.switchToStreamType = function(ra) {
        'use strict';
    };
    qa.prototype.replaceVideoDataFromURL = function(ra) {
        'use strict';
    };
    qa.prototype.unmute = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api41) {
            this.$VideoPlayerHTML5Api41.mutedState = false;
            this.$VideoPlayerHTML5Api11 = false;
            this.emit('unmuteVideo');
            return;
        }
        this.$VideoPlayerHTML5Api1.muted = false;
    };
    qa.prototype.mute = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api41) {
            this.$VideoPlayerHTML5Api41.mutedState = true;
            this.$VideoPlayerHTML5Api11 = true;
            this.emit('muteVideo');
            return;
        }
        this.$VideoPlayerHTML5Api1.muted = true;
    };
    qa.prototype.setDimensions = function(ra, sa) {
        'use strict';
        this.removeRotation();
        this.$VideoPlayerHTML5Api3 = ra;
        this.$VideoPlayerHTML5Api4 = sa;
        this.applyRotation(this.$VideoPlayerHTML5Api31.getRotation());
        if (this.$VideoPlayerHTML5Api53) this.$VideoPlayerHTML5Api53.updateDimensions(ra, sa);
        if (this.$VideoPlayerHTML5Api38) this.$VideoPlayerHTML5Api38.setDimensions(ra, sa);
    };
    qa.prototype.$VideoPlayerHTML5Api54 = function() {
        'use strict';
        this.$VideoPlayerHTML5Api1.controls = !this.$VideoPlayerHTML5Api19;
    };
    qa.prototype.$VideoPlayerHTML5Api22 = function() {
        'use strict';
        this.$VideoPlayerHTML5Api1.controls = this.$VideoPlayerHTML5Api20 && !this.$VideoPlayerHTML5Api19;
    };
    qa.prototype.$VideoPlayerHTML5Api24 = function() {
        'use strict';
        this.$VideoPlayerHTML5Api50 = n.listen(this.$VideoPlayerHTML5Api1, 'error', this.$VideoPlayerHTML5Api49.bind(this));
        this.$VideoPlayerHTML5Api23.addSubscriptions(this.$VideoPlayerHTML5Api50, n.listen(this.$VideoPlayerHTML5Api1, 'playing', this.$VideoPlayerHTML5Api55.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'play', this.$VideoPlayerHTML5Api45.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'ended', this.$VideoPlayerHTML5Api56.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'waiting', this.$VideoPlayerHTML5Api57.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'pause', this.$VideoPlayerHTML5Api58.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'volumechange', this.$VideoPlayerHTML5Api59.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'mousedown', this.$VideoPlayerHTML5Api60.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'mouseup', this.$VideoPlayerHTML5Api61.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'timeupdate', this.$VideoPlayerHTML5Api62.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'click', this.$VideoPlayerHTML5Api63.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'loadedmetadata', this.$VideoPlayerHTML5Api64.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'progress', this.$VideoPlayerHTML5Api65.bind(this)), n.listen(this.$VideoPlayerHTML5Api1, 'seeked', this.$VideoPlayerHTML5Api66.bind(this)), n.capture(this.$VideoPlayerHTML5Api1.parentNode, 'pause', this.$VideoPlayerHTML5Api67.bind(this)));
        if (this.$VideoPlayerHTML5Api38) this.$VideoPlayerHTML5Api23.addSubscriptions(this.$VideoPlayerHTML5Api38.getSubscriptions());
    };
    qa.prototype.$VideoPlayerHTML5Api67 = function(ra) {
        'use strict';
        if (ra.target !== this.$VideoPlayerHTML5Api1) return;
        if (!this.$VideoPlayerHTML5Api1.ended) {
            if (this.$VideoPlayerHTML5Api15 === 'unloaded') {
                this.preventPauseLoggingInMixin = false;
                ra.preventDefault();
                ra.stopPropagation();
            }
            ra.lastPauseReason = this.$VideoPlayerHTML5Api15;
        }
    };
    qa.prototype.$VideoPlayerHTML5Api65 = function() {
        'use strict';
        var ra = this.$VideoPlayerHTML5Api1.buffered,
            sa = 0,
            ta = 0,
            ua = ra.length;
        while (ua-- > 0) {
            var va = ra.end(ua),
                wa = ra.start(ua);
            if (wa <= this.$VideoPlayerHTML5Api1.currentTime) {
                ta = wa;
                sa = va - wa;
                break;
            }
        }
        this.$VideoPlayerHTML5Api29();
        this.$VideoPlayerHTML5Api68('flash/updateBuffer', {
            duration: sa,
            offset: ta
        });
    };
    qa.prototype.$VideoPlayerHTML5Api29 = function() {
        'use strict';
        clearTimeout(this.$VideoPlayerHTML5Api69);
        if (this.$VideoPlayerHTML5Api1.networkState === this.$VideoPlayerHTML5Api1.NETWORK_LOADING) this.$VideoPlayerHTML5Api69 = setTimeout((function() {
            return this.$VideoPlayerHTML5Api70();
        }).bind(this), qa.networkTimeout);
    };
    qa.prototype.$VideoPlayerHTML5Api70 = function() {
        'use strict';
        var ra = this.$VideoPlayerHTML5Api1.buffered,
            sa = 0;
        for (var ta = 0; ta < ra.length; ta++) {
            var ua = ra.start(ta),
                va = ra.end(ta);
            sa += va - ua;
        }
        this.$VideoPlayerHTML5Api28(x.NETWORK_TIMEOUT, {
            buffered: sa
        });
    };
    qa.prototype.$VideoPlayerHTML5Api62 = function() {
        'use strict';
        var ra;
        if (this.$VideoPlayerHTML5Api41) {
            ra = this.$VideoPlayerHTML5Api41.currentTime;
        } else ra = this.$VideoPlayerHTML5Api1.currentTime;
        this.$VideoPlayerHTML5Api68('flash/updateStatus', {
            position: +ra.toFixed(3)
        });
    };
    qa.prototype.$VideoPlayerHTML5Api63 = function(ra) {
        'use strict';
        if (ra.button !== 0) return;
        this.emit('clickVideo');
        ra.preventDefault();
    };
    qa.prototype.$VideoPlayerHTML5Api39 = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api1.paused;
    };
    qa.prototype.$VideoPlayerHTML5Api71 = function() {
        'use strict';
        var ra = this.$VideoPlayerHTML5Api1.buffered;
        return ra.length && ra.start(0) === 0 && ra.end(0) === this.$VideoPlayerHTML5Api1.duration;
    };
    qa.prototype.$VideoPlayerHTML5Api57 = function() {
        'use strict';
        if (!this.$VideoPlayerHTML5Api71()) {
            this.$VideoPlayerHTML5Api72 = true;
            this.$VideoPlayerHTML5Api68('flash/buffering');
        }
    };
    qa.prototype.setVolume = function(ra) {
        'use strict';
        this.$VideoPlayerHTML5Api1.volume = ra;
    };
    qa.prototype.$VideoPlayerHTML5Api59 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api1.muted !== this.$VideoPlayerHTML5Api11 && this.$VideoPlayerHTML5Api1.volume === this.$VideoPlayerHTML5Api12 && this.$VideoPlayerHTML5Api1.volume > 0) {
            this.$VideoPlayerHTML5Api11 = this.$VideoPlayerHTML5Api1.muted;
            this.$VideoPlayerHTML5Api12 = this.$VideoPlayerHTML5Api1.volume;
            if (!this.$VideoPlayerHTML5Api1.muted) {
                this.$VideoPlayerHTML5Api68('flash/unmuteVideo');
            } else this.$VideoPlayerHTML5Api68('flash/muteVideo');
        } else {
            this.$VideoPlayerHTML5Api11 = this.$VideoPlayerHTML5Api1.muted;
            this.$VideoPlayerHTML5Api12 = this.$VideoPlayerHTML5Api1.volume;
            this.$VideoPlayerHTML5Api68('flash/changeVolume', {
                volume: this.$VideoPlayerHTML5Api1.volume
            });
        }
        if (!this.$VideoPlayerHTML5Api1.muted) this.$VideoPlayerHTML5Api68('flash/turnOffAutoplay', {
            reason: 'unmuted'
        });
    };
    qa.prototype.$VideoPlayerHTML5Api60 = function(ra) {
        'use strict';
        if (ra.button === 0) this.$VideoPlayerHTML5Api13 = true;
    };
    qa.prototype.$VideoPlayerHTML5Api61 = function(ra) {
        'use strict';
        if (ra.button === 0) this.$VideoPlayerHTML5Api13 = false;
    };
    qa.prototype.$VideoPlayerHTML5Api55 = function(ra) {
        'use strict';
        if (this.$VideoPlayerHTML5Api72) {
            this.$VideoPlayerHTML5Api72 = false;
            this.$VideoPlayerHTML5Api68('flash/buffered');
        }
    };
    qa.prototype.$VideoPlayerHTML5Api45 = function() {
        'use strict';
        this.$VideoPlayerHTML5Api34 = true;
        this.$VideoPlayerHTML5Api54();
        this.$VideoPlayerHTML5Api68('flash/beginPlayback', {
            position: this.$VideoPlayerHTML5Api1.currentTime.toFixed(2),
            reason: this.$VideoPlayerHTML5Api44
        });
        this.$VideoPlayerHTML5Api29();
    };
    qa.prototype.$VideoPlayerHTML5Api58 = function(ra) {
        'use strict';
        if (this.$VideoPlayerHTML5Api1.ended) {
            this.$VideoPlayerHTML5Api34 = false;
            return;
        }
        if (this.$VideoPlayerHTML5Api1.seeking && this.$VideoPlayerHTML5Api15 === y.SEEK) return;
        if (this.$VideoPlayerHTML5Api13) return;
        if (this.$VideoPlayerHTML5Api15 === y.SEEK) {
            this.$VideoPlayerHTML5Api15 = null;
            return;
        }
        if (this.$VideoPlayerHTML5Api15 === null || this.$VideoPlayerHTML5Api15 === y.USER) this.$VideoPlayerHTML5Api68('flash/turnOffAutoplay', {
            reason: 'manually_paused'
        });
        this.$VideoPlayerHTML5Api15 = null;
        this.$VideoPlayerHTML5Api34 = false;
        this.$VideoPlayerHTML5Api22();
        this.$VideoPlayerHTML5Api68('flash/pausePlayback', {
            position: this.$VideoPlayerHTML5Api1.currentTime.toFixed(2)
        });
    };
    qa.prototype.$VideoPlayerHTML5Api56 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api41) return;
        this.$VideoPlayerHTML5Api22();
        this.$VideoPlayerHTML5Api34 = false;
        this.$VideoPlayerHTML5Api68('flash/finishPlayback');
        this.setSphericalViewport(0, 0);
    };
    qa.prototype.$VideoPlayerHTML5Api66 = function() {
        'use strict';
        this.emit('seekEnd');
    };
    qa.prototype.setSphericalViewport = function(ra, sa) {
        'use strict';
        this.$VideoPlayerHTML5Api38 && this.$VideoPlayerHTML5Api38.setViewport(ra, sa);
    };
    qa.prototype.$VideoPlayerHTML5Api64 = function() {
        'use strict';
        this.$VideoPlayerHTML5Api68('flash/updateMetadata');
    };
    qa.prototype.$VideoPlayerHTML5Api49 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api41 && this.$VideoPlayerHTML5Api5.abortWithEmptySrc) return;
        if (!this.$VideoPlayerHTML5Api1.error) return;
        this.emit('error', {
            error: oa(this.$VideoPlayerHTML5Api1.error.code),
            isPlayback: this.$VideoPlayerHTML5Api16,
            message: na(this.$VideoPlayerHTML5Api1.error.code)
        });
    };
    qa.prototype.$VideoPlayerHTML5Api28 = function(event, ra) {
        'use strict';
        if (event === x.STARTED_PLAYING && this.$VideoPlayerHTML5Api35) ra.longest_init_response_time = this.$VideoPlayerHTML5Api35.getLongestInitResponseTime();
        ra.player_version = z.PLEASANTVILLE;
        ra.projection = this.$VideoPlayerHTML5Api37();
        this.$VideoPlayerHTML5Api68('flash/logEvent', {
            logData: babelHelpers._extends({
                event: event
            }, ra)
        });
    };
    qa.prototype.$VideoPlayerHTML5Api68 = function(event, ra) {
        'use strict';
        i.inform(event, babelHelpers._extends({
            divID: this.$VideoPlayerHTML5Api2
        }, ra));
        this.emit(event.substr('flash/'.length), ra);
    };
    qa.prototype.getLastPlayReason = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api44;
    };
    qa.prototype.getVideoPlayReason = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api43;
    };
    qa.prototype.isMuted = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api11;
    };
    qa.prototype.getPlaybackDuration = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api41) return this.$VideoPlayerHTML5Api41.playbackDuration;
        return this.$VideoPlayerHTML5Api1.duration || 0;
    };
    qa.prototype.getVolume = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api1.volume;
    };
    qa.prototype.hasHD = function() {
        'use strict';
        if (!this.$VideoPlayerHTML5Api31) return false;
        if (this.$VideoPlayerHTML5Api35) return this.$VideoPlayerHTML5Api35.hasMultipleVideoTracks();
        if (this.$VideoPlayerHTML5Api38) return this.$VideoPlayerHTML5Api31.hasSphericalHD();
        return this.$VideoPlayerHTML5Api31.hasHD();
    };
    qa.prototype.isHD = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api26;
    };
    qa.prototype.$VideoPlayerHTML5Api36 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api38) {
            return this.$VideoPlayerHTML5Api26 && this.$VideoPlayerHTML5Api31.hasSphericalHD() ? this.$VideoPlayerHTML5Api31.getPlayableSrcSphericalHD() : this.$VideoPlayerHTML5Api31.getPlayableSrcSphericalSD();
        } else if (this.$VideoPlayerHTML5Api26 && this.$VideoPlayerHTML5Api31.hasHD()) {
            return this.$VideoPlayerHTML5Api73();
        } else return this.$VideoPlayerHTML5Api74();
    };
    qa.prototype.$VideoPlayerHTML5Api73 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api25) {
            return this.$VideoPlayerHTML5Api31.getPlayableSrcRateLimitedHD();
        } else return this.$VideoPlayerHTML5Api31.getPlayableSrcHD();
    };
    qa.prototype.$VideoPlayerHTML5Api74 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api25) {
            return this.$VideoPlayerHTML5Api31.getPlayableSrcRateLimitedSD();
        } else return this.$VideoPlayerHTML5Api31.getPlayableSrcSD();
    };
    qa.prototype.toggleSubtitles = function() {
        'use strict';
        this.$VideoPlayerHTML5Api21 = !this.$VideoPlayerHTML5Api21;
        if (this.$VideoPlayerHTML5Api21) {
            this.$VideoPlayerHTML5Api51 && this.$VideoPlayerHTML5Api51.showSubtitles();
        } else this.$VideoPlayerHTML5Api51 && this.$VideoPlayerHTML5Api51.hideSubtitles();
        this.emit('toggleSubtitles');
    };
    qa.prototype.hasSubtitles = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api31.hasSubtitles();
    };
    qa.prototype.areSubtitlesActive = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api21;
    };
    qa.prototype.areHLSActive = function() {
        'use strict';
    };
    qa.prototype.isRTMP = function() {
        'use strict';
    };
    qa.prototype.$VideoPlayerHTML5Api52 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api21) this.$VideoPlayerHTML5Api51 && this.$VideoPlayerHTML5Api51.showSubtitles();
        this.emit('loadedSubtitles');
    };
    qa.prototype.$VideoPlayerHTML5Api75 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api38) {
            this.$VideoPlayerHTML5Api38.freeze();
            return;
        }
        if (!this.$VideoPlayerHTML5Api53) {
            var ra = m.getElementDimensions(this.$VideoPlayerHTML5Api1),
                sa = l.create('canvas', {
                    width: ra.width,
                    height: ra.height,
                    className: "_22nr"
                });
            l.insertAfter(this.$VideoPlayerHTML5Api1, sa);
            this.$VideoPlayerHTML5Api53 = new u(sa, this.$VideoPlayerHTML5Api1);
        }
        k.show(this.$VideoPlayerHTML5Api53.getDOMNode());
        this.$VideoPlayerHTML5Api53.updateFrameBuffer();
        k.hide(this.$VideoPlayerHTML5Api1);
    };
    qa.prototype.$VideoPlayerHTML5Api32 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api38) {
            this.$VideoPlayerHTML5Api38.unfreeze();
            return;
        }
        if (!this.$VideoPlayerHTML5Api53) return;
        k.hide(this.$VideoPlayerHTML5Api53.getDOMNode());
        k.show(this.$VideoPlayerHTML5Api1);
    };
    qa.prototype.$VideoPlayerHTML5Api42 = function() {
        'use strict';
        if (!this.$VideoPlayerHTML5Api41) return;
        if (this.$VideoPlayerHTML5Api76) return;
        this.$VideoPlayerHTML5Api76 = true;
        this.$VideoPlayerHTML5Api1.src = this.$VideoPlayerHTML5Api36();
        this.$VideoPlayerHTML5Api1.preload = this.$VideoPlayerHTML5Api41.preload;
        ia(this.$VideoPlayerHTML5Api1, this.$VideoPlayerHTML5Api41.currentTime, (function() {
            this.$VideoPlayerHTML5Api32();
            this.$VideoPlayerHTML5Api1.muted = this.$VideoPlayerHTML5Api41.mutedState;
            this.$VideoPlayerHTML5Api76 = false;
            this.$VideoPlayerHTML5Api41 = null;
            ha.once(this.$VideoPlayerHTML5Api1, (function() {
                return this.$VideoPlayerHTML5Api46();
            }).bind(this));
        }).bind(this));
    };
    qa.prototype.abortLoading = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api35) return;
        if (this.$VideoPlayerHTML5Api41) return;
        this.$VideoPlayerHTML5Api75();
        var ra = this.$VideoPlayerHTML5Api1.currentTime,
            sa = this.isMuted(),
            ta = this.$VideoPlayerHTML5Api1.duration,
            ua = this.$VideoPlayerHTML5Api1.paused,
            va = this.$VideoPlayerHTML5Api1.preload;
        this.$VideoPlayerHTML5Api18 = false;
        this.$VideoPlayerHTML5Api41 = {
            mutedState: sa,
            currentTime: ra,
            playbackDuration: ta,
            preload: va
        };
        this.$VideoPlayerHTML5Api1.preload = 'none';
        this.$VideoPlayerHTML5Api1.src = this.$VideoPlayerHTML5Api5.abortWithEmptySrc ? '' : this.$VideoPlayerHTML5Api5.abortDummy || '/video/dummy-400x224.mp4';
        if (!w.withoutLoad) this.$VideoPlayerHTML5Api1.load();
        if (ua && this.$VideoPlayerHTML5Api34) ba(this.$VideoPlayerHTML5Api1, 'pause');
    };
    qa.prototype.toggleHD = function() {
        'use strict';
        if (!this.$VideoPlayerHTML5Api31) return;
        this.$VideoPlayerHTML5Api28(x.PAUSED, this.addWatchTimeData({
            reason: 'toggle_hd'
        }));
        this.$VideoPlayerHTML5Api28(x.REQUESTED_PLAYING, {
            reason: y.USER
        });
        this.$VideoPlayerHTML5Api26 = !this.$VideoPlayerHTML5Api26;
        if (this.$VideoPlayerHTML5Api35) {
            if (this.$VideoPlayerHTML5Api26) {
                this.$VideoPlayerHTML5Api35.selectHighestQualityTrack();
            } else this.$VideoPlayerHTML5Api35.selectLowestQualityTrack();
            this.emit('qualityChange');
            return;
        }
        var ra = this.$VideoPlayerHTML5Api1.currentTime;
        this.$VideoPlayerHTML5Api1.src = this.$VideoPlayerHTML5Api36();
        ha.once(this.$VideoPlayerHTML5Api1, (function() {
            this.$VideoPlayerHTML5Api1.currentTime = ra;
            this.$VideoPlayerHTML5Api46();
            this.emit('qualityChange');
        }).bind(this));
        this.$VideoPlayerHTML5Api16 = true;
        this.$VideoPlayerHTML5Api48();
    };
    qa.prototype.$VideoPlayerHTML5Api30 = function() {
        'use strict';
        if (!this.$VideoPlayerHTML5Api31.hasSphericalEncoding()) {
            ja((function() {
                return this.emit('error', {
                    error: 'SPHERICAL_MISSING_ENCODINGS'
                });
            }).bind(this));
            return;
        }
        var ra = {
            projectionType: this.$VideoPlayerHTML5Api37(),
            fieldOfView: this.$VideoPlayerHTML5Api5.sphericalFieldOfView,
            videoID: this.getVideoID(),
            expansionCoef: 1.01
        };
        if (this.$VideoPlayerHTML5Api5.sphericalConfig) Object.assign(ra, this.$VideoPlayerHTML5Api5.sphericalConfig);
        try {
            this.$VideoPlayerHTML5Api38 = new this.$VideoPlayerHTML5Api5.VideoPlayerHTML5Spherical(this.$VideoPlayerHTML5Api1, ra);
        } catch (sa) {
            ja((function() {
                return this.emit('error', {
                    error: 'SPHERICAL_SETUP_FAILED',
                    message: sa.message
                });
            }).bind(this));
        }
        if (this.$VideoPlayerHTML5Api38) {
            this.$VideoPlayerHTML5Api38.addListener('DOM/click', (function(ta) {
                return this.$VideoPlayerHTML5Api63(ta);
            }).bind(this));
            ['updateViewportBegin', 'updateViewportEnd', 'error'].forEach(ea.bind(null, this.$VideoPlayerHTML5Api38, this));
            if (!this.$VideoPlayerHTML5Api35) this.$VideoPlayerHTML5Api1.src = this.$VideoPlayerHTML5Api36();
        }
    };
    qa.getPlayerVersion = function() {
        'use strict';
        return 'pleasantville';
    };
    qa.prototype.$VideoPlayerHTML5Api37 = function() {
        'use strict';
        return this.$VideoPlayerHTML5Api31.getProjection();
    };
    qa.prototype.$VideoPlayerHTML5Api46 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Api16) {
            if (this.$VideoPlayerHTML5Api17) var ra = n.capture(this.$VideoPlayerHTML5Api1.parentNode, 'play', function(sa) {
                Event.kill(sa);
                ra.remove();
            });
            if (this.$VideoPlayerHTML5Api35) {
                this.$VideoPlayerHTML5Api35.play();
            } else this.$VideoPlayerHTML5Api1.play();
        }
        this.$VideoPlayerHTML5Api47();
    };
    qa.getStreamTypeFromConfig = function(ra) {
        'use strict';
        var sa = new s(ra.videoData[0]);
        return sa.getStreamType();
    };
    qa.networkTimeout = 5000;
    f.exports = qa;
}, null);
__d('VideoPlayButton', ['CSS', 'EventListener', 'VideoDisplayTimePlayButton'], function a(b, c, d, e, f, g, h, i, j) {
    if (c.__markCompiled) c.__markCompiled();

    function k(l, m, n) {
        'use strict';
        this.$VideoPlayButton1 = l;
        this.$VideoPlayButton2 = m;
        if (n) {
            this.$VideoPlayButton3 = n.hiddenAfterFinish;
            this.$VideoPlayButton4 = n.hiddenWhilePaused;
        }
        this.$VideoPlayButton5 = j.getClicked(this.$VideoPlayButton2);
        j.unregister(this.$VideoPlayButton2);
        l.addListener('beginPlayback', this.$VideoPlayButton6.bind(this));
        l.addListener('finishPlayback', this.$VideoPlayButton7.bind(this));
        l.addListener('pausePlayback', this.$VideoPlayButton8.bind(this));
        l.addListener('buffering', this.$VideoPlayButton9.bind(this));
        l.addListener('buffered', this.$VideoPlayButton10.bind(this));
        l.addListener('stateChange', this.$VideoPlayButton11.bind(this));
        l.addListener('playRequested', this.$VideoPlayButton12.bind(this));
        l.addListener('VideoChannelController/exitChannel', this.$VideoPlayButton13.bind(this));
        l.addListener('clickVideo', this.$VideoPlayButton14.bind(this));
        i.listen(this.$VideoPlayButton2, 'click', this.$VideoPlayButton15.bind(this));
        if (this.$VideoPlayButton5) {
            this.$VideoPlayButton15();
            this.$VideoPlayButton5 = false;
        }
        h.show(this.$VideoPlayButton2);
    }
    k.prototype.$VideoPlayButton11 = function() {
        'use strict';
        if (this.$VideoPlayButton1.isState('fallback')) h.show(this.$VideoPlayButton2);
    };
    k.prototype.$VideoPlayButton6 = function() {
        'use strict';
        h.hide(this.$VideoPlayButton2);
    };
    k.prototype.$VideoPlayButton8 = function() {
        'use strict';
        if (this.$VideoPlayButton4) return;
        h.show(this.$VideoPlayButton2);
    };
    k.prototype.$VideoPlayButton12 = function() {
        'use strict';
        h.hide(this.$VideoPlayButton2);
    };
    k.prototype.$VideoPlayButton13 = function() {
        'use strict';
        if (!this.$VideoPlayButton1.isState('playing')) this.$VideoPlayButton8();
    };
    k.prototype.$VideoPlayButton7 = function() {
        'use strict';
        if (this.$VideoPlayButton3 || this.$VideoPlayButton1.getIsInChannel()) return;
        if (this.$VideoPlayButton1.getVideosCount() <= 1) h.show(this.$VideoPlayButton2);
    };
    k.prototype.$VideoPlayButton9 = function() {
        'use strict';
        h.hide(this.$VideoPlayButton2);
    };
    k.prototype.$VideoPlayButton10 = function() {
        'use strict';
        h.hide(this.$VideoPlayButton2);
    };
    k.prototype.$VideoPlayButton15 = function() {
        'use strict';
        this.$VideoPlayButton1.clickVideo();
    };
    k.prototype.$VideoPlayButton14 = function() {
        'use strict';
        h.hide(this.$VideoPlayButton2);
    };
    f.exports = k;
}, null);
__d('MountedContextMenu.react', ['ContextualLayer.react', 'DOMQuery', 'Event', 'Focus', 'LayerHideOnEscape', 'PopoverMenu.react', 'PopoverMenuInterface', 'React', 'ReactDOM', 'ReactElement', 'ReactLayeredComponentMixin', 'SubscriptionsHandler', 'cx', 'isNode'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var v = Object.prototype.hasOwnProperty,
        w = o.PropTypes;

    function x(z, aa, ba, ca, da) {
        var ea = ba.getContent().getBoundingClientRect(),
            fa = ba.getContext().getBoundingClientRect(),
            ga = z - fa.left,
            ha = aa - fa.top;
        switch (da) {
            case 'left':
                ga -= ea.width;
                break;
            case 'center':
                ga -= fa.width * .5;
                break;
            case 'right':
                ga -= fa.width - ea.width;
                break;
            default:
                throw new Error('invalid alignment');
        }
        switch (ca) {
            case 'above':
                break;
            case 'left':
                ga += ea.width;
                ha -= ea.height * .5;
                break;
            case 'right':
                ga -= ea.width;
                ha -= ea.height * .5;
                break;
            case 'below':
                ha -= fa.height;
                break;
            default:
                throw new Error('invalid position');
        }
        return {
            offsetX: ga,
            offsetY: ha
        };
    }
    var y = o.createClass({
        displayName: 'MountedContextMenu',
        mixins: [r],
        propTypes: {
            disableFocusOutline: w.bool,
            menu: function(z, aa, ba) {
                if (!v.call(z, aa)) return new Error(ba + '.' + aa + ' is required');
                var ca = z[aa],
                    da = ca && ca.type;
                if (!(da && da.prototype instanceof n)) return new Error(aa + ' must implement PopoverMenuInterface');
            },
            mountedTriggerElem: function(z, aa, ba) {
                if (!v.call(z, aa)) {
                    return new Error(ba + '.' + aa + ' is required');
                } else if (!u(z[aa])) return new Error(ba + '.' + aa + ' must be a raw DOM node');
            }
        },
        getDefaultProps: function() {
            return {
                disableFocusOutline: false
            };
        },
        getInitialState: function() {
            return {
                shown: false,
                lastOpenedX: 0,
                lastOpenedY: 0,
                offsetX: 0,
                offsetY: 0
            };
        },
        _getTriggerDOMNode: function() {
            return this.props.mountedTriggerElem;
        },
        _getMenuDOMNode: function() {
            var z = this.refs.popover.getMenu();
            return z && z.getRoot();
        },
        _getLayer: function() {
            return this.refs.menuLayer.layer;
        },
        renderLayers: function() {
            var z = this.props.menu,
                aa = z.props.onItemClick,
                ba = this;
            z = q.cloneAndReplaceProps(z, babelHelpers._extends({}, z.props, {
                onItemClick: function() {
                    ba.hide();
                    return aa && aa.apply(this, arguments);
                }
            }));
            return {
                menu: o.createElement(h, {
                    alignment: 'right',
                    behaviors: [l],
                    contextRef: (function() {
                        return this._getTriggerDOMNode();
                    }).bind(this),
                    offsetX: this.state.offsetX,
                    offsetY: this.state.offsetY,
                    position: 'below',
                    ref: 'menuLayer',
                    shown: this.state.shown
                }, o.createElement(m, {
                    alignh: 'left',
                    menu: z,
                    position: 'below',
                    ref: 'popover'
                }, o.createElement('div', {
                    className: "_4345",
                    ref: 'fakeTrigger'
                })))
            };
        },
        render: function() {
            if (this.props.mountedTriggerElem) return null;
        },
        _updatePosition: function(z, aa) {
            var ba = this._getLayer(),
                ca = ba.getOrientation(),
                da = ca.getPosition(),
                ea = ca.getAlignment(),
                fa = x(z, aa, ba, da, ea),
                ga = fa.offsetX,
                ha = fa.offsetY;
            ba.setOffsetX(ga).setOffsetY(ha);
            this.setState({
                offsetX: ga,
                offsetY: ha
            });
        },
        _onContextMenu: function(z) {
            var aa = z.clientX,
                ba = z.clientY;
            z.preventDefault();
            z.stopPropagation();
            this.showAt(aa, ba);
        },
        _onMousedownAnywhere: function(z) {
            var aa = this._getMenuDOMNode(),
                ba = aa && i.contains(aa, z.target),
                ca = z.button === 0;
            if (!(ba && ca)) this.hide();
        },
        _onRealTriggerFocus: function() {
            if (this.props.disableFocusOutline) k.setWithoutOutline(this._getTriggerDOMNode());
        },
        _onFakeTriggerFocus: function() {
            var z = this._getTriggerDOMNode();
            if (this.props.disableFocusOutline) {
                k.setWithoutOutline(z);
            } else k.set(z);
            if (this.state.shown) this.hide();
        },
        _onWindowBlur: function() {
            this.hide();
        },
        componentDidMount: function() {
            var z = this._getTriggerDOMNode(),
                aa = p.findDOMNode(this.refs.fakeTrigger),
                ba = this._getLayer(),
                ca = this.refs.popover;
            this._subscriberHandler = new s();
            this._subscriberHandler.addSubscriptions(j.listen(z, 'contextmenu', this._onContextMenu), j.listen(document.body, 'mousedown', this._onMousedownAnywhere), j.listen(z, 'focus', this._onRealTriggerFocus), j.listen(aa, 'focus', this._onFakeTriggerFocus), j.listen(window, 'blur', this._onWindowBlur), ba.subscribe('show', (function() {
                var da = this.state.lastOpenedX,
                    ea = this.state.lastOpenedY;
                this._updatePosition(da, ea);
                ca.showPopover();
            }).bind(this)), ba.subscribe('hide', function() {
                ca.hidePopover();
            }));
        },
        componentWillUnmount: function() {
            this._subscriberHandler && this._subscriberHandler.release();
        },
        show: function() {
            this.setState({
                shown: true
            });
        },
        showAt: function(z, aa) {
            this.setState({
                lastOpenedX: z,
                lastOpenedY: aa
            });
            this.show();
        },
        hide: function() {
            this.setState({
                shown: false
            });
        }
    });
    f.exports = y;
}, null);
__d('VideoSpinner', ['CSS'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();

    function i(j, k) {
        'use strict';
        this.$VideoSpinner1 = k;
        this.$VideoSpinner2 = j;
        j.addListener('beginPlayback', this.$VideoSpinner3.bind(this));
        j.addListener('finishPlayback', this.$VideoSpinner4.bind(this));
        j.addListener('pausePlayback', this.$VideoSpinner5.bind(this));
        j.addListener('playRequested', this.$VideoSpinner6.bind(this));
        j.addListener('buffering', this.$VideoSpinner7.bind(this));
        j.addListener('buffered', this.$VideoSpinner8.bind(this));
        j.addListener('stateChange', this.$VideoSpinner9.bind(this));
    }
    i.prototype.$VideoSpinner7 = function() {
        'use strict';
        h.show(this.$VideoSpinner1);
    };
    i.prototype.$VideoSpinner8 = function() {
        'use strict';
        h.hide(this.$VideoSpinner1);
    };
    i.prototype.$VideoSpinner3 = function() {
        'use strict';
        h.hide(this.$VideoSpinner1);
    };
    i.prototype.$VideoSpinner5 = function() {
        'use strict';
        h.hide(this.$VideoSpinner1);
    };
    i.prototype.$VideoSpinner6 = function() {
        'use strict';
        h.hide(this.$VideoSpinner1);
    };
    i.prototype.$VideoSpinner4 = function() {
        'use strict';
        h.hide(this.$VideoSpinner1);
    };
    i.prototype.$VideoSpinner9 = function() {
        'use strict';
        if (this.$VideoSpinner2.isState('fallback')) h.hide(this.$VideoSpinner1);
    };
    f.exports = i;
}, null);
__d('VideoPlayerHTML5ContextMenu.react', ['ContextualLayer.react', 'DOMQuery', 'Event', 'Focus', 'FullScreen', 'Keys', 'LayerAutoFocus', 'LayerHideOnEscape', 'MountedContextMenu.react', 'React', 'ReactDOM', 'ReactLayeredComponentMixin', 'ReactXUIMenu', 'SubscriptionsHandler', 'VideoContextMenuGK', 'cx', 'fbt', 'isNode'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var z = Object.prototype.hasOwnProperty,
        aa = t.Item,
        ba = q.PropTypes,
        ca = .35,
        da = 6,
        ea = 60,
        fa = q.createClass({
            displayName: 'VideoPlayerHTML5ContextMenu',
            mixins: [s],
            propTypes: {
                videoElem: function(ga, ha, ia) {
                    if (!z.call(ga, ha)) {
                        return new Error(ia + '.' + ha + ' is required');
                    } else if (!y(ga[ha])) return new Error(ia + '.' + ha + ' must be a raw DOM node');
                },
                paused: ba.bool,
                muted: ba.bool,
                permalinkURL: ba.string,
                onTogglePause: ba.func.isRequired,
                onToggleMute: ba.func.isRequired
            },
            getInitialState: function() {
                return {
                    permalinkVisible: false,
                    fullscreened: false,
                    screenWidth: screen.width,
                    screenHeight: screen.height
                };
            },
            componentDidMount: function() {
                var ga = this.refs.permalinkLayer.layer;
                this._subscriberHandler = new u();
                this._subscriberHandler.addSubscriptions(l.subscribe('changed', this._onFullScreenChanged), ga.subscribe('hide', this._onHidePermalinkOverlay), ga.subscribe('show', this._onShowPermalinkOverlay));
            },
            componentWillUnmount: function() {
                this._subscriberHandler && this._subscriberHandler.release();
            },
            _onFullScreenChanged: function() {
                var ga = l.getFullScreenElement(),
                    ha = this.props.videoElem,
                    ia = !!(l.isFullScreen() && ga && ha && i.contains(ga, ha));
                this.setState({
                    fullscreened: ia
                });
            },
            _renderTogglePauseLabel: function() {
                if (this.props.paused) {
                    return x._("Play");
                } else return x._("Pause");
            },
            _renderToggleMuteLabel: function() {
                if (this.props.muted) {
                    return x._("Unmute");
                } else return x._("Mute");
            },
            _onTogglePause: function() {
                this.props.onTogglePause && this.props.onTogglePause();
            },
            _onToggleMute: function() {
                this.props.onToggleMute && this.props.onToggleMute();
            },
            _onShowPermalinkOverlay: function() {
                k.set(r.findDOMNode(this.refs.permalinkText));
                this.setState({
                    permalinkVisible: true
                });
            },
            _onHidePermalinkOverlay: function() {
                this.setState({
                    permalinkVisible: false
                });
            },
            _onPermalinkTextFocus: function() {
                r.findDOMNode(this.refs.permalinkText).select();
            },
            _onPermalinkTextKeyDown: function(ga) {
                if (j.getKeyCode(ga) == m.ESC) this.setState({
                    permalinkVisible: false
                });
            },
            _onPermalinkTextMouseUp: function(ga) {
                ga.preventDefault();
            },
            _getVideoDimensions: function() {
                var ga, ha;
                if (this.state.fullscreened) {
                    ga = this.state.screenWidth;
                    ha = this.state.screenHeight;
                } else {
                    var ia = this.props.videoElem.getBoundingClientRect();
                    ga = ia.width;
                    ha = ia.height;
                }
                return {
                    width: ga,
                    height: ha
                };
            },
            _renderPermalinkLayerContent: function(ga) {
                var ha = this.props.permalinkURL;
                if (ha) {
                    var ia = {
                        width: ga + 'px'
                    };
                    return (q.createElement('div', {
                        className: "_26oo",
                        style: ia
                    }, q.createElement('input', {
                        className: "_26op autofocus",
                        onFocus: this._onPermalinkTextFocus,
                        onKeyDown: this._onPermalinkTextKeyDown,
                        onMouseUp: this._onPermalinkTextMouseUp,
                        readOnly: true,
                        ref: 'permalinkText',
                        type: 'text',
                        value: ha
                    }), q.createElement('button', {
                        className: "_26oq",
                        onClick: this._onHidePermalinkOverlay
                    }, x._("\ub2eb\uae30"))));
                }
            },
            renderLayers: function() {
                var ga = this.props.permalinkURL && this.state.permalinkVisible,
                    ha = 0,
                    ia = 0,
                    ja = null;
                if (ga) {
                    var ka = this._getVideoDimensions(),
                        la = ka.width,
                        ma = ka.height,
                        na = la * ca;
                    ha = la / 2 - na / 2;
                    ia = -ma + da;
                    if (this.state.fullscreened) ia += ea;
                    ja = this._renderPermalinkLayerContent(na);
                }
                return {
                    permalinkOverlay: q.createElement(h, {
                        alignment: 'left',
                        behaviors: [o, n],
                        contextRef: (function() {
                            return this.props.videoElem;
                        }).bind(this),
                        offsetX: ha,
                        offsetY: ia,
                        position: 'below',
                        ref: 'permalinkLayer',
                        shown: ga
                    }, ja)
                };
            },
            _renderPermalinkCopyOption: function() {
                if (this.props.permalinkURL) return (q.createElement(aa, {
                    onclick: this._onShowPermalinkOverlay,
                    ref: 'permalinkMenuItem'
                }, x._("Show video URL")));
            },
            render: function() {
                var ga = q.createElement(t, {
                    className: v.menuRedesign ? "_45di" : ''
                }, q.createElement(aa, {
                    onclick: this._onTogglePause
                }, this._renderTogglePauseLabel()), q.createElement(aa, {
                    onclick: this._onToggleMute
                }, this._renderToggleMuteLabel()), this._renderPermalinkCopyOption(), this.props.children);
                return (q.createElement(p, {
                    mountedTriggerElem: this.props.videoElem,
                    menu: ga,
                    ref: 'menu'
                }));
            }
        });
    f.exports = fa;
}, null);
__d('VideoContextMenu', ['EventListener', 'Bootloader', 'URI', 'React', 'ReactDOM', 'VideoPlayerHTML5ContextMenu.react', 'VideoPlayerReason', 'UserAgent', 'CurrentUser'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if (c.__markCompiled) c.__markCompiled();

    function q(r, s, t) {
        'use strict';
        this.$VideoContextMenu1 = r;
        this.$VideoContextMenu2 = t;
        this.$VideoContextMenu3 = s;
        this.$VideoContextMenu4 = {};
        this.$VideoContextMenu5 = null;
        if (this.$VideoContextMenu2.permalinkURL) this.$VideoContextMenu5 = new j(this.$VideoContextMenu2.permalinkURL).getQualifiedURI().toString();
        var u = ['muteVideo', 'unmuteVideo', 'changeVolume', 'beginPlayback', 'pausePlayback', 'finishPlayback'];
        r.addListener('optionsChange', (function() {
            return this.$VideoContextMenu6();
        }).bind(this));
        this.$VideoContextMenu6();
        u.forEach((function(v) {
            return (r.addListener(v, (function() {
                return this.$VideoContextMenu7();
            }).bind(this)));
        }).bind(this));
        h.listen(this.$VideoContextMenu1.getVideoNode(), 'contextmenu', this.$VideoContextMenu8.bind(this));
    }
    q.prototype.$VideoContextMenu9 = function(r, s, t, u) {
        'use strict';
        i.loadModules(["VideoComponentOptionMenuItems"], (function(v) {
            if (!this.$VideoContextMenu10) this.$VideoContextMenu10 = new v(this.$VideoContextMenu1, (function() {
                return this.$VideoContextMenu7();
            }).bind(this));
            this.$VideoContextMenu10.addComponentOptionMenuItem(r, s, t, u);
        }).bind(this));
    };
    q.prototype.$VideoContextMenu6 = function() {
        'use strict';
        if (this.$VideoContextMenu1.hasOption('DebugOverlay', 'hidden')) this.$VideoContextMenu9('DebugOverlay', 'hidden', 'Show Debug Information', 'Hide Debug Information');
    };
    q.prototype.$VideoContextMenu7 = function() {
        'use strict';
        if (this.$VideoContextMenu11) this.$VideoContextMenu12();
    };
    q.prototype.$VideoContextMenu13 = function(r, s) {
        'use strict';
        if (!this.$VideoContextMenu10) return undefined;
        return this.$VideoContextMenu10.getComponentOptionMenuItem(r, s);
    };
    q.prototype.$VideoContextMenu12 = function() {
        'use strict';
        var r = this.$VideoContextMenu13('DebugOverlay', 'hidden'),
            s = this.$VideoContextMenu1.getVideoNode();
        this.$VideoContextMenu11 = l.render(k.createElement(m, {
            videoElem: s,
            paused: !this.$VideoContextMenu1.isState('playing'),
            muted: this.$VideoContextMenu1.isMuted(),
            permalinkURL: this.$VideoContextMenu5,
            onTogglePause: (function() {
                return this.$VideoContextMenu14();
            }).bind(this),
            onToggleMute: (function() {
                return this.$VideoContextMenu15();
            }).bind(this)
        }, r), this.$VideoContextMenu3);
    };
    q.prototype.$VideoContextMenu15 = function() {
        'use strict';
        if (this.$VideoContextMenu1.isMuted()) {
            this.$VideoContextMenu1.unmute();
        } else this.$VideoContextMenu1.mute();
    };
    q.prototype.$VideoContextMenu14 = function() {
        'use strict';
        var r = n.USER;
        if (!this.$VideoContextMenu1.isState('playing')) {
            this.$VideoContextMenu1.play(r);
        } else this.$VideoContextMenu1.pause(r);
    };
    q.prototype.$VideoContextMenu8 = function(r) {
        'use strict';
        var s = p.isEmployee() && (o.isPlatform('Mac OS X') ? r.getModifiers().meta : r.getModifiers().ctrl);
        if (s && this.$VideoContextMenu11) {
            var t = this.$VideoContextMenu1.getVideoNode();
            l.unmountComponentAtNode(t);
            delete this.$VideoContextMenu11;
        } else if (!s && !this.$VideoContextMenu11) {
            r.preventDefault();
            this.$VideoContextMenu12();
        }
    };
    f.exports = q;
}, null);
__d('VideoHomeViewportTracking', ['DOM', 'csx', 'VideoHomeEvents', 'VideoHomeEventTargets', 'VideoHomeLoggerFields', 'ViewportTracking'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
    if (c.__markCompiled) c.__markCompiled();
    var n, o;
    n = babelHelpers.inherits(p, m);
    o = n && n.prototype;
    p.prototype.getDataFromConfig = function(q) {
        'use strict';
        this.$VideoHomeViewportTracking1 = q.log;
        this.$VideoHomeViewportTracking2 = q.container;
    };
    p.prototype.getTimeout = function() {
        'use strict';
        return 0;
    };
    p.prototype.getAllStories = function() {
        'use strict';
        var q = h.scry(this.$VideoHomeViewportTracking2, "._5bll");
        return q.filter(function(r) {
            return r.getAttribute('data-home-vpv');
        });
    };
    p.prototype.getStoryID = function(q) {
        'use strict';
        var r = JSON.parse(q.getAttribute('data-home-vpv'));
        return r.storyID;
    };
    p.prototype.getDataToLog = function(q) {
        'use strict';
        return JSON.parse(q.getAttribute('data-home-vpv'));
    };
    p.prototype.sendDataToLog = function(q, r) {
        'use strict';
        var s = {};
        s[l.EVENT] = j.VPV;
        s[l.SESSION_ID] = r.sessionID;
        s[l.DATA_SOURCE] = r.dataSource;
        s[l.CHANNEL_ID] = r.channelID;
        s[l.EVENT_TARGET] = k.STORY;
        s[l.EVENT_TARGET_ID] = r.storyID;
        s[l.CHANNEL_POSITION] = r.channelPosition;
        s[l.POSITION_IN_CHANNEL] = r.positionInChannel;
        s[l.TRACKING_DATA] = r.trackingData;
        this.$VideoHomeViewportTracking1(s);
    };

    function p() {
        'use strict';
        n.apply(this, arguments);
    }
    f.exports = p;
}, null);
__d('VideoHomeLogger', ['Arbiter', 'Banzai', 'BanzaiLogger', 'BigPipe', 'Run', 'StreamViewportTracking', 'VideoHomeExitPointTypes', 'VideoHomeEvents', 'VideoHomeLoggerFields', 'VideoHomeViewportTracking', 'ViewportTrackingConfig'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    if (c.__markCompiled) c.__markCompiled();
    var s = undefined,
        t = undefined,
        u = undefined,
        v = 0,
        w = {
            init: function(x) {
                u = x.session_id;
                v = Date.now();
                var y = new m();
                y.init(r, x.container);
                t = y;
                var z = new q(),
                    aa = {
                        log: w.log,
                        container: x.container
                    };
                z.init(aa);
                s = z;
                h.subscribe(k.Events.init, function(ca, da) {
                    var ea = da.arbiter;
                    if (ea) {
                        ea.subscribe(k.Events.tti, function(event, fa) {
                            var ga = {};
                            ga[p.EVENT] = o.TTI;
                            ga[p.SESSION_ID] = u;
                            ga[p.PERF_TIME_MS] = Date.now() - v;
                            w.log(ga);
                        });
                        ea.subscribe(k.Events.loaded, function(event, fa) {
                            var ga = {};
                            ga[p.EVENT] = o.E2E;
                            ga[p.SESSION_ID] = u;
                            ga[p.PERF_TIME_MS] = Date.now() - v;
                            w.log(ga);
                        });
                    }
                });

                function ba() {
                    if (u !== x.session_id) return;
                    var ca = {};
                    ca[p.EVENT] = o.SESSION_END;
                    ca[p.SESSION_ID] = u;
                    ca[p.EXIT_POINT_TYPE] = n.UNKNOWN;
                    w.log(ca);
                    y.updateTimeTrackingData(true);
                    z.updateTimeTrackingData(true);
                    u = null;
                    t = null;
                    s = null;
                }
                l.onLeave(ba);
                i.subscribe(i.SHUTDOWN, ba);
            },
            updateViewportTracking: function() {
                if (t) {
                    t.fireTimer();
                    t.updateTimeTrackingData(false, 'scroll');
                }
                if (s) {
                    s.fireTimer();
                    s.updateTimeTrackingData(false, 'scroll');
                }
            },
            _pause: function(x, y) {
                if (u) {
                    var z = {};
                    z[p.EVENT] = o.SESSION_PAUSE;
                    z[p.SESSION_ID] = u;
                    z[p.EXIT_POINT_TYPE] = n.CHANNEL;
                    z[p.EXIT_POINT_VALUE] = y;
                    w.log(z);
                }
            },
            _resume: function(x, y) {
                if (u) {
                    var z = {};
                    z[p.EVENT] = o.SESSION_RESUME;
                    z[p.SESSION_ID] = u;
                    z[p.ENTRY_POINT_TYPE] = n.CHANNEL;
                    z[p.EXIT_POINT_VALUE] = y;
                    w.log(z);
                }
            },
            getPlayerLoggingData: function() {
                return {
                    video_home_session_id: u
                };
            },
            log: function(x) {
                if (u && v) {
                    var y = Date.now() - v;
                    x[p.TIME_SINCE_START] = y + .001;
                }
                j.log('VideoHomeLoggerConfig', x);
            }
        };
    h.subscribe('LogEnterChannel', w._pause);
    h.subscribe('LogExitChannel', w._resume);
    f.exports = w;
}, null);
__d("XVideoDataController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/video\/video_data\/", {
        video_id: {
            type: "String",
            required: true
        },
        width: {
            type: "Int"
        },
        height: {
            type: "Int"
        },
        scrubbing_preference: {
            type: "Int"
        }
    });
}, null);
__d('VideoPlayerController', ['Promise', 'Arbiter', 'Banzai', 'DOM', 'DOMDimensions', 'DOMQuery', 'CSS', 'EventEmitter', 'Flash', 'FullScreen', 'Run', 'Map', 'ScriptPath', 'SubscriptionsHandler', 'JSLogger', 'JSResource', 'VideoChannelViewChainLengthManager', 'VideoChannelLogger', 'VideoHomeLogger', 'VideoPlayerApiEvents', 'VideoPlayerHTML5Experiments', 'VideoPlayerLogger', 'VideoPlayerLoggerErrors', 'VideoPlayerLoggerErrorStates', 'VideoPlayerLoggerEvent', 'VideoPlayerLoggerSource', 'VideoPlayerInitializationEvent', 'VideoPlayerResizeSettings', 'VideosRenderingInstrumentation', 'Visibility', 'VideoMimeTypes', 'VideoPlayerReason', 'XVideoDataController', 'arrayContains', 'canVideoPlayType', 'collectDataAttributes', 'cx', 'destroyOnUnload', 'enumerate', 'emptyFunction', 'forwardEvent', 'getElementPosition', 'invariant', 'logVideosClickTracking', 'mapObject', 'performanceAbsoluteNow'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab) {
    if (c.__markCompiled) c.__markCompiled();
    var bb, cb, db = 5,
        eb = 1;

    function fb() {
        return ba.useMonotonicallyIncreasingTimers ? ab() : Date.now();
    }
    bb = babelHelpers.inherits(gb, o);
    cb = bb && bb.prototype;

    function gb(hb, ib) {
        'use strict';
        var jb = hb.video_ids,
            kb = hb.video_urls,
            lb = hb.chaining_token,
            mb = hb.video_channel_id,
            nb = hb.source,
            ob = hb.ad_client_token,
            pb = hb.should_autoplay,
            qb = hb.player_version,
            rb = hb.autoplay_setting,
            sb = hb.additional_logdata_getter,
            tb = hb.apiModule,
            ub = hb.apiConfig,
            vb = hb.useInlineFallback,
            wb = hb.accessToken,
            xb = hb.projection,
            yb = hb.playerOrigin,
            zb = ib.root_element,
            ac = ib.container_element,
            bc = ib.video_element;
        cb.constructor.call(this);
        if (pb === undefined) throw new Error('Must pass should_autoplay to ' + this.constructor.name + '!');
        this.$VideoPlayerController1 = new s();
        this.$VideoPlayerController2 = xb;
        this.$VideoPlayerController3 = 0;
        this.$VideoPlayerController4 = wb;
        this.$VideoPlayerController5 = pb;
        this.$VideoPlayerController6 = rb;
        this.$VideoPlayerController7 = ob;
        this.$VideoPlayerController8 = bc;
        this.$VideoPlayerController9 = zb;
        this.$VideoPlayerController10 = ac;
        this.$VideoPlayerController11 = false;
        this.$VideoPlayerController12 = qb;
        this.$VideoPlayerController13 = false;
        this.$VideoPlayerController14 = jb;
        this.$VideoPlayerController15 = kb;
        this.$VideoPlayerController16 = lb;
        this.$VideoPlayerController17 = mb;
        this.$VideoPlayerController18 = sb || {
            get: ua
        };
        this.$VideoPlayerController19 = yb;
        this.$VideoPlayerController20 = tb;
        this.$VideoPlayerController21 = ub;
        this.$VideoPlayerController22 = this.$VideoPlayerController20.getStreamTypeFromConfig(this.$VideoPlayerController21);
        this.$VideoPlayerController23 = vb;
        this.$VideoPlayerController24 = null;
        this.$VideoPlayerController25 = null;
        this.$VideoPlayerController26 = null;
        this.$VideoPlayerController27 = nb;
        this.$VideoPlayerController28 = new ca(nb);
        if (this.$VideoPlayerController27 === ga.CHANNEL) this.setIsInChannel(true);
        this.collectFeedTrackingData();
        this.$VideoPlayerController28.setScriptPath(t.getScriptPath());
        var cc = ja.retrieveRenderTime(this.$VideoPlayerController9);
        this.$VideoPlayerController29 = fb() - cc;
        this.$VideoPlayerController30 = 'loading';
        this.logEvent(ha.PLAYER_INITIALIZATION, {
            time_ms: cc
        });
        this.$VideoPlayerController31 = false;
        if (this.$VideoPlayerController20.isImplementationUnavailable(this.$VideoPlayerController23)) {
            if (this.$VideoPlayerController23) {
                this.$VideoPlayerController32();
            } else {
                this.$VideoPlayerController33();
                return;
            }
        } else this.$VideoPlayerController34();
        j.subscribe(j.SHUTDOWN, (function() {
            this.pause('unloaded');
        }).bind(this));
        if (this.$VideoPlayerController5)
            if (ka.isHidden()) {
                ka.once(ka.VISIBLE, (function() {
                    this.play(ma.AUTOPLAY);
                }).bind(this));
            } else this.play(ma.AUTOPLAY);
        this.$VideoPlayerController35 = 0;
        this.$VideoPlayerController36 = false;
        this.$VideoPlayerController37 = new u();
        this.$VideoPlayerController37.addSubscriptions(i.subscribe('layer_shown', (function(dc, ec) {
            if (ec.type === 'DialogX' || ec.type === 'PhotoSnowlift') {
                this.$VideoPlayerController35 = this.$VideoPlayerController35 + 1;
                if (this.$VideoPlayerController35 > 0)
                    if (this.isState('playing') && !this.getIsInChannel()) {
                        this.pause(ma.PAGE_VISIBILITY);
                        this.$VideoPlayerController36 = true;
                    }
            }
        }).bind(this)), i.subscribe('layer_hidden', (function(dc, ec) {
            if (ec.type === 'DialogX' || ec.type === 'PhotoSnowlift') {
                this.$VideoPlayerController35 = this.$VideoPlayerController35 - 1;
                if (this.$VideoPlayerController35 === 0)
                    if (this.$VideoPlayerController36 && !this.getIsInChannel()) {
                        this.play(ma.PAGE_VISIBILITY);
                        this.$VideoPlayerController36 = false;
                    }
            }
        }).bind(this)), i.subscribe(v.DUMP_EVENT, (function(dc, ec) {
            return this.$VideoPlayerController38(dc, ec);
        }).bind(this)));
        sa((function() {
            return this.$VideoPlayerController37.release();
        }).bind(this));
        r.onLeave((function() {
            return this.pause('unloaded');
        }).bind(this));
        this.abortLoading();
    }
    gb.prototype.$VideoPlayerController39 = function() {
        'use strict';
        var hb = m.scry(this.getVideoNode(), '[data-fallback-markup="1"]');
        if (!hb.length) return h.reject();
        k.replace(this.getVideoNode(), hb[0]);
        this.$VideoPlayerController8 = hb[0];
        return w('VideoPlayerFlashApi').load();
    };
    gb.prototype.$VideoPlayerController32 = function() {
        'use strict';
        this.logEvent('switched_implementation', {
            error_user_info: this.getDebugInfo()
        });
        this.$VideoPlayerController39().then(function(hb) {
            if (hb.isImplementationUnavailable()) {
                return h.reject();
            } else return h.resolve(hb);
        }).done((function(hb) {
            this.$VideoPlayerController20 = hb;
            this.$VideoPlayerController34();
        }).bind(this), (function(hb) {
            return this.$VideoPlayerController33();
        }).bind(this));
    };
    gb.prototype.collectFeedTrackingData = function() {
        'use strict';
        this.$VideoPlayerController28.setFTData(qa(this.getRootNode(), ['ft']));
    };
    gb.prototype.$VideoPlayerController38 = function(hb, ib) {
        'use strict';
        ib.video_player_debug_info = ib.video_player_debug_info || {};
        ib.video_player_debug_info[this.getVideoID()] = this.getDebugInfo();
    };
    gb.prototype.setSphericalViewport = function(hb, ib) {
        'use strict';
        this.getVideoAPI().setSphericalViewport(hb, ib);
    };
    gb.prototype.setAdditionalLogDataGetter = function(hb) {
        'use strict';
        this.$VideoPlayerController18 = hb;
    };
    gb.prototype.$VideoPlayerController34 = function() {
        'use strict';
        this.$VideoPlayerController20.onImplementationReady(this.getVideoNode(), (function() {
            return this.onApiReady();
        }).bind(this));
    };
    gb.prototype.isImplementationUnavailable = function() {
        'use strict';
        return this.$VideoPlayerController20.isImplementationUnavailable(this.$VideoPlayerController23) && !this.$VideoPlayerController23;
    };
    gb.prototype.getIsInChannel = function() {
        'use strict';
        return this.$VideoPlayerController40;
    };
    gb.prototype.setIsInChannel = function(hb) {
        'use strict';
        if (ga.CHANNEL !== this.$VideoPlayerController27) {
            if (hb) {
                this.$VideoPlayerController28.updateSource(ga.CHANNEL);
            } else this.$VideoPlayerController28.updateSource(this.$VideoPlayerController27);
            this.logEvent(fa.PLAYER_FORMAT_CHANGED);
        }
        this.$VideoPlayerController40 = hb;
    };
    gb.prototype.$VideoPlayerController33 = function() {
        'use strict';
        var hb = {
            error: da.ERROR_CALLING_FLASH,
            state: ea.PLAYER_FAILURE,
            error_description: 'Implementation unavailable',
            error_user_info: this.getDebugInfo()
        };
        this.logEvent(fa.ERROR, hb);
        this.$VideoPlayerController5 = false;
    };
    gb.prototype.$VideoPlayerController41 = function(hb, ib, jb) {
        'use strict';
        var kb = {
            error: hb,
            error_description: ib,
            error_user_info: this.getDebugInfo(),
            state: jb ? ea.PLAYBACK_FAILURE : ea.PLAYER_FAILURE
        };
        this.logEvent(fa.ERROR, kb);
        if (jb && this.$VideoPlayerController31) this.$VideoPlayerController31 = false;
    };
    gb.prototype.setDimensions = function(hb, ib) {
        'use strict';
        this.$VideoPlayerController10.style.width = hb + 'px';
        this.$VideoPlayerController10.style.height = ib + 'px';
        this.$VideoPlayerController8.style.width = hb + 'px';
        this.$VideoPlayerController8.style.height = ib + 'px';
        if (this.isState('loading')) {
            this.$VideoPlayerController42 = {
                width: hb,
                height: ib
            };
        } else if (this.getVideoAPI().setDimensions) {
            if (this.isPlayerVersion('silvercity') && (this.$VideoPlayerController43 || ia.disable_flash_set_dimensions)) return;
            this.getVideoAPI().setDimensions(hb, ib);
        }
    };
    gb.prototype.handleFlashApiFactoryError = function(hb, ib) {
        'use strict';
        this.$VideoPlayerController41(da.ERROR_CALLING_FLASH, hb.message, ib);
    };
    gb.prototype.isPlayRequestPending = function() {
        'use strict';
        return this.$VideoPlayerController31;
    };
    gb.prototype.play = function(hb) {
        'use strict';
        this.$VideoPlayerController44();
        if (!this.$VideoPlayerController45) this.$VideoPlayerController45 = hb;
        if (!this.$VideoPlayerController31) {
            this.$VideoPlayerController26 = this.$VideoPlayerController46();
            var ib = this.$VideoPlayerController47({
                debug_reason: hb
            });
            this.logEvent(fa.REQUESTED_PLAYING, ib);
        }
        this.emit('playRequested');
        this.sendPlayRequest(hb);
    };
    gb.prototype.sendPlayRequest = function(hb) {
        'use strict';
        if (this.isState('fallback')) {
            this.emit('fallbackPlay');
            return;
        }
        this.$VideoPlayerController31 = true;
        if (this.isState('loading')) {
            this.$VideoPlayerController48 = {
                reason: hb
            };
        } else {
            if (!this.getVideoAPI().isMuted() && this.$VideoPlayerController49) this.logEvent(fa.UNMUTED);
            this.$VideoPlayerController49 = false;
            this.getVideoAPI().play(hb);
        }
    };
    gb.prototype.getOriginalPlayReason = function() {
        'use strict';
        return this.$VideoPlayerController45;
    };
    gb.prototype.reset = function() {
        'use strict';
        if (this.isState('loading') || this.isState('fallback')) return;
        this.resetPositions();
        this.$VideoPlayerController50();
        if (this.$VideoPlayerController51 && this.$VideoPlayerController51.destroy) this.$VideoPlayerController51.destroy();
        this.$VideoPlayerController51 = null;
        this.setState('loading');
        this.$VideoPlayerController34();
    };
    gb.prototype.detachRootNode = function() {
        'use strict';
        k.remove(this.$VideoPlayerController9);
        if (this.isState('fallback') || this.isState('loading')) return;
        this.setState('loading');
        this.$VideoPlayerController20.onImplementationReady(this.getVideoNode(), (function() {
            return this.$VideoPlayerController52();
        }).bind(this));
    };
    gb.prototype.getVideoAPI = function() {
        'use strict';
        return this.$VideoPlayerController51;
    };
    gb.prototype.getVideoNode = function() {
        'use strict';
        return this.$VideoPlayerController8;
    };
    gb.prototype.getRootNode = function() {
        'use strict';
        return this.$VideoPlayerController9;
    };
    gb.prototype.$VideoPlayerController52 = function() {
        'use strict';
        this.setState('ready');
        this.logEvent(ha.PLAYER_ALLOCATED);
        this.$VideoPlayerController49 = !this.getVideoAPI().isMuted();
        this.$VideoPlayerController53 = this.getVideoAPI().areSubtitlesActive();
        if (this.$VideoPlayerController48) {
            this.sendPlayRequest(this.$VideoPlayerController48.reason);
            this.$VideoPlayerController48 = null;
        }
        if (this.$VideoPlayerController42) {
            this.setDimensions(this.$VideoPlayerController42.width, this.$VideoPlayerController42.height);
            this.$VideoPlayerController42 = null;
        }
        if (this.$VideoPlayerController54) {
            this.getVideoAPI().unmute();
            this.$VideoPlayerController54 = null;
        }
    };
    gb.prototype.onApiReady = function(hb) {
        'use strict';
        this.$VideoPlayerController51 = new this.$VideoPlayerController20(this.getVideoNode(), this.$VideoPlayerController21);
        this.logEvent(ha.PLAYER_ALLOCATED);
        this.$VideoPlayerController55();
        this.$VideoPlayerController52();
        var ib = {
            is_auto_played: this.isAutoplayable()
        };
        if (hb) ib.init_delay = hb;
        this.logEvent(fa.PLAYER_LOADED, ib);
    };
    gb.prototype.resetPositions = function() {
        'use strict';
        this.$VideoPlayerController24 = null;
        this.$VideoPlayerController25 = null;
    };
    gb.prototype.getCurrentTimePosition = function() {
        'use strict';
        return this.$VideoPlayerController24;
    };
    gb.prototype.$VideoPlayerController44 = function() {
        'use strict';
        if (!this.$VideoPlayerController56) {
            var hb = this.getOption('VideoWithClickToChannelView', 'isChannelEligible');
            x.registerChainingInfos(this.getVideoID(), this.$VideoPlayerController16, hb);
            this.$VideoPlayerController56 = x.getLoggingData();
        }
        this.$VideoPlayerController57 = y.getPlayerLoggingData();
    };
    gb.prototype.$VideoPlayerController58 = function(hb) {
        'use strict';
        var ib = hb.position;
        this.$VideoPlayerController31 = false;
        if (ib !== undefined) this.$VideoPlayerController25 = ib;
        this.setState('playing');
        if (this.areHLSActive()) {
            this.$VideoPlayerController59();
        } else if (this.isRTMP()) this.$VideoPlayerController60();
    };
    gb.prototype.$VideoPlayerController61 = function(hb) {
        'use strict';
        var ib = hb.position;
        if (ib !== undefined) this.$VideoPlayerController24 = ib;
    };
    gb.prototype.$VideoPlayerController62 = function(hb) {
        'use strict';
        var event = hb.event;
        delete hb.event;
        this.logEvent(event, hb);
    };
    gb.prototype.$VideoPlayerController63 = function() {
        'use strict';
        this.resetPositions();
        if (!this.isState('finished')) this.setState('paused');
    };
    gb.prototype.$VideoPlayerController64 = function() {
        'use strict';
        this.resetPositions();
        this.setState('finished');
        this.$VideoPlayerController36 = false;
    };
    gb.prototype.getVideosCount = function() {
        'use strict';
        return this.$VideoPlayerController14.length;
    };
    gb.prototype.$VideoPlayerController65 = function() {
        'use strict';
        var hb = this.getVideosCount();
        return (this.$VideoPlayerController3 + 1) % hb;
    };
    gb.prototype.getVolume = function() {
        'use strict';
        return this.getVideoAPI().getVolume();
    };
    gb.prototype.$VideoPlayerController66 = function() {
        'use strict';
        var hb = this.isFullscreen();
        n.conditionClass(this.$VideoPlayerController10, "_1hwh", hb);
        n.conditionClass(this.$VideoPlayerController10, "_52fb", hb);
        if (!hb && this.$VideoPlayerController67) {
            this.$VideoPlayerController67.unsubscribe();
            this.$VideoPlayerController67 = null;
        }
        if (this.$VideoPlayerController43 != hb) {
            this.logEvent(hb ? fa.ENTERED_FS : fa.EXITED_FS);
            this.emit('toggleFullscreen');
        }
        this.$VideoPlayerController43 = hb;
    };
    gb.prototype.isFullscreen = function() {
        'use strict';
        return q.isFullScreen() && this.$VideoPlayerController10 === q.getFullScreenElement();
    };
    gb.prototype.toggleFullscreen = function() {
        'use strict';
        if (q.toggleFullScreen(this.$VideoPlayerController10)) {
            n.addClass(this.$VideoPlayerController10, "_1hwh");
            this.$VideoPlayerController67 = q.subscribe('changed', this.$VideoPlayerController66.bind(this));
        }
    };
    gb.prototype.$VideoPlayerController68 = function() {
        'use strict';
        var hb = this.getVideosCount();
        return (this.$VideoPlayerController3 - 1 + hb) % hb;
    };
    gb.prototype.$VideoPlayerController69 = function(hb) {
        'use strict';
        this.logEvent(fa.CAROUSEL_CHANGE, {
            source_index: this.$VideoPlayerController3,
            target_index: hb
        });
        this.getVideoAPI().switchVideo(hb);
        this.$VideoPlayerController3 = hb;
        this.emit('switchVideo');
    };
    gb.prototype.unmute = function() {
        'use strict';
        if (!this.isState('loading')) {
            this.getVideoAPI().unmute();
            if (this.$VideoPlayerController53 && this.getVideoAPI().areSubtitlesActive()) this.getVideoAPI().toggleSubtitles();
        } else this.$VideoPlayerController54 = true;
    };
    gb.prototype.isMuted = function() {
        'use strict';
        return this.getVideoAPI().isMuted();
    };
    gb.prototype.mute = function() {
        'use strict';
        if (this.$VideoPlayerController53 && !this.getVideoAPI().areSubtitlesActive()) this.getVideoAPI().toggleSubtitles();
        this.getVideoAPI().mute();
    };
    gb.prototype.getPlaybackDuration = function() {
        'use strict';
        return this.getVideoAPI().getPlaybackDuration();
    };
    gb.prototype.getPlaybackPosition = function() {
        'use strict';
        return this.$VideoPlayerController24 || 0;
    };
    gb.prototype.nextVideo = function() {
        'use strict';
        this.$VideoPlayerController69(this.$VideoPlayerController65());
    };
    gb.prototype.previousVideo = function() {
        'use strict';
        this.$VideoPlayerController69(this.$VideoPlayerController68());
    };
    gb.prototype.getVideoIndex = function() {
        'use strict';
        return this.$VideoPlayerController3;
    };
    gb.prototype.getVideoID = function() {
        'use strict';
        return this.$VideoPlayerController14[this.getVideoIndex()];
    };
    gb.prototype.getVideoURL = function() {
        'use strict';
        return this.$VideoPlayerController15[this.getVideoIndex()];
    };
    gb.prototype.$VideoPlayerController55 = function() {
        'use strict';
        var hb = this.$VideoPlayerController51;
        this.$VideoPlayerController70 = new u();
        var ib = [
            ['buffered', (function() {
                return this.setBuffering(false);
            }).bind(this)],
            ['buffering', (function() {
                return this.setBuffering(true);
            }).bind(this)],
            ['beginPlayback', (function(jb) {
                return this.$VideoPlayerController58(jb);
            }).bind(this)],
            ['updateStatus', (function(jb) {
                return this.$VideoPlayerController61(jb);
            }).bind(this)],
            ['logEvent', (function(jb) {
                return this.$VideoPlayerController62(jb.logData);
            }).bind(this)],
            ['unmuteVideo', (function() {
                return this.$VideoPlayerController71();
            }).bind(this)],
            ['pausePlayback', (function() {
                return this.$VideoPlayerController63();
            }).bind(this)],
            ['clickForTracking', (function() {
                return ya(this.getVideoNode());
            }).bind(this)],
            ['error', (function(jb) {
                return (this.$VideoPlayerController41(jb.error, jb.message, jb.isPlayback));
            }).bind(this)],
            ['finishPlayback', (function() {
                return this.$VideoPlayerController64();
            }).bind(this)]
        ];
        this.$VideoPlayerController70.addSubscriptions.apply(this.$VideoPlayerController70, ib.map(function(jb) {
            return hb.addListener.apply(hb, jb);
        }).concat(aa.map(va.bind(null, hb, this))));
    };
    gb.prototype.$VideoPlayerController50 = function() {
        'use strict';
        if (this.$VideoPlayerController70) this.$VideoPlayerController70.release();
    };
    gb.prototype.seek = function(hb) {
        'use strict';
        this.getVideoAPI().seek(hb);
    };
    gb.prototype.pause = function(hb) {
        'use strict';
        if (this.isState('loading')) {
            this.$VideoPlayerController48 = null;
        } else if (this.isState('playing')) {
            this.getVideoAPI().pause(hb);
        } else if (this.$VideoPlayerController31) this.getVideoAPI().pause(hb);
        this.$VideoPlayerController31 = false;
        this.$VideoPlayerController36 = false;
    };
    gb.prototype.isPlayerVersion = function(hb) {
        'use strict';
        return this.$VideoPlayerController72() === hb;
    };
    gb.prototype.isAutoplayable = function() {
        'use strict';
        return this.$VideoPlayerController5;
    };
    gb.prototype.isBuffering = function() {
        'use strict';
        return this.$VideoPlayerController11;
    };
    gb.prototype.setBuffering = function(hb) {
        'use strict';
        if (hb !== this.$VideoPlayerController11) {
            this.$VideoPlayerController11 = hb;
            if (this.$VideoPlayerController11) {
                this.$VideoPlayerController28.startBuffering();
            } else this.$VideoPlayerController28.endBuffering();
        }
    };
    gb.prototype.setVolume = function(hb) {
        'use strict';
        this.getVideoAPI().setVolume(hb);
    };
    gb.prototype.getDOMPosition = function() {
        'use strict';
        return wa(this.getRootNode());
    };
    gb.prototype.clickVideo = function() {
        'use strict';
        this.emit('clickVideo');
    };
    gb.prototype.isAd = function() {
        'use strict';
        return !!this.$VideoPlayerController7;
    };
    gb.prototype.getAdClientToken = function() {
        'use strict';
        return this.$VideoPlayerController7;
    };
    gb.prototype.$VideoPlayerController73 = function() {
        'use strict';
        var hb = p.getVersion();
        if (hb) hb = hb.join('.');
        var ib = this.getVideoInfo() || {};
        return Object.assign(babelHelpers._extends({
            ad_client_token: this.$VideoPlayerController7,
            access_token: this.$VideoPlayerController4,
            autoplay_eligible: this.isAutoplayable(),
            autoplay_setting: this.$VideoPlayerController6,
            projection: this.$VideoPlayerController2,
            player_version: this.$VideoPlayerController72(),
            flash_version: hb,
            video_id: this.getVideoID(),
            player_state: this.$VideoPlayerController30,
            player_origin: this.$VideoPlayerController19,
            stream_type: ib.streamType || this.$VideoPlayerController22,
            video_time_position: this.$VideoPlayerController24 || 0,
            video_channel_id: this.$VideoPlayerController17,
            fbcdn_pop: this.$VideoPlayerController26
        }, z.getPlayerLoggingData(), this.$VideoPlayerController57, this.$VideoPlayerController56), this.$VideoPlayerController18.get());
    };
    gb.prototype.$VideoPlayerController46 = function() {
        'use strict';
        var hb = this.getVideoInfo();
        if (!hb) return null;
        var ib = hb.resourceUrl,
            jb = /scontent-([a-z]+)\./.exec(ib);
        if (!jb) return null;
        return jb[1];
    };
    gb.prototype.getVideoInfo = function() {
        'use strict';
        if (this.isState('loading') || this.isState('fallback')) return null;
        return this.getVideoAPI().getVideoInfo();
    };
    gb.prototype.getDebugInfo = function() {
        'use strict';
        var hb = this.getVideoInfo(),
            ib = {
                initializationTime: this.$VideoPlayerController29,
                version: this.$VideoPlayerController72(),
                stallTime: this.$VideoPlayerController28.getCurrentStallTime(),
                state: this.$VideoPlayerController30,
                canPlayType: za(la, pa)
            },
            jb = {
                videoID: this.getVideoID()
            };
        if (!hb) return {
            player: ib,
            currentVideo: jb
        };
        return {
            currentVideo: babelHelpers._extends({}, jb, {
                streamType: hb.streamType,
                isLiveStream: hb.isLiveStream,
                isHD: hb.isHD,
                hasHD: hb.hasHD,
                resourceUrl: hb.resourceUrl,
                hasSubtitles: hb.hasSubtitles,
                hasRateLimit: !!hb.hasUnlimitedSrc,
                isRateLimited: hb.hasUnlimitedSrc && !hb.useUnlimitedSrc,
                tagHD: hb.tagHD,
                tagSD: hb.tagSD,
                projection: hb.projection
            }),
            player: ib
        };
    };
    gb.prototype.hasSubtitles = function() {
        'use strict';
        return this.getVideoAPI().hasSubtitles();
    };
    gb.prototype.areSubtitlesActive = function() {
        'use strict';
        return this.getVideoAPI().areSubtitlesActive();
    };
    gb.prototype.areHLSActive = function() {
        'use strict';
        return this.getVideoAPI().areHLSActive();
    };
    gb.prototype.isRTMP = function() {
        'use strict';
        return this.getVideoAPI().isRTMP();
    };
    gb.prototype.toggleSubtitles = function() {
        'use strict';
        this.getVideoAPI().toggleSubtitles();
        if (this.areSubtitlesActive()) {
            this.logEvent(fa.TOGGLE_SUBTITLE_ON);
        } else this.logEvent(fa.TOGGLE_SUBTITLE_OFF);
        this.$VideoPlayerController53 = false;
    };
    gb.prototype.isHD = function() {
        'use strict';
        return this.getVideoAPI().isHD();
    };
    gb.prototype.hasHD = function() {
        'use strict';
        return this.getVideoAPI().hasHD();
    };
    gb.prototype.toggleHD = function() {
        'use strict';
        this.getVideoAPI().toggleHD();
    };
    gb.prototype.switchToStreamType = function(hb) {
        'use strict';
        this.getVideoAPI().switchToStreamType(hb);
    };
    gb.prototype.$VideoPlayerController60 = function() {
        'use strict';
        this.getVideoAPI().replaceVideoDataFromURL(na.getURIBuilder().setString('video_id', this.getVideoID()).setInt('scrubbing_preference', db).getURI().toString());
    };
    gb.prototype.$VideoPlayerController59 = function() {
        'use strict';
        this.getVideoAPI().replaceVideoDataFromURL(na.getURIBuilder().setString('video_id', this.getVideoID()).setInt('scrubbing_preference', eb).getURI().toString());
    };
    gb.prototype.$VideoPlayerController47 = function(hb) {
        'use strict';
        var ib = this.getVideoInfo();
        if (ib != null) return Object.assign({
            resource_url: ib.resourceUrl,
            liveStream: ib.isLiveStream,
            hd: ib.isHD
        }, hb);
        return hb;
    };
    gb.prototype.$VideoPlayerController74 = function() {
        'use strict';
        var hb = this.getDOMPosition(),
            ib = l.getViewportDimensions().height,
            jb = null;
        if (hb.y <= 0) {
            jb = hb.y;
        } else if (hb.y + hb.height < ib) {
            jb = 0;
        } else jb = hb.y + hb.height - ib;
        return jb;
    };
    gb.prototype.logEvent = function(event, hb) {
        'use strict';
        var ib = Object.assign(this.$VideoPlayerController73(), hb),
            jb = this.getOriginalPlayReason();
        if (jb && event !== fa.DISPLAYED) ib.video_play_reason = jb;
        if (event === fa.FINISHED_PLAYING) ib.viewport_distance = this.$VideoPlayerController74();
        this.$VideoPlayerController28.logEvent(event, ib);
    };
    gb.prototype.setState = function(hb) {
        'use strict';
        if (this.isState('fallback')) return;
        this.$VideoPlayerController30 = hb;
        if (this.$VideoPlayerController30 === 'fallback') {
            n.addClass(this.getRootNode(), "_3-n5");
            this.$VideoPlayerController50();
        }
        this.emit('stateChange');
    };
    gb.prototype.isState = function(hb) {
        'use strict';
        return this.$VideoPlayerController30 === hb;
    };
    gb.prototype.abortLoading = function() {
        'use strict';
        if (this.isState('loading') || this.isState('fallback')) return;
        this.getVideoAPI().abortLoading();
    };
    gb.prototype.preload = function() {
        'use strict';
        if (this.isState('loading') || this.isState('fallback')) return;
        this.getVideoAPI().preload();
    };
    gb.prototype.$VideoPlayerController72 = function() {
        'use strict';
        if (this.$VideoPlayerController20.getPlayerVersion) {
            return this.$VideoPlayerController20.getPlayerVersion();
        } else this.$VideoPlayerController12;
    };
    gb.prototype.$VideoPlayerController71 = function() {
        'use strict';
        this.$VideoPlayerController49 = false;
    };
    gb.prototype.registerOption = function(hb, ib, jb, kb) {
        'use strict';
        if (!this.$VideoPlayerController1.has(hb)) this.$VideoPlayerController1.set(hb, new s());
        if (this.$VideoPlayerController1.get(hb).has(ib)) throw new Error('An option can only be registered once for each component');
        this.$VideoPlayerController1.get(hb).set(ib, {
            getter: jb,
            setter: kb
        });
        this.emit('optionsChange');
    };
    gb.prototype.getComponents = function() {
        'use strict';
        return this.$VideoPlayerController1.keys();
    };
    gb.prototype.getOptions = function(hb) {
        'use strict';
        if (this.$VideoPlayerController1.has(hb)) return this.$VideoPlayerController1.get(hb).keys();
        return ta([]);
    };
    gb.prototype.hasOption = function(hb, ib) {
        'use strict';
        if (!this.$VideoPlayerController1.has(hb)) return false;
        if (!this.$VideoPlayerController1.get(hb).has(ib)) return false;
        return true;
    };
    gb.prototype.getOption = function(hb, ib) {
        'use strict';
        if (!this.hasOption(hb, ib)) return undefined;
        return this.$VideoPlayerController1.get(hb).get(ib).getter();
    };
    gb.prototype.setOption = function(hb, ib, jb) {
        'use strict';
        if (!this.$VideoPlayerController1.has(hb)) throw new Error('Component not registered');
        if (!this.$VideoPlayerController1.get(hb).has(ib)) throw new Error('Option not registered');
        var kb = this.$VideoPlayerController1.get(hb).get(ib).setter;
        if (kb) return kb(jb);
        throw new Error('Read-only option');
    };
    gb.playerStates = ['finished', 'loading', 'paused', 'playing', 'ready', 'fallback'];
    f.exports = gb;
}, null);
__d('VideoFullscreenControl.react', ['AbstractVideoFullscreenControl.react', 'Image.react', 'React', 'ReactDOM', 'cx', 'fbt', 'ix', 'shallowCompare'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    if (c.__markCompiled) c.__markCompiled();
    var p, q;
    'use strict';
    var r = j.PropTypes;
    p = babelHelpers.inherits(s, j.Component);
    q = p && p.prototype;
    s.prototype.shouldComponentUpdate = function(t, u) {
        return o(this, t, u);
    };
    s.prototype.onMouseOut = function(t) {
        k.findDOMNode(this.refs.button).blur();
    };
    s.prototype.render = function() {
        var t = j.createElement(i, {
            src: n('images/video/player/controls/hq_icons/fullscreen.png')
        });
        return (j.createElement(h, babelHelpers._extends({}, this.props, {
            'aria-label': m._("\uc804\uccb4 \ud654\uba74 \uc804\ud658"),
            className: "_zbd",
            image: t,
            onMouseOut: this.onMouseOut.bind(this),
            ref: 'button',
            tabIndex: this.props.tabIndex,
            type: 'button'
        })));
    };

    function s() {
        p.apply(this, arguments);
    }
    s.propTypes = {
        isFullscreen: r.bool,
        onToggleFullscreen: r.func,
        tabIndex: r.string
    };
    f.exports = s;
}, null);
__d('VideoPlaybackControl.react', ['AbstractButton.react', 'Image.react', 'React', 'ReactDOM', 'cx', 'fbt', 'ix', 'shallowCompare'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    if (c.__markCompiled) c.__markCompiled();
    var p, q, r = j.PropTypes;
    p = babelHelpers.inherits(s, j.Component);
    q = p && p.prototype;

    function s(t) {
        'use strict';
        q.constructor.call(this, t);
        this.state = {
            awaitingUpdate: false,
            isPlayingOverwrite: false
        };
    }
    s.prototype.shouldComponentUpdate = function(t, u) {
        'use strict';
        return o(this, t, u);
    };
    s.prototype.isPlaying = function() {
        'use strict';
        if (this.state.awaitingUpdate) return this.state.isPlayingOverwrite;
        return this.props.isPlaying;
    };
    s.prototype.onButtonClick = function() {
        'use strict';
        var t = this.isPlaying();
        this.setState({
            awaitingUpdate: true,
            isPlayingOverwrite: !t
        });
        if (t) {
            this.props.onPause && this.props.onPause();
        } else this.props.onPlay && this.props.onPlay();
    };
    s.prototype.componentWillReceiveProps = function() {
        'use strict';
        this.setState({
            awaitingUpdate: false
        });
    };
    s.prototype.onMouseOut = function(t) {
        'use strict';
        k.findDOMNode(this.refs.button).blur();
    };
    s.prototype.render = function() {
        'use strict';
        var t = this.isPlaying() ? n('images/video/player/controls/hq_icons/pause.png') : n('images/video/player/controls/hq_icons/play.png'),
            u = j.createElement(i, {
                src: t,
                className: "_zbc"
            }),
            v = "_zbd" + (' ' + "_1fmx"),
            w = this.isPlaying() ? m._("\uc77c\uc2dc \uc911\ub2e8") : m._("\uc7ac\uc0dd");
        return j.createElement(h, {
            'aria-label': w,
            className: v,
            image: u,
            onClick: this.onButtonClick.bind(this),
            onMouseOut: this.onMouseOut.bind(this),
            ref: 'button',
            tabIndex: this.props.tabIndex,
            type: 'button'
        });
    };
    s.propTypes = {
        isPlaying: r.bool,
        onPlay: r.func,
        onPause: r.func,
        tabIndex: r.string
    };
    f.exports = s;
}, null);
__d('VideoPlaybackTimer.react', ['React', 'joinClasses', 'cx', 'shallowCompare'], function a(b, c, d, e, f, g, h, i, j, k) {
    if (c.__markCompiled) c.__markCompiled();
    var l, m, n = h.PropTypes;
    l = babelHelpers.inherits(o, h.Component);
    m = l && l.prototype;
    o.prototype.shouldComponentUpdate = function(p, q) {
        'use strict';
        return k(this, p, q);
    };
    o.prototype.getClock = function(p) {
        'use strict';
        var q = Math.floor(p / 3600),
            r = p - q * 3600,
            s = Math.floor(r / 60),
            t = Math.floor(r - s * 60),
            u = ('0' + s).slice(-2),
            v = ('0' + t).slice(-2);
        if (q === 0) {
            return (h.createElement('span', {
                className: "_5qsq"
            }, s, ':', v));
        } else return (h.createElement('span', {
            className: "_5qsq"
        }, q, ':', u, ':', v));
    };
    o.prototype.getPosition = function() {
        'use strict';
        return this.getClock(this.props.playbackPosition);
    };
    o.prototype.getDuration = function() {
        'use strict';
        return this.getClock(this.props.playbackDuration);
    };
    o.prototype.render = function() {
        'use strict';
        var p = undefined;
        if (this.props.scrubberTimecode) {
            p = "_1ec";
            return (h.createElement('div', babelHelpers._extends({}, this.props, {
                className: i(this.props.className, p)
            }), this.getPosition()));
        } else {
            p = "_5qsr";
            return (h.createElement('div', babelHelpers._extends({}, this.props, {
                className: i(this.props.className, p)
            }), this.getPosition(), '/', this.getDuration()));
        }
    };

    function o() {
        'use strict';
        l.apply(this, arguments);
    }
    o.propTypes = {
        className: n.string,
        playbackDuration: n.number,
        playbackPosition: n.number,
        scrubberTimecode: n.bool
    };
    o.defaultProps = {
        className: '',
        playbackDuration: 0,
        playbackPosition: 0,
        scrubberTimecode: false
    };
    f.exports = o;
}, null);
__d('VideoScrubberPreviewSpriteCalculation', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        getImageCoordinatesInSpriteByTime: function(i, j) {
            var k = this.getTotalTimeInSprite(j.maxImagesPerSprite, j.timeIntervalBetweenImages),
                l = Math.floor(i % k / j.timeIntervalBetweenImages),
                m = Math.floor(l / j.imagesPerRow),
                n = l % j.imagesPerRow;
            return {
                x: n * j.previewScrubberWidth,
                y: m * j.previewScrubberHeight
            };
        },
        getSpriteIndex: function(i, j, k) {
            var l = this.getTotalTimeInSprite(j, k);
            return Math.floor(i / l) + 1;
        },
        getTotalTimeInSprite: function(i, j) {
            return i * j;
        }
    };
    f.exports = h;
}, null);
__d('VideoScrubber.react', ['EventListener', 'Map', 'React', 'ReactDOM', 'VideoPlaybackTimer.react', 'VideoScrubberPreviewSpriteCalculation', 'cx', 'getElementPosition', 'shallowCompare'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if (c.__markCompiled) c.__markCompiled();
    var q, r, s = j.PropTypes;
    q = babelHelpers.inherits(t, j.Component);
    r = q && q.prototype;

    function t(u) {
        'use strict';
        r.constructor.call(this, u);
        this.$VideoScrubber1 = new i();
        this.state = {
            awaitingUpdate: false,
            barCoords: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            mouseOver: false,
            nubEngaged: false,
            previewRatio: 0,
            scrubRatio: 0,
            timecodeRatio: 0,
            timecodeTimestamp: 0,
            scrubberPreviewSpriteIndex: 0,
            scrubberPreviewBackgroundPosition: {
                x: 0,
                y: 0
            },
            previewThumbnailInformation: {
                timeIntervalBetweenImages: 0,
                maxImagesPerSprite: 0,
                imagesPerRow: 0,
                imagesPerColumn: 0,
                previewScrubberWidth: 0,
                previewScrubberHeight: 0
            },
            lastSpriteDimension: {
                numRow: 0,
                numColumn: 0
            }
        };
    }
    t.prototype.shouldComponentUpdate = function(u, v) {
        'use strict';
        return p(this, u, v);
    };
    t.prototype.onDragNubBegin = function(u) {
        'use strict';
        if (u.button !== 0) return;
        this.setState({
            nubEngaged: true,
            scrubRatio: this.getClampedClickPositionProgress(u.clientX, this.state.barCoords)
        });
        this.props.onScrubBegin && this.props.onScrubBegin();
        u.stopPropagation();
        u.preventDefault();
    };
    t.prototype.componentWillReceiveProps = function(u) {
        'use strict';
        if (this.props.playbackPosition !== u.playbackPosition) this.setState({
            awaitingUpdate: false
        });
    };
    t.prototype.componentDidUpdate = function(u, v) {
        'use strict';
        if (!v.nubEngaged && this.state.nubEngaged) {
            this.$VideoScrubber2 = h.listen(document, 'mousemove', (function(w) {
                this.onDragNubUpdate(w);
                this.onTimecodeUpdate(w);
            }).bind(this));
            this.$VideoScrubber3 = h.listen(document, 'mouseup', this.onDragNubRelease.bind(this));
        } else if (v.nubEngaged && !this.state.nubEngaged) {
            if (this.$VideoScrubber2) this.$VideoScrubber2.remove();
            if (this.$VideoScrubber3) this.$VideoScrubber3.remove();
        }
        if (!v.mouseOver && this.state.mouseOver) {
            this.$VideoScrubber4 = h.listen(document, 'mousemove', this.onTimecodeUpdate.bind(this));
        } else if (v.mouseOver && !this.state.mouseOver)
            if (this.$VideoScrubber4) this.$VideoScrubber4.remove();
    };
    t.prototype.onTimecodeUpdate = function(u) {
        'use strict';
        var v = this.props.playbackDuration;
        if (!v) return;
        var w = this.getPositionRatio(u.clientX, this.state.barCoords) * v,
            x = this.$VideoScrubber5 ? this.$VideoScrubber5 : o(k.findDOMNode(this.refs.timecode));
        this.$VideoScrubber5 = x;
        if (!this.props.hasScrubberPreview) {
            var y = this.getPositionRatio(u.clientX, this.state.barCoords) - Math.ceil(x.width / 2) / this.state.barCoords.width;
            this.setState({
                timecodeTimestamp: w,
                timecodeRatio: y
            });
        } else if (this.props.previewThumbnailInformation) {
            if (this.state.previewThumbnailInformation.previewScrubberWidth === 0) this.retrievePreviewThumbnailInfo();
            k.unstable_batchedUpdates((function() {
                return (this.props.scrubberPreviewSprites && this.updatePreviewThumbnail(this.props.scrubberPreviewSprites, w, x, u.clientX));
            }).bind(this));
        }
        u.preventDefault();
        u.stopPropagation();
    };
    t.prototype.updatePreviewThumbnail = function(u, v, w, x) {
        'use strict';
        this.setState({
            timecodeTimestamp: v
        });
        var y = Math.floor(v),
            z = this.$VideoScrubber1;
        if (!this.isSpriteMapURIFetched()) this.$VideoScrubber1 = u;
        if (this.state.previewThumbnailInformation) {
            var aa = this.state.previewThumbnailInformation;
            this.updatePreviewThumbnailImage(y, aa, z);
        }
        this.updatePreviewThumbnailLocation(w, x);
    };
    t.prototype.updatePreviewThumbnailLocation = function(u, v) {
        'use strict';
        var w = this.$VideoScrubber6 ? this.$VideoScrubber6 : this.$VideoScrubber6 = o(k.findDOMNode(this.refs.previewThumbnailContainer));
        this.$VideoScrubber6 = w;
        var x = this.getPositionRatio(v, this.state.barCoords) - Math.ceil(w.width / 2) / this.state.barCoords.width,
            y = (w.width - u.width) / (2 * w.width);
        this.setState({
            timecodeRatio: y,
            previewRatio: x
        });
    };
    t.prototype.updatePreviewThumbnailImage = function(u, v, w) {
        'use strict';
        var x = this,
            y = m.getImageCoordinatesInSpriteByTime(u, v),
            z = m.getSpriteIndex(u, v.maxImagesPerSprite, v.timeIntervalBetweenImages);
        if (z == this.getNumberOfSprites() && this.state.lastSpriteDimension.numRow == 0 && this.$VideoScrubber1)(function() {
            var aa = x.$VideoScrubber1.get(z),
                ba = new Image(),
                ca = x.onLastImageLoad.bind(x);
            ba.onload = function() {
                ca(this.width, this.height);
            };
            ba.src = aa;
        })();
        this.setState({
            scrubberPreviewSpriteIndex: z,
            scrubberPreviewBackgroundPosition: y
        });
    };
    t.prototype.onLastImageLoad = function(u, v) {
        'use strict';
        this.setState({
            lastSpriteDimension: {
                numRow: v / this.state.previewThumbnailInformation.previewScrubberHeight,
                numColumn: u / this.state.previewThumbnailInformation.previewScrubberWidth
            }
        });
    };
    t.prototype.retrievePreviewThumbnailInfo = function() {
        'use strict';
        this.setState({
            previewThumbnailInformation: this.props.previewThumbnailInformation
        });
    };
    t.prototype.isSpriteMapURIFetched = function() {
        'use strict';
        if (this.$VideoScrubber1) {
            return this.$VideoScrubber1.size > 0;
        } else return false;
    };
    t.prototype.getPositionRatio = function(u, v) {
        'use strict';
        var w = u - v.x,
            x = w / v.width;
        return Math.min(Math.max(0, x), 1);
    };
    t.prototype.getClampedClickPositionProgress = function(u, v) {
        'use strict';
        var w = u - v.x,
            x = w / v.width;
        return Math.min(Math.max(0, x), 1);
    };
    t.prototype.getNumberOfSprites = function() {
        'use strict';
        if (this.$VideoScrubber1) return this.$VideoScrubber1.size;
        return 0;
    };
    t.prototype.onDragNubUpdate = function(u) {
        'use strict';
        this.setState({
            scrubRatio: this.getClampedClickPositionProgress(u.clientX, this.state.barCoords)
        });
        u.preventDefault();
        u.stopPropagation();
    };
    t.prototype.onDragNubRelease = function(u) {
        'use strict';
        var v = this.state.awaitingUpdate;
        if (this.props.onScrubEnd) {
            this.props.onScrubEnd(this.state.scrubRatio * this.props.playbackDuration);
            v = true;
        }
        this.setState({
            nubEngaged: false,
            awaitingUpdate: v
        });
        u.preventDefault();
        u.stopPropagation();
    };
    t.prototype.getPlayedRatio = function() {
        'use strict';
        if (this.state.nubEngaged || this.state.awaitingUpdate) return this.state.scrubRatio;
        return this.props.playbackPosition / this.props.playbackDuration;
    };
    t.prototype.getBufferedRatio = function() {
        'use strict';
        return this.props.bufferedPosition / this.props.playbackDuration;
    };
    t.prototype.onMouseEnter = function(u) {
        'use strict';
        var v = o(k.findDOMNode(this.refs.bar));
        this.setState({
            mouseOver: true,
            barCoords: v
        });
    };
    t.prototype.onMouseLeave = function(u) {
        'use strict';
        k.findDOMNode(this.refs.bar).blur();
        k.unstable_batchedUpdates((function() {
            this.setState({
                mouseOver: false
            });
            if (!this.state.nubEngaged) this.setState({
                scrubberPreviewSpriteIndex: 0,
                scrubberPreviewBackgroundPosition: {
                    x: 0,
                    y: 0
                }
            });
        }).bind(this));
        this.$VideoScrubber5 = null;
        this.$VideoScrubber6 = null;
    };
    t.prototype.onMouseEnterOnThumbnailOrTimecode = function(u) {
        'use strict';
        if (this.state.nubEngaged) return;
        var v = undefined;
        if (this.props.hasScrubberPreview) {
            v = this.refs.previewThumbnailContainer;
        } else v = this.refs.timecode;
        var w = k.findDOMNode(v);
        w.style.visibility = 'hidden';
    };
    t.prototype.onMouseLeaveOnThumbnailOrTimecode = function(u) {
        'use strict';
        if (this.state.nubEngaged) return;
        var v = undefined;
        if (this.props.hasScrubberPreview) {
            v = this.refs.previewThumbnailContainer;
        } else v = this.refs.timecode;
        var w = k.findDOMNode(v);
        w.style.visibility = 'visible';
    };
    t.prototype.render = function() {
        'use strict';
        var u = (this.props.hasScrubberPreview ? "_3iit" : '') + (!this.props.hasScrubberPreview ? ' ' + "_3iiu" : ''),
            v = "_2yu5" + (this.state.nubEngaged ? ' ' + "_2yu6" : ''),
            w = {
                width: this.getPlayedRatio() * 100 + '%'
            },
            x = {
                width: this.getBufferedRatio() * 100 + '%'
            },
            y = {
                left: this.state.timecodeRatio * 100 + '%'
            },
            z = {},
            aa = {},
            ba = null,
            ca = null;
        if (this.state.mouseOver || this.state.nubEngaged) {
            ba = j.createElement(l, {
                onMouseEnter: this.onMouseEnterOnThumbnailOrTimecode.bind(this),
                onMouseLeave: this.onMouseLeaveOnThumbnailOrTimecode.bind(this),
                className: u,
                ref: 'timecode',
                playbackDuration: 0,
                playbackPosition: this.state.timecodeTimestamp,
                style: y,
                scrubberTimecode: true
            });
            if (this.props.hasScrubberPreview && this.state.previewThumbnailInformation && this.$VideoScrubber1) {
                var da = '';
                if (this.state.scrubberPreviewSpriteIndex) da = 'url(' + this.$VideoScrubber1.get(this.state.scrubberPreviewSpriteIndex) + ')';
                var ea = undefined;
                if (this.getNumberOfSprites() !== this.state.scrubberPreviewSpriteIndex) {
                    ea = 100 * this.state.previewThumbnailInformation.imagesPerRow + '% ' + 100 * this.state.previewThumbnailInformation.imagesPerColumn + '%';
                } else if (this.state.lastSpriteDimension.numRow) {
                    ea = 100 * this.state.lastSpriteDimension.numColumn + '%' + 100 * this.state.lastSpriteDimension.numRow + '%';
                } else da = '';
                var fa = 1;
                if (this.props.isFullscreen) fa = 1.4;
                z = {
                    width: this.state.previewThumbnailInformation.previewScrubberWidth * fa + 'px',
                    height: this.state.previewThumbnailInformation.previewScrubberHeight * fa + 'px',
                    backgroundImage: da,
                    backgroundPosition: '-' + this.state.scrubberPreviewBackgroundPosition.x * fa + 'px ' + '-' + this.state.scrubberPreviewBackgroundPosition.y * fa + 'px',
                    backgroundSize: ea
                };
                aa = {
                    left: this.state.previewRatio * 100 + '%'
                };
                ca = j.createElement('div', {
                    onMouseEnter: this.onMouseEnterOnThumbnailOrTimecode.bind(this),
                    onMouseLeave: this.onMouseLeaveOnThumbnailOrTimecode.bind(this),
                    className: "_3iiv",
                    ref: 'previewThumbnailContainer',
                    style: aa
                }, j.createElement('div', {
                    className: "_3iiw",
                    ref: 'previewThumbnail',
                    style: z
                }), ba);
            }
        }
        return (j.createElement('div', {
            className: v
        }, j.createElement('div', {
            className: "_2yu7",
            ref: 'bar'
        }, j.createElement('div', {
            style: x,
            className: "_2yu8"
        }), j.createElement('div', {
            className: "_2yu9",
            style: w
        }, j.createElement('div', {
            className: "_2yua"
        })), j.createElement('div', {
            onMouseEnter: this.onMouseEnter.bind(this),
            onMouseLeave: this.onMouseLeave.bind(this),
            onMouseDown: this.onDragNubBegin.bind(this),
            className: "_2oxu",
            ref: 'hoverArea'
        }, this.props.hasScrubberPreview ? ca : ba))));
    };
    t.propTypes = {
        bufferedPosition: s.number,
        hasScrubberPreview: s.bool,
        isFullscreen: s.bool,
        onScrubBegin: s.func,
        onScrubEnd: s.func,
        playbackDuration: s.number,
        playbackPosition: s.number,
        previewThumbnailInformation: s.object,
        scrubberPreviewSprites: s.object,
        tabIndex: s.string
    };
    t.defaultProps = {
        hasScrubberPreview: false
    };
    f.exports = t;
}, null);
__d('VideoVolumeSlider.react', ['EventListener', 'React', 'ReactDOM', 'cx', 'getElementPosition', 'throttle', 'shallowCompare'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if (c.__markCompiled) c.__markCompiled();
    var o, p, q = i.PropTypes;
    o = babelHelpers.inherits(r, i.Component);
    p = o && o.prototype;

    function r(s) {
        'use strict';
        p.constructor.call(this, s);
        this.state = {
            awaitingUpdate: false,
            engaged: false,
            volume: s.volume
        };
    }
    r.prototype.shouldComponentUpdate = function(s, t) {
        'use strict';
        return n(this, s, t);
    };
    r.prototype.componentWillReceiveProps = function(s) {
        'use strict';
        this.setState({
            awaitingUpdate: false
        });
    };
    r.prototype.componentDidUpdate = function(s, t) {
        'use strict';
        if (!this.state.engaged && t.engaged) {
            if (this.$VideoVolumeSlider1) this.$VideoVolumeSlider1.remove();
            if (this.$VideoVolumeSlider2) this.$VideoVolumeSlider2.remove();
        } else if (this.state.engaged && !t.engaged) {
            this.$VideoVolumeSlider2 = h.listen(document, 'mousemove', m(this.onMouseMove.bind(this), 50, this));
            this.$VideoVolumeSlider1 = h.listen(document, 'mouseup', this.onMouseUp.bind(this));
        }
    };
    r.prototype.onMouseDown = function(s) {
        'use strict';
        if (s.button !== 0) return;
        this.props.onVolumeChangeBegin && this.props.onVolumeChangeBegin(this.state.volume);
        this.setState({
            engaged: true,
            volume: this.getClampedClickPositionVolume(s.clientY)
        });
        s.preventDefault();
        s.stopPropagation();
    };
    r.prototype.getClampedClickPositionVolume = function(s) {
        'use strict';
        var t = l(j.findDOMNode(this.refs.slider)),
            u = l(j.findDOMNode(this.refs.nub)).height,
            v = t.y - s + t.height + u / 2;
        return Math.max(0, Math.min(1, v / t.height));
    };
    r.prototype.onMouseUp = function(s) {
        'use strict';
        this.props.onVolumeChangeEnd && this.props.onVolumeChangeEnd(this.state.volume);
        this.setState({
            engaged: false,
            awaitingUpdate: true
        });
        s.preventDefault();
        s.stopPropagation();
    };
    r.prototype.onMouseMove = function(s) {
        'use strict';
        this.setState({
            volume: this.getClampedClickPositionVolume(s.clientY)
        });
        this.props.onVolumeChange && this.props.onVolumeChange(this.state.volume);
        s.preventDefault();
        s.stopPropagation();
    };
    r.prototype.getVolume = function() {
        'use strict';
        if (this.state.engaged || this.state.awaitingUpdate) return this.state.volume;
        return this.props.volume;
    };
    r.prototype.render = function() {
        'use strict';
        var s = {
                height: Math.round(this.getVolume() * 100) + '%'
            },
            t = "_3pao" + (this.state.engaged ? ' ' + "_2yu6" : '');
        return i.createElement('div', {
            onMouseDown: this.onMouseDown.bind(this),
            className: t
        }, i.createElement('div', {
            ref: 'slider',
            className: "_3paq"
        }, i.createElement('div', {
            style: s,
            className: "_3par"
        }, i.createElement('div', {
            ref: 'nub',
            className: "_3pas"
        }))), i.createElement('div', {
            className: "_3pat"
        }));
    };
    r.propTypes = {
        onVolumeChange: q.func,
        onVolumeChangeBegin: q.func,
        onVolumeChangeEnd: q.func,
        volume: q.number
    };
    r.defaultProps = {
        onVolumeChange: function(s) {},
        onVolumeChangeBegin: function(s) {},
        onVolumeChangeEnd: function(s) {},
        volume: 100
    };
    f.exports = r;
}, null);
__d('VideoVolumeControl.react', ['AbstractButton.react', 'Image.react', 'React', 'ReactDOM', 'VideoVolumeSlider.react', 'cx', 'fbt', 'invariant', 'ix', 'shallowCompare'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    if (c.__markCompiled) c.__markCompiled();
    var r, s, t = j.PropTypes;
    r = babelHelpers.inherits(u, j.Component);
    s = r && r.prototype;

    function u(v) {
        'use strict';
        s.constructor.call(this, v);
        this.state = {
            awaitingMuteUpdate: false,
            awaitingVolumeUpdate: false,
            lastVolumeBeforeMute: 1
        };
    }
    u.prototype.shouldComponentUpdate = function(v, w) {
        'use strict';
        return q(this, v, w);
    };
    u.prototype.onButtonClick = function() {
        'use strict';
        this.checkLastVolumeBeforeMuteInvariant();
        if (this.props.volume == 0) return this.onSliderVolumeChange(this.state.lastVolumeBeforeMute);
        this.props.onToggleMuted && this.props.onToggleMuted();
    };
    u.prototype.onMouseOut = function(v) {
        'use strict';
        k.findDOMNode(this.refs.button).blur();
    };
    u.prototype.getVolume = function() {
        'use strict';
        if (this.props.isMuted) return 0;
        return this.props.volume;
    };
    u.prototype.onSliderVolumeChangeBegin = function() {
        'use strict';
        var v = this.props.volume;
        if (v > 0) this.setState({
            lastVolumeBeforeMute: v
        });
    };
    u.prototype.onSliderVolumeChangeEnd = function(v) {
        'use strict';
        if (v > 0) this.setState({
            lastVolumeBeforeMute: v
        });
        this.onSliderVolumeChange(v);
    };
    u.prototype.onSliderVolumeChange = function(v) {
        'use strict';
        if (v > 0 && this.props.isMuted) this.props.onToggleMuted && this.props.onToggleMuted();
        this.props.onVolumeChange && this.props.onVolumeChange(v);
    };
    u.prototype.checkLastVolumeBeforeMuteInvariant = function() {
        'use strict';
        !(this.state.lastVolumeBeforeMute > 0 && this.state.lastVolumeBeforeMute <= 1) ? o(0): undefined;
    };
    u.prototype.render = function() {
        'use strict';
        var v = !this.getVolume() ? p('images/video/player/controls/hq_icons/muted.png') : p('images/video/player/controls/hq_icons/volume.png'),
            w = j.createElement(i, {
                src: v
            }),
            x = !this.getVolume() ? n._("\uc18c\ub9ac \ub044\uae30 \ucde8\uc18c") : n._("\uc18c\ub9ac \ub044\uae30");
        return j.createElement('div', {
            className: "_2swo"
        }, j.createElement(l, {
            onVolumeChangeBegin: this.onSliderVolumeChangeBegin.bind(this),
            onVolumeChangeEnd: this.onSliderVolumeChangeEnd.bind(this),
            onVolumeChange: this.onSliderVolumeChange.bind(this),
            volume: this.getVolume()
        }), j.createElement(h, {
            'aria-label': x,
            className: "_zbd",
            image: w,
            onClick: this.onButtonClick.bind(this),
            onMouseOut: this.onMouseOut.bind(this),
            ref: 'button',
            tabIndex: this.props.tabIndex,
            type: 'button'
        }));
    };
    u.propTypes = {
        isMuted: t.bool,
        onVolumeChange: t.func,
        onToggleMuted: t.func,
        tabIndex: t.string,
        volume: t.number
    };
    f.exports = u;
}, null);
__d('VideoControls.react', ['BootloadedComponent.react', 'VideoFullscreenControl.react', 'JSResource', 'MeasuredComponent.react', 'VideoPlaybackControl.react', 'VideoPlaybackTimer.react', 'React', 'VideoScrubber.react', 'VideoVolumeControl.react', 'cx', 'shallowCompare'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    if (c.__markCompiled) c.__markCompiled();
    var s, t, u = n.PropTypes,
        v = 180;
    s = babelHelpers.inherits(w, n.Component);
    t = s && s.prototype;

    function w(x) {
        'use strict';
        t.constructor.call(this, x);
        this.state = {
            minimal: false
        };
    }
    w.prototype.shouldComponentUpdate = function(x, y) {
        'use strict';
        return r(this, x, y);
    };
    w.prototype.isHidden = function() {
        'use strict';
        return this.props.hidden;
    };
    w.prototype.isTransparent = function() {
        'use strict';
        return this.props.transparent;
    };
    w.prototype.onMeasureCenterGroup = function(x) {
        'use strict';
        if (x.width !== 0) {
            var y = x.width < v;
            this.setState({
                minimal: y
            });
        }
    };
    w.prototype.componentDidUpdate = function(x, y) {
        'use strict';
        var z = this.props.isFullscreen !== x.isFullscreen,
            aa = this.props.hidden !== x.hidden && !this.props.hidden;
        if (z || aa) this.refs.measuredComponent.measure();
    };
    w.prototype.render = function() {
        'use strict';
        var x = "_1c7d" + (this.isHidden() ? ' ' + "_1c7e" : '') + (this.isTransparent() ? ' ' + "_2oy-" : ''),
            y = "_1c7f _1c7g",
            z = "_1c7f _1c7h",
            aa = "_1c7f _2pvx",
            ba = null,
            ca = !this.props.isWatchAndScrollActive || this.props.isFullscreen;
        if (!this.state.minimal && ca && !this.props.isLive) ba = n.createElement(m, {
            playbackPosition: this.props.playbackPosition,
            playbackDuration: this.props.playbackDuration
        });
        var da = null;
        if (this.props.hasHD && ca && !this.props.isLive) da = n.createElement(h, {
            bootloadLoader: j('VideoQualityControl.react'),
            bootloadPlaceholder: n.createElement('span', null),
            isHD: this.props.isHD,
            onToggleHD: this.props.onToggleHD,
            tabIndex: '0'
        });
        var ea = null;
        if (this.props.hasSubtitles && ca) ea = n.createElement(h, {
            bootloadLoader: j('VideoClosedCaptionsControl.react'),
            bootloadPlaceholder: n.createElement('span', null),
            areClosedCaptionsActive: this.props.areSubtitlesActive,
            onToggleClosedCaptions: this.props.onToggleSubtitles,
            tabIndex: '0'
        });
        var fa = null;
        if (this.props.hasWatchAndScroll && !this.props.isWatchAndScrollActive && !this.props.isFullscreen) fa = n.createElement(h, {
            bootloadLoader: j('VideoWatchAndScrollControl.react'),
            bootloadPlaceholder: n.createElement('span', null),
            isWatchAndScrollActive: this.props.isWatchAndScrollActive,
            onToggleWatchAndScroll: this.props.onToggleWatchAndScroll
        });
        var ga = null,
            ha = null;
        if (!this.props.isLive) {
            ha = n.createElement(l, {
                isPlaying: this.props.isPlaying,
                onPlay: this.props.onPlay,
                onPause: this.props.onPause,
                tabIndex: '0'
            });
            ga = n.createElement(o, {
                bufferedPosition: this.props.bufferedPosition,
                hasScrubberPreview: this.props.hasScrubberPreview,
                isFullscreen: this.props.isFullscreen,
                onScrubEnd: this.props.onScrubEnd,
                onScrubBegin: this.props.onScrubBegin,
                playbackPosition: this.props.playbackPosition,
                playbackDuration: this.props.playbackDuration,
                previewThumbnailInformation: this.props.previewThumbnailInformation,
                scrubberPreviewSprites: this.props.scrubberPreviewSprites,
                tabIndex: '0'
            });
        }
        return (n.createElement('div', {
            className: x
        }, n.createElement('div', {
            className: y
        }, ha), n.createElement(k, {
            onMeasure: this.onMeasureCenterGroup.bind(this),
            ref: 'measuredComponent'
        }, n.createElement('div', {
            className: aa
        }, ga)), n.createElement('div', {
            className: z
        }, ba, n.createElement(p, {
            isMuted: this.props.isMuted,
            onToggleMuted: this.props.onToggleMuted,
            onVolumeChange: this.props.onVolumeChange,
            volume: this.props.volume,
            tabIndex: '0'
        }), ea, da, fa, n.createElement(i, {
            isFullscreen: this.props.isFullscreen,
            onToggleFullscreen: this.props.onToggleFullscreen,
            tabIndex: '0'
        }))));
    };
    w.propTypes = {
        areSubtitlesActive: u.bool,
        hasHD: u.bool,
        hasSubtitles: u.bool,
        hasWatchAndScroll: u.bool,
        hidden: u.bool,
        isFullscreen: u.bool,
        isHD: u.bool,
        isLive: u.bool,
        isMuted: u.bool,
        isPlaying: u.bool,
        isWatchAndScrollActive: u.bool,
        onPause: u.func,
        onPlay: u.func,
        onSeek: u.func,
        onToggleFullscreen: u.func,
        onToggleHD: u.func,
        onToggleMuted: u.func,
        onToggleSubtitles: u.func,
        onToggleWatchAndScroll: u.func,
        onVolumeChange: u.func,
        playbackDuration: u.number,
        playbackPosition: u.number,
        transparent: u.bool,
        volume: u.number,
        scrubberPreviewSprites: u.object,
        hasScrubberPreview: u.bool,
        previewThumbnailInformation: u.object
    };
    w.defaultProps = {
        bufferedPosition: 0,
        hidden: false,
        isMuted: false,
        isPlaying: false,
        playbackDuration: 0,
        playbackPosition: 0,
        transparent: false,
        volume: 0
    };
    f.exports = w;
}, null);
__d('VideoControls', ['DeferredComponent.react', 'EventListener', 'Map', 'React', 'ReactDOM', 'VideoPlayerReason', 'cancelAnimationFrame', 'containsNode', 'destroyOnUnload', 'getActiveElement', 'logVideosClickTracking', 'requestAnimationFrame', 'throttle'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    if (c.__markCompiled) c.__markCompiled();

    function u(v, w, x) {
        'use strict';
        this.$VideoControls1 = v;
        this.$VideoControls2 = w;
        this.$VideoControls3 = 0;
        this.$VideoControls4 = 0;
        this.$VideoControls5 = 0;
        this.$VideoControls6 = 0;
        this.$VideoControls7 = false;
        this.$VideoControls8 = x.hideWhenAutoplaying;
        this.$VideoControls9 = x.hideWhenFinished;
        this.$VideoControls10 = x.hidePaused;
        this.$VideoControls11 = x.hasWatchAndScroll;
        this.$VideoControls12 = x.isLive;
        this.$VideoControls13 = false;
        this.$VideoControls14 = false;
        this.$VideoControls15 = x.lessFrequentRender;
        p(function() {
            return l.unmountComponentAtNode(w);
        });
        var y = this.$VideoControls1.getRootNode();
        i.listen(this.$VideoControls2, 'focusin', (function() {
            this.$VideoControls16 = true;
            this.scheduleRenderReactComponent();
        }).bind(this));
        i.listen(this.$VideoControls2, 'focusout', (function() {
            if (!o(this.$VideoControls2, q())) {
                this.$VideoControls16 = false;
                this.scheduleRenderReactComponent();
            }
        }).bind(this));
        i.listen(y, 'click', (function(aa) {
            if (this.$VideoControls16 && aa.detail) q().blur();
        }).bind(this));
        i.listen(y, 'mouseleave', (function() {
            this.$VideoControls17 = false;
            this.scheduleRenderReactComponent();
        }).bind(this));
        i.listen(y, 'mouseenter', (function() {
            this.$VideoControls17 = true;
            this.scheduleRenderReactComponent();
        }).bind(this));
        this.$VideoControls1.registerOption('VideoControls', 'acquireForceHideLock', (function() {
            this.$VideoControls6++;
            return {
                release: (function() {
                    this.$VideoControls6--;
                }).bind(this)
            };
        }).bind(this));
        this.$VideoControls1.registerOption('VideoControls', 'hideOnFinish', (function() {
            return this.$VideoControls9;
        }).bind(this), (function(aa) {
            return this.$VideoControls9 = aa;
        }).bind(this));
        this.$VideoControls1.registerOption('VideoControls', 'hideOnPause', (function() {
            return this.$VideoControls10;
        }).bind(this), (function(aa) {
            return this.$VideoControls10 = aa;
        }).bind(this));
        this.$VideoControls1.registerOption('VideoControls', 'hasWatchAndScroll', (function() {
            return this.$VideoControls11;
        }).bind(this), (function(aa) {
            return this.$VideoControls11 = aa;
        }).bind(this));
        this.$VideoControls1.registerOption('VideoControls', 'available', function() {
            return true;
        });
        this.$VideoControls1.registerOption('VideoControls', 'areControlsVisible', this.areControlsVisible.bind(this));
        i.listen(this.$VideoControls1.getRootNode(), 'mousemove', t(this.flashControls.bind(this), 200));
        this.scheduleRenderReactComponent();
        var z = ['changeVolume', 'loadedSubtitles', 'muteVideo', 'pausePlayback', 'stateChange', 'toggleFullscreen', 'toggleSubtitles', 'updateMetadata', 'unmuteVideo', 'qualityChange'];
        z.forEach((function(event) {
            return this.$VideoControls1.addListener(event, (function() {
                return this.scheduleRenderReactComponentWithVideoInfoUpdate();
            }).bind(this));
        }).bind(this));
        this.$VideoControls1.addListener('beginPlayback', (function() {
            return this.$VideoControls18();
        }).bind(this));
        this.$VideoControls1.addListener('updateStatus', (function(aa) {
            this.$VideoControls4 = aa.position;
            this.scheduleRenderReactComponent();
        }).bind(this));
        this.$VideoControls1.addListener('updateBuffer', (function(aa) {
            this.$VideoControls3 = aa.duration + aa.offset;
            this.scheduleRenderReactComponent();
        }).bind(this));
        this.$VideoControls1.addListener('optionsChange', (function(aa) {
            this.$VideoControls19();
        }).bind(this));
        this.$VideoControls1.addListener('resumeAutoplay', (function(aa) {
            this.$VideoControls20();
            this.scheduleRenderReactComponentWithVideoInfoUpdate();
        }).bind(this));
        this.$VideoControls1.addListener('enterWatchAndScroll', (function() {
            return this.onEnterWatchAndScroll();
        }).bind(this));
        this.$VideoControls1.addListener('exitWatchAndScroll', (function() {
            return this.onExitWatchAndScroll();
        }).bind(this));
        this.$VideoControls1.addListener('turnOffAutoplay', (function(aa) {
            this.$VideoControls21 = false;
        }).bind(this));
        this.$VideoControls20();
        this.$VideoControls22();
    }
    u.prototype.$VideoControls22 = function() {
        'use strict';
        this.$VideoControls23 = this.$VideoControls1.getOption('VideoScrubberPreviewComponent', 'scrubberPreviewSprites');
        this.$VideoControls24 = this.$VideoControls1.getOption('VideoScrubberPreviewComponent', 'hasPreviewThumbnails');
        this.$VideoControls25 = this.$VideoControls1.getOption('VideoScrubberPreviewComponent', 'previewThumbnailInformation');
    };
    u.prototype.$VideoControls20 = function() {
        'use strict';
        this.$VideoControls21 = this.$VideoControls1.getOption('FeedAutoplay', 'isAutoplaying');
    };
    u.prototype.$VideoControls19 = function() {
        'use strict';
        this.$VideoControls20();
        this.$VideoControls22();
    };
    u.prototype.$VideoControls18 = function() {
        'use strict';
        this.flashControls();
        this.$VideoControls26 = true;
        this.scheduleRenderReactComponentWithVideoInfoUpdate();
    };
    u.prototype.flashControls = function() {
        'use strict';
        if (!this.$VideoControls27) {
            this.$VideoControls27 = true;
            this.scheduleRenderReactComponent();
        }
        clearTimeout(this.$VideoControls28);
        this.$VideoControls28 = setTimeout((function() {
            this.$VideoControls27 = false;
            this.scheduleRenderReactComponent();
        }).bind(this), 3000);
    };
    u.prototype.areControlsVisible = function() {
        'use strict';
        if (this.$VideoControls6 > 0) return false;
        if (this.$VideoControls1.isState('playing')) {
            if (this.$VideoControls8 && this.$VideoControls21) return false;
            return this.$VideoControls16 || this.$VideoControls17 && this.$VideoControls27;
        } else if (this.$VideoControls1.isState('finished')) {
            return this.$VideoControls1.isFullscreen() || !this.$VideoControls9;
        } else if (this.$VideoControls1.isState('paused')) return this.$VideoControls1.isFullscreen() || !this.$VideoControls10;
        return false;
    };
    u.prototype.areControlsEnabled = function() {
        'use strict';
        if (this.$VideoControls6 > 0) return false;
        if (this.$VideoControls1.isState('playing')) {
            return true;
        } else if (this.$VideoControls1.isState('finished')) {
            return !this.$VideoControls9;
        } else if (this.$VideoControls1.isState('paused')) return !this.$VideoControls10;
        return false;
    };
    u.prototype.scheduleRenderReactComponentWithVideoInfoUpdate = function() {
        'use strict';
        this.$VideoControls29 = true;
        this.scheduleRenderReactComponent();
    };
    u.prototype.shouldRenderComponent = function() {
        'use strict';
        if (this.$VideoControls1.isState('loading') || this.$VideoControls1.isState('fallback')) return false;
        if (!this.$VideoControls15) return true;
        if (this.areControlsEnabled()) {
            this.$VideoControls13 = false;
            return true;
        }
        if (!this.$VideoControls13) {
            this.$VideoControls13 = true;
            return true;
        }
        return false;
    };
    u.prototype.scheduleRenderReactComponent = function() {
        'use strict';
        if (!this.shouldRenderComponent()) return;
        n(this.$VideoControls30);
        this.$VideoControls30 = s(this.renderReactComponent.bind(this));
    };
    u.prototype.renderReactComponent = function() {
        'use strict';
        if (this.$VideoControls29) this.$VideoControls31();
        var v = this.areControlsVisible();
        if (this.$VideoControls7 !== v) this.$VideoControls1.emit('VideoControls/visibilityUpdate', {
            areControlsVisible: v
        });
        this.$VideoControls7 = v;
        l.render(k.createElement(h, {
            deferredPlaceholder: k.createElement('span', null),
            deferredComponent: function(w) {
                return e(['VideoControls.react'], w);
            },
            areSubtitlesActive: this.$VideoControls32,
            bufferedPosition: this.$VideoControls3,
            hasHD: this.$VideoControls33,
            hasSubtitles: this.$VideoControls34,
            hasWatchAndScroll: this.$VideoControls11 && !this.$VideoControls1.getIsInChannel(),
            hidden: !this.areControlsEnabled(),
            isFullscreen: this.$VideoControls35,
            isHD: this.$VideoControls36,
            isLive: this.$VideoControls12,
            isMuted: this.$VideoControls37,
            isPlaying: this.$VideoControls26,
            isWatchAndScrollActive: this.$VideoControls14,
            onPause: this.pause.bind(this),
            onPlay: this.play.bind(this),
            onScrubBegin: this.scrubBegin.bind(this),
            onScrubEnd: this.scrubEnd.bind(this),
            onToggleFullscreen: this.toggleFullscreen.bind(this),
            onToggleHD: this.toggleHD.bind(this),
            onToggleMuted: this.toggleMuted.bind(this),
            onToggleSubtitles: this.toggleSubtitles.bind(this),
            onToggleWatchAndScroll: this.toggleWatchAndScroll.bind(this),
            onVolumeChange: this.changeVolume.bind(this),
            playbackDuration: this.$VideoControls5,
            playbackPosition: this.$VideoControls4,
            transparent: !v,
            volume: this.$VideoControls38,
            scrubberPreviewSprites: this.$VideoControls23,
            hasScrubberPreview: this.$VideoControls24,
            previewThumbnailInformation: this.$VideoControls25
        }), this.$VideoControls2);
    };
    u.prototype.$VideoControls31 = function() {
        'use strict';
        var v = this.$VideoControls1.getVideoInfo();
        if (v) {
            this.$VideoControls32 = v.areSubtitlesActive;
            this.$VideoControls34 = v.hasSubtitles;
            this.$VideoControls33 = v.hasHD;
            this.$VideoControls36 = v.isHD;
            this.$VideoControls37 = v.isMuted;
            this.$VideoControls26 = v.isPlaying;
            this.$VideoControls5 = v.playbackDuration;
            this.$VideoControls38 = v.volume;
            this.$VideoControls35 = this.$VideoControls1.isFullscreen();
            this.$VideoControls29 = false;
        }
    };
    u.prototype.toggleHD = function() {
        'use strict';
        this.$VideoControls1.toggleHD();
    };
    u.prototype.toggleWatchAndScroll = function() {
        'use strict';
        if (this.$VideoControls14) {
            this.$VideoControls1.emit('exitWatchAndScroll');
        } else this.$VideoControls1.emit('enterWatchAndScroll');
    };
    u.prototype.onEnterWatchAndScroll = function() {
        'use strict';
        this.$VideoControls14 = true;
        this.$VideoControls39 = this.$VideoControls10;
        this.$VideoControls10 = false;
    };
    u.prototype.onExitWatchAndScroll = function() {
        'use strict';
        this.$VideoControls14 = false;
        this.$VideoControls10 = this.$VideoControls39;
    };
    u.prototype.scrubBegin = function() {
        'use strict';
        this.$VideoControls1.pause(m.SEEK);
    };
    u.prototype.scrubEnd = function(v) {
        'use strict';
        this.$VideoControls1.seek(v);
        this.$VideoControls4 = v;
        this.$VideoControls1.play(m.SEEK);
    };
    u.prototype.toggleMuted = function() {
        'use strict';
        if (this.$VideoControls1.isMuted()) {
            r(this.$VideoControls1.getVideoNode());
            this.$VideoControls1.unmute();
        } else this.$VideoControls1.mute();
    };
    u.prototype.toggleFullscreen = function() {
        'use strict';
        if (!this.$VideoControls1.isFullscreen()) r(this.$VideoControls1.getVideoNode());
        this.$VideoControls1.toggleFullscreen();
    };
    u.prototype.toggleSubtitles = function() {
        'use strict';
        this.$VideoControls1.toggleSubtitles();
        this.scheduleRenderReactComponent();
    };
    u.prototype.changeVolume = function(v) {
        'use strict';
        this.$VideoControls1.setVolume(v);
    };
    u.prototype.play = function() {
        'use strict';
        r(this.$VideoControls1.getVideoNode());
        this.$VideoControls1.play(m.USER);
    };
    u.prototype.pause = function() {
        'use strict';
        this.$VideoControls1.pause(m.USER);
    };
    f.exports = u;
}, null);
__d('VideoCover', ['Bootloader', 'CSS', 'EventListener', 'invariant'], function a(b, c, d, e, f, g, h, i, j, k) {
    if (c.__markCompiled) c.__markCompiled();

    function l(m, n, o, p) {
        'use strict';
        var q = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
        !(o.length === m.getVideosCount()) ? k(0): undefined;
        this.$VideoCover1 = n;
        this.$VideoCover2 = o;
        this.$VideoCover3 = p;
        this.$VideoCover4 = m;
        if (q) {
            this.$VideoCover5 = q.hiddenAfterFinish;
            this.$VideoCover6 = q.showWhileBuffering;
            this.$VideoCover7 = q.showAfterFallback;
        }
        m.addListener('stateChange', (function() {
            return this.$VideoCover8();
        }).bind(this));
        m.addListener('beginPlayback', this.$VideoCover9.bind(this));
        m.addListener('finishPlayback', this.$VideoCover10.bind(this));
        m.addListener('buffering', this.$VideoCover11.bind(this));
        m.addListener('buffered', this.$VideoCover12.bind(this));
        m.addListener('switchVideo', this.$VideoCover13.bind(this));
        j.listen(this.$VideoCover1, 'click', this.$VideoCover14.bind(this));
    }
    l.prototype.$VideoCover11 = function() {
        'use strict';
        if (this.$VideoCover6) i.show(this.$VideoCover1);
    };
    l.prototype.$VideoCover12 = function() {
        'use strict';
        if (this.$VideoCover6) i.hide(this.$VideoCover1);
    };
    l.prototype.getCurrentCover = function() {
        'use strict';
        return this.$VideoCover2[this.$VideoCover4.getVideoIndex()];
    };
    l.prototype.$VideoCover14 = function() {
        'use strict';
        if (this.$VideoCover3 != null && this.$VideoCover3.length > 0) {
            h.loadModules(["PhotoSnowlift"], (function(m) {
                return m.bootstrap(this.$VideoCover3);
            }).bind(this));
        } else this.$VideoCover4.clickVideo();
    };
    l.prototype.$VideoCover9 = function() {
        'use strict';
        i.hide(this.$VideoCover1);
    };
    l.prototype.$VideoCover10 = function() {
        'use strict';
        if (this.$VideoCover5) return;
        i.show(this.$VideoCover1);
    };
    l.prototype.$VideoCover13 = function() {
        'use strict';
        this.$VideoCover2.forEach(function(m) {
            return i.hide(m);
        });
        i.show(this.getCurrentCover());
    };
    l.prototype.$VideoCover8 = function() {
        'use strict';
        if (this.$VideoCover4.isState('fallback') && this.$VideoCover7) i.show(this.$VideoCover1);
    };
    f.exports = l;
}, null);