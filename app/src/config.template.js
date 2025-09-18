'use strict';
const packageJson = require('../../package.json');
module.exports = {
    brand: {
        htmlInjection: true,
        app: {
            language: 'en',
            name: 'WinkWink',
            title: '<h1>😉 WinkWink</h1>Private video calls just for us.<br />Sweet, Simple, Secure.',
            description:
                'One click and boom—we’re face to face. No downloads, no logins, just you and me sharing smiles, chats, and screens.',
            joinDescription: 'Pick a cute room name.<br />I’ll be waiting 💕',
            joinButtonLabel: 'JOIN OUR CALL',
            joinLastLabel: 'Last time we were here:',
        },
        og: {
            type: 'app-webrtc',
            siteName: 'WinkWink',
            title: 'Hey… join me on WinkWink 😉',
            description:
                'Our cozy little place for real-time video calls, laughs, and late-night rants.',
            image: '/images/winkwink-preview.png',
            url: 'https://winkwink.local',
        },
        site: {
            shortcutIcon: '../images/winkwink-logo.svg',
            appleTouchIcon: '../images/winkwink-logo.svg',
            landingTitle: 'WinkWink • Just us, in HD 💖',
            newCallTitle: 'Start a WinkWink moment 💕',
            newCallRoomTitle: 'Pick a room name. <br />Share link. <br />Hop in.',
            newCallRoomDescription:
                "Every room has its own private link. Pick a name, share it, and let the magic happen.",
            loginTitle: 'WinkWink - Private login required.',
            clientTitle: 'WinkWink Video Call & Chat Room',
            privacyPolicyTitle: 'WinkWink - Privacy Promise',
            stunTurnTitle: 'Connection Test',
            notFoundTitle: 'WinkWink - Lost? This page is empty 💀',
        },
        html: {
            topSponsors: false,
            features: false,
            browsers: false,
            teams: false,
            tryEasier: false,
            poweredBy: false,
            sponsors: false,
            advertisers: false,
            footer: true,
        },
        about: {
            imageUrl: '../images/winkwink-logo.gif',
            title: `WinkWink P2P v${packageJson.version}`,
            html: `
                <span>Made with ❤️ just for us</span>
                <hr />
                <span>&copy; 2025 WinkWink, ours forever</span>
                <hr />
            `,
        },
        widget: {
            enabled: false,
            roomId: 'support-room',
            theme: 'dark',
            widgetState: 'minimized',
            widgetType: 'support',
            supportWidget: {
                position: 'top-right',
                expertImages: [],
                buttons: {},
                checkOnlineStatus: false,
                isOnline: false,
                customMessages: {},
            },
        },
    },
    buttons: {
        main: {
            showShareQr: true,
            showShareRoomBtn: true,
            showFullScreenBtn: true,
            showAudioBtn: true,
            showVideoBtn: true,
            showScreenBtn: true,
            showRecordStreamBtn: true,
            showChatRoomBtn: true,
            showRoomEmojiPickerBtn: true,
            showSnapshotRoomBtn: true,
            showFileShareBtn: true,
            showMySettingsBtn: true,
            showAboutBtn: true,
        },
        chat: {
            showTogglePinBtn: true,
            showMaxBtn: true,
            showSaveMessageBtn: true,
            showMarkDownBtn: true,
            showFileShareBtn: true,
            showShareVideoAudioBtn: true,
            showParticipantsBtn: true,
        },
        remote: {
            showAudioVolume: true,
            audioBtnClickAllowed: true,
            videoBtnClickAllowed: true,
            showVideoPipBtn: true,
            showSnapShotBtn: true,
            showFileShareBtn: true,
            showShareVideoAudioBtn: true,
            showPrivateMessageBtn: true,
            showVideoFocusBtn: true,
        },
        local: {
            showVideoPipBtn: true,
            showSnapShotBtn: true,
            showVideoCircleBtn: true,
        },
    },
    webhook: {
        enabled: false,
        url: 'http://localhost:8888/webhook-endpoint',
    },
};