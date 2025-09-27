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

declare enum NativeEvents {
    ON_ACTIVE_SPEAKER_CHANGE = "onActiveSpeakerChange",
    ON_APP_POPOUT = "onAppPopout",
    ON_CLOUD_RECORDING = "onCloudRecording",
    ON_CONNECT = "onConnect",
    ON_EXPAND_APP = "onExpandApp",
    ON_APP_VISIBILITY_CHANGE = "onAppVisibilityChange",
    ON_MEETING = "onMeeting",
    ON_MESSAGE = "onMessage",
    ON_MY_ACTIVE_SPEAKER_CHANGE = "onMyActiveSpeakerChange",
    ON_MY_MEDIA_CHANGE = "onMyMediaChange",
    ON_MY_REACTION = "onMyReaction",
    ON_MY_USER_CONTEXT_CHANGE = "onMyUserContextChange",
    ON_PARTICIPANT_CHANGE = "onParticipantChange",
    ON_REACTION = "onReaction",
    ON_SEND_APP_INVITATION = "sendAppInvitation",
    ON_SEND_APP_INVITATION_COMPATIBILITY = "onSendAppInvitation",
    ON_SHARE_APP = "shareApp",
    ON_SHARE_APP_COMPATIBILITY = "onShareApp",
    ON_MEETING_CONFIG_CHANGED = "onMeetingConfigChanged",
    ON_BREAKOUT_ROOM_CHANGE = "onBreakoutRoomChange",
    ON_INVITE_COLLABORATION = "onInviteCollaboration",
    ON_COLLABORATE_CHANGE = "onCollaborateChange",
    ON_GALLERY_PAGE_CHANGE = "onGalleryPageChange",
    ON_RUNNING_CONTEXT_CHANGE = "onRunningContextChange",
    ON_AUTHORIZED = "onAuthorized",
    ON_CLOSE_APP_FOR_PARTICIPANTS = "onCloseAppForParticipants",
    ON_RENDERED_APP_OPENED = "onRenderedAppOpened",
    ON_FEEDBACK_REACTION_EVENT = "onFeedbackReaction",
    ON_REMOVE_FEEDBACK_REACTION_EVENT = "onRemoveFeedbackReaction",
    ON_INCOMING_PARTICIPANT_AUDIO_CHANGE = "onIncomingParticipantAudioChange",
    ON_SHARE_SCREEN = "onShareScreen",
    ON_SHARE_COMPUTER_AUDIO = "onShareComputerAudio",
    ON_GALLERY_ORDER = "onGalleryOrder",
    ON_EMOJI_REACTION = "onEmojiReaction",
    ON_MEETING_VIEW_CHANGE = "onMeetingViewChange",
    ON_PHONE_CALLEE_ANSWERED = "onPhoneCalleeAnswered",
    ON_PHONE_CALLER_ENDED = "onPhoneCallerEnded",
    ON_PHONE_CALLEE_ENDED = "onPhoneCalleeEnded",
    ON_PHONE_CALLEE_REJECTED = "onPhoneCalleeRejected",
    ON_PHONE_CALLER_MEETING_INVITING = "onPhoneCallerMeetingInviting",
    ON_PHONE_CALLEE_MEETING_INVITE = "onPhoneCalleeMeetingInvite",
    ON_PHONE_CONTEXT = "onPhoneContext",
    ON_ENGAGEMENT_CONTEXT_CHANGE = "onEngagementContextChange",
    ON_ENGAGEMENT_STATUS_CHANGE = "onEngagementStatusChange",
    ON_ENGAGEMENT_MEDIA_REDIRECT = "onEngagementMediaRedirect",
    ON_MEETING_LANGUAGES_CHANGE = "onMeetingLanguagesChange",
    ON_WAITING_ROOM_STATE_CHANGE = "onWaitingRoomStateChange",
    ON_WAITING_ROOM_PARTICIPANT_LEAVE = "onWaitingRoomParticipantLeave",
    ON_WAITING_ROOM_PARTICIPANT_JOIN = "onWaitingRoomParticipantJoin",
    ON_PARTICIPANT_EMAIL = "onParticipantEmail",
    ON_PHOTO = "onPhoto",
    ON_ENGAGEMENT_VARIABLE_VALUE_CHANGE = "onEngagementVariableValueChange",
    ON_SET_DYNAMIC_INDICATOR = "onSetDynamicIndicator",
    ON_REMOVE_DYNAMIC_INDICATOR = "onRemoveDynamicIndicator",
    ON_DYNAMIC_INDICATOR_STYLE_CHANGE = "onDynamicIndicatorStyleChange",
    ON_EXTEND_DYNAMIC_INDICATOR = "onExtendDynamicIndicator",
    ON_MAIL_ACTIVE_EDITOR_CHANGE = "onMailActiveEditorChange",
    ON_MAIL_ACTIVE_EDITOR_TYPE_CHANGE = "onMailActiveEditorTypeChange",
    ON_MAIL_ACTIVE_EDITOR_DATA_CHANGE = "onMailActiveEditorDataChange",
    ON_MAIL_EDITOR_DESTROY = "onMailEditorDestroy",
    ON_APP_TOGGLE_IN_MAIL_ACTIVE_EDITOR = "onAppToggleInMailActiveEditor",
    ON_APP_UI_ACTION_IN_MAIL = "onAppUIActionInMail",
    ON_BEFORE_MAIL_SEND = "onBeforeMailSend",
    ON_UPGRADE_REQUEST = "onUpgradeRequest",
    ON_ZOOM_ROOM_EVENT = "onZoomRoomEvent",
    ON_RTMS_STATUS_CHANGE = "onRTMSStatusChange"
}

/**
 * @deprecated
 */
declare const ZERO_SIXTEEN_ZERO = "0.16.0";
declare const ZERO_SIXTEEN = "0.16";
/**
 * @deprecated
 */
declare const ZERO_FOURTEEN_ZERO = "0.14.0";
declare const ZERO_FOURTEEN = "0.14";

/** @ignore */
declare type NativeApiRequest = {
    jsCallId: string;
    apiName: string;
    token?: string;
    appId?: string;
    data?: any;
};
/**
 * @category Core
 */
declare type SdkVersion = typeof ZERO_FOURTEEN | typeof ZERO_FOURTEEN_ZERO | typeof ZERO_SIXTEEN | typeof ZERO_SIXTEEN_ZERO;
/**
 * @category Core
 */
declare type GeneralMessage = 'Success' | 'Failure';
/**
 * @returns {string} Success, if no error
 *
 * @category Core
 */
declare type GeneralMessageResponse = {
    message: GeneralMessage;
};
/**
 * _inChat_	The app is running in Chat app.
 *
 * _inMeeting_	The app is running in the right side panel of a meeting.
 *
 * _inImmersive_	The app is running in immersive mode, occupying the main meeting window.
 *
 * _inWebinar_	The app is running in a webinar.
 *
 * _inMainClient_	The app is running in the main client.
 *
 * _inPhone_	The app is running in the right side panel of Zoom Phone Client.
 *
 * _inCollaborate_	The app is running in Collaborate mode.
 *
 * _inDigitalSignage_ The app is running in DigitalSignage
 *
 * _inContactCenter_ The app is running in Zoom Contact Center
 *
 * _inMail_ The app is running in Mail
 *
 * _inCollaborateSidecar_ The app is running in sidecar webview instance.
 *
 * _inMeetingChat_ The app is launched in a chat during a meeting.
 *
 * @category Core
 */
declare type RunningContext = 'inChat' | 'inMeeting' | 'inImmersive' | 'inWebinar' | 'inMainClient' | 'inPhone' | 'inCollaborate' | 'inCamera' | 'inDigitalSignage' | 'inPhone' | 'inContactCenter' | 'inMail' | 'inCollaborateSidecar' | 'inMeetingChat';
/**
 * @category Utility
 */
declare type GenericEventHandler<T> = (data: T) => void;
/**
 *
 * Usage:
 *
 * ```
 * zoomSdk.onShareApp((event) => {
 *   console.log(event)
 *   alert("sharing event fired");
 * });
 * ```
 *
 * Console log:
 * ```
 * "start"
 * ```
 *
 * `event` is either:
 * - `"start"` if Screenshare started.
 * - `"stop"` if Screenshare stopped.
 *
 * @category Sharing
 */
declare type OnShareAppEvent = 'start' | 'stop';
/**
 * Usage:
 *
 * ```
 * zoomSdk.onSendAppInvitation((event) => {
 *   console.log(event)
 *   alert("app invitation sent");
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 946684800,
 *   "invitationUUID": "UUID1",
 *   "invitedUserCount": 100
 * }
 * ```
 * @category Invitations & Notifications
 */
declare type OnSendAppInvitationEvent = {
    /** In epoch format, time when sendAppInvitation was called. */
    timestamp: number;
    /** The Invitation UUID returned by sendAppInvitation. */
    invitationUUID: string;
    /** The number of users to whom the invitation was sent. Not available to Webinar attendees. */
    invitedUserCount?: number;
    /**
     *  mode will be returned in webinar
     *
     * | Mode |	Description |
     * | ------- | -------- |
     * | everyone | Invitation was sent to everyone. |
     * | panelists | Invitation was sent to all panelists. |
     * | individual | Invitation was sent to select participants. |
     */
    mode?: 'everyone' | 'panelists' | 'individual';
};
/**
 * Usage:
 * ```
 * zoomSdk.onCloudRecording((event) => {
 *   console.log(event)
 * }
 * ```
 * @category Recording
 */
declare type OnCloudRecordingEvent = {
    /** Timestamp */
    timestamp: number;
    /** Cloud recording action type */
    action: 'connecting' | 'started' | 'stopped' | 'paused';
};
/**
 * Usage:
 * ```
 * zoomSdk.onReaction((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 1614831950,
 *   "participantUUID": "xxxxx",
 *   "screenName": "xxxxx",
 *   "type": "clap"
 * }
 * ```
 *
 * @category Reactions
 */
declare type OnReactionEvent = {
    /** Participant ID of the user who sent the reaction
     * @deprecated use participantUUID instead of participantId
     */
    participantId: number;
    /** Participant UUID of the user who sent the reaction */
    participantUUID: string;
    /** Screen name of the user who sent the reaction */
    screenName: string;
    /** Timestamp at which the reaction was sent */
    timestamp: number;
    /** Type of reaction. Zoom Apps use system emojis (macOS & Windows) along with a few custom reactions including "yes", "no", "speed up", and "slow down" */
    type: string;
    /** Unicode representation of the reaction */
    unicode: string;
};
/**
 * @category Meeting Actions
 */
declare type OnParticipantChangeParticipantType = {
    /** join or leave */
    status: 'join' | 'leave';
    /** Screen name of the user who joined or left the meeting */
    screenName: string;
    /** Participant ID of the user who joined or left the meeting
     * @deprecated use participantUUID instead of participantId
     */
    participantId: number;
    /** Participant UUID of the user who joined or left the meeting */
    participantUUID: string;
    /** User's role: host, cohost, or attendee */
    role: 'host' | 'cohost' | 'attendee';
};
/**
 *
 * Usage:
 * ```
 * zoomSdk.onParticipantChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 1614831950,
 *   "participants": [
 *     {
 *       "status": "join",
 *       "screenName": "xxxxx",
 *       "participantUUID": "xxxxxxx"
 *       "role": "attendee"
 *     }
 *   ]
 * }
 * ```
 *
 * @category Meeting Actions
 */
declare type OnParticipantChangeEvent = {
    timestamp: number;
    participants: OnParticipantChangeParticipantType[];
};
/**
 * @category Meeting Actions
 */
declare type OnActiveSpeakerChangeUserType = {
    /**
     * @deprecated use participantUUID instead of participantId
     */
    participantId: string;
    /**
     * Screen name of the user who started speaking.
     */
    screenName: string;
    /**
     * Timestamp at which the active speaker changed.
     */
    timestamp: string;
    /**
     * A meeting-specific participant-identifier it persists as users navigate across breakout rooms or briefly loses connections.
     */
    participantUUID: string;
};
/**
 * Usage:
 * ```
 * zoomSdk.onActiveSpeakerChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 1614831950,
 *   "users": [
 *     {
 *       "screenName": "Tom",
 *       "timestamp": "1614831950",
 *       "participantUUID":"xyz-abc"
 *     },
 *     {
 *       "screenName": "Jim",
 *       "timestamp": "1614831950",
 *       "participantUUID":"erj-slh"
 *     }
 *   ]
 * }
 * ```
 *
 * @category Meeting Actions
 */
declare type OnActiveSpeakerChangeEvent = {
    /**
     * Timestamp at which the active speaker changed
     */
    timestamp: number;
    users: OnActiveSpeakerChangeUserType[];
};
/**
 * Usage:
 * ```
 * zoomSdk.onMyActiveSpeakerChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 1614831950,
 *   "status": "started"
 * }
 * ```
 *
 *
 * @category Meeting Actions
 */
declare type OnMyActiveSpeakerChangeEvent = {
    /**
     * Timestamp at which the active speaker changed
     */
    timestamp: number;
    /**
     * User speaking status.
     */
    status: 'started' | 'stopped';
};
/**
 * Usage:
 * ```
 * zoomSdk.onAppPopout((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 1614831950,
 *   "action": "dock",
 *   "height": 100,
 *   "width": 200,
 *   "orientation": "landscape"
 * }
 * ```
 *
 *
 * @category App Window
 */
declare type OnAppPopoutEvent = {
    /** Timestamp at which popout/pop-in button is clicked */
    timestamp: number;
    /** dock (pop-in) or undock (popout)   */
    action: 'dock' | 'undock';
    /** Height of the popout window in px */
    height: number;
    /** Width of the popout window in px */
    width: number;
    /** landscape or portrait */
    orientation: 'landscape' | 'portrait';
};
/**
 *
 * Usage:
 * ```
 * zoomSdk.onExpandApp((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 946684800,
 *   "action": "expand"
 * }
 * ```
 * @category App Window
 */
declare type OnExpandAppEvent = {
    timestamp: number;
    action: 'expand' | 'collapse';
};
/**
 * @category App Window
 */
declare type OnAppVisibilityChangeEvent = {
    timestamp: number;
    /** Is the app currently visible? */
    visible: boolean;
};
/**
 * Usage:
 * ```
 * zoomSdk.onConnect((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 946684800,
 *   "action": "success"
 * }
 * ```
 * @category App Instances Communication
 */
declare type OnConnectEvent = {
    timestamp: number;
    action: 'success' | 'failure';
};
/**
 * Usage:
 * ```
 * zoomSdk.onMessage((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 946684800,
 *   "payload": [json object]
 * }
 * ```
 * @category App Instances Communication
 */
declare type OnMessageEvent = {
    timestamp: number;
    payload: JSONObject;
    participantUUID?: string;
};
/**
 * Usage:
 * ```
 * zoomSdk.onMeeting((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 946684800,
 *   "action": "ended"
 * }
 * ```
 * @category App Instances Communication
 */
declare type OnMeetingEvent = {
    timestamp: number;
    action: string;
};
/** Breakout rooms are created in UX or by `createBreakoutRooms`.
 *
 * @category Breakout Rooms
 */
declare type BreakoutRoomsCreated = {
    timestamp: number;
    change: 'breakoutRoomsCreated';
    breakoutRoomUUIDs: string[];
};
/** There are changes in the rooms list by UX or by methods `addBreakoutRoom`, `deleteBreakoutRoom`, `renameBreakoutRoom`.
 *
 * @category Breakout Rooms
 */
declare type BreakoutRoomsUpdated = {
    timestamp: number;
    change: 'breakoutRoomsUpdated';
    breakoutRoomUUIDs: string[];
    changeType: 'deleted' | 'added' | 'renamed';
};
/** By UX or by method `assignParticipantToBreakoutRoom`.
 *
 * @category Breakout Rooms
 */
declare type BreakoutRoomsParticipantsAssigned = {
    timestamp: number;
    change: 'breakoutRoomParticipantsAssigned';
    breakoutRoomUUID: string;
    /** host / co-host only */
    participantUUIDs?: string[];
};
/** Participants joined a breakout room, or by method `changeBreakoutRoom`.
 *
 * @category Breakout Rooms
 */
declare type BreakoutRoomsParticipantsJoined = {
    timestamp: number;
    change: 'breakoutRoomParticipantsJoined';
    breakoutRoomUUID: string;
    /** host / co-host only */
    participantUUIDs?: string[];
};
/** Participants left a breakout room, or by method `changeBreakoutRoom`.
 *
 * @category Breakout Rooms
 */
declare type BreakoutRoomsParticipantsLeft = {
    timestamp: number;
    change: 'breakoutRoomParticipantsLeft';
    breakoutRoomUUID: string;
    /** host / co-host only */
    participantUUIDs?: string[];
};
/**
 *
 *  `change` The modification which triggered the event
 * - `breakoutRoomsConfigured` Breakout rooms configurations are changed in UX or by method `configureBreakoutRoom`.
 * - `breakoutRoomOpened | breakoutRoomClosed` Opening or Closing breakout rooms using UX or by method `openBreakoutRooms` or method `closeBreakoutRooms`. Deprecated in client version 5.11.0
 * - `breakoutRoomOpened` Opening breakout rooms using UX or by method `openBreakoutRooms`
 * - `breakoutRoomClosed` Closing breakout rooms using UX or by method `closeBreakoutRooms`.
 * Usage:
 * ```
 * zoomSdk.onMeetingConfigChanged((event) => {
 *   console.log(event)
 * });
 * ```
 *  Note:
 *  - `breakoutRoomOpened | breakoutRoomClosed` as a single string is deprecated
 *
 * | client    | <=0.14 SDK                                 | >=0.16 SDK                                   |
 * |-----------|--------------------------------------------|----------------------------------------------|
 * | < 5.11.0  | `breakoutRoomOpened \| breakoutRoomClosed` | `breakoutRoomOpened \| breakoutRoomClosed`   |
 * | >= 5.11.0 | `breakoutRoomOpened \| breakoutRoomClosed` | `breakoutRoomOpened` or `breakoutRoomClosed` |
 *
 *
 * @category Breakout Rooms
 */
declare type onMeetingConfigChangedEvent = {
    timestamp: number;
    change: 'breakoutRoomsConfigured' | 'breakoutRoomOpened | breakoutRoomClosed' | 'breakoutRoomOpened' | 'breakoutRoomClosed';
} | BreakoutRoomsCreated | BreakoutRoomsUpdated | BreakoutRoomsParticipantsAssigned | BreakoutRoomsParticipantsJoined | BreakoutRoomsParticipantsLeft;
/**
 * Usage:
 * ```
 * zoomSdk.onBreakoutRoomChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *    action: "join",
 *    breakoutRoomUUID: "xxxxxxxx",
 *    timestamp: 1614831950
 * }
 * ```
 * @category Breakout Rooms
 */
declare type OnBreakoutRoomChangeEvent = {
    action: 'join' | 'leave';
    breakoutRoomUUID: string;
    timestamp: number;
};
/**
 * Usage:
 * ```
 * zoomSdk.onCollaborateChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   {"action": "start", "collaborateUUID": "xxxxx", timestamp: 1646302251} //the User who call collaborate API:join
 *   {"action": "end", "timestamp": 1646302251} //the User who call collaborate API:end
 *   {"action": "leave", "timestamp": 1646302251} //the User who call collaborate API:join
 *   {"action": "join", "timestamp": 1646302251} //the User who call collaborate API:leave
 * }
 * ```
 * @category Collaborate
 */
declare type OnCollaborateChangeEvent = {
    /** action: endCollaborateSidecar, this value is returned when the sidecar webview instance of the app is ended.   */
    action: string;
    collaborateUUID?: string;
    timestamp: number;
};
/**
 * Usage:
 * ```
 * zoomSdk.onRunningContextChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *    runningContext: xxxxx,
 *    timestamp: 1646302251
 * }
 * ```
 * @category Collaborate
 */
declare type OnRunningContextChangeEvent = {
    runningContext: RunningContext;
    timestamp: number;
};
/**
 * Usage:
 * ```
 * zoomSdk.onMyReaction((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 1614831950,
 *   "type": "clap",
 *   "unicode": "👏"
 * }
 * ```
 * @category Reactions
 */
declare type OnMyReactionEvent = {
    type: string;
    unicode: string;
    timestamp: number;
};
/**
 *
 * Usage:
 * ```
 * zoomSdk.onMyUserContextChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 1614831950,
 *   "role": "coHost",
 *   "screenName": "Happier Zoomineer"
 * }
 * ```
 * @category Meeting Actions
 */
declare type OnMyUserContextChangeEvent = {
    /** Timestamp at which the user's context change */
    timestamp: number;
    /** Role of the user */
    role: 'coHost' | 'attendee' | 'host';
    /** Screen name of the user */
    screenName: string;
};
/**
 * @category Meeting Actions
 */
declare type VideoMedia = {
    video?: {
        state?: boolean;
        width?: number;
        height?: number;
    };
};
/**
 * @category Meeting Actions
 */
declare type AudioMedia = {
    audio?: {
        state: boolean;
    };
};
/**
 *
 * Usage:
 * ```
 * zoomSdk.onMyMediaChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "media": {
 *     "video": {
 *       "width": 1920,
 *       "height": 1080,
 *     }
 *   }
 *   "timestamp": 1635541516
 * }
 * ```
 * Or
 * ```
 * {
 *   "media": {
 *     "video": {
 *       "state": false
 *     }
 *   }
 *   "timestamp": 1635541516
 * }
 * ```
 * @category Meeting Actions
 */
declare type OnMyMediaChangeEvent = {
    media: VideoMedia | AudioMedia;
    /** Timestamp at which the user's media change */
    timestamp: number;
};
/**
 *
 * Usage:
 * ```
 * zoomSdk.onAuthorized((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "code": "2kOV9vGZWb_4G..."
 *   "redirectUri": "https://xxx"
 *   "result": true
 *   "state": "UHbCftHDhjCAjI4FQ..."
 *   "timestamp": 1655142791
 * }
 * ```
 *
 * @category Auth
 */
declare type OnAuthorizedEvent = {
    /**  OAuth code only when succeed */
    code: string;
    /** OAuth redirect uri */
    redirectUri: string;
    /**  success or declined */
    result: boolean;
    /** customer OAuth state */
    state?: string;
    timestamp: number;
};
/**
 *
 * Usage:
 * ```
 * zoomSdk.onShareScreen((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "participantUUID": "xxxxxx"
 *   "timestamp": 1655142791,
 *   "action": "start",
 *   "withSound": false,
 * }
 * ```
 *
 * @category Meeting Actions
 */
declare type OnShareScreenEvent = {
    /** participant id of user sharing screen */
    participantUUID: string;
    /** Timestamp at which the user started or stopped screen share */
    timestamp: number;
    /**  Action describing whether user started or stopped */
    action: 'start' | 'stop';
    /**  Is user sharing audio with screen */
    withSound: boolean;
};
/**
 *
 * Usage:
 * ```
 * zoomSdk.onShareComputerAudio((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "participantUUID": "xxxxxx"
 *   "timestamp": 1655142791,
 *   "action": "start",
 * }
 * ```
 *
 * @category Meeting Actions
 */
declare type OnShareComputerAudioEvent = {
    /** participant id of user sharing audio */
    participantUUID: string;
    /** Timestamp at which the user started or stopped audio share */
    timestamp: number;
    /**  Action describing whether user started or stopped */
    action: 'start' | 'stop';
};
/**
 *
 * Usage:
 * ```
 * zoomSdk.onPhoto((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "participantUUID": "xxxxxx",
 *   "videoOff": true,
 *   "optedOut": false,
 *   "timestamp": 1655142791,
 *   "imageData": {
 *     width: 1234,
 *     height: 3454,
 *     data: ImageData,
 *   },
 * }
 * ```
 *
 * @category Meeting Actions
 */
declare type OnPhotoEvent = {
    /** participant id of the participant whose photo is taken */
    participantUUID: string;
    /** true if the video is off */
    videoOff: boolean;
    /**  true if pressed Don't Allow or didn't respond */
    optedOut: boolean;
    /** Timestamp at which the photo was taken */
    timestamp: number;
    /** ImageData returned. null if videoOff or optedOut is true */
    imageData: null | ImageData;
};
/**
 *
 * Usage:
 * ```
 * zoomSdk.onEngagementVariableValueChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *  "timestamp": 1731031732,
 *   "variables": [
 *    {
 *       "id": "079f953f-f0d7-4ab1-bd50-f81465adbf45",
 *       "name": "for test.zapps_key",
 *       "value": "BBB12"
 *     }
 *   ]
 * }
 * ```
 *
 * @category Zoom Contact Center
 */
declare type onEngagementVariableValueChangeEvent = {
    /** ZCC variables */
    variables: {
        id: string;
        name?: string;
        value: any;
    }[];
    /** Timestamp at which engagement variable value changed */
    timestamp: number;
};
/**
 * @category Core
 */
declare type SdkOptions = {
    version?: SdkVersion;
};
/**
 * @category Core
 */
declare type ConfigSize = {
    height: number;
    width: number;
};
/**
 * @category Core
 */
declare type ConfigOptions = {
    /** list of APIs and events you plan to use in your app */
    capabilities: Apis[];
    /** optional. Object that takes width and height of your desired app window size upon pop-out (in pixels as a number). The size property has the following constraints:
     - Max: 75% of screen size
     - Min: Windows - 336 x 342, Mac - 320 x 760
     - Default: current side-panel size */
    popoutSize?: ConfigSize;
    /** target SDK version, required if loading SDK from Zoom Apps CDN
     * ```
     * const zoomSdk = new ZoomSdk({ version: '0.16' })
     * ```
     */
    version?: SdkVersion;
    /** @hidden */
    size?: ConfigSize;
    /** timeout in ms. Custom timeout passed in config will be used during all APIs call to zoomSdk. If no timeout is passed, default 10000ms will be used. */
    timeout?: number;
};
/** @ignore */
declare type NativeConfigOptions = {
    js_api_lists: Apis[];
    size?: ConfigSize;
    version?: SdkVersion;
};
/**
 * @category Core
 */
declare type AuthObject = {
    status: 'authorized' | 'unauthorized';
    upgradable: boolean;
};
/**
 * @category Core
 */
declare type LaunchContext = {
    /**
     * Top level location where the app is open
     */
    origin: 'Client Setting' | 'App Launcher' | 'ZMail';
    /**
     * Secondary location insides the origin
     * When the origin is ZMail, section would be 'thread-detail' | 'message-detail'.
     *
     * _thread-detail_ Indicates that the app is opened from the mail thread
     *
     * _message-detail_ Indicates that the app is opened from the mail message
     */
    section?: 'thread-detail' | 'message-detail';
    /**
     * _user_ Indicates that app is opened by the user directly clicking on the app in the Zoom App launcher
     *
     * _apiAuto_ Indicates that the app is opened by the use of an auto-open API
     *
     * _uiToggleAuto_ Indicates that the app is opened by the user-selected action to auto-open the app on meeting start. This can be managed by the user in the menu next to the app name, and also under Settings > Zoom Apps > On meeting start
     *
     * _deeplink_ Indicates that the app is opened by the use of a developer configured deeplink
     */
    openBy: 'user' | 'apiAuto' | 'uiToggleAuto' | 'deeplink';
};
/**
 * The product parameter is implemented mainly to support apps running on various devices. The running context tells the app whether the device is in a meeting or not, and the product parameter tells the app the device type (desktop, mobile, personal or shared ZRs).

| Client                | OS              | Running Context (Parameter)         | Product (Parameter)                |
|-----------------------|-----------------|-------------------------------------|------------------------------------|
| Desktop Client        | Win/Mac         | inMainClient                        | desktop                            |
| Desktop Client        | Win/Mac         | inMeeting                           | desktop                            |
| Mobile Client         | iOS/Android     | inMainClient                        | mobile                             |
| Mobile Client         | iOS/Android     | inMeeting                           | mobile                             |
| Personal Zoom Room    | Win/Android     | inMainClient                        | personalZoomRoom                   |
| Personal Zoom Room    | Win/Android     | inMeeting                           | personalZoomRoom                   |
| Desktop Client        | Win/Mac         | inChat                              | desktop                            |
| Zoom Room             | Win/Android     | inMainClient                        | sharedZoomRoom                     |
| Zoom Room             | Win/Android     | inMeeting                           | sharedZoomRoom                     |
| Digital Signage       | Win/Android     | inDigitalSignage                    | sharedZoomRoom                     |
| Zoom Room Controller  | iOS/Android     | inMainClient                        | zoomRoomController                 |
| Zoom Room Controller  | iOS/Android     | inMeeting                           | zoomRoomController                 |
| Web Client            | Win/Mac         | inMeeting/inWebinar                 | desktop/web                        |

 * @category Core
 */
