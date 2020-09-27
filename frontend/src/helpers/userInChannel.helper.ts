export default function userInChannel(userId: number, channel: WebApi.Entity.Channel) {
    const admin = channel.creator.id === userId;
    const member = channel.members.reduce((acc, currentUser) => acc || currentUser.id === userId, false);

    return admin || member;
}
