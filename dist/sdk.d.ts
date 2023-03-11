/**
 * Copyright (c) 2023 Zoom Video Communications, Inc.
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
    ON_MEETING = "onMeeting",
    ON_MESSAGE = "onMessage",
    ON_MY_ACTIVE_SPEAKER_CHANGE = "onMyActiveSpeakerChange",
    ON_MY_MEDIA_CHANGE = "onMyMediaChange",
    ON_MY_REACTION = "onMyReaction",
    ON_MY_USER_CONTEXT_CHANGE = "onMyUserContextChange",
    ON_PARTICIPANT_CHANGE = "onParticipantChange",
    ON_REACTION = "onReaction",
    ON_SEND_APP_INVITATION = "sendAppInvitation",
    ON_SHARE_APP = "shareApp",
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
    ON_SHARE_COMPUTER_AUDIO = "onShareComputerAudio"
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
 * _inMeeting_	The app is running in the right side panel of a meeting.
 *
 * _inImmersive_	The app is running in immersive mode, occupying the main meeting window.
 *
 * _inWebinar_	The app is running is in a webinar.
 *
 * _inMainClient_	The app is running is in the main client.
 *
 * _inPhone_	The app is running in the right side panel of Zoom Phone Client.
 *
 * _inCollaborate_	The app is running in Collaborate mode.
 *
 * _inDigitalSignage_ The app is running in DigitalSignage
 *
 * @category Core
 */
declare type RunningContext = 'inMeeting' | 'inImmersive' | 'inWebinar' | 'inMainClient' | 'inPhone' | 'inCollaborate' | 'inCamera' | 'inDigitalSignage';
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
    /**
     * @hidden
     * (Supported starting in client version 5.11.0)
     * the product that this app is being run on
     * */
    product?: 'desktop' | 'mobile' | 'personalZoomRoom' | 'web' | 'sharedZoomRoom';
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
declare type Apis = 'addBreakoutRoom' | 'allowParticipantToRecord' | 'assignParticipantsToBreakoutRoom' | 'assignParticipantToBreakoutRoom' | 'authorize' | 'changeBreakoutRoom' | 'clearImage' | 'clearParticipant' | 'clearWebView' | 'closeBreakoutRooms' | 'closeChannel' | 'closeLobby' | 'closeRenderingContext' | 'cloudRecording' | 'configureBreakoutRooms' | 'connect' | 'createBreakoutRooms' | 'deleteBreakoutRoom' | 'drawImage' | 'drawParticipant' | 'drawWebView' | 'endCollaborate' | 'endSyncData' | 'executeOnZoomAction' | 'expandApp' | 'getBreakoutRoomList' | 'getImmersiveViewContext' | 'getMeetingContext' | 'getMeetingJoinUrl' | 'getMeetingParticipants' | 'getMeetingUUID' | 'getOnZoomProperties' | 'getPairingStatus' | 'getRecordingContext' | 'getRunningContext' | 'getScreenshot' | 'getSupportedJsApis' | 'getUserContext' | 'getUserMediaAudio' | 'getUserMediaVideo' | 'joinCollaborate' | 'joinOnZoomEvent' | 'joinZoomRoom' | 'launchAppInMeeting' | 'leaveCollaborate' | 'listCameras' | 'onActiveSpeakerChange' | 'onAppPopout' | 'onAuthenticate' | 'onAuthorized' | 'onShareScreen' | 'onShareComputerAudio' | 'onBreakoutRoomChange' | 'onCloseAppForParticipants' | 'onCloudRecording' | 'onCollaborateChange' | 'onConnect' | 'onExpandApp' | 'onExtendedProcessing' | 'onFeedbackReaction' | 'onImmersiveViewChange' | 'onMeeting' | 'onMeetingConfigChanged' | 'onMessage' | 'onMyActiveSpeakerChange' | 'onMyMediaChange' | 'onMyReaction' | 'onMyUserContextChange' | 'onOnZoomJoinStatusChange' | 'onPairingStatusChange' | 'onParticipantChange' | 'onReaction' | 'onRemoveFeedbackReaction' | 'onRunningContextChange' | 'onSendAppInvitation' | 'onShareApp' | 'openBreakoutRooms' | 'openChannel' | 'openDM' | 'openUrl' | 'postMessage' | 'promptAuthorize' | 'pushState' | 'removeImmersiveView' | 'removeVirtualBackground' | 'removeVirtualForeground' | 'renameBreakoutRoom' | 'runRenderingContext' | 'sendAppInvitation' | 'sendAppInvitationToAllParticipants' | 'sendAppInvitationToMeetingOwner' | 'setCamera' | 'setImmersiveView' | 'setUserMediaAudio' | 'setUserMediaVideo' | 'setVideoMirrorEffect' | 'setVirtualBackground' | 'setVirtualForeground' | 'shareApp' | 'shareComputerAudio' | 'showAppInvitationDialog' | 'showNotification' | 'startCollaborate' | 'toggleParticipantMediaAudio' | 'onInviteCollaboration' | 'getAppContext' | 'getAudioState' | 'setAudioState' | 'getVideoState' | 'setVideoState' | 'addParticipantSpotlight' | 'removeParticipantSpotlights' | 'getParticipantSpotlights' | 'addParticipantPins' | 'removeParticipantPins' | 'setFeedbackReaction' | 'removeFeedbackReaction' | 'removeAllFeedbackReaction' | 'allowAttendeesToSpeak' | 'disallowAttendeesToSpeak' | 'removeWebinarAttendees' | 'setAudioSettings' | 'getAudioSettings' | 'getIncomingParticipantAudioState' | 'setIncomingParticipantAudioState' | 'onIncomingParticipantAudioChange' | 'setVideoSettings' | 'getVideoSettings' | 'promptShareScreen' | 'showMeetingInvitationDialog' | 'onGalleryPageChange' | 'setGalleryPage' | 'getGalleryPage';
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
    primaryButtonText?: 'Open' | 'Accept' | 'Submit' | 'Run' | 'OK' | (string & {});
    secondaryButtonText?: 'Ignore' | 'Exit' | 'Close' | 'No' | 'Stop' | (string & {});
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
    /** decrypted app context data */
    /** the context type where the app is opened, could be 'panel', 'meeting', or 'webinar' */
    typ: string;
    /** string, the Zoom user id who opens the app */
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
 * @category Meeting Actions
 */
