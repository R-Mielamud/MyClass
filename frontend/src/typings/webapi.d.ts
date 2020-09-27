interface Identified {
    id: number;
}

namespace WebApi.Entity {
    interface User extends Identified {
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        avatar?: string;
    }

    interface Class extends Identified {
        name: string;
        key: string;
        color: string;
        text_color: string;
        join_key: string;
        join_key_teacher: string;
        teachers: User[];
        students: User[];
        avatar?: string;
    }
}

namespace WebApi.Specific {
    interface AuthResult {
        jwt_token: string;
        user: WebApi.Entity.User;
    }
}