declare type ConfigResponse = {
    /** The context in which the Zoom App is launched: inMeeting, inWebinar, inMainClient, inPhone. */
    runningContext: RunningContext;
    /** Unsupported JS APIs and events. */
    unsupportedApis: Apis[];
    /** Version of the Zoom Client in which the app is running. */
    clientVersion: string;
    /** 'webview2/xxxx', 'cef/xxx', 'applewebkit/xx' */
    browserVersion: string;
    /** 'authorized' or 'unauthorized' */
    auth: AuthObject;
    /** only available in meetings. Provides the specifications of audio and video */
    media?: {
        /** Introduced in client version 5.10.6, works with Camera Mode. */
        renderTarget?: {
            width: number;
            height: number;
        };
        defaultCutout?: ParticipantCutoutShape;
    } & VideoMedia & AudioMedia;
    /** provides the browser userAgent*/
    userAgent: string;
    launchContext: LaunchContext;
    /**
     * the product that this app is being run on
     *
     * _desktop_	The app is running on a desktop client.
     *
     * _mobile_	The app is running on a mobile client.
     *
     *  _web_	The app is running on a web client.
     *
     * _personalZoomRoom_	The app is running on a personal Zoom Room device.
     *
     * _sharedZoomRoom_	The app is running is on a shared Zoom Room device.
     *
     * _zoomRoomController_	The app is running on a Zoom Room controller.
     * */
    product?: 'desktop' | 'mobile' | 'web' | 'personalZoomRoom' | 'sharedZoomRoom' | 'zoomRoomController';
};
/**
 * URL of the endpoint
 *
 * @category Core
 */
declare type OpenUrlOptions = {
    url: string;
};
/**
 * @category Core
 */
declare type RunningContextResponse = {
    context: RunningContext;
};
/**
 * Example:
 * ```
 * {
 *    "meetingTopic": "Happy Zoomineer's Zoom Meeting",
 *    "meetingID": "01234567890"
 * }
 * ```
 *
 * **meetingTopic**	The topic of the meeting
 *
 * **meetingID**	The ID of the meeting
 *
 * @category Meeting Actions
 */
declare type GetMeetingContextResponse = {
    meetingTopic: string;
    meetingID: string;
};
/**
 * All the available JS APIs and events
 * @category Core
 * */
declare type Apis = 'addBreakoutRoom' | 'allowParticipantToRecord' | 'assignParticipantsToBreakoutRoom' | 'assignParticipantToBreakoutRoom' | 'authorize' | 'changeBreakoutRoom' | 'clearImage' | 'clearParticipant' | 'clearWebView' | 'closeBreakoutRooms' | 'closeChannel' | 'closeLobby' | 'closeRenderingContext' | 'cloudRecording' | 'configureBreakoutRooms' | 'connect' | 'createBreakoutRooms' | 'deleteBreakoutRoom' | 'drawImage' | 'drawParticipant' | 'drawWebView' | 'endCollaborate' | 'endSyncData' | 'executeOnZoomAction' | 'expandApp' | 'getBreakoutRoomList' | 'getImmersiveViewContext' | 'getMeetingContext' | 'getMeetingJoinUrl' | 'getMeetingParticipants' | 'getMeetingUUID' | 'getOnZoomProperties' | 'getPairingStatus' | 'getRecordingContext' | 'getRunningContext' | 'getScreenshot' | 'getSupportedJsApis' | 'getUserContext' | 'getUserMediaAudio' | 'getUserMediaVideo' | 'joinCollaborate' | 'joinOnZoomEvent' | 'joinZoomRoom' | 'launchAppInMeeting' | 'leaveCollaborate' | 'listCameras' | 'onActiveSpeakerChange' | 'onAppPopout' | 'onAuthenticate' | 'onAuthorized' | 'onShareScreen' | 'onShareComputerAudio' | 'onBreakoutRoomChange' | 'onCloseAppForParticipants' | 'onCloudRecording' | 'onCollaborateChange' | 'onConnect' | 'onExpandApp' | 'onAppVisibilityChange' | 'onExtendedProcessing' | 'onFeedbackReaction' | 'onImmersiveViewChange' | 'onMeeting' | 'onMeetingConfigChanged' | 'onMessage' | 'onMyActiveSpeakerChange' | 'onMyMediaChange' | 'onMyReaction' | 'onMyUserContextChange' | 'onOnZoomJoinStatusChange' | 'onPairingStatusChange' | 'onParticipantChange' | 'onReaction' | 'onRemoveFeedbackReaction' | 'onRunningContextChange' | 'onSendAppInvitation' | 'onShareApp' | 'openBreakoutRooms' | 'openChannel' | 'openDM' | 'openUrl' | 'postMessage' | 'promptAuthorize' | 'pushState' | 'removeImmersiveView' | 'removeVirtualBackground' | 'removeVirtualForeground' | 'renameBreakoutRoom' | 'runRenderingContext' | 'sendAppInvitation' | 'sendAppInvitationToAllParticipants' | 'sendAppInvitationToMeetingOwner' | 'setCamera' | 'setImmersiveView' | 'setUserMediaAudio' | 'setUserMediaVideo' | 'setVideoMirrorEffect' | 'setVirtualBackground' | 'setVirtualForeground' | 'shareApp' | 'shareComputerAudio' | 'showAppInvitationDialog' | 'showNotification' | 'startCollaborate' | 'toggleParticipantMediaAudio' | 'onInviteCollaboration' | 'getAppContext' | 'getAudioState' | 'setAudioState' | 'getVideoState' | 'setVideoState' | 'addParticipantSpotlight' | 'removeParticipantSpotlights' | 'getParticipantSpotlights' | 'addParticipantPins' | 'removeParticipantPins' | 'setFeedbackReaction' | 'removeFeedbackReaction' | 'removeAllFeedbackReaction' | 'allowAttendeesToSpeak' | 'disallowAttendeesToSpeak' | 'removeWebinarAttendees' | 'setAudioSettings' | 'getAudioSettings' | 'getIncomingParticipantAudioState' | 'setIncomingParticipantAudioState' | 'onIncomingParticipantAudioChange' | 'setVideoSettings' | 'getVideoSettings' | 'promptShareScreen' | 'showMeetingInvitationDialog' | 'onGalleryPageChange' | 'setGalleryPage' | 'getGalleryPage' | 'getChatContext' | 'composeCard' | 'broadcastVoiceToBreakoutRooms' | 'stopShareScreen' | 'getGalleryOrderList' | 'onGalleryOrder' | 'setScreenName' | 'setParticipantScreenName' | 'setEmojiReaction' | 'getEmojiConfiguration' | 'onEmojiReaction' | 'getMeetingView' | 'setMeetingView' | 'onMeetingViewChange' | 'setVideoFilter' | 'deleteVideoFilter' | 'leaveMeeting' | 'joinMeeting' | 'getZoomRoomContext' | 'getZoomRoomControllerCredentials' | 'toggleParticipantMediaVideo' | 'sendMessage' | 'putParticipantToWaitingRoom' | 'admitParticipantFromWaitingRoom' | 'getWaitingRoomParticipants' | 'setWaitingRoomState' | 'getWaitingRoomState' | 'getPhoneContext' | 'onPhoneCalleeAnswered' | 'onPhoneCallerEnded' | 'onPhoneCalleeEnded' | 'onPhoneCalleeRejected' | 'onPhoneCallerMeetingInviting' | 'onPhoneCalleeMeetingInvite' | 'onPhoneContext' | 'getEngagementContext' | 'onEngagementContextChange' | 'getEngagementStatus' | 'onEngagementStatusChange' | 'getEngagementSecurableStatus' | 'startMediaRedirection' | 'onEngagementMediaRedirect' | 'appPopout' | 'bringAppToFront' | 'sendAppToBackground' | 'closeApp' | 'getMeetingLanguages' | 'onMeetingLanguagesChange' | 'makePhoneCall' | 'onWaitingRoomStateChange' | 'onWaitingRoomParticipantLeave' | 'onWaitingRoomParticipantJoin' | 'getMeetingParticipantsEmail' | 'onParticipantEmail' | 'getMeetingChatContext' | 'getMailContext' | 'getMailThread' | 'getMailMessage' | 'getMailActiveEditorData' | 'setMailActiveEditorData' | 'registerMailEditorComponent' | 'insertContentToMailActiveEditor' | 'renderInMailActiveEditor' | 'renderInMail' | 'subscribeBeforeMailSend' | 'unsubscribeBeforeMailSend' | 'callbackToMail' | 'onMailActiveEditorChange' | 'onMailActiveEditorTypeChange' | 'onMailActiveEditorDataChange' | 'onMailEditorDestroy' | 'onAppToggleInMailActiveEditor' | 'onAppUIActionInMail' | 'onBeforeMailSend' | 'takeParticipantPhoto' | 'takeMyPhoto' | 'onPhoto' | 'startCollaborateSidecar' | 'endCollaborateSidecar' | 'getAppVariableList' | 'getEngagementVariableValue' | 'onEngagementVariableValueChange' | 'sendMessageToChat' | 'setDynamicIndicator' | 'getDynamicIndicator' | 'removeDynamicIndicator' | 'onSetDynamicIndicator' | 'onRemoveDynamicIndicator' | 'setDynamicIndicatorStyle' | 'onDynamicIndicatorStyleChange' | 'extendDynamicIndicator' | 'onExtendDynamicIndicator' | 'promptUpgradeRequest' | 'onUpgradeRequest' | 'removeParticipant' | 'sendKeypadControls' | 'getZoomRoomDeviceDetails' | 'onZoomRoomEvent' | 'startRTMS' | 'stopRTMS' | 'pauseRTMS' | 'resumeRTMS' | 'getRTMSStatus' | 'onRTMSStatusChange';
/**
 * Example:
 * ```
 * {
 *  "screenName": "Happy Zoomineer",
 *  "participantUUID": "xxxxx",
 *  "role": "host",
 *  "status": "authorized"
 * }
 * ```
 *
 * @category Meeting Actions
 */
declare type GetUserContextResponse = {
    /**
     *
     * | status |	Description |
     * | ------- | -------- |
     * | unauthenticated | Not signed in with Zoom. |
     * | authenticated | Authenticated with Zoom, but did not add the app. |
     * | authorized | The user has added the app and granted the required scope permissions. |
     */
    status: 'unauthenticated' | 'authenticated' | 'authorized';
    /** The name of the Zoom user as it appears in the meeting */
    screenName: string;
    /** A temporary participant-identifier - changes each time users join meetings or navigate between breakout rooms
     * @deprecated use participantUUID instead of participantId
     */
    participantId: string;
    /** A meeting-specific participant-identifier - it persists as users navigate between breakout rooms or briefly loses connections */
    participantUUID: string;
    /** The role of the Zoom App user in the meeting. Values: 'host', 'coHost', 'attendee', 'panelist' (webinar only) */
    role: string;
};
/**
 * Example:
 * ```
 * {
 *  "cloudRecordingStatus": "stopped"
 * }
 * ```
 *
 * @category Recording
 */
declare type GetRecordingContextResponse = {
    /** The current status of a cloud meeting recording */
    cloudRecordingStatus: 'started' | 'stopped' | 'paused' | 'resumed';
};
/**
 * Example:
 * ```
 * {
 *  "joinURL": "xxxxxx"
 * }
 * ```
 *
 * @category Meeting Actions
 */
declare type GetMeetingJoinUrlResponse = {
    /**
     * The join link of the meeting
     */
    joinUrl: string;
};
/**
 * Example:
 *
 * ```
 * {
 *  "meetingUUID": "abcdefghijklmnopqrstuvwx",
 *  "parentUUID": "wxyzabcdefghijklmnopqrs",
 * }
 * ```
 *
 * @category Meeting Actions
 */
declare type GetMeetingUUIDResponse = {
    /** The UUID of the meeting instance */
    meetingUUID: string;
    /** In breakout rooms, the UUID of the parent meeting */
    parentUUID?: string;
};
/**
 * All the available JS APIs and events are listed in this doc
 *
 * Example:
 * ```
 * {
 *    "supportedApis": [
 *        "setVideoMirrorEffect",
 *        "cloudRecording",
 *        "getRunningContext",
 *        "getMeetingContext",
 *        "getSupportedJsApis",
 *        "showNotification",
 *        "openUrl",
 *        "setVirtualBackground",
 *        "removeVirtualBackground",
 *        "shareApp",
 *        "getMeetingParticipants",
 *        "sendAppInvitation",
 *        "onShareApp",
 *        "onSendAppInvitation",
 *        "onCloudRecording",
 *        "onAppPopout",
 *        "onActiveSpeakerChange",
 *        "onParticipantChange",
 *        "onReaction"
 *     ]
 * }
 * ```
 *
 * @category Core
 * */
declare type GetSupportedJsApisResponse = {
    supportedApis: Apis[];
};
/**
 * @category Client Settings
 * @zoomClientVersion 5.6.7
 */
declare type ListCamerasResponse = {
    /** An array containing the id and names of cameras */
    cameras: {
        /** The id of the camera */
        id: string;
        /** The name of the camera */
        name: string;
    }[];
};
/**
 * @category Meeting Actions
 */
declare type Participant = {
    /** The user's screen name */
    screenName: string;
    /** A temporary participant-identifier - changes each time users join meetings or navigate between breakout rooms
     * @deprecated use participantUUID instead of participantId
     */
    participantId: string;
    /** A meeting-specific participant-identifier - it persists as users navigate between breakout rooms or briefly loses connections */
    participantUUID: string;
    /** The user's role */
    role: string;
};
/**
 * @category Meeting Actions
 */
declare type GetMeetingParticipantsResponse = {
    /** An array containing information about meeting participants */
    participants: Participant[];
};
/**
 *
 * At least one param is required. `blur: true` supersedes `imageData` or `fileUrl` params
 *
 * `blur` blur user's native background. Using `blur: true` will trigger a user-facing pop-up confirmation dialog in the client to let the user allow or deny the action. The function will either be executed if allowed, or the app will receive an error with code `10017` if denied. Best practice is to show the corresponding error message.
 *
 * `imageData` limited to 15MB after encoding
 *
 * `fileUrl` URL of the virtual background image. Ignored if `blur` is true
 * @See {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageData|imageData}
 *
 * @category Layers
 */
declare type VirtualBackgroundOptions = {
    /** imageData, limited to 15MB after encoding. */
    imageData: ImageData;
    blur?: false;
    fileUrl?: string;
} | {
    /** URL of the virtual background image. Ignored if `blur` is true */
    fileUrl: string;
    blur?: false;
    imageData?: ImageData;
} | {
    /** `True` or `False`; blur user's native background. Using `blur=true` will trigger a user-facing pop-up confirmation dialog in the client to let the user allow or deny the action. The function will either be executed if allowed, or the app will receive an error with code 10017 if denied. Best practice is to show the corresponding error message. */
    blur: true;
    fileUrl?: string;
    imageData?: ImageData;
};
/**
 * @category Layers
 */
declare type VirtualForegroundOptions = {
    /** ImageData object, limited to 15MB after encoding. We recommend using the resolution of your camera reported by onMyMediaChange */
    imageData: ImageData;
    /**
     * The foreground image persistence (_added in client version 5.11.6_):
     *  - `"meeting"`: (**Default**) Does not load a foreground; removes the virtual foreground when the meeting ends
     *  - `"save"`: Loads the virtual foreground from disk when future meetings start
     *  - `"app"`: Does not load a foreground; removes the virtual foreground when the Zoom App that set it is closed
     *
     * **Note:** The previous functionality of setVirtualForeground() is the same as `"meeting"` persistence.
  
  
  
     */
    persistence?: 'save' | 'app' | 'meeting';
};
/**
 * @category Invitations & Notifications
 */
declare type NotificationOptions$1 = {
    /** 'info', 'warning', or 'error'. Required */
    type: 'info' | 'warning' | 'error';
    /** The title of the push notification. Required */
    title: string;
    /** Message body of the push notification. Required */
    message: string;
};
/**
 * @category Recording
 */
declare type CloudRecordingOptions = {
    /** 'start', 'stop', 'pause', or 'resume'. Required */
    action: 'start' | 'stop' | 'pause' | 'resume';
};
/**
 * @category Sharing
 */
declare type ShareAppOptions = {
    action: 'start' | 'stop';
    /** defaults to `false`. Added in Client Version 5.12.6 */
    withSound?: boolean;
};
/**
 * @zoomClientVersion 5.6.7
 * @category Client Settings
 */
declare type SetCameraOptions = {
    /** ID of camera (from listCameras). Required. */
    id: number;
    /** True or False; save this camera as default device. Required. */
    save: boolean;
};
/**
 * @zoomClientVersion 5.6.7
 * @category Meeting Actions
 */
declare type SetVideoMirrorEffectOptions = {
    /** True or False. Required. */
    mirrorMyVideo: boolean;
};
/**
 * *Note: The configuring invitation through sendAppInvitation API  (messageText, primaryButtonText, secondaryButtonText, deeplinkURL and htmlPageTitle) is supported from client v5.13.10*
 *
 * If messageText, primaryButtonText, secondaryButtonText, and htmlPageTitle fields were customized, receiver will show customized text. The fields not customized will show default text as normal invitation dialog.
 *
 * deeplinkURL:  A reserved field, currently will be ignored by receiver side.
 *
 * @category Invitations & Notifications
 */
declare type SendAppInvitationOptions = {
    /**
     * @deprecated use participantUUIDs instead of participantIds
     */
    participants?: Array<string>;
    /** List of participantUUID of the participants to send this app to (same as participantUUID defined in getMeetingParticipants()). A maximum of 10 participants can be listed. */
    participantUUIDs?: Array<string>;
    messageText?: string;
    primaryButtonText?: 'Open' | 'Accept' | 'Submit' | 'Run' | 'OK';
    secondaryButtonText?: 'Ignore' | 'Exit' | 'Close' | 'No' | 'Stop';
    htmlPageTitle?: string;
    deeplinkURL?: string;
};
/**
 *
 * @category App Window
 */
declare type ExpandAppOptions = {
    /** 'expand' or 'collapse'. Required. */
    action: 'expand' | 'collapse';
};
/**
 * @category Recording
 */
declare type AllowParticipantToRecordOptions = {
    /**
     * ID of the participant to allow or disallow to record
     * @deprecated use participantUUID instead of participantId
     */
    participantId?: string;
    /** UUID of the participant to allow or disallow to record */
    participantUUID?: string;
    /** Allow recording action type */
    action: 'grant' | 'revoke';
};
/**
 * @category Core
 */
declare type LaunchAppInMeetingOptions = {
    /** URL of the meeting to join. */
    joinURL?: string;
};
/** `"immersive"` to fill the entire meeting canvas, or `"camera"` to affect only the user's video stream.
 *
 *  @category Layers
 */
declare type RenderingContextView = 'immersive' | 'camera';
/** The cutout behavior of `drawParticipant()`:
 *
 * _Introduced in client version 5.9.3_:
 *   - `"person"`: Cut out the participant's background
 *
 * _Introduced in client version 5.11.0_:
 *   - `"rectangle"`: Crop the participant's video into a rectangle with rounded corners
 *
 * _Additional shapes added in client version 5.11.3_:
 *   - `"standard"`: Display the participant's full uncropped video
 *   - `"circle"`: Crop the participant's video into a circle
 *   - `"square"`: Crop the participant's video into a square with rounded corners
 *   - `"verticalRectangle"`: Crop the participant's video into a vertical rectangle with rounded corners
 *
 * @category Layers
 */
declare type ParticipantCutoutShape = 'person' | 'standard' | 'rectangle' | 'circle' | 'square' | 'verticalRectangle';
/**
 * @category Layers
 */
declare type RunRenderingContextOptions = {
    /** `"immersive"` to fill the entire meeting canvas, or `"camera"` to affect only the user's video stream. */
    view: RenderingContextView;
    /** The default cutout behavior of `drawParticipant()`: `"person"` means cut out the background; other shapes mean crop the participant's video into the named shape */
    defaultCutout?: ParticipantCutoutShape;
};
/**
 * Pixel-related values:
 *
 * - "Npx" : A CSS reference pixel value
 * - "N%" : A Percentage of the container/view
 * - number : A raw physical pixel value
 *
 * @category Layers
 */
declare type PixelValue = `${string}px` | `${string}%` | number;
/**
 * @category Layers
 */
declare type DrawParticipantOptions = {
    /**
     *
     * @deprecated use participantUUID instead of participantId
     */
    participantId?: string;
    /** A meeting-specific participant-identifier */
    participantUUID?: string;
    /** The horizontal position within the App’s window specified as a CSS value. (Default: "0px") */
    x?: PixelValue;
    /** The vertical position within the App’s window specified as a CSS value. (Default: "0px") */
    y?: PixelValue;
    /** The width of the participant’s video (aspect ratio will be maintained). (Default: "100%") */
    width?: PixelValue;
    /** The height of the participant’s video (aspect ratio will be maintained). (Default: "100%") */
    height?: PixelValue;
    /** The relative z-ordering of the item (Default: 1). */
    zIndex?: number;
    /** The cutout behavior: `"person"` means cut out the background; other shapes mean crop the participant's video into the named shape.
     * Introduced in client version 5.9.3. Additional shapes added in client version 5.11.3.
     */
    cutout?: ParticipantCutoutShape;
    /**
     * supported from client version 5.13.5, defaults to false
     */
    cameraModeMirroring?: boolean;
};
/**
 * @category Layers
 */
declare type DrawImageOptions = {
    /** A standard JavaScript imageData object, containing width, height, and pixel bytes. The image width and height should be in device pixels (scaled by window.devicePixelRatio) to accommodate HiDPI devices. */
    imageData: ImageData;
    /** The horizontal position within the App’s window specified as a CSS value. (Default: “0px”) */
    x?: PixelValue;
    /** The vertical position within the App’s window specified as a CSS value. (Default: “0px”) */
    y?: PixelValue;
    /** The relative z-ordering of the item (Default: 1). */
    zIndex?: number;
};
/**
 * @category Layers
 */
declare type DrawImageResponse = {
    /** an ‘imageId’ field that uniquely identifies the image */
    imageId: string;
};
/**
 * @category Layers
 */
declare type DrawWebViewOptions = {
    /**
     * @hidden
     * The webviewId to draw (Layers Camera Mode off-screen-rendering) */
    webviewId: string;
    /** The horizontal position to draw the webview within the OSR target area. (Default: 0) */
    x?: PixelValue;
    /** The vertical position to draw the webview within the OSR target area. (Default: 0) */
    y?: PixelValue;
    /** The width of the webview to draw within the OSR target area. (Default: full rendering width) */
    width?: PixelValue;
    /** The height of the webview to draw within the OSR target area. (Default: full rendering height) */
    height?: PixelValue;
    /** The relative z-ordering of the item (Default: 1) */
    zIndex?: number;
};
/**
 * @category Layers
 */
declare type ClearParticipantOptions = {
    /**
     * ID of the participant
     * @deprecated use participantUUID instead of participantId
     */
    participantId?: string;
    /** A meeting-specific participant-identifier */
    participantUUID?: string;
};
/**
 * @category Layers
 */
declare type ClearImageOptions = {
    /** The identifier returned by drawImage. */
    imageId: string;
};
/**
 * @hidden // hiding all the options for now
 * @category Layers
 */
declare type ClearWebViewOptions = {
    /**
     * The webviewId to clear (Layers Camera Mode off-screen-rendering) */
    webviewId: string;
};
/**
 * @hidden
 *
 * Usage:
 * ```
 * zoomSdk.onRenderedAppOpenedEvent((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "timestamp": 1614831950,
 *   "view": "immersive",
 *   "defaultCutout": "person",
 *   "byInvitation": false,
 * }
 * ```
 *
 * @category Utility
 */
declare type OnRenderedAppOpenedEvent = {
    /** Timestamp at which the onRenderedAppOpenedEvent was sent */
    timestamp: number;
    /** The rendered app's view type: `"immersive"` filling the entire meeting canvas, or `"camera"` affecting only the user's video stream. */
    view: RenderingContextView;
    /** The default cutout behavior of `drawParticipant()`: `"person"` means cut out the background; other shapes mean crop the participant's video into the named shape.
     * Introduced in client version 5.9.3. Additional shapes added in client version 5.11.3.
     */
    defaultCutout?: ParticipantCutoutShape;
    /** The rendered app was opened as the result of an invitation */
    byInvitation?: boolean;
};
/**
 *
 * @category Auth
 */
declare type AuthorizeOptions = {
    /** an optional OAuth 2.0 state parameter */
    state?: string;
    /** A PKCE codeChallenge based on code verifier the application has generated. The application has to remember the code verifier. */
    codeChallenge: string;
};
/**
 * Usage:
 * ```
 * zoomSdk.onFeedbackReaction((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "participantUUID": "participantUUID1",
 *   "timestamp": 1614831950,
 *   "feedback": "raiseHand",
 * }
 * ```
 *
 *
 * @category Reactions
 */
declare type OnFeedbackReactionEvent = {
    /** Participant UUID of the user who sent the feedback */
    participantUUID: string;
    /** Timestamp at which the feedback was sent */
    timestamp: number;
    /** Type of feedback triggered */
    feedback: FeedbackReactions;
};
/**
 * Usage:
 * ```
 * zoomSdk.onRemoveFeedbackReaction((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {
 *   "participantUUID": "participantUUID1",
 *   "timestamp": 1614831950,
 * }
 * ```
 *
 *
 * @category Reactions
 */
declare type OnRemoveFeedbackReactionEvent = {
    /** Participant UUID of the user who removed the feedback */
    participantUUID: string;
    /** Timestamp at which the feedback was removed */
    timestamp: number;
};
/**
 * Usage:
 * ```
 * zoomSdk.onIncomingParticipantAudioChange((event) => {
 *   console.log(event)
 * });
 * ```
 *
 * Console log:
 * ```
 * {“participants": [{"participantUUID": "participantUUID1", "audio": "true"},...]}
 * ```
 * @category Meeting Actions
 */
declare type OnIncomingParticipantAudioChangeEvent = {
    /** Target participants with specified participantUUID and their respective audio state.*/
    participants: {
        participantUUID: string;
        audio: boolean;
    }[];
    /** TimeStamp when the Incoming Participant Audio Changes.*/
    timestamp: number;
};
/** @ignore */
declare type NativeApiRequestData = any;
/** @ignore */
declare type NativeApiResponseData = {
    jsCallId: string;
    errorCode?: string;
    errorMessage?: string;
    result?: any;
};
/** @ignore */
declare type NativeMessage = {
    data?: NativeMessageData;
};
/** @ignore */
declare type NativeMessageData = {
    jsCallId?: string;
    type: 'apiResponse' | 'event';
    name?: string;
    data?: any;
};
/**
 * @category App Instances Communication
 */
declare type JSONValue = string | number | boolean | null | JSONValue[] | {
    [key: string]: JSONValue;
};
interface JSONObject {
    [k: string]: JSONValue;
}
/**
 * @category Breakout Rooms
 */
declare type BreakoutRoomAssignmentMethods = 'automatically' | 'manually' | 'participantsChoose';
/**
 * @category Breakout Rooms
 */
declare type CreateBreakoutRoomsOptions = {
    /** Amount of breakout rooms to create. Between 1 and 50. Optional if `names` is present */
    numberOfRooms: number;
    /** Method to assign participants to rooms. (automatically, manually, participantsChoose) */
    assign: BreakoutRoomAssignmentMethods;
    /** List of names to give breakout rooms upon creation. Between 1 and 50. If `numberOfRooms` is present, must match the length of this list. Added in client version 5.12.6*/
    names?: string[];
};
/**
 *
 * @category Breakout Rooms
 */
declare type ConfigureBreakoutRoomsOptions = {
    /** Allow participants to choose which breakout room to join. */
    allowParticipantsChooseRoom?: boolean;
    /** Allow participants to return to the main meeting room. */
    allowParticipantsReturnToMainSession?: boolean;
    /** Automatically move participants into their assigned breakout rooms. */
    automaticallyMoveParticipantsIntoRooms?: boolean;
    /** Automatically close breakout rooms after that many minutes. Enter 0 if there is no timeout. */
    closeAfter?: number;
    /** Shows countdown after breakout rooms are closed for that many seconds. Enter 0 if no countdown is needed. */
    countDown?: number;
    /**
     * The parameter is added in desktop client `v5.13.10`. It aligns with option *Automatically move all selected participants in breakout rooms to main meeting* in the Zoom UI. If `true` no consent dialog on participant screen will be shown while moving to main meeting.
     * Defaults to false.
     */
    automaticallyMoveParticipantsIntoMainRoom?: boolean;
};
/**
 *
 * @category Breakout Rooms
 */
