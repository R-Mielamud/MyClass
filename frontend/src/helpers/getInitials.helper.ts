export default function getInitials(user: WebApi.Entity.User) {
    return user.first_name[0] + user.last_name[0];
}
