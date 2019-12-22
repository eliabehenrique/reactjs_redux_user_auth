export const Types = {
    NEWUSER: "signup/NEWUSER"
};

export function newUser(payload) {
    return {
        type: Types.NEWUSER,
        payload
    }
}