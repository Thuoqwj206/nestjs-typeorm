class UserCreateDTO {
    username: string
    password: string
    email: string
    phone: string
    rank: Rank
}

enum Rank {
    Silver = 'Silver',
    Bronze = 'Bronze',
    Gold = 'Gold',
}