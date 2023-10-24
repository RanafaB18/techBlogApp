export const variant = {
    signHidden: {
        opacity: 0,
        translateX: "-300px",
    },
    signExit: {
        translateX: "-300px",
        transition: {
            duration: .3
        }
    },
    loginExit: {
        translateX: "300px",
        transition: {
            duration: .3
        }
    },
    loginHidden: {
        opacity: 0,
        translateX: "300px",
    },
    signVisible: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: .3
        }
    },
    loginVisible: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: .3
        }
    }
}
