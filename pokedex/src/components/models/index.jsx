class Pokemon {
    constructor(number, name, type, types, photo, stats, base_stats, ability, abilities) {
        this.number = number;
        this.name = name;
        this.type = type;
        this.types = types || [];
        this.photo = photo;
        this.stats = stats || [];
        this.base_stats = base_stats;
        this.ability = ability;
        this.abilities = abilities || [];
    }
}

export default Pokemon;