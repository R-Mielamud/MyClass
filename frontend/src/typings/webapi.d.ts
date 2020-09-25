interface Identified {
    id: number;
}

namespace WebApi.Entity {
    interface User extends Identified {
        email: string;
        password: string;
        first_name: string;
        last_name: string;
    }
}

namespace WebApi.Specific {
    interface AuthResult {
        jwt_token: string;
        user: WebApi.Entity.User;
    }
}
