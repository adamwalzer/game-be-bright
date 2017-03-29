export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video-screen"
        >
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}fr-2.png`} />
            <skoash.Component ref="center" className="center">
                <skoash.Component ref="frame" className="frame video">
                    <skoash.Video ref="video" src="video.html" />
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