declare type ConfigureBreakoutRoomsResponse = {
    /** 0 (false) | 1 (true). Allow participants to choose which breakout room to join. */
    allowParticipantsChooseRoom: 0 | 1;
    /** 0 (false) | 1 (true). Allow participants to return to the main meeting room. */
    allowParticipantsReturnToMainSession: 0 | 1;
    /** 0 (false) | 1 (true). Automatically move participants into their assigned breakout rooms. */
    automaticallyMoveParticipantsIntoRooms: 0 | 1;
    /** Automatically close breakout rooms in seconds. 0 means no timeout. */
    closeAfter: number;
    /** Shows countdown after breakout rooms are closed for that many seconds. 0 means no countdown. */
    countDown: number;
    /** 0 (false) | 1 (true). Automatically move participants into main room. This field is added in desktop client v5.13.10 */
    automaticallyMoveParticipantsIntoMainRoom: 0 | 1;
};
/**
 * @category Breakout Rooms
 */
declare type BreakOutRoomParticipant = {
    /**
     * @deprecated use participantUUID instead of participantId
     */
    participantId: number;
    displayName: string;
    participantUUID: string;
};
/**
 * @category Breakout Rooms
 */
declare type BreakoutRoomsResponse = {
    /** An array of breakout rooms with their names, UUID, and an array of participant ids. Owners get list of rooms and participants for each breakout room. Co-hosts and participants get only list of rooms. */
    rooms: {
        breakoutRoomId: string;
        name: string;
        /** Only meeting owners receive. An array of participants in breakout rooms. Includes their displayNames, participantUUID, and participantStatus. */
        participants?: ({
            participantStatus: 'assigned' | 'joined';
        } & BreakOutRoomParticipant)[];
    }[];
    /** Whether the breakout rooms are active or not */
    state: 'open' | 'closed';
    /** Only meeting owners receive. An array of participants not in breakout rooms. Includes their displayNames and participantUUID. */
    unassigned?: BreakOutRoomParticipant[];
};
/**
 * @category Breakout Rooms
 */
declare type RenameBreakoutRoomOptions = {
    name: string;
    uuid: string;
};
/**
 * @category Breakout Rooms
 */
declare type AddBreakoutRoomOptions = {
    name: string;
};
/**
 * @category Breakout Rooms
 */
declare type Uuid = {
    uuid: string;
};
/**
 *
 * @category Breakout Rooms
 */
declare type AssignParticipantToBreakoutRoomOptions = {
    /** (optional) ID of a room (string). If you do not specify a UUID, the method removes the participant from their specific breakout rooms and puts them in the main room, if configuration of the rooms allows */
    uuid?: string;
    /**
     * ID of the participant.
     * @deprecated
     */
    participant?: string;
    /** Meeting-specific participant identifier. */
    participantUUID?: string;
};
/**
 * `uuid` breakout room id
 *
 * `action: join` This option requires a participant uuid. Join breakout room specified by uuid.
 *
 * These two options do not require a breakout room uuid: `leave` | `joinAssigned`. An error will be thrown if a uuid param is added with these two options.
 * - `action: leave` Participant leaves breakout room and is sent to the main room.
 * - `action: joinAssigned` Participant joins their default assigned breakout room.
 *
 * @category Breakout Rooms
 */
declare type ChangeBreakoutRoomOptions = {
    action: 'join';
    uuid: string;
} | {
    action: 'leave' | 'joinAssigned';
};
/**
 * @category Collaborate
 */
declare type StartCollaborateOptions = {
    /** Default true. False will opt out of sharing the host’s app screen with participants as a preview or when participants ignore the Collaborate invite. */
    shareScreen?: boolean;
};
/**
 * @category Invitations & Notifications
 */
declare type AppInvitationResponse = {
    /** A unique identifier for the invitation */
    invitationUUID: string;
};
/**
 * @category Meeting Actions
 */
declare type SetVideoStateOptions = {
    /** Default false for setting participant video off */
    video: boolean;
};
/**
 * @category Meeting Actions
 */
declare type GetVideoStateResponse = {
    /** boolean denoting the status of video. False means off, true means on. */
    video: boolean;
};
/**
 * @category Meeting Actions
 */
declare type SetAudioStateOptions = {
    /** Default false for setting participant audio off */
    audio: boolean;
};
/**
 * @category Meeting Actions
 */
declare type GetAudioStateResponse = {
    /** boolean denoting the status of audio. False means muted, true means unmuted. */
    audio: boolean;
};
/**
 * @category Meeting Actions
 */
declare type ToggleParticipantMediaAudioOptions = {
    /** mute or unmute participants. true = unmute, false = mute */
    audio: boolean;
    /**
     * @deprecated use participantUUIDs instead of participants
     */
    participants?: string[];
    /** Target participants with specified participantUUIDs. If list is empty, all participants are muted or unmuted based on the action specified. Maximum 10 participantUUIDs. For more than 10, use mute/unmute all. You can use getMeetingParticipants to get a list of meeting participants. */
    participantUUIDs?: string[];
};
/**
 * @category Core
 */
declare type GetAppContextResponse = {
    /** Signed app context data */
    /** see {@link DecryptedAppContextResponse} type for payload properties*/
    context: string;
};
/**
 * @category Meeting Actions
 */
declare type ParticipantPinOptions = {
    /** Target participants with specified participantUUIDs. If an empty list is submitted, all participants are ejected. Empty lists are not allowed for adding pins. */
    participantUUIDs: string[];
    /** Add or Remove Participant Pins from Primary Display for False value or Secondary Display for True value. Default value is False*/
    secondaryDisplay?: boolean;
};
/**
 * @category Webinar-only Actions
 */
declare type AttendeeSpeakingOptions = {
    /** Target participants with specified participantUUIDs. If list is empty or not specified, all participants are allowed/ disallowed to speak based on the action specified. */
    participantUUIDs?: string[];
};
/**
 * @category Webinar-only Actions
 */
declare type RemoveWebinarAttendeeOptions = {
    /** Target participants with specified participantUUIDs. If list is empty or not specified, all participants are ejected from the Webinar.*/
    participantUUIDs?: string[];
};
/**
 * @category Meeting Actions
 */
declare type SetIncomingParticipantAudioStateOptions = {
    /** Target participants with specified participantUUIDs. If list is empty incoming speaker audio will be turned off/on for all the participants.*/
    participantUUIDs: string[];
    /**Turn on/off incoming speaker audio for the participants among the participantUUIDs */
    audio: boolean;
};
/**
 * @category Meeting Actions
 */
declare type GetIncomingParticipantAudioStateOptions = {
    /** Target participants with specified participantUUIDs. If list is empty the incoming speaker audio status for all the participants will be returned as a status list.*/
    participantUUIDs: string[];
};
/**
 * @category Meeting Actions
 */
declare type GetIncomingParticipantAudioStateResponse = {
    /** Target participants with specified participantUUID and their respective audio state.*/
    participants: {
        participantUUID: string;
        audio: boolean;
    }[];
};
/**
 * @category Core
 */
declare type DecryptedAppContextResponse = {
    /**
     * decrypted app context data
     *
     * the context type where the app is opened, could be 'panel', 'meeting', or 'webinar'
     *
     *  New value for “typ” i.e. “chat” for chat apps. Introduced in v5.13.0
     */
    typ: string;
    /**
     * New field “aid” Action Command ID configured in build flow of the shortcut or the Button Action ID in the Interactive card. Introduced in v5.13.0
     */
    aid: string;
    /**
     * New field “chid” Chat Session ID. 'channel id' of channel or group chat or 'to user jid' of direct message chat". Introduced in v5.13.0
     */
    chid: string;
    /**
     * New field “msgid” Message ID of the message from which app is launched. The developer can use it to retrieve the files/text/reactions from the Web API. Introduced in v5.13.0
     */
    msgid: string;
    /**
     * New field "tid” the thread id identifies the thread in a chat. Introduced in v5.13.0
     */
    tid: string;
    /**
     * New field “of” The feature from where app is opened/launched messageShortcut|interactiveCard|composeShortcut. Introduced in v5.13.0
     */
    of: string;
    /**
     * New field trid i.e. triggerId, It is a unique identifier generated by zoom platform for every user interaction with chat app. triggerId is sent in the event payload sent to chat apps. Introduced in v5.13.0
     */
    trid: string;
    /**
     * string, the Zoom user id who opens the app.
     */
    uid: string;
    /** string, the Zoom meeting uuid identifies the meeting in which this app is opened, only returned when value of 'typ' is 'meeting' */
    mid?: string;
    /** long, the create timestamp of this context */
    ts: number;
    /** string, host - meeting/webinar, co-host - meeting/webinar, participant - meeting, panelist - webinar, attendee - webinar. This role may change after app context is generated. */
    attendrole?: 'host' | 'co-host' | 'participant' | 'panelist' | 'attendee';
    /** breakout room UUID as returned by getBreakoutRoomList */
    bmid?: string;
    /** collaborateId session identifier is passed when app is opened through invitation to collaborate, expires in 5 minutes */
    cid?: string;
    /** invitation id is passed when app is open through invitation, expires is 5 minutes */
    iid?: string;
    /** action payload supplied in the deeplink, expires in 5 minutes */
    act?: string;
    /** string, "marketplace.zoom.us" the issuer claim will always be present */
    iss: 'marketplace.zoom.us';
    /** string, the audience is a string containing the CLIENT ID of the Zoom App. */
    aud: string;
    /** the expiration timestamp of this context. Refer to advanced sample react app https://github.com/zoom/zoomapps-advancedsample-react on how to verify the app context expiry. */
    exp: number;
};
/**
 * @category Meeting Actions
 */
declare type AddParticipantSpotlightOptions = {
    participantUUID: string;
};
/**
 * @category Meeting Actions
 */
declare type RemoveParticipantSpotlightsOptions = {
    participantUUIDs: string[];
};
/**
 *  @category Meeting Actions
 */
declare type GetParticipantSpotlightsResponse = {
    participantUUIDs: string[];
};
/**
 * @category Sharing
 */
declare type ShareComputerAudioOptions = {
    /** begins or ends sharing audio */
    action: 'start' | 'stop';
    /** stereo is default */
    mode?: 'stereo' | 'mono';
};
/**
 * @category Layers
 */
declare type SetVideoFilterOptions = {
    /** ImageData object, limited to 15MB 20MB after encoding. We recommend matching the resolution of your camera reported by onMyMediaChange */
    imageData: ImageData;
    /** Determines whether the video filter is applied to all future meetings. Defaults to false. If `false`, does not apply the set video filter foreground to all future meetings. The filter is cleared when the meeting ends. Unchecks the `Apply to all future meetings` setting under Settings > Background & Effects > Video Filters. When option is `true`, applies the set video filter foreground to all future meetings. The filter is not cleared when the meeting ends. Checks the `Apply to all future meetings` setting under Settings > Background & Effects > Video Filters.*/
    applyToAllFutureMeetings?: boolean;
};
/**
 * @category Reactions
 */
declare type FeedbackReactions = 'yes' | 'no' | 'slowDown' | 'speedUp' | 'away' | 'raiseHand';
/**
 * @category Reactions
 */
declare type FeedbackReactionOptions = {
    feedback: FeedbackReactions;
};
/**
 * At least one property of this type is required to exist
 *
 * From desktop client version 5.16.10, `audioProfile` parameter accepts `livePerformanceAudio`, `audioIsolation`. And new optional parameters `highFidelityMusic`, `echoCancellation`, `stereo` are added.
 *
 * @category Meeting Actions
 */
declare type SetAudioSettingsOptions = {
    speakerDeviceId?: string;
    outputVolume?: number;
    microphoneDeviceId?: string;
    audioProfile?: 'zoomOptimizedAudio' | 'originalSound' | 'livePerformanceAudio' | 'audioIsolation';
    originalSound?: boolean;
    backgroundNoiseSuppression?: 'auto' | 'low' | 'medium' | 'high';
    highFidelityMusic?: boolean;
    echoCancellation?: boolean;
    stereo?: boolean;
};
/**
 * At least one property of this type is required to exist
 *
 * mirrorMyVideo, originalRatio, cameraDeviceId are new added properties available in client version: 5.14.5
 *
 * @category Meeting Actions
 */
declare type SetVideoSettingsOptions = {
    hdVideo?: boolean;
    displayParticipantNames?: boolean;
    hideNonVideoParticipants?: boolean;
    mirrorMyVideo?: boolean;
    originalRatio?: boolean;
    cameraDeviceId?: string;
};
/**
 * Starting from desktop client version 5.16.10, the `audioProfile` parameter now yields the `livePerformanceAudio` and `audioIsolation` values. Depending on your client settings, the response may also encompass new properties such as `highFidelityMusic`, `echoCancellation`, and `stereo`.
 *
 * @category Meeting Actions
 */
declare type GetAudioSettingsResponse = {
    microphoneDevices: {
        microphoneDeviceId: string;
        microphoneDeviceName: string;
        isSelected: boolean;
        sameAsSystem: boolean;
    }[];
    speakerDevices: {
        speakerDeviceId: string;
        speakerDeviceName: string;
        isSelected: boolean;
        sameAsSystem: boolean;
    }[];
    outputVolume: number;
    audioProfile: 'zoomOptimizedAudio' | 'originalSound' | 'livePerformanceAudio' | 'audioIsolation';
    originalSound: boolean;
    backgroundNoiseSuppression: 'auto' | 'low' | 'medium' | 'high';
    highFidelityMusic: boolean;
    echoCancellation: boolean;
    stereo: boolean;
};
/**
 *  mirrorMyVideo, originalRatio, cameraDevices are new added properties available in client version: 5.14.5
 *
 * @category Meeting Actions
 */
declare type GetVideoSettingsResponse = {
    hdVideo: boolean;
    displayParticipantNames: boolean;
    hideNonVideoParticipants: boolean;
    mirrorMyVideo: boolean;
    originalRatio: boolean;
    cameraDevices: {
        cameraDeviceId: string;
        cameraDeviceName: string;
        isSelected: boolean;
    }[];
};
/**
 * @category Meeting Views
 */
declare type SetGalleryPageOptions = {
    page: number;
};
/**
 * @category Meeting Views
 */
declare type GetGalleryPageResponse = {
    currentPage: number;
    totalPages: number;
};
/**
 * @category Meeting Views
 */
declare type OnGalleryPageChangeEvent = {
    newPage: number;
    totalPages: number;
    /** in ms since epoch */
    timestamp: number;
};
/**
 * @category Sharing
 */
declare type PromptShareScreenOptions = {
    /**
     * Introduced in client v5.13.10. Defaults to false.
     */
    shareToBreakoutRooms?: boolean;
    /**
     * Introduced in client v5.13.10. Defaults to false.
     */
    shareSound?: boolean;
    /**
     * Introduced in client v5.13.10. Defaults to false.
     */
    optimizeForVideoClip?: boolean;
};
/**
 * @category Meeting Views
 */
declare type GetGalleryOrderListResponse = {
    participantUUIDs: string[];
};
/**
 * @category Meeting Views
 */
declare type OnGalleryOrderEvent = {
    timestamp: number;
    participantUUIDs: string[];
};
/**
 * @category Chat
 */
declare type GetChatContextResponse = {
    content: string;
};
/**
 * @category Chat
 */
declare type ComposeCardOptions = {
    /**
     *interactiveCard. “interactiveCard” type are json format messages from chat apps
     */
    type: string;
    /**
     * content of the message that will be posted into conversation
     */
    message: string;
    /**
     * Zoom uses this to validate the integrity of interactive message before launching actions in interactive message. HMAC of the message (with the signing secret)
     */
    signature: string;
    /**
     * timestamp used to generate signature
     */
    timestamp: string;
    /**
     * Content of the preview. Stringified object.
     * ```
     * {
     * // title of the preview card
     * title: string,
     * // description to be displayed in the card
     * description: string
     * }
     * ```
     */
    previewCard: string;
};
/**
 * @category Breakout Rooms
 */
declare type BroadcastVoiceToBreakoutRoomsOptions = {
    action: 'start' | 'stop';
};
/**
 * @category Meeting Views
 */
declare type MeetingView = 'speaker' | 'gallery' | 'standard' | 'sideBySideSpeaker' | 'sideBySideGallery';
/**
 * @category Meeting Views
 */
declare type GetMeetingViewResponse = {
    view: MeetingView | 'immersive';
    fullScreen: boolean;
    presenting: boolean;
    sharingContentHighlighted: boolean;
    videoHighlighted: boolean;
    followHostsVideoOrder: boolean;
};
/**
 * @category Meeting Views
 */
declare type SetMeetingViewOptions = {
    /**
     * "immersive view" is not supported at this time
     */
    view?: MeetingView;
    fullScreen?: boolean;
    /**
     * Only host can enable followHostsVideoOrder
     */
    followHostsVideoOrder?: boolean;
};
/**
 * Fired when any of view, fullScreen, presenting, sharingContentHighlighted, and videoHighlighted are changed.
 *
 * **Only changed parameters are present in the response**
 * @category Meeting Views
 */
declare type OnMeetingViewChangeEvent = {
    view?: MeetingView | 'immersive';
    fullScreen?: boolean;
    presenting?: boolean;
    sharingContentHighlighted?: boolean;
    videoHighlighted?: boolean;
    followHostsVideoOrder?: boolean;
    timestamp: number;
};
/**
 * @category Meeting Actions
 */
declare type SetScreenNameOptions = {
    screenName: string;
};
/**
 * @category Meeting Actions
 */
declare type setParticipantScreenNameOptions = {
    screenName: string;
    participantUUID: string;
};
/**
 * @category Reactions
 */
declare type EmojiOptions = {
    /**
     * e.g. "U+1F600"
     */
    unicode: string;
    /**
     * e.g. "smiley"
     */
    name: string;
    /**
     * e.g. "😀"
     */
    emoji: string;
};
/**
 * Accepts any one of unicode, name, and emoji.
 *
 * At least one of these options are required.
 *
 * skinTone is optional. skinTone overrides the skin tone of the passed in emoji
 *
 * Examples of skinTone options:
 *
 * ☝ "default"
 *
 * ☝🏿 "dark"
 *
 * ☝🏾 "medium-dark"
 *
 * ☝🏽 "medium"
 *
 * ☝🏼 "medium-light"
 *
 * ☝🏻 "light"
 *
 * @category Reactions
 */
declare type SetEmojiReactionOptions = Partial<EmojiOptions> & {
    skinTone?: string;
};
/**
 * @category Reactions
 */
declare type GetEmojiConfigurationResponse = {
    categories: {
        categoryName: string;
        categoryEmoji: EmojiOptions;
        categoryEmojis: EmojiOptions[];
    }[];
};
/**
 * @category Reactions
 */
declare type OnEmojiReactionEvent = {
    participantUUID: string;
    timestamp: number;
    reaction: EmojiOptions & {
        skinTone?: string;
    };
};
/**
 * @category Zoom Rooms
 */
declare type GetZoomRoomContextResponse = {
    deviceId: string;
    roomId: string;
};
/**
 * type `zrcUsernamePassword` response is returned if app is configured with username/password/URL credentials.
 * type `zrcAuthToken` response is returned if app is configured with authToken/URL credentials.
 * @category Zoom Rooms
 */
declare type GetZoomRoomControllerCredentialsResponse = {
    type: 'zrcUsernamePassword';
    token: {
        appConfigUserName: string;
        appConfigPassword: string;
        appConfigDeviceUrl: string;
    };
} | {
    type: 'zrcAuthToken';
    token: {
        appConfigAuthToken: string;
        appConfigDeviceUrl: string;
    };
};
/**
 * @category Meeting Actions
 */
declare type LeaveMeetingOptions = {
    /**
     * newHost?: *participantUUID*
     *
     * Optional when user is host
     *
     * If unspecified, the host is prompted to pick a new host using the standard meeting prompt and then leave the meeting. If the host cancels, the host continues to stay in the meeting.
     *
     * Ignored if specified when user is not host.
     */
    newHost?: string;
};
/**
 * @category Meeting Actions
 */
declare type JoinMeetingOptions = {
    /**
     * newHost?: *participantUUID*
     *
     * Optional when user is host.
     *
     * Ignored when user is in the out-of-meeting.
     *
     * If unspecified, the host is prompted to pick a new host using the standard meeting prompt and then leave the meeting. If the host cancels, the host continues to stay in the meeting.
     *
     * Ignored if specified when user is not host.
     */
    newHost?: string;
    /**
     * URL of the meeting to join.
     *
     * When unspecified, a new meeting is created with the Invite Participants panel open by default upon join.
     */
    joinURL?: string;
};
/**
 * @category Meeting Actions
 */
declare type ToggleParticipantMediaVideoOptions = {
    video: boolean;
    /** limit to 10 Ids.  */
    participantUUIDs: string[];
};
/**
 * payload contains the message to be sent. Must be string JSON-stringifyable per JSON spec. Max of 1 Kb.
 *
 * @category App Instances Communication
 */
declare type SendMessageOptions = {
    payload: JSONObject;
};
/**
 * @category Zoom Phone
 */
declare type CallObject = {
    /** account ID of the callee */
    accountId: string;
    /** unique identifier of the call */
    callId: string;
    /** the GMT time at which the ringing started in  "yyyy-MM-dd'T'HH:mm:ss'Z'" format.*/
    ringingStartTime: string;
    /** the GMT timer (in "yyyy-MM-dd'T'HH:mm:ss'Z'" format) at which the call was answered */
    answerStartTime?: string;
    /** the GMT time (in "yyyy-MM-dd'T'HH:mm:ss'Z'" format) at which the call was ended by the callee. */
    callEndTime: string;
    /** represents the person who is called by the caller */
    callee: {
        deviceId?: string;
        /** extension ID of the callee */
        extensionId?: string;
        /** extension number of the callee */
        extensionNumber?: string;
        /** extension type of a the callee. Values: `user` | `callQueue`| `autoReceptionist` ┃ `commonArea` ┃ `commonAreaPhone` ┃ `sharedLineGroup` ┃ `zoomRoom` ┃ `ciscoRoom/PolycomRoom` ┃ `contactCenter` ┃ `pstn` ┃ `five9` ┃ `twilio` */
        extensionType?: string;
        /** phone number of the callee in E164 format. Phone number and extension number can't be empty at the same time */
        phoneNumber: string;
        /**
         * @deprecated
         * This field is introduced to have a bug fix and backward compatibility.This field serves exactly as phoneNumber field above. It just has an additional whitespace " " at the end of the name "phoneNumber "
         */
        'phoneNumber ': string;
        /** timezone of the callee */
        timezone?: string;
        /** Zoom User ID of the callee */
        userId?: string;
    };
    /**  */
    caller: {
        /** extension ID of the caller */
        extensionId?: string;
        extensionNumber?: string;
        /** extension type of a the caller. Values: `user` | `callQueue`| `autoReceptionist` ┃ `commonArea` ┃ `commonAreaPhone` ┃ `sharedLineGroup` ┃ `zoomRoom` ┃ `ciscoRoom/PolycomRoom` ┃ `contactCenter` ┃ `pstn` ┃ `five9` ┃ `twilio` */
        extensionType?: string;
        /** phone number of the caller in E164 format */
        phoneNumber: string;
        /** timezone of the caller */
        timezone?: string;
        /** Zoom User ID of the caller */
        userId?: string;
    };
    forwardedBy?: {
        /** the name of the extension the call was forwaded from */
        name?: string;
        /** extension number the call was forwarded from */
        extensionNumber?: string;
        /** type of extension the call was forwarded from. Values: `callQueue` | `sharedLineGroup` | `sharedLine` */
        extensionType?: string;
    };
    eventTs?: string;
    timestamp: string;
};
/**
 * @category Zoom Phone
 */
declare type GetPhoneContextResponse = {
    /** activeTab values : `history`, `voicemail`, `lines`, `sms` */
    activeTab: string;
    /** callStatus values : `Incomming`, `Outgoing`, `Active`, `Idle`, `Hold`, `Not Registered` */
    callStatus: string;
    callId?: string;
    direction?: string;
    callObject?: CallObject;
};
/**
 * @category Zoom Phone
 */
declare type OnPhoneContextEvent = {
    /** activeTab values : `history`, `voicemail`, `lines`, `sms` */
    activeTab: string;
    /** callStatus values : `Incomming`, `Outgoing`, `Active`, `Idle`, `Hold`, `Not Registered` */
    callStatus: string;
    callId?: string;
    timestamp: string;
};
/**
 * @category Zoom Phone
 */
declare type PhoneEvent = {
    callObject: CallObject;
};
/**
 * @category Waiting Room
 */
declare type GetWaitingRoomStateResponse = {
    waitingRoom: boolean;
};
/**
 * @category Waiting Room
 */
declare type SetWaitingRoomStateOptions = {
    waitingRoom: boolean;
};
/**
 * @category Waiting Room
 */
declare type PutParticipantToWaitingRoomOptions = {
    /** Participant to be put in the waiting room */
    participantUUID: string;
};
/**
 * @category Waiting Room
 */
declare type AdmitParticipantFromWaitingRoomOptions = {
    /** Participant to be admitted to the meeting */
    participantUUID: string;
};
/**
 * @category Waiting Room
 */
declare type GetWaitingRoomParticipantsResponse = {
    participants: {
        screenName?: string;
        participantUUID?: string;
        role?: string;
    }[];
};
/**
 * @beta
 *
 * All the data in this object is valid and doesn’t change throughout the lifetime of the current engagement (until the engagement is ended for the current Agent/App).
 *
 * Thus this API should be called only once per engagement when the application starts or this API is not necessary if the corresponding event onEngagementContextChange is handled by the App.
 *
 * @category Zoom Contact Center
 */
declare type EngagementContext = {
    engagementContext: {
        /** The date when the engagement was first created in ISO 8601 format "yyyy-MM-dd'T'HH:mm:ss'Z'" or yyyy-MM-dd'T'HH:mm:ss’TZD’  */
        startTime: number;
        /** The engagement's ID */
        engagementId: string;
        /** The time when the engagement was accepted by the current agent */
        acceptTime?: number;
        /** The ID of the queue which the engagement is routed to  */
        queueId?: string;
        /** The name of the queue which the engagement is routed to */
        queueName?: string;
        /** If the call has been transferred or not from a previous agent */
        isTransfer?: string;
        /** type of transfer: direct, warm */
        transferType?: string;
        /** The ID of the agent who initiated the transfer */
        transferFromAgentId?: string;
        /** The name of the agent who initiated the transfer */
        transferFromAgentName?: string;
    };
};
/**
 * @beta
 * @category Zoom Contact Center
 */
declare type EngagementContextEvent = {
    engagementContext: {
        /** The date when the engagement was first created in ISO 8601 format "yyyy-MM-dd'T'HH:mm:ss'Z'" or yyyy-MM-dd'T'HH:mm:ss’TZD’  */
        startTime: number;
        /** The engagement's ID */
        engagementId: string;
        /** The time when the engagement was accepted by the current agent */
        acceptTime?: number;
        /** The ID of the queue which the engagement is routed to  */
        queueId?: string;
        /** The name of the queue which the engagement is routed to */
        queueName?: string;
        /** If the call has been transferred or not from a previous agent */
        isTransfer?: string;
        /** type of transfer: direct, warm */
        transferType?: string;
        /** The ID of the agent who initiated the transfer */
        transferFromAgentId?: string;
        /** The name of the agent who initiated the transfer */
        transferFromAgentName?: string;
    };
    timestamp: number;
};
/**
 * @beta
 *
 * @category Zoom Contact Center
 */
declare type EngagementStatus = {
    engagementStatus: {
        /** The engagement's ID */
        engagementId: string;
        /** The data and time when the engagement ended (after wrap up) in timestamp, valid only when state=end */
        endTime?: number;
        /** The current status of the engagment */
        state: 'active' | 'inactive' | 'wrap-up' | 'end';
        /** The channel which the engagement is currently in. The engagment channel might change if the engagement is upgraded.*/
        channel: 'voice' | 'video' | 'messaging' | 'email';
        source: 'video_webVideo' | 'video_inAppVideo' | 'video_kiosk' | 'messaging_webChat' | 'messaging_inAppChat' | 'messaging_facebook' | 'messaging_whatsapp' | 'messaging_sms' | '';
        /** if the call is a conference call or not */
        isConference: string;
        /** The ID of the agent who is assigned with the engagement */
        assignedAgentId?: string;
        assignedAgentName?: string;
        /** information about consumers */
        consumers: {
            /** The consumer's ID. Only applied to video and messaging (non-SMS) channels*/
            consumerId?: string;
            /** The consumer's name */
            consumerDisplayName?: string;
            /** The consumer's phone number */
            consumerNumber?: string;
            /** The consumer's email id */
            consumerEmail?: string;
        }[];
    };
};
/**
 * @beta
 *
 * @category Zoom Contact Center
 */
