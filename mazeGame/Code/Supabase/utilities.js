let username;

export const setUsername = (newUsername) => {
    username = newUsername;
}

export const getUsername = () => {
    return username;
}

window.setUsername = setUsername;
window.getUsername = getUsername;