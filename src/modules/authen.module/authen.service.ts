import { User } from "src/models";
import { UsersController } from "../user.module/user.controller";
import jwt from 'jsonwebtoken'
export class AuthService {
    async registerUser(body: User): Promise<any> {

        const { email, fullName, password } = body;
        try {
            const user = UsersController.findAll()
            const existingUser = await User.findOne({ where: { username } });
            if (existingUser) {
                return false;
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                username,
                fullName,
                password: hashedPassword,
                inviteId,
            });
            return { id: newUser.id, username: newUser.username };
        } catch (error) {
            console.error('Error registering user:', error);
            return { isSuccess: false };
        }
    }

    async loginUser(body: IUserInstance) {
        const { username, password } = body;
        const user = await User.findOne({ where: { username: username } });
        if (!user || user.isActive === false) {
            return { isSuccess: false, isUsername: true };
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return { isSuccess: false, isPassword: true };
        }
        if (user && validPassword) {
            const token = await jwt.sign(
                {
                    id: user.id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_ACCESS_KEY as string,
                { expiresIn: process.env.JWT_TIME }
            );

            return { isSuccess: true, data: { user, token } };
        }
    }

    async logoutUser(token: string) {
        console.log(token)
    }
}
