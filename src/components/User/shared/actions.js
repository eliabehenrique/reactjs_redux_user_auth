export const Types = {
    list: "user/ALL",
    edit: "user/Edit"
}

export function getAllUser(list) {
    return {
        type: Types.list,
        payload: list
    }
}

export function editUser(user) {
    return {
        type: Types.edit,
        payload: user
    }
}