declare type SetAudioSettingsOptions = {
    speakerDeviceId?: string;
    outputVolume?: number;
    microphoneDeviceId?: string;
    audioProfile?: 'zoomOptimizedAudio' | 'originalSound';
    originalSound?: boolean;
    backgroundNoiseSuppression?: 'auto' | 'low' | 'medium' | 'high';
};
/**
 * At least one property of this type is required to exist
 *
 * @category Meeting Actions
 */
declare type SetVideoSettingsOptions = {
    hdVideo?: boolean;
    displayParticipantNames?: boolean;
    hideNonVideoParticipants?: boolean;
};
/**
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
    audioProfile: 'zoomOptimizedAudio' | 'originalSound';
    originalSound: boolean;
    backgroundNoiseSuppression: 'auto' | 'low' | 'medium' | 'high';
};
/**
 * @category Meeting Actions
 */
declare type GetVideoSettingsResponse = {
    hdVideo: boolean;
    displayParticipantNames: boolean;
    hideNonVideoParticipants: boolean;
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
 * `zoomSdk.config` response object. Read more about [zoomSdk.config](https://marketplace.zoom.us/docs/zoom-apps/js-sdk/reference/)
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
 * - Create your first Zoom App following these [steps](https://marketplace.zoom.us/docs/zoom-apps/getstarted).
 * - To help you start developing Zoom Apps we also provide sample reference [apps](https://marketplace.zoom.us/docs/zoom-apps/referenceapp#quick-start-reference-apps).
 * - Watch [How To Create a Zoom App](https://www.youtube.com/watch?v=otlyDxnU-RI) and [How To Configure the Basic Zoom App](https://www.youtube.com/watch?v=SS87nqO9ScQ).
 * - Discover more learning [resources](https://marketplace.zoom.us/docs/zoom-apps/introduction) for Zoom Apps Development.
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
    callZoomApi(apiName: string, data?: NativeApiRequestData, timeout?: number): Promise<any>;
    /**
     *
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
    config({ capabilities, popoutSize, size, version, }: ConfigOptions): Promise<ConfigResponse>;
    /**
     * @zoomClientVersion 5.6.7
     * Returns an array of APIs and events supported by the current running context.
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.getSupportedJsApis();
     * ```
     *
     * @category Core
     */
    getSupportedJsApis(): Promise<GetSupportedJsApisResponse>;
    /**
     * @zoomClientVersion 5.6.7
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
     *
     * @category Core
     */
    openUrl(options: OpenUrlOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @category Layers
     */
    setVirtualBackground(options: VirtualBackgroundOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.9.0
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
     * @category Layers
     */
    setVirtualForeground(options: VirtualForegroundOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.9.0
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
     * @zoomClientVersion 5.6.7
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
     *
     * @category Invitations & Notifications
     */
    showNotification(options: NotificationOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.6.7
     * The cloud recording API allows you to control cloud recording actions during a meeting.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.cloudRecording({ action: "start" });
     * ```
     *
     * @category Recording
     */
    cloudRecording(options: CloudRecordingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.6.7
     * Screenshare current app. Optionally share sound as well.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.shareApp({ action: "start", withSound: true });
     * ```
     *
     * @category Sharing
     */
    shareApp(options: ShareAppOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     *
     *
     * @category Invitations & Notifications
     */
    sendAppInvitation(options: SendAppInvitationOptions): Promise<AppInvitationResponse>;
    /**
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
     * The API can only be called in meeting. Allows the App to communicate with the instance of the app running on the main client.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.connect()
     * ```
     * @category App Instances Communication
     */
    connect(): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.6.7
     * Send a message with the current state of the mirrored app. The structure of the payload depends on the needs of the app.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.postMessage({ JSON })
     * ```
     * @category App Instances Communication
     */
    postMessage(options: JSONObject): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.7.3
     * Tells the client to end the data communication between connected apps. Note that the client will close the connection between the apps when endSyncData is called or 10 seconds after the onMeeting event with event.action == 'ended' is received, whichever comes first.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * ```
     * await zoomSdk.endSyncData()
     * ```
     * @category App Instances Communication
     */
    endSyncData(): Promise<void>;
    /**
     * @zoomClientVersion 5.8.3
     * Allow a specific participant to start a local recording. This API will trigger a pop-up consent dialog in the client to let the host allow or not allow.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * This API is not available in webinars.
     * ```
     * await zoomSdk.allowParticipantToRecord({
     *   participantUUID: 'xxxx',
     *   action: "grant"
     * })
     * ```
     *
     * This API requires `participantUUID`
     *
     * @category Recording
     */
    allowParticipantToRecord(options: AllowParticipantToRecordOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.8.3
     * Starts a new meeting or joins an existing meeting and launches the app in the meeting.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.launchAppInMeeting({ joinURL: 'xxx' })
     * ```
     *
     * |                      | with joinURL  |	without joinURL|
     * | -------------------- | ------------- | -------- |
     * | inMainClient |	Joins meeting associated with the `joinURL` and launches app in it | Starts a new meeting and launches app in it |
     *
     * @category Core
     */
    launchAppInMeeting(options?: LaunchAppInMeetingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.7.3
     * Shows client participant selection dialog window for sending an app invitation.
     *
     * Triggers client built in participant selection UI, so that apps running in non-owner context that do not have screen names can invite specific users.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * ```
     * await zoomSdk.showAppInvitationDialog();
     * ```
     *
     * @category Invitations & Notifications
     */
    showAppInvitationDialog(): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.7.3
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
     * @zoomClientVersion 5.7.6
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
     * @zoomClientVersion 5.9.0
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
     * @zoomClientVersion 5.9.0
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
     * @zoomClientVersion 5.9.0
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
     * @zoomClientVersion 5.9.0
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
     * @zoomClientVersion 5.9.0
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
     * @zoomClientVersion 5.9.0
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
     * @zoomClientVersion 5.10.6
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
     * @zoomClientVersion 5.10.6
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
     * This event occurs when the popout/pop-in button is clicked on the app window.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category App Window
     */
    onAppPopout(handler: GenericEventHandler<OnAppPopoutEvent>): void;
    /**
     * @zoomClientVersion 5.6.7
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
     * @zoomClientVersion 5.6.7
     * In order to maintain state after a meeting, the instance of the app that is running in the meeting must communicate with the instance of the app running in the main client. The following events facilitate that process. For more information, see [an example of this process](https://marketplace.zoom.us/docs/beta-docs/zoom-apps/guides/maintaining-state/).
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
     * @zoomClientVersion 5.6.7
     * In order to maintain state after a meeting, the instance of the app that is running in the meeting must communicate with the instance of the app running in the main client. The following events facilitate that process. For more information, see [an example of this process](https://marketplace.zoom.us/docs/beta-docs/zoom-apps/guides/maintaining-state/).
     *
     * Receive a sent message from the mirrored app. The structure of the payload depends on the needs of the app.
     *
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: Yes
     *
     * @category App Instances Communication
     */
    onMessage(handler: GenericEventHandler<OnMessageEvent>): void;
    /**
     * @zoomClientVersion 5.6.7
     * In order to maintain state after a meeting, the instance of the app that is running in the meeting must communicate with the instance of the app running in the main client. The following events facilitate that process. For more information, see [an example of this process](https://marketplace.zoom.us/docs/beta-docs/zoom-apps/guides/maintaining-state/).
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
     * @zoomClientVersion 5.8.6
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
     * @zoomClientVersion 5.8.3
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
     * @zoomClientVersion 5.10.0
     * The event is triggered when changes such as start, end, leave or join happen in Collaborate mode. This method informs the app when the host or co-hosts start or end a collaboration, and when meeting participants leave or join a collaboration.
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
     *  @zoomClientVersion 5.10.0
     *  *Supported roles*: Host, Co-Host, Participant, Panelist
     *
     *  *Supports Guest Mode*: No
     *
     * @category Collaborate
     */
    onRunningContextChange(handler: GenericEventHandler<OnRunningContextChangeEvent>): void;
    /**
     * @zoomClientVersion 5.7.3
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
     * @zoomClientVersion 5.7.3
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
     * @zoomClientVersion 5.7.3
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
     * @zoomClientVersion 5.9.0
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
     * @zoomClientVersion 5.9.0
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
     * @zoomClientVersion 5.13.5
     * This event triggers when a user in the meeting starts or stops sharing their screen.
     *
     *  *Supported roles*: Host, Co-Host, Panelist, Participant, and Attendee
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Scope label*: Product Usage
     *
     * *Product*: desktop, zoomRoomController
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope hierarchy*: zoomapp:inmeeting
     *
     * @category Meeting Actions
     */
    onShareScreen(handler: GenericEventHandler<OnShareScreenEvent>): void;
    /**
     * @zoomClientVersion 5.13.5
     * This event triggers when a user in the meeting starts or stops sharing their computer audio or screen with audio.
     *
     *  *Supported roles*: Host, Co-Host, Panelist, Participant, and Attendee
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Scope label*: Product Usage
     *
     * *Product*: desktop, zoomRoomController
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope hierarchy*: zoomapp:inmeeting
     *
     * @category Meeting Actions
     */
    onShareComputerAudio(handler: GenericEventHandler<OnShareComputerAudioEvent>): void;
    /**
     * @zoomClientVersion 5.9.3
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
     * @zoomClientVersion 5.11.0
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
     * @zoomClientVersion 5.13.5
     *
     * Event triggered when a participant triggers a feedback.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Participant Profile & Contact Information
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * @category Reactions
     */
    onFeedbackReaction(handler: GenericEventHandler<OnFeedbackReactionEvent>): void;
    /**
     * @zoomClientVersion 5.13.5
     *
     * Event triggered when subscribed participant removes a feedback.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Participant Profile & Contact Information
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * @category Reactions
     */
    onRemoveFeedbackReaction(handler: GenericEventHandler<OnRemoveFeedbackReactionEvent>): void;
    /**
     * @zoomClientVersion 5.12.6
     * Notifies the app about the incoming audio status change for the participants.
     *
     * *Running context*: inMeeting
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Read Scopes: Device Information
     *
     * *Scope hierarchy*: zoomapps.client
     *
     * @category Meeting Actions
     */
    onIncomingParticipantAudioChange(handler: GenericEventHandler<OnIncomingParticipantAudioChangeEvent>): void;
    /**
     * @zoomClientVersion 5.13.10
     *
     * Triggers when the user changes their gallery view page or `setGalleryPage` method is fired.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Read Scopes: functional
     *
     * *Product*: desktop
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * @category Meeting Views
     */
    onGalleryPageChange(handler: GenericEventHandler<OnGalleryPageChangeEvent>): void;
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
     * @zoomClientVersion 5.8.6
     * Deletes all existing breakout rooms and creates new ones. Response is same as getBreakoutRoomList.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * @category Breakout Rooms
     */
    createBreakoutRooms(options: CreateBreakoutRoomsOptions): Promise<BreakoutRoomsResponse>;
    /**
     * @zoomClientVersion 5.8.6
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
     * @category Breakout Rooms
     */
    configureBreakoutRooms(options: ConfigureBreakoutRoomsOptions): Promise<ConfigureBreakoutRoomsResponse>;
    /**
     * @zoomClientVersion 5.8.6
     * Open breakout rooms.
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * @category Breakout Rooms
     */
    openBreakoutRooms(): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.8.6
     * Close breakout rooms.
     *
     *  *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * @category Breakout Rooms
     */
    closeBreakoutRooms(): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.9.3
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
     * @category Breakout Rooms
     */
    getBreakoutRoomList(): Promise<BreakoutRoomsResponse>;
    /**
     * @zoomClientVersion 5.8.6
     * Add one more breakout room. This method is allowed only when breakout rooms are closed. Returns UUID of newly created breakout room.
     *
     *  *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * @category Breakout Rooms
     */
    addBreakoutRoom(options: AddBreakoutRoomOptions): Promise<Uuid>;
    /**
     * @zoomClientVersion 5.8.6
     * Delete one breakout room. This method is allowed only when breakout rooms are closed.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * @category Breakout Rooms
     */
    deleteBreakoutRoom(options: Uuid): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.8.6
     * Renames a breakout room. This method is allowed only when breakout rooms are closed.
     *
     *  *Supported roles*: Host, Co-Host
     *
     *  *Supports Guest Mode*: No
     *
     * @category Breakout Rooms
     */
    renameBreakoutRoom(options: RenameBreakoutRoomOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.9.0
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
     * @category Breakout Rooms
     */
    assignParticipantToBreakoutRoom(options: AssignParticipantToBreakoutRoomOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.8.6
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
     * @category Breakout Rooms
     */
    changeBreakoutRoom(options: ChangeBreakoutRoomOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.10.0
     * Starts Collaborate mode in a meeting. Can be initiated by Hosts or Co-Hosts. Use the optional shareScreen parameter to opt out of sharing the Host’s app screen with participants as a preview or when participants ignore the Collaborate invite.
     *
     *  *Supported roles*: Host, Co-Host
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
     *
     * @category Collaborate
     */
    startCollaborate(options: StartCollaborateOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.10.0
     * Ends Collaborate mode in a meeting. Can be initiated by hosts or co-hosts.
     *
     *  *Supported roles*: Host, Co-Host
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
     * @category Collaborate
     */
    endCollaborate(): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.10.0
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
     * @category Collaborate
     */
    leaveCollaborate(): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.10.0
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
     * @category Collaborate
     */
    joinCollaborate(): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.10.0
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
     * @zoomClientVersion 5.10.6
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
     * @zoomClientVersion 5.11.6
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
     * @zoomClientVersion 5.11.6
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
     * @zoomClientVersion 5.11.6
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
     * @zoomClientVersion 5.11.6
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
     * @zoomClientVersion 5.10.3
     * Allows hosts and co-hosts to mute and unmute all, or specific, meeting participants. The action doesn't affect the person initiating the request.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Scope label*: Manage Devices
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.webinar
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
     * @category Meeting Actions
     */
    toggleParticipantMediaAudio(options: ToggleParticipantMediaAudioOptions): Promise<GeneralMessageResponse>;
    /**
     * **Beta** API may undergo some changes
     * @zoomClientVersion 5.11.3
     *
     * This API returns app context token that contains signed app context data for secure backend validation.
     * See https://marketplace.zoom.us/docs/zoom-apps/zoomappcontext for more details.
     *
     * *Running context*: all
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope hierarchy*: zoomapps.meetings /  zoomapps.meetings.content
     *
     * ```
     * zoomSdk.getAppContext()
     * .then((appContext) => console.log(appContext))
     * .catch((err) => console.log(err))
     * ```
     *
     * @category Core
     */
    getAppContext(): Promise<GetAppContextResponse>;
    /**
     * @zoomClientVersion 5.12.6
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
     * *Scope hierarchy*: zoomapps.meetings /  zoomapps.meetings.content
     *
     * ```
     * zoomSdk.shareComputerAudio({ action: start })
     * .then((response) => console.log(response)) // { message: success }
     * .catch((err) => console.log(err))
     * ```
     *
     * @category Sharing
     */
    shareComputerAudio(options: ShareComputerAudioOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.12.6
     *
     * Add one participant to the current spotlight, without overwriting the current set of participants in the spotlight.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Scope label*: Write: Manage Content
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
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
     * @category Meeting Actions
     */
    addParticipantSpotlight(options: AddParticipantSpotlightOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.12.6
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
     * *Scope label*: Write: Manage Content
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
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
     * @zoomClientVersion 5.12.6
     *
     * Returns an array of participants who are currently in the spotlight.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Content
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
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
     * @zoomClientVersion 5.12.6
     *
     * The functionality of this API is to help add participants on a Zoom Meeting to pins.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Read Scopes: Content
     *
     * *Scope hierarchy*: zoomapps.meetings /  zoomapps.meetings.content
     *
     * ```
     * zoomSdk.addParticipantPins( {participantUUIDs: [ participantUUID1, ... ], secondaryDisplay: true|false })
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * @category Meeting Actions
     */
    addParticipantPins(options: ParticipantPinOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.12.6
     *
     * The functionality of this API is to help remove participants on a Zoom Meeting from pins.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Read Scopes: Content
     *
     * *Scope hierarchy*: zoomapps.meetings /  zoomapps.meetings.content
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
     * @zoomClientVersion 5.12.6
     *
     * Enable participant to set their feedback reactions.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Write Scopes: Manage Content
     *
     * *Scope hierarchy*: zoomapps.meetings /  zoomapps.meetings.content
     *
     * ```
     * zoomSdk.setFeedbackReaction( { feedback: 'yes' } )
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     *
     * @category Reactions
     */
    setFeedbackReaction(options: FeedbackReactionOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.12.6
     *
     * Removes own feedback that is currently set.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Write Scopes: Manage Content
     *
     * *Scope hierarchy*: zoomapps.meetings /  zoomapps.meetings.content
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
     * @zoomClientVersion 5.12.6
     *
     * Removes feedback of all participants in the meeting.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Scope label*: Write Scopes: Manage Content, Manage Participants
     *
     * *Scope hierarchy*: zoomapps.webinar / zoomapps.webinar.content
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
     * @zoomClientVersion 5.12.6
     *
     * This API permits Hosts and Co-Hosts to allow Webinar Attendees to speak.
     *
     * *Running context*: inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Scope label*: Write Scopes: Manage Content, Manage Participants
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * ```
     * zoomSdk.allowAttendeesToSpeak( {participantUUIDs: [ participantUUID1, ... ]})
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * @category Webinar-only Actions
     */
    allowAttendeesToSpeak(options: AttendeeSpeakingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.12.6
     *
     * This API permits Hosts and Co-Hosts to disallow Webinar Attendees to speak.
     *
     * *Running context*: inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Scope label*: Write Scopes: Manage Content, Manage Participants
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * ```
     * zoomSdk.disallowAttendeesToSpeak( {participantUUIDs: [ participantUUID1, ... ]})
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * @category Webinar-only Actions
     */
    disallowAttendeesToSpeak(options: AttendeeSpeakingOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.12.6
     *
     * This API permits Hosts and Co-Hosts to eject Attendees from a Webinar.
     *
     * *Running context*: inWebinar
     *
     * *Supported roles*: Host, Co-Host
     *
     * *Supports Guest Mode*: No
     *
     * *Scope label*: Write Scopes: Manage Participants
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * ```
     * zoomSdk.removeWebinarAttendees( {participantUUIDs: [ participantUUID1, ... ]})
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * @category Webinar-only Actions
     */
    removeWebinarAttendees(options: RemoveWebinarAttendeeOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.12.6
     *
     * The functionality of this API is to retrieve incoming speaker audio status for all or selected participants.
     *
     * *Running context*: inMeeting
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Read Scopes: Device Information
     *
     * *Scope hierarchy*: zoomapps.client
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
     * @zoomClientVersion 5.12.6
     *
     * The functionality of this API is to toggle on/off incoming speaker audio for all or selected participants.
     *
     * *Running context*: inMeeting
     *
     * *Supported roles*: Host, Co-Host, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Write Scopes: Manage Devices
     *
     * *Scope hierarchy*: zoomapps.client
     *
     * ```
     * zoomSdk.setIncomingParticipantAudioState({participantUUIDs: [ participantUUID1, ... ], audio: true|false})
     * .then((response) => console.log(response))
     * .catch((err) => console.log(err))
     * ```
     * @category Meeting Actions
     */
    setIncomingParticipantAudioState(options: SetIncomingParticipantAudioStateOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.13.0
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
     * *Scope label*: Write Scope: Manage Settings
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * ```
     * await zoomSdk.setVideoSettings({hdVideo: true})
     * ```
     *
     * @category Meeting Actions
     */
    setVideoSettings(options: SetVideoSettingsOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.13.0
     *
     * Retrieves the user’s current video settings . The API retrieves only the video settings that can be changed by setVideoSettings
     *
     * The API is available in inMainClient running context from client version 5.13.5
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Running context*: inMainClient, inMeeting, inImmersive, inWebinar, inCollaborate, inCamera
     *
     * *Scope label*: Read Scopes: Settings
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * ```
     *  await zoomSdk.getVideoSettings()
     * ```
     * @category Meeting Actions
     */
    getVideoSettings(): Promise<GetVideoSettingsResponse>;
    /**
     * @zoomClientVersion 5.13.0
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
     * *Scope label*: Write Scopes: Manage Settings
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * ```
     * await zoomSdk.setAudioSettings({originalSound: true})
     * ```
     *
     * @category Meeting Actions
     */
    setAudioSettings(options: SetAudioSettingsOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.13.0
     *
     * Retrieves the current audio settings of the user. It retrieves only the audio settings that can be changed by setAudioSettings
     *
     * The API is available in inMainClient running context from client version 5.13.5
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Running context*: inMainClient, inMeeting, inImmersive, inCollaborate, inCamera, inWebinar
     *
     * *Scope label*: Read Scopes: Settings
     *
     * *Supports Guest Mode*: Yes
     *
     * *Product*: Desktop
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * ```
     * await zoomSdk.getAudioSettings()
     * ```
     * @category Meeting Actions
     */
    getAudioSettings(): Promise<GetAudioSettingsResponse>;
    /**
     * @zoomClientVersion 5.13.5
     *
     * Called by any participant to open the share screen modal.
     *
     * *Running context*: inMeeting, inWebinar
     *
     * *Supported roles*: Host, Co-Host, Participant, and Panelist
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Read Scopes: Product Usage
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * *Product*: Desktop
     *
     * ```
     * await zoomSdk.promptShareScreen()
     * ```
     * @category Sharing
     */
    promptShareScreen(options?: PromptShareScreenOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.13.10
     *
     * Called by any participant to open the invite-people modal.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera
     *
     * *Supported roles*: Host, Co-host, Panelist, Participant
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Read Scopes: Product Usage
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * *Product*: Desktop, Mobile
     *
     * ```
     * await zoomSdk.showMeetingInvitationDialog()
     * ```
     * @category Invitations & Notifications
     */
    showMeetingInvitationDialog(): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.13.10
     *
     * Changes the local meeting screen to a page number in the gallery view.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Write Scopes: Manage Settings
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * @category Meeting Views
     */
    setGalleryPage(options: SetGalleryPageOptions): Promise<GeneralMessageResponse>;
    /**
     * @zoomClientVersion 5.13.10
     *
     * Returns the current gallery page and the total number of gallery pages for the user.
     *
     * *Running context*: inMeeting, inWebinar, inImmersive, inCamera, inCollaborate
     *
     * *Supported roles*: Host, Co-Host, Participant, Panelist, Attendee
     *
     * *Supports Guest Mode*: Yes
     *
     * *Scope label*: Write Scopes: Manage Settings
     *
     * *Scope hierarchy*: zoomapps.meetings / zoomapps.meetings.content
     *
     * *Product*: desktop
     *
     * @category Meeting Views
     */
    getGalleryPage(): Promise<GetGalleryPageResponse>;
}

declare const _default: ZoomSdk;

export { AddBreakoutRoomOptions, AddParticipantSpotlightOptions, AllowParticipantToRecordOptions, Apis, AppInvitationResponse, AssignParticipantToBreakoutRoomOptions, AttendeeSpeakingOptions, AudioMedia, AuthObject, AuthorizeOptions, BreakOutRoomParticipant, BreakoutRoomAssignmentMethods, BreakoutRoomsCreated, BreakoutRoomsParticipantsAssigned, BreakoutRoomsParticipantsJoined, BreakoutRoomsParticipantsLeft, BreakoutRoomsResponse, BreakoutRoomsUpdated, ChangeBreakoutRoomOptions, ClearImageOptions, ClearParticipantOptions, ClearWebViewOptions, CloudRecordingOptions, ConfigOptions, ConfigResponse, ConfigSize, ConfigureBreakoutRoomsOptions, ConfigureBreakoutRoomsResponse, CreateBreakoutRoomsOptions, DecryptedAppContextResponse, DrawImageOptions, DrawImageResponse, DrawParticipantOptions, DrawWebViewOptions, ExpandAppOptions, FeedbackReactionOptions, FeedbackReactions, GeneralMessage, GeneralMessageResponse, GenericEventHandler, GetAppContextResponse, GetAudioSettingsResponse, GetAudioStateResponse, GetGalleryPageResponse, GetIncomingParticipantAudioStateOptions, GetIncomingParticipantAudioStateResponse, GetMeetingContextResponse, GetMeetingJoinUrlResponse, GetMeetingParticipantsResponse, GetMeetingUUIDResponse, GetParticipantSpotlightsResponse, GetRecordingContextResponse, GetSupportedJsApisResponse, GetUserContextResponse, GetVideoSettingsResponse, GetVideoStateResponse, JSONObject, JSONValue, LaunchAppInMeetingOptions, ListCamerasResponse, NativeApiRequest, NativeApiRequestData, NativeApiResponseData, NativeConfigOptions, NativeMessage, NativeMessageData, NotificationOptions$1 as NotificationOptions, OnActiveSpeakerChangeEvent, OnActiveSpeakerChangeUserType, OnAppPopoutEvent, OnAuthorizedEvent, OnBreakoutRoomChangeEvent, OnCloudRecordingEvent, OnCollaborateChangeEvent, OnConnectEvent, OnExpandAppEvent, OnFeedbackReactionEvent, OnGalleryPageChangeEvent, OnIncomingParticipantAudioChangeEvent, OnMeetingEvent, OnMessageEvent, OnMyActiveSpeakerChangeEvent, OnMyMediaChangeEvent, OnMyReactionEvent, OnMyUserContextChangeEvent, OnParticipantChangeEvent, OnParticipantChangeParticipantType, OnReactionEvent, OnRemoveFeedbackReactionEvent, OnRenderedAppOpenedEvent, OnRunningContextChangeEvent, OnSendAppInvitationEvent, OnShareAppEvent, OnShareComputerAudioEvent, OnShareScreenEvent, OpenUrlOptions, Participant, ParticipantCutoutShape, ParticipantPinOptions, PixelValue, PromptShareScreenOptions, RemoveParticipantSpotlightsOptions, RemoveWebinarAttendeeOptions, RenameBreakoutRoomOptions, RenderingContextView, RunRenderingContextOptions, RunningContext, RunningContextResponse, SdkOptions, SdkVersion, SendAppInvitationOptions, SetAudioSettingsOptions, SetAudioStateOptions, SetCameraOptions, SetGalleryPageOptions, SetIncomingParticipantAudioStateOptions, SetVideoMirrorEffectOptions, SetVideoSettingsOptions, SetVideoStateOptions, ShareAppOptions, ShareComputerAudioOptions, StartCollaborateOptions, ToggleParticipantMediaAudioOptions, Uuid, VideoMedia, VirtualBackgroundOptions, VirtualForegroundOptions, _default as default, onMeetingConfigChangedEvent };