declare type EngagementStatusEvent = {
    engagementStatus: {
        /** The engagement's ID */
        engagementId: string;
        /** The data and time when the engagement ended (after wrap up) in timestamp, valid only when state=end */
        endTime?: number;
        /** The current status of the engagment */
        state: 'active' | 'inactive' | 'wrap-up' | 'end';
        /** The channel which the engagement is currently in. The engagment channel might change if the engagement is upgraded.*/
        channel?: 'voice' | 'video' | 'messaging' | 'email';
        source: 'video_webVideo' | 'video_inAppVideo' | 'video_kiosk' | 'messaging_webChat' | 'messaging_inAppChat' | 'messaging_facebook' | 'messaging_whatsapp' | 'messaging_sms' | '';
        /** if the call is a conference call or not */
        isConference?: string;
        /** The ID of the agent who is assigned with the engagement */
        assignedAgentId?: string;
        assignedAgentName?: string;
        /** information about consumers */
        consumers?: {
            /** The consumer's ID. Only applied to video and messaging (non-SMS) channels*/
            consumerId?: string;
            /** The consumer's name */
            consumerDisplayName?: string;
            /** The consumer's phone number */
            consumerNumber?: string;
            /** The consumer's email id */
            consumerEmail?: string;
        }[];
    };
    timestamp: number;
};
/**
 *
 * @category Zoom Contact Center
 */
declare type GetEngagementSecurableStatusOptions = {
    /** The unique engagement Id of the current engagement within which the PCI app is being invoked by the agent */
    engagementId: string;
};
/**
 *
 * @category Zoom Contact Center
 */
declare type GetEngagementSecurableStatusResponse = {
    securableStatus: {
        /** indicates whether the call is ready for a secure transaction such as PCI*/
        secureTransactionReady: boolean;
        /** The media redirection region */
        region: string;
        /** The number of the callee */
        calleeNumber: string;
        /** The number of the caller */
        callerNumber: string;
        /** The reason why secure transaction is not ready. Only appears when `secureTranscationReady` is `false` */
        notReadyReason?: 'phoneNumberNotReady' | 'callNotReady';
    };
};
/**
 *
 * @category Zoom Contact Center
 */
declare type StartMediaRedirectionOptions = {
    engagementId: string;
    /** Unique identifier to identify the session */
    linkId: string;
};
/**
 *
 * @category Zoom Contact Center
 */
declare type StartMediaRedirectionResponse = {
    MediaRedirectStatus: {
        engagementId: string;
        accountId: string;
        action: string;
        failureReason?: string;
        linkId?: string;
        status: string;
        userId: string;
    };
};
/**
 *
 * @category Zoom Contact Center
 */
declare type OnEngagementMediaRedirectEvent = {
    MediaRedirectStatus: {
        /** The account ID of the user */
        accountId: string;
        /** Unique Identifier of the Engagement */
        engagementId: string;
        /** Unique identifier of the user */
        userId: string;
        /** Call media redirection action */
        action: 'start' | 'stop';
        /** Call media redirection status */
        status: 'success' | 'fail';
        /** The reason why the call media redirection failed */
        failureReason?: string;
    };
    timestamp: number;
};
/**
 * @category Meeting Actions
 */
declare type GetMeetingLanguagesResponse = {
    languages: string[];
};
/**
 * @category Meeting Actions
 */
declare type OnMeetingLanguagesChangeEvent = {
    timestamp: number;
    languages: string[];
};
/**
 * @category Zoom Phone
 */
declare type MakePhoneCallOptions = {
    /** (E164 number format expected)  */
    phoneNumber: string;
    /** An Intepreter */
    phoneUserName: string;
    /** The selected outbound callerid of the person making the call */
    callerId: string;
    /** Allows for autodial when set to true */
    autoDial: boolean;
};
/**
 * From Desktop client version 5.16.10 showAppInvitationDialog accepts optional parameters to customize invitation.
 * @category Invitations & Notifications
 */
declare type ShowAppInvitationDialogOptions = {
    /** Primary heading for the participant selection dialog. Max 40 characters. */
    dialogHeading?: string;
    /** Call to action for the the dialog  */
    dialogButtonText?: 'Invite' | 'Share' | 'Send' | 'OK';
    /** Invitation message. Max 90 characters. */
    messageText?: string;
    /** Invitation primary button */
    primaryButtonText?: 'Open' | 'Accept' | 'Submit' | 'Run' | 'OK';
    /** Invitation secondary button */
    secondaryButtonText?: 'Ignore' | 'Exit' | 'Close' | 'No' | 'Stop' | 'Dismiss';
    /**Limited to 512KB after encoding */
    thumbnail?: ImageData;
};
/**
 *
 * @category  Waiting Room
 */
declare type OnWaitingRoomParticipantLeaveEvent = {
    timestamp: number;
    participant: {
        screenName: string;
        participantUUID: string;
    };
};
/**
 *
 * @category  Waiting Room
 */
declare type OnWaitingRoomParticipantJoinEvent = {
    timestamp: number;
    participant: {
        action: 'joinMeeting' | 'putFromMainMeeting';
        screenName: string;
        participantUUID: string;
    };
};
/**
 *
 * @category  Waiting Room
 */
declare type OnWaitingRoomStateChangeEvent = {
    waitingRoom: boolean;
    timestamp: number;
};
/**
 * @category App Window
 */
declare type AppPopoutOptions = {
    /** "dock" | "undock" */
    action: string;
    /** in pixels, optional parameter. Defaults to 30% of screen when unspecified */
    height?: number;
    /** in pixels, optional parameter. Defaults to 30% of screen when unspecified */
    width?: number;
};
/**
 * @category App Window
 */
declare type AppPopoutResponse = GeneralMessageResponse | WarningReponse;
/**
 * @category App Window
 */
declare type BringAppToFrontResponse = GeneralMessageResponse | WarningReponse;
/**
 * @category App Window
 */
declare type SendAppToBackgroundResponse = GeneralMessageResponse | WarningReponse;
/**
 * @category Core
 */
declare type WarningReponse = {
    warning: {
        message: string;
        code: string;
    };
};
/**
 * @category Meeting Actions
 */
declare type GetMeetingParticipantsEmailOptions = {
    reasonForAsking: string;
};
/**
 * @category Meeting Actions
 */
declare type OnParticipantEmailEvent = {
    participantUUID: string;
    /** verified email addresses only from logged in Zoom users. Logged out users and unverified users will not return this property and will have an associated status message in errorMessage property */
    participantEmail?: string;
    errorMessage?: string;
    timestamp: number;
};
/**
 * @category Meeting Actions
 */
declare type GetMeetingChatContextResponse = {
    /** empty string "" is returned if continous meeting chat is not supported */
    chatChannelUUID: string;
};
/**
 *
 * @category Zoom Contact Center
 */
declare type GetEngagementStatusOptions = {
    engagementId: string;
};
/**
 *
 * @category Zoom Contact Center
 */
declare type GetEngagementContextOptions = {
    engagementId: string;
    /** The ZCC flow number which the consumer dials. */
    flowNumber?: string;
};
/**
 * @category Zoom Mail
 */
declare type GetMailContextResponse = {
    /** The email service provider */
    provider: 'Zmail' | 'Gmail' | 'O365';
    /** Current user's account email address */
    userAccountEmail: string;
    /**
     * The id of mail thread where the app was opened, always only include one element.
     * The field will exists both if the app was opened from a mail thread or message.
     */
    threadIds?: string[];
    /**
     * The id of mail message where the app was opened, always only include one element.
     * The field only exists if the app was opened from a mail message.
     */
    messageIds?: string[];
};
/**
 * @category Zoom Mail
 */
declare type GetMailThreadOptions = {
    /** The id of the mail thread to query */
    threadId: string;
};
/**
 * @category Zoom Mail
 */
declare type GetMailThreadResponse = {
    /** All mail messages in this mail thread */
    messages: {
        id: string;
    }[];
};
/**
 * @category Zoom Mail
 */
declare type GetMailMessageOptions = {
    /** The id of the mail message to query */
    messageId: string;
    /**
     * The query fields of the mail message.
     * If filter includes "all" or is empty array or not specified, all fields will be returned
     */
    filter?: Array<'all' | 'subject' | 'body' | 'date' | 'from' | 'to' | 'cc' | 'bcc' | 'labels' | 'attachments' | 'headers'>;
};
/**
 * @category Zoom Mail
 */
declare type GetMailMessageResponse = {
    /** message subject */
    subject?: string;
    /** message body in html */
    body?: string;
    /** receive timestamp in seconds */
    date?: number;
    /** sender's email address */
    from?: {
        email: string;
    };
    /** recipient's email addresses from to field */
    to?: {
        email: string;
    }[];
    /** recipient's email addresses from cc field */
    cc?: {
        email: string;
    }[];
    /** recipient's email addresses from bcc field */
    bcc?: {
        email: string;
    }[];
    /** labels applied to this message */
    labels?: string[];
    /** message attachments */
    attachments?: {
        /** attachment id, would match any 3rd party service provider's attachment id */
        attachmentId: string;
        /** attachment name */
        fileName: string;
        /** attachment size in bytes */
        size: number;
    }[];
    /** message headers */
    headers?: {
        /** header name, e.g Message-ID, DKIM-signature, etc */
        name: string;
        /** header value */
        value: string;
    }[];
};
/**
 * @category Zoom Mail
 */
declare type GetMailActiveEditorDataOptions = {
    /**
     * Specify which fields to include. By default, all fields are included.
     *
     * @since
     * `headers` is supported since desktop client v6.4.5.
     *
     * @deprecated
     * `editorState` is deprecated since desktop client v6.4.5, will be removed later, not recommended to use.
     */
    filter?: ('draftId' | 'from' | 'to' | 'cc' | 'bcc' | 'subject' | 'body' | 'headers' | 'editorState')[];
};
/**
 * @category Zoom Mail
 */
declare type GetMailActiveEditorDataResponse = {
    /** email draft id */
    draftId?: string | null;
    /** sender */
    from?: {
        name: string;
        email: string;
    };
    /** recipients */
    to?: {
        name: string;
        email: string;
    }[];
    /** cc recipients */
    cc?: {
        name: string;
        email: string;
    }[];
    /** bcc recipients */
    bcc?: {
        name: string;
        email: string;
    }[];
    /** email subject */
    subject?: string;
    /** email body */
    body?: string;
    /** app custom headers */
    headers?: {
        name: `X-Zoom-App-${string}`;
        value: string;
    }[];
    /** Any app local state associated with the editor instance */
    editorState?: any;
};
/**
 * @category Zoom Mail
 */
declare type SetMailActiveEditorDataOptions = {
    /** recipients */
    to?: {
        email: string;
    }[];
    /** cc recipients */
    cc?: {
        email: string;
    }[];
    /** bcc recipients */
    bcc?: {
        email: string;
    }[];
    /** email subject */
    subject?: string;
    /** email body */
    body?: string;
    /**
     *  - `name`: file name
     *  - `type`: file MIME type
     *  - `content`: file base64 encoded content, **doesn't contain the data URI prefix**
     */
    attachments?: {
        name: string;
        type: string;
        content: string;
    }[];
    /**
     * App custom headers, it can be used to store metadata bound with mail.
     * If a header name starts with `X-Zoom-App-Private-`, the header will only be saved in the draft and will not be included when sending the email.
     * **Be sure to use your own unique prefix in the header name to avoid conflicts with other app headers.**
     *
     * @since desktop client v6.4.5
     */
    headers?: {
        name: `X-Zoom-App-${string}`;
        value: string;
    }[];
    /**
     * Any app local state associated with the editor instance, **it will replace the previous editorState**.
     *
     * @deprecated Since desktop client v6.4.5, will be removed later, not recommended to use.
     */
    editorState?: any;
};
/**
 * @category Zoom Mail
 */
declare type RegisterMailEditorComponentOptions = {
    /** Component name, component names cannot be dulpicated in the same app. */
    name: string;
    /**
     * The [AdaptiveCards template schema](https://learn.microsoft.com/en-us/adaptive-cards/templating/) to render the component ui.
     * We can bind data in the template, the data will be passed by the component props.
     * And the template language support many [built-in functions](https://learn.microsoft.com/en-us/azure/bot-service/bot-builder-concept-adaptive-expressions?view=azure-bot-service-4.0&tabs=logical),
     * such as parse json, format date, etc.
     * We support all adaptive card elements up to schema version 1.6, and some elements also support markdown.
     * **Please do not use actions or other functions that need to execute js in the schema, because js cannot be contained in the emails sent.**
     *
     * We also support some custom elements, please see [RenderInMailOptions](./ZoomSdkTypes.RenderInMailOptions.html) for details.
     */
    schema: {
        /** default is AdaptiveCard */
        type?: 'AdaptiveCard';
        /** range is ['1.0', '1.6'], default is '1.6' */
        version?: string;
        body: Record<string, any>[];
        [key: string]: any;
    };
};
/**
 * @category Zoom Mail
 */
declare type InsertContentToMailActiveEditorOptions = {
    /**
     * content html, such as email snippet, dangerous content will be ignored.
     *
     * Because Zmail uses [Tiptap](https://tiptap.dev) to implement the editor,
     * the content html also needs to comply with Tiptap's specifications (for example, it is best to wrap the text in p tags, etc.),
     * otherwise it will not be inserted into the editor as is, but will be converted accordingly.
     */
    html: string;
};
/**
 * @category Zoom Mail
 */
declare type RenderInMailActiveEditorOptions = {
    /** ui location, currently only supports footer */
    position: 'footer';
    /** The id of previously rendered ui, only needed when updating or deleting the ui*/
    id?: string;
    /**
     * We use [AdaptiveCards v3](https://www.npmjs.com/package/adaptivecards/v/3.0.5) to render custom ui, the schema is [AdaptiveCards Schema](https://adaptivecards.io/explorer/AdaptiveCard.html).
     * Such as
     * ```json
     * {
     *   "type": "AdaptiveCard",
     *   "version": "xxx",
     *   "body": [...]
     * }
     * ```
     * Don't support templating in this case, and support all adaptive card elements up to version 1.6
     *
     * If schema is empty or not exist, means delete the ui specified by id,
     * otherwise means updating the ui specified by id or creating new ui when id is not specified.
     */
    schema?: {
        /** default is AdaptiveCard */
        type?: 'AdaptiveCard';
        /** range is ['1.0', '1.6'], default is '1.6' */
        version?: string;
        body: Record<string, any>[];
        [key: string]: any;
    };
};
/**
 * @category Zoom Mail
 */
declare type RenderInMailActiveEditorResponse = {
    /** Only returned when creating a new ui, mark the rendered ui for subsequent update or delete */
    id?: string;
};
/**
 * @category Zoom Mail
 */
declare type RenderInMailOptions = {
    /** ui position */
    position: 'modal' | 'activeEditorFooter';
    /** The id of previously rendered ui, only needed when updating or deleting the ui*/
    id?: string;
    /**
     * We use [AdaptiveCards v3](https://www.npmjs.com/package/adaptivecards/v/3.0.5) to render custom ui,
     * the schema is [AdaptiveCards Schema](https://adaptivecards.io/explorer/AdaptiveCard.html),
     * and the schema version we support is 1.6.
     * Such as
     * ```json
     * {
     *   "body": [...]
     *   "actions": [...]
     *   ...
     * }
     * ```
     * Don't support templating in this case, and support all adaptive card elements up to version 1.6.
     *
     * If schema is empty or not exist, means delete the ui specified by id,
     * otherwise means updating the ui specified by id or creating new ui when id is not specified.
     *
     * We also customized some elements, as follows:
     *
     * **Link** - The link element generated by the `a` tag, since desktop client v6.4.5.
     *
     * | property   | type       | required       | description  |
     * | :--------: | :--------: | :--------: | :-------- |
     * | type       | 'Link'  |  yes    | must be 'Link' |
     * | mode       | 'button' \| 'text'   | no     | display mode, default is 'text' |
     * | url        | string     | yes     | link url |
     * | text       | string     | no      | link text, default is link url |
     */
    schema?: {
        body: Record<string, any>[];
        [key: string]: any;
    };
};
/**
 * @category Zoom Mail
 */
declare type RenderInMailResponse = {
    /** Only returned when creating a new ui, mark the rendered ui for subsequent update or delete */
    id?: string;
};
/**
 * @category Zoom Mail
 */
declare type SubscribeBeforeMailSendOptions = {
    /**
     * Priority is an integer in the range of [-10000, 10000], and the default is 0.
     * The larger the number, the higher the priority.
     * If the priority are the same, they are sorted by the time of this API call.
     * The beforeMailSend event will be triggered to all subscribed apps in order of priority,
     * or the order in which the method was called when the priorities are the same.
     */
    priority?: number;
    /**
     * Timeout for the callback (call `callbackToMail`) of `onBeforeMailSend` event.
     * Unit is `ms`, default value is 5000, 0 means no timeout.
     */
    timeout?: number;
};
/**
 * @category Zoom Mail
 */
declare type CallbackToMailOptions = {
    /**
     * Some mail events may require the app to return a response,
     * in which case the callId will be included in that event data.
     */
    callId: string;
    /** The response data from apps */
    data?: any;
};
/**
 * @category Zoom Mail
 */
declare type OnMailActiveEditorChangeEvent = {
    timestamp: number;
    /** Is there any active editor? */
    noActive: boolean;
    /**
     * only exist when noActive is false
     *
     * @since desktop client v6.4.5
     */
    editorId?: string;
    /**
     * editor type, only exist when noActive is false
     *
     * @since desktop client v6.4.5
     */
    editorType?: 'new' | 'reply' | 'replyAll' | 'forward';
    /**
     * editor data, only exist when noActive is false
     *
     * @since desktop client v6.4.5
     */
    data?: {
        /** email draft id */
        draftId: string | null;
        from: {
            name: string;
            email: string;
        };
        to: {
            name: string;
            email: string;
        }[];
        cc: {
            name: string;
            email: string;
        }[];
        bcc: {
            name: string;
            email: string;
        }[];
        subject: string;
        body: string;
        /** app custom headers */
        headers: {
            name: `X-Zoom-App-${string}`;
            value: string;
        }[];
    };
};
/**
 * @category Zoom Mail
 */
declare type OnMailActiveEditorTypeChangeEvent = {
    timestamp: number;
    /** current type of compose editor */
    type: 'new' | 'reply' | 'replyAll' | 'forward';
};
/**
 * Only the fields that have changed will be returned.
 * @category Zoom Mail
 */
declare type OnMailActiveEditorDataChangeEvent = {
    timestamp: number;
    /**
     * mail draft id
     *
     * @since desktop client v6.4.5
     */
    draftId?: string;
    from?: {
        name: string;
        email: string;
    };
    to?: {
        name: string;
        email: string;
    }[];
    cc?: {
        name: string;
        email: string;
    }[];
    bcc?: {
        name: string;
        email: string;
    }[];
    subject?: string;
    /**
     * app custom headers
     *
     * @since desktop client v6.4.5
     */
    headers?: {
        name: `X-Zoom-App-${string}`;
        value: string;
    }[];
};
/**
 * @category Zoom Mail
 */
declare type OnMailEditorDestroyEvent = {
    timestamp: number;
    editorId: string;
};
/**
 * @category Zoom Mail
 */
declare type OnAppToggleInMailActiveEditorEvent = {
    timestamp: number;
    /** Are apps currently enabled? */
    enabled: boolean;
};
/**
 * @category Zoom Mail
 */
declare type OnAppUIActionInMailEvent = {
    timestamp: number;
    /** the id of ui which trigger the action */
    uiId: string;
    /** action data */
    action: {
        /** action type */
        type: 'Action.Execute' | 'Action.OpenUrl' | 'Action.ToggleVisibility' | 'Action.Submit';
        /** action id */
        id?: string;
        /** the text of action button */
        title?: string;
        /** only exist when type is Action.OpenUrl */
        url?: string;
        /** only exist when type is Action.Execute */
        verb?: string;
        /** only exist when type is Action.Execute or Action.Submit */
        data?: Record<string, any>;
    };
};
/**
 * @category Zoom Mail
 */
declare type OnBeforeMailSendEvent = {
    timestamp: number;
    /** request id */
    callId: string;
    /** mail data */
    data: {
        /**
         * @since desktop client v6.4.5
         */
        draftId: string;
        /**
         * @since desktop client v6.4.5
         */
        editorId: string;
        from: {
            name: string;
            email: string;
        };
        to: {
            name: string;
            email: string;
        }[];
        cc: {
            name: string;
            email: string;
        }[];
        bcc: {
            name: string;
            email: string;
        }[];
        subject: string;
        body: string;
        /** app custom headers, the header name need to meet the `X-Zoom-App-${string}` format since desktop client v6.4.5 */
        headers: {
            name: `X-Zoom-App-${string}`;
            value: string;
        }[];
        /**
         * app local state associated with the editor instance.
         *
         * @deprecated Since desktop client v6.4.5, it will be removed later, not recommended to use.
         */
        editorState: any;
    };
};
/**
 * @category Meeting Actions
 */
declare type TakeParticipantPhotoOptions = {
    /** Target participants with specified participantUUIDs. Empty array takes photos of everyone; not-empty participantUUID array takes photo of the UUIDs, size of the array should less than 50, if more than 50, only 50 participantUUIDs will be used; */
    participantUUIDs: string[];
};
/** @hidden */
declare type OnPhotoEventOriginal = {
    participantUUID: string;
    /** true if the video is off */
    videoOff: boolean;
    /**  true if pressed Don't Allow or didn't respond */
    optedOut: boolean;
    /** Timestamp at which the photo was taken */
    timestamp: number;
    /** null if videoOff or optedOut is true */
    imageData: null | {
        width: number;
        height: number;
        /** base64 string */
        data: string;
    };
};
/**
 * @category Zoom Contact Center
 */
declare type GetEngagementVariableValueOptions = {
    /** Current Engagement Id */
    engagementId: string;
    /** Filter by variable Id or null for all variables */
    variableId?: string;
};
/**
 * @category Zoom Contact Center
 */
declare type GetEngagementVariableValueResponse = {
    /** ZCC variables */
    variables: {
        id: string;
        name?: string;
        value: any;
    }[];
};
/**
 * @category Zoom Contact Center
 */
declare type GetAppVariableListResponse = {
    /** ZCC variables */
    variables: {
        id: string;
        name: string;
        type: 'globalSystem' | 'globalCustom' | 'addressbookCustom';
        dataType: 'string' | 'number' | 'boolean' | 'date-time' | 'currency' | 'percent' | 'email' | 'url' | 'phone-number, E.164' | 'picklist';
        defaultValue?: any;
    }[];
};
/**
 * @category Meeting Actions
 */
declare type SendMessageToChatOptions = {
    /** Message to be sent */
    message: string;
};
/**
 * @category Meeting Actions
 */
declare type SendMessageToChatResponse = {
    /** Where message was sent */
    result: {
        channelId: string;
        messageId: string;
    }[];
};
/**
 * Timer-related options for dynamic indicator.
 *
 * @category Dynamic Indicator
 */
declare type DynamicIndicatorTimerOptions = {
    action?: 'start' | 'pause' | 'resume' | 'end';
    direction?: 'up' | 'down';
    current?: number;
    start?: number;
    withSound?: boolean;
    countNegativeAfterAlarm?: boolean;
    showNotification?: boolean;
    songChoice?: number;
};
/**
 * Style-related options for dynamic indicator.
 *
 * @category Dynamic Indicator
 */
declare type SetDynamicIndicatorStyleInput = {
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    textStyle?: 'bold' | 'italic';
};
/**
 *  * **Note:** Dynamic indicators must enhance the meeting experience for all participants, such as showing timers or relevant status cues. Promotional content, app install prompts, or distracting visuals (e.g., bright colors or persistent banners) are not allowed. Any misuse of dynamic indicators and the dynamic indicator APIs, as determined by Zoom, may lead to app rejection or removal from the Zoom App Marketplace.
 *
 * @category Dynamic Indicator
 */
declare type DynamicIndicatorOptions = {
    text?: string;
    timer?: {
        action?: 'start' | 'pause' | 'resume' | 'end';
        direction?: 'up' | 'down';
        start?: number;
        withSound?: boolean;
        countNegativeAfterAlarm?: boolean;
        showNotification?: boolean;
        songChoice?: number;
    };
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    textStyle?: 'bold' | 'italic';
};
/**
 * Output type for getting the current dynamic indicator status.
 *
 * @category Dynamic Indicator
 */
declare type GetDynamicIndicatorOutput = {
    participantUUID: string;
    screenName: string;
    text?: string;
    timer?: DynamicIndicatorTimerOptions;
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    textStyle?: 'bold' | 'italic';
};
/**
 * Styles for dynamic indicator, including text, border, and background colors.
 *
 * @category Dynamic Indicator
 */
declare type DynamicIndicatorStyles = {
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    textStyle?: 'bold' | 'italic';
};
/**
 * Event data for when a dynamic indicator is set, including the indicator's text, colors, and timer.
 *
 * @category Dynamic Indicator
 */
declare type OnSetDynamicIndicatorEvent = {
    participantUUID: string;
    screenName: string;
    timestamp: number;
    text?: string;
    timer?: {
        action?: 'start' | 'pause' | 'resume' | 'end';
        direction?: 'up' | 'down';
        current?: number;
        start?: number;
        withSound?: boolean;
        countNegativeAfterAlarm?: boolean;
        showNotification?: boolean;
        songChoice?: number;
    };
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    textStyle?: 'bold' | 'italic';
};
/**
 * Event data for when a dynamic indicator is removed.
 *
 * @category Dynamic Indicator
 */
declare type OnRemoveDynamicIndicatorEvent = {
    participantUUID: string;
    screenName: string;
    timestamp: number;
};
/**
 * Event data for when the style of a dynamic indicator is changed (e.g., text style, colors).
 *
 * @category Dynamic Indicator
 */
declare type OnDynamicIndicatorStyleChangeEvent = {
    participantUUID: string;
    screenName: string;
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    textStyle?: 'bold' | 'italic';
    timestamp: number;
};
/**
 * Event data for when a dynamic indicator is extended, typically by updating or prolonging the timer.
 *
 *  @category Dynamic Indicator
 */
declare type OnExtendDynamicIndicatorEvent = {
    extendDuration: number;
    timestamp: number;
};
/**
 *  @category In-app Purchase
 */
declare type OnUpgradeRequestEvent = {
    status: 'cancelled' | 'requested';
};
/**
 *  @category In-app Purchase
 */
declare type PromptUpgradeRequestOptions = {
    /**
     * it is optional and will be used in the future.
     */
    planId: string;
};
/**
 * @category Zoom Rooms
 */
declare type GetZoomRoomDeviceDetails = {
    /**  example: "Zoom Rooms" , "Zoom Rooms controller" */
    deviceType: string;
    deviceInfo: {
        brand: string;
        model: string;
        firmwareVer: string;
        macAddress: string;
    };
}[];
/**
 * @category Zoom Rooms
 */
declare type OnZoomRoomEventResponse = {
    /** The event type (e.g., "meeting", "phone", etc.), referring to the "type" column in the NRC rules. */
    type: string;
    /** The event (e.g., "operation_time_started", "operation_time_ended"), referring to the "string" column in the NRC rules. */
    event: string;
    timestamp: number;
};
/**
 *  @category Zoom Phone
 */
declare type RemoveParticipantOptions = {
    /**
     * A unique identifier for the participant you wish to remove from the meeting.
     */
    participantUUID: string;
};
/**
 *  @category Zoom Phone
 */
declare type SendKeypadControlsOptions = {
    /**
     * The unique identifier of the participant who was called in using Zoom Phone.
     */
    participantUUID: string;
    /** The keypad code to send. This could be any digit (0-9), "*", "#", or ",". */
    keypadCode: string;
};
/**
 * @category RTMS
 */
declare type GetRTMSStatusResponse = {
    /** The status of the RTMS session(s) in-meeting (for the same app only) */
    rtmsStatus: {
        rtmsSessionId: string;
        displayName: string;
        status: 'connecting' | 'started' | 'paused' | 'stopped';
        timestamp: number;
    }[];
};
/**
 * @category RTMS
 */
