export type UserRole = 'admin' | 'staff'

export class User {

    public id!: number
    public name!: string
    public email!: string
    public password!: string
    public role!: UserRole
    public createdAt!: Date
    public updatedAt!: Date

    constructor(props: Partial<User>){
        Object.assign(this, props)
    }

}