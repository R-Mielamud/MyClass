export default function getUsername(user: WebApi.Entity.User) {
    return `${user.first_name} ${user.last_name}`;
}