declare type OnRTMSStatusChangeEvent = {
    rtmsSessionId: string;
    displayName: string;
    status: 'connecting' | 'started' | 'paused' | 'stopped' | 'resumed';
    timestamp: number;
};

/** @hidden */
declare const compatibilityApisCache: {
    config: {
        mapInput: (d: any) => any;
        mapOutput: (d: any) => any;
        validate: (d: any) => any;
    };
};
/**
 * Compares two version strings to determine if the client version meets the minimum requirement.
 *
 * @param currentVersion - The current client version (e.g., "5.17.5").
 * @param requiredVersion - The minimum required version (e.g., "5.17.5").
 * @returns `true` if the client version is greater than or equal to the required version, otherwise `false`.
 *
 * @hidden
 */
declare function isVersionCompatible(currentVersion: string, requiredVersion: string): boolean;
/**
 * # Zoom Apps SDK
 *
 * The Zoom Apps SDK is a JavaScript library that facilitates communication between your Zoom App and the Zoom client. The SDK allows you to take advantage of the many APIs and events Zoom exposes in its embedded browser.
 *
 * ## Installation
 *
 * There are two ways to install the Zoom Apps SDK into your frontend project
 *
 * ### NPM
 *
 * You can install it from NPM, if you are using a module bundler such as Webpack:
 *
 * ```
 * $ npm install @zoom/appssdk
 * ```
 *
 * ### CDN
 *
 * Alternatively, you can load the SDK from a CDN, using a script tag in your HTML document:
 *
 * ```
 * <script src="https://appssdk.zoom.us/sdk.js"></script>
 * ```
 *
 * You can also load a minified SDK, using a script tag in your HTML document:
 *
 * ```
 * <script src="https://appssdk.zoom.us/sdk.min.js"></script>
 * ```
 *
 * ## Usage
 *
 * If you installed Zoom Apps SDK from NPM, import `zoomSdk` into the component where you wanted to use the SDK and call `config` as your first call to verify your application with Zoom.
 *
 * ```
 * import zoomSdk from "@zoom/appssdk"
 *
 * async function configureApp() {
 *   const configResponse = await zoomSdk.config({
 *     popoutSize: {width: 480, height: 360},
 *     capabilities: ["shareApp"]
 *   })
 * }
 * ```
 *
 * When you load the SDK using a script tag, zoomSDK is served as a global object and can be called across components. Even in this case `zoomSdk.config` should be the first call.
 *
 * ```
 * <script src="https://appssdk.zoom.us/sdk.js"></script>
 *
 * async function configureApp() {
 *    const configResponse = await zoomSdk.config({
 *      version: "0.16",
 *      popoutSize: {width: 480, height: 360},
 *      capabilities: ["shareApp"]
 *    })
 * }
 * ```
 *
 * The cloud SDK is designed to provide on-demand patch updates, and it does not support exact versions. You will always get the latest patch version within the major version specified in the version parameter of `zoomSdk.config`. In other words, if you supplied an exact version like `0.16.1`, you will get the latest patch within the `0.16` major version.
 *
 * `zoomSdk.config` response object. Read more about [zoomSdk.config](https://appssdk.zoom.us/classes/ZoomSdk.ZoomSdk.html#config)
 *
 * ```
 * {
 *    "clientVersion": "5.11.1.8356",
 *    "browserVersion": "applewebkit/17613.2.7.1.8",
 *    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
 *    "auth": {
 *        "status": "authorized",
 *        "upgradable": true
 *     },
 *    "unsupportedApis": [],
 *    "runningContext": "inMainClient"
 * }
 *```
 *
 * ## Role and running context change
 * Listen to `zoomSdk.onMyUserContextChange` and `zoomSdk.onRunningContextChange` events for role and running context changes respectively. `zoomSdk.config` needs to be called again to update API permissions.
 *
 * ## Note
 *
 * - Zoom Desktop Client is a native application. Depending on the Zoom Desktop Client version a user has installed, they might have access to different Zoom Apps APIs and events. With the cloud version of the SDK, you automatically get the latest patches as we release new client versions, and your apps avoid potential breaks due to missing patches.
 *
 * - When using SDK via npm, check for updates in our monthly release of Zoom Desktop Client. You must manually update your app when needed to the latest SDK to maintain compatibility with newer client versions.
 *
 * - The SDK module installed via npm includes the `sdk.d.ts` file which provides type definitions for `sdk.es.js` and `sdk.module.js`. The cloud-based SDK does not provide this file.
 *
 *
 * ### How do compatibility patches work?
 *
 * This is an example of how compatibility patches delivered via cloud-based SDK help your app run on the latest client versions.
 *
 * **Note**: This example is only for illustrating the concept, and does not imply Zoom is planning to change the `sendAppInvitation` API schema.
 *
 * **Example**:
 * Your app is developed against the 3.4.0 client version and uses the `sendAppInvitation` API.
 *
 * Client version 3.4.0. The `sendAppInvitation` API schema is
 *
 * ```
 * sendAppInvitation ({ participantUUIDs: [participantUUID1, participantUUID2, ...], })
 * ```
 *
 * Client version 4.0.0 introduces a breaking change to the `sendAppInvitation` API that requires one additional parameter `message` to customize your invitation. The new API schema is
 *
 * ```
 * sendAppInvitation ({ participantUUIDs: [participantUUID1, participantUUID2, ...],  message: "This app is awesome, try it!"})
 * ```
 *
 * Apps based on the client version 3.4.0 will break when used on the 4.0.0 client because the client is expecting the `message` parameter as part of the API call. Whereas, when you use the cloud-based SDK, the compatibility patch can accept your API request and transform it internally to use a default value for the `message` parameter.
 *
 * Original call from app to SDK
 *
 * ```
 * sendAppInvitation ({ participantUUIDs: [participantUUID1, participantUUID2, ...], })
 * ```
 *
 * SDK transforms the call internally to
 *
 * ```
 * sendAppInvitation ({ participantUUIDs: [participantUUID1, participantUUID2, ...], message: ""})
 * ```
 *
 * ## Release notes
 *
 * Refer to [release notes](https://github.com/zoom/appssdk/releases) to discover changes made in the Apps SDK.
 *
 * ## Resources to create a Zoom App
 *
 * - Create your first Zoom App following these [steps](https://developers.zoom.us/docs/zoom-apps/create/).
 * - To help you start developing Zoom Apps we also provide sample reference [apps](https://developers.zoom.us/docs/zoom-apps/reference-apps/).
 * - Watch [How To Create a Zoom App](https://www.youtube.com/watch?v=otlyDxnU-RI) and [How To Configure the Basic Zoom App](https://www.youtube.com/watch?v=SS87nqO9ScQ).
 * - Discover more learning [resources](https://developers.zoom.us/docs/zoom-apps/) for Zoom Apps Development.
 * - Zoom Apps SDK on [npm](https://www.npmjs.com/package/@zoom/appssdk).
 *
 * ## Need help?
 *
 * - If you are looking for help, try [Developer Support](https://devsupport.zoom.us/hc/en-us) or our [Developer Forum](https://devforum.zoom.us/).
 * - For questions related to Zoom Apps please direct them to [Zoom Apps](https://devforum.zoom.us/c/zoom-apps/39) category in the forum.
 * - Priority support is also available with [Premier Developer Support](https://explore.zoom.us/docs/en-us/developer-support-plans.html) plans.
 *
 */
