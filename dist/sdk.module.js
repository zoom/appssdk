/* Zoom Apps SDK v0.16.36  */
/**
 * Copyright (c) 2025 Zoom Video Communications, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var version = "0.16.36";

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var ZERO_SIXTEEN = '0.16';
var ZERO_FOURTEEN = '0.14';

function createApplyProxy(targetApi, prop) {
    return new Proxy(targetApi, {
        apply: function (addEventListenerTarget, thisArg, argumentsList) {
            return Reflect.apply(addEventListenerTarget, thisArg, __spreadArray([
                prop
            ], argumentsList, true));
        },
    });
}
function interceptUndefinedMethod(sdk) {
    return new Proxy(sdk, {
        get: function (sdkTarget, prop) {
            var safeProp = String(prop);
            if (
            safeProp.charAt(0) !== '_' &&
                safeProp !== 'default' &&
                !sdkTarget[safeProp]) {
                console.warn("Method ".concat(safeProp, " is not available in this version of Zoom Apps SDK and might not work correctly. Please, update your version of Zoom Apps SDK"));
                if (String(safeProp).match(/^on/gm)) {
                    return createApplyProxy(sdk.addEventListener, safeProp);
                }
                else {
                    return createApplyProxy(sdk.callZoomApi, safeProp);
                }
            }
            else {
                return Reflect.get(sdkTarget, safeProp);
            }
        },
    });
}

var ZoomApiError =  (function (_super) {
    __extends(ZoomApiError, _super);
    function ZoomApiError(message, code, requestId) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.requestId = requestId;
        Object.setPrototypeOf(_this, ZoomApiError.prototype);
        return _this;
    }
    return ZoomApiError;
}(Error));

var NativeApis;
(function (NativeApis) {
    NativeApis["ALLOW_PARTICIPANT_TO_RECORD"] = "allowParticipantToRecord";
    NativeApis["AUTHORIZE"] = "authorize";
    NativeApis["BREAKOUT_ROOM_ADD"] = "addBreakoutRoom";
    NativeApis["BREAKOUT_ROOM_ASSIGN_PARTICIPANT"] = "assignParticipantToBreakoutRoom";
    NativeApis["BREAKOUT_ROOM_CHANGE"] = "changeBreakoutRoom";
    NativeApis["BREAKOUT_ROOM_DELETE"] = "deleteBreakoutRoom";
    NativeApis["BREAKOUT_ROOM_LIST_GET"] = "getBreakoutRoomList";
    NativeApis["BREAKOUT_ROOM_RENAME"] = "renameBreakoutRoom";
    NativeApis["BREAKOUT_ROOMS_CLOSE"] = "closeBreakoutRooms";
    NativeApis["BREAKOUT_ROOMS_CONFIGURE"] = "configureBreakoutRooms";
    NativeApis["BREAKOUT_ROOMS_CREATE"] = "createBreakoutRooms";
    NativeApis["BREAKOUT_ROOMS_OPEN"] = "openBreakoutRooms";
    NativeApis["CLEAR_IMAGE"] = "clearImage";
    NativeApis["CLEAR_PARTICIPANT"] = "clearParticipant";
    NativeApis["CLEAR_WEBVIEW"] = "clearWebView";
    NativeApis["CLOSE_RENDERING_CONTEXT"] = "closeRenderingContext";
    NativeApis["CLOUD_RECORDING"] = "cloudRecording";
    NativeApis["COLLABORATE_END"] = "endCollaborate";
    NativeApis["COLLABORATE_JOIN"] = "joinCollaborate";
    NativeApis["COLLABORATE_LEAVE"] = "leaveCollaborate";
    NativeApis["COLLABORATE_START"] = "startCollaborate";
    NativeApis["CONFIG"] = "config";
    NativeApis["CONNECT"] = "connect";
    NativeApis["DRAW_IMAGE"] = "drawImage";
    NativeApis["DRAW_PARTICIPANT"] = "drawParticipant";
    NativeApis["DRAW_WEBVIEW"] = "drawWebView";
    NativeApis["END_SYNC_DATA"] = "endSyncData";
    NativeApis["EXPAND_APP"] = "expandApp";
    NativeApis["GALLERY_PAGE_SET"] = "setGalleryPage";
    NativeApis["GALLERY_PAGE_GET"] = "getGalleryPage";
    NativeApis["GET_MEETING_CONTEXT"] = "getMeetingContext";
    NativeApis["GET_MEETING_JOIN_URL"] = "getMeetingJoinUrl";
    NativeApis["GET_MEETING_PARTICIPANTS"] = "getMeetingParticipants";
    NativeApis["GET_MEETING_UUID"] = "getMeetingUUID";
    NativeApis["GET_RECORDING_CONTEXT"] = "getRecordingContext";
    NativeApis["GET_RUNNING_CONTEXT"] = "getRunningContext";
    NativeApis["GET_SUPPORTED_JS_APIS"] = "getSupportedJsApis";
    NativeApis["GET_USER_CONTEXT"] = "getUserContext";
    NativeApis["GET_AUDIO_STATE"] = "getAudioState";
    NativeApis["GET_VIDEO_STATE"] = "getVideoState";
    NativeApis["LAUNCH_APP_IN_MEETING"] = "launchAppInMeeting";
    NativeApis["LIST_CAMERAS"] = "listCameras";
    NativeApis["OPEN_URL"] = "openUrl";
    NativeApis["POST_MESSAGE"] = "postMessage";
    NativeApis["PROMPT_AUTHORIZE"] = "promptAuthorize";
    NativeApis["REMOVE_VIRTUAL_BACKGROUND"] = "removeVirtualBackground";
    NativeApis["REMOVE_VIRTUAL_FOREGROUND"] = "removeVirtualForeground";
    NativeApis["RUN_RENDERING_CONTEXT"] = "runRenderingContext";
    NativeApis["SEND_APP_INVITATION"] = "sendAppInvitation";
    NativeApis["SEND_APP_INVITATION_TO_ALL_PARTICIPANTS"] = "sendAppInvitationToAllParticipants";
    NativeApis["SEND_APP_INVITATION_TO_MEETING_OWNER"] = "sendAppInvitationToMeetingOwner";
    NativeApis["SET_CAMERA"] = "setCamera";
    NativeApis["SET_AUDIO_STATE"] = "setAudioState";
    NativeApis["SET_VIDEO_STATE"] = "setVideoState";
    NativeApis["SET_VIDEO_MIRROR_EFFECT"] = "setVideoMirrorEffect";
    NativeApis["SET_VIRTUAL_BACKGROUND"] = "setVirtualBackground";
    NativeApis["SET_VIRTUAL_FOREGROUND"] = "setVirtualForeground";
    NativeApis["SHARE_APP"] = "shareApp";
    NativeApis["SHARE_COMPUTER_AUDIO"] = "shareComputerAudio";
    NativeApis["SHOW_APP_INVITATION_DIALOG"] = "showAppInvitationDialog";
    NativeApis["SHOW_NOTIFICATION"] = "showNotification";
    NativeApis["TOGGLE_PARTICIPANT_MEDIA_AUDIO"] = "toggleParticipantMediaAudio";
    NativeApis["GET_APP_CONTEXT"] = "getAppContext";
    NativeApis["ADD_PARTICIPANT_SPOTLIGHT"] = "addParticipantSpotlight";
    NativeApis["REMOVE_PARTICIPANT_SPOTLIGHTS"] = "removeParticipantSpotlights";
    NativeApis["GET_PARTICIPANT_SPOTLIGHTS"] = "getParticipantSpotlights";
    NativeApis["ADD_PARTICIPANT_PINS"] = "addParticipantPins";
    NativeApis["REMOVE_PARTICIPANT_PINS"] = "removeParticipantPins";
    NativeApis["SET_FEEDBACK_REACTION"] = "setFeedbackReaction";
    NativeApis["REMOVE_FEEDBACK_REACTION"] = "removeFeedbackReaction";
    NativeApis["REMOVE_ALL_FEEDBACK_REACTION"] = "removeAllFeedbackReaction";
    NativeApis["ALLOW_ATTENDEES_TO_SPEAK"] = "allowAttendeesToSpeak";
    NativeApis["DISALLOW_ATTENDEES_TO_SPEAK"] = "disallowAttendeesToSpeak";
    NativeApis["REMOVE_WEBINAR_ATTENDEES"] = "removeWebinarAttendees";
    NativeApis["SET_AUDIO_SETTINGS"] = "setAudioSettings";
    NativeApis["GET_AUDIO_SETTINGS"] = "getAudioSettings";
    NativeApis["GET_INCOMING_PARTICIPANT_AUDIO_STATE"] = "getIncomingParticipantAudioState";
    NativeApis["SET_INCOMING_PARTICIPANT_AUDIO_STATE"] = "setIncomingParticipantAudioState";
    NativeApis["SET_VIDEO_SETTINGS"] = "setVideoSettings";
    NativeApis["GET_VIDEO_SETTINGS"] = "getVideoSettings";
    NativeApis["PROMPT_SHARE_SCREEN"] = "promptShareScreen";
    NativeApis["SHOW_MEETING_INVITATION_DIALOG"] = "showMeetingInvitationDialog";
    NativeApis["GET_CHAT_CONTEXT"] = "getChatContext";
    NativeApis["COMPOSE_CARD"] = "composeCard";
    NativeApis["BROADCAST_VOICE_TO_BREAKOUT_ROOMS"] = "broadcastVoiceToBreakoutRooms";
    NativeApis["STOP_SHARE_SCREEN"] = "stopShareScreen";
    NativeApis["GET_GALLERY_ORDER_LIST"] = "getGalleryOrderList";
    NativeApis["SET_SCREEN_NAME"] = "setScreenName";
    NativeApis["SET_PARTICIPANT_SCREEN_NAME"] = "setParticipantScreenName";
    NativeApis["SET_EMOJI_REACTION"] = "setEmojiReaction";
    NativeApis["GET_EMOJI_CONFIGURATION"] = "getEmojiConfiguration";
    NativeApis["GET_MEETING_VIEW"] = "getMeetingView";
    NativeApis["SET_MEETING_VIEW"] = "setMeetingView";
    NativeApis["SET_VIDEO_FILTER"] = "setVideoFilter";
    NativeApis["DELETE_VIDEO_FILTER"] = "deleteVideoFilter";
    NativeApis["LEAVE_MEETING"] = "leaveMeeting";
    NativeApis["JOIN_MEETING"] = "joinMeeting";
    NativeApis["GET_ZOOM_ROOM_CONTEXT"] = "getZoomRoomContext";
    NativeApis["GET_ZOOM_ROOM_CONTROLLER_CREDENTIALS"] = "getZoomRoomControllerCredentials";
    NativeApis["TOGGLE_PARTICIPANT_MEDIA_VIDEO"] = "toggleParticipantMediaVideo";
    NativeApis["SEND_MESSAGE"] = "sendMessage";
    NativeApis["PUT_PARTICIPANT_TO_WAITING_ROOM"] = "putParticipantToWaitingRoom";
    NativeApis["ADMIT_PARTICIPANT_FROM_WAITING_ROOM"] = "admitParticipantFromWaitingRoom";
    NativeApis["GET_WAITING_ROOM_PARTICIPANTS"] = "getWaitingRoomParticipants";
    NativeApis["GET_WAITING_ROOM_STATE"] = "getWaitingRoomState";
    NativeApis["SET_WAITING_ROOM_STATE"] = "setWaitingRoomState";
    NativeApis["GET_PHONE_CONTEXT"] = "getPhoneContext";
    NativeApis["MAKE_PHONE_CALL"] = "makePhoneCall";
    NativeApis["GET_ENGAGEMENT_CONTEXT"] = "getEngagementContext";
    NativeApis["GET_ENGAGEMENT_STATUS"] = "getEngagementStatus";
    NativeApis["GET_ENGAGEMENT_SECURABLE_STATUS"] = "getEngagementSecurableStatus";
    NativeApis["START_MEDIA_REDIRECTION"] = "startMediaRedirection";
    NativeApis["APP_POPOUT"] = "appPopout";
    NativeApis["BRING_APP_TO_FRONT"] = "bringAppToFront";
    NativeApis["SEND_APP_TO_BACKGROUND"] = "sendAppToBackground";
    NativeApis["CLOSE_APP"] = "closeApp";
    NativeApis["GET_MEETING_LANGUAGES"] = "getMeetingLanguages";
    NativeApis["GET_MEETING_PARTICIPANTS_EMAIL"] = "getMeetingParticipantsEmail";
    NativeApis["GET_MEETING_CHAT_CONTEXT"] = "getMeetingChatContext";
    NativeApis["GET_MAIL_CONTEXT"] = "getMailContext";
    NativeApis["GET_MAIL_THREAD"] = "getMailThread";
    NativeApis["GET_MAIL_MESSAGE"] = "getMailMessage";
    NativeApis["GET_MAIL_ACTIVE_EDITOR_DATA"] = "getMailActiveEditorData";
    NativeApis["SET_MAIL_ACTIVE_EDITOR_DATA"] = "setMailActiveEditorData";
    NativeApis["REGISTER_MAIL_EDITOR_COMPONENT"] = "registerMailEditorComponent";
    NativeApis["INSERT_CONTENT_TO_MAIL_ACTIVE_EDITOR"] = "insertContentToMailActiveEditor";
    NativeApis["RENDER_IN_MAIL_ACTIVE_EDITOR"] = "renderInMailActiveEditor";
    NativeApis["RENDER_IN_MAIL"] = "renderInMail";
    NativeApis["SUBSCRIBE_BEFORE_MAIL_SEND"] = "subscribeBeforeMailSend";
    NativeApis["UNSUBSCRIBE_BEFORE_MAIL_SEND"] = "unsubscribeBeforeMailSend";
    NativeApis["CALLBACK_TO_MAIL"] = "callbackToMail";
    NativeApis["TAKE_PARTICIPANT_PHOTO"] = "takeParticipantPhoto";
    NativeApis["TAKE_MY_PHOTO"] = "takeMyPhoto";
    NativeApis["START_COLLABORATE_SIDECAR"] = "startCollaborateSidecar";
    NativeApis["END_COLLABORATE_SIDECAR"] = "endCollaborateSidecar";
    NativeApis["GET_ENGAGEMENT_VARIABLE_VALUE"] = "getEngagementVariableValue";
    NativeApis["GET_APP_VARIABLE_LIST"] = "getAppVariableList";
    NativeApis["SEND_MESSAGE_TO_CHAT"] = "sendMessageToChat";
    NativeApis["SET_DYNAMIC_INDICATOR"] = "setDynamicIndicator";
    NativeApis["GET_DYNAMIC_INDICATOR"] = "getDynamicIndicator";
    NativeApis["REMOVE_DYNAMIC_INDICATOR"] = "removeDynamicIndicator";
    NativeApis["SET_DYNAMIC_INDICATOR_STYLE"] = "setDynamicIndicatorStyle";
    NativeApis["EXTEND_DYNAMIC_INDICATOR"] = "extendDynamicIndicator";
    NativeApis["PROMPT_UPGRADE_REQUEST"] = "promptUpgradeRequest";
    NativeApis["REMOVE_PARTICIPANT"] = "removeParticipant";
    NativeApis["SEND_KEYPAD_CONTROLS"] = "sendKeypadControls";
    NativeApis["GET_ZOOM_ROOM_DEVICE_DETAILS"] = "getZoomRoomDeviceDetails";
    NativeApis["START_RTMS"] = "startRTMS";
    NativeApis["STOP_RTMS"] = "stopRTMS";
    NativeApis["PAUSE_RTMS"] = "pauseRTMS";
    NativeApis["RESUME_RTMS"] = "resumeRTMS";
    NativeApis["GET_RTMS_STATUS"] = "getRTMSStatus";
})(NativeApis || (NativeApis = {}));
var NativeEvents;
(function (NativeEvents) {
    NativeEvents["ON_ACTIVE_SPEAKER_CHANGE"] = "onActiveSpeakerChange";
    NativeEvents["ON_APP_POPOUT"] = "onAppPopout";
    NativeEvents["ON_CLOUD_RECORDING"] = "onCloudRecording";
    NativeEvents["ON_CONNECT"] = "onConnect";
    NativeEvents["ON_EXPAND_APP"] = "onExpandApp";
    NativeEvents["ON_APP_VISIBILITY_CHANGE"] = "onAppVisibilityChange";
    NativeEvents["ON_MEETING"] = "onMeeting";
    NativeEvents["ON_MESSAGE"] = "onMessage";
    NativeEvents["ON_MY_ACTIVE_SPEAKER_CHANGE"] = "onMyActiveSpeakerChange";
    NativeEvents["ON_MY_MEDIA_CHANGE"] = "onMyMediaChange";
    NativeEvents["ON_MY_REACTION"] = "onMyReaction";
    NativeEvents["ON_MY_USER_CONTEXT_CHANGE"] = "onMyUserContextChange";
    NativeEvents["ON_PARTICIPANT_CHANGE"] = "onParticipantChange";
    NativeEvents["ON_REACTION"] = "onReaction";
    NativeEvents["ON_SEND_APP_INVITATION"] = "sendAppInvitation";
    NativeEvents["ON_SEND_APP_INVITATION_COMPATIBILITY"] = "onSendAppInvitation";
    NativeEvents["ON_SHARE_APP"] = "shareApp";
    NativeEvents["ON_SHARE_APP_COMPATIBILITY"] = "onShareApp";
    NativeEvents["ON_MEETING_CONFIG_CHANGED"] = "onMeetingConfigChanged";
    NativeEvents["ON_BREAKOUT_ROOM_CHANGE"] = "onBreakoutRoomChange";
    NativeEvents["ON_INVITE_COLLABORATION"] = "onInviteCollaboration";
    NativeEvents["ON_COLLABORATE_CHANGE"] = "onCollaborateChange";
    NativeEvents["ON_GALLERY_PAGE_CHANGE"] = "onGalleryPageChange";
    NativeEvents["ON_RUNNING_CONTEXT_CHANGE"] = "onRunningContextChange";
    NativeEvents["ON_AUTHORIZED"] = "onAuthorized";
    NativeEvents["ON_CLOSE_APP_FOR_PARTICIPANTS"] = "onCloseAppForParticipants";
    NativeEvents["ON_RENDERED_APP_OPENED"] = "onRenderedAppOpened";
    NativeEvents["ON_FEEDBACK_REACTION_EVENT"] = "onFeedbackReaction";
    NativeEvents["ON_REMOVE_FEEDBACK_REACTION_EVENT"] = "onRemoveFeedbackReaction";
    NativeEvents["ON_INCOMING_PARTICIPANT_AUDIO_CHANGE"] = "onIncomingParticipantAudioChange";
    NativeEvents["ON_SHARE_SCREEN"] = "onShareScreen";
    NativeEvents["ON_SHARE_COMPUTER_AUDIO"] = "onShareComputerAudio";
    NativeEvents["ON_GALLERY_ORDER"] = "onGalleryOrder";
    NativeEvents["ON_EMOJI_REACTION"] = "onEmojiReaction";
    NativeEvents["ON_MEETING_VIEW_CHANGE"] = "onMeetingViewChange";
    NativeEvents["ON_PHONE_CALLEE_ANSWERED"] = "onPhoneCalleeAnswered";
    NativeEvents["ON_PHONE_CALLER_ENDED"] = "onPhoneCallerEnded";
    NativeEvents["ON_PHONE_CALLEE_ENDED"] = "onPhoneCalleeEnded";
    NativeEvents["ON_PHONE_CALLEE_REJECTED"] = "onPhoneCalleeRejected";
    NativeEvents["ON_PHONE_CALLER_MEETING_INVITING"] = "onPhoneCallerMeetingInviting";
    NativeEvents["ON_PHONE_CALLEE_MEETING_INVITE"] = "onPhoneCalleeMeetingInvite";
    NativeEvents["ON_PHONE_CONTEXT"] = "onPhoneContext";
    NativeEvents["ON_ENGAGEMENT_CONTEXT_CHANGE"] = "onEngagementContextChange";
    NativeEvents["ON_ENGAGEMENT_STATUS_CHANGE"] = "onEngagementStatusChange";
    NativeEvents["ON_ENGAGEMENT_MEDIA_REDIRECT"] = "onEngagementMediaRedirect";
    NativeEvents["ON_MEETING_LANGUAGES_CHANGE"] = "onMeetingLanguagesChange";
    NativeEvents["ON_WAITING_ROOM_STATE_CHANGE"] = "onWaitingRoomStateChange";
    NativeEvents["ON_WAITING_ROOM_PARTICIPANT_LEAVE"] = "onWaitingRoomParticipantLeave";
    NativeEvents["ON_WAITING_ROOM_PARTICIPANT_JOIN"] = "onWaitingRoomParticipantJoin";
    NativeEvents["ON_PARTICIPANT_EMAIL"] = "onParticipantEmail";
    NativeEvents["ON_PHOTO"] = "onPhoto";
    NativeEvents["ON_ENGAGEMENT_VARIABLE_VALUE_CHANGE"] = "onEngagementVariableValueChange";
    NativeEvents["ON_SET_DYNAMIC_INDICATOR"] = "onSetDynamicIndicator";
    NativeEvents["ON_REMOVE_DYNAMIC_INDICATOR"] = "onRemoveDynamicIndicator";
    NativeEvents["ON_DYNAMIC_INDICATOR_STYLE_CHANGE"] = "onDynamicIndicatorStyleChange";
    NativeEvents["ON_EXTEND_DYNAMIC_INDICATOR"] = "onExtendDynamicIndicator";
    NativeEvents["ON_MAIL_ACTIVE_EDITOR_CHANGE"] = "onMailActiveEditorChange";
    NativeEvents["ON_MAIL_ACTIVE_EDITOR_TYPE_CHANGE"] = "onMailActiveEditorTypeChange";
    NativeEvents["ON_MAIL_ACTIVE_EDITOR_DATA_CHANGE"] = "onMailActiveEditorDataChange";
    NativeEvents["ON_MAIL_EDITOR_DESTROY"] = "onMailEditorDestroy";
    NativeEvents["ON_APP_TOGGLE_IN_MAIL_ACTIVE_EDITOR"] = "onAppToggleInMailActiveEditor";
    NativeEvents["ON_APP_UI_ACTION_IN_MAIL"] = "onAppUIActionInMail";
    NativeEvents["ON_BEFORE_MAIL_SEND"] = "onBeforeMailSend";
    NativeEvents["ON_UPGRADE_REQUEST"] = "onUpgradeRequest";
    NativeEvents["ON_ZOOM_ROOM_EVENT"] = "onZoomRoomEvent";
    NativeEvents["ON_RTMS_STATUS_CHANGE"] = "onRTMSStatusChange";
})(NativeEvents || (NativeEvents = {}));
var Timeouts;
(function (Timeouts) {
    Timeouts[Timeouts["DEFAULT"] = 10000] = "DEFAULT";
    Timeouts[Timeouts["SET_VIRTUAL_BACKGROUND"] = 120000] = "SET_VIRTUAL_BACKGROUND";
    Timeouts[Timeouts["RUN_RENDERING_CONTEXT"] = 120000] = "RUN_RENDERING_CONTEXT";
})(Timeouts || (Timeouts = {}));

/**
 * @license
 * MIT LICENSE
 * Copyright 2011 Jon Leighton
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function base64ArrayBuffer(arrayBuffer) {
    var bytes = new Uint8Array(arrayBuffer);
    var byteLength = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength = byteLength - byteRemainder;
    var base64 = '';
    var a, b, c, d;
    var chunk;
    for (var i = 0; i < mainLength; i = i + 3) {
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        a = (chunk & 16515072) >> 18;
        b = (chunk & 258048) >> 12;
        c = (chunk & 4032) >> 6;
        d = chunk & 63;
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }
    if (byteRemainder == 1) {
        chunk = bytes[mainLength];
        a = (chunk & 252) >> 2;
        b = (chunk & 3) << 4;
        base64 += encodings[a] + encodings[b] + '==';
    }
    else if (byteRemainder == 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
        a = (chunk & 64512) >> 10;
        b = (chunk & 1008) >> 4;
        c = (chunk & 15) << 2;
        base64 += encodings[a] + encodings[b] + encodings[c] + '=';
    }
    return base64;
}

function serialize(message) {
    return JSON.stringify(message, function (key, value) {
        if ((value === null || value === void 0 ? void 0 : value.constructor) === ImageData) {
            return serializeImageData(value);
        }
        return value;
    });
}
function serializeImageData(imageData) {
    return {
        width: imageData.width,
        height: imageData.height,
        bitmap: 'data:object/Uint8ClampedArray;base64,' +
            base64ArrayBuffer(imageData.data),
    };
}

var getWindow = (function () { return window; });

var addedNativeInterfaceEventListener = false;
var addedWebClientEventListener = false;
function detectBrowser(window) {
    var _a, _b, _c;
    if (inIframe()) {
        return {
            type: 'webClient',
            nativeInterface: window.parent,
        };
    }
    else if (window.android) {
        return {
            type: 'android',
            nativeInterface: window.android,
        };
    }
    else if ((_a = window.chrome) === null || _a === void 0 ? void 0 : _a.webview) {
        return {
            type: 'chrome',
            nativeInterface: window.chrome.webview,
        };
    }
    else if ((_c = (_b = window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers) === null || _c === void 0 ? void 0 : _c.jsOCHelper) {
        return {
            type: 'webkit',
            nativeInterface: window.webkit.messageHandlers.jsOCHelper,
        };
    }
}
function setPostMessage() {
    var win = getWindow();
    var browser = detectBrowser(win);
    if (!browser) {
        throw new Error('The Zoom Apps SDK is not supported by this browser');
    }
    if (browser.type === 'chrome') {
        if (!addedNativeInterfaceEventListener) {
            browser.nativeInterface.addEventListener('message', this.native2js.bind(this));
            addedNativeInterfaceEventListener = true;
        }
    }
    if (browser.type === 'webClient') {
        if (!addedWebClientEventListener) {
            window.addEventListener('message', this.native2js.bind(this));
            addedWebClientEventListener = true;
        }
    }
    if (!win.zoomSdk) {
        win.zoomSdk = this;
    }
    return function (message) {
        try {
            var json = serialize(message);
            browser.type === 'webClient'
                ? browser.nativeInterface.postMessage(json, '*')
                : browser.nativeInterface.postMessage(json);
        }
        catch (error) {
            throw new Error('Failed to serialize NativeApiRequest');
        }
    };
}
function inIframe() {
    try {
        return window.self !== window.top;
    }
    catch (e) {
        return true;
    }
}

var FIXED_WIDTH = 1280;
var helpers$1 = {
    getImageData: function (fileUrl, width, height) {
        return new Promise(function (resolve) {
            var canvas = document.createElement('canvas');
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var calculatedWidth = width || FIXED_WIDTH;
                var calculatedHeight = height || (calculatedWidth * img.height) / img.width;
                canvas.width = calculatedWidth;
                canvas.height = calculatedHeight;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, calculatedWidth, calculatedHeight);
                var imageData = ctx.getImageData(0, 0, calculatedWidth, calculatedHeight);
                resolve(imageData);
            };
            img.src = fileUrl;
        });
    },
};

var BASE_VERSION = '0.0.0';
var FIVE_ELEVEN_ZERO = '5.11.0';
var FIVE_SEVENTEEN_FIVE = '5.17.5';
var SIX_TWO_FIVE = '6.2.5';
var MAX_MAX_MAX = '999.999.999';

var identity = function (x) { return x; };
var noop = function (x) { };
function renameKeys(keyMap) {
    return function (data) {
        if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
            return Object.keys(data).reduce(function (acc, key) {
                var _a;
                return __assign(__assign({}, acc), (_a = {}, _a[keyMap[key] || key] = data[key], _a));
            }, {});
        }
        return data;
    };
}
function renameKeysArrayOfObjects(keyMap) {
    return function (data) {
        if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
            return Object.keys(data).reduce(function (acc, key) {
                var newKey = keyMap[key] || key;
                if (typeof data[key] === 'object' && data[key] !== null) {
                    acc[newKey] = renameKeys(keyMap)(data[key]);
                }
                else {
                    acc[newKey] = data[key];
                }
                return acc;
            }, {});
        }
        return data;
    };
}
function mapJoinMeetingInputs() {
    return function (options) {
        var _a, _b;
        var updatedInputs = { joinURL: '', newHost: '' };
        updatedInputs.joinURL = (_a = options.joinURL) !== null && _a !== void 0 ? _a : '';
        updatedInputs.newHost = (_b = options.newHost) !== null && _b !== void 0 ? _b : '';
        return updatedInputs;
    };
}
function wrapInObject(_a) {
    var _b;
    var key = _a.key, value = _a.value;
    return _b = {}, _b[key] = value, _b;
}
function wrapInMessageObject(value) {
    if (typeof value === 'string')
        return wrapInObject({ key: 'message', value: value });
    return value;
}

var _a$2, _b$1, _c$1, _d$1, _e$1, _f$1, _g$1, _h$1, _j$1, _k$1, _l$1, _m$1, _o$1, _p$1, _q$1, _r$1, _s$1, _t$1, _u$1, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134, _135, _136, _137, _138, _139, _140, _141, _142, _143, _144, _145, _146, _147, _148, _149, _150, _151, _152, _153;
var compatibilityFnsApis = (_a$2 = {},
    _a$2[NativeApis.GET_APP_VARIABLE_LIST] = (_b$1 = {},
        _b$1[ZERO_SIXTEEN] = (_c$1 = {},
            _c$1[SIX_TWO_FIVE] = {
                mapOutput: renameKeysArrayOfObjects({
                    defaultValue: 'defaultvalue',
                }),
            },
            _c$1),
        _b$1),
    _a$2[NativeApis.SEND_APP_INVITATION] = (_d$1 = {},
        _d$1[ZERO_SIXTEEN] = (_e$1 = {},
            _e$1[BASE_VERSION] = {
                mapInput: renameKeys({
                    participants: 'user_list',
                    participantUUIDs: 'user_UUID_list',
                }),
            },
            _e$1),
        _d$1),
    _a$2[NativeApis.TOGGLE_PARTICIPANT_MEDIA_AUDIO] = (_f$1 = {},
        _f$1[ZERO_SIXTEEN] = (_g$1 = {},
            _g$1[BASE_VERSION] = {
                mapInput: renameKeys({
                    participants: 'user_list',
                    participantUUIDs: 'user_UUID_list',
                }),
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _g$1),
        _f$1),
    _a$2[NativeApis.JOIN_MEETING] = (_h$1 = {},
        _h$1[ZERO_SIXTEEN] = (_j$1 = {},
            _j$1[BASE_VERSION] = {
                mapInput: mapJoinMeetingInputs(),
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _j$1),
        _h$1),
    _a$2[NativeApis.GET_RUNNING_CONTEXT] = (_k$1 = {},
        _k$1[ZERO_SIXTEEN] = (_l$1 = {},
            _l$1[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'context', value: value });
                },
            },
            _l$1),
        _k$1),
    _a$2[NativeApis.OPEN_URL] = (_m$1 = {},
        _m$1[ZERO_FOURTEEN] = (_o$1 = {},
            _o$1[BASE_VERSION] = {
                validate: function (data) {
                    new URL(data.url);
                },
            },
            _o$1),
        _m$1[ZERO_SIXTEEN] = (_p$1 = {},
            _p$1[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
                validate: function (data) {
                    new URL(data.url);
                },
            },
            _p$1),
        _m$1),
    _a$2[NativeApis.SET_VIRTUAL_BACKGROUND] = (_q$1 = {},
        _q$1[ZERO_SIXTEEN] = (_r$1 = {},
            _r$1[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _r$1),
        _q$1),
    _a$2[NativeApis.REMOVE_VIRTUAL_BACKGROUND] = (_s$1 = {},
        _s$1[ZERO_SIXTEEN] = (_t$1 = {},
            _t$1[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _t$1),
        _s$1),
    _a$2[NativeApis.SET_VIRTUAL_FOREGROUND] = (_u$1 = {},
        _u$1[ZERO_SIXTEEN] = (_v = {},
            _v[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _v),
        _u$1),
    _a$2[NativeApis.REMOVE_VIRTUAL_FOREGROUND] = (_w = {},
        _w[ZERO_SIXTEEN] = (_x = {},
            _x[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _x),
        _w),
    _a$2[NativeApis.SHOW_NOTIFICATION] = (_y = {},
        _y[ZERO_SIXTEEN] = (_z = {},
            _z[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _z),
        _y),
    _a$2[NativeApis.CLOUD_RECORDING] = (_0 = {},
        _0[ZERO_SIXTEEN] = (_1 = {},
            _1[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _1),
        _0),
    _a$2[NativeApis.SHARE_APP] = (_2 = {},
        _2[ZERO_SIXTEEN] = (_3 = {},
            _3[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _3),
        _2),
    _a$2[NativeApis.SET_CAMERA] = (_4 = {},
        _4[ZERO_SIXTEEN] = (_5 = {},
            _5[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _5),
        _4),
    _a$2[NativeApis.SET_VIDEO_MIRROR_EFFECT] = (_6 = {},
        _6[ZERO_SIXTEEN] = (_7 = {},
            _7[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _7),
        _6),
    _a$2[NativeApis.EXPAND_APP] = (_8 = {},
        _8[ZERO_SIXTEEN] = (_9 = {},
            _9[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _9),
        _8),
    _a$2[NativeApis.CONNECT] = (_10 = {},
        _10[ZERO_SIXTEEN] = (_11 = {},
            _11[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _11),
        _10),
    _a$2[NativeApis.POST_MESSAGE] = (_12 = {},
        _12[ZERO_SIXTEEN] = (_13 = {},
            _13[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _13),
        _12),
    _a$2[NativeApis.ALLOW_PARTICIPANT_TO_RECORD] = (_14 = {},
        _14[ZERO_SIXTEEN] = (_15 = {},
            _15[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _15),
        _14),
    _a$2[NativeApis.LAUNCH_APP_IN_MEETING] = (_16 = {},
        _16[ZERO_SIXTEEN] = (_17 = {},
            _17[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _17),
        _16),
    _a$2[NativeApis.SHOW_APP_INVITATION_DIALOG] = (_18 = {},
        _18[ZERO_SIXTEEN] = (_19 = {},
            _19[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _19),
        _18),
    _a$2[NativeApis.RUN_RENDERING_CONTEXT] = (_20 = {},
        _20[ZERO_SIXTEEN] = (_21 = {},
            _21[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _21),
        _20),
    _a$2[NativeApis.CLOSE_RENDERING_CONTEXT] = (_22 = {},
        _22[ZERO_SIXTEEN] = (_23 = {},
            _23[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _23),
        _22),
    _a$2[NativeApis.DRAW_PARTICIPANT] = (_24 = {},
        _24[ZERO_SIXTEEN] = (_25 = {},
            _25[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _25),
        _24),
    _a$2[NativeApis.CLEAR_PARTICIPANT] = (_26 = {},
        _26[ZERO_SIXTEEN] = (_27 = {},
            _27[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _27),
        _26),
    _a$2[NativeApis.CLEAR_IMAGE] = (_28 = {},
        _28[ZERO_SIXTEEN] = (_29 = {},
            _29[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _29),
        _28),
    _a$2[NativeApis.DRAW_WEBVIEW] = (_30 = {},
        _30[ZERO_SIXTEEN] = (_31 = {},
            _31[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _31),
        _30),
    _a$2[NativeApis.CLEAR_WEBVIEW] = (_32 = {},
        _32[ZERO_SIXTEEN] = (_33 = {},
            _33[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _33),
        _32),
    _a$2[NativeApis.BREAKOUT_ROOMS_OPEN] = (_34 = {},
        _34[ZERO_SIXTEEN] = (_35 = {},
            _35[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _35),
        _34),
    _a$2[NativeApis.BREAKOUT_ROOMS_CLOSE] = (_36 = {},
        _36[ZERO_SIXTEEN] = (_37 = {},
            _37[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _37),
        _36),
    _a$2[NativeApis.BREAKOUT_ROOM_DELETE] = (_38 = {},
        _38[ZERO_SIXTEEN] = (_39 = {},
            _39[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _39),
        _38),
    _a$2[NativeApis.BREAKOUT_ROOM_RENAME] = (_40 = {},
        _40[ZERO_SIXTEEN] = (_41 = {},
            _41[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _41),
        _40),
    _a$2[NativeApis.BREAKOUT_ROOM_ASSIGN_PARTICIPANT] = (_42 = {},
        _42[ZERO_SIXTEEN] = (_43 = {},
            _43[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _43),
        _42),
    _a$2[NativeApis.BREAKOUT_ROOM_CHANGE] = (_44 = {},
        _44[ZERO_SIXTEEN] = (_45 = {},
            _45[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _45),
        _44),
    _a$2[NativeApis.COLLABORATE_START] = (_46 = {},
        _46[ZERO_SIXTEEN] = (_47 = {},
            _47[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _47),
        _46),
    _a$2[NativeApis.COLLABORATE_END] = (_48 = {},
        _48[ZERO_SIXTEEN] = (_49 = {},
            _49[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _49),
        _48),
    _a$2[NativeApis.COLLABORATE_LEAVE] = (_50 = {},
        _50[ZERO_SIXTEEN] = (_51 = {},
            _51[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _51),
        _50),
    _a$2[NativeApis.COLLABORATE_JOIN] = (_52 = {},
        _52[ZERO_SIXTEEN] = (_53 = {},
            _53[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _53),
        _52),
    _a$2[NativeApis.AUTHORIZE] = (_54 = {},
        _54[ZERO_SIXTEEN] = (_55 = {},
            _55[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
                validate: function (data) {
                    if (!data.codeChallenge || typeof data.codeChallenge !== 'string') {
                        throw new Error('codeChallenge is required for zoomSdk.authorize');
                    }
                },
            },
            _55),
        _54),
    _a$2[NativeApis.PROMPT_AUTHORIZE] = (_56 = {},
        _56[ZERO_SIXTEEN] = (_57 = {},
            _57[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _57),
        _56),
    _a$2[NativeApis.SET_VIDEO_STATE] = (_58 = {},
        _58[ZERO_SIXTEEN] = (_59 = {},
            _59[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _59),
        _58),
    _a$2[NativeApis.SET_AUDIO_STATE] = (_60 = {},
        _60[ZERO_SIXTEEN] = (_61 = {},
            _61[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _61),
        _60),
    _a$2[NativeApis.SHARE_COMPUTER_AUDIO] = (_62 = {},
        _62[ZERO_SIXTEEN] = (_63 = {},
            _63[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _63),
        _62),
    _a$2[NativeApis.ADD_PARTICIPANT_SPOTLIGHT] = (_64 = {},
        _64[ZERO_SIXTEEN] = (_65 = {},
            _65[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _65),
        _64),
    _a$2[NativeApis.REMOVE_PARTICIPANT_SPOTLIGHTS] = (_66 = {},
        _66[ZERO_SIXTEEN] = (_67 = {},
            _67[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _67),
        _66),
    _a$2[NativeApis.ADD_PARTICIPANT_PINS] = (_68 = {},
        _68[ZERO_SIXTEEN] = (_69 = {},
            _69[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _69),
        _68),
    _a$2[NativeApis.REMOVE_PARTICIPANT_PINS] = (_70 = {},
        _70[ZERO_SIXTEEN] = (_71 = {},
            _71[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _71),
        _70),
    _a$2[NativeApis.ALLOW_ATTENDEES_TO_SPEAK] = (_72 = {},
        _72[ZERO_SIXTEEN] = (_73 = {},
            _73[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _73),
        _72),
    _a$2[NativeApis.DISALLOW_ATTENDEES_TO_SPEAK] = (_74 = {},
        _74[ZERO_SIXTEEN] = (_75 = {},
            _75[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _75),
        _74),
    _a$2[NativeApis.REMOVE_WEBINAR_ATTENDEES] = (_76 = {},
        _76[ZERO_SIXTEEN] = (_77 = {},
            _77[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _77),
        _76),
    _a$2[NativeApis.SET_FEEDBACK_REACTION] = (_78 = {},
        _78[ZERO_SIXTEEN] = (_79 = {},
            _79[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _79),
        _78),
    _a$2[NativeApis.REMOVE_FEEDBACK_REACTION] = (_80 = {},
        _80[ZERO_SIXTEEN] = (_81 = {},
            _81[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _81),
        _80),
    _a$2[NativeApis.REMOVE_ALL_FEEDBACK_REACTION] = (_82 = {},
        _82[ZERO_SIXTEEN] = (_83 = {},
            _83[BASE_VERSION] = {
                mapOutput: function (value) { return wrapInMessageObject(value); },
            },
            _83),
        _82),
    _a$2[NativeApis.SET_INCOMING_PARTICIPANT_AUDIO_STATE] = (_84 = {},
        _84[ZERO_SIXTEEN] = (_85 = {},
            _85[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _85),
        _84),
    _a$2[NativeApis.SET_VIDEO_SETTINGS] = (_86 = {},
        _86[ZERO_SIXTEEN] = (_87 = {},
            _87[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _87),
        _86),
    _a$2[NativeApis.SET_AUDIO_SETTINGS] = (_88 = {},
        _88[ZERO_SIXTEEN] = (_89 = {},
            _89[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _89),
        _88),
    _a$2[NativeApis.PROMPT_SHARE_SCREEN] = (_90 = {},
        _90[ZERO_SIXTEEN] = (_91 = {},
            _91[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _91),
        _90),
    _a$2[NativeApis.GALLERY_PAGE_SET] = (_92 = {},
        _92[ZERO_SIXTEEN] = (_93 = {},
            _93[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _93),
        _92),
    _a$2[NativeApis.SHOW_MEETING_INVITATION_DIALOG] = (_94 = {},
        _94[ZERO_SIXTEEN] = (_95 = {},
            _95[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _95),
        _94),
    _a$2[NativeApis.STOP_SHARE_SCREEN] = (_96 = {},
        _96[ZERO_SIXTEEN] = (_97 = {},
            _97[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _97),
        _96),
    _a$2[NativeApis.BROADCAST_VOICE_TO_BREAKOUT_ROOMS] = (_98 = {},
        _98[ZERO_SIXTEEN] = (_99 = {},
            _99[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _99),
        _98),
    _a$2[NativeApis.SET_VIDEO_FILTER] = (_100 = {},
        _100[ZERO_SIXTEEN] = (_101 = {},
            _101[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _101),
        _100),
    _a$2[NativeApis.DELETE_VIDEO_FILTER] = (_102 = {},
        _102[ZERO_SIXTEEN] = (_103 = {},
            _103[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _103),
        _102),
    _a$2[NativeApis.SET_MEETING_VIEW] = (_104 = {},
        _104[ZERO_SIXTEEN] = (_105 = {},
            _105[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _105),
        _104),
    _a$2[NativeApis.SET_EMOJI_REACTION] = (_106 = {},
        _106[ZERO_SIXTEEN] = (_107 = {},
            _107[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _107),
        _106),
    _a$2[NativeApis.SET_SCREEN_NAME] = (_108 = {},
        _108[ZERO_SIXTEEN] = (_109 = {},
            _109[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _109),
        _108),
    _a$2[NativeApis.SET_PARTICIPANT_SCREEN_NAME] = (_110 = {},
        _110[ZERO_SIXTEEN] = (_111 = {},
            _111[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _111),
        _110),
    _a$2[NativeApis.LEAVE_MEETING] = (_112 = {},
        _112[ZERO_SIXTEEN] = (_113 = {},
            _113[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _113),
        _112),
    _a$2[NativeApis.TOGGLE_PARTICIPANT_MEDIA_VIDEO] = (_114 = {},
        _114[ZERO_SIXTEEN] = (_115 = {},
            _115[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _115),
        _114),
    _a$2[NativeApis.SEND_MESSAGE] = (_116 = {},
        _116[ZERO_SIXTEEN] = (_117 = {},
            _117[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _117),
        _116),
    _a$2[NativeApis.SET_WAITING_ROOM_STATE] = (_118 = {},
        _118[ZERO_SIXTEEN] = (_119 = {},
            _119[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _119),
        _118),
    _a$2[NativeApis.PUT_PARTICIPANT_TO_WAITING_ROOM] = (_120 = {},
        _120[ZERO_SIXTEEN] = (_121 = {},
            _121[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _121),
        _120),
    _a$2[NativeApis.ADMIT_PARTICIPANT_FROM_WAITING_ROOM] = (_122 = {},
        _122[ZERO_SIXTEEN] = (_123 = {},
            _123[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _123),
        _122),
    _a$2[NativeApis.APP_POPOUT] = (_124 = {},
        _124[ZERO_SIXTEEN] = (_125 = {},
            _125[BASE_VERSION] = {
                mapOutput: function (value) {
                    if (typeof value === 'string') {
                        return { message: value };
                    }
                    else if (typeof value.warning === 'string') {
                        if (value.warning === 'App is already undocked') {
                            return { warning: { message: value.warning, code: '40010' } };
                        }
                        if (value.warning === 'App is already docked') {
                            return { warning: { message: value.warning, code: '40011' } };
                        }
                    }
                    else if (typeof value.warning === 'object') {
                        return { warning: value.warning };
                    }
                },
            },
            _125),
        _124),
    _a$2[NativeApis.BRING_APP_TO_FRONT] = (_126 = {},
        _126[ZERO_SIXTEEN] = (_127 = {},
            _127[BASE_VERSION] = {
                mapOutput: function (value) {
                    if (typeof value === 'string') {
                        return { message: value };
                    }
                    else if (typeof value.warning === 'string') {
                        if (value.warning === 'App is already in front') {
                            return { warning: { message: value.warning, code: '40012' } };
                        }
                    }
                    else if (typeof value.warning === 'object') {
                        return { warning: value.warning };
                    }
                },
            },
            _127),
        _126),
    _a$2[NativeApis.SEND_APP_TO_BACKGROUND] = (_128 = {},
        _128[ZERO_SIXTEEN] = (_129 = {},
            _129[BASE_VERSION] = {
                mapOutput: function (value) {
                    if (typeof value === 'string') {
                        return { message: value };
                    }
                    else if (typeof value.warning === 'string') {
                        if (value.warning === 'App is already in the background') {
                            return { warning: { message: value.warning, code: '40013' } };
                        }
                    }
                    else if (typeof value.warning === 'object') {
                        return { warning: value.warning };
                    }
                },
            },
            _129),
        _128),
    _a$2[NativeApis.CLOSE_APP] = (_130 = {},
        _130[ZERO_SIXTEEN] = (_131 = {},
            _131[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _131),
        _130),
    _a$2[NativeApis.GET_MEETING_PARTICIPANTS_EMAIL] = (_132 = {},
        _132[ZERO_SIXTEEN] = (_133 = {},
            _133[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _133),
        _132),
    _a$2[NativeApis.TAKE_PARTICIPANT_PHOTO] = (_134 = {},
        _134[ZERO_SIXTEEN] = (_135 = {},
            _135[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _135),
        _134),
    _a$2[NativeApis.TAKE_MY_PHOTO] = (_136 = {},
        _136[ZERO_SIXTEEN] = (_137 = {},
            _137[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _137),
        _136),
    _a$2[NativeApis.START_COLLABORATE_SIDECAR] = (_138 = {},
        _138[ZERO_SIXTEEN] = (_139 = {},
            _139[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _139),
        _138),
    _a$2[NativeApis.END_COLLABORATE_SIDECAR] = (_140 = {},
        _140[ZERO_SIXTEEN] = (_141 = {},
            _141[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _141),
        _140),
    _a$2[NativeApis.REMOVE_PARTICIPANT] = (_142 = {},
        _142[ZERO_SIXTEEN] = (_143 = {},
            _143[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _143),
        _142),
    _a$2[NativeApis.SEND_KEYPAD_CONTROLS] = (_144 = {},
        _144[ZERO_SIXTEEN] = (_145 = {},
            _145[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _145),
        _144),
    _a$2[NativeApis.START_RTMS] = (_146 = {},
        _146[ZERO_SIXTEEN] = (_147 = {},
            _147[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _147),
        _146),
    _a$2[NativeApis.STOP_RTMS] = (_148 = {},
        _148[ZERO_SIXTEEN] = (_149 = {},
            _149[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _149),
        _148),
    _a$2[NativeApis.PAUSE_RTMS] = (_150 = {},
        _150[ZERO_SIXTEEN] = (_151 = {},
            _151[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _151),
        _150),
    _a$2[NativeApis.RESUME_RTMS] = (_152 = {},
        _152[ZERO_SIXTEEN] = (_153 = {},
            _153[BASE_VERSION] = {
                mapOutput: function (value) {
                    return wrapInObject({ key: 'message', value: value });
                },
            },
            _153),
        _152),
    _a$2);

var _a$1, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
var handlePhoneNumberCompatibility = function (data) {
    var callObject = data.callObject;
    if (callObject && callObject.callee) {
        var phoneNumber = callObject.callee.phoneNumber || callObject.callee['phoneNumber '] || '';
        var modifiedCallee = __assign(__assign({}, callObject.callee), { phoneNumber: phoneNumber, 'phoneNumber ': phoneNumber });
        return __assign(__assign({}, data), { callObject: __assign(__assign({}, callObject), { callee: modifiedCallee }) });
    }
    return data;
};
var compatibilityFnsEvents = (_a$1 = {},
    _a$1[NativeEvents.ON_MEETING_CONFIG_CHANGED] = (_b = {},
        _b[ZERO_FOURTEEN] = (_c = {},
            _c[FIVE_ELEVEN_ZERO] = {
                mapEventData: function (data) {
                    if (data.change === 'breakoutRoomOpened' ||
                        data.change === 'breakoutRoomClosed') {
                        return {
                            timestamp: data.timestamp,
                            change: 'breakoutRoomOpened | breakoutRoomClosed',
                        };
                    }
                    else {
                        return data;
                    }
                },
            },
            _c),
        _b),
    _a$1[NativeEvents.ON_PHOTO] = (_d = {},
        _d[ZERO_SIXTEEN] = (_e = {},
            _e[BASE_VERSION] = {
                mapEventData: function (data) { return __awaiter(void 0, void 0, void 0, function () {
                    var participantUUID, videoOff, optedOut, timestamp, imageData, modifiedOnPhotoResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                participantUUID = data.participantUUID, videoOff = data.videoOff, optedOut = data.optedOut, timestamp = data.timestamp, imageData = data.imageData;
                                modifiedOnPhotoResponse = {
                                    imageData: null,
                                    optedOut: optedOut,
                                    timestamp: timestamp,
                                    participantUUID: participantUUID,
                                    videoOff: videoOff,
                                };
                                if (!(imageData !== null)) return [3 , 2];
                                return [4 , loadImagePromise(imageData).then(function (data) {
                                        modifiedOnPhotoResponse.imageData = data;
                                    })];
                            case 1:
                                _a.sent();
                                return [2 , modifiedOnPhotoResponse];
                            case 2: return [2 , modifiedOnPhotoResponse];
                        }
                    });
                }); },
            },
            _e),
        _d),
    _a$1[NativeEvents.ON_PHONE_CALLEE_ANSWERED] = (_f = {},
        _f[ZERO_SIXTEEN] = (_g = {},
            _g[BASE_VERSION] = {
                mapEventData: handlePhoneNumberCompatibility,
            },
            _g),
        _f),
    _a$1[NativeEvents.ON_PHONE_CALLER_ENDED] = (_h = {},
        _h[ZERO_SIXTEEN] = (_j = {},
            _j[BASE_VERSION] = {
                mapEventData: handlePhoneNumberCompatibility,
            },
            _j),
        _h),
    _a$1[NativeEvents.ON_PHONE_CALLEE_ENDED] = (_k = {},
        _k[ZERO_SIXTEEN] = (_l = {},
            _l[BASE_VERSION] = {
                mapEventData: handlePhoneNumberCompatibility,
            },
            _l),
        _k),
    _a$1[NativeEvents.ON_PHONE_CALLEE_REJECTED] = (_m = {},
        _m[ZERO_SIXTEEN] = (_o = {},
            _o[BASE_VERSION] = {
                mapEventData: handlePhoneNumberCompatibility,
            },
            _o),
        _m),
    _a$1[NativeEvents.ON_PHONE_CALLER_MEETING_INVITING] = (_p = {},
        _p[ZERO_SIXTEEN] = (_q = {},
            _q[BASE_VERSION] = {
                mapEventData: handlePhoneNumberCompatibility,
            },
            _q),
        _p),
    _a$1[NativeEvents.ON_PHONE_CALLEE_MEETING_INVITE] = (_r = {},
        _r[ZERO_SIXTEEN] = (_s = {},
            _s[BASE_VERSION] = {
                mapEventData: handlePhoneNumberCompatibility,
            },
            _s),
        _r),
    _a$1[NativeEvents.ON_PHONE_CONTEXT] = (_t = {},
        _t[ZERO_SIXTEEN] = (_u = {},
            _u[BASE_VERSION] = {
                mapEventData: handlePhoneNumberCompatibility,
            },
            _u),
        _t),
    _a$1);
var loadImagePromise = function (clientAPIImageDataResponse) { return __awaiter(void 0, void 0, void 0, function () {
    var canvas, context;
    return __generator(this, function (_a) {
        canvas = document.createElement('canvas');
        context = canvas.getContext('2d');
        return [2 , new Promise(function (resolve, reject) {
                try {
                    canvas.width = Math.floor(clientAPIImageDataResponse.width);
                    canvas.height = Math.floor(clientAPIImageDataResponse.height);
                    var imageEl_1 = document.createElement('img');
                    imageEl_1.src = "data:image/jpeg;base64,".concat(clientAPIImageDataResponse.data);
                    imageEl_1.onload = function () {
                        var xCoord = canvas.width;
                        var yCoord = canvas.height;
                        context.drawImage(imageEl_1, 0, 0, xCoord, yCoord);
                        resolve();
                    };
                }
                catch (error) {
                    reject(error);
                }
            }).then(function () {
                return context.getImageData(0, 0, canvas.width, canvas.height);
            })];
    });
}); };

function getCompatibilitiesApis(apiName, sdkVersionInput, clientVersionInput) {
    var fns = {
        mapInput: identity,
        mapOutput: identity,
        validate: noop,
    };
    return getCompatibilitiesHelper(apiName, sdkVersionInput, clientVersionInput, compatibilityFnsApis, fns);
}
function getCompatibilitiesEvents(apiName, sdkVersionInput, clientVersionInput) {
    var fns = {
        mapEventData: identity,
    };
    return getCompatibilitiesHelper(apiName, sdkVersionInput, clientVersionInput, compatibilityFnsEvents, fns);
}
function getCompatibilitiesHelper(apiName, sdkVersionInput, clientVersionInput, compatibility, fns) {
    var apiCompatibilities = compatibility[apiName];
    if (!apiCompatibilities)
        return fns;
    var majorSdkVersion = helpers.getMajorVersionFromExact(sdkVersionInput);
    var sdkCompatibilities = apiCompatibilities[majorSdkVersion];
    if (!sdkCompatibilities)
        return fns;
    var clientVals = clientVersionInput.split('.').map(function (n) { return parseInt(n); });
    if (clientVals.some(isNaN)) {
        clientVersionInput = MAX_MAX_MAX;
    }
    var possibleClientVersions = Object.keys(sdkCompatibilities)
        .filter(function (clientVersion) {
        return helpers.compareVersions(clientVersionInput, clientVersion) >= 0;
    })
        .sort(helpers.compareVersions);
    possibleClientVersions.forEach(function (clientVersion) {
        var compatibilityObject = sdkCompatibilities[clientVersion];
        Object.keys(compatibilityObject).forEach(function (key) {
            fns[key] = compatibilityObject[key];
        });
    });
    return fns;
}
function setupCompatibilityApisCache(compatibilityCache, sdkVersion, clientVersion) {
    Object.values(NativeApis).forEach(function (apiName) {
        compatibilityCache[apiName] = getCompatibilitiesApis(apiName, sdkVersion, clientVersion);
    });
}
function setupCompatibilityEventsCache(compatibilityCache, sdkVersion, clientVersion) {
    Object.values(NativeEvents).forEach(function (eventName) {
        compatibilityCache[eventName] = getCompatibilitiesEvents(eventName, sdkVersion, clientVersion);
    });
}
var helpers = {
    compareVersions: function (v1, v2) {
        var vals1 = v1.split('.').map(function (n) { return parseInt(n); });
        var vals2 = v2.split('.').map(function (n) { return parseInt(n); });
        var a1 = vals1[0], b1 = vals1[1], c1 = vals1[2];
        var a2 = vals2[0], b2 = vals2[1], c2 = vals2[2];
        if (a1 > a2)
            return 1;
        else if (a2 > a1)
            return -1;
        if (b1 > b2)
            return 1;
        else if (b2 > b1)
            return -1;
        if (c1 > c2)
            return 1;
        else if (c2 > c1)
            return -1;
        return 0;
    },
    getMajorVersionFromExact: function (sdkVersion) {
        if (typeof sdkVersion !== 'string') {
            console.warn('You have not provided a valid sdk version');
            return;
        }
        var _a = sdkVersion.split('.'), maj = _a[0], min = _a[1]; _a[2];
        switch ("".concat(maj, ".").concat(min)) {
            case ZERO_FOURTEEN:
                return ZERO_FOURTEEN;
            case ZERO_SIXTEEN:
                return ZERO_SIXTEEN;
            default:
                console.warn('You have not provided a valid sdk version');
                return;
        }
    },
};

var _a;
var browserCrypto;
var nodeCrypto;
if (typeof window !== 'undefined' && window.crypto) {
    browserCrypto = window.crypto;
}
else {
    nodeCrypto = require('crypto');
}
var nativeApiCallbacks = {};
var nativeEventHandlers = {};
var compatibilityApisCache = (_a = {},
    _a[NativeApis.CONFIG] = {
        mapInput: function (d) { return d; },
        mapOutput: function (d) { return d; },
        validate: function (d) { return d; },
    },
    _a);
var compatibilityEventsCache = {};
var dynamicIndicatorApis = [
    NativeApis.SET_DYNAMIC_INDICATOR,
    NativeApis.REMOVE_DYNAMIC_INDICATOR,
    NativeApis.EXTEND_DYNAMIC_INDICATOR,
    NativeApis.GET_DYNAMIC_INDICATOR,
];
var dynamicIndicatorEvents = [
    NativeEvents.ON_SET_DYNAMIC_INDICATOR,
    NativeEvents.ON_REMOVE_DYNAMIC_INDICATOR,
    NativeEvents.ON_DYNAMIC_INDICATOR_STYLE_CHANGE,
    NativeEvents.ON_EXTEND_DYNAMIC_INDICATOR,
];
function isVersionCompatible(currentVersion, requiredVersion) {
    var isValidVersion = function (version) {
        return /^\d+(\.\d+)*$/.test(version);
    };
    if (!isValidVersion(currentVersion) || !isValidVersion(requiredVersion)) {
        throw new Error('Invalid version format for currentVersion or requiredVersion');
    }
    var parseVersion = function (version) {
        return version.split('.').map(Number);
    };
    var currentParts = parseVersion(currentVersion);
    var requiredParts = parseVersion(requiredVersion);
    for (var i = 0; i < Math.max(currentParts.length, requiredParts.length); i++) {
        var currentPart = currentParts[i] || 0;
        var requiredPart = requiredParts[i] || 0;
        if (currentPart > requiredPart) {
            return true;
        }
        else if (currentPart < requiredPart) {
            return false;
        }
    }
    return true;
}
var ZoomSdk =  (function () {
    function ZoomSdk(options) {
        this._timeout_for_all_apis = undefined;
        this._version = options.version;
        return interceptUndefinedMethod(this);
    }
    ZoomSdk.prototype.native2js = function (message) {
        var _a, _b;
        if (((_a = message === null || message === void 0 ? void 0 : message.data) === null || _a === void 0 ? void 0 : _a.type) === 'apiResponse') {
            var jsCallId = message.data.data.jsCallId;
            var callback = nativeApiCallbacks[jsCallId];
            if (callback) {
                callback(message.data.data);
            }
        }
        else if (((_b = message === null || message === void 0 ? void 0 : message.data) === null || _b === void 0 ? void 0 : _b.type) === 'event') {
            var eventName_1 = message.data.name;
            var inputData_1 = message.data.data;
            nativeEventHandlers[eventName_1] &&
                nativeEventHandlers[eventName_1].forEach(function (handler) {
                    var compatibility = compatibilityEventsCache[eventName_1];
                    if (!compatibility) {
                        compatibility = { mapEventData: identity };
                    }
                    handler(compatibility.mapEventData(inputData_1));
                });
        }
    };
    ZoomSdk.prototype.callZoomApi = function (apiName, data, timeout, isTimerApp
    ) {
        if (isTimerApp === void 0) { isTimerApp = false; }
        return __awaiter(this, void 0, void 0, function () {
            var jsCallId, nativeApiRequest, compatibility, mapInput, mapOutput, validate;
            var _this = this;
            return __generator(this, function (_a) {
                jsCallId = getJsCallId();
                nativeApiRequest = {
                    jsCallId: jsCallId,
                    apiName: apiName,
                };
                if (apiName !== NativeApis.CONFIG &&
                    (!isString(this._version) || !isString(this._clientVersion))) {
                    throw new Error('must call zoomSdk.config before using other API methods');
                }
                if (!isTimerApp &&
                    dynamicIndicatorApis.includes(apiName) &&
                    this._clientVersion &&
                    !isVersionCompatible(this._clientVersion, FIVE_SEVENTEEN_FIVE)) {
                    throw new Error("".concat(apiName, " requires client version 5.17.5 or higher. Current version: ").concat(this._clientVersion));
                }
                compatibility = compatibilityApisCache[apiName];
                if (!compatibility) {
                    compatibility = {
                        mapInput: identity,
                        mapOutput: identity,
                        validate: noop,
                    };
                }
                mapInput = compatibility.mapInput, mapOutput = compatibility.mapOutput, validate = compatibility.validate;
                if (data) {
                    validate(data);
                    nativeApiRequest.data = mapInput(data);
                }
                if (apiName === NativeApis.OPEN_URL &&
                    this._version !== ZERO_FOURTEEN) {
                    this._postMessage(nativeApiRequest);
                    return [2 , { message: 'success' }];
                }
                return [2 , new Promise(function (resolve, reject) {
                        var timer = setTimeout(function () {
                            var error = new Error("".concat(apiName, " took longer than ").concat(_this._timeout_for_all_apis || timeout || Timeouts.DEFAULT, "ms to respond.\n requestId: ").concat(jsCallId));
                            reject(error);
                            removeNativeApiCallback(jsCallId);
                        }, _this._timeout_for_all_apis || timeout || Timeouts.DEFAULT);
                        setNativeApiCallback(jsCallId, function (_a) {
                            var errorCode = _a.errorCode, errorMessage = _a.errorMessage, result = _a.result;
                            if (errorCode || errorMessage) {
                                var error = new ZoomApiError(errorMessage, errorCode, jsCallId);
                                reject(error);
                            }
                            else {
                                resolve(mapOutput(result));
                            }
                            removeNativeApiCallback(jsCallId);
                            clearTimeout(timer);
                        });
                        _this._postMessage(nativeApiRequest);
                    })];
            });
        });
    };
    ZoomSdk.prototype.config = function (_a) {
        var capabilities = _a.capabilities, popoutSize = _a.popoutSize, size = _a.size, _b = _a.version, version = _b === void 0 ? ZERO_FOURTEEN : _b, timeout = _a.timeout;
        return __awaiter(this, void 0, void 0, function () {
            var newOptions, response, dynamicApisAndEvents_1, matchingCapabilities, uniqueUnsupportedApis;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        newOptions = {
                            js_api_lists: capabilities,
                            size: popoutSize || size,
                            version: version,
                        };
                        if (!isString(this._version)) {
                            this._version = version;
                        }
                        if (this._version === ZERO_FOURTEEN) {
                            console.warn('You are using an outdated version of the SDK, please update to the latest version.');
                        }
                        if (timeout) {
                            this._timeout_for_all_apis = timeout;
                        }
                        this._postMessage = setPostMessage.call(this);
                        return [4 , this.callZoomApi(NativeApis.CONFIG, newOptions)];
                    case 1:
                        response = _c.sent();
                        if (response.clientVersion) {
                            this._clientVersion = response.clientVersion;
                            setupCompatibilityApisCache(compatibilityApisCache, this._version, this._clientVersion);
                            setupCompatibilityEventsCache(compatibilityEventsCache, this._version, this._clientVersion);
                            dynamicApisAndEvents_1 = __spreadArray(__spreadArray([], dynamicIndicatorApis, true), dynamicIndicatorEvents, true);
                            if (this._clientVersion &&
                                !isVersionCompatible(this._clientVersion, FIVE_SEVENTEEN_FIVE)) {
                                matchingCapabilities = capabilities === null || capabilities === void 0 ? void 0 : capabilities.filter(function (capability) {
                                    return dynamicApisAndEvents_1.includes(capability);
                                });
                                if (matchingCapabilities.length > 0) {
                                    uniqueUnsupportedApis = new Set(__spreadArray(__spreadArray([], (response.unsupportedApis || []), true), matchingCapabilities, true));
                                    response.unsupportedApis = Array.from(uniqueUnsupportedApis);
                                }
                            }
                        }
                        return [2 , response];
                }
            });
        });
    };
    ZoomSdk.prototype.getSupportedJsApis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, filteredApis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.callZoomApi(NativeApis.GET_SUPPORTED_JS_APIS, null, null)];
                    case 1:
                        response = _a.sent();
                        if (this._clientVersion &&
                            !isVersionCompatible(this._clientVersion, FIVE_SEVENTEEN_FIVE)) {
                            filteredApis = response.supportedApis.filter(function (api) {
                                return !dynamicIndicatorApis.includes(api) &&
                                    !dynamicIndicatorEvents.includes(api);
                            });
                            return [2 , { supportedApis: filteredApis }];
                        }
                        return [2 , response];
                }
            });
        });
    };
    ZoomSdk.prototype.openUrl = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.OPEN_URL, options)];
            });
        });
    };
    ZoomSdk.prototype.getRunningContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_RUNNING_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.getMeetingContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_MEETING_CONTEXT, null, null)];
            });
        });
    };
    ZoomSdk.prototype.setVirtualBackground = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options.blur) {
                            return [2 , this.callZoomApi(NativeApis.SET_VIRTUAL_BACKGROUND, { blur: true }, Timeouts.SET_VIRTUAL_BACKGROUND)];
                        }
                        if (!options.fileUrl) return [3 , 2];
                        new URL(options.fileUrl);
                        return [4 , helpers$1.getImageData(options.fileUrl)];
                    case 1:
                        params = _a.sent();
                        return [2 , this.callZoomApi(NativeApis.SET_VIRTUAL_BACKGROUND, params, Timeouts.SET_VIRTUAL_BACKGROUND)];
                    case 2:
                        if (options.imageData) {
                            return [2 , this.callZoomApi(NativeApis.SET_VIRTUAL_BACKGROUND, options.imageData, Timeouts.SET_VIRTUAL_BACKGROUND)];
                        }
                        throw new Error('setVirtualBackground() parameter fileUrl or imageData is required if blur is not true');
                }
            });
        });
    };
    ZoomSdk.prototype.removeVirtualBackground = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REMOVE_VIRTUAL_BACKGROUND)];
            });
        });
    };
    ZoomSdk.prototype.setVirtualForeground = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_VIRTUAL_FOREGROUND, options)];
            });
        });
    };
    ZoomSdk.prototype.removeVirtualForeground = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REMOVE_VIRTUAL_FOREGROUND)];
            });
        });
    };
    ZoomSdk.prototype.showNotification = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SHOW_NOTIFICATION, options)];
            });
        });
    };
    ZoomSdk.prototype.cloudRecording = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.CLOUD_RECORDING, options)];
            });
        });
    };
    ZoomSdk.prototype.shareApp = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SHARE_APP, options)];
            });
        });
    };
    ZoomSdk.prototype.listCameras = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.LIST_CAMERAS)];
            });
        });
    };
    ZoomSdk.prototype.setCamera = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_CAMERA, options)];
            });
        });
    };
    ZoomSdk.prototype.setVideoMirrorEffect = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_VIDEO_MIRROR_EFFECT, options)];
            });
        });
    };
    ZoomSdk.prototype.getMeetingParticipants = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_MEETING_PARTICIPANTS)];
            });
        });
    };
    ZoomSdk.prototype.sendAppInvitation = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SEND_APP_INVITATION, options)];
            });
        });
    };
    ZoomSdk.prototype.getUserContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_USER_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.getRecordingContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_RECORDING_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.getMeetingJoinUrl = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_MEETING_JOIN_URL)];
            });
        });
    };
    ZoomSdk.prototype.getMeetingUUID = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_MEETING_UUID)];
            });
        });
    };
    ZoomSdk.prototype.expandApp = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.EXPAND_APP, options)];
            });
        });
    };
    ZoomSdk.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.CONNECT)];
            });
        });
    };
    ZoomSdk.prototype.postMessage = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.POST_MESSAGE, options)];
            });
        });
    };
    ZoomSdk.prototype.endSyncData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.END_SYNC_DATA)];
            });
        });
    };
    ZoomSdk.prototype.allowParticipantToRecord = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.ALLOW_PARTICIPANT_TO_RECORD, options)];
            });
        });
    };
    ZoomSdk.prototype.launchAppInMeeting = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.LAUNCH_APP_IN_MEETING, options)];
            });
        });
    };
    ZoomSdk.prototype.showAppInvitationDialog = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SHOW_APP_INVITATION_DIALOG, options)];
            });
        });
    };
    ZoomSdk.prototype.sendAppInvitationToMeetingOwner = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SEND_APP_INVITATION_TO_MEETING_OWNER)];
            });
        });
    };
    ZoomSdk.prototype.sendAppInvitationToAllParticipants = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SEND_APP_INVITATION_TO_ALL_PARTICIPANTS)];
            });
        });
    };
    ZoomSdk.prototype.runRenderingContext = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.RUN_RENDERING_CONTEXT, options, Timeouts.RUN_RENDERING_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.closeRenderingContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.CLOSE_RENDERING_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.drawParticipant = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                updateOptionsPixelsXY(options);
                updateOptionsPixelsWidthHeight(options);
                updateOptionsZIndex(options);
                return [2 , this.callZoomApi(NativeApis.DRAW_PARTICIPANT, options)];
            });
        });
    };
    ZoomSdk.prototype.clearParticipant = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.CLEAR_PARTICIPANT, options)];
            });
        });
    };
    ZoomSdk.prototype.drawImage = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                updateOptionsPixelsXY(options);
                updateOptionsZIndex(options);
                return [2 , this.callZoomApi(NativeApis.DRAW_IMAGE, options)];
            });
        });
    };
    ZoomSdk.prototype.clearImage = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.CLEAR_IMAGE, options)];
            });
        });
    };
    ZoomSdk.prototype.drawWebView = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                options.webviewId = '';
                updateOptionsPixelsXY(options);
                updateOptionsPixelsWidthHeight(options);
                updateOptionsZIndex(options);
                return [2 , this.callZoomApi(NativeApis.DRAW_WEBVIEW, options)];
            });
        });
    };
    ZoomSdk.prototype.clearWebView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                options = {
                    webviewId: '',
                };
                return [2 , this.callZoomApi(NativeApis.CLEAR_WEBVIEW, options)];
            });
        });
    };
    ZoomSdk.prototype.onShareApp = function (handler) {
        this.addEventListener(NativeEvents.ON_SHARE_APP, handler);
        this.addEventListener(NativeEvents.ON_SHARE_APP_COMPATIBILITY, handler);
    };
    ZoomSdk.prototype.onSendAppInvitation = function (handler) {
        this.addEventListener(NativeEvents.ON_SEND_APP_INVITATION, handler);
        this.addEventListener(NativeEvents.ON_SEND_APP_INVITATION_COMPATIBILITY, handler);
    };
    ZoomSdk.prototype.onCloudRecording = function (handler) {
        this.addEventListener(NativeEvents.ON_CLOUD_RECORDING, handler);
    };
    ZoomSdk.prototype.onReaction = function (handler) {
        this.addEventListener(NativeEvents.ON_REACTION, handler);
    };
    ZoomSdk.prototype.onParticipantChange = function (handler) {
        this.addEventListener(NativeEvents.ON_PARTICIPANT_CHANGE, handler);
    };
    ZoomSdk.prototype.onActiveSpeakerChange = function (handler) {
        this.addEventListener(NativeEvents.ON_ACTIVE_SPEAKER_CHANGE, handler);
    };
    ZoomSdk.prototype.onAppPopout = function (handler) {
        this.addEventListener(NativeEvents.ON_APP_POPOUT, handler);
    };
    ZoomSdk.prototype.onExpandApp = function (handler) {
        this.addEventListener(NativeEvents.ON_EXPAND_APP, handler);
    };
    ZoomSdk.prototype.onAppVisibilityChange = function (handler) {
        this.addEventListener(NativeEvents.ON_APP_VISIBILITY_CHANGE, handler);
    };
    ZoomSdk.prototype.onConnect = function (handler) {
        this.addEventListener(NativeEvents.ON_CONNECT, handler);
    };
    ZoomSdk.prototype.onMessage = function (handler) {
        this.addEventListener(NativeEvents.ON_MESSAGE, handler);
    };
    ZoomSdk.prototype.onMeeting = function (handler) {
        this.addEventListener(NativeEvents.ON_MEETING, handler);
    };
    ZoomSdk.prototype.onMeetingConfigChanged = function (handler) {
        this.addEventListener(NativeEvents.ON_MEETING_CONFIG_CHANGED, handler);
    };
    ZoomSdk.prototype.onBreakoutRoomChange = function (handler) {
        this.addEventListener(NativeEvents.ON_BREAKOUT_ROOM_CHANGE, handler);
    };
    ZoomSdk.prototype.onCollaborateChange = function (handler) {
        this.addEventListener(NativeEvents.ON_COLLABORATE_CHANGE, handler);
    };
    ZoomSdk.prototype.startCollaborateSidecar = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.START_COLLABORATE_SIDECAR)];
            });
        });
    };
    ZoomSdk.prototype.endCollaborateSidecar = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.END_COLLABORATE_SIDECAR)];
            });
        });
    };
    ZoomSdk.prototype.onRunningContextChange = function (handler) {
        this.addEventListener(NativeEvents.ON_RUNNING_CONTEXT_CHANGE, handler);
    };
    ZoomSdk.prototype.onMyReaction = function (handler) {
        this.addEventListener(NativeEvents.ON_MY_REACTION, handler);
    };
    ZoomSdk.prototype.onMyActiveSpeakerChange = function (handler) {
        this.addEventListener(NativeEvents.ON_MY_ACTIVE_SPEAKER_CHANGE, handler);
    };
    ZoomSdk.prototype.onMyUserContextChange = function (handler) {
        this.addEventListener(NativeEvents.ON_MY_USER_CONTEXT_CHANGE, handler);
    };
    ZoomSdk.prototype.onMyMediaChange = function (handler) {
        this.addEventListener(NativeEvents.ON_MY_MEDIA_CHANGE, handler);
    };
    ZoomSdk.prototype.onAuthorized = function (handler) {
        this.addEventListener(NativeEvents.ON_AUTHORIZED, handler);
    };
    ZoomSdk.prototype.onShareScreen = function (handler) {
        this.addEventListener(NativeEvents.ON_SHARE_SCREEN, handler);
    };
    ZoomSdk.prototype.onShareComputerAudio = function (handler) {
        this.addEventListener(NativeEvents.ON_SHARE_COMPUTER_AUDIO, handler);
    };
    ZoomSdk.prototype.onCloseAppForParticipants = function (handler) {
        this.addEventListener(NativeEvents.ON_CLOSE_APP_FOR_PARTICIPANTS, handler);
    };
    ZoomSdk.prototype.onRenderedAppOpened = function (handler) {
        this.addEventListener(NativeEvents.ON_RENDERED_APP_OPENED, handler);
    };
    ZoomSdk.prototype.onFeedbackReaction = function (handler) {
        this.addEventListener(NativeEvents.ON_FEEDBACK_REACTION_EVENT, handler);
    };
    ZoomSdk.prototype.onRemoveFeedbackReaction = function (handler) {
        this.addEventListener(NativeEvents.ON_REMOVE_FEEDBACK_REACTION_EVENT, handler);
    };
    ZoomSdk.prototype.onIncomingParticipantAudioChange = function (handler) {
        this.addEventListener(NativeEvents.ON_INCOMING_PARTICIPANT_AUDIO_CHANGE, handler);
    };
    ZoomSdk.prototype.onGalleryPageChange = function (handler) {
        this.addEventListener(NativeEvents.ON_GALLERY_PAGE_CHANGE, handler);
    };
    ZoomSdk.prototype.onGalleryOrder = function (handler) {
        this.addEventListener(NativeEvents.ON_GALLERY_ORDER, handler);
    };
    ZoomSdk.prototype.onPhoto = function (handler) {
        this.addEventListener(NativeEvents.ON_PHOTO, handler);
    };
    ZoomSdk.prototype.onEngagementVariableValueChange = function (handler) {
        this.addEventListener(NativeEvents.ON_ENGAGEMENT_VARIABLE_VALUE_CHANGE, handler);
    };
    ZoomSdk.prototype.addEventListener = function (event, handler) {
        if (!this._clientVersion || !this._version) {
            console.warn('Must call zoomSdk.config before adding an event listener. This will become a thrown error in a future version of the SDK');
        }
        if (dynamicIndicatorEvents.includes(event) &&
            this._clientVersion &&
            !isVersionCompatible(this._clientVersion, FIVE_SEVENTEEN_FIVE)) {
            throw new Error("".concat(event, " requires client version 5.17.5 or higher. Current version: ").concat(this._clientVersion));
        }
        if (nativeEventHandlers[event]) {
            nativeEventHandlers[event].push(handler);
        }
        else {
            nativeEventHandlers[event] = [handler];
        }
    };
    ZoomSdk.prototype.removeEventListener = function (event, handler) {
        if (!this._clientVersion || !this._version) {
            console.warn('Must call zoomSdk.config before removing an event listener. This will become a thrown error in a future version of the SDK');
        }
        if (dynamicIndicatorEvents.includes(event) &&
            this._clientVersion &&
            !isVersionCompatible(this._clientVersion, FIVE_SEVENTEEN_FIVE)) {
            throw new Error("".concat(event, " requires client version 5.17.5 or higher. Current version: ").concat(this._clientVersion));
        }
        if (!nativeEventHandlers[event])
            return;
        nativeEventHandlers[event] = nativeEventHandlers[event].filter(function (fn) { return fn !== handler; });
        Object.keys(nativeEventHandlers).forEach(function (eventType) {
            if (eventType !== event) {
                nativeEventHandlers[eventType] = nativeEventHandlers[eventType].filter(function (fn) { return fn !== handler; });
            }
        });
    };
    ZoomSdk.prototype.on = function (event, handler) {
        if (dynamicIndicatorEvents.includes(event) &&
            this._clientVersion &&
            !isVersionCompatible(this._clientVersion, FIVE_SEVENTEEN_FIVE)) {
            throw new Error("".concat(event, " requires client version 5.17.5 or higher. Current version: ").concat(this._clientVersion));
        }
        this.addEventListener(event, handler);
        if (event === NativeEvents.ON_SHARE_APP) {
            this.addEventListener(NativeEvents.ON_SHARE_APP_COMPATIBILITY, handler);
        }
        if (event === NativeEvents.ON_SEND_APP_INVITATION) {
            this.addEventListener(NativeEvents.ON_SEND_APP_INVITATION_COMPATIBILITY, handler);
        }
    };
    ZoomSdk.prototype.off = function (event, handler) {
        if (dynamicIndicatorEvents.includes(event) &&
            this._clientVersion &&
            !isVersionCompatible(this._clientVersion, FIVE_SEVENTEEN_FIVE)) {
            throw new Error("".concat(event, " requires client version 5.17.5 or higher. Current version: ").concat(this._clientVersion));
        }
        this.removeEventListener(event, handler);
        if (event === NativeEvents.ON_SHARE_APP) {
            this.removeEventListener(NativeEvents.ON_SHARE_APP_COMPATIBILITY, handler);
        }
        if (event === NativeEvents.ON_SEND_APP_INVITATION) {
            this.removeEventListener(NativeEvents.ON_SEND_APP_INVITATION_COMPATIBILITY, handler);
        }
    };
    ZoomSdk.prototype.createBreakoutRooms = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOMS_CREATE, options)];
            });
        });
    };
    ZoomSdk.prototype.configureBreakoutRooms = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOMS_CONFIGURE, options)];
            });
        });
    };
    ZoomSdk.prototype.openBreakoutRooms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOMS_OPEN)];
            });
        });
    };
    ZoomSdk.prototype.closeBreakoutRooms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOMS_CLOSE)];
            });
        });
    };
    ZoomSdk.prototype.getBreakoutRoomList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOM_LIST_GET)];
            });
        });
    };
    ZoomSdk.prototype.addBreakoutRoom = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOM_ADD, options)];
            });
        });
    };
    ZoomSdk.prototype.deleteBreakoutRoom = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOM_DELETE, options)];
            });
        });
    };
    ZoomSdk.prototype.renameBreakoutRoom = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOM_RENAME, options)];
            });
        });
    };
    ZoomSdk.prototype.assignParticipantToBreakoutRoom = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOM_ASSIGN_PARTICIPANT, options)];
            });
        });
    };
    ZoomSdk.prototype.changeBreakoutRoom = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BREAKOUT_ROOM_CHANGE, options)];
            });
        });
    };
    ZoomSdk.prototype.startCollaborate = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.COLLABORATE_START, options)];
            });
        });
    };
    ZoomSdk.prototype.endCollaborate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.COLLABORATE_END)];
            });
        });
    };
    ZoomSdk.prototype.leaveCollaborate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.COLLABORATE_LEAVE)];
            });
        });
    };
    ZoomSdk.prototype.joinCollaborate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.COLLABORATE_JOIN)];
            });
        });
    };
    ZoomSdk.prototype.authorize = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.AUTHORIZE, options)];
            });
        });
    };
    ZoomSdk.prototype.promptAuthorize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.PROMPT_AUTHORIZE)];
            });
        });
    };
    ZoomSdk.prototype.setVideoState = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_VIDEO_STATE, options)];
            });
        });
    };
    ZoomSdk.prototype.setAudioState = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_AUDIO_STATE, options)];
            });
        });
    };
    ZoomSdk.prototype.getVideoState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_VIDEO_STATE)];
            });
        });
    };
    ZoomSdk.prototype.getAudioState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_AUDIO_STATE)];
            });
        });
    };
    ZoomSdk.prototype.toggleParticipantMediaAudio = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.TOGGLE_PARTICIPANT_MEDIA_AUDIO, options)];
            });
        });
    };
    ZoomSdk.prototype.getAppContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_APP_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.shareComputerAudio = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SHARE_COMPUTER_AUDIO, options)];
            });
        });
    };
    ZoomSdk.prototype.addParticipantSpotlight = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.ADD_PARTICIPANT_SPOTLIGHT, options)];
            });
        });
    };
    ZoomSdk.prototype.removeParticipantSpotlights = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REMOVE_PARTICIPANT_SPOTLIGHTS, options)];
            });
        });
    };
    ZoomSdk.prototype.getParticipantSpotlights = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_PARTICIPANT_SPOTLIGHTS)];
            });
        });
    };
    ZoomSdk.prototype.addParticipantPins = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.ADD_PARTICIPANT_PINS, options)];
            });
        });
    };
    ZoomSdk.prototype.removeParticipantPins = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REMOVE_PARTICIPANT_PINS, options)];
            });
        });
    };
    ZoomSdk.prototype.setFeedbackReaction = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_FEEDBACK_REACTION, options)];
            });
        });
    };
    ZoomSdk.prototype.removeFeedbackReaction = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REMOVE_FEEDBACK_REACTION)];
            });
        });
    };
    ZoomSdk.prototype.removeAllFeedbackReaction = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REMOVE_ALL_FEEDBACK_REACTION)];
            });
        });
    };
    ZoomSdk.prototype.allowAttendeesToSpeak = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.ALLOW_ATTENDEES_TO_SPEAK, options)];
            });
        });
    };
    ZoomSdk.prototype.disallowAttendeesToSpeak = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.DISALLOW_ATTENDEES_TO_SPEAK, options)];
            });
        });
    };
    ZoomSdk.prototype.removeWebinarAttendees = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REMOVE_WEBINAR_ATTENDEES, options)];
            });
        });
    };
    ZoomSdk.prototype.getChatContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_CHAT_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.composeCard = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.COMPOSE_CARD, options)];
            });
        });
    };
    ZoomSdk.prototype.getIncomingParticipantAudioState = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_INCOMING_PARTICIPANT_AUDIO_STATE, options)];
            });
        });
    };
    ZoomSdk.prototype.setIncomingParticipantAudioState = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_INCOMING_PARTICIPANT_AUDIO_STATE, options)];
            });
        });
    };
    ZoomSdk.prototype.setVideoSettings = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_VIDEO_SETTINGS, options)];
            });
        });
    };
    ZoomSdk.prototype.getVideoSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_VIDEO_SETTINGS)];
            });
        });
    };
    ZoomSdk.prototype.setAudioSettings = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_AUDIO_SETTINGS, options)];
            });
        });
    };
    ZoomSdk.prototype.getAudioSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_AUDIO_SETTINGS)];
            });
        });
    };
    ZoomSdk.prototype.promptShareScreen = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.PROMPT_SHARE_SCREEN, options)];
            });
        });
    };
    ZoomSdk.prototype.showMeetingInvitationDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SHOW_MEETING_INVITATION_DIALOG)];
            });
        });
    };
    ZoomSdk.prototype.setGalleryPage = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GALLERY_PAGE_SET, options)];
            });
        });
    };
    ZoomSdk.prototype.getGalleryPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GALLERY_PAGE_GET)];
            });
        });
    };
    ZoomSdk.prototype.broadcastVoiceToBreakoutRooms = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BROADCAST_VOICE_TO_BREAKOUT_ROOMS, options)];
            });
        });
    };
    ZoomSdk.prototype.getGalleryOrderList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_GALLERY_ORDER_LIST)];
            });
        });
    };
    ZoomSdk.prototype.stopShareScreen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.STOP_SHARE_SCREEN)];
            });
        });
    };
    ZoomSdk.prototype.getMeetingView = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_MEETING_VIEW)];
            });
        });
    };
    ZoomSdk.prototype.setMeetingView = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_MEETING_VIEW, options)];
            });
        });
    };
    ZoomSdk.prototype.onMeetingViewChange = function (handler) {
        this.addEventListener(NativeEvents.ON_MEETING_VIEW_CHANGE, handler);
    };
    ZoomSdk.prototype.setVideoFilter = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_VIDEO_FILTER, options)];
            });
        });
    };
    ZoomSdk.prototype.deleteVideoFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.DELETE_VIDEO_FILTER)];
            });
        });
    };
    ZoomSdk.prototype.setScreenName = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_SCREEN_NAME, options)];
            });
        });
    };
    ZoomSdk.prototype.setParticipantScreenName = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_PARTICIPANT_SCREEN_NAME, options)];
            });
        });
    };
    ZoomSdk.prototype.setEmojiReaction = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_EMOJI_REACTION, options)];
            });
        });
    };
    ZoomSdk.prototype.getEmojiConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_EMOJI_CONFIGURATION)];
            });
        });
    };
    ZoomSdk.prototype.onEmojiReaction = function (handler) {
        this.addEventListener(NativeEvents.ON_EMOJI_REACTION, handler);
    };
    ZoomSdk.prototype.getZoomRoomContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_ZOOM_ROOM_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.getZoomRoomControllerCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_ZOOM_ROOM_CONTROLLER_CREDENTIALS)];
            });
        });
    };
    ZoomSdk.prototype.leaveMeeting = function (options) {
        var emptyInput = { newHost: '' };
        return this.callZoomApi(NativeApis.LEAVE_MEETING, options !== null && options !== void 0 ? options : emptyInput);
    };
    ZoomSdk.prototype.joinMeeting = function (options) {
        var emptyInput = { joinURL: '', newHost: '' };
        return this.callZoomApi(NativeApis.JOIN_MEETING, options !== null && options !== void 0 ? options : emptyInput);
    };
    ZoomSdk.prototype.toggleParticipantMediaVideo = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.TOGGLE_PARTICIPANT_MEDIA_VIDEO, options)];
            });
        });
    };
    ZoomSdk.prototype.sendMessage = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SEND_MESSAGE, options)];
            });
        });
    };
    ZoomSdk.prototype.getPhoneContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_PHONE_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.onPhoneCalleeAnswered = function (handler) {
        this.addEventListener(NativeEvents.ON_PHONE_CALLEE_ANSWERED, handler);
    };
    ZoomSdk.prototype.onPhoneCallerEnded = function (handler) {
        this.addEventListener(NativeEvents.ON_PHONE_CALLER_ENDED, handler);
    };
    ZoomSdk.prototype.onPhoneCalleeEnded = function (handler) {
        this.addEventListener(NativeEvents.ON_PHONE_CALLEE_ENDED, handler);
    };
    ZoomSdk.prototype.onPhoneCalleeRejected = function (handler) {
        this.addEventListener(NativeEvents.ON_PHONE_CALLEE_REJECTED, handler);
    };
    ZoomSdk.prototype.onPhoneCallerMeetingInviting = function (handler) {
        this.addEventListener(NativeEvents.ON_PHONE_CALLER_MEETING_INVITING, handler);
    };
    ZoomSdk.prototype.onPhoneCalleeMeetingInvite = function (handler) {
        this.addEventListener(NativeEvents.ON_PHONE_CALLEE_MEETING_INVITE, handler);
    };
    ZoomSdk.prototype.onPhoneContext = function (handler) {
        this.addEventListener(NativeEvents.ON_PHONE_CONTEXT, handler);
    };
    ZoomSdk.prototype.getWaitingRoomState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_WAITING_ROOM_STATE)];
            });
        });
    };
    ZoomSdk.prototype.setWaitingRoomState = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_WAITING_ROOM_STATE, options)];
            });
        });
    };
    ZoomSdk.prototype.putParticipantToWaitingRoom = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.PUT_PARTICIPANT_TO_WAITING_ROOM, options)];
            });
        });
    };
    ZoomSdk.prototype.admitParticipantFromWaitingRoom = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.ADMIT_PARTICIPANT_FROM_WAITING_ROOM, options)];
            });
        });
    };
    ZoomSdk.prototype.getWaitingRoomParticipants = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_WAITING_ROOM_PARTICIPANTS)];
            });
        });
    };
    ZoomSdk.prototype.appPopout = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.APP_POPOUT, options)];
            });
        });
    };
    ZoomSdk.prototype.bringAppToFront = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.BRING_APP_TO_FRONT)];
            });
        });
    };
    ZoomSdk.prototype.sendAppToBackground = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SEND_APP_TO_BACKGROUND)];
            });
        });
    };
    ZoomSdk.prototype.closeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.CLOSE_APP)];
            });
        });
    };
    ZoomSdk.prototype.getEngagementContext = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_ENGAGEMENT_CONTEXT, options)];
            });
        });
    };
    ZoomSdk.prototype.onEngagementContextChange = function (handler) {
        this.addEventListener(NativeEvents.ON_ENGAGEMENT_CONTEXT_CHANGE, handler);
    };
    ZoomSdk.prototype.getEngagementStatus = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_ENGAGEMENT_STATUS, options)];
            });
        });
    };
    ZoomSdk.prototype.onEngagementStatusChange = function (handler) {
        this.addEventListener(NativeEvents.ON_ENGAGEMENT_STATUS_CHANGE, handler);
    };
    ZoomSdk.prototype.getEngagementSecurableStatus = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_ENGAGEMENT_SECURABLE_STATUS, options)];
            });
        });
    };
    ZoomSdk.prototype.startMediaRedirection = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.START_MEDIA_REDIRECTION, options)];
            });
        });
    };
    ZoomSdk.prototype.onEngagementMediaRedirect = function (handler) {
        this.addEventListener(NativeEvents.ON_ENGAGEMENT_MEDIA_REDIRECT, handler);
    };
    ZoomSdk.prototype.onWaitingRoomParticipantLeave = function (handler) {
        this.addEventListener(NativeEvents.ON_WAITING_ROOM_PARTICIPANT_LEAVE, handler);
    };
    ZoomSdk.prototype.onWaitingRoomParticipantJoin = function (handler) {
        this.addEventListener(NativeEvents.ON_WAITING_ROOM_PARTICIPANT_JOIN, handler);
    };
    ZoomSdk.prototype.onWaitingRoomStateChange = function (handler) {
        this.addEventListener(NativeEvents.ON_WAITING_ROOM_STATE_CHANGE, handler);
    };
    ZoomSdk.prototype.makePhoneCall = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.MAKE_PHONE_CALL, options)];
            });
        });
    };
    ZoomSdk.prototype.getMeetingLanguages = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_MEETING_LANGUAGES)];
            });
        });
    };
    ZoomSdk.prototype.onMeetingLanguagesChange = function (handler) {
        this.addEventListener(NativeEvents.ON_MEETING_LANGUAGES_CHANGE, handler);
    };
    ZoomSdk.prototype.getMeetingParticipantsEmail = function (options) {
        return this.callZoomApi(NativeApis.GET_MEETING_PARTICIPANTS_EMAIL, options);
    };
    ZoomSdk.prototype.onParticipantEmail = function (handler) {
        this.addEventListener(NativeEvents.ON_PARTICIPANT_EMAIL, handler);
    };
    ZoomSdk.prototype.getMeetingChatContext = function () {
        return this.callZoomApi(NativeApis.GET_MEETING_CHAT_CONTEXT);
    };
    ZoomSdk.prototype.getMailContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_MAIL_CONTEXT)];
            });
        });
    };
    ZoomSdk.prototype.getMailThread = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_MAIL_THREAD, options)];
            });
        });
    };
    ZoomSdk.prototype.getMailMessage = function (options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, doc;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 , this.callZoomApi(NativeApis.GET_MAIL_MESSAGE, options)];
                    case 1:
                        response = _c.sent();
                        if (response.body) {
                            doc = new DOMParser().parseFromString(response.body, 'text/html');
                            doc.querySelectorAll('[src^="cid:"]').forEach(function (el) {
                                var _a;
                                var cid = el.src.replace(/^cid:/, '');
                                var index = ((_a = response.attachments) !== null && _a !== void 0 ? _a : []).findIndex(function (item) { return item.cid === cid; });
                                if (index !== -1) {
                                    el.src = response.attachments[index].url;
                                    response.attachments.splice(index, 1);
                                }
                            });
                            response.body = doc.documentElement.outerHTML;
                        }
                        if (((_a = options === null || options === void 0 ? void 0 : options.filter) === null || _a === void 0 ? void 0 : _a.length) &&
                            !options.filter.includes('all') &&
                            !options.filter.includes('attachments')) {
                            delete response.attachments;
                        }
                        if ((_b = response.attachments) === null || _b === void 0 ? void 0 : _b.length) {
                            response.attachments = response.attachments.map(function (item) { return ({
                                attachmentId: item.attachmentId,
                                fileName: item.fileName,
                                size: item.size,
                            }); });
                        }
                        return [2 , response];
                }
            });
        });
    };
    ZoomSdk.prototype.getMailActiveEditorData = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_MAIL_ACTIVE_EDITOR_DATA, options)];
            });
        });
    };
    ZoomSdk.prototype.setMailActiveEditorData = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_MAIL_ACTIVE_EDITOR_DATA, options)];
            });
        });
    };
    ZoomSdk.prototype.registerMailEditorComponent = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REGISTER_MAIL_EDITOR_COMPONENT, options)];
            });
        });
    };
    ZoomSdk.prototype.insertContentToMailActiveEditor = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.INSERT_CONTENT_TO_MAIL_ACTIVE_EDITOR, options)];
            });
        });
    };
    ZoomSdk.prototype.renderInMailActiveEditor = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.RENDER_IN_MAIL_ACTIVE_EDITOR, options)];
            });
        });
    };
    ZoomSdk.prototype.renderInMail = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.RENDER_IN_MAIL, options)];
            });
        });
    };
    ZoomSdk.prototype.subscribeBeforeMailSend = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SUBSCRIBE_BEFORE_MAIL_SEND, options)];
            });
        });
    };
    ZoomSdk.prototype.unsubscribeBeforeMailSend = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.UNSUBSCRIBE_BEFORE_MAIL_SEND)];
            });
        });
    };
    ZoomSdk.prototype.callbackToMail = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.CALLBACK_TO_MAIL, options)];
            });
        });
    };
    ZoomSdk.prototype.onMailActiveEditorChange = function (handler) {
        this.addEventListener(NativeEvents.ON_MAIL_ACTIVE_EDITOR_CHANGE, handler);
    };
    ZoomSdk.prototype.onMailActiveEditorTypeChange = function (handler) {
        this.addEventListener(NativeEvents.ON_MAIL_ACTIVE_EDITOR_TYPE_CHANGE, handler);
    };
    ZoomSdk.prototype.onMailActiveEditorDataChange = function (handler) {
        this.addEventListener(NativeEvents.ON_MAIL_ACTIVE_EDITOR_DATA_CHANGE, handler);
    };
    ZoomSdk.prototype.onMailEditorDestroy = function (handler) {
        this.addEventListener(NativeEvents.ON_MAIL_EDITOR_DESTROY, handler);
    };
    ZoomSdk.prototype.onAppToggleInMailActiveEditor = function (handler) {
        this.addEventListener(NativeEvents.ON_APP_TOGGLE_IN_MAIL_ACTIVE_EDITOR, handler);
    };
    ZoomSdk.prototype.onAppUIActionInMail = function (handler) {
        this.addEventListener(NativeEvents.ON_APP_UI_ACTION_IN_MAIL, handler);
    };
    ZoomSdk.prototype.onBeforeMailSend = function (handler) {
        this.addEventListener(NativeEvents.ON_BEFORE_MAIL_SEND, handler);
    };
    ZoomSdk.prototype.takeParticipantPhoto = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.TAKE_PARTICIPANT_PHOTO, options)];
            });
        });
    };
    ZoomSdk.prototype.takeMyPhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.TAKE_MY_PHOTO)];
            });
        });
    };
    ZoomSdk.prototype.getEngagementVariableValue = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_ENGAGEMENT_VARIABLE_VALUE, options)];
            });
        });
    };
    ZoomSdk.prototype.getAppVariableList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_APP_VARIABLE_LIST)];
            });
        });
    };
    ZoomSdk.prototype.sendMessageToChat = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SEND_MESSAGE_TO_CHAT, options)];
            });
        });
    };
    ZoomSdk.prototype.setDynamicIndicator = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_DYNAMIC_INDICATOR, options)];
            });
        });
    };
    ZoomSdk.prototype.getDynamicIndicator = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_DYNAMIC_INDICATOR)];
            });
        });
    };
    ZoomSdk.prototype.removeDynamicIndicator = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REMOVE_DYNAMIC_INDICATOR)];
            });
        });
    };
    ZoomSdk.prototype.onSetDynamicIndicator = function (handler) {
        this.addEventListener(NativeEvents.ON_SET_DYNAMIC_INDICATOR, handler);
    };
    ZoomSdk.prototype.onRemoveDynamicIndicator = function (handler) {
        this.addEventListener(NativeEvents.ON_REMOVE_DYNAMIC_INDICATOR, handler);
    };
    ZoomSdk.prototype.setDynamicIndicatorStyle = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SET_DYNAMIC_INDICATOR_STYLE, options)];
            });
        });
    };
    ZoomSdk.prototype.onDynamicIndicatorStyleChange = function (handler) {
        this.addEventListener(NativeEvents.ON_DYNAMIC_INDICATOR_STYLE_CHANGE, handler);
    };
    ZoomSdk.prototype.extendDynamicIndicator = function (options
    ) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.EXTEND_DYNAMIC_INDICATOR, options)];
            });
        });
    };
    ZoomSdk.prototype.onExtendDynamicIndicator = function (handler) {
        this.addEventListener(NativeEvents.ON_EXTEND_DYNAMIC_INDICATOR, handler);
    };
    ZoomSdk.prototype.promptUpgradeRequest = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.PROMPT_UPGRADE_REQUEST, options)];
            });
        });
    };
    ZoomSdk.prototype.onUpgradeRequest = function (handler) {
        this.addEventListener(NativeEvents.ON_UPGRADE_REQUEST, handler);
    };
    ZoomSdk.prototype.onZoomRoomEvent = function (handler) {
        this.addEventListener(NativeEvents.ON_ZOOM_ROOM_EVENT, handler);
    };
    ZoomSdk.prototype.getZoomRoomDeviceDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_ZOOM_ROOM_DEVICE_DETAILS)];
            });
        });
    };
    ZoomSdk.prototype.removeParticipant = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.REMOVE_PARTICIPANT, options)];
            });
        });
    };
    ZoomSdk.prototype.sendKeypadControls = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.SEND_KEYPAD_CONTROLS, options)];
            });
        });
    };
    ZoomSdk.prototype.startRTMS = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.START_RTMS)];
            });
        });
    };
    ZoomSdk.prototype.stopRTMS = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.STOP_RTMS)];
            });
        });
    };
    ZoomSdk.prototype.pauseRTMS = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.PAUSE_RTMS)];
            });
        });
    };
    ZoomSdk.prototype.resumeRTMS = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.RESUME_RTMS)];
            });
        });
    };
    ZoomSdk.prototype.getRTMSStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 , this.callZoomApi(NativeApis.GET_RTMS_STATUS)];
            });
        });
    };
    ZoomSdk.prototype.onRTMSStatusChange = function (handler) {
        this.addEventListener(NativeEvents.ON_RTMS_STATUS_CHANGE, handler);
    };
    return ZoomSdk;
}());
function getJsCallId() {
    var array = new Uint8Array(16);
    if (browserCrypto) {
        browserCrypto.getRandomValues(array);
    }
    else if (nodeCrypto) {
        array.set(nodeCrypto.randomBytes(16));
    }
    var randomString = Array.from(array, function (byte) {
        return byte.toString(16).padStart(2, '0');
    }).join('');
    return 'id' + randomString;
}
function setNativeApiCallback(jsCallId, callback) {
    nativeApiCallbacks[jsCallId] = callback;
}
function removeNativeApiCallback(jsCallId) {
    if (nativeApiCallbacks[jsCallId])
        delete nativeApiCallbacks[jsCallId];
}
function isString(v) {
    return typeof v === 'string';
}
function getDevicePixelsForValue(pixelValue, containerSize) {
    if (isString(pixelValue)) {
        var value = parseFloat(pixelValue);
        if (pixelValue.endsWith('px')) {
            return Math.trunc(value * window.devicePixelRatio);
        }
        else if (pixelValue.endsWith('%')) {
            return Math.trunc((value / 100.0) * containerSize * window.devicePixelRatio);
        }
        else {
            return value;
        }
    }
    return pixelValue;
}
function updateOptionsPixelsXY(options) {
    if (options) {
        if (options.x) {
            options.x = getDevicePixelsForValue(options.x, window.innerWidth);
        }
        if (options.y) {
            options.y = getDevicePixelsForValue(options.y, window.innerHeight);
        }
    }
}
function updateOptionsPixelsWidthHeight(options) {
    if (options) {
        if (options.width) {
            options.width = getDevicePixelsForValue(options.width, window.innerWidth);
        }
        if (options.height) {
            options.height = getDevicePixelsForValue(options.height, window.innerHeight);
        }
    }
}
function updateOptionsZIndex(options) {
    if (options) {
        if (options.zIndex && isString(options.zIndex)) {
            var zIndex = options.zIndex;
            options.zIndex = parseInt(zIndex);
        }
    }
}

var module$1 = new ZoomSdk({ version: version });

exports.compatibilityApisCache = compatibilityApisCache;
exports["default"] = module$1;
exports.isVersionCompatible = isVersionCompatible;