declare class ZoomSdk {
    private _postMessage;
    private _clientVersion;
    private _version;
    private _timeout_for_all_apis?;
    /**
     * @ignore
     */
    constructor(options: SdkOptions);
    /**
     * @ignore
     */
    native2js(message: NativeMessage): void;
    /**
     * @ignore
     *
     * **Warning: This method is no longer publicly supported**
     *
     * This method will return an error if the client does not provide a response within the timeout specified or the default of 10000ms (10 seconds).
     */
    callZoomApi(apiName: string, data?: NativeApiRequestData, timeout?: number, isTimerApp?: boolean): Promise<any>;
    /**
     * @zoomZRCVersion 5.14.0
     *
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * To initialize and start using the SDK, you must first call `zoomSdk.config` to verify your application with Zoom. Without completing this step, your application won’t be able to use any of the APIs or event listeners provided by the SDK. In the request body of this API call, specify the list of APIs and event listeners that you plan to use in your app as shown below. Ensure that the list of capabilities provided in this request corresponds to the list of APIs and events that you have added in your app build flow on Marketplace (Zoom App > Feature > Zoom App SDK).
     *
     * The Zoom Apps SDK relies on a token that is generated and used internally by the Zoom client to authorize API calls on behalf of the app. This token is bound to the openURL that you provide when you call `zoomSdk.config`. If your URL changes, your configuration will be invalidated, and you will need to call `zoomSdk.config` with the new URL again.
     *
     * If your Zoom App is a single page app, we suggest modifying your navigation methods to automate this.
     * ```
     * const configResponse = await zoomSdk.config({
     *   version: '0.16',
     *   // The `version` param is only required if using the Cloud SDK (not NPM SDK).
     *   // See README for more details.
     *   popoutSize: { width: 480, height: 360 },
     *   capabilities: [
     *     //APIs
     *     "shareApp",
     *     "listCameras",
     *     "setCamera",
     *     "setVideoMirrorEffect",
     *     "getMeetingParticipants",
     *     "cloudRecording",
     *     "allowParticipantToRecord",
     *     "getRunningContext",
     *     "getMeetingContext",
     *     "getSupportedJsApis",
     *     "showNotification",
     *     "openUrl",
     *     "setVirtualBackground",
     *     "listCameras",
     *     "setCamera",
     *     "sendAppInvitation",
     *     "sendAppInvitationToAllParticipants",
     *     "getUserContext",
     *     "getRecordingContext",
     *     "getMeetingContext",
     *     "getMeetingJoinUrl",
     *     "getMeetingUUID",
     *     "expandApp",
     *     "connect",
     *     "postMessage",
     *     //Events
     *     "onShareApp",
     *     "onSendAppInvitation",
     *     "onCloudRecording",
     *     "onActiveSpeakerChange",
     *     "onAppPopout",
     *     "onCohostChange",
     *     "onParticipantChange",
     *     "onReaction",
     *     "onConnect",
     *     "onExpandApp",
     *     "onMessage",
     *     "onMeeting",
     *   ],
     * });
     * ```
     *
     * @category Core
     */
    config({ capabilities, popoutSize, size, version, timeout, }: ConfigOptions): Promise<ConfigResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Returns an array of APIs and events supported by the current running context.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.getSupportedJsApis();
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10013       | Request to get supported APIs list failed.[Error from web: xxxx]                                                                |
     *
     * @category Core
     */
    getSupportedJsApis(): Promise<GetSupportedJsApisResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Opens a URL in the system browser of a user's device.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.openUrl({ url: "https://awesome-zoom-app.com/login" });
     * ```
     *
     * *You must whitelist the URL domain in your Marketplace app configuration, otherwise the browser will show a warning "Accessing Untrusted Website". And the user has to manually click the link to trigger marketplace to redirect them to the specified url.*
     *  *Error codes* {@link ZoomApiError}
      | Status Code | Status Message                                                                                                                  |
      | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
      | 10015       | Request to open URL failed, please make sure the domain has been whitelisted by the Zoom App.[Error from web: xxxx]             |
     *
     * @category Core
     */
    openUrl(options: OpenUrlOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Returns the context in which the Zoom App is launched. This is useful for controlling your app's behavior based on the presence of a single user or multiple collaborative users.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     * ```
     * await zoomSdk.getRunningContext();
     * ```
     *
     * @category Core
     */
    getRunningContext(): Promise<RunningContextResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * This API is only available in meetings. It returns an object containing basic information about the meeting.
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     *
     * ```
     * await zoomSdk.getMeetingContext();
     * ```
     *
     * @category Meeting Actions
     */
    getMeetingContext(): Promise<GetMeetingContextResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6/5.14.0(mainClient)
     * @zoomAndroidClientVersion 5.16.0
     *
     * This sets a virtual background or blur the user's native background.
     *
     * When setVirtualBackground is invoked in a context where the smart virtual background package is not yet installed, a dialog prompts the user to download the package. When the user clicks "Install" in the dialog box, the package is downloaded. The client will subsequently show the consent dialog for setting the background.
     *
     * The API is available in `inMainClient` running context from client version 5.13.5
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera, inMainClient, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     * ```
     * var myOptions = {
     *    fileUrl: "https://unsplash.com/photos/itTHOJ5aUk4"
     * };
     *
     * await zoomSdk.setVirtualBackground(myOptions);
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10030       | Your device does not support setting virtual backgrounds.                                                                       |
     | 10031       | Virtual backgrounds setting is not enabled in your web settings.                                                                |
     | 10032       | Can't set virtual background in current immersive scene.                                                                        |
     | 10044       | Failed to decode the virtual image data.                                                                                        |
     | 10045       | No smart virtual backgrounds package, you need to download it.                                                                  |
     | 10056       | Can't set virtual background because the video is merged by the share resource.                                                 |
     | 10057       | Can't remove virtual background because your admin requires users to always use virtual background.                             |
     | 10064       | This action has been flushed by the subsequent action when downloading smart virtual background package.                        |
     | 10150	     | Meeting not ready, can’t call this api.	                                                                                       |
     | 10151	     | Zoom App is disabled in Meeting.	                                                                                               |
     * @category Layers
     */
    setVirtualBackground(options: VirtualBackgroundOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6/5.14.0(mainClient)
     * @zoomAndroidClientVersion 5.16.0
     * Removes current virtual background and resets to use the camera.
     *
     * Note that when calling removeVirtualBackground, the client will pop up a confirmation dialog to let the user allow or disallow. If the user does not allow the action, the client will return an error code of 10017 to the app.
     *
     * The API is available in `inMainClient` running context from client version 5.13.5
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera, inMainClient, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.removeVirtualBackground().then(function() => {
     *   // background was successfully removed
     * })
     * .catch(function(error) => {
     *   // there was an error removing the virtual background
     * })
     * ```
     *
     * @category Layers
     */
    removeVirtualBackground(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * @zoomIOSClientVersion 5.14.10
     * @zoomAndroidClientVersion 5.15.0
     * Draws an image in the foreground of the user’s video.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.setVirtualForeground({
     *   imageData: <ImageData>
     * })
     * .then((ctx) => {
     *   console.log("setVirtualForeground returned", ctx);
     * })
     * .catch((e) => {
     *   console.log(e);
     * });
     * ```
     *
     * Returns
     *
     * On success, this returns an object with an imageId field (string/UUID) that uniquely identifies the image.
     *
     *  *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10044       | Failed to decode the virtual image data.                                                                                        |
     | 10068       | Failed to set or remove the image.                                                                                              |
     * @category Layers
     */
    setVirtualForeground(options: VirtualForegroundOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * @zoomIOSClientVersion 5.14.10
     * @zoomAndroidClientVersion 5.15.0
     * Removes the image which was set using setVirtualForeground from the foreground of the user’s video.
     *
     *  *Supported roles*: Host, Co-Host, Participant,  Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.removeVirtualForeground()
     * .catch((e) => {
     *   console.log(e);
     * });
     * ```
     *
     * @category Layers
     */
    removeVirtualForeground(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Triggers a push notification. The embedded browser does not support the Web Notification API, so we have provided a similar API via the JS SDK.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.showNotification({
     *  type: "info",
     *  title: "Hello",
     *  message: "This is an info notification"
     * });
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10042       | Not allowed to show notification for do-not-disturb-mode.                                                                       |
     *
     * @category Invitations & Notifications
     */
    showNotification(options: NotificationOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * The cloud recording API allows you to control cloud recording actions during a meeting.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.cloudRecording({ action: "start" });
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10021       | You do not have privilege to start cloud recording.                                                                             |
     | 10022       | Invalid cloud recording action.                                                                                                 |
     | 10040       | Local recording is in progress                                                                                                  |
     *
     * @category Recording
     */
    cloudRecording(options: CloudRecordingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Screenshare current app. Optionally share sound as well.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.shareApp({ action: "start", withSound: true });
     * ```
     *  *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10018       | Failed to share the app.                                                                                                        |
     | 10023       | Screen share is disabled in this meeting.                                                                                       |
     | 10024       | Screen share has started in this meeting.                                                                                       |
     | 10025       | Screen share did not start in this meeting.                                                                                     |
     | 10059       | The client is sharing screen or other apps.                                                                                     |
     | 10137       | API call succeeded, the user must choose to stop ongoing share to begin share.                                                  |
     *
     * @category Sharing
     */
    shareApp(options: ShareAppOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Get all available cameras.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.listCameras();
     * ```
     *
     * Returns
     *
     * ```
     * {
     *  "cameras": [
     *    { "id": "0x14424000046d085b", "name": "Logitech Webcam C925e #2" },
     *    { "id": "0x8020000005ac8514", "name": "FaceTime HD Camera (Built-in)" }
     *  ]
     * }
     * ```
     *
     * @category Client Settings
     */
    listCameras(): Promise<ListCamerasResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Choose a camera input to use.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.setCamera({
     *  id: 1,
     *  save: true
     * });
     * ```
     *
     * @category Client Settings
     */
    setCamera(options: SetCameraOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Mirror my video/virtual background.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.setVideoMirrorEffect({
     *  mirrorMyVideo: true
     * });
     * ```
     *
     * @category Meeting Actions
     */
    setVideoMirrorEffect(options: SetVideoMirrorEffectOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Get information of the participants in the current meeting. Note that for breakout rooms, the participants in the current room will be returned, not those of the parent meeting.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.getMeetingParticipants();
     * ```
     *
     * @category Meeting Actions
     */
    getMeetingParticipants(): Promise<GetMeetingParticipantsResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Send app to list of participants in the meeting.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.sendAppInvitation({
     *  participantUUIDs: [participantUUID1, participantUUID2, ...],
     * });
     * ```
     *
     * Returns
     *
     * ```
     * { "invitationUUID": "AnQlE6dxT9yx+jxeI8ZXuQ==" }
     * ```
     *  *Error codes* {@link ZoomApiError}
    | Status Code | Status Message                                                                                                                  |
    | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
    | 10026       | Failed to send the app invitation.                                                                                              |
    | 10027       | You do not have privilege to send app invitation!                                                                               |
    | 10028       | A maximum of 10 individual invites can be sent at a time. Consider sending to everyone instead!                                 |
    | 10049       | You haven't access the participant information.                                                                                 |
     *
     *
     * @category Invitations & Notifications
     */
    sendAppInvitation(options: SendAppInvitationOptions): Promise<AppInvitationResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * It returns basic information about the meeting participant while in a meeting.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.getUserContext().then((result) => {
     *    // e.g. { screenName: 'Happy Zoomineer', role: 'host', participantUUID: "xxxx", status: "authorized"}
     *  })
     *  .catch(function(error){
     *    // there was an error
     *  })
     * ```
     *
     * @category Meeting Actions
     */
    getUserContext(): Promise<GetUserContextResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * This API endpoint is only available in meetings. It returns basic information about the meeting recording while in a meeting.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.getRecordingContext().then((result) => {
     *    // e.g. { cloudRecordingStatus: 'stopped'|'started'|'paused'|'connecting'}
     *  })
     *  .catch(function(error){
     *    // there was an error
     *  })
     * ```
     *
     * @category Recording
     */
    getRecordingContext(): Promise<GetRecordingContextResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * This API endpoint is only available in meetings. It allows the app to access the JoinUrl while in a meeting.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.getMeetingJoinUrl()
     *   .then((result) => {
     *     // e.g. { joinUrl: "xxxxxx"}
     *   })
     *   .catch(function(error){
     *     // there was an error
     *   })
     * ```
     *
     * @category Meeting Actions
     */
    getMeetingJoinUrl(): Promise<GetMeetingJoinUrlResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * This API endpoint is only available in meetings. It allows the app to access the meetingUUID while in a meeting.
     *
     * In breakout rooms,meetingUUID identifies the specific breakout room, and parentUUID helps connect individual rooms to the main meeting. Note that the value of parentUUID must be used for REST API calls inside of breakout rooms, while meetingUUID is otherwise used.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.getMeetingUUID()
     *  .then(function(result){
     *    // e.g. { meetingUUID: 'abcdefghijklmnopqrstuvwx'}
     *  })
     *  .catch(function(error){
     *    // there was an error
     *  })
     * ```
     *
     * @category Meeting Actions
     */
    getMeetingUUID(): Promise<GetMeetingUUIDResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * Tells the client to expand to the larger size or collapse it back to the default app UI size.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.expandApp({
     *  action: 'expand' | 'collapse',
     * })
     * ```
     *
     *
     * @category App Window
     */
    expandApp(options: ExpandAppOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 6.1.0
     * The API can only be called in meeting. Allows the App to communicate with the instance of the app running on the main client.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.connect()
     * ```
     *  *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10039       | Failed to connect with the app in main client.                                                                                  |
     * @category App Instances Communication
     */
    connect(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 6.1.0
     * Send a message with the current state of the mirrored app. The structure of the payload depends on the needs of the app.
     *
     * Payload limit is <512KB
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.postMessage({ JSON })
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10041       | Failed to do this action because app instances aren’t connected.                                                                |
     | 10038       | Failed to post message to connect app.                                                                                          |
     * @category App Instances Communication
     */
    postMessage(options: JSONObject): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.7.3
     * @zoomIOSClientVersion 6.1.0
     * Tells the client to end the data communication between connected apps. Note that the client will close the connection between the apps when endSyncData is called or 10 seconds after the onMeeting event with event.action == 'ended' is received, whichever comes first.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.endSyncData()
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10041       | Failed to do this action because app instances aren’t connected.                                                                |
     | 10053       | This API can only be used after meeting ends.                                                                                   |
     * @category App Instances Communication
     */
    endSyncData(): Promise<void>;
    /**
     * @zoomDesktopClientVersion 5.8.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Allow a specific participant to start a local recording. This API will trigger a pop-up consent dialog in the client to let the host allow or not allow.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * This API is not available in webinars.
     *
     * This API requires `participantUUID`
     *
     * ```
     * await zoomSdk.allowParticipantToRecord({
     *   participantUUID: 'xxxx',
     *   action: "grant"
     * })
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10048       | Failed to allow participant to record                                                                                           |
     | 10050       | The participant already has permission to do local recording.                                                                   |
     | 10051       | Invalid user or can’t perform action on this user.                                                                              |
     | 10052       | The participant doesn’t have the permission to do local recording. There’s no need to revoke.                                   |
     | 10055       | Local record feature is disabled, please check your web settings.                                                               |
     | 10061       | Only the host can perform this action.                                                                                          |
     *
     * @category Recording
     */
    allowParticipantToRecord(options: AllowParticipantToRecordOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.8.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Starts a new meeting or joins an existing meeting and launches the app in the meeting.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.launchAppInMeeting({ joinURL: 'xxx' })
     * ```
     * |                      | with joinURL  |	without joinURL|
     * | -------------------- | ------------- | -------- |
     * | inMainClient |	Joins meeting associated with the `joinURL` and launches app in it | Starts a new meeting and launches app in it |
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10054       | This API can only be used in the main client.                                                                                   |
     | 10058       | Launch app in meeting failed.                                                                                                   |
  
     * @category Core
     */
    launchAppInMeeting(options?: LaunchAppInMeetingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.7.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Shows client participant selection dialog window for sending an app invitation.
     *
     * Triggers client built in participant selection UI, so that apps running in non-owner context that do not have screen names can invite specific users.
     *
     * From Desktop client version 5.16.10 showAppInvitationDialog accepts optional parameters to customize invitation.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.showAppInvitationDialog();
     * ```
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10257       | DialogHeading is more than 40 characters.                                                                                       |
     | 10258       | MessageText is more than 90 characters.                                                                                         |
     * @category Invitations & Notifications
     */
    showAppInvitationDialog(options?: ShowAppInvitationDialogOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.7.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Sends invitation of current app to the meeting owner (person who scheduled the meeting).
     *
     * Sends app invitations specifically to the meeting owner. Sent to both meeting & persistent chat when the meeting owner is in the meeting. Sent to persistent chat when the meeting owner is not in the meeting that might be ongoing.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.sendAppInvitationToMeetingOwner();
     * ```
     *
     * @category Invitations & Notifications
     */
    sendAppInvitationToMeetingOwner(): Promise<AppInvitationResponse>;
    /**
     * @zoomDesktopClientVersion 5.7.6
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Sends invitation for the current app to all participants currently in the meeting.
     *
     * In breakout rooms, this will only send invitations to participants within the current room.
     *
     * This API may behave differently depending on the in-meeting chat setting enabled by the host for the meeting participants. The meeting host can determine whether meeting participants can chat with: No one, Hosts and Co-Hosts, Everyone, Everyone and Anyone directly.
     *
     *  *Supported roles*: Host, Co-Host, Participant
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.sendAppInvitationToAllParticipants()
     * .then(function(){
     *  // success
     * })
     * .catch(function(error){
     *  // there was an error
     * })
     * ```
     *
     * @category Invitations & Notifications
     */
    sendAppInvitationToAllParticipants(): Promise<AppInvitationResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * Changes the app's rendering context from the meeting sidebar to the main meeting window, with behavior defined by the specified view option.
     * Only a meeting host may invoke an immersive `runRenderingContext`. To transition other meeting participants to an immersive view, the meeting host’s app must use the `sendAppInvitationToAllParticipants` API.
     *
     * *Warning*: Only one app instance can create an `immersive` rendering context at a time. If another attempts to, it will fail with an error.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.runRenderingContext({
     *     view: 'immersive'
     * })
     * ```
     *
     * @category Layers
     */
    runRenderingContext(options: RunRenderingContextOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * Returns the rendering context of the app to the sidebar.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.closeRenderingContext()
     *    .then(() => {
     *         console.log("closeRenderingContext returned");
     *    })
     *    .catch((e) => {
     *       console.log(e);
     *    });
     * ```
     *
     * @category Layers
     */
    closeRenderingContext(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * The `drawParticipant` method can be used to specify the position and size of a partipant on the screen when in `camera` or `immersive` rendering context. The `participantUUID` option can be filled with the value from `getMeetingParticipants` or `getUserContext`.
     *
     * When `cameraModeMirroring` option is set to true, the participant will be streamed as mirrored in both the `local` client `and` to `other` participants. This option is only available in `camer mode`. Furthermore, none of the layers except of the participant layer can be mirrored in camera mode.
     *
     *  added in desktop client version 5.13.5
     * `cameraModeMirroring` defaults to false.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.drawParticipant({
     *     participantUUID: 'xxx',
     *     x: 0, y: 0, width: 1280, height: 720, zIndex: 1,
     *     cameraModeMirroring: true;
     * })
     * .then((ctx) => {
     *     console.log("drawParticipant returned", ctx);
     * })
     * .catch((e) => {
     *     console.log(e);
     * });
     * ```
     *
     * **Notes**
     * - The `getMeetingParticipants()` API is only available to the meeting host. When multiple participants are each using the same Layers app for a meeting, app-specific messaging may be used to communicate the participants list to other meeting attendees.
     * - Drawing a participant’s video that is already being drawn moves it to the new location.
     * - If the participant isn’t sending video, a fallback will be used. Fallbacks are tried in the following order: user avatar, telephone icon (if applicable), CRC icon (if applicable), user name.
     *
     * @category Layers
     */
    drawParticipant(options: DrawParticipantOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * Clears the content set by drawParticipant.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.clearParticipant({
     *    participantUUID: 'xxx'
     * })
     * .catch((e) => {
     *    console.log(e);
     * });
     * ```
     *
     * @category Layers
     */
    clearParticipant(options: ClearParticipantOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * Draws an image in the rendering context's canvas.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.drawImage({
     *    imageData: <ImageData (includes width/height properties)>,
     *    x: 0, y: 0, zIndex: 3
     * })
     * .then((ctx) => {
     *    console.log("drawImage returned", ctx);
     * })
     * .catch((e) => {
     *    console.log(e);
     * });
     * ```
     *
     * *Notes*
     *
     * Drawing an image with the same `x` / `y` / `zIndex` / `width` / `height` as an existing image replaces the previous image and may return the same imageId.
     *
     * In order to move an image, use `clearImage` first, and then redraw the image in the intended position.
     *
     * @category Layers
     */
    drawImage(options: DrawImageOptions): Promise<DrawImageResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * Clears the content set by drawImage.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.clearImage({
     *    imageId: 'xxx'
     * })
     * .catch((e) => {
     *    console.log(e);
     * });
     * ```
     *
     * @category Layers
     */
    clearImage(options: ClearImageOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.10.6
     * Draws the OSR webview with the specified size, location and zIndex [Layers Camera Mode].
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.drawWebView({
     *   x: 0,
     *   y: 0,
     *   width: 1280,
     *   height: 720,
     *   zIndex: 2
     * })
     * .catch((e) => {
     *    console.log(e);
     * });
     * ```
     *
     * @category Layers
     */
    drawWebView(options: DrawWebViewOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.10.6
     * Clears the content set by drawWebView. [Layers Camera Mode].
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.clearWebView()
     * .catch((e) => {
     *    console.log(e);
     * });
     * ```
     *
     * @category Layers
     */
    clearWebView(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * This event occurs when the user clicks the share icon from the Zoom App sidebar during a meeting, and when the user stops the share.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category Sharing
     */
    onShareApp(handler: GenericEventHandler<OnShareAppEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * This event occurs when the user clicks the invite icon from the Zoom App sidebar during a meeting. All attendees and participants receive an invitation. The sender receives an event.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * @category Invitations & Notifications
     */
    onSendAppInvitation(handler: GenericEventHandler<OnSendAppInvitationEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * The cloud recording events occur when a user starts, pauses, stops or resumes recording a Zoom meeting (where your app is being run) to the cloud using the Zoom UI or programmatically using the JS APIs. Additionally, the `"connecting"` event action will be trigered prior to the start of a cloud recording.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * @category Recording
     */
    onCloudRecording(handler: GenericEventHandler<OnCloudRecordingEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.15.0
     * This event occurs when a meeting participant sends a reaction.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * @category Reactions
     */
    onReaction(handler: GenericEventHandler<OnReactionEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * This event is triggered when a user joins or leaves a meeting or when a participant's role changes for that meeting.
     *
     * **Note** The event triggers twice in some situations, such as when a participant leaves a meeting with one role and rejoins the meeting with a new role. The participantUUID of the user might change when the role changes.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * @category Meeting Actions
     */
    onParticipantChange(handler: GenericEventHandler<OnParticipantChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * This event occurs when the active speaker changes in a meeting. The response array contains all active speakers.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * @category Meeting Actions
     */
    onActiveSpeakerChange(handler: GenericEventHandler<OnActiveSpeakerChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * Added support for inContactCenter in zoomDesktopClientVersion 6.2.5
     * This event occurs when the popout/pop-in button is clicked on the app window.
     *
     *  *Running context*: inMeeting, inCollaborate, inCamera, inWebinar, inMainClient, inContactCenter
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category App Window
     */
    onAppPopout(handler: GenericEventHandler<OnAppPopoutEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * Notifies app when the client expands or collapses the app.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category App Window
     */
    onExpandApp(handler: GenericEventHandler<OnExpandAppEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.4.5
     *
     * Notifies app when its visibility changes.
     *
     * *Running context*: inMail, inMeeting, inMainClient, inWebinar, and inPhone
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: N/A
     *
     * *Product*: desktop
     *
     * @category App Window
     */
    onAppVisibilityChange(handler: GenericEventHandler<OnAppVisibilityChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 6.1.0
     * In order to maintain state after a meeting, the instance of the app that is running in the meeting must communicate with the instance of the app running in the main client. The following events facilitate that process.
     *
     * Notify the event listener when the API call `connect` has finished attempting to connect to the app instance running in the main client. This event can only be received in meeting.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category App Instances Communication
     */
    onConnect(handler: GenericEventHandler<OnConnectEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * @zoomIOSClientVersion 6.1.0
     * In order to maintain state after a meeting, the instance of the app that is running in the meeting must communicate with the instance of the app running in the main client. The following events facilitate that process.
     *
     * Receive a sent message from the mirrored app. The structure of the payload depends on the needs of the app.
     *
     * *Updated in Desktop Client Version 5.15.5*: This event triggers when `sendMessage` is invoked on another participant's app instance, and receives the JSON data message payload sent. See `sendMessage` documentation for more information regrading message delivery guarantees.
     *
     * *Running context*: inMeeting, inWebinar, inMainClient, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * @category App Instances Communication
     */
    onMessage(handler: GenericEventHandler<OnMessageEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.6.7
     * In order to maintain state after a meeting, the instance of the app that is running in the meeting must communicate with the instance of the app running in the main client. The following events facilitate that process.
     *
     * Meeting is closed, then notify the mirrored app and update state one more time.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * @category App Instances Communication
     */
    onMeeting(handler: GenericEventHandler<OnMeetingEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.8.6
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.5
     * The event is triggered when any change happens to breakout rooms configuration. This method informs the app when the host changes the configuration manually, or when another app changes the configuration.
     *
     * The event does not provide detailed information about the specific change, so the app needs to make an additional API request to retrieve the updated data.
     *
     *  *Supported roles*: Host, Co-Host, Participant
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category Breakout Rooms
     */
    onMeetingConfigChanged(handler: GenericEventHandler<onMeetingConfigChangedEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.8.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.5
     * Notifies Zoom App when a user leaves or joins a breakout room.
     *
     *  *Supported roles*: Host, Co-Host, Participant
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category Breakout Rooms
     */
    onBreakoutRoomChange(handler: GenericEventHandler<OnBreakoutRoomChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.10.0
     * The event is triggered when changes such as start, end, leave, join happen in Collaborate mode or end sidecar collaboration. This method informs the app when the host or co-hosts start or end a collaboration, and when meeting participants leave or join a collaboration.
     *
     * The event is applicable to users based on their role in the meeting. For participants, the join and leave actions will apply. For hosts and co hosts, the start and end actions will apply. The event does not provide detailed information about the specific change, so the app needs to make an additional API request to retrieve the updated data.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * @category Collaborate
     */
    onCollaborateChange(handler: GenericEventHandler<OnCollaborateChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.1.5
     *  Runs a side-car webview instance of the app, with home URL of the app loaded by default.
     *
     *  *Supported roles*: Host, Co-Host, Participant
     *
     *  *Supports Guest Mode*: No
     *
     *  *Product*: desktop
     *
     *  *Running context*: inCollaborate
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10283       | API is not supported in collaborateSidecar.                                                                                     |
     | 10284       | API is not support in guest mode.                                                                                               |
     | 10285       | JsCall already  in pending.                                                                                                     |
     | 10287       | API is not supported in system browser collaboration.                                                                           |
     *
     * @category Collaborate
     */
    startCollaborateSidecar(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.1.5
     *  Ends the side-car webview instance of the app.
     *
     *  *Supported roles*: Host, Co-Host, Participant
     *
     *  *Supports Guest Mode*: No
     *
     *  *Product*: desktop
     *
     *  *Running context*: inCollaborate, inCollaborateSidecar
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10282       | App is not in the inCollaborate or inCollaborateSidecar running contexts.                                                       |
     *
     * @category Collaborate
     */
    endCollaborateSidecar(): Promise<GeneralMessageResponse>;
    /**
     *  @zoomDesktopClientVersion 5.10.0
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * @category Collaborate
     */
    onRunningContextChange(handler: GenericEventHandler<OnRunningContextChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.7.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.5
     * Notifies Zoom App when current user reacts with a reaction in a meeting.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: No
     *
     * @category Reactions
     */
    onMyReaction(handler: GenericEventHandler<OnMyReactionEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.7.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Notifies Zoom App when current user starts or stops speaking.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * @category Meeting Actions
     */
    onMyActiveSpeakerChange(handler: GenericEventHandler<OnMyActiveSpeakerChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.7.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * This event is triggered when the current user’s role changes.
     *
     * `onMyUserContextChange` will be available to apps regardless of whether the app user is an owner, host or attendee in a meeting, but would only provide data for the user that’s running the app (and not the other participants in the meeting).
     *
     * IMPORTANT: Some changes to user context (for example, change to status following `onMyUserContextChange`), will require the application to configure again, by invoking `config` once more.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category Meeting Actions
     */
    onMyUserContextChange(handler: GenericEventHandler<OnMyUserContextChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * @zoomZRCVersion 5.14.0
     * @zoomAndroidClientVersion 5.14.0
     * Notifies the app when the current user's video settings change, when it’s toggled on or off, and when the audio is muted or unmuted.
     *
     * For example, when the user chooses a different camera, mutes or unmutes their primary audio, or toggles: "Original ratio", "HD" in video settings, or primary camera on or off.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * @category Meeting Actions
     */
    onMyMediaChange(handler: GenericEventHandler<OnMyMediaChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.5
     * Notifies the third-party app that the user has finished the in-client OAuth.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Supports Guest Mode*: No
     *
     * @category Auth
     */
    onAuthorized(handler: GenericEventHandler<OnAuthorizedEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.13.5
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.13.5
     * @zoomAndroidClientVersion 5.14.0
     * This event triggers when a user in the meeting starts or stops sharing their screen.
     *
     * *Supported roles*: Host, Co-Host, Panelist, Participant, and Attendee
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Product*: desktop, zoomRoomController
     *
     * *Supports Guest Mode*: Yes
     *
     * @category Meeting Actions
     */
    onShareScreen(handler: GenericEventHandler<OnShareScreenEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.13.5
     * @zoomZRCVersion 5.14.0
     * This event triggers when a user in the meeting starts or stops sharing their computer audio or screen with audio.
     *
     *  *Supported roles*: Host, Co-Host, Panelist, Participant, and Attendee
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Product*: desktop, zoomRoomController
     *
     * *Supports Guest Mode*: Yes
     *
     * @category Meeting Actions
     */
    onShareComputerAudio(handler: GenericEventHandler<OnShareComputerAudioEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.9.3
     * The event triggers when the user closes the app for participants. It is only triggered for the user who performed the action. Example: The host uses an app to poll participants. When the host closes the app for participants, the app displays the results.
     *
     *  *Supported roles*: Host, Co-Host, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     *  Usage:
     * ```
     * zoomSdk.onCloseAppForParticipants((event) => {
     *   console.log(event)
     * });
     * ```
     *
     * - `everyone`: App closes for all users, including the current user.
     * - `attendees`: App closes for only attendees.
     * - `everyoneButMe`: App closes for everyone except the current user.
     *
     * @category Meeting Actions
     */
    onCloseAppForParticipants(handler: GenericEventHandler<'everyone' | 'attendees' | 'everyoneButMe'>): void;
    /**
     * @zoomDesktopClientVersion 5.11.0
     * @hidden
     *
     * Notifies the inMeeting instance of an app that a second instance of the app has been opened in the meeting for Layers API related rendering purposes.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category Utility
     */
    onRenderedAppOpened(handler: GenericEventHandler<OnRenderedAppOpenedEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.13.5
     * @zoomIOSClientVersion 5.13.5
     *
     * Event triggered when a participant triggers a feedback.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * @category Reactions
     */
    onFeedbackReaction(handler: GenericEventHandler<OnFeedbackReactionEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.13.5
     * @zoomIOSClientVersion 5.13.5
     *
     * Event triggered when subscribed participant removes a feedback.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * @category Reactions
     */
    onRemoveFeedbackReaction(handler: GenericEventHandler<OnRemoveFeedbackReactionEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.12.6
     * @zoomIOSClientVersion 5.12.6
     * Notifies the app about the incoming audio status change for the participants.
     *
     * *Running context*: inMeeting
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * @category Meeting Actions
     */
    onIncomingParticipantAudioChange(handler: GenericEventHandler<OnIncomingParticipantAudioChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.13.10
     *
     * Triggers when the user changes their gallery view page or `setGalleryPage` method is fired.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * @category Meeting Views
     */
    onGalleryPageChange(handler: GenericEventHandler<OnGalleryPageChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.14.5
     *
     * Event triggers when participants order in the gallery is changed (could be triggered by new people joining the meeting, reactions, spotlighting, host changing order and pushing it to others)
     *
     * *Running context*:  inMeeting, inImmersive, inWebinar, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * @category Meeting Views
     */
    onGalleryOrder(handler: GenericEventHandler<OnGalleryOrderEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.13.10
     * @zoomIOSClientVersion 5.14.10
     * @zoomAndroidClientVersion 5.14.5
     *
     * Fired when a photo is successfully taken. For non-hosts only returns the result of takeMyPhoto.
     *
     * *Running context*: inMeeting, inWebinar, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * @category Meeting Actions
     */
    onPhoto(handler: GenericEventHandler<OnPhotoEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.2.5
     *
     * The event is triggered and sent to the 3rd party app when the value of any selected variable changes.
     *
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *product*: desktop, pwa
     *
     * @category Zoom Contact Center
     */
    onEngagementVariableValueChange(handler: GenericEventHandler<onEngagementVariableValueChangeEvent>): void;
    /**
     * Low-level method used to register event handlers in the SDK. This is useful because it allows you to use new events in the client without needing to update the JS SDK. You can register multiple listeners per event.
     *
     * @category Utility
     */
    addEventListener(event: `${NativeEvents}`, handler: (data: any) => any): void;
    /**
     * Use this method to remove a previously registered listener.
     *
     * Note that the removeEventListener method requires that you registered a named listener function. If you use an anonymous function, you will not be able to remove it using this method.
     *
     * @category Utility
     */
    removeEventListener(event: `${NativeEvents}`, handler: (data: any) => any): void;
    /**
     * Alias for {@link ZoomSdk.addEventListener}
     *
     * @category Utility
     */
    on(event: `${NativeEvents}`, handler: (data: any) => any): void;
    /**
     * Alias for {@link ZoomSdk.removeEventListener}
     *
     * @category Utility
     */
    off(event: `${NativeEvents}`, handler: (data: any) => any): void;
    /**
     * @zoomDesktopClientVersion 5.8.6
     * Deletes all existing breakout rooms and creates new ones. Response is same as getBreakoutRoomList.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10122       | Bo count and the name size do not match.                                                                                        |
     | 10095       | The count is over the max count.                                                                                                |
     | 10096       | The assignment type is incorrect.                                                                                               |
     | 10097       | Create Breakout Room failed.                                                                                                    |
     * @category Breakout Rooms
     */
    createBreakoutRooms(options: CreateBreakoutRoomsOptions): Promise<BreakoutRoomsResponse>;
    /**
     * @zoomDesktopClientVersion 5.8.6
     * Change breakout room settings.
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * **Note:** Each parameter is optional. If the parameter is missing, the related setting is not changed.
     *
     * Response is a JSON object with information about the current configuration.
     *
     * Example
     * ```
     * {
     *  "allowParticipantsChooseRoom": true,
     *  "allowParticipantsReturnToMainSession": true,
     *  "automaticallyMoveParticipantsIntoRooms": true,
     *  "closeAfter": 1,
     *  "countDown": 60
     *  "automaticallyMoveParticipantsIntoMainRoom": false
     * }
     * ```
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10099       | Config Breakout Room failed.                                                                                                    |
     * @category Breakout Rooms
     */
    configureBreakoutRooms(options: ConfigureBreakoutRoomsOptions): Promise<ConfigureBreakoutRoomsResponse>;
    /**
     * @zoomDesktopClientVersion 5.8.6
     * Open breakout rooms.
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10121       | Breakout Rooms are already open.                                                                                                |
     | 10100       | Start Breakout Rooms failed.                                                                                                    |
     * @category Breakout Rooms
     */
    openBreakoutRooms(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.8.6
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.5
     * Close breakout rooms.
     *
     *  *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10092       | Breakout Rooms are not open.                                                                                                    |
     | 10101       | End Breakout Rooms failed.                                                                                                      |
     *
     * @category Breakout Rooms
     */
    closeBreakoutRooms(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.5
     * List all breakout rooms. Host and Co-Host get list of rooms and participants for each breakout room. Participants get only list of rooms. The method works for participants only when breakout rooms are open.
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * Example payload
     * ```
     * {
     *   rooms: [{
     *     breakoutRoomId: "room uuid",
     *     name: "room name",
     *     participants: [{
     *       participantUUID,
     *       displayName,
     *       participantStatus = ["assigned"|"joined"]
     *     }, …],
     *     state = [“open”|”closed”],
     *     unassigned:  [{
     *       participantUUID,
     *       displayName
     *     }, …]
     *   }]
     * }
     * ```
     * Returns an array of breakout rooms with their names, UUID, and an array of participant id's.
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10092       | Breakout Rooms are not open.                                                                                                    |
     * @category Breakout Rooms
     */
    getBreakoutRoomList(): Promise<BreakoutRoomsResponse>;
    /**
     * @zoomDesktopClientVersion 5.8.6
     * Add one more breakout room. This method is allowed only when breakout rooms are closed. Returns UUID of newly created breakout room.
     *
     *  *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10095       | The count is over the max count.                                                                                                |
     | 10098       | Update Breakout Room failed.                                                                                                    |
     * @category Breakout Rooms
     */
    addBreakoutRoom(options: AddBreakoutRoomOptions): Promise<Uuid>;
    /**
     * @zoomDesktopClientVersion 5.8.6
     * Delete one breakout room. This method is allowed only when breakout rooms are closed.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10102       | Delete Breakout Room failed.                                                                                                    |
     | 10093       | The id of the Breakout room is incorrect.                                                                                       |
     *
     * @category Breakout Rooms
     */
    deleteBreakoutRoom(options: Uuid): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.8.6
     * Renames a breakout room. This method is allowed only when breakout rooms are closed.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10093       | The id of the Breakout room is incorrect.                                                                                       |
     | 10091       | Can not edit the Breakout Room.                                                                                                 |
     | 10098       | Update Breakout Room failed.                                                                                                    |
     * @category Breakout Rooms
     */
    renameBreakoutRoom(options: RenameBreakoutRoomOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.9.0
     * Assigns a participant to a breakout room (other than the host / co-host). Only one user assigned per call. For open breakout rooms, the method triggers a user flow to join the room.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * **Note:**
     *
     * - assignParticipantToBreakoutRoom cannot be executed while the current user is changing rooms.
     * - To assign yourself (as host / co-host) to a breakout room, use method changeBreakoutRoom.
     *
     *  *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10075       | The participant ID is error, please get the newest participant ID.                                                              |
     | 10078       | Participant is not in Breakout Room.                                                                                            |
     | 10103       | Assign user to Breakout Room failed.                                                                                            |
     | 10094       | The id of the user is incorrect.                                                                                                |
     | 10093       | The id of the Breakout room is incorrect.                                                                                       |
     * @category Breakout Rooms
     */
    assignParticipantToBreakoutRoom(options: AssignParticipantToBreakoutRoomOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.8.6
     * @zoomAndroidClientVersion 5.14.5
     * Called by a host / co-host / participant. Allows single participant user to join or leave a breakout room.
     *
     *  *Supported roles*: Host, Co-Host, Participant
     *
     *  *Supports Guest Mode*: Yes
     *
     * **Note:**
     * 1. Rooms need to be open
     * 2. To use this method, rooms must be configured to allow participant to choose rooms (`allowParticipantsToChooseRoom=true` when using `configureBreakoutRooms`)
     * 3. This method returns `success` when changing breakout rooms is initiated, but the transition for the user might not be completed in some scenarios. Use `onBreakoutRoomChange` to confirm successful transition. If the event doesn’t fire, repeat `changeBreakoutRoom` call
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10092       | Breakout Rooms are not open.                                                                                                    |
     | 10093       | The id of the Breakout room is incorrect.                                                                                       |
     * @category Breakout Rooms
     */
    changeBreakoutRoom(options: ChangeBreakoutRoomOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.10.0
     * Starts Collaborate mode in a meeting. Can be initiated by host, co-host, participant. Use the optional shareScreen parameter to opt out of sharing the Host’s app screen with participants as a preview or when participants ignore the Collaborate invite.
     *
     *  *update*: API is extended to Participant from desktop client version 5.12.6
     *
     *  *Supported roles*: Host, Co-Host, Participant
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.startCollaborate(
     *   { "shareScreen": true || false }   // default true}(Host / Co-Host)
     * ).then(function(response) {})
     *  .catch(function(error) {
     *     // handle error
     *   })
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10084       | The app is in collaborate mode.                                                                                                 |
     | 10090       | Collaboration isn't supported in webinar and breakout meeting.                                                                  |
     | 10089       | This app cannot support collaborate mode.                                                                                       |
     * @category Collaborate
     */
    startCollaborate(options: StartCollaborateOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.10.0
     * Ends Collaborate mode in a meeting. Can be initiated by hosts or co-hosts.
     *
     *  *update*: API is extended to Participant from desktop client version 5.12.6
     *
     *  *Supported roles*: Host, Co-Host, Participant
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.endCollaborate()
     *  .then(function(response) {}) // (Host / Co-Host)
     *  .catch(function(error) {
     *     // handle error
     *  })
     * ```
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10087       | you aren‘t in collaborate mode.                                                                                                 |
     | 10088       | You can only end collaboration.                                                                                                 |
     | 10085       | The app isn't in collaborate mode.                                                                                              |
     *
     * @category Collaborate
     */
    endCollaborate(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.10.0
     * Leave Collaborate mode. Can be initiated by participants in a meeting who are currently in Collaborate mode.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.leaveCollaborate()
     *  .then(function(response) {}) // (other participant)
     *  .catch(function(error) {
     *     // handle error
     *  })
     * ```
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10087       | you aren‘t in collaborate mode.                                                                                                 |
     | 10085       | The app isn't in collaborate mode.                                                                                              |
     * @category Collaborate
     */
    leaveCollaborate(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.10.0
     * Join Collaborate mode. Can be initiated by participants in a meeting when they are invited to collaborate.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.joinCollaborate()
     *  .then(function(response) {}) // (other participant)
     *  .catch(function(error) {
     *     // handle error
     *  })
     * ```
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10086       | you are already in collaborate mode.                                                                                            |
     | 10085       | The app isn't in collaborate mode.                                                                                              |
     * @category Collaborate
     */
    joinCollaborate(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.10.0
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.5
     *
     * This method is part of in-client OAuth feature. It initiates on OAuth authorization request from the Zoom Client - Zoom Apps tab - to the Zoom marketplace.
     *
     * Invoke the `authorize` method with PKCE codeChallenge and optional state:
     * * If the app's scopes are authorized by the user, it starts a non-interactive OAuth flow, completely invisible to the user.
     * * If the app's scopes have changed or added, it goes to the in-client consent screen, and the user is prompted to reauthorize the app's scope.
     *
     * **Notes**
     * The application must create a cryptographically secure string for OAuth2.0 code verifier, which is used to generate the challenge.
     *
     * Upon user authorization, an `onAuthorized` event is triggered with an authorization code. You have to add an event listener for this event to get authorization code.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.authorize({
     *    state: 'TIA5UgoM38',
     *    codeChallenge: 'o0qAEF...'
     * }).then((ret) => {
     *    console.log(ret);
     * }).catch((e) => {
     *    console.log(e);
     * })
     * ```
     * @category Auth
     */
    authorize(options: AuthorizeOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.10.6
     * @zoomIOSClientVersion 5.14.0
     * @zoomAndroidClientVersion 5.14.5
     * Triggers a contextual prompt for the user to sign in with Zoom (if the user context status is not "authenticated"), or add the app (if the user context status is "authenticated"). The prompt is asynchronous and non-blocking, users can continue using the app while it is visible, or close the prompt.
     *
     * If user context is "unauthenticated", Zoom does not know the user, and only some Zoom APIs are allowed. Invoking `promptAuthorize` will ask the user to log in to Zoom, upon which user context status will update to "authenticated".
     *
     * If user is authenticated, but they have not yet added the app and/or consented to app scopes, invoke `promptAuthorize` once more to ask the authenticated user to consent and add the app.  This will invoke the in-client OAuth flow and update user context status to "authorized".
     *
     * IMPORTANT: Calling `promptAuthorize` will update user context status, per the states noted above.  You MUST reconfigure the application upon user context status change, by re-calling the config method. The recommended approach is to listen for the `onMyUserContextChange` event and invoke `config` once more if the user context status has changed.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.promptAuthorize()
     * .then((res) => console.log(res))
     * .catch((err) => console.log(err))
     *
     * ```
     * @category Auth
     */
    promptAuthorize(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.11.6
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.11.6
     * @zoomAndroidClientVersion 5.14.0
     * Turn on or off the primary video.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * @category Meeting Actions
     */
    setVideoState(options: SetVideoStateOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.11.6
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.11.6
     * @zoomAndroidClientVersion 5.14.0
     * Mute or unmute the primary audio.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * @category Meeting Actions
     */
    setAudioState(options: SetAudioStateOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.11.6
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.11.6
     * @zoomAndroidClientVersion 5.14.0
     * Gets the on or off status of the primary video.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * @category Meeting Actions
     */
    getVideoState(): Promise<GetVideoStateResponse>;
    /**
     * @zoomDesktopClientVersion 5.11.6
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.11.6
     * @zoomAndroidClientVersion 5.14.0
     * 	Gets the mute or unmute status of the primary audio.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * @category Meeting Actions
     */
    getAudioState(): Promise<GetAudioStateResponse>;
    /**
     * @zoomDesktopClientVersion 5.10.3
     * @zoomIOSClientVersion 5.10.6
     * @zoomAndroidClientVersion 5.14.0
     * Allows hosts and co-hosts to mute and unmute all, or specific, meeting participants. The action doesn't affect the person initiating the request.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Confirmation / Consent moments*
     *
     * - ###### All participants
     * "[AppName] wants to unmute all participants" [Don’t Allow] [Allow]
     *
     * - ###### Single participant
     * "[AppName] wants to unmute this participant: [Screen name]" [Don’t Allow] [Allow]
     *
     * - ###### Multiple participants
     * "[AppName] wants to unmute these participants: [Screen name 1], [Screen name 2], [Screen name 3],…" [Don’t Allow] [Allow]
     *
     * ```
     * zoomSdk.toggleParticipantMediaAudio({
     *   "participantUUIDs":['participantUUID1','participantUUID2'....],
     *   "audio": true | false
     * })
     * .then((response) => { console.log(response); })
     * .catch((e) => { console.log(e); })
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10105       | Fail to mute or unmute all participants.                                                                                        |
     | 10106       | Fail to mute or unmute specific participants.                                                                                   |
     | 10107       | A maximum of 10 participants can be muted or unmuted at a time. Consider mute/unmute all instead!                               |
     | 10108       | Self participant is not allowed to include. Consider setAudioState instead!                                                 |
     | 10109       | This participant didn't join audio.                                                                                             |
     * @category Meeting Actions
     */
    toggleParticipantMediaAudio(options: ToggleParticipantMediaAudioOptions): Promise<GeneralMessageResponse>;
    /**
     * **Beta** API may undergo some changes
     * @zoomDesktopClientVersion 5.11.3
     * @zoomZRCVersion 5.14.0
     * @zoomIOSClientVersion 5.11.3
     * @zoomAndroidClientVersion 5.14.0
     *
     * This API returns app context token that contains signed app context data for secure backend validation.
     * See https://developers.zoom.us/docs/zoom-apps/zoom-app-context/ for more details.
     *
     * *Running context*: all
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.getAppContext()
     * .then((appContext) => console.log(appContext))
     * .catch((err) => console.log(err))
     * ```
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10118       | Failed to get app context                                                                                                       |
     * @category Core
     */
    getAppContext(): Promise<GetAppContextResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * Shares audio from my computer. Pass in an action to `start` or `stop` the share. Does not share the screen or app. `stereo`  is default `mode` option, optionally pass parameter to change to `mono`
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.shareComputerAudio({ action: start })
     * .then((response) => console.log(response)) // { message: success }
     * .catch((err) => console.log(err))
     * ```
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10129       | Computer audio share is disabled in this meeting.                                                                               |
     | 10130       | Computer audio share did not start in this meeting.                                                                             |
     | 10131       | Failed to share computer audio.                                                                                                 |
     | 10132       | Computer audio share is already started.                                                                                        |
     | 10137       | API call succeeded, the user must choose to stop ongoing share to begin share.                                                  |
     * @category Sharing
     */
    shareComputerAudio(options: ShareComputerAudioOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * Add one participant to the current spotlight, without overwriting the current set of participants in the spotlight.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Confirmation / Consent moments*: none
     *
     * ```
     * zoomSdk.addParticipantSpotlight({
     *   participantUUID: participantUUID1
     * })
     * .then((response) => { console.log(response); })
     * .catch((e) => { console.log(e); })
     *
     * ```
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10211	     | Spotlight feature is not available in this room	                                                                               |
     | 10212	     | Spotlighted user doesn’t have video                                                                                             |
     | 10230	     | Too many users spotlighted (maximum: 9) 	                                                                                       |
     | 10231	     | Spotlight feature is not available when number of panelists is less than 3 	                                                   |
     | 10232	     | Webinar attendees cannot be spotlighted	                                                                                       |
     * @category Meeting Actions
     */
    addParticipantSpotlight(options: AddParticipantSpotlightOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * Removes one or more participants from the current spotlight.
     *
     * When there is no array or empty array, it should remove all spotlights.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Confirmation / Consent moments*: none
     *
     * ```
     * zoomSdk.removeParticipantSpotlights({
     *   participantUUIDs: [participantUUID1, participantUUID2, ...]
     * })
     * .then((response) => { console.log(response); })
     * .catch((e) => { console.log(e); })
     *
     * ```
     * @category Meeting Actions
     */
    removeParticipantSpotlights(options: RemoveParticipantSpotlightsOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * Returns an array of participants who are currently in the spotlight.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Confirmation / Consent moments*: none
     *
     *  ```
     * zoomSdk.getParticipantSpotlights()
     * .then((response) => { console.log(response); })
     * .catch((e) => { console.log(e); })
     *
     * ```
     *
     * @category Meeting Actions
     */
    getParticipantSpotlights(): Promise<GetParticipantSpotlightsResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * The functionality of this API is to help add participants on a Zoom Meeting to pins.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.addParticipantPins( {participantUUIDs: [ participantUUID1, ... ], secondaryDisplay: true|false })
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10123       | User not permitted to pin multiple participants                                                                                 |
     | 10124       | Multi-pinning is not allowed on second screen                                                                                   |
     * @category Meeting Actions
     */
    addParticipantPins(options: ParticipantPinOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * The functionality of this API is to help remove participants on a Zoom Meeting from pins.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.removeParticipantPins( {participantUUIDs: [ participantUUID1, ... ], secondaryDisplay: true|false })
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * @category Meeting Actions
     */
    removeParticipantPins(options: ParticipantPinOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     * @zoomIOSClientVersion 5.12.6
     *
     * Enable participant to set their feedback reactions.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.setFeedbackReaction( { feedback: 'yes' } )
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10127       | Can not process the request. The feedback feature is disabled.                                                                  |
     | 10128       | Can not process the request. The feedback is not supported in a webinar.                                                        |
     * @category Reactions
     */
    setFeedbackReaction(options: FeedbackReactionOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     * @zoomIOSClientVersion 5.12.6
     *
     * Removes own feedback that is currently set.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.removeFeedbackReaction()
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     *
     * @category Reactions
     */
    removeFeedbackReaction(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     * @zoomIOSClientVersion 5.12.6
     *
     * Removes feedback of all participants in the meeting.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.removeAllFeedbackReaction()
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     *
     * @category Reactions
     */
    removeAllFeedbackReaction(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * This API permits Hosts and Co-Hosts to allow Webinar Attendees to speak.
     *
     * *Running context*: inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.allowAttendeesToSpeak( {participantUUIDs: [ participantUUID1, ... ]})
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10134       | Unable to allow attendee(s) to speak.                                                                                           |
     * @category Webinar-only Actions
     */
    allowAttendeesToSpeak(options: AttendeeSpeakingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * This API permits Hosts and Co-Hosts to disallow Webinar Attendees to speak.
     *
     * *Running context*: inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.disallowAttendeesToSpeak( {participantUUIDs: [ participantUUID1, ... ]})
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     *  *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10135       | Unable to disallow attendee(s) to speak.                                                                                        |
     * @category Webinar-only Actions
     */
    disallowAttendeesToSpeak(options: AttendeeSpeakingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * This API permits Hosts and Co-Hosts to eject Attendees from a Webinar.
     *
     * *Running context*: inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * ```
     * zoomSdk.removeWebinarAttendees( {participantUUIDs: [ participantUUID1, ... ]})
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10133       | Unable to remove webinar attendees.                                                                                             |
     * @category Webinar-only Actions
     */
    removeWebinarAttendees(options: RemoveWebinarAttendeeOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.0
     *
     * Get Contextual Chat Context. If App is launched from Message ellipsis, method should return the message from where it is launched.
     *
     * *Supported roles*: N/A
     *
     * *Running context*: inChat
     *
     * *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.getChatContext()
     * ```
     * @category Chat
     *
     */
    getChatContext(): Promise<GetChatContextResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.0
     *
     * Sends Interactive message and its preview to user’s compose box in chat context. When user posts the card, actual content of the message will be rendered as interactive message
     *
     * *Supported roles*: N/A
     *
     * *Running context*: inChat
     *
     * *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.composeCard({
     *  "type": "interactiveCard",
     *  "message": "some message",
     *  "signature": "some signature",
     *  "timestamp": "some timestamp",
     *  "previewCard": "stringified object"  // { "title": "some title", "description":"some description" }
     * })
     * ```
     *
     * @category Chat
     *
     */
    composeCard(options: ComposeCardOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * The functionality of this API is to retrieve incoming speaker audio status for all or selected participants.
     *
     * *Running context*: inMeeting
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.getIncomingParticipantAudioState({participantUUIDs: [ participantUUID1, ... ]})
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * Response is an array of participantUUIDs and their respective audio state.
     * Example:
     *```
     * {“participants": [{"participantUUID": "participantUUID1", "audio": "true"},...]}
     * ```
     *
     * @category Meeting Actions
     */
    getIncomingParticipantAudioState(options: GetIncomingParticipantAudioStateOptions): Promise<GetIncomingParticipantAudioStateResponse>;
    /**
     * @zoomDesktopClientVersion 5.12.6
     *
     * The functionality of this API is to toggle on/off incoming speaker audio for all or selected participants.
     *
     * *Running context*: inMeeting
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * zoomSdk.setIncomingParticipantAudioState({participantUUIDs: [ participantUUID1, ... ], audio: true|false})
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10119       | A maximum of 10 participants' speakers can be locally turned on/off at a time. Consider it for all participants instead!        |
     | 10120       | Failed to set incoming speaker audio for participants.                                                                          |
     * @category Meeting Actions
     */
    setIncomingParticipantAudioState(options: SetIncomingParticipantAudioStateOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.0
     * @zoomZRCVersion 5.15.0
     *
     * Change user's video settings
     *
     * The API is available in inMainClient running context from client version 5.13.5
     *
     * **Note:** At least one parameter is required. The API only changes the values that are passed in
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Running context*: inMainClient, inMeeting, inImmersive, inWebinar, inCollaborate, inCamera
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.setVideoSettings({hdVideo: true})
     * ```
     *
     * @category Meeting Actions
     */
    setVideoSettings(options: SetVideoSettingsOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.0
     * @zoomZRCVersion 5.15.0
     * @zoomIOSClientVersion 5.13.0
     *
     * Retrieves the user’s current video settings . The API retrieves only the video settings that can be changed by setVideoSettings
     *
     * The API is available in inMainClient running context from client version 5.13.5
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Running context*: inMainClient, inMeeting, inImmersive, inWebinar, inCollaborate, inCamera
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     *  await zoomSdk.getVideoSettings()
     * ```
     * @category Meeting Actions
     */
    getVideoSettings(): Promise<GetVideoSettingsResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.0
     * @zoomZRCVersion 5.15.0
     *
     * Changing a user’s audio settings
     *
     * The API is available in inMainClient running context from client version 5.13.5
     *
     * **Note:** At least one parameter is required. The API only changes the values that are passed in
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Running context*: inMainClient, inMeeting, inImmersive, inCollaborate, inCamera, inWebinar
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.setAudioSettings({originalSound: true})
     * ```
     *
     * @category Meeting Actions
     */
    setAudioSettings(options: SetAudioSettingsOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.0
     * @zoomZRCVersion 5.15.0
     * @zoomIOSClientVersion 5.13.0
     *
     * Retrieves the current audio settings of the user. It retrieves only the audio settings that can be changed by setAudioSettings
     *
     * The API is available in inMainClient running context from client version 5.13.5
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Running context*: inMainClient, inMeeting, inImmersive, inCollaborate, inCamera, inWebinar
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop
     *
     * ```
     * await zoomSdk.getAudioSettings()
     * ```
     * @category Meeting Actions
     */
    getAudioSettings(): Promise<GetAudioSettingsResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.5
     * @zoomIOSClientVersion 5.14.0
     * @zoomAndroidClientVersion 5.15.0
     *
     * Called by any participant to open the share screen modal.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, and Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop
     *
     * ```
     * await zoomSdk.promptShareScreen()
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10143       | Failed to prompt share screen.                                                                                                  |
     | 10186	     | Only host and co-host can share screen to breakout rooms	                                                                       |
     | 10187	     | Breakout rooms are not open	                                                                                                   |
     * @category Sharing
     */
    promptShareScreen(options?: PromptShareScreenOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.10
     * @zoomIOSClientVersion 5.14.5
     *
     * Called by any participant to open the invite-people modal.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-host, Panelist, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop, Mobile
     *
     * ```
     * await zoomSdk.showMeetingInvitationDialog()
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10163	     | Can’t invite participants	                                                                                                     |
     * @category Invitations & Notifications
     */
    showMeetingInvitationDialog(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.10
     *
     * Changes the local meeting screen to a page number in the gallery view.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10139       | 	Invalid meeting page number.                                                                                                   |
     | 10141       | 	Meeting View must be in gallery view.                                                                                          |
     * @category Meeting Views
     */
    setGalleryPage(options: SetGalleryPageOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.10
     *
     * Returns the current gallery page and the total number of gallery pages for the user.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10141       | 	Meeting View must be in gallery view.                                                                                          |
     * @category Meeting Views
     */
    getGalleryPage(): Promise<GetGalleryPageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.0
     *
     * Starts or stops broadcasting voice to breakout rooms. Voice will be broadcasted to all rooms until it is stopped.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10191	      | Broadcast voice to breakout rooms failed	                                                                                     |
     | 10192	      | Stop broadcast voice to breakout rooms failed	                                                                                 |
     | 10193	      | muted, can’t broadcast voice to breakout rooms	                                                                               |
     | 10194	      | broadcasting voice stopped	                                                                                                   |
     | 10200	      | Can’t operate in Breakout Rooms.	                                                                                             |
     | 10201        | Broadcast disabled by settting.	                                                                                               |
     *
     * @category Breakout Rooms
     */
    broadcastVoiceToBreakoutRooms(options: BroadcastVoiceToBreakoutRoomsOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     *
     * Method returns participant uuids sorted by their order (linearized top left to bottom right) in gallery view.
     *
     * *Running context*:  inMeeting, inImmersive, inWebinar, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * @category Meeting Views
     */
    getGalleryOrderList(): Promise<GetGalleryOrderListResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.0
     *
     * Stops an ongoing share screen.
     *
     * *Running context*: inMeeting, inWebinar, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10189	     | There is no ongoing screen share by this user.	                                                                                 |
     | 10190	     | Collaboration in progress.	                                                                                                     |
     * @category Sharing
     */
    stopShareScreen(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     * @zoomZRCVersion 5.15.0
     *
     * Called by any participant to get information on their meeting view.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-host, Panelist, Participant, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop
     *
     * ```
     *  await zoomSdk.getMeetingView()
     *
     * ```
     * @category Meeting Views
     */
    getMeetingView(): Promise<GetMeetingViewResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     * @zoomZRCVersion 5.15.0
     *
     * Called by any participant to set information on their meeting view.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-host, Panelist, Participant, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop
     *
     * ```
     *  await zoomSdk.setMeetingView({view: 'speaker'})
     *
     * ```
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10110       | Speaker view is not available during screen sharing. Use standardView, sidebysideSpeakerView, or sidebysideGalleryView instead. |
     | 10111       | Gallery view is not available during screen sharing. Use standardView, sidebysideSpeakerView, or sidebysideGalleryView instead. |
     | 10112       | Standard view is only available during screen sharing.                                                                          |
     | 10113       | Gallery view is not available during screen sharing. Use speakerView or galleryView instead when not screen sharing.            |
     | 10114       | Gallery view is not available during screen sharing. Use speakerView or galleryView instead when not screen sharing             |
     | 10115       | This view is currently unsupported.                                                                                             |
     | 10116       | This running context is currently unsupported.                                                                                  |
     | 10117       | Already in this view                                                                                                            |
     | 10202	      | Only host can enable followHostsVideoOrder	                                                                                   |
     * @category Meeting Views
     */
    setMeetingView(options: SetMeetingViewOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     * @zoomZRCVersion 5.15.0
     *
     * Event fired for when the user’s meeting view is changed.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-host, Panelist, Participant, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop
     *
     * ```
     *  await zoomSdk.onMeetingViewChange((event) => console.log(event))
     * ```
     * @category Meeting Views
     */
    onMeetingViewChange(handler: GenericEventHandler<OnMeetingViewChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.14.5
     *
     * Sets an image as the static foreground image of the user’s video. Supports image transparency. Any video filter set via this method will rewrite previous filters set using this method.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10196	     | Failed to set or remove video filter.	                                                                                         |
     | 10197	     | No video filter package, you need to download it.	                                                                             |
     | 10198	     | Video filter feature is disabled.	                                                                                             |
     | 10199	     | Video filter saved to Settings, but could not be applied.	                                                                     |
     * @category Layers
     */
    setVideoFilter(options: SetVideoFilterOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     *
     * Deletes the video filter that was set using the setVideoFilter method, including video filters set by other apps. This method removes the video filter from the user’s Video Filters list in Settings. If the video filter is currently applied, it sets the Video Filters Setting to “None”.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10195	     | No video filter exists.	                                                                                                       |
     | 10196	     | Failed to set or remove video filter.	                                                                                         |
     | 10198	     | Video filter feature is disabled.	                                                                                             |
     * @category Layers
     */
    deleteVideoFilter(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     *
     * Change your screen name in meeting, persists only for that meeeting. Triggers `onMyUserContextChange` event. `getUserContext` will return the changed name.
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: desktop
     *
     * @category Meeting Actions
     */
    setScreenName(options: SetScreenNameOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     *
     * Changes participant's screen name in meeting, persists only for that meeting. Triggers `onMyUserContextChange` event for the targeted participant's app. Also, triggers the `onParticipantChange` event for the host's app.
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Meeting Actions
     */
    setParticipantScreenName(options: setParticipantScreenNameOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     *
     * Allows a user to react with an emoji.
     *
     * *Running context*: inMeeting, inWebinar, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10153	     | Cannot process the request. The meeting reactions feature is disabled.	                                                         |
     | 10154	     | Cannot process the request. The webinar reactions feature is disabled.	                                                         |
     | 10155	     | Cannot process the request - invalid reaction.	                                                                                 |
     | 10156	     | Emoji, unicode, or name fields are not matching. Please use only one of these fields or make sure they are matched.
     * @category Reactions
     */
    setEmojiReaction(options: SetEmojiReactionOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     *
     * Returns a list of emojis available for developer to call setEmojiReaction with.
     *
     * *Running context*: inMeeting, inWebinar, inCamera, Presentation Mode (Rectangle, standard)
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10153	     | Cannot process the request. The meeting reactions feature is disabled.	                                                         |
     | 10154	     | Cannot process the request. The webinar reactions feature is disabled.	                                                         |
     *
     * @category Reactions
     */
    getEmojiConfiguration(): Promise<GetEmojiConfigurationResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.5
     *
     * Event fired when a participant reacts with an emoji.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop
     *
     * @category Reactions
     */
    onEmojiReaction(handler: GenericEventHandler<OnEmojiReactionEvent>): void;
    /**
     * @zoomRoomsClientVersion 5.14.5
     * @zoomZRCVersion 5.14.0
     *
     * The API is available to apps running in Zoom Rooms. Returns information about the current room and device in which the app is running.
     *
     * *Running context*: inDigitalSignage, inMeeting, inMainClient, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Supports Guest Mode*: No
     *
     * *product*: digitalSignage, zoomRoomController
     *
     * ```
     * await zoomSdk.getZoomRoomContext()
     * ```
     *
     * @category Zoom Rooms
     */
    getZoomRoomContext(): Promise<GetZoomRoomContextResponse>;
    /**
     * @zoomZRCVersion 5.14.0
     *
     * This API allows apps running on Zoom Room Controllers to request configuration credentials for in-room control processors.
     *
     * *Running context*: inMeeting, inMainClient, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Supports Guest Mode*: No
     *
     * *product*: zoomRoomController
     *
     * @category Zoom Rooms
     */
    getZoomRoomControllerCredentials(): Promise<GetZoomRoomControllerCredentialsResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.10
     *
     * For participants, leave the meeting while it continues for the other participants.
     *
     * For hosts only, assign another participant or co-host to be the new host and leave.
     *
     * *Running context*: inMeeting, inImmersive, inWebinar, inCollaborate, inCamera, inMainClient
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes (applicable to participants only)
     *
     * *Product*: Desktop
     *
     *  *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10207	     | User leave meeting Failed.	                                                                                                     |
     | 10209	     | Specified newHost participantUUID ignored because it is not applicable when the user is not in a meeting or a host.	           |
     * @category Meeting Actions
     */
    leaveMeeting(options?: LeaveMeetingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.10
     *
     * Join specified meeting, or a new meeting when unspecified. The app is open when the meeting starts.
     *
     * If a participant is in an ongoing meeting, leave the current meeting, then join specified meeting, or a new meeting when unspecified (logged in participants).
     *
     * For hosts in meetings, assign another participant or co-host to be the new host, leave the meeting, then join specified meeting, or a new meeting when unspecified (and user is logged in).
     *
     * If a participant joins a webinar where they are an attendee, the app will not open because Zoom Apps are not supported for attendees in webinars.
     *
     * *Running context*: inMeeting, inImmersive, inWebinar, inCollaborate, inCamera, inMainClient
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes (applicable to participants only)
     *
     * *Product*: Desktop
     *
     *  *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10207	     | User leave meeting Failed.	                                                                                                     |
     | 10208	     | User join meeting Failed.	                                                                                                     |
     | 10209	     | Specified newHost participantUUID ignored because it is not applicable when the user is not in a meeting or a host.	           |
     | 10210	     | JoinUrl is invalid.	                                                                                                           |
     * @category Meeting Actions
     */
    joinMeeting(options?: JoinMeetingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.14.10
     *
     * Allows hosts and co-hosts to ask specified meeting participants to turn on or off video. When enabling video, method will return success if the request to enable video was sent; participants still can decline the prompt.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: yes
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10213	      | Participants are not allowed to enable video by meeting security settings	                                                     |
     | 10214	      | Webinar attendee cannot enable video	                                                                                         |
     | 10215	      | Fail to turn off video for participants	                                                                                       |
     | 10216	      | Fail to turn on video for participants	                                                                                       |
     | 10217	      | A maximum of 10 participants' video can be started or stopped at a time	                                                       |
     | 10218	      | Method doesn’t support current user as a parameter	                                                                           |
     | 10219	      | Cannot detect participant’s camera	                                                                                           |
     * @category Meeting Actions
     */
    toggleParticipantMediaVideo(options: ToggleParticipantMediaVideoOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.15.5
     *
     * Triggers a broadcast of JSON message data to instances of the same app for all participants in a meeting. Participants with their apps open will receive an `onMessage` event containing a JSON payload.
     *
     * Message delivery is guranteed to current meeting participants; participants who leave the meeting before message send or who join after the message send will not see the message. Order delivery is not guranteed.
     * A successful reponse upon invocation indicates the message was sent, but does not indicate delivery status or whether it was received by any participants.
     *
     * Apps that first call the `connect` API will be able to broadcast messages to instances of the same app in the main client.
     *
     * *Running context*: inMeeting, inWebinar, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: yes
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10229	     | Message payload too large - exceeds 1Kb	                                                                                       |
     * @category App Instances Communication
     */
    sendMessage(options: SendMessageOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Allows to get information on tabs accessed, current call status and an indentifier for the current call.
     *
     * *Running context*: inPhone
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10001	     | The Zoom client encountered an error while processing the request	                                                             |
     *
     * @category Zoom Phone
     */
    getPhoneContext(): Promise<GetPhoneContextResponse>;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Event triggers every time an incoming call is answered
     *
     * *Running context*: inPhone
     *
     * *Product*: Desktop
     *
     * @category Zoom Phone
     */
    onPhoneCalleeAnswered(handler: GenericEventHandler<PhoneEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Event triggers every time an active call is ended by caller
     *
     * *Running context*: inPhone
     *
     * *Product*: Desktop
     *
     * @category Zoom Phone
     */
    onPhoneCallerEnded(handler: GenericEventHandler<PhoneEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Event triggers every time an active call is ended by receiver
     *
     * *Running context*: inPhone
     *
     * *Product*: Desktop
     *
     * @category Zoom Phone
     */
    onPhoneCalleeEnded(handler: GenericEventHandler<PhoneEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Event triggers  when caller rejects an incoming  phone call
     *
     * *Running context*: inPhone
     *
     * *Product*: Desktop
     *
     * @category Zoom Phone
     */
    onPhoneCalleeRejected(handler: GenericEventHandler<PhoneEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Event triggers when a caller escalates a phone call to meeting.
     *
     * *Running context*: inPhone
     *
     * *Product*: Desktop
     *
     * @category Zoom Phone
     */
    onPhoneCallerMeetingInviting(handler: GenericEventHandler<PhoneEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Event triggers when a callee escalates a zoom phone call to meeting.
     *
     * *Running context*: inPhone
     *
     * *Product*: Desktop
     *
     * @category Zoom Phone
     */
    onPhoneCalleeMeetingInvite(handler: GenericEventHandler<PhoneEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Event triggers every time current phone status changes.
     *
     * *Running context*: inPhone
     *
     * *Product*: Desktop
     *
     * @category Zoom Phone
     */
    onPhoneContext(handler: GenericEventHandler<OnPhoneContextEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Returns the status of the waiting room (whether it is enabled or disabled)
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: yes
     *
     * *product*: desktop
     *
     * @category Waiting Room
     */
    getWaitingRoomState(): Promise<GetWaitingRoomStateResponse>;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Sets the status of the waiting room (whether it is enabled or disabled)
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: yes
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10233	     | Waiting room is locked                                                                                                          |
     | 10234       | Waiting room is enabled/disabled already                                                                                        |
     | 10235       | Method is not supported in this meeting                                                                                         |
     | 10236       | Method is not supported inside breakout room                                                                                    |
     *
     * @category Waiting Room
     */
    setWaitingRoomState(options: SetWaitingRoomStateOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Put participant from the meeting into waiting room.
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: yes
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10237	     | Participant is already in the waiting room	                                                                                     |
     | 10239       | Hosts and co-hosts cannot be put in waiting room                                                                                |
     | 10240       | Waiting room is not supported for this meeting                                                                                  |
     *
     * @category Waiting Room
     */
    putParticipantToWaitingRoom(options: PutParticipantToWaitingRoomOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * Admit participant from waiting room into the meeting.
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: yes
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10238	     | Participant is not in a waiting room                                                                                            |
     | 10240       | Waiting room is not supported for this meeting                                                                                  |
     *
     * @category Waiting Room
     */
    admitParticipantFromWaitingRoom(options: AdmitParticipantFromWaitingRoomOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.15.10
     *
     * List participants in the waiting room
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: yes
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10240       | Waiting room is not supported for this meeting                                                                                  |
     *
     * @category Waiting Room
     */
    getWaitingRoomParticipants(): Promise<GetWaitingRoomParticipantsResponse>;
    /**
     * @zoomDesktopClientVersion 5.16.5
     * Added support for inContactCenter in zoomDesktopClientVersion 6.2.5
     *
     * This will popout the app. This is the equivalent of the UI action of “Popout” and “Merge Back to Main Window”
     * which are located under the ellipsis menu (...) when an app is open. This is also related to the existing onAppPopout event.
     * The position of the dock is always in the middle of the screen. The “undock” input parameter pops out the app,
     * and the “dock” input parameter merges the app back to the main window.
     *
     * *Running context*: inMeeting, inCollaborate, inCamera, inWebinar, inMainClient, inContactCenter
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: yes
     *
     * *Product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10247       | App is within a context where appPopout() cannot be executed.                                                                    |
     *
     * @category App Window
     */
    appPopout(options: AppPopoutOptions): Promise<AppPopoutResponse>;
    /**
     * @zoomDesktopClientVersion 5.16.5
     *
     * This will bring the app to the front of the stack when multiple apps are opened
     * or when there are other windows such as Chat or Participants in front of the Apps window.
     * If the app is not in view (for example, behind Chat or if the app is not in view but webview is running),
     * then this API will make the app visible to the user.
     *
     * *Running context*: inMeeting, inCollaborate, inCamera, inWebinar, inMainClient, inMail(v6.3.6+)
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: yes
     *
     * *Product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10247       | App is within a context where bringAppToFront() cannot be executed.                                                                    |
     *
     * @category App Window
     */
    bringAppToFront(): Promise<BringAppToFrontResponse>;
    /**
     * @zoomDesktopClientVersion 5.16.5
     *
     * This will send the app to the background and not keep it in the view for the user.
     * The app will continue to run and Zoom Apps JS APIs and REST APIs can be called and executed.
     * This is applicable even when one app is opened. When only one app is opened in meeting contexts,
     * the Apps panel will also be hidden from view for the user. When executed inMainClient context,
     * the user will remain on the My Apps list under the Apps tab.
     *
     * *Running context*: inMeeting, inCollaborate, inCamera, inWebinar, inMainClient, inMail(v6.3.6+)
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: yes
     *
     * *Product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10247       | App is within a context where sendAppToBackground() cannot be executed.                                                                    |
     *
     * @category App Window
     */
    sendAppToBackground(): Promise<SendAppToBackgroundResponse>;
    /**
     * @zoomDesktopClientVersion 5.16.5
     *
     * This will close the app for the user and the webview will be killed.
     *
     * *Running context*: inMeeting, inCollaborate, inCamera, inWebinar, inMainClient
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: yes
     *
     * *Product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10247       | App is within a context where closeApp() cannot be executed.                                                                    |
     *
     * @category App Window
     */
    closeApp(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.0.0
     *
     * API to get details of the current ZCC engagement (for e.g. engagementId, start time, engagement channel, queue name etc.) when a user accesses the app.
     *
     * **Note**: Get details of the current ZCC engagement.  When processing the response, check the ‘engagementId’ field as it is possible that the agent user has switched between engagements during the time of this API request.  Your app should be “engagement-aware” meaning that it is capable of storing data about multiple engagements independently and maintaining proper engagement state to support agents switching between multiple engagements.
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *product*: desktop
     *
     * @category Zoom Contact Center
     */
    getEngagementContext(options?: GetEngagementContextOptions): Promise<EngagementContext>;
    /**
     * @zoomDesktopClientVersion 6.0.0
     *
     * The event triggers and is sent to the 3rd party app when the user moves from one engagement to another.
     *
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *product*: desktop
     *
     * @category Zoom Contact Center
     */
    onEngagementContextChange(handler: GenericEventHandler<EngagementContextEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.0.0
     *
     * Get details of the current ZCC engagement.
     *
     * **Note**: Get details of the current ZCC engagement.  When processing the response, check the ‘engagementId’ field as it is possible that the agent user has switched between engagements during the time of this API request.  Your app should be “engagement-aware” meaning that it is capable of storing data about multiple engagements independently and maintaining proper engagement state to support agents switching between multiple engagements.
     *
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *product*: desktop
     *
     * @category Zoom Contact Center
     */
    getEngagementStatus(options: GetEngagementStatusOptions): Promise<EngagementStatus>;
    /**
     * @zoomDesktopClientVersion 6.0.0
     *
     * The event triggers and is sent to the 3rd party app when any of the fields in the EngagementStatus object changes.
     *
     * The event returns only the difference between the previous status and new status.
     *
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *product*: desktop
     *
     * @category Zoom Contact Center
     */
    onEngagementStatusChange(handler: GenericEventHandler<EngagementStatusEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.0.0
     *
     * This API will return the securable status of a call.
     *
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10241	     | Unable to retrieve Securable Status for phone number                                                                            |
     | 10242       | Method not available outside Zoom Contact Center                                                                                |
     | 10243	     | Method not available outside Engagement context                                                                                 |
     *
     *
     * @category Zoom Contact Center
     */
    getEngagementSecurableStatus(options: GetEngagementSecurableStatusOptions): Promise<GetEngagementSecurableStatusResponse>;
    /**
     * @zoomDesktopClientVersion 6.0.0
     *
     * This API will enable an agent to start media redirection with the PCI vendor. When the customer calls ZCC, the phone call will be on Zoom carrier trunks.
     * Upon initiating media redirection the telecom carrier will 'redirect' the SIP call to the app.  The app will then bridge the call with Zoom over a different SIP trunk where the agent will be able to talk to the customer but unable to hear credit card number and additional details.
     *
     * **Note**: This API will work only for PCI vendors registered with Zoom.
     *
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10242       | Method not available outside Zoom Contact Center                                                                                |
     | 10243	     | Method not available outside Engagement context                                                                                 |
     | 10244	     | Request to start media redirection failed                                                                                       |
     *
     *
     * @category Zoom Contact Center
     */
    startMediaRedirection(options: StartMediaRedirectionOptions): Promise<StartMediaRedirectionResponse>;
    /**
     * @zoomDesktopClientVersion 6.0.0
     *
     * Event to check the media redirection status
     *
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * @category Zoom Contact Center
     */
    onEngagementMediaRedirect(handler: GenericEventHandler<OnEngagementMediaRedirectEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.16.0
     *
     * Fires when a participant leaves the waiting room by leaving the meeting or by being admitted to the meeting by UI or API
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*:Host, Co-Host
     *
     * *Supports Guest Mode*: yes (co-host could be a guest)
     *
     * *product*: desktop
     *
     * @category Waiting Room
     */
    onWaitingRoomParticipantLeave(handler: GenericEventHandler<OnWaitingRoomParticipantLeaveEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.16.0
     *
     * Fires when a participant joins a meeting and enters the waiting room, or being put to waiting room by UI or API.
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*:Host, Co-Host
     *
     * *Supports Guest Mode*: yes (co-host could be a guest)
     *
     * *product*: desktop
     *
     * @category Waiting Room
     */
    onWaitingRoomParticipantJoin(handler: GenericEventHandler<OnWaitingRoomParticipantJoinEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.16.0
     *
     * Fires when the waiting room has either been enabled or disabled through UI or API. Event doesn’t fire if API call doesn’t lead to a value change.
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*:Host, Co-Host
     *
     * *Supports Guest Mode*: yes (co-host could be a guest)
     *
     * *product*: desktop
     *
     * @category Waiting Room
     */
    onWaitingRoomStateChange(handler: GenericEventHandler<OnWaitingRoomStateChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.16.10
     *
     * When invoked from the Meetings context, this method allows you to invite participants into an active meeting via Zoom Phone automatically.
     * When used from the Phone context, it enables making voice calls directly from Zoom Phone.
     *
     * IOS Client Version (Applicable only to inMeeting context)
     *
     * Android Client Version(Applicable only to inMeeting context)
     *
     * *Updated in Desktop Client Version: 6.2.10 to support in meeting context*
     *
     * *Running context*: inPhone, inMeeting
     *
     * *product*: desktop, mobile
     *
     * @category Zoom Phone
     */
    makePhoneCall(options: MakePhoneCallOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.16.10
     *
     * Allow the app user to retrieve a list of interpretation settings for the current meeting. Includes pre-configured languages from the web portal as well as runtime configured languages from the client.
     *
     * Additional context: https://support.zoom.us/hc/en-us/articles/360034919791-Using-Language-Interpretation-in-your-meeting-or-webinar
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: yes
     *
     * *product*: desktop
     *
     * @category Meeting Actions
     */
    getMeetingLanguages(): Promise<GetMeetingLanguagesResponse>;
    /**
     * @zoomDesktopClientVersion 5.16.10
     *
     * Event triggered when the list of interpretation settings for the current meeting changes.
     *
     * Additional context: https://support.zoom.us/hc/en-us/articles/360034919791-Using-Language-Interpretation-in-your-meeting-or-webinar
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: yes
     *
     * *product*: desktop
     *
     * @category Meeting Actions
     */
    onMeetingLanguagesChange(handler: GenericEventHandler<OnMeetingLanguagesChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.16.10
     *
     * Get emails and participant UUIDs of the participants in the current meeting. Note that for breakout rooms, the participants in the current room will be returned, not those of the parent meeting. Consent is required from the host, co-host or individual participants to get the email, depending on the scenario.
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * @category Meeting Actions
     */
    getMeetingParticipantsEmail(options?: GetMeetingParticipantsEmailOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.16.10
     *
     * Triggered when a meeting participant responds to the consent asking for their email initiated using `zoomSdk.getMeetingParticipantsEmail()`. This is returned one object at a time, as and when consents are given by participants
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * @category Meeting Actions
     */
    onParticipantEmail(handler: GenericEventHandler<OnParticipantEmailEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.17.5
     *
     * Method returns UUID of continous meeting chat channel for the current meeting. Id can be used by REST API method to send messages to the meeting chat during and after the meeting.
     *
     * *Running context*: inMeeting, inImmersive, inCollaborate, inCamera, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Meeting Actions
     */
    getMeetingChatContext(): Promise<GetMeetingChatContextResponse>;
    /**
     * @zoomDesktopClientVersion 6.1.0
     *
     * Returns an object containing mail context when the app is opened, including the email provider, user's email address, and optional thread id and message id.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * @category Zoom Mail
     */
    getMailContext(): Promise<GetMailContextResponse>;
    /**
     * @zoomDesktopClientVersion 6.1.0
     *
     * Get the messages info of the specified mail thread.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * @category Zoom Mail
     */
    getMailThread(options: GetMailThreadOptions): Promise<GetMailThreadResponse>;
    /**
     * @zoomDesktopClientVersion 6.1.0
     *
     * Get the info of the specified mail message.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * @category Zoom Mail
     */
    getMailMessage(options: GetMailMessageOptions): Promise<GetMailMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * Get the data of the currently activated compose editor in mail.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    getMailActiveEditorData(options: GetMailActiveEditorDataOptions): Promise<GetMailActiveEditorDataResponse>;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * Set the data of the currently activated compose editor in mail.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    setMailActiveEditorData(options: SetMailActiveEditorDataOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * Register the custom component in zmail's compose editor so that the app can insert custom UI to the editor by `insertContentToMailActiveEditor`.
     * Usage in `insertContentToMailActiveEditor`: `<app-component name="xxxx" prop1='{"key": "value"}' prop2="234" ... />`.
     * The prop name will be transformed to camelCase, the prop value (except name prop) will be parsed by JSON.parse (If an error occurs when parsing, the original string value will be used),
     * and the props will be used as the $root data of adaptive card template.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    registerMailEditorComponent(options: RegisterMailEditorComponentOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * Insert body content into the currently active compose editor in mail.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    insertContentToMailActiveEditor(options: InsertContentToMailActiveEditorOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * Render the ui in the currently active compose editor in mail.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @deprecated Since desktop client v6.4.5, it will be removed later, please use `renderInMail` instead.
     *
     * @category Zoom Mail
     */
    renderInMailActiveEditor(options: RenderInMailActiveEditorOptions): Promise<RenderInMailActiveEditorResponse>;
    /**
     * @zoomDesktopClientVersion 6.4.5
     *
     * Render custom ui in mail.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    renderInMail(options: RenderInMailOptions): Promise<RenderInMailResponse>;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * Listen to beforeMailSend event of the compose editor in mail.
     * Because the beforeMailSend event is only sent to the specified app, rather than broadcasting to all opened apps.
     * **So the app must call this method, otherwise it cannot receive the `onBeforeMailSend` event.**
     * When sending mail, trigger the `onBeforeMailSend` event to the corresponding app in the order of priority.
     * If the priorities are the same, the order in which this method was called is used.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    subscribeBeforeMailSend(options: SubscribeBeforeMailSendOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.4.5
     *
     * Unsubscribe from the before mail send event. After unsubscribing, the app will no longer trigger `onBeforeMailSend` event when sending mails.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    unsubscribeBeforeMailSend(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * This is a general method. The purpose is to allow the app to return the corresponding response after receiving some mail events (such as beforeMailSend).
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    callbackToMail(options: CallbackToMailOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * Event triggered when the activated compose editor in mail is changed.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    onMailActiveEditorChange(handler: GenericEventHandler<OnMailActiveEditorChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * The mail active compose editor may have the following types, and may switch type. This event is triggered when the type changed.
     *
     * - new - Create a new email
     * - reply - Reply to an email, reply only to the sender by default
     * - replyAll - Reply to an email, reply to the sender and cc to the recipients by default
     * - forward - Forward an email
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    onMailActiveEditorTypeChange(handler: GenericEventHandler<OnMailActiveEditorTypeChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * Event triggered when the data of the activated compose editor in mail is changed.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    onMailActiveEditorDataChange(handler: GenericEventHandler<OnMailActiveEditorDataChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.4.5
     *
     * Event triggered when the editor in mail is destroyed.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    onMailEditorDestroy(handler: GenericEventHandler<OnMailEditorDestroyEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * Event triggered when the activated compose editor in mail enable or disable apps.
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @deprecated
     * Since desktop client v6.4.5, apps are always enabled in the currently activated editor, and this event will no longer be triggered.
     * It will be removed later, not recommended to use.
     *
     * @category Zoom Mail
     */
    onAppToggleInMailActiveEditor(handler: GenericEventHandler<OnAppToggleInMailActiveEditorEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * The app's custom UI is rendered using AdaptiveCards.
     * This event is triggered when the action in the UI is executed (i.e. adaptiveCardInstance.onExecuteAction).
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    onAppUIActionInMail(handler: GenericEventHandler<OnAppUIActionInMailEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.3.6
     *
     * The purpose of this method is to allow the app to modify the mail data before sending the mail.
     * It is triggered when we click the send button of a mail compose editor and before sending the mail, it will carry the current mail data.
     * **The app must call `subscribeBeforeMailSend` method before it can receive this event**, and apps receive the event in the order of priority or the order in which they call `subscribeBeforeMailSend` when the priorities are the same.
     * When the app receives this event, **it can modify the mail data or cancel sending mail by calling the `callbackToMail` method to return the result.
     * If the result data is `'cancel'`, it means canceling the sending, and the `onBeforeMailSend` event of subsequent apps will not be triggered.
     * Otherwise, it means modifying the mail data. In this case, the result data contains the modified mail fields (not all fields are required).**
     * The modified data will be passed to the `onBeforeMailSend` event of the subsequent apps.
     * If `callbackToMail` is not called, this app will be ignored, and the data returned by the previous app will be passed to the `onBeforeMailSend` event of the next app after the timeout (set in the `subscribeBeforeMailSend` method).
     *
     * The structure of the returned data is as follows:
     * ```ts
     * type CallbackToMailOptions = {
     *   // the same as the callId of onBeforeMailSend event
     *   callId: OnBeforeMailSendEvent['callId']
     *   // 'cancel' means canceling the sending, otherwise, it means modifying the mail data
     *   data: 'cancel' | Partial<Omit<OnBeforeMailSendEvent['data'], 'draftId' | 'editorId' | 'from' | 'editorState'>>
     * }
     * ```
     *
     * *Running context*: inMail
     *
     * *Supported roles*: N/A
     *
     * *Supports Guest Mode*: No
     *
     * *Product*: desktop
     *
     * @category Zoom Mail
     */
    onBeforeMailSend(handler: GenericEventHandler<OnBeforeMailSendEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.13.10
     * @zoomIOSClientVersion 5.14.10
     * @zoomAndroidClientVersion 5.14.5
     * Allows a host to take high quality photos of an array of participants.
     *
     * *Running context*: inMeeting, inWebinar, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * @category Meeting Actions
     */
    takeParticipantPhoto(options: TakeParticipantPhotoOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.13.10
     * @zoomIOSClientVersion 5.14.10
     * @zoomAndroidClientVersion 5.14.5
     * Allows a participant to take a high quality photo of themselves.
     *
     * *Running context*: inMeeting, inWebinar, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * @category Meeting Actions
     */
    takeMyPhoto(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.2.5
     *
     * The app calls the Zoom Apps SDK to get the value of the selected variables associated with the current engagement when a user access the app.
     *
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *product*: desktop, pwa
     *
     * @category Zoom Contact Center
     */
    getEngagementVariableValue(options: GetEngagementVariableValueOptions): Promise<GetEngagementVariableValueResponse>;
    /**
     * @zoomDesktopClientVersion 6.2.5
     *
     * The app calls the Zoom Apps SDK to get the list of variables which are configured by ZCC admin to expose to the app.
     * This is to be called when an agent launches an app for the 1st time after completely closing the app.
     *
     * *Running context*: inContactCenter
     *
     * *Supported roles*: Agent, Supervisor
     *
     * *product*: desktop, pwa
     *
     * @category Zoom Contact Center
     */
    getAppVariableList(): Promise<GetAppVariableListResponse>;
    /**
     * @zoomDesktopClientVersion 6.2.5
     *
     * Sends a message to a chat channel or meeting chat channel.  There are three contexts this can be used in:
     * For CMC contexts, the message will be sent to the chat channel linked to the meeting
     * For non-CMC contexts, the message will be posted to the legacy meeting chat
     * For Zoom Apps opened in the sidebar, the message will be posted to a channel of the user’s choosing. The API will render a dialog that allows users to search their chat channels.
     *
     * Running context*: inMeeting, inChat, inMeetingChat
     *
     * *Supported roles*: Host, Co-host, Participant, and Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Meeting Actions
     */
    sendMessageToChat(options: SendMessageToChatOptions): Promise<SendMessageToChatResponse>;
    /**
     * @zoomDesktopClientVersion 5.17.5
     * @zoomIOSClientVersion 5.16.0
     * @zoomAndroidClientVersion 5.16.0
     * Set a dynamic indicator to be seen by all participants.
     *
     * *Running context*: inMeeting, inCollaborate, inCamera, inWebinar
     *
     * *Supported roles*: Host, Co-host, Participant, and Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Dynamic Indicator
     */
    setDynamicIndicator(options: DynamicIndicatorOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.17.5
     * @zoomIOSClientVersion 5.16.0
     * @zoomAndroidClientVersion 5.16.0
     * Returns the current dynamic indicator information.
     *
     * *Running context*: inMeeting, inCollaborate, inCamera, inWebinar
     *
     * *Supported roles*: Host, Co-host, Panelist, Participant, and Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Dynamic Indicator
     */
    getDynamicIndicator(): Promise<GetDynamicIndicatorOutput>;
    /**
     * @zoomDesktopClientVersion 5.17.5
     * @zoomIOSClientVersion 5.16.0
     * @zoomAndroidClientVersion 5.16.0
     * Removes the current dynamic indicator (including style) and the app option in the dropdown menu.
     *
     * *Running context*: inMeeting, inCollaborate, inCamera, inWebinar
     *
     * *Supported roles*: Host, Co-host, Participant, and Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Dynamic Indicator
     */
    removeDynamicIndicator(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.17.5
     * @zoomIOSClientVersion 5.16.0
     * @zoomAndroidClientVersion 5.16.0
     * Event fired when the dynamic indicator is set or changed.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Dynamic Indicator
     */
    onSetDynamicIndicator(handler: GenericEventHandler<OnSetDynamicIndicatorEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.17.5
     * @zoomIOSClientVersion 5.16.0
     * @zoomAndroidClientVersion 5.16.0
     * Event fired when the dynamic indicator is removed by calling removeDynamicIndicator.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Dynamic Indicator
     */
    onRemoveDynamicIndicator(handler: GenericEventHandler<OnRemoveDynamicIndicatorEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.17.5
     *
     * Use this to update only the style of an existing dynamic indicator without affecting other attributes.
     *
     * *Running context*: inMeeting, inCollaborate, inCamera, inWebinar
     *
     * *Supported roles*: Host, Co-host, Participant, and Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Dynamic Indicator
     */
    setDynamicIndicatorStyle(options: SetDynamicIndicatorStyleInput): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.17.5
     *
     * Event fired when the dynamic indicator style is set or changed using setDynamicIndicatorStyle.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, and Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Dynamic Indicator
     */
    onDynamicIndicatorStyleChange(handler: GenericEventHandler<OnDynamicIndicatorStyleChangeEvent>): void;
    /**
     * @zoomDesktopClientVersion 5.17.5
     *
     * Adds additional time to an existing dynamic indicator timer. Only works for timers with a down direction.
     *
     * *Running context*: inMeeting, inCollaborate, inCamera, inWebinar
     *
     * *Supported roles*: Host, Co-host, Participant, and Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Dynamic Indicator
     */
    extendDynamicIndicator(options: {
        extendDuration: number;
    }): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 5.17.5
     *
     * Event fired when the dynamic indicator timer is extended using extendDynamicIndicator.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: desktop
     *
     * @category Dynamic Indicator
     */
    onExtendDynamicIndicator(handler: GenericEventHandler<OnExtendDynamicIndicatorEvent>): void;
    /**
     * @zoomDesktopClientVersion 6.4.0
     *
     * Allows end-user to request their admin to purchase app for them.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Running context*: inMainClient, inMeeting, inImmersive, inCollaborate, inCamera, inWebinar, inCollaborateSidecar
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10191       | Unable to show upgrade prompt                                                                                                   |
     *
     *
     * @category In-app Purchase
     */
    promptUpgradeRequest(options: PromptUpgradeRequestOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.4.0
     *
     * This event fires when the upgrade screen is interacted with by the user, and resulted in user/admin either confirming request or cancel.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     * *Running context*: inMainClient, inMeeting, inImmersive, inCollaborate, inCamera, inWebinar, inCollaborateSidecar
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * *Error codes* {@link ZoomApiError}
     | Status Code | Status Message                                                                                                                  |
     | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
     | 10192       | Unable to process upgrade request                                                                                                  |
     *
     *
     * @category In-app Purchase
     */
    onUpgradeRequest(handler: GenericEventHandler<OnUpgradeRequestEvent>): void;
    /**
     * @zoomRoomsClientVersion 6.4.5
     * @zoomZRCVersion 6.4.5
     *
     * The event is triggered every time an {@link https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064072#h_01FH8P6CNY9FF76KX0TYF33N10 | NRC} event occurs.
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Running context*: inMainClient, inMeeting
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: zoomRoomController
     *
     * @category Zoom Rooms
     */
    onZoomRoomEvent(handler: GenericEventHandler<OnZoomRoomEventResponse>): void;
    /**
     * @zoomRoomsClientVersion 6.4.5
     * @zoomZRCVersion 6.4.5
     *
     * Allows apps  to get device information of ZR.
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Running context*: inMainClient, inMeeting
     *
     * *Supports Guest Mode*: Yes
     *
     * *product*: zoomRoomController
     *
     * **Notes**
     * - Due to system-level restrictions, accurate retrieval of the macAddress may not be possible on some platforms.
     *
     *
     * @category Zoom Rooms
     */
    getZoomRoomDeviceDetails(): Promise<GetZoomRoomDeviceDetails>;
    /**
     * @zoomDesktopClientVersion 6.4.5
  
     * This method removes a participant from an active meeting.
     *
     * *Running context*: inMeeting
     *
     * *Supported roles*: Host, Co-host
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop, mobile
     *
     * @category Zoom Phone
     */
    removeParticipant(options: RemoveParticipantOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.4.5
  
     * This method sends keypad control inputs during an active meeting when the participant has been called in using Zoom Phone. These inputs are typically used for interacting with automated systems, such as entering digits for menu selections, accessing voicemail systems, or other services requiring touch-tone commands.
     *
     * *Running context*: inMeeting
     *
     * *Supported roles*: Host, Co-host
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop, mobile
     *
     * @category Zoom Phone
     */
    sendKeypadControls(options: SendKeypadControlsOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.4.10
     * Start an RTMS stream in a meeting
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-host, Panelist, Participant, and Attendee
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * ```
     * await zoomSdk.startRTMS();
     * ```
     *
     * @category RTMS
     */
    startRTMS(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.4.10
     * Stop an RTMS stream in a meeting
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-host, Panelist, Participant, and Attendee
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * ```
     * await zoomSdk.stopRTMS();
     * ```
     * @category RTMS
     */
    stopRTMS(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.5.5
     * Pause the active RTMS stream for the invoking app, for the current session.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-host, Participant, Panelist, and Attendee
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * ```
     * await zoomSdk.pauseRTMS();
     * ```
     * @category RTMS
     */
    pauseRTMS(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.5.5
     * Resume a previously paused RTMS stream for the invoking app, for the current session.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-host, Participant, Panelist, and Attendee
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * ```
     * await zoomSdk.resumeRTMS();
     * ```
     * @category RTMS
     */
    resumeRTMS(): Promise<GeneralMessageResponse>;
    /**
     * @zoomDesktopClientVersion 6.5.5
     * Get the current status of the RTMS session(s) in-meeting (for the same app only)
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-host, Participant, Panelist, and Attendee
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * ```
     * await zoomSdk.getRTMSStatus();
     * ```
     * @category RTMS
     */
    getRTMSStatus(): Promise<GetRTMSStatusResponse>;
    /**
     * @zoomDesktopClientVersion 6.5.10
     * This event is triggered when the in-meeting session status of the RTMS changes, as displayed to the participant
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-host, Participant, Panelist, and Attendee
     *
     * *Supports Guest Mode*: No
     *
     * *product*: desktop
     *
     * @category RTMS
     */
    onRTMSStatusChange(handler: GenericEventHandler<OnRTMSStatusChangeEvent>): void;
}

declare const _default: ZoomSdk;

export { AddBreakoutRoomOptions, AddParticipantSpotlightOptions, AdmitParticipantFromWaitingRoomOptions, AllowParticipantToRecordOptions, Apis, AppInvitationResponse, AppPopoutOptions, AppPopoutResponse, AssignParticipantToBreakoutRoomOptions, AttendeeSpeakingOptions, AudioMedia, AuthObject, AuthorizeOptions, BreakOutRoomParticipant, BreakoutRoomAssignmentMethods, BreakoutRoomsCreated, BreakoutRoomsParticipantsAssigned, BreakoutRoomsParticipantsJoined, BreakoutRoomsParticipantsLeft, BreakoutRoomsResponse, BreakoutRoomsUpdated, BringAppToFrontResponse, BroadcastVoiceToBreakoutRoomsOptions, CallObject, CallbackToMailOptions, ChangeBreakoutRoomOptions, ClearImageOptions, ClearParticipantOptions, ClearWebViewOptions, CloudRecordingOptions, ComposeCardOptions, ConfigOptions, ConfigResponse, ConfigSize, ConfigureBreakoutRoomsOptions, ConfigureBreakoutRoomsResponse, CreateBreakoutRoomsOptions, DecryptedAppContextResponse, DrawImageOptions, DrawImageResponse, DrawParticipantOptions, DrawWebViewOptions, DynamicIndicatorOptions, DynamicIndicatorStyles, DynamicIndicatorTimerOptions, EmojiOptions, EngagementContext, EngagementContextEvent, EngagementStatus, EngagementStatusEvent, ExpandAppOptions, FeedbackReactionOptions, FeedbackReactions, GeneralMessage, GeneralMessageResponse, GenericEventHandler, GetAppContextResponse, GetAppVariableListResponse, GetAudioSettingsResponse, GetAudioStateResponse, GetChatContextResponse, GetDynamicIndicatorOutput, GetEmojiConfigurationResponse, GetEngagementContextOptions, GetEngagementSecurableStatusOptions, GetEngagementSecurableStatusResponse, GetEngagementStatusOptions, GetEngagementVariableValueOptions, GetEngagementVariableValueResponse, GetGalleryOrderListResponse, GetGalleryPageResponse, GetIncomingParticipantAudioStateOptions, GetIncomingParticipantAudioStateResponse, GetMailActiveEditorDataOptions, GetMailActiveEditorDataResponse, GetMailContextResponse, GetMailMessageOptions, GetMailMessageResponse, GetMailThreadOptions, GetMailThreadResponse, GetMeetingChatContextResponse, GetMeetingContextResponse, GetMeetingJoinUrlResponse, GetMeetingLanguagesResponse, GetMeetingParticipantsEmailOptions, GetMeetingParticipantsResponse, GetMeetingUUIDResponse, GetMeetingViewResponse, GetParticipantSpotlightsResponse, GetPhoneContextResponse, GetRTMSStatusResponse, GetRecordingContextResponse, GetSupportedJsApisResponse, GetUserContextResponse, GetVideoSettingsResponse, GetVideoStateResponse, GetWaitingRoomParticipantsResponse, GetWaitingRoomStateResponse, GetZoomRoomContextResponse, GetZoomRoomControllerCredentialsResponse, GetZoomRoomDeviceDetails, InsertContentToMailActiveEditorOptions, JSONObject, JSONValue, JoinMeetingOptions, LaunchAppInMeetingOptions, LaunchContext, LeaveMeetingOptions, ListCamerasResponse, MakePhoneCallOptions, MeetingView, NativeApiRequest, NativeApiRequestData, NativeApiResponseData, NativeConfigOptions, NativeMessage, NativeMessageData, NotificationOptions$1 as NotificationOptions, OnActiveSpeakerChangeEvent, OnActiveSpeakerChangeUserType, OnAppPopoutEvent, OnAppToggleInMailActiveEditorEvent, OnAppUIActionInMailEvent, OnAppVisibilityChangeEvent, OnAuthorizedEvent, OnBeforeMailSendEvent, OnBreakoutRoomChangeEvent, OnCloudRecordingEvent, OnCollaborateChangeEvent, OnConnectEvent, OnDynamicIndicatorStyleChangeEvent, OnEmojiReactionEvent, OnEngagementMediaRedirectEvent, OnExpandAppEvent, OnExtendDynamicIndicatorEvent, OnFeedbackReactionEvent, OnGalleryOrderEvent, OnGalleryPageChangeEvent, OnIncomingParticipantAudioChangeEvent, OnMailActiveEditorChangeEvent, OnMailActiveEditorDataChangeEvent, OnMailActiveEditorTypeChangeEvent, OnMailEditorDestroyEvent, OnMeetingEvent, OnMeetingLanguagesChangeEvent, OnMeetingViewChangeEvent, OnMessageEvent, OnMyActiveSpeakerChangeEvent, OnMyMediaChangeEvent, OnMyReactionEvent, OnMyUserContextChangeEvent, OnParticipantChangeEvent, OnParticipantChangeParticipantType, OnParticipantEmailEvent, OnPhoneContextEvent, OnPhotoEvent, OnPhotoEventOriginal, OnRTMSStatusChangeEvent, OnReactionEvent, OnRemoveDynamicIndicatorEvent, OnRemoveFeedbackReactionEvent, OnRenderedAppOpenedEvent, OnRunningContextChangeEvent, OnSendAppInvitationEvent, OnSetDynamicIndicatorEvent, OnShareAppEvent, OnShareComputerAudioEvent, OnShareScreenEvent, OnUpgradeRequestEvent, OnWaitingRoomParticipantJoinEvent, OnWaitingRoomParticipantLeaveEvent, OnWaitingRoomStateChangeEvent, OnZoomRoomEventResponse, OpenUrlOptions, Participant, ParticipantCutoutShape, ParticipantPinOptions, PhoneEvent, PixelValue, PromptShareScreenOptions, PromptUpgradeRequestOptions, PutParticipantToWaitingRoomOptions, RegisterMailEditorComponentOptions, RemoveParticipantOptions, RemoveParticipantSpotlightsOptions, RemoveWebinarAttendeeOptions, RenameBreakoutRoomOptions, RenderInMailActiveEditorOptions, RenderInMailActiveEditorResponse, RenderInMailOptions, RenderInMailResponse, RenderingContextView, RunRenderingContextOptions, RunningContext, RunningContextResponse, SdkOptions, SdkVersion, SendAppInvitationOptions, SendAppToBackgroundResponse, SendKeypadControlsOptions, SendMessageOptions, SendMessageToChatOptions, SendMessageToChatResponse, SetAudioSettingsOptions, SetAudioStateOptions, SetCameraOptions, SetDynamicIndicatorStyleInput, SetEmojiReactionOptions, SetGalleryPageOptions, SetIncomingParticipantAudioStateOptions, SetMailActiveEditorDataOptions, SetMeetingViewOptions, SetScreenNameOptions, SetVideoFilterOptions, SetVideoMirrorEffectOptions, SetVideoSettingsOptions, SetVideoStateOptions, SetWaitingRoomStateOptions, ShareAppOptions, ShareComputerAudioOptions, ShowAppInvitationDialogOptions, StartCollaborateOptions, StartMediaRedirectionOptions, StartMediaRedirectionResponse, SubscribeBeforeMailSendOptions, TakeParticipantPhotoOptions, ToggleParticipantMediaAudioOptions, ToggleParticipantMediaVideoOptions, Uuid, VideoMedia, VirtualBackgroundOptions, VirtualForegroundOptions, WarningReponse, compatibilityApisCache, _default as default, isVersionCompatible, onEngagementVariableValueChangeEvent, onMeetingConfigChangedEvent, setParticipantScreenNameOptions };